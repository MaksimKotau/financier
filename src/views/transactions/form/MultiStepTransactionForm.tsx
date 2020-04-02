import { Button, createStyles, Dialog, makeStyles, Step, StepButton, StepLabel, Stepper, Theme } from '@material-ui/core';
import React from 'react';
import TransactionDTO from '../../../data/DTO/TransactionDTO';
import { AvailableTransactionType, TransactionError, TransferDTO, TransferError } from './TransactionForm';
import TypeChooser from './TypeChooser';
import CategoryChooser from './CategoryChooser';
import WalletChooser from './AccountChooser';
import InformationChooser from './InformationChooser';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            minWidth: 350,
            maxWidth: 600,
            width: 400,
            height: 480,
            display: "flex",
            flexDirection: "column",
            padding: 10
        },
        buttonsContentContainer: {
            display: "flex",
            flexDirection: "column",
            height: "100%"
        },
        buttonsContainer: {
            height: 60,
            paddingTop: 10,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            boxSizing: "border-box",
            alignItems: "flex-end"
        },
        contentContainer: {
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }
    }),
);

interface OwnProps {
    transactionType: AvailableTransactionType;
    transaction: TransactionDTO;
    transfer: TransferDTO;
    transferErrors: TransferError;
    transactionErrors: TransactionError;
    onTransactionTypeChange: (type: AvailableTransactionType) => void;
    onTransactionChange: (name: keyof TransactionDTO, value: any) => void;
    onTransferChange: (name: keyof TransferDTO, value: any) => void;
    onClose: () => void;
    onApply: () => void;
    canApply: boolean;
}

const getSteps = (type: AvailableTransactionType) => {
    if (type === "Transfer")
        return ['Type', 'Wallet', 'Information'];
    return ['Type', 'Category', 'Wallet', 'Information'];
}



const MultiStepTransactionForm: React.FC<OwnProps> = (props) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps(props.transactionType);
    const handleStep = (step: number) => () => {
        setActiveStep(step)
    }
    const handleNext = () => {
        if (activeStep === (steps.length - 1)) {
            props.onClose()
        } else {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };



    const getStepContent = (stepIndex: number) => {
        switch (steps[stepIndex]) {
            case "Type":
                return <TypeChooser
                    type={props.transactionType}
                    onTypeChange={props.onTransactionTypeChange}
                />;
            case "Category":
                return <CategoryChooser
                    selectedTransaction={props.transaction}
                    onSelectedTransactionChange={props.onTransactionChange}
                    transactionType={props.transactionType}
                    transactionErrors={props.transactionErrors}
                />;
            case "Wallet":
                return <WalletChooser
                    transactionType={props.transactionType}
                    selectedTransfer={props.transfer}
                    selectedTransaction={props.transaction}
                    onTransactionChange={props.onTransactionChange}
                    onTransferChange={props.onTransferChange}
                    transactionErrors={props.transactionErrors}
                    transferErrors={props.transferErrors}
                />;
            case "Information":
                return <InformationChooser
                    transactionType={props.transactionType}
                    selectedTransfer={props.transfer}
                    selectedTransaction={props.transaction}
                    onTransactionChange={props.onTransactionChange}
                    onTransferChange={props.onTransferChange}
                    transactionError={props.transactionErrors}
                    transferErrors={props.transferErrors}
                />;
            default:
                return 'Unknown stepIndex';
        }
    }

    return (
        <Dialog open={true}>
            <div className={classes.container}>
                <Stepper activeStep={activeStep} nonLinear alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepButton onClick={handleStep(index)}>
                                <StepLabel>{label}</StepLabel>
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <div className={classes.buttonsContentContainer}>
                    <div className={classes.contentContainer}>
                        {getStepContent(activeStep)}
                    </div>
                    <div className={classes.buttonsContainer}>
                        <div style={{ flex: 1 }}>
                            {activeStep > 0 && <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                variant="contained"
                                color="primary"
                            >
                                Back
                                    </Button>}
                        </div>
                        <div style={{ flex: 1, textAlign: "center" }}>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={props.onClose}
                            >
                                Cancel
                            </Button>
                        </div>
                        <div style={{ flex: 1, textAlign: "right" }}>
                            {/* <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Apply' : 'Next'}

                            </Button> */}
                            {getNextButton(activeStep === steps.length - 1, props.canApply, handleNext, props.onApply)}
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default MultiStepTransactionForm;

const getNextButton = (lastStep: boolean, canApply: boolean, handleNext: () => void, handleApply: () => void): JSX.Element => {
    const text = lastStep ? 'Apply' : 'Next';
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={lastStep ? handleApply : handleNext}
            disabled = {(!canApply && lastStep) }
        >
            {text}
        </Button>
    )

}