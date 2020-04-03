import React from 'react';
import PieChartIcon from '@material-ui/icons/PieChart';
import BarChartIcon from '@material-ui/icons/BarChart';

export interface WidgetDefinition {
    title: string;
    description: string;
    icon: JSX.Element;
    widgetType: WidgetType;
    widgetCategory: WidgetCategory;
    height?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    width?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    maxWidth?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    maxHeight?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    minWidth?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    minHeight?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export enum WidgetType {
    AllExpensesByCategory = 1,
    AllExpensesByCategoryMonthly = 2,
    AllIncomesByCategory = 3,
    AllIncomesByCategoryMonthly = 4
}

export enum WidgetCategory {
    Income = "Income",
    Expenses = "Expenses",
    Accounts = "Accounts",
    Planning = "Planning"
}

export const widgetDefinitions: WidgetDefinition[] = [
    {
        title: "All expenses by category",
        description: "Expenses for all categories on Pie chart",
        icon: <PieChartIcon />,
        widgetType: WidgetType.AllExpensesByCategory,
        widgetCategory: WidgetCategory.Expenses,
        minHeight: 3,
        minWidth: 2,
        width: 3,
        height: 3
        
    },
    {
        title: "All expenses monthly",
        description: "Expenses for all Categories monthly",
        icon: <BarChartIcon />,
        widgetType: WidgetType.AllExpensesByCategoryMonthly,
        widgetCategory: WidgetCategory.Expenses,
        minHeight: 2,
        minWidth: 2,
        width: 3,
        height: 3
        
    },
    {
        title: "All Incomes by category",
        description: "Incomes for all categories on Pie chart",
        icon: <PieChartIcon />,
        widgetType: WidgetType.AllIncomesByCategory,
        widgetCategory: WidgetCategory.Income,
        minHeight: 3,
        minWidth: 3,
        width: 3,
        height: 3
        
    },
    {
        title: "All incomes monthly",
        description: "Incomes for all Categories monthly",
        icon: <BarChartIcon />,
        widgetType: WidgetType.AllIncomesByCategoryMonthly,
        widgetCategory: WidgetCategory.Income,
        minHeight: 3,
        minWidth: 3,
        width: 3,
        height: 3
        
    },
]

export function getWidgetParams(widgetType: WidgetType): undefined | WidgetDefinition{
    return widgetDefinitions.find(el => el.widgetType === widgetType);
}