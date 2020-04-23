<?php

$response = new stdClass();
$response->result = true;

$directory = './';
$scanned_directory = array_diff(scandir($directory), array('..', '.', 'cleanFolder.php', 'archive.zip'));
print_r($scanned_directory);

foreach ($scanned_directory as $value){
    delete_files($value);
}
extractZipArchive('archive.zip', './');

delete_files('archive.zip');

/* 
 * php delete function that deals with directories recursively
 */
function delete_files($target) {
    if(is_dir($target)){
        $files = glob( $target . '*', GLOB_MARK ); //GLOB_MARK adds a slash to directories returned

        foreach( $files as $file ){
            delete_files( $file );      
        }

        rmdir( $target );
    } elseif(is_file($target)) {
        unlink( $target );  
    }
};

function extractZipArchive($archive, $destination) {
    // Check if webserver supports unzipping.
    if (!class_exists('ZipArchive')) {
      echo('Error: Your PHP version does not support unzip functionality.');
      return;
    }

    $zip = new ZipArchive;

    // Check if archive is readable.
    if ($zip->open($archive) === TRUE) {
      // Check if destination is writable
      if (is_writeable($destination . '/')) {
        $zip->extractTo($destination);
        $zip->close();
        echo('Files unzipped successfully');
      }
      else {
        echo('Error: Directory not writeable by webserver.');
      }
    }
    else {
      echo('Error: Cannot read .zip archive.');
    }
  }

?>