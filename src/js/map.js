var map;

var dataUrl = 'data.json';

$.getJSON(dataUrl, function(data) {
    map = new DbMap(data);
});

var DbMap = (function($, L, _) {

  'use strict';

  /**
   * A legend for the cause of death field
   * @see http://leafletjs.com/reference.html#icontrol
   * @extends L.Control
   * @constructor
   *
   * @param {array} data - our data as they're returned for
   *   the map
   * @param {object} options - the regular leaflet options for
   *   IControl layers
   * @return {IControl} - a modified IControl instance
   */
  var Legend = L.Control.extend({
    options: {
      position: 'bottomleft'
    },


    onAdd: function (map) {
      var container = L.DomUtil.create('div', 'leaflet-control-legend');

      container.innerHTML = '<ul class="list-inline">' +
        '<li class="death-marker-whatever">' +
          '<i class="fa fa-circle"></i> this is thing' +
        '</li>' +
    '</ul>';

      return container;
    }
  });

  /**
   * The map class for our database
   * @constructor
   *
   * @param {array} data - our data as they're returned for
   *   the map
   * @return - our map instance
   */
  function Map(data) {
    this.data = data;

    // Base map setup
    this.map = L.map('map', {
      minZoom: 11,
      center: [30.311245603935003, -97.72750854492188],
      zoom: 11,
      scrollWheelZoom: false
    });

    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }).addTo(this.map);

    this.map.addControl(new Legend(this.data, 'legend'));

    this._drawMarkers(this.data);
  }

  /**
   * Internal function to make a properly-classed map icon
   * @param {cod} - the cause of death, which will be turned
   *   into a class
   * @return {divIcon} - a Leaflet divIcon instance
   */
   
  Map.prototype._makeIcon = function(relation) {
    var classes = ['death-marker'],
        size = 20;

    if(relation) {
      classes.push('death-marker-' + relation);
    }

    return L.divIcon({
      iconSize: [size, size],
      iconAnchor: [(size / 2), size],
      popupAnchor: [(size / 2), 0],
      className: classes.join(' '),
      html: '<i class="fa fa-circle"></i>'
    });
  };

  /**
   * Internal function to draw map markers for the passed data
   *
   * @param {array} data - the data to draw with, filtered by the caller
   */
  Map.prototype._drawMarkers = function(data) {
    // Remove the existing markers or, if there's no featureGroup
    // yet, create one
    if(this.markers) {
      this.markers.clearLayers();
    }
    else {
      this.markers = new L.featureGroup().addTo(this.map);
    }

    // Add our layers to the featureGroup
    _.each(data, function(d) {
      this.markers.addLayer(
        L.marker([d.lat, d.lng], {
          id: d.id,
          icon: this._makeIcon(d.relation),
          title: d.last_name
        })
      );
    }, this);

    // Update with an active class when someone hovers over an icon
    var active = null,
        oldIcon = null;
    this.markers.on('click', function(e) {
      // Remove the active icon class for the previously-active marker
      if(active) {
        L.DomUtil.removeClass(oldIcon, 'death-marker-active');
      }

      // Get the new active marker and store its icon so we can alter it later
      active = e.layer;
      oldIcon = active._icon;

      // Add the active class for the new icon
      L.DomUtil.addClass(active._icon, 'death-marker-active');
    });
  };

  /**
   * Filter the deaths shown on the map by flag
   * @method
   *
   * @param {string} flag - the flag's name
   */
  Map.prototype.filterByFlag = function(flag) {
    var copy = _.clone(this.data);

    var filtered = _.filter(copy, function(d) {
      return d.flags[flag] === true;
    });

    this._drawMarkers(filtered);
  };

  /**
   * Filter the deaths shown on the map by cause of death
   * @method
   *
   * @param {string} cod - the cause of death to filter for
   */
  Map.prototype.filterByCod = function(cod) {
    var copy = _.clone(this.data);

    var filtered = _.filter(copy, function(d) {
      return d.cod === cod;
    });

    this._drawMarkers(filtered);
  };

  /**
   * Clear any filters set on the map
   * @method
   */
  Map.prototype.clearFilters = function() {
    this._drawMarkers(this.data);
  };

  return Map;

}(jQuery, L, _));




/*
 * old map stuff
var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

var map = L.map('map', {
  center: [30.264071306509358,-97.74001836776733],
  zoom: 15,
  minZoom: 12,
  maxZoom: 17
});

map.addLayer(layer);

*/