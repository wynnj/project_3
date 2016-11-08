$(document).ready(function() {
  console.log("ready!");
    $('#example').DataTable( {
        "ajax": 'data1.json'
    } );
} );
