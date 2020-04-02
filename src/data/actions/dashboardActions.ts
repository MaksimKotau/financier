import { Layouts } from "react-grid-layout";
import { Action } from 'redux';
import uuidv4 from 'uuid/v4';
import { getWidgetParams, WidgetDefinition, WidgetType } from '../../views/dashboard/widgets/widgetDefinitions';
import { ADD_WIDGET, REMOVE_WIDGET, SAVE_DASHBOARD_LAYOUT } from './actionTypes';

type Widget = {
    y: number;
    x: number;
    w: number;
    h: number;
    i: string;
}

export interface AddWidgetAction extends Action<"ADD_WIDGET"> {
    widget: Widget,
    widgetType: WidgetType,
}

export interface RemoveWidgetAction extends Action<"REMOVE_WIDGET">{
    id: string;
}

export interface SaveDashboardLayoutAction extends Action<"SAVE_DASHBOARD_LAYOUT">{
    layouts: Layouts;
}

export function setAddWidgetAction(widgetType: WidgetType): AddWidgetAction {
    const definition: WidgetDefinition | undefined = getWidgetParams(widgetType);
    const height = definition && definition.height ? definition.height : 2;
    const width = definition && definition.width ? definition.width : 2;
    return {
        type: ADD_WIDGET,
        widgetType,
        widget: {
            i: uuidv4(),
            y: Infinity,
            h: height,
            w: width,
            x: 0,

        }
    }
}

export function setRemoveWidgetAction(id: string): RemoveWidgetAction {
    return {
        type: REMOVE_WIDGET,
        id
    }
}

export function setSaveLayoutsAction(layouts: Layouts): SaveDashboardLayoutAction {
    return {
        type: SAVE_DASHBOARD_LAYOUT,
        layouts
    }
}

export function addWidget(widgetType: WidgetType) {
    return (dispatch: any) => {
        dispatch(setAddWidgetAction(widgetType))
    }
}

export function removeWidget(id: string){
    return (dispatch: any) => {
        dispatch(setRemoveWidgetAction(id))
    }
}

export function saveLayouts(layouts: Layouts){
    return (dispatch: any) => {
        dispatch(setSaveLayoutsAction(layouts))
    }
}