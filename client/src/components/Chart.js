import ReactEcharts from "echarts-for-react";

const Chart = (options) => {
    console.log("Received options:", options)
    if (!options) {
        return(console.log('empty options'))
    }

    return (
      
        <ReactEcharts
          //option = {options}  
        //   option={{
        //     xAxis: options.xAxis,
        //     yAxis: options.yAxis,
        //     series: options.series,
        //     title: options.title,
        //     tooltip: options.tooltip,
        //     legend: options.legend
        //   }} 
          option={{
            // title: {
            //     text: options.title.text,
            //     subtext: options.title.subtext
            // },
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{ 
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
            }]
          }} 
        />
    )
}

export default Chart
