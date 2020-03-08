import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

export interface Action {
    icon: JSX.Element;
    name: string;
    action: (event: any) => void;
}

interface OwnProps {
    hidden?: boolean;
    elements: Action[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        speedDial: {
            position: 'absolute',
            bottom: 50,
            right: 50,
        },
    })
);

const MultiActions: React.FC<OwnProps> = (props) => {
    const {hidden, elements} = props
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };
    return (
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="up"
          FabProps={{
            color: "secondary"
          }}
        >
          {elements.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.action}
            />
          ))}
        </SpeedDial>
    )
}

export default MultiActions;