$(document).ready(function() {
    console.log("ready!");

    loadData();

    function loadData() {
        $.ajax({
            method: "GET",
            url: "js/water.json",
            dataType: "json",
            success: parseData
        });
    }

    function parseData(data) {
      console.log(data);
      var chart = c3.generate({
          data: {
              json: data,
              keys: {
                  x: 'Year',
                  value: ["Consumption"]
              },
              type: 'line'
          },
          axis: {
              x: {
                  type: 'category'
              }
          },
          legend: {
              show:false
          }
      });
    }
});
