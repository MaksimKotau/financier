import React from 'react';
import { WidgetType } from './widgetDefinitions';
import CurrectExpensesByCategory from '../types/ExpensesByCategory';
import ExpensesByCategoryMonthly from '../types/ExpensesByCategoryMonthly';
import IncomesByCategory from '../types/IncomesByCategory';
import IncomesByCategoryMonthly from '../types/IncomesByCategoryMonthly';
import AllDebitAccounts from '../types/AllDebitAccounts';
import AllCreditAccounts from '../types/AllCreditAccounts';
import AllIncomeExpensesMonthly from '../types/AllIncomeExpensesMonthly';

interface OwnProps {
    type: WidgetType;
    id: string;
}

const WidgetFactory: React.FC<OwnProps> = (props) => {
    switch (props.type) {
        case WidgetType.AllExpensesByCategory:
            return <CurrectExpensesByCategory {...props} />
        case WidgetType.AllExpensesByCategoryMonthly:
            return <ExpensesByCategoryMonthly {...props} />
        case WidgetType.AllIncomesByCategory:
            return <IncomesByCategory {...props} />
        case WidgetType.AllIncomesByCategoryMonthly:
            return <IncomesByCategoryMonthly {...props} />
        case WidgetType.AllDebitAccountsBalance:
            return <AllDebitAccounts {...props} />
        case WidgetType.AllCreditAccountsBalance:
            return <AllCreditAccounts {...props} />
        case WidgetType.AllIncomeExpensesCompareMonthly:
            return <AllIncomeExpensesMonthly {...props} />  
        default:
            return null;
    }
}

export default WidgetFactory;