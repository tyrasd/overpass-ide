const e={"nav.run":"Executar","nav.run_tt":"executar esta consulta na API d'Overpass","nav.rerender_tt":"parse the MapCSS and rerender the map","nav.share":"Compartir","nav.share_tt":"enllaz permanente a la consulta","nav.export":"Esportar","nav.export_tt":"delles ferramientes d'esportación","nav.save":"Guardar","nav.save_tt":"Guardar esta consulta","nav.load":"Cargar","nav.load_tt":"cargar un exemplu o consulta guardáu","nav.wizard":"Asistente","nav.wizard_tt":"constructor de consultes","nav.styler":"Style","nav.styler_tt":"style the result based on a given tag","nav.settings":"Configuración","nav.settings_tt":"delles configuraciones","nav.help":"Ayuda","nav.help_tt":"ayuda, tocante a, y atribuciones","nav.logout":"Colar","nav.logout_tt":"colar de la cuenta d'osm sincronizada actualmente","tabs.map":"Mapa","tabs.map_tt":"vista de mapa","tabs.data":"Datos","tabs.data_tt":"vista de datos","map_controlls.zoom_to_data":"averar a los datos","map_controlls.localize_user":"¡alcontrame!","map_controlls.localize_user_disabled":"disabled because overpass turbo has not been loaded via https://","map_controlls.select_bbox":"seleicionar bbox a mano","map_controlls.select_bbox_disabled":"desactiváu porque la consulta actual nun rique bbox","map_controlls.toggle_wide_map":"cambiar el mapa anchu","map_controlls.toggle_data":"ver o nun ver la capa de datos","map_controlls.suggest_zoom_to_data":"primi equí pa ver los datos","settings.title":"Configuración","settings.section.general":"Configuración xeneral","settings.ui_lang":"Llingua de la interfaz","settings.server":"Sirvidor","settings.disable_autorepair":"Desactivar el mensaxe d'avisu/autoreparación cuando la API d'Overpass nun devuelve datos visibles.","settings.section.editor":"Editor","settings.enable_rich_editor":"Activar l'editor de códigu arriquecíu","settings.enable_rich_editor_expl":"desactivar esto nos preseos móviles, rique una recarga de páxina pa tener efeutu","settings.editor_width":"Anchor del editor","settings.editor_width_expl":'p.ex. "400px", dexar en blancu pal predetermináu',"settings.section.map":"Mapa","settings.tile_server":"Sirvidor de cuadros","settings.tile_opacity":"Tresparencia de los cuadros","settings.tile_opacity_expl":"transparency of background tiles: 0=transparent … 1=visible","settings.show_crosshairs":"Ver cruz de filos nel centru del mapa.","settings.disable_poiomatic":"Nun amosar les resultancies pequeñes como PDI.","settings.show_data_stats":"Ver delles estadístiques de los datos cargaos y amosaos.","settings.section.sharing":"Compartir","settings.include_map_state":"Incluir l'estáu actual del mapa nos enllaces compartíos","settings.compression":"Compresión","settings.section.export":"Esportar","settings.export_image_scale":"Amosar la escala nes imáxenes esportaes.","settings.export_image_attr":"Amosar l'atribución nes imáxenes esportaes.","save.title":"Guardar","save.enter_name":"Escribi un nome pa esta consulta","load.title":"Cargar","load.delete_query":"desaniciar esta consulta","load.saved_queries-local":"Consultes guardaes (llocal)","load.saved_queries-osm":"Consultes guardaes (osm.org)","load.saved_queries-osm-loading":"Cargando consultes guardaes d'osm.org...","load.saved_queries-osm-error":"An error occurred while loading saved queries from osm.org :(","load.examples":"Exemplos","load.no_saved_query":"entá nun hai consultes guardaes","export.title":"Esportar","export.download-error":"Export - Error","export.copy_to_clipboard":"Copy this text to clipboard","export.copy_to_clipboard_success":"Export - Successfully copied to clipboard","export.copy_to_clipboard_success-message":'<span class="export-copy_to_clipboard-content"></span> was successfully copied to the clipboard.',"export.section.map":"Mapa","export.as_png":'como <a id="export-image" href="">imaxe png</a>',"export.as_interactive_map":'como <a id="export-interactive-map" href="">Mapa interactivu</a>',"export.current_map_view":'<a id="export-map-state" href="">vista del mapa</a> actual',"export.map_view_expl":"bbox, centru, etc.","export.section.data":"Datos","export.generic_download_copy":'<div class="field-label is-normal"><span class="format"></span></div><div class="field-body"><span class="buttons has-addons"><a class="export button is-small is-link is-outlined" title="saves the exported data as a file">download</a><a class="copy button is-small is-link is-outlined" title="copies export output to clipboard">copy</a></span></div>',"export.raw_data":"datos OSM en bruto","export.raw_interpreter":'datos sin procesar direutamente dende <a id="export-overpass-api" href="" target="_blank" class="external">Overpass API</a>',"export.save_geoJSON_gist":'guardar GeoJSON a <a id="export-geoJSON-gist" href="" class="external">gist</a>',"export.section.query":"Consulta","export.format_text":`<abbr title="For direct use with the Overpass API, has expanded shortcuts and doesn't include additional overpass turbo features such as MapCSS.">consulta independiente</abbr>`,"export.format_text_raw":'<abbr title="Unaltered overpass turbo query – just as in the code editor">consulta sin procesar</abbr>',"export.format_text_wiki":'<abbr title="For usage in the OSM wiki as a OverpassTurboExample-Template">wiki osm</abbr>',"export.format_text_umap":'<abbr title="For usage with umap.openstreetmap.fr">umap</abbr> remote data url',"export.to_xml":'convertir a <a id="export-convert-xml" href="" target="_blank" class="external">Overpass-XML</a>',"export.to_ql":'convertir a (<a id="export-convert-compact" href="" target="_blank" class="external">compact</a>) <a id="export-convert-ql" href="" target="_blank" class="external">OverpassQL</a>',"export.editors":"cargar los datos nun editor d'OSM:","export.geoJSON.title":"Esportar - GeoJSON","export.geoJSON.expl":"Los datos que s'amuesen actualmente como GeoJSON:","export.geoJSON.no_data":"¡Nun hai datos GeoJSON disponibles! Executa primero una consulta.","export.geoJSON_gist.title":"Guardao como gist","export.geoJSON_gist.gist":"Gist:","export.geoJSON_gist.geojsonio":"Editar con geojson.io:","export.geoJSON_gist.geojsonio_link":"geojson.io","export.GPX.title":"Esportar - GPX","export.GPX.expl":"Los datos que s'amuesen actualmente como GPX:","export.GPX.no_data":"¡Nun hai datos GPX disponibles! Executa primero una consulta.","export.KML.title":"Esportar - KML","export.KML.expl":"Los datos que s'amuesen actualmente como KML:","export.KML.no_data":"¡Nun hai datos KML disponibles! Executa primero una consulta.","export.raw.title":"Esportar - sin procesar","export.raw.no_data":"Nun hai datos sin procesar disponibles. Executa primero una consulta.","export.map_view.title":"Vista actual del mapa","export.map_view.permalink":"Enllaz permanente","export.map_view.permalink_osm":"a osm.org","export.map_view.center":"Centru","export.map_view.center_expl":"llat, llon","export.map_view.bounds":"Llendes","export.map_view.bounds_selection":"Llendes (bbox seleicionáu a mano)","export.map_view.bounds_expl":"sur, oeste, norte, este","export.map_view.zoom":"Ampliación","export.image.title":"Esportar - Imaxe","export.image.alt":"el mapa esportáu","export.image.download":"Descargar","export.image.attribution_missing":"Asegúrate d'incluir les atribuciones apropiaes si distribuyes la imaxe","share.title":"Compartir","share.header":"Enllaz permanente","share.copy_this_link":'Copia esti <a href="" id="share_link_a">enllaz</a> pa compartir el códigu actual:',"share.options":"Opciones","share.incl_map_state":"incluir l'estáu actual del mapa","share.run_immediately":"executar darréu esta consulta después de cargar","help.title":"Ayuda","help.section.introduction":"Introducción","help.intro.0":'Esto ye <i>overpass turbo</i>, una ferramienta de filtriáu de datos basada na web pa<a href="http://www.openstreetmap.org">OpenStreetMap</a>.',"help.intro.1":`Con overpass turbo puedes executar consultes <a href="http://wiki.openstreetmap.org/wiki/Overpass_API">Overpass API</a> y analizar los datos d'OSM resultantes de forma interactiva nun mapa.`,"help.intro.1b":'Hai un <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard">Asistente</a> integráu que fai que seya enforma cenciello crear consultes.',"help.intro.2":`Na wiki d'OSM puede alcontrase más información sobre <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo">overpass turbo</a> y cómo escribir <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">consultes Overpass</a>.`,"help.section.queries":"Consultes Overpass","help.queries.expl":`Overpass API te permite consultar datos d'OSM colos tos propios criterios de gueta. Pa esti propósitu, tien un <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">llinguaxe de consultes</a> diseñáu específicamente.`,"help.intro.shortcuts":"Amás de les consultes regulares d'Overpass API pueden usase los siguientes atayos útiles en overpass turbo:","help.intro.shortcuts.bbox":"coordenaes del cuadru de llende de la vista del mapa actual","help.intro.shortcuts.center":"coordenaes del centru del mapa","help.intro.shortcuts.date":"cadena de data-hora ISO 8601 d'un determináu intervalu de tiempu hacia atrás (p.ex. «24 hours»)","help.intro.shortcuts.style":`define una <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS">fueya d'estilu MapCSS</a>`,"help.intro.shortcuts.custom":"Arbitrary shortcuts can be defined by putting <i>{{shortcut=value}}</i> somewhere in the script.","help.intro.shortcuts.more":'More overpass-turbo shortcuts, additional information about the above and usage examples can be found in the <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Extended_Overpass_Queries">OSM wiki</a>.',"help.section.ide":"IDE","help.ide.share.title":"Compartir","help.ide.share.expl":"It is possible to send a permalink with the query you are currently working on to someone else. This is found in the <i>Share</i> tool and shows you a link which you can send to a friend or post online. (Note that others will work on their own copy of the query.)","help.ide.save_load.title":"Save and Load","help.ide.save_load.expl":"You can also save and load your queries. For a start, there are a few example queries preloaded. Take a look at them for a short glimpse of what overpass can do.","help.ide.keyboard.title":"Keyboard shortcuts:","help.ide.keyboard.run":"Run the current query.","help.ide.keyboard.wizard":"Start the query wizard.","help.ide.keyboard.load_save":"Load (open) / Save a query.","help.ide.keyboard.help":"Open this help dialog.","help.section.key":"Map Key","help.key.example":"various map features","help.key.description":"Ways are shown as bold blue lines, Polygons as yellow areas with a thin blue outline, POIs (nodes with tags) as yellow circles with a thin blue outline. Circles with a red filling stand for polygons or ways that are too small to be displayed normally. Pink lines or outlines mean, that an object is part of at least one (loaded) relation. Dashed lines mean that a way or polygon has incomplete geometry (most likely because some of its nodes have not been loaded).","help.section.export":"Esportar","help.export":'The <i>Export</i> tool holds a variety of options to do with the query and/or data loaded by the query.<br />Options with this symbol:<span class="ui-icon ui-icon-extlink" style="display:inline-block;"></span> rely on or refer to external (online) tools.',"help.export.query_data.title":"Query / Data","help.export.query_data.expl":"This holds some things you can do with the raw query or data, like converting the query between the various query languages or exporting the data as geoJSON. A very useful option is the possibility to send the query to JOSM.","help.export.map.title":"Mapa","help.export.map.expl":"Convert the current map-with-data view to a static png image, or a (fullscreen) interactive map, etc.","help.section.about":"About","help.about.maintained":"<i>overpass turbo</i> is maintained by Martin Raifer (tyr.asd at gmail.com).","help.about.feedback.title":"Feedback, Bug Reports, Feature Requests","help.about.feedback":'If you would like to give feedback, report issues or ask for a particular feature, please use the <a href="https://github.com/tyrasd/overpass-turbo/issues">issue tracker</a> on github or the <a href="http://wiki.openstreetmap.org/wiki/Talk:Overpass_turbo">discussion page</a> on the OSM-wiki.',"help.about.source.title":"Source Code","help.about.source":'The <a href="https://github.com/tyrasd/overpass-turbo">source code</a> of this application is released under the MIT <a href="LICENSE">license</a>.',"help.section.attribution":"Attribution","help.attr.data_sources":"Data Sources","help.attr.data":'Data &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors, <span style="font-size:smaller;"><a href="http://opendatacommons.org/licenses/odbl/1-0/">ODbL</a> (<a href="http://www.openstreetmap.org/copyright">Terms</a>)</span>',"help.attr.mining":"Data mining by","help.attr.tiles":'Map tiles &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors',"help.attr.search":"Search provided by","help.attr.software":"Software & Libraries","help.attr.leaflet":"Map powered by","help.attr.codemirror":"Editor powered by","help.attr.other_libs":"Other libraries:","ffs.title":"Query Wizard","ffs.comments":"add query comments","ffs.placeholder":"search","ffs.expl":'The <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">wizard</a> assists you with creating Overpass queries. Here are some usage examples:',"ffs.parse_error":"Sorry, this search cannot be understood.","ffs.parse_error_expl":'Note that you must use quotation marks with strings containing spaces or special characters and that multiple search filters must be separated by appropriate boolean operators (<i>and</i> or <i>or</i>). Read the <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">documentation</a> for more information.',"ffs.typo":"Queríes dicir:","styler.title":"Auto Styler","styler.expl":"Style the query result based on the values of the specified tag","styler.placeholder":"Select a tag key","styler.palette":"Choose a palette:","styler.palette.sequential":"sequential","styler.palette.qualitative":"qualitative","dialog.dismiss":"descartar","dialog.cancel":"encaboxar","dialog.save":"guardar","dialog.save-local":"guardar (llocal)","dialog.save-osm":"guardar en osm.org","dialog.delete":"desaniciar","dialog.close":"zarrar","dialog.done":"fecho","dialog.abort":"abort","dialog.reset":"reset","dialog.repair_query":"repair query","dialog.continue_anyway":"continue anyway","dialog.show_data":"show data","dialog.wizard_build":"build query","dialog.wizard_run":"build and run query","dialog.styler_run":"apply style","dialog.delete_query.title":"Delete Query?","dialog.delete_query.expl":"Do you really want to delete the following query","dialog.delete_query.expl-osm":"Do you really want to delete the following synchronized query","error.query.title":"Query Error","error.query.expl":"An error occurred during the execution of the overpass query! This is what overpass API returned:","error.ajax.title":"Ajax Error","error.ajax.expl":"An error occurred during the execution of the overpass query!","error.mapcss.title":"MapCSS Error","error.mapcss.expl":"Invalid MapCSS stylesheet:","error.remote.title":"Remote Control Error","error.remote.incompat":"Error: incompatible JOSM remote control version","error.remote.not_found":"Remote control not found. :( Make sure JOSM is already running and properly configured.","error.nominatim.title":"Nominatim Error","error.nominatim.expl":"Could not find anything with the following name:","warning.browser.title":"Your browser is not supported :(","warning.browser.expl.1":'The browser you are currently using, is (most likely) not capable of running (significant parts of) this Application. <small>It must support <a href="http://en.wikipedia.org/wiki/Web_storage#localStorage">Web Storage API</a> and <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">cross origin resource sharing (CORS)</a>.</small>',"warning.browser.expl.2":'Note that you may have to enable cookies and/or "local Data" for this site on some browsers (such as Firefox and Chrome).',"warning.browser.expl.3":'Please upgrade to a more up-to-date version of your browser or switch to a more capable one! Recent versions of <a href="http://www.opera.com">Opera</a>, <a href="http://www.google.com/intl/de/chrome/browser/">Chrome</a> and <a href="http://www.mozilla.org/de/firefox/">Firefox</a> have been tested to work. Alternatively, you can still use the <a href="http://overpass-api.de/query_form.html">Overpass_API query form</a>.',"warning.incomplete.title":"Incomplete Data","warning.incomplete.expl.1":"This query returned no nodes. In OSM, only nodes contain coordinates. For example, a way cannot be displayed without its nodes.","warning.incomplete.expl.2":'If this is not what you meant to get, <i>overpass turbo</i> can help you to repair (auto-complete) the query by choosing "repair query" below. Otherwise you can continue to the data.',"warning.incomplete.not_again":"do not show this message again.","warning.incomplete.remote.expl.1":"It looks like if this query will not return OSM data in XML format with metadata. Editors like JOSM require the data to be in that format, though.","warning.incomplete.remote.expl.2":'<i>overpass turbo</i> can help you to correct the query by choosing "repair query" below.',"warning.share.long":"Warning: This share-link is quite long. It may not work under certain circumstances","warning.share.very_long":"Warning: This share-link is very long. It is likely to fail under normal circumstances (browsers, webservers). Use with caution!","warning.huge_data.title":"Large amounts of data","warning.huge_data.expl.1":"This query returned quite a lot of data (approx. {{amount_txt}}).","warning.huge_data.expl.2":"Your browser may have a hard time trying to render this. Do you really want to continue?","waiter.processing_query":"processing query...","waiter.export_as_image":"exporting as image...","data_stats.loaded":"Loaded","data_stats.displayed":"Displayed","data_stats.nodes":"nodes","data_stats.ways":"ways","data_stats.relations":"relations","data_stats.areas":"areas","data_stats.pois":"pois","data_stats.lines":"lines","data_stats.polygons":"polygons","data_stats.request_duration":"Overpass request took","data_stats.lag":"Currentness of data","data_stats.lag_areas":"Currentness of areas","data_stats.lag.expl":"behind main OSM db","popup.tags":"Tags","popup.metadata":"Metadata","popup.coordinates":"Coordinates","popup.node":"Node","popup.nodes":"Nodes","popup.way":"Way","popup.ways":"Ways","popup.relation":"Relation","popup.relations":"Relations","popup.incomplete_geometry":"Attention: incomplete geometry (e.g. some nodes missing)","map.intentionally_blank":"This map intentionally left blank."};export{e as default};
//# sourceMappingURL=ast_ES-BTIUwwr3.js.map
