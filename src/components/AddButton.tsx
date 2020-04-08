import { createStyles, Fab, makeStyles, Theme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';

interface OwnProps {
    onClick: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "fixed",
            right: 50,
            bottom: 50
        }
    }),
);

const AddButton: React.FC<OwnProps> = (props) => {
    const classes = useStyles();
    return (
        <Fab color="secondary" aria-label="add" className={classes.root} onClick={props.onClick}>
            <AddIcon />
        </Fab>
    )
}

export default AddButton;