(function($) {

  $(document).ready(function() {
      $('#detailTable').DataTable( {
          "ajax": "data-table.json",
          "columns": [
              { "data": "accident" },
              { "data": "name" },
              { "data": "race" },
              { "data": "age" },
              { "data": "relation" },
              { "data": "address" }
          ]
      } );
  } );

}(jQuery));