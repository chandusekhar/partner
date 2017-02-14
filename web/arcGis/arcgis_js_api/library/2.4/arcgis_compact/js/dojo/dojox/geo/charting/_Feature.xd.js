/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.geo.charting._Feature"],["require","dojox.gfx.fx"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.geo.charting._Feature"]){_4._hasResource["dojox.geo.charting._Feature"]=true;_4.provide("dojox.geo.charting._Feature");_4.require("dojox.gfx.fx");_4.declare("dojox.geo.charting._Feature",null,{_isZoomIn:false,_isFocused:false,markerText:null,constructor:function(_7,_8,_9){this.id=_8;this.shape=_7.mapObj.createGroup();this.parent=_7;this.mapObj=_7.mapObj;this._bbox=_9.bbox;this._center=_9.center;this._defaultFill=_7.defaultColor;this._highlightFill=_7.highlightColor;this._defaultStroke={width:this._normalizeStrokeWeight(0.5),color:"white"};this._scale=Math.min(this.parent.containerSize.w/this._bbox.w,this.parent.containerSize.h/this._bbox.h);var _a=(_4.isArray(_9.shape[0]))?_9.shape:[_9.shape];_4.forEach(_a,function(_b){this.shape.createPolyline(_b).setStroke(this._defaultStroke).setFill(this._defaultFill);},this);},setValue:function(_c){this.value=_c;if(this.parent.series.length!=0){for(var i=0;i<this.parent.series.length;i++){var _d=this.parent.series[i];if((_c>=_d.min)&&(_c<_d.max)){this._setFillWith(_d.color);this._defaultFill=_d.color;}}}},_setFillWith:function(_e){var _f=(_4.isArray(this.shape.children))?this.shape.children:[this.shape.children];_4.forEach(_f,function(_10){_10.setFill(_e);});},_setStrokeWith:function(_11){var _12=(_4.isArray(this.shape.children))?this.shape.children:[this.shape.children];_4.forEach(_12,function(_13){_13.setStroke({color:_11.color,width:_11.width,join:"round"});});},_normalizeStrokeWeight:function(_14){var _15=this.shape._getRealMatrix();return (_6.gfx.renderer!="vml")?_14/(this.shape._getRealMatrix()||{xx:1}).xx:_14;},_onmouseoverHandler:function(evt){this.parent.onFeatureOver(this);this._setFillWith(this._highlightFill);this.mapObj.marker.show(this.id);},_onmouseoutHandler:function(){this._setFillWith(this._defaultFill);this.mapObj.marker.hide();_4.style("mapZoomCursor","display","none");},_onmousemoveHandler:function(evt){if(this._isFocused){var evt=_4.fixEvent(evt||window.event);_4.style("mapZoomCursor","left",evt.pageX+12+"px");_4.style("mapZoomCursor","top",evt.pageY+"px");_4.byId("mapZoomCursor").className=(this._isZoomIn)?"mapZoomOut":"mapZoomIn";_4.style("mapZoomCursor","display","block");}},_onclickHandler:function(){if(!this._isFocused){for(var _16 in this.mapObj.features){if(this.mapObj.features[_16]!=this){this.mapObj.features[_16]._setStrokeWith(this._defaultStroke);this.mapObj.features[_16]._setFillWith(this.mapObj.features[_16]._defaultFill);this.mapObj.features[_16]._isFocused=false;this.mapObj.features[_16]._isZoomIn=false;}}this._focus();}else{if(this._isZoomIn){this._zoomOut();}else{this._zoomIn();}}},_focus:function(){this.shape._moveToFront();this._setStrokeWith({color:"black",width:this._normalizeStrokeWeight(2)});this.parent.onFeatureClick(this);this._isFocused=true;},_zoomIn:function(){var _17=_6.gfx.fx.animateTransform({duration:1000,shape:this.mapObj,transform:[{name:"translate",start:[-this.mapObj.currentBBox.x,-this.mapObj.currentBBox.y],end:[-this._bbox.x,-this._bbox.y]},{name:"scaleAt",start:[this.mapObj.currentScale,this.mapObj.currentBBox.x,this.mapObj.currentBBox.y],end:[this._scale,this._bbox.x,this._bbox.y]}]});_4.connect(_17,"onEnd",this,function(){this._setStrokeWith({color:"black",width:this._normalizeStrokeWeight(2)});this.parent.onZoomEnd(this);});_17.play();this.mapObj.currentScale=this._scale;this.mapObj.currentBBox={x:this._bbox.x,y:this._bbox.y};this._isZoomIn=true;_4.byId("mapZoomCursor").className="";},_zoomOut:function(){var _18=_6.gfx.fx.animateTransform({duration:1000,shape:this.mapObj,transform:[{name:"translate",start:[-this._bbox.x,-this._bbox.y],end:[-this.mapObj.boundBox[0],-this.mapObj.boundBox[1]]},{name:"scaleAt",start:[this._scale,this._bbox.x,this._bbox.y],end:[this.mapObj.scale,this.mapObj.boundBox[0],this.mapObj.boundBox[1]]}]});_4.connect(_18,"onEnd",this,function(){this._setStrokeWith({color:"black",width:this._normalizeStrokeWeight(2)});});_18.play();this.mapObj.currentScale=this.mapObj.scale;this.mapObj.currentBBox={x:this.mapObj.boundBox[0],y:this.mapObj.boundBox[1]};this._isZoomIn=false;_4.byId("mapZoomCursor").className="";},init:function(){this.shape.rawNode.id=this.id;this.tooltip=null;this.shape.connect("onmouseover",this,this._onmouseoverHandler);this.shape.connect("onmouseout",this,this._onmouseoutHandler);this.shape.connect("onmousemove",this,this._onmousemoveHandler);this.shape.connect("onclick",this,this._onclickHandler);}});}}};});