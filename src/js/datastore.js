(function($, _) {

  'use strict';

  // setting up template for detail
  var tpl = _.template(
    '<div class="clearfix">' +
    '<h3 class="name"><%= name %></h3>' +
    '<img class="photo" src="<%= thumb %>" width="50%"/>' +
    '<h2><%= address %></h2>' +
    '<p><%= age %></p>'
  );


/*
        <div class="clearfix">
          <h3 class="name">Name of victim</h3>
          <img class="photo" src="http://djuiuzgub7yaf.cloudfront.net/D5y20sZMT2FW-fDO1BNKGmnrSag=/200x300/smart/http://media.data.statesman.com/trafficfatal/images/Aguilar_V.jpg" width="50%"/>
          <p>
            Hispanic Male, 23.
            <h5>Date of accident</h5>
            1/1/2015
            <h5>Relation</h5>
            Driver<br>
            <h5>Accident location</h5>
            305 S. Congress Ave.
          </p>          
        </div>

        <div class="clearfix">
          <h3>What happened</h3>
          <p>Description of the accident, if there is one.</p>
        </div>
*/



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