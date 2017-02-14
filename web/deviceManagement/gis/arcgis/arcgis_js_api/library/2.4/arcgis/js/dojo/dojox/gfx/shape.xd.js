/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.gfx.shape"],["require","dojox.gfx._base"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.gfx.shape"]){_4._hasResource["dojox.gfx.shape"]=true;_4.provide("dojox.gfx.shape");_4.require("dojox.gfx._base");_4.declare("dojox.gfx.shape.Shape",null,{constructor:function(){this.rawNode=null;this.shape=null;this.matrix=null;this.fillStyle=null;this.strokeStyle=null;this.bbox=null;this.parent=null;this.parentMatrix=null;},getNode:function(){return this.rawNode;},getShape:function(){return this.shape;},getTransform:function(){return this.matrix;},getFill:function(){return this.fillStyle;},getStroke:function(){return this.strokeStyle;},getParent:function(){return this.parent;},getBoundingBox:function(){return this.bbox;},getTransformedBoundingBox:function(){var b=this.getBoundingBox();if(!b){return null;}var m=this._getRealMatrix();gm=_6.gfx.matrix;return [gm.multiplyPoint(m,b.x,b.y),gm.multiplyPoint(m,b.x+b.width,b.y),gm.multiplyPoint(m,b.x+b.width,b.y+b.height),gm.multiplyPoint(m,b.x,b.y+b.height)];},getEventSource:function(){return this.rawNode;},setShape:function(_7){this.shape=_6.gfx.makeParameters(this.shape,_7);this.bbox=null;return this;},setFill:function(_8){if(!_8){this.fillStyle=null;return this;}var f=null;if(typeof (_8)=="object"&&"type" in _8){switch(_8.type){case "linear":f=_6.gfx.makeParameters(_6.gfx.defaultLinearGradient,_8);break;case "radial":f=_6.gfx.makeParameters(_6.gfx.defaultRadialGradient,_8);break;case "pattern":f=_6.gfx.makeParameters(_6.gfx.defaultPattern,_8);break;}}else{f=_6.gfx.normalizeColor(_8);}this.fillStyle=f;return this;},setStroke:function(_9){if(!_9){this.strokeStyle=null;return this;}if(typeof _9=="string"||_4.isArray(_9)||_9 instanceof _4.Color){_9={color:_9};}var s=this.strokeStyle=_6.gfx.makeParameters(_6.gfx.defaultStroke,_9);s.color=_6.gfx.normalizeColor(s.color);return this;},setTransform:function(_a){this.matrix=_6.gfx.matrix.clone(_a?_6.gfx.matrix.normalize(_a):_6.gfx.matrix.identity);return this._applyTransform();},_applyTransform:function(){return this;},moveToFront:function(){var p=this.getParent();if(p){p._moveChildToFront(this);this._moveToFront();}return this;},moveToBack:function(){var p=this.getParent();if(p){p._moveChildToBack(this);this._moveToBack();}return this;},_moveToFront:function(){},_moveToBack:function(){},applyRightTransform:function(_b){return _b?this.setTransform([this.matrix,_b]):this;},applyLeftTransform:function(_c){return _c?this.setTransform([_c,this.matrix]):this;},applyTransform:function(_d){return _d?this.setTransform([this.matrix,_d]):this;},removeShape:function(_e){if(this.parent){this.parent.remove(this,_e);}return this;},_setParent:function(_f,_10){this.parent=_f;return this._updateParentMatrix(_10);},_updateParentMatrix:function(_11){this.parentMatrix=_11?_6.gfx.matrix.clone(_11):null;return this._applyTransform();},_getRealMatrix:function(){var m=this.matrix;var p=this.parent;while(p){if(p.matrix){m=_6.gfx.matrix.multiply(p.matrix,m);}p=p.parent;}return m;}});_6.gfx.shape._eventsProcessing={connect:function(_12,_13,_14){return arguments.length>2?_4.connect(this.getEventSource(),_12,_13,_14):_4.connect(this.getEventSource(),_12,_13);},disconnect:function(_15){_4.disconnect(_15);}};_4.extend(_6.gfx.shape.Shape,_6.gfx.shape._eventsProcessing);_6.gfx.shape.Container={_init:function(){this.children=[];},openBatch:function(){},closeBatch:function(){},add:function(_16){var _17=_16.getParent();if(_17){_17.remove(_16,true);}this.children.push(_16);return _16._setParent(this,this._getRealMatrix());},remove:function(_18,_19){for(var i=0;i<this.children.length;++i){if(this.children[i]==_18){if(_19){}else{_18.parent=null;_18.parentMatrix=null;}this.children.splice(i,1);break;}}return this;},clear:function(){this.children=[];return this;},_moveChildToFront:function(_1a){for(var i=0;i<this.children.length;++i){if(this.children[i]==_1a){this.children.splice(i,1);this.children.push(_1a);break;}}return this;},_moveChildToBack:function(_1b){for(var i=0;i<this.children.length;++i){if(this.children[i]==_1b){this.children.splice(i,1);this.children.unshift(_1b);break;}}return this;}};_4.declare("dojox.gfx.shape.Surface",null,{constructor:function(){this.rawNode=null;this._parent=null;this._nodes=[];this._events=[];},destroy:function(){_4.forEach(this._nodes,_4.destroy);this._nodes=[];_4.forEach(this._events,_4.disconnect);this._events=[];this.rawNode=null;if(_4.isIE){while(this._parent.lastChild){_4.destroy(this._parent.lastChild);}}else{this._parent.innerHTML="";}this._parent=null;},getEventSource:function(){return this.rawNode;},_getRealMatrix:function(){return null;},isLoaded:true,onLoad:function(_1c){},whenLoaded:function(_1d,_1e){var f=_4.hitch(_1d,_1e);if(this.isLoaded){f(this);}else{var h=_4.connect(this,"onLoad",function(_1f){_4.disconnect(h);f(_1f);});}}});_4.extend(_6.gfx.shape.Surface,_6.gfx.shape._eventsProcessing);_4.declare("dojox.gfx.Point",null,{});_4.declare("dojox.gfx.Rectangle",null,{});_4.declare("dojox.gfx.shape.Rect",_6.gfx.shape.Shape,{constructor:function(_20){this.shape=_6.gfx.getDefault("Rect");this.rawNode=_20;},getBoundingBox:function(){return this.shape;}});_4.declare("dojox.gfx.shape.Ellipse",_6.gfx.shape.Shape,{constructor:function(_21){this.shape=_6.gfx.getDefault("Ellipse");this.rawNode=_21;},getBoundingBox:function(){if(!this.bbox){var _22=this.shape;this.bbox={x:_22.cx-_22.rx,y:_22.cy-_22.ry,width:2*_22.rx,height:2*_22.ry};}return this.bbox;}});_4.declare("dojox.gfx.shape.Circle",_6.gfx.shape.Shape,{constructor:function(_23){this.shape=_6.gfx.getDefault("Circle");this.rawNode=_23;},getBoundingBox:function(){if(!this.bbox){var _24=this.shape;this.bbox={x:_24.cx-_24.r,y:_24.cy-_24.r,width:2*_24.r,height:2*_24.r};}return this.bbox;}});_4.declare("dojox.gfx.shape.Line",_6.gfx.shape.Shape,{constructor:function(_25){this.shape=_6.gfx.getDefault("Line");this.rawNode=_25;},getBoundingBox:function(){if(!this.bbox){var _26=this.shape;this.bbox={x:Math.min(_26.x1,_26.x2),y:Math.min(_26.y1,_26.y2),width:Math.abs(_26.x2-_26.x1),height:Math.abs(_26.y2-_26.y1)};}return this.bbox;}});_4.declare("dojox.gfx.shape.Polyline",_6.gfx.shape.Shape,{constructor:function(_27){this.shape=_6.gfx.getDefault("Polyline");this.rawNode=_27;},setShape:function(_28,_29){if(_28&&_28 instanceof Array){this.inherited(arguments,[{points:_28}]);if(_29&&this.shape.points.length){this.shape.points.push(this.shape.points[0]);}}else{this.inherited(arguments,[_28]);}return this;},_normalizePoints:function(){var p=this.shape.points,l=p&&p.length;if(l&&typeof p[0]=="number"){var _2a=[];for(var i=0;i<l;i+=2){_2a.push({x:p[i],y:p[i+1]});}this.shape.points=_2a;}},getBoundingBox:function(){if(!this.bbox&&this.shape.points.length){var p=this.shape.points;var l=p.length;var t=p[0];var _2b={l:t.x,t:t.y,r:t.x,b:t.y};for(var i=1;i<l;++i){t=p[i];if(_2b.l>t.x){_2b.l=t.x;}if(_2b.r<t.x){_2b.r=t.x;}if(_2b.t>t.y){_2b.t=t.y;}if(_2b.b<t.y){_2b.b=t.y;}}this.bbox={x:_2b.l,y:_2b.t,width:_2b.r-_2b.l,height:_2b.b-_2b.t};}return this.bbox;}});_4.declare("dojox.gfx.shape.Image",_6.gfx.shape.Shape,{constructor:function(_2c){this.shape=_6.gfx.getDefault("Image");this.rawNode=_2c;},getBoundingBox:function(){return this.shape;},setStroke:function(){return this;},setFill:function(){return this;}});_4.declare("dojox.gfx.shape.Text",_6.gfx.shape.Shape,{constructor:function(_2d){this.fontStyle=null;this.shape=_6.gfx.getDefault("Text");this.rawNode=_2d;},getFont:function(){return this.fontStyle;},setFont:function(_2e){this.fontStyle=typeof _2e=="string"?_6.gfx.splitFontString(_2e):_6.gfx.makeParameters(_6.gfx.defaultFont,_2e);this._setFont();return this;}});_6.gfx.shape.Creator={createShape:function(_2f){var gfx=_6.gfx;switch(_2f.type){case gfx.defaultPath.type:return this.createPath(_2f);case gfx.defaultRect.type:return this.createRect(_2f);case gfx.defaultCircle.type:return this.createCircle(_2f);case gfx.defaultEllipse.type:return this.createEllipse(_2f);case gfx.defaultLine.type:return this.createLine(_2f);case gfx.defaultPolyline.type:return this.createPolyline(_2f);case gfx.defaultImage.type:return this.createImage(_2f);case gfx.defaultText.type:return this.createText(_2f);case gfx.defaultTextPath.type:return this.createTextPath(_2f);}return null;},createGroup:function(){return this.createObject(_6.gfx.Group);},createRect:function(_30){return this.createObject(_6.gfx.Rect,_30);},createEllipse:function(_31){return this.createObject(_6.gfx.Ellipse,_31);},createCircle:function(_32){return this.createObject(_6.gfx.Circle,_32);},createLine:function(_33){return this.createObject(_6.gfx.Line,_33);},createPolyline:function(_34){return this.createObject(_6.gfx.Polyline,_34);},createImage:function(_35){return this.createObject(_6.gfx.Image,_35);},createText:function(_36){return this.createObject(_6.gfx.Text,_36);},createPath:function(_37){return this.createObject(_6.gfx.Path,_37);},createTextPath:function(_38){return this.createObject(_6.gfx.TextPath,{}).setText(_38);},createObject:function(_39,_3a){return null;}};}}};});