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

if(!dojo._hasResource["esri.dijit.Scalebar"]){dojo._hasResource["esri.dijit.Scalebar"]=true;dojo.provide("esri.dijit.Scalebar");dojo.require("esri.geometry");dojo.require("esri.map");dojo.require("esri.WKIDUnitConversion");(function(){var _1=[dojo.moduleUrl("esri.dijit","css/Scalebar.css")];var _2=document.getElementsByTagName("head").item(0),_3;for(var i=0,il=_1.length;i<il;i++){_3=document.createElement("link");_3.type="text/css";_3.rel="stylesheet";_3.href=_1[i].toString();_2.appendChild(_3);}}());dojo.declare("esri.dijit.Scalebar",null,{map:null,mapUnit:null,scalebarUnit:null,unitsDictionary:[],domNode:null,screenPt1:null,screenPt2:null,constructor:function(_4,_5){this.domNode=dojo.create("div",{innerHTML:"<div class='esriScalebarRuler'><div class='esriScalebarRulerBlock upper_firstpiece'></div><div class='esriScalebarRulerBlock upper_secondpiece'></div><div class='esriScalebarRulerBlock lower_firstpiece'></div><div class='esriScalebarRulerBlock lower_secondpiece'></div></div><div class='scaleLabelDiv'><div class='esriScalebarLabel' style='left: -3%'>0</div><div class='esriScalebarLabel esriScalebarFirstNumber'></div><div class='esriScalebarLabel esriScalebarSecondNumber'></div></div>"});_4=_4||{};if(!_4.map){console.error("scalebar: unable to find the 'map' property in parameters");return;}if(!_4.scalebarUnit){this.scalebarUnit="mi";}else{if(_4.scalebarUnit!=="english"&&_4.scalebarUnit!=="metric"){console.error("scalebar unit only accepts english or metric");return;}else{this.scalebarUnit=(_4.scalebarUnit==="english")?"mi":"km";}}this.map=_4.map;if(_5){_5.appendChild(this.domNode);}else{this.map.container.appendChild(this.domNode);if(_4.attachTo){dojo.addClass(this.domNode,"scalebar_"+_4.attachTo);}else{dojo.addClass(this.domNode,"scalebar_bottom-left");}}dojo.addClass(this.domNode,"esriScalebar");var _6=dojo.position(this.domNode,true);var _7=_6.y-this.map.position.y;_7=(_7>this.map.height)?this.map.height:_7;_7=(_7<0)?0:_7;this.screenPt1=new esri.geometry.Point(0,_7,this.map.spatialReference);this.screenPt2=new esri.geometry.Point(this.map.width,_7,this.map.spatialReference);this._getDistance(this.map.extent);this._checkBingMaps();dojo.connect(this.map,"onExtentChange",this,this._getDistance);dojo.connect(this.map,"onPan",this,this._getDistance);dojo.forEach(this.map.layerIds,function(_8,_9){if(this.map.getLayer(_8).declaredClass==="esri.virtualearth.VETiledLayer"){dojo.connect(this.map.getLayer(_8),"onVisibilityChange",dojo.hitch(this,function(_a){this._checkBingMaps();}));}},this);dojo.connect(this.map,"onLayerAdd",dojo.hitch(this,function(_b){if(_b.declaredClass==="esri.virtualearth.VETiledLayer"){dojo.connect(_b,"onVisibilityChange",dojo.hitch(this,function(_c){this._checkBingMaps();}));}this._checkBingMaps();}));dojo.connect(this.map,"onLayerRemove",dojo.hitch(this,this._checkBingMaps));},hide:function(){this._hidden=true;esri.hide(this.domNode);},show:function(){this._hidden=false;esri.show(this.domNode);},_checkBingMaps:function(){if(dojo.hasClass(this.domNode,"scalebar_bottom-left")){dojo.style(this.domNode,"left","25px");dojo.forEach(this.map.layerIds,function(_d,_e){if(this.map.getLayer(_d).declaredClass==="esri.virtualearth.VETiledLayer"&&this.map.getLayer(_d).visible){var _f="95px";if(this.map._mapParams.nav){_f="115px";}dojo.style(this.domNode,"left",_f);}},this);}},_getDistance:function(_10){var _11,_12;this.mapUnit="esriDecimalDegrees";var pt1=esri.geometry.toMapPoint(_10,this.map.width,this.map.height,this.screenPt1);var pt2=esri.geometry.toMapPoint(_10,this.map.width,this.map.height,this.screenPt2);var _13=new esri.geometry.Point(_10.xmin,(_10.ymin+_10.ymax)/2,this.map.spatialReference);var _14=new esri.geometry.Point(_10.xmax,(_10.ymin+_10.ymax)/2,this.map.spatialReference);if(this.map.spatialReference.wkid===3857||this.map.spatialReference.wkid===102100||this.map.spatialReference.wkid===102113){pt1=esri.geometry.webMercatorToGeographic(pt1,true);pt2=esri.geometry.webMercatorToGeographic(pt2,true);_13=esri.geometry.webMercatorToGeographic(_13,true);_14=esri.geometry.webMercatorToGeographic(_14,true);}else{if(esri._isDefined(esri.WKIDUnitConversion[this.map.spatialReference.wkid])){this.mapUnit="linearUnit";_11=Math.abs(_10.xmax-_10.xmin);_11*=esri.WKIDUnitConversion.values[esri.WKIDUnitConversion[this.map.spatialReference.wkid]];if(this.scalebarUnit==="mi"){_11/=1609;}else{_11/=1000;}}}if(this.mapUnit==="esriDecimalDegrees"){var _15=new esri.geometry.Polyline(new esri.SpatialReference({wkid:4326}));_15.addPath([pt1,pt2]);var _16=esri.geometry._straightLineDensify(_15,10);_11=esri.geometry.geodesicLengths([_16],esri.Units.KILOMETERS)[0];var _17=new esri.geometry.Polyline(new esri.SpatialReference({wkid:4326}));_17.addPath([_13,_14]);var _18=esri.geometry._straightLineDensify(_17,10);_12=esri.geometry.geodesicLengths([_18],esri.Units.KILOMETERS)[0];if(this.scalebarUnit==="mi"){_11/=1.609;_12/=1.609;}}this._getScaleBarLength(_11);if(_12){if(_11/_12>0.1){if(!this._hidden){esri.show(this.domNode);}}else{esri.hide(this.domNode);}}},_getScaleBarLength:function(_19){var _1a=50;var _1b=_1a*_19/this.map.width;var _1c=_1b;var i=0;var _1d=this.scalebarUnit;if(_1c<0.1){if(this.scalebarUnit==="mi"){_1c*=5280;_1d="ft";}else{if(this.scalebarUnit==="km"){_1c*=1000;_1d="m";}}}while(_1c>=1){_1c/=10;i++;}var _1e,_1f;if(_1c>0.5){_1e=1;_1f=0.5;}else{if(_1c>0.3){_1e=0.5;_1f=0.3;}else{if(_1c>0.2){_1e=0.3;_1f=0.2;}else{if(_1c>0.15){_1e=0.2;_1f=0.15;}else{if(_1c>0.1){_1e=0.15;_1f=0.1;}}}}}var _20=((_1e/_1c)>=(_1c/_1f))?_1f:_1e;var _21=_20/_1c;var _22=_1a*_21;var _23=Math.pow(10,i)*_20;this._drawScaleBar(_22,_23,_1d);},_drawScaleBar:function(_24,_25,_26){var _27=2*Math.round(_24)+"px";this.domNode.style.width=_27;dojo.forEach(dojo.query(".esriScalebarFirstNumber",this.domNode),function(_28,idx){_28.innerHTML=_25;},this);dojo.forEach(dojo.query(".esriScalebarSecondNumber",this.domNode),function(_29,idx){if(this.mapUnit!=="esriUnknown"){_29.innerHTML=2*_25+_26;}else{_29.innerHTML=2*_25+"Unknown Unit";}},this);}});}