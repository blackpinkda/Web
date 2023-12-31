// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1","2","3","4","5","6","7","8","9","10",
              "11","12","13","14","15","16","17","18","19","20",
              "21","22","23","24","25","26","27","28","29","30","31"],
    datasets: [{
      label: "정자림",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [5.5, 4.5, 3, 7.5, 8,5.5, 4.5, 3, 7.5, 8,
      5.5, 4.5, 3, 7.5, 8,5.5, 4.5, 3, 7.5, 8,
      5.5, 4.5, 3, 7.5, 8,5.5, 4.5, 3, 7.5, 8, 0]
    },
    {
      label: "박성현",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(117,2, 216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(117,2, 216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(117,2, 216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [20, 7.5, 17.5, 16.5, 7, 20, 7.5, 17.5, 16.5, 7, 20, 7.5, 17.5, 16.5, 7, 20, 7.5, 17.5, 16.5, 7, 20, 7.5, 17.5, 16.5, 7, 20, 7.5, 17.5, 16.5, 7, 0]
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 31
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 56,
          maxTicksLimit: 10
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
