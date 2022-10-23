import{$ as t,o as r,a as d,q as S,L as p}from"./overpass.e7de4d2a.js";t(document).ready(function(){var c={};window.addEventListener("message",function(e){var o=typeof e.data=="string"?JSON.parse(e.data):{};switch(o.cmd){case"update_map":n.code.overpass=o.value[0],a.update_map();break;case"cache":n.code.overpass=o.value[0],a.getQuery(function(i){var l=a.getQueryLang();r.run_query(i,l,c,!0,void 0,a.mapcss)});break}},!1),t.fn.dialog=function(){alert("error :( "+t(this).html())},d.appname="overpass-ide-map";var n={code:{},server:d.defaultServer,tileServer:d.defaultTiles,force_simple_cors_request:!0,disable_poiomatic:!1},a={getQuery:function(e){var o=n.code.overpass,i=S();i.parse(o,{},function(l){var f="";i.hasStatement("style")&&(f=i.getStatement("style")),a.mapcss=f;var s=null;if(i.hasStatement("data")){s=i.getStatement("data"),s=s.split(",");var _=s[0].toLowerCase();s=s.slice(1);for(var g={},u=0;u<s.length;u++){var h=s[u].split("=");g[h[0]]=h[1]}s={mode:_,options:g}}a.data_source=s,l=l.trim(),e(l)})},getQueryLang:function(){return t.trim(n.code.overpass).match(/^</)?"xml":"OverpassQL"},update_map:function(){t("#data_stats").remove(),typeof r.osmLayer<"u"&&a.map.removeLayer(r.osmLayer),a.getQuery(function(e){var o=a.getQueryLang();r.run_query(e,o,c,!1,void 0,a.mapcss)}),t("#map_blank").remove()}};r.init(),t.support.cors!=!0&&t('<div title="Your browser is not supported :("><p>The browser you are currently using, is not capable of running this Application. <small>It has to support <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">cross origin resource sharing (CORS)</a>.</small></p><p>Please update to a more up-to-date version of your browser or switch to a more capable browser! Recent versions of <a href="http://www.opera.com">Opera</a>, <a href="http://www.google.com/intl/de/chrome/browser/">Chrome</a> and <a href="http://www.mozilla.org/de/firefox/">Firefox</a> have been tested to work.</p></div>').dialog({modal:!0});var m=new URLSearchParams(location.search.substring(1));n.code.overpass=m.get("Q"),n.silent=m.has("silent"),a.map=new p.Map("map");var v=n.tileServer,y='&copy; <a href="www.openstreetmap.org/copyright">OpenStreetMap</a> contributors&ensp;<small>Data:ODbL, Map:cc-by-sa</small>',w=new p.TileLayer(v,{attribution:y});a.map.setView([0,0],1).addLayer(w);var b=new p.Control.Scale({metric:!0,imperial:!1});b.addTo(a.map),t(document).on({ajaxStart:function(){t("#loading-dialog").addClass("is-active")},ajaxStop:function(){t("#loading-dialog").removeClass("is-active")}}),a.map.on("layeradd",function(e){if(e.layer instanceof p.GeoJSON){a.map.setView([0,0],18,!0);try{a.map.fitBounds(e.layer.getBounds())}catch{}}}),r.handlers.onEmptyMap=function(e,o){t('<div id="map_blank" style="z-index:1; display:block; position:absolute; top:42px; width:100%; text-align:center; background-color:#eee; opacity: 0.8;">This map intentionally left blank. <small>('+e+")</small></div>").appendTo("#map")},n.silent?(r.handlers.onAjaxError=function(e){parent.postMessage(JSON.stringify({handler:"onAjaxError",msg:e}),"*")},r.handlers.onQueryError=function(e){parent.postMessage(JSON.stringify({handler:"onQueryError",msg:e}),"*")}):(r.handlers.onAjaxError=function(e){alert(`An error occured during the execution of the overpass query!
`+e)},r.handlers.onQueryError=function(e){alert(`An error occured during the execution of the overpass query!
This is what overpass API returned:
`+e)}),r.handlers.onGeoJsonReady=function(){a.map.addLayer(r.osmLayer)},r.handlers.onPopupReady=function(e){e.openOn(a.map)},r.handlers.onDataReceived=function(e,o,i,l){l()},r.handlers.onRawDataPresent=function(){parent.postMessage(JSON.stringify({query:n.code.overpass,resultType:r.resultType,resultText:r.resultText}),"*")},a.update_map()});
