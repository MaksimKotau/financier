import React from 'react'
import { WidgetType } from '../widgets/widgetDefinitions'
import CardBase from '../widgets/WidgetBase';
import { Pie, } from 'react-chartjs-2'
import { getAllExpensesByCategories } from '../../../services/balanceService';
import moment from 'moment';
import { chartColors } from './chartColors'


interface OwnProps {
    id: string;
    type: WidgetType;
}

const ExpensesByCategory: React.FC<OwnProps> = ({ id, type }) => {
    const expenses = getAllExpensesByCategories(moment().startOf('month').format('YYYY-MM-DD'), moment().endOf('month').format('YYYY-MM-DD'))
    const summ = expenses.map(el => el.value).reduce((a, b) => a + b, 0)
    const data = {
        labels: expenses.map(el => `${el.categoryName} (${((el.value / summ) * 100).toFixed(1)}%)`),
        datasets: [{
            data: expenses.map(el => el.value),
            backgroundColor: chartColors,
            hoverBackgroundColor: chartColors
        }]
    }
    return (
        <CardBase id={id} type={type} render={() => {
            return <Pie
                data={data}
                options={{
                    maintainAspectRatio: false,
                    responsive: true
                }}
            />
        }} />
    )
}

export default ExpensesByCategory;