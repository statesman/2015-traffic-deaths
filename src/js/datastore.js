(function($, _) {

  'use strict';

  // setting up template for detail
  var tpl = _.template(
    "<h3><%= name %></h3>" +
    "<h2><%= address %></h2>" +
    "<p><%= age %></p>"
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
        race: featured.race,
        gender: featured.gender,
        age: featured.age,
        date: featured.accident, // make sure this is the adjusted one
        relation: featured.relation,
        address: featured.address,
        description: featured.description,
        thumb: featured.thumb
      }));
    });

  });

}(jQuery, _));