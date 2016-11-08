var birth;

$(document).ready(function(){
  console.log("ready!");

  loadData();


  // jQuery(function($){
  //     $( '.menu-btn' ).click(function(){
  //       $('.responsive-menu').addClass('expand')
  //       $('.menu-btn').addClass('btn-none')
  //     })
  //
  //      $( '.close-btn' ).click(function(){
  //       $('.responsive-menu').removeClass('expand')
  //       $('.menu-btn').removeClass('btn-none')
  //     })
  //   });

  // document.getElementById("demo").innerHTML = Date();
//   var d = new Date("October 13, 2014 11:13:00");
// document.getElementById("demo").innerHTML = d;

});

function loadData() {
  $.ajax({
    method: "GET",
    url: "js/water.json",
    dataType: "JSON",
    success: parseData
  });
}

function parseData(data) {
  // console.log(data);

  data1 = ["Consumption"];
  data2 = ["Capita"];
  data3 = ["Year"];

  $.each(data.water, function(i, item){
    // console.log(i);
    // console.log(item);

    data1.push(parseFloat(item.Consumption));
    data2.push(parseFloat(item.Capita));
    data3.push(parseFloat(item.Year));

  });
  // console.log(data1);
  // console.log(data2);
  // console.log(data3);

  buildChart();
}

function buildChart() {
  var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [data3, data1]
    },
});
}


// var chart = c3.generate({
//     bindto: '#chart',
//     data: {
//       columns: [
//         ['data1', 30, 200, 100, 400, 150, 250],
//         ['data2', 50, 20, 10, 40, 15, 25]
//       ]
//     }
// });
// require.config({
//   baseUrl: '/js',
//   paths: {
//     d3: "http://d3js.org/d3.v3.min"
//   }
// });
//
// require(["d3", "c3"], function(d3, c3) {
//   c3.generate({
//
//   });
// });
