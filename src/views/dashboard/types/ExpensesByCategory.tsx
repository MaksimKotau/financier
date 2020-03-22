import React from 'react'
import { WidgetType } from '../widgets/widgetDefinitions'
import CardBase from '../widgets/WidgetBase';
import ChartistGraph from 'react-chartist';
import {getAllExpensesByCategories} from '../../../services/balanceService';
import moment from 'moment';


interface OwnProps {
    id: string;
    type: WidgetType;
}

const ExpensesByCategory: React.FC<OwnProps> = ({ id, type}) => {
    const expenses = getAllExpensesByCategories(moment().startOf('month').format('YYYY-MM-DD'), moment().endOf('month').format('YYYY-MM-DD'))
    const summ = expenses.map(el => el.value).reduce((a,b) => a + b, 0)
    const data = {
        labels: expenses.map(el => `${el.categoryName} (${((el.value / summ) * 100).toFixed(1)}%)`),
        series: expenses.map(el => el.value)
    }
    return (
        <CardBase id={id} type={type} render={() => {
            return <ChartistGraph
                data={data}
                type={'Pie'}
                style={{height: "100%"}}
            />
        }} />
    )
}

export default ExpensesByCategory;