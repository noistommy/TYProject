// "CarInOut", // 통영입출차량
// "CarFlow", // 차량통행량
// "IllegalParking", // 불법주정차
// "TideLevel", // 조위
// "RainFall", // 강수량
// "WindSpeed", // 풍속
// "SpecialReport", // 기상특보

var colorset = ['rgba(94,79,162,1)','rgba(255,173,76,1)', 'rgba(147,205,30,1)', 'rgba(123,155,245,1)', 'rgba(231,120,153,1)','rgba(30,185,205,1)', 'rgba(150,136,207,1)', 'rgba(110,194,96,1)','rgba(96,131,194,1)', 'rgba(205,30,92,1)' ];
var colorsetReverse = colorset.slice(0).reverse();

var colorset1 = ['rgba(205,30,92,1)', 'rgba(30,185,205,1)', 'rgba(110,194,96,1)','rgba(96,131,194,1)', 'rgba(205,30,92,1)', 'rgba(147,205,30,1)', 
'rgba(120,212,231,1)','rgba(222,143,192,1)', 'rgba(123,155,245,1)', 'rgba(231,120,153,1)'];


var colorsets = [
  colorset,
  colorsetReverse,
  colorset,
  colorset1,
  colorset,
  colorset1,
  colorset1,
  colorset1
]
var chartoptions = {
  bar: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        boxWidth: 12,
        fontSize: 10
      }
    },
    layout: {
      padding: {
        top: 20
      }
    },
    scales: {
      xAxes: [
        {
          barPercentage: 0.6,
          scaleLabel: {
            display: false,
            labelString: ""
          },
          gridLines: {
            display: false,
            zeroLineColor: "#fff"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 5
          },
          gridLines: {
            display: true,
            color: "rgba(84, 84, 84, .5)",
            zeroLineColor: "rgba(84, 84, 84, .8)",
            zeroLineWidth: 2,
            drawBorder: false
            // borderDash: [5, 2],
          },
          scaleLabel: {
            display: true,
            labelString: ""
          }
        }
      ]
    },
    responsive: true,
    maintainAspectRatio: false
  },
  line: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        boxWidth: 12,
        fontSize: 10
      }
    },
    layout: {
      padding: {
        top: 20
      }
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: false,
            labelString: ""
          },
          gridLines: {
            display: false,
            zeroLineColor: "#fff"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 5,
          },
          gridLines: {
            display: true,
            color: "rgba(84, 84, 84, .5)",
            zeroLineColor: "rgba(84, 84, 84, .8)",
            zeroLineWidth: 2,
            drawBorder: false
            // borderDash: [5, 2],
          },
          scaleLabel: {
            display: true,
            labelString: ""
          }
        }
      ]
    },
    responsive: true,
    maintainAspectRatio: false
  },
  horizontalBar: {
    legend: {
      display: false,
      position: "bottom",
      labels: {
        boxWidth: 12,
        fontSize: 10
      }
    },
    layout: {
      padding: {
        top: 20
      }
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "(대)"
          },
          gridLines: {
            display: true,
            zeroLineColor: "#fff"
          },
          ticks: {
            beginAtZero: true,
            stepSize: 10
          }
        }
      ],
      yAxes: [
        {
          barPercentage: 0.8,
          gridLines: {
            display: false,
            color: "rgba(84, 84, 84, .5)",
            zeroLineColor: "rgba(84, 84, 84, .8)",
            zeroLineWidth: 2,
            drawBorder: false
            // borderDash: [5, 2],
          },
          scaleLabel: {
            display: true,
            labelString: ""
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    responsive: true,
    maintainAspectRatio: false
  },
  doughnut: {
    legend: {
      display: true,
      position: "right",
      labels: {
        boxWidth: 12,
        fontSize: 10
      }
    },
    layout: {
      padding: {
        top: 20
      }
    },
    cutoutPercentage: 50,
    responsive: true,
    maintainAspectRatio: false
  }
};



var chartConfig = [
  {
    pId: "P1",
    id: "CarInOut",
    name: "차량입출입",
    type: "bar",
    ttype: "DM",
    options: {
      scales: {
        xAxes: [
          {
            barPercentage: 0.8
          }
        ]
      }
    }
  },
  {
    pId: "P2",
    id: "CarFlow",
    name: "차량통행량",
    type: "bar",
    ttype: "DM",
    options: {
      scales: {
        xAxes: [
          {
            barPercentage: 0.8
          }
        ]
      },
      responsive: true,
      legendCallback: function(chart) {
        var legendHtml = [];
        legendHtml.push("<ul>");

        var item = chart.data.datasets;
        console.log(item);
        if (item != undefined) {
          for (var i = 0; i < item.length; i++) {
            legendHtml.push("<li>");
            legendHtml.push(
              '<span class="chart-legend" style="background-color:' +
                colorset1[i] +
                '"></span>'
            );
            legendHtml.push(
              '<span class="chart-legend-label-text">' +
                item[i].label +
                "</span>"
            );
            legendHtml.push("</li>");
          }

          legendHtml.push("</ul>");
        }

        return legendHtml.join("");
      }
    }
  },
  {
    pId: "P3",
    id: "IllegalParking",
    name: "불법주정차",
    type: "horizontalBar",
    ttype: "M",
    options: {
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "(대)"
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10
            }
          }
        ],
        yAxes: [
          {
            barPercentage: 0.8,
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  },
  {
    pId: "P4",
    id: "TideLevel",
    name: "조위",
    type: "line",
    ttype: "RM",
    options: {
    }
  },
  {
    pId: "P5",
    id: "Rainfall",
    name: "강우량",
    type: "bar",
    ttype: "DM",
    options: {
      scales: {
        xAxes: [
          {
            barPercentage: 0.8
          }
        ]
      }
    }
  },
  {
    pId: "P6",
    // id: "graph_006",
    id: "WindSpeed",
    name: "풍속",
    type: "line",
    ttype: "HD",
    options: {
		scales: {
			yAxes: [{
				ticks: {
					max: 10,
				}
			}]
		}
    }
  },
  {
    pId: "P7",
    // id: "graph_007",
    id: "SpecialReport",
    name: "기상특보",
    type: "doughnut",
    ttype: "M",
    options: {
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 12
        }
      },
      cutoutPercentage: 50,
    }
  }
];
