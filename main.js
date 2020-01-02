window.onload = function () {

//Better to construct options first and then pass it as a parameter
var options = {
	animationEnabled: true,
	zoomEnabled: true,
	colorSet: "colorSet2",
	title:{
		text: "Ice Cream Sales vs Temperature"
	},
	axisX: {
		title:"Temperature (in °C)",      	
		suffix: "°C",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	axisY:{
		title: "Sales",
		includeZero: false,
		gridThickness: 0,
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	data: [{
		type: "scatter",
		toolTipContent: "<b>Temperature: </b>{x}°C<br/><b>Sales: </b>{y}",
		dataPoints: [
			{ x: 14.2, y: 215},
			{ x: 12.9, y: 175},
			{ x: 16.4, y: 325},
			{ x: 11.9, y: 185},
			{ x: 26.9, y: 614},
			{ x: 15.2, y: 332},
			{ x: 21.2, y: 392},
			{ x: 18.5, y: 406},
			{ x: 36.2, y: 496},
			{ x: 32.5, y: 464},
			{ x: 22.1, y: 522},
			{ x: 19.4, y: 412},
			{ x: 33.7, y: 415},
			{ x: 25.1, y: 614},          
			{ x: 34.9, y: 374},
			{ x: 28.7, y: 625},
			{ x: 37.7, y: 312},
			{ x: 23.4, y: 544},
			{ x: 31.4, y: 594},          
			{ x: 40.8, y: 262},
			{ x: 37.4, y: 312},
			{ x: 18.1, y: 421},
			{ x: 42.3, y: 202},
			{ x: 39.1, y: 302},
			{ x: 22.6, y: 445},
			{ x: 17.2, y: 408}
		]
	}]
};

$("#chartContainer").CanvasJSChart(options);
}
