const gulp = require('gulp');
const shell = require('gulp-shell')
const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const jeditor = require("gulp-json-editor");
const del = require('del');
const settings = require('./gulpsettings')
const jsftp = require('jsftp');
const zip = require('gulp-zip');
const puppeteer = require('puppeteer');

gulp.task('run-unit-tests', shell.task('CI=true npm test'));
gulp.task('build-npm-task', shell.task('npm run build'));
gulp.task('clean-build-directory', (done) => {
    del('./build/**/*');
    done();
})

gulp.task('zip', (done) => {
    gulp.src(['./build/**/*', '!./build/**/*.map'], { dot: true })
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('./build'))
    done();
}
)

gulp.task('set-application-version', (done) => {
    //reading version from ReleaseNotes.md
    console.log('Reading version from ReleaseNotes.md');
    let instream = fs.createReadStream('./ReleaseNotes.md');
    let outstream = new stream();
    let rl = readline.createInterface(instream, outstream);
    let regex = /[0-9]+\.[0-9]+\.[0-9]+/;
    let version = null;
    let licensFileName = './LICENSE.txt';
    rl.on('line', function (line) {
        let result = regex.exec(line);
        if (!version && result) {
            version = regex.exec(line)[0];
            console.log('Version readed successfully: ' + version);
        }
    });
    // On stream close after reading file ReleaseNotes.md
    rl.on('close', function () {
        let regexV = /REACT_APP_APPLICATION_VERSION="[0-9]+\.[0-9]+\.[0-9]+"/;
        // if version exist in ReleaseNotes.md
        if (version) {
            //writing version in file .env
            let envFile = './.env.production';
            console.log('Writing version in file .env.production ');
            fs.readFile(envFile, function (err, data) {
                if (err) throw err;
                data = data.toString();
                if (regexV.exec(data)) {
                    data = data.replace(regexV, `REACT_APP_APPLICATION_VERSION="${version}"`);
                } else {
                    data += `\nREACT_APP_APPLICATION_VERSION="${version}"\n`
                }
                fs.writeFile(envFile, data, function (err) {
                    err || console.log('Version replaced in file .env.production');
                });
            });
            //writing version and other props in file package.json
            console.log('Writing "version" and "author" in file package.json')
            gulp.src("./package.json")
                .pipe(jeditor({
                    'version': version,
                }))
                .pipe(gulp.dest("./"));
            console.log('"version" and "author" replaced in file package.json');

            //Create LICENS.txt file
            console.log('Creating new file LICENS.txt');
            fs.writeFile(licensFileName, "Maksim Kotau @" + new Date().getFullYear() + ". All right reserved.", function (err, data) {
                if (err) console.log(err);
                console.log("Successfully Written to File LICENSE.txt.");
            })
        }
    });
    done();
})

gulp.task('task-deploy', deploy)

function deploy(done) {
    const Ftp = new jsftp({
        host: settings.hostName,
        port: settings.hostPort,
        user: settings.user,
        pass: settings.password
    });
    Ftp.keepAlive(300000)
    Ftp.raw("cwd", settings.workDirectory, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.log('Directory changed')
        fs.readFile(settings.fileArchive, (err, buffer) => {
            if (err) {
                console.error(err);
            }
            else {
                Ftp.put(buffer, "archive.zip", (err) => {
                    if (err) {
                        console.error(err);
                    }
                    else {
                        console.log(settings.fileArchive + " - uploaded successfuly");
                        fs.readFile(settings.filePhpScript, (err, buffer) => {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                console.log('file reded successfully')
                                Ftp.put(buffer, "cleanFolder.php", (err) => {
                                    if (err) {
                                        console.error(err)
                                    } else {
                                        console.log(settings.filePhpScript + " - uploaded successfuly");
                                        (async () => {
                                            const browser = await puppeteer.launch();
                                            const page = await browser.newPage();
                                            await page.goto(settings.linkToExecutePhpScript);
                                            //await page.screenshot({path: 'example.png'});
                                            const pageContent = await page.content()
                                            await console.log(pageContent)
                                            await browser.close();
                                            await Ftp.raw('dele', './cleanFolder.php', (err, data) => {
                                                if (err) {
                                                    console.error(err)
                                                } else {
                                                    console.log('cleanFolder.php deleted successfully')
                                                }
                                                Ftp.raw("quit", (err, data) => {
                                                    if (err) {
                                                        return console.error(err);
                                                    }
                                                    console.log('Deploy finished successfully');
                                                    done();
                                                })
                                            })
                                            done();
                                        })();
                                    }
                                })
                            }
                        })
                    }
                });
            }
        })
    })
    done();
}

gulp.task('deploy-new-version', gulp.series('run-unit-tests', 'set-application-version', 'clean-build-directory', 'build-npm-task', 'zip', 'task-deploy'), (done) => {
    console.log('NEW VERSION DEPLOYED')
    done();
});
