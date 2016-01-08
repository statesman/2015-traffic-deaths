(function($) {

  // setting up datatables module data
  // link to data below should really come from map.data,
  // but I don't know how
  $(document).ready(function() {
      $('#detailTable').DataTable( {
          "ajax": "data-table.json", // link to the data
          "columns": [
              { "data": "date_time_converted" },
              { "data": "name" },
              { "data": "race" },
              { "data": "age" },
              { "data": "relation" },
              { "data": "address" }
          ]
      } );
  } );

}(jQuery));