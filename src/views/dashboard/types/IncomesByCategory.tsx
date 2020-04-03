import React from 'react'
import { WidgetType } from '../widgets/widgetDefinitions'
import CardBase from '../widgets/WidgetBase';
import { Pie, } from 'react-chartjs-2'
import { getAllIncomesByCategories} from '../../../services/balanceService';
import moment from 'moment';
import { chartColors } from './chartColors'


interface OwnProps {
    id: string;
    type: WidgetType;
}

const IncomesByCategory: React.FC<OwnProps> = ({ id, type }) => {
    const incomes = getAllIncomesByCategories(moment().startOf('month').format('YYYY-MM-DD'), moment().endOf('month').format('YYYY-MM-DD'))
    const summ = incomes.map(el => el.value).reduce((a, b) => a + b, 0)
    const data = {
        labels: incomes.map(el => `${el.categoryName} (${((el.value / summ) * 100).toFixed(1)}%)`),
        datasets: [{
            data: incomes.map(el => el.value),
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
                    responsive: true,
                    // legend: {
                    //     onClick: (e: any, i: any) => console.log(i)
                    // }
                }}
            />
        }} />
    )
}

export default IncomesByCategory;