import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Chart, ArcElement, Tooltip} from 'chart.js'
Chart.register(ArcElement, Tooltip);


function DoughnutChart(props) {

const data={ 
    labels:["Expense", "Income"],
    datasets: [{
        data: [Math.abs(props.expense), props.income],
        backgroundColor: [
            'rgb(255, 122, 138)',
            'rgb(193, 220, 138)',
          ]
    }]
}

    return (
        <div className="doughnut" style={{width: "300px"}}>
            <Doughnut 
                type= 'doughnut'
                data={data}
           
            />
        </div>
    )
}

export default DoughnutChart
