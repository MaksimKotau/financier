import React from 'react'
import { WidgetType } from '../widgets/widgetDefinitions';
import ColorChooser, {getTransparentColor} from './chartColors';
import { getAllTransactionsMonthly, DataRawsPeriodically } from '../../../services/balanceService';
import TransactionType from '../../../data/enums/TransactionType';
import moment from 'moment';
import CardBase from '../widgets/WidgetBase';
import { Bar, Line } from 'react-chartjs-2';

interface OwnProps {
    id: string;
    type: WidgetType;
}

const AllIncomeExpensesMonthly: React.FC<OwnProps> = (props) => {
    const palette = new ColorChooser();
    const incomeData = getAllTransactionsMonthly(moment().subtract(1, 'year').format("YYYY-MM-DD"), moment().format("YYYY-MM-DD"), TransactionType.Income)
    const expensesData = getAllTransactionsMonthly(moment().subtract(1, 'year').format("YYYY-MM-DD"), moment().format("YYYY-MM-DD"), TransactionType.Expenses)
    const allData: DataRawsPeriodically = {
        labels: incomeData.labels,
        datasets: [
            ...incomeData.datasets,
            ...expensesData.datasets
        ]
    }
    const colors = [palette.getFirstColor(), palette.getLastColor()];
    const datasetsWithColors = allData.datasets.map((el, i) => {return {...el, fill: true, borderColor: colors[i], backgroundColor: getTransparentColor(colors[i])}});
    allData.datasets = datasetsWithColors;
    return (
        <CardBase id={props.id} type={props.type} render={() => {
            return <Line
                data={allData}
                options={{
                    maintainAspectRatio: false,
                    responsive: true
                }}
            />
        }} />
    )
}

export default AllIncomeExpensesMonthly;