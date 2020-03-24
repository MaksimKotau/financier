import React, { useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import WidgetChooser from './WidgetChooser';
import WidgetFactory from './widgets/WidgetFactory';
import './styles/dashboardStyles.css';
import { Responsive, WidthProvider, Layouts, Layout } from 'react-grid-layout';
import AddButton from '../../components/AddButton';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '../../data/reducers';
import { saveLayouts } from '../../data/actions/dashboardActions';

const ResponsiveGridLayout = WidthProvider(Responsive);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            '& .react-grid-item.react-grid-placeholder': {
                background: theme.palette.secondary.light,
                border: '4px dashed white',

            }
        },
    }),
);

const Dashboard = () => {
    const [showChooser, setShowChooser] = useState<boolean>(false);
    const dispatch = useDispatch();
    const classes = useStyles();
    const layouts = useSelector((state: GlobalState) => state.dashboard.layouts);
    const widgetTypes = useSelector((state: GlobalState) => state.dashboard.widgetTypes);

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <ResponsiveGridLayout
                className={classes.container}
                style={{ width: "100%" }}
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                compactType={"vertical"}
                onLayoutChange={(layout: Layout[], allLayouts: Layouts) => {
                    saveLayouts(allLayouts)(dispatch);
                }}
            >
                {
                    widgetTypes.map(w => {
                        return (
                            <div key={w.id}>
                                <WidgetFactory id={w.id} type={w.type} />
                            </div>
                        )
                    })
                }
            </ResponsiveGridLayout>
            <WidgetChooser isOpen={showChooser} onClose={() => setShowChooser(false)} />
            <AddButton onClick={() => setShowChooser(true)} />
        </div>
    )
}

export default Dashboard;