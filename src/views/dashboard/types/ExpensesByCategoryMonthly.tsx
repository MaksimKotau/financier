import React from 'react'
import { WidgetType } from '../widgets/widgetDefinitions'
import CardBase from '../widgets/WidgetBase';
import {getAllExpensesByCategoriesMonthly} from '../../../services/balanceService';
import moment from 'moment';
import { Bar } from 'react-chartjs-2'
import ColorChooser from './chartColors';

interface OwnProps {
    id: string;
    type: WidgetType;
}

const ExpensesByCategoryMonthly: React.FC<OwnProps> = ({id, type}) => {
    const palette = new ColorChooser();
    const data = getAllExpensesByCategoriesMonthly(moment().subtract(1, 'year').format("YYYY-MM-DD"),moment().format("YYYY-MM-DD"))
    const datasetsWithColors = data.datasets.map(el => {return {...el, backgroundColor: palette.getColor()}});
    data.datasets = datasetsWithColors;
    return (
        <CardBase id={id} type={type} render={() => {
            return <Bar
                data={data}
                options={{
                    maintainAspectRatio: false,
                    responsive: true
                }}
            />
        }} />
    )
}

export default ExpensesByCategoryMonthly;