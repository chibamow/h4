// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: '天氣'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            format: '{value}°'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: '台北',
        marker: {
            symbol: 'square'
        },
        data: [16.6,17.2,19.0,22.5,25.8,28.3,30.1,29.7,27.8,24.7,22.0,18.2]

    }, {
        name: '台中',
        marker: {
            symbol: 'diamond'
        },
        data: [17.0,17.7,20.1,23.5,26.4,28.1,28.9,28.4,27.8,25.5,22.6,18.7]
    },{
        name: '新竹',
        marker: {
            symbol: 'diamond'
        },
        data: [15.7,16.0,18.0,21.9,25.2,27.9,29.3,28.9,27.3,24.4,21.5,17.7]
    }]
});