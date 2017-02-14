/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */

window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","esri.dijit.Scalebar"],["require","esri.geometry"],["require","esri.map"],["require","esri.WKIDUnitConversion"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["esri.dijit.Scalebar"]){_4._hasResource["esri.dijit.Scalebar"]=true;_4.provide("esri.dijit.Scalebar");_4.require("esri.geometry");_4.require("esri.map");_4.require("esri.WKIDUnitConversion");(function(){var _7=[_4.moduleUrl("esri.dijit","css/Scalebar.css")];var _8=document.getElementsByTagName("head").item(0),_9;for(var i=0,il=_7.length;i<il;i++){_9=document.createElement("link");_9.type="text/css";_9.rel="stylesheet";_9.href=_7[i].toString();_8.appendChild(_9);}}());_4.declare("esri.dijit.Scalebar",null,{map:null,mapUnit:null,scalebarUnit:null,unitsDictionary:[],domNode:null,screenPt1:null,screenPt2:null,constructor:function(_a,_b){this.domNode=_4.create("div",{innerHTML:"<div class='esriScalebarRuler'><div class='esriScalebarRulerBlock upper_firstpiece'></div><div class='esriScalebarRulerBlock upper_secondpiece'></div><div class='esriScalebarRulerBlock lower_firstpiece'></div><div class='esriScalebarRulerBlock lower_secondpiece'></div></div><div class='scaleLabelDiv'><div class='esriScalebarLabel' style='left: -3%'>0</div><div class='esriScalebarLabel esriScalebarFirstNumber'></div><div class='esriScalebarLabel esriScalebarSecondNumber'></div></div>"});_a=_a||{};if(!_a.map){console.error("scalebar: unable to find the 'map' property in parameters");return;}if(!_a.scalebarUnit){this.scalebarUnit="mi";}else{if(_a.scalebarUnit!=="english"&&_a.scalebarUnit!=="metric"){console.error("scalebar unit only accepts english or metric");return;}else{this.scalebarUnit=(_a.scalebarUnit==="english")?"mi":"km";}}this.map=_a.map;if(_b){_b.appendChild(this.domNode);}else{this.map.container.appendChild(this.domNode);if(_a.attachTo){_4.addClass(this.domNode,"scalebar_"+_a.attachTo);}else{_4.addClass(this.domNode,"scalebar_bottom-left");}}_4.addClass(this.domNode,"esriScalebar");var _c=_4.position(this.domNode,true);var _d=_c.y-this.map.position.y;_d=(_d>this.map.height)?this.map.height:_d;_d=(_d<0)?0:_d;this.screenPt1=new esri.geometry.Point(0,_d,this.map.spatialReference);this.screenPt2=new esri.geometry.Point(this.map.width,_d,this.map.spatialReference);this._getDistance(this.map.extent);this._checkBingMaps();_4.connect(this.map,"onExtentChange",this,this._getDistance);_4.connect(this.map,"onPan",this,this._getDistance);_4.forEach(this.map.layerIds,function(_e,_f){if(this.map.getLayer(_e).declaredClass==="esri.virtualearth.VETiledLayer"){_4.connect(this.map.getLayer(_e),"onVisibilityChange",_4.hitch(this,function(_10){this._checkBingMaps();}));}},this);_4.connect(this.map,"onLayerAdd",_4.hitch(this,function(_11){if(_11.declaredClass==="esri.virtualearth.VETiledLayer"){_4.connect(_11,"onVisibilityChange",_4.hitch(this,function(_12){this._checkBingMaps();}));}this._checkBingMaps();}));_4.connect(this.map,"onLayerRemove",_4.hitch(this,this._checkBingMaps));},hide:function(){this._hidden=true;esri.hide(this.domNode);},show:function(){this._hidden=false;esri.show(this.domNode);},_checkBingMaps:function(){if(_4.hasClass(this.domNode,"scalebar_bottom-left")){_4.style(this.domNode,"left","25px");_4.forEach(this.map.layerIds,function(_13,idx){if(this.map.getLayer(_13).declaredClass==="esri.virtualearth.VETiledLayer"&&this.map.getLayer(_13).visible){var _14="95px";if(this.map._mapParams.nav){_14="115px";}_4.style(this.domNode,"left",_14);}},this);}},_getDistance:function(_15){var _16,_17;this.mapUnit="esriDecimalDegrees";var pt1=esri.geometry.toMapPoint(_15,this.map.width,this.map.height,this.screenPt1);var pt2=esri.geometry.toMapPoint(_15,this.map.width,this.map.height,this.screenPt2);var _18=new esri.geometry.Point(_15.xmin,(_15.ymin+_15.ymax)/2,this.map.spatialReference);var _19=new esri.geometry.Point(_15.xmax,(_15.ymin+_15.ymax)/2,this.map.spatialReference);if(this.map.spatialReference.wkid===3857||this.map.spatialReference.wkid===102100||this.map.spatialReference.wkid===102113){pt1=esri.geometry.webMercatorToGeographic(pt1,true);pt2=esri.geometry.webMercatorToGeographic(pt2,true);_18=esri.geometry.webMercatorToGeographic(_18,true);_19=esri.geometry.webMercatorToGeographic(_19,true);}else{if(esri._isDefined(esri.WKIDUnitConversion[this.map.spatialReference.wkid])){this.mapUnit="linearUnit";_16=Math.abs(_15.xmax-_15.xmin);_16*=esri.WKIDUnitConversion.values[esri.WKIDUnitConversion[this.map.spatialReference.wkid]];if(this.scalebarUnit==="mi"){_16/=1609;}else{_16/=1000;}}}if(this.mapUnit==="esriDecimalDegrees"){var _1a=new esri.geometry.Polyline(new esri.SpatialReference({wkid:4326}));_1a.addPath([pt1,pt2]);var _1b=esri.geometry._straightLineDensify(_1a,10);_16=esri.geometry.geodesicLengths([_1b],esri.Units.KILOMETERS)[0];var _1c=new esri.geometry.Polyline(new esri.SpatialReference({wkid:4326}));_1c.addPath([_18,_19]);var _1d=esri.geometry._straightLineDensify(_1c,10);_17=esri.geometry.geodesicLengths([_1d],esri.Units.KILOMETERS)[0];if(this.scalebarUnit==="mi"){_16/=1.609;_17/=1.609;}}this._getScaleBarLength(_16);if(_17){if(_16/_17>0.1){if(!this._hidden){esri.show(this.domNode);}}else{esri.hide(this.domNode);}}},_getScaleBarLength:function(_1e){var _1f=50;var _20=_1f*_1e/this.map.width;var _21=_20;var i=0;var _22=this.scalebarUnit;if(_21<0.1){if(this.scalebarUnit==="mi"){_21*=5280;_22="ft";}else{if(this.scalebarUnit==="km"){_21*=1000;_22="m";}}}while(_21>=1){_21/=10;i++;}var _23,_24;if(_21>0.5){_23=1;_24=0.5;}else{if(_21>0.3){_23=0.5;_24=0.3;}else{if(_21>0.2){_23=0.3;_24=0.2;}else{if(_21>0.15){_23=0.2;_24=0.15;}else{if(_21>0.1){_23=0.15;_24=0.1;}}}}}var _25=((_23/_21)>=(_21/_24))?_24:_23;var _26=_25/_21;var _27=_1f*_26;var _28=Math.pow(10,i)*_25;this._drawScaleBar(_27,_28,_22);},_drawScaleBar:function(_29,_2a,_2b){var _2c=2*Math.round(_29)+"px";this.domNode.style.width=_2c;_4.forEach(_4.query(".esriScalebarFirstNumber",this.domNode),function(_2d,idx){_2d.innerHTML=_2a;},this);_4.forEach(_4.query(".esriScalebarSecondNumber",this.domNode),function(_2e,idx){if(this.mapUnit!=="esriUnknown"){_2e.innerHTML=2*_2a+_2b;}else{_2e.innerHTML=2*_2a+"Unknown Unit";}},this);}});}}};});