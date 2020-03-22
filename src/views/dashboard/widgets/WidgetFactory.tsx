import React from 'react';
import { WidgetType } from './widgetDefinitions';
import CurrectExpensesByCategory from '../types/ExpensesByCategory';

interface OwnProps {
    type: WidgetType;
    id: string;
}

const WidgetFactory: React.FC<OwnProps> = (props) => {
    switch(props.type){
        case WidgetType.AllExpensesByCategory:
            return <CurrectExpensesByCategory {...props}/>
        default:
            return null;
    }
}

export default WidgetFactory;