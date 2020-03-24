import { ADD_WIDGET, REMOVE_WIDGET, SAVE_DASHBOARD_LAYOUT } from "../actions/actionTypes";
import { Layouts, Layout } from "react-grid-layout";
import { WidgetType } from "../../views/dashboard/widgets/widgetDefinitions";
import { AddWidgetAction, RemoveWidgetAction, SaveDashboardLayoutAction } from '../actions/dashboardActions';

export const availableLayoutBreakpoint = ["lg", "md", "sm", "xs", "xxs"];

const defaultLayout = [] as Layout[];

const initialState: DashboardState = {
    layouts: {
        lg: defaultLayout, 
        md: defaultLayout, 
        sm: defaultLayout, 
        xs: defaultLayout, 
        xxs: defaultLayout
    },
    widgetTypes: [] as WidgetTypeAssignation[]
}

type ActionType = AddWidgetAction | RemoveWidgetAction | SaveDashboardLayoutAction;
const ensureNever = (action: never) => action;

export default function (state: DashboardState = initialState, action: ActionType): DashboardState {
    let layouts: any = {};
    switch (action.type) {
        case SAVE_DASHBOARD_LAYOUT:
            return {
                ...state,
                layouts: action.layouts,
            }
        case ADD_WIDGET:
            layouts = {};
            for (let currBreakPoint of availableLayoutBreakpoint) {
                layouts[currBreakPoint] = [
                    ...(state.layouts as any)[currBreakPoint],
                    action.widget
                ];
            }
            return {
                ...state,
                layouts: layouts,
                widgetTypes: [
                    ...state.widgetTypes,
                    { id: action.widget.i, type: action.widgetType }
                ]
            }
        case REMOVE_WIDGET:
            layouts = {};
            for (let currBreakPoint of availableLayoutBreakpoint) {
                layouts[currBreakPoint] = [
                    ...((state.layouts as any)[currBreakPoint] as []).filter((curr: Layout) => curr.i !== action.id)
                ];
            }
            return {
                ...state,
                layouts: layouts,
                widgetTypes: [
                    ...state.widgetTypes.filter(current => action.id !== current.id),
                ]
            }
        default:
            ensureNever(action)
            return state;
        }
}


export interface WidgetTypeAssignation { 
    id: string;
    type: WidgetType;
}

export type DashboardState = {
    readonly layouts: Layouts,
    readonly widgetTypes: WidgetTypeAssignation[];
};