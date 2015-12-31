(function($, _) {

  'use strict';

  // setting up template for detail
  var tpl = _.template(
    '<div class="clearfix">' +
    '<h3 class="name"><%= name %></h3>' +
    '<img class="photo" src="<%= thumb %>" width="50%"/>' +
    '<p><%= race %> <%= gender %>, <%= age %>' +
    '<h5>Accident date/time</h5>' +
    '<%= date %>' + 
    '<h5>Relation</h5>' + 
    '<%= relation %>' +
    '<h5>Accident location</h5>' + 
    '<%= address %>' +
    '</p>' +
    '</div><div class="clearfix">' +
    '<h3>What happened</h3>' +
    '<%= description %>' + 
    '</div>'

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

      // pushing to the template
      $detail.html(tpl({
        name: featured.name,
        race: featured.race,
        gender: featured.gender,
        age: featured.age,
        date: featured.date_time_converted, // make sure this is the adjusted one
        relation: featured.relation,
        address: featured.address,
        description: featured.description,
        thumb: featured.thumb
      }));
    });

  });

}(jQuery, _));