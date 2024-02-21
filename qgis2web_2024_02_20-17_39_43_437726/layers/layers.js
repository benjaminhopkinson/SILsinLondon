var wms_layers = [];


        var lyr_OpenStreetMapStandardakaMapnik_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap Standard aka Mapnik',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>',
                url: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_800maroundstationsnearSILs_1 = new ol.format.GeoJSON();
var features_800maroundstationsnearSILs_1 = format_800maroundstationsnearSILs_1.readFeatures(json_800maroundstationsnearSILs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_800maroundstationsnearSILs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_800maroundstationsnearSILs_1.addFeatures(features_800maroundstationsnearSILs_1);
var lyr_800maroundstationsnearSILs_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_800maroundstationsnearSILs_1, 
                style: style_800maroundstationsnearSILs_1,
                popuplayertitle: "800m around stations near SILs",
                interactive: true,
                title: '<img src="styles/legend/800maroundstationsnearSILs_1.png" /> 800m around stations near SILs'
            });
var format_Strategic_Industrial_Land_SIL_2 = new ol.format.GeoJSON();
var features_Strategic_Industrial_Land_SIL_2 = format_Strategic_Industrial_Land_SIL_2.readFeatures(json_Strategic_Industrial_Land_SIL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strategic_Industrial_Land_SIL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strategic_Industrial_Land_SIL_2.addFeatures(features_Strategic_Industrial_Land_SIL_2);
var lyr_Strategic_Industrial_Land_SIL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Strategic_Industrial_Land_SIL_2, 
                style: style_Strategic_Industrial_Land_SIL_2,
                popuplayertitle: "Strategic_Industrial_Land_SIL",
                interactive: true,
                title: '<img src="styles/legend/Strategic_Industrial_Land_SIL_2.png" /> Strategic_Industrial_Land_SIL'
            });
var format_AreasofSILswithin800mofstations_3 = new ol.format.GeoJSON();
var features_AreasofSILswithin800mofstations_3 = format_AreasofSILswithin800mofstations_3.readFeatures(json_AreasofSILswithin800mofstations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreasofSILswithin800mofstations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasofSILswithin800mofstations_3.addFeatures(features_AreasofSILswithin800mofstations_3);
var lyr_AreasofSILswithin800mofstations_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreasofSILswithin800mofstations_3, 
                style: style_AreasofSILswithin800mofstations_3,
                popuplayertitle: "Areas of SILs within 800m of stations",
                interactive: true,
                title: '<img src="styles/legend/AreasofSILswithin800mofstations_3.png" /> Areas of SILs within 800m of stations'
            });
var format_StationsnearSILs_4 = new ol.format.GeoJSON();
var features_StationsnearSILs_4 = format_StationsnearSILs_4.readFeatures(json_StationsnearSILs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationsnearSILs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationsnearSILs_4.addFeatures(features_StationsnearSILs_4);
var lyr_StationsnearSILs_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StationsnearSILs_4, 
                style: style_StationsnearSILs_4,
                popuplayertitle: "Stations near SILs",
                interactive: true,
                title: '<img src="styles/legend/StationsnearSILs_4.png" /> Stations near SILs'
            });

lyr_OpenStreetMapStandardakaMapnik_0.setVisible(true);lyr_800maroundstationsnearSILs_1.setVisible(true);lyr_Strategic_Industrial_Land_SIL_2.setVisible(true);lyr_AreasofSILswithin800mofstations_3.setVisible(true);lyr_StationsnearSILs_4.setVisible(true);
var layersList = [lyr_OpenStreetMapStandardakaMapnik_0,lyr_800maroundstationsnearSILs_1,lyr_Strategic_Industrial_Land_SIL_2,lyr_AreasofSILswithin800mofstations_3,lyr_StationsnearSILs_4];
lyr_800maroundstationsnearSILs_1.set('fieldAliases', {'fid': 'fid', 'link': 'link', 'name': 'name', 'marker-color': 'marker-color', 'zone': 'zone', 'postcode': 'postcode', });
lyr_Strategic_Industrial_Land_SIL_2.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_AreasofSILswithin800mofstations_3.set('fieldAliases', {'fid': 'fid', 'link': 'link', 'name': 'name', 'marker-color': 'marker-color', 'zone': 'zone', 'postcode': 'postcode', });
lyr_StationsnearSILs_4.set('fieldAliases', {'fid': 'fid', 'link': 'link', 'name': 'name', 'marker-color': 'marker-color', 'zone': 'zone', 'postcode': 'postcode', });
lyr_800maroundstationsnearSILs_1.set('fieldImages', {'fid': 'TextEdit', 'link': 'TextEdit', 'name': 'TextEdit', 'marker-color': 'TextEdit', 'zone': 'TextEdit', 'postcode': 'TextEdit', });
lyr_Strategic_Industrial_Land_SIL_2.set('fieldImages', {'fid': 'TextEdit', 'address': 'TextEdit', 'borough': 'TextEdit', 'boroughdesignation': 'TextEdit', 'classification': 'TextEdit', 'designation': 'TextEdit', 'easting': 'TextEdit', 'extrainfo1': 'TextEdit', 'extrainfo2': 'TextEdit', 'extrainfo3': 'TextEdit', 'firstaddeddate': 'TextEdit', 'hectares': 'TextEdit', 'lastupdateddate': 'TextEdit', 'layerreference': 'TextEdit', 'northing': 'TextEdit', 'notes': 'TextEdit', 'objectid': 'TextEdit', 'planningauthority': 'TextEdit', 'removeddate': 'TextEdit', 'sitename': 'TextEdit', 'sitereference': 'TextEdit', 'source': 'TextEdit', 'status': 'TextEdit', 'uprn': 'TextEdit', 'runtime': 'TextEdit', });
lyr_AreasofSILswithin800mofstations_3.set('fieldImages', {'fid': 'TextEdit', 'link': 'TextEdit', 'name': 'TextEdit', 'marker-color': 'TextEdit', 'zone': 'TextEdit', 'postcode': 'TextEdit', });
lyr_StationsnearSILs_4.set('fieldImages', {'fid': 'TextEdit', 'link': 'TextEdit', 'name': 'TextEdit', 'marker-color': 'TextEdit', 'zone': 'TextEdit', 'postcode': 'TextEdit', });
lyr_800maroundstationsnearSILs_1.set('fieldLabels', {'fid': 'no label', 'link': 'no label', 'name': 'no label', 'marker-color': 'no label', 'zone': 'no label', 'postcode': 'no label', });
lyr_Strategic_Industrial_Land_SIL_2.set('fieldLabels', {'fid': 'no label', 'address': 'no label', 'borough': 'no label', 'boroughdesignation': 'no label', 'classification': 'no label', 'designation': 'no label', 'easting': 'no label', 'extrainfo1': 'no label', 'extrainfo2': 'no label', 'extrainfo3': 'no label', 'firstaddeddate': 'no label', 'hectares': 'no label', 'lastupdateddate': 'no label', 'layerreference': 'no label', 'northing': 'no label', 'notes': 'no label', 'objectid': 'no label', 'planningauthority': 'no label', 'removeddate': 'no label', 'sitename': 'no label', 'sitereference': 'no label', 'source': 'no label', 'status': 'no label', 'uprn': 'no label', 'runtime': 'no label', });
lyr_AreasofSILswithin800mofstations_3.set('fieldLabels', {'fid': 'no label', 'link': 'no label', 'name': 'no label', 'marker-color': 'no label', 'zone': 'no label', 'postcode': 'no label', });
lyr_StationsnearSILs_4.set('fieldLabels', {'fid': 'no label', 'link': 'no label', 'name': 'no label', 'marker-color': 'no label', 'zone': 'no label', 'postcode': 'no label', });
lyr_StationsnearSILs_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});