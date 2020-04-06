import React from 'react';
import { WidgetType } from '../widgets/widgetDefinitions';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../../data/reducers';
import AccountType from '../../../data/enums/AccountType';
import { calculateCurrentBalance } from '../../../services/balanceService';
import AccountDTO from '../../../data/DTO/AccountDTO';
import { chartColors } from './chartColors';
import CardBase from '../widgets/WidgetBase';
import { Pie, } from 'react-chartjs-2'

interface OwnProps {
    id: string;
    type: WidgetType;
}

interface AccountView extends AccountDTO {
    balance: number
}

const AllDebitAccounts: React.FC<OwnProps> = (props) => {
    const debitAccounts: AccountView[] = useSelector((state: GlobalState) => state.accounts
        .filter(el => el.type === AccountType.Debit)
        .map(a => {
            return { ...a, balance: calculateCurrentBalance(a.id) }
        })
    );
    const summ = debitAccounts.map(el => el.balance).reduce((a, b) => a + b, 0);
    const data = {
        labels: debitAccounts.map(el => `${el.name} (${((el.balance / summ) * 100).toFixed(1)}%)`),
        datasets: [
            {
                data: debitAccounts.map(el => el.balance),
                backgroundColor: chartColors,
                hoverBackgroundColor: chartColors
            }
        ]
    }

    return (
        <CardBase id={props.id} type={props.type} render={() => {
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
    );
}

export default AllDebitAccounts;