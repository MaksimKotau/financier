import React from 'react';
import { Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Button } from '@material-ui/core';

interface OwnProps {
    title?: string;
    text: string;
    onApply: () => void;
    onCancel: () => void;
}

const ModalDialog: React.FC<OwnProps> = (props) => {
    return (
        <Dialog
            open
        >
            <DialogTitle>
                {props.title ? props.title : "Alert"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onCancel} color="primary">
                    Disagree
                </Button>
                <Button onClick={props.onApply} color="primary">
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ModalDialog;