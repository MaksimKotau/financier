import React from 'react'
import ChartistGraph from 'react-chartist';
import "../../../node_modules/chartist/dist/chartist.css"

const ExpensesPieChart: React.FC = (props) => {
    var biPolarBarChartData = {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [
          [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
        ]
      };
      var biPolarBarChartOptions = {
        high: 10,
        low: -10,
        axisX: {
          labelInterpolationFnc: function(value: number, index: number) {
            return index % 2 === 0 ? value : null;
          }
        }
      }

    return (
        <div>
            <ChartistGraph data={biPolarBarChartData} options={biPolarBarChartOptions} type={'Line'} />
        </div>
    )
}

export default ExpensesPieChart;