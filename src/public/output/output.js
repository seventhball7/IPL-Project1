// //Total matches per Year
fetch("./matchesPerYear.json")
  .then((response) => response.json())
  .then((data) => {
    let value = Object.entries(data);
    console.log(value);
    Highcharts.chart("matchesPlayedPerYear", {
      chart: {
        type: "column",
      },
      title: {
        text: "Matches Per Year ",
      },
      xAxis: {
        type: "category",
        labels: {
          rotation: -45,
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Total Matches",
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        pointFormat: "Total Matches: <b>{point.y}</b>",
      },
      series: [
        {
          name: "Matches",
          data: value,
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: "#FFFFFF",
            align: "right",
            format: "{point.y}", // one decimal
            y: 10, // 10 pixels down from the top
            style: {
              fontSize: "13px",
              fontFamily: "Verdana, sans-serif",
            },
          },
        },
      ],
    });
  });

// // Extra Runs in 2016
fetch("./extraRuns.json")
  .then((response) => response.json())
  .then((data) => {
    let key = Object.keys(data);
    let val = Object.values(data);
    let value = Object.entries(data);
    console.log(value);
    Highcharts.chart("ExtraRuns", {
      chart: {
        type: "column",
      },
      title: {
        text: "Extra Runs in 2016 ",
      },
      xAxis: {
        categories: key,
        labels: {
          rotation: -45,
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Extra Runs in 2016",
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        pointFormat: "Extra Runs: <b>{point.y}</b>",
      },
      series: [
        {
          name: "Matches",
          data: val,
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: "#FFFFFF",
            align: "right",
            format: "{point.y}", // one decimal
            y: 10, // 10 pixels down from the top
            style: {
              fontSize: "13px",
              fontFamily: "Verdana, sans-serif",
            },
          },
        },
      ],
    });
  });

//Economy Bowlers in 2015
fetch("./economyBowler.json")
  .then((response) => response.json())
  .then((data) => {
    let array = Object.entries(data);
    let key = Object.keys(data);
    Highcharts.chart("economybowlers", {
      chart: {
        type: "column",
      },
      title: {
        text: "Economical Bowlers in 2015",
      },

      accessibility: {
        announceNewData: {
          enabled: true,
        },
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        title: {
          text: "Average",
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: "{point.y}%",
          },
        },
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{point.key}</span><br>',
        pointFormat:
          '<span style="color:{point.color}">Average</span>: <b>{point.y:.2f}<br/>',
      },

      series: [
        {
          name: "Average",
          data: array,
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: "#FFFFFF",
            align: "right",
            format: "{point.y}", // one decimal
            y: 10, // 10 pixels down from the top
            style: {
              fontSize: "13px",
              fontFamily: "Verdana, sans-serif",
            },
          },
        },
      ],
    });
  });

//matches won per team

fetch("./matchesWonPerTeam.json")
  .then((response) => response.json())
  .then((data) => {
    let key = Object.keys(data);
    let values = [];
    let allTeams = [];

    for (let year in data) {
      for (let team in data[year]) {
        let find = allTeams.find((value) => {
          return value == team;
        });
        if (find == undefined) {
          allTeams.push(team);
        }
      }
    }
    // allTeams.sort();
    console.log(allTeams);
    for (let i of allTeams) {
      let newObject = {};
      newObject.name = i;
      newObject.data = [];
      values.push(newObject);
    }
    console.log(values);

    // Filling the array
    for (let teamName of allTeams) {
      for (let year in data) {
        if (data[year][teamName] == undefined) {
          for (let i in values) {
            if (values[i].name == teamName) {
              values[i].data.push(0); //if team has not played that year
            }
          }
        } else {
          let value = parseInt(data[year][teamName]);
          for (let i in values) {
            if (values[i].name == teamName) {
              values[i].data.push(value);
            }
          }
        }
      }
    }
    return { key, values };
  })
  .then((newData) => {
    Highcharts.chart("matcheswon", {
      chart: {
        type: "bar",
      },
      title: {
        text: "Matches Won Per Year",
      },
      xAxis: {
        categories: newData.key,
        title: {
          text: "Year",
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Number of matches",
          align: "high",
        },
        labels: {
          overflow: "justify",
        },
      },
      tooltip: {},
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
        shadow: true,
      },
      credits: {
        enabled: false,
      },
      series: newData.values,
    });
  });
