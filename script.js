var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [2.19,3.09,3.37,3.30,3.79,3.88,5.05,4.93,4.99,5.18]
    }],
    stroke:{
        curve: "smooth"
    },
    xaxis: {
      categories: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,]
    },
    labels:{
        show:false
    }
    
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();