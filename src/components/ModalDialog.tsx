import React from 'react';
import { Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Button } from '@material-ui/core';

interface OwnProps {
    title?: string;
    text: string;
    onApply: () => void;
    onCancel?: () => void;
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
                {props.onCancel && <Button onClick={props.onCancel} color="primary">
                    Cancel
                </Button>}
                <Button onClick={props.onApply} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ModalDialog;