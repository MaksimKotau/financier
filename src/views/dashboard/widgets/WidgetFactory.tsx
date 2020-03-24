import React from 'react';
import { WidgetType } from './widgetDefinitions';
import CurrectExpensesByCategory from '../types/ExpensesByCategory';
import ExpensesByCategoryMonthly from '../types/ExpensesByCategoryMonthly';

interface OwnProps {
    type: WidgetType;
    id: string;
}

const WidgetFactory: React.FC<OwnProps> = (props) => {
    switch(props.type){
        case WidgetType.AllExpensesByCategory:
            return <CurrectExpensesByCategory {...props}/>
        case WidgetType.AllExpensesByCategoryMonthly:
            return <ExpensesByCategoryMonthly {...props}/>
        default:
            return null;
    }
}

export default WidgetFactory;