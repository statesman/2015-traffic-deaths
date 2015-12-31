(function($) {

  $(document).ready(function() {
      $('#detailTable').DataTable( {
          "ajax": "data-test-table.json",
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