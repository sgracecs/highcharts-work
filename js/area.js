$(function() {
  $('#hcContainer').highcharts({
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1WhjhjmE3Xba9hwNpu-YKRUdd2zJ6utrQ-XOJwwJyRuA',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      zoomType: 'xy',
      backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(500, 240, 164)'],
                [1, 'rgb(221, 219, 140)']
            ]
        },
      type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        },
      alignTicks: false

    },

    colors: ['#C9C8B8', '#393E42', '#393E42', '#393E42', '#393E42', '#393E42', '#C9AC4D', '#52496D', '#5AA992', '#887295', '#2576CE', '#aa266a'],
    // Chart Title and Subtitle
    title: {
      text: "Superbowl Attendance"
    },
    subtitle: {
      text: "because sports"
    },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text: "Sarah test | Source: OpenDataSoft"
    },
    // Chart Legend
    legend: {
      title: {
        text: 'Legend Title<br/><span style="font-size: 12px; color: #808080; font-weight: bold">(Click to hide)</span>'
      },
      align: 'left',
      verticalAlign: 'bottom',
      layout: 'vertical'
    },
    // Y Axis
    yAxis: {
      title: { 
        text: "Number of People Who Attended"
      },
    },
    // X Axis
    xAxis: {
      title: { 
        text: "Superbowl Number"
      },
    },
    // Additional Plot Options
    plotOptions:
    {
      area: {
        // stacking: null, // Normal bar graph
        stacking: "normal", // Stacked bar graph
        marker: {
          enabled: false,
          symbol: "square"
        }
      }
    }
  });
});
