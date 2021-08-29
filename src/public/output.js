 fetch("output/matchesPerYear.json")
.then((response)=>response.json())
.then((data)=>{
    let value=Object.entries(data);
    console.log(value);
    Highcharts.chart('matchesPlayedPerYear', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Matches Per Year '
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Matches'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Year: <b>{point.y}</b>'
        },
        series: [{
            name: 'Matches',
            data:
               value
            ,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
})

// Extra Runs in 2016
fetch("output/extraRuns.json")
.then((response)=>response.json())
.then((data)=>{
    let value=Object.entries(data);
    console.log(value);
    Highcharts.chart('ExtraRuns', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Extra Runs in 2016 '
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Extra Runs in 2016'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Year: <b>{point.y}</b>'
        },
        series: [{
            name: 'Matches',
            data:
               value
            ,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
})

//Economy Bowlers in 2015
fetch("output/economyBowler.json")
.then((response)=>response.json())
.then((data)=>{
    let value=Object.entries(data);
    console.log(value);
    Highcharts.chart('economybowlers', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Economy Bowlers 2015 '
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Economy Bowlers in 2015'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Year: <b>{point.y}</b>'
        },
        series: [{
            name: 'Matches',
            data:
               value
            ,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
})


