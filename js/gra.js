$(document).ready(function() {
    setInterval(() => {
    $.ajax({
        url : "./backend/datos.php",
        dataType : "json",
        success : function(result) {
            google.charts.load('current', {
                'packages' : [ 'corechart' ]
            });
            google.charts.setOnLoadCallback(function() {
                drawchart(result);
            });
        }
    });
}, 1000);
 

//Grafica

      function drawchart(result) {
       
			var data = new google.visualization.DataTable();
            data.addColumn('number', 'id');
            data.addColumn('number', 'status');
			var dataArray = [];
			$.each(result['data'], function(i, obj) {
				dataArray.push([parseInt(obj.id), parseInt(obj.status) ]);
			});

			data.addRows(dataArray);


			var barchart_options = {
				title : 'Datos potencia ',
				width : 400,
				height : 300,
				legend : 'none'
			};
			var barchart = new google.visualization.BarChart(document
					.getElementById('grafica'));
			barchart.draw(data, barchart_options);
		}
    });