(function($, _) {

  'use strict';

  // setting up template for detail
  var tpl = _.template(
    "<h3><%= name %></h3>" +
    "<h2><%= address %></h2>"
  );

  // defining div for detail
  var $detail = $('#detail');

  //using exising dataURL function from map.js for data
  $.getJSON(dataUrl, function(data) {

    // Setup event bindings for for detail
    map.markers.on('click', function(e) {
      var featured = _.findWhere(data, {
        id: e.layer.options.id
      });

      // pushing to the templage
      $detail.html(tpl({
        name: featured.name,
        address: featured.address
      }));
    });

  });

}(jQuery, _));