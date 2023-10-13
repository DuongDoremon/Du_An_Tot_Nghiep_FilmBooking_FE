window.onload = function () {
 
var chart = new CanvasJS.Chart("doanh-thu", {
	animationEnabled: true,  
	title:{
		text: "Thống kê doanh thu"
	},
	axisY: {
		title: "Units Sold",
		valueFormatString: "#0,,.",
		suffix: "mn",
		stripLines: [{
			value: 3366500,
			label: "Average"
		}]
	},
	data: [{
		yValueFormatString: "#,### Units",
		xValueFormatString: "YYYY",
		type: "spline",
		dataPoints: [
			{x: new Date(2002, 0,1), y: 2506000},
			{x: new Date(2003, 0,2), y: 2798000},
			{x: new Date(2004, 0), y: 3386000},
			{x: new Date(2005, 0), y: 6944000},
			{x: new Date(2006, 0), y: 6026000},
			{x: new Date(2007, 0), y: 2394000},
			{x: new Date(2008, 0), y: 1872000},
			{x: new Date(2009, 0), y: 2140000},
			{x: new Date(2010, 0), y: 7289000},
			{x: new Date(2011, 0), y: 4830000},
			{x: new Date(2012, 0), y: 2009000},
			{x: new Date(2013, 0), y: 2840000},
			{x: new Date(2014, 0), y: 2396000},
			{x: new Date(2015, 0), y: 1613000},
			{x: new Date(2016, 0), y: 2821000},
			{x: new Date(2017, 0), y: 2000000}
		]
	}]
});
  var chartKH = new CanvasJS.Chart("khach-hang", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Thống kê lượng khách hàng",
    },
    axisY: {
      title: "Reserves(MMbbl)",
    },
    data: [
      {
        type: "column",
        showInLegend: true,
        legendMarkerColor: "grey",
        legendText: "MMbbl = one million barrels",
        dataPoints: [
          { y: 300878, label: "Venezuela" },
          { y: 266455, label: "Saudi" },
          { y: 169709, label: "Canada" },
          { y: 158400, label: "Iran" },
          { y: 142503, label: "Iraq" },
          { y: 101500, label: "Kuwait" },
          { y: 97800, label: "UAE" },
          { y: 80000, label: "Russia" },
        ],
      },
    ],
  });
  chart.render();
  chartKH.render();
  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
};

// window.onload = function () {


// chart.render();

// }
