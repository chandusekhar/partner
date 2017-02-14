/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.gfx3d.object"],["require","dojox.gfx"],["require","dojox.gfx3d.lighting"],["require","dojox.gfx3d.scheduler"],["require","dojox.gfx3d.vector"],["require","dojox.gfx3d.gradient"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.gfx3d.object"]){_4._hasResource["dojox.gfx3d.object"]=true;_4.provide("dojox.gfx3d.object");_4.require("dojox.gfx");_4.require("dojox.gfx3d.lighting");_4.require("dojox.gfx3d.scheduler");_4.require("dojox.gfx3d.vector");_4.require("dojox.gfx3d.gradient");var _7=function(o,x){if(arguments.length>1){o=x;}var e={};for(var i in o){if(i in e){continue;}}};_4.declare("dojox.gfx3d.Object",null,{constructor:function(){this.object=null;this.matrix=null;this.cache=null;this.renderer=null;this.parent=null;this.strokeStyle=null;this.fillStyle=null;this.shape=null;},setObject:function(_8){this.object=_6.gfx.makeParameters(this.object,_8);return this;},setTransform:function(_9){this.matrix=_6.gfx3d.matrix.clone(_9?_6.gfx3d.matrix.normalize(_9):_6.gfx3d.identity,true);return this;},applyRightTransform:function(_a){return _a?this.setTransform([this.matrix,_a]):this;},applyLeftTransform:function(_b){return _b?this.setTransform([_b,this.matrix]):this;},applyTransform:function(_c){return _c?this.setTransform([this.matrix,_c]):this;},setFill:function(_d){this.fillStyle=_d;return this;},setStroke:function(_e){this.strokeStyle=_e;return this;},toStdFill:function(_f,_10){return (this.fillStyle&&typeof this.fillStyle["type"]!="undefined")?_f[this.fillStyle.type](_10,this.fillStyle.finish,this.fillStyle.color):this.fillStyle;},invalidate:function(){this.renderer.addTodo(this);},destroy:function(){if(this.shape){var p=this.shape.getParent();if(p){p.remove(this.shape);}this.shape=null;}},render:function(_11){throw "Pure virtual function, not implemented";},draw:function(_12){throw "Pure virtual function, not implemented";},getZOrder:function(){return 0;},getOutline:function(){return null;}});_4.declare("dojox.gfx3d.Scene",_6.gfx3d.Object,{constructor:function(){this.objects=[];this.todos=[];this.schedule=_6.gfx3d.scheduler.zOrder;this._draw=_6.gfx3d.drawer.conservative;},setFill:function(_13){this.fillStyle=_13;_4.forEach(this.objects,function(_14){_14.setFill(_13);});return this;},setStroke:function(_15){this.strokeStyle=_15;_4.forEach(this.objects,function(_16){_16.setStroke(_15);});return this;},render:function(_17,_18){var m=_6.gfx3d.matrix.multiply(_17,this.matrix);if(_18){this.todos=this.objects;}_4.forEach(this.todos,function(_19){_19.render(m,_18);});},draw:function(_1a){this.objects=this.schedule(this.objects);this._draw(this.todos,this.objects,this.renderer);},addTodo:function(_1b){if(_4.every(this.todos,function(_1c){return _1c!=_1b;})){this.todos.push(_1b);this.invalidate();}},invalidate:function(){this.parent.addTodo(this);},getZOrder:function(){var _1d=0;_4.forEach(this.objects,function(_1e){_1d+=_1e.getZOrder();});return (this.objects.length>1)?_1d/this.objects.length:0;}});_4.declare("dojox.gfx3d.Edges",_6.gfx3d.Object,{constructor:function(){this.object=_4.clone(_6.gfx3d.defaultEdges);},setObject:function(_1f,_20){this.object=_6.gfx.makeParameters(this.object,(_1f instanceof Array)?{points:_1f,style:_20}:_1f);return this;},getZOrder:function(){var _21=0;_4.forEach(this.cache,function(_22){_21+=_22.z;});return (this.cache.length>1)?_21/this.cache.length:0;},render:function(_23){var m=_6.gfx3d.matrix.multiply(_23,this.matrix);this.cache=_4.map(this.object.points,function(_24){return _6.gfx3d.matrix.multiplyPoint(m,_24);});},draw:function(){var c=this.cache;if(this.shape){this.shape.setShape("");}else{this.shape=this.renderer.createPath();}var p=this.shape.setAbsoluteMode("absolute");if(this.object.style=="strip"||this.object.style=="loop"){p.moveTo(c[0].x,c[0].y);_4.forEach(c.slice(1),function(_25){p.lineTo(_25.x,_25.y);});if(this.object.style=="loop"){p.closePath();}}else{for(var i=0;i<this.cache.length;){p.moveTo(c[i].x,c[i].y);i++;p.lineTo(c[i].x,c[i].y);i++;}}p.setStroke(this.strokeStyle);}});_4.declare("dojox.gfx3d.Orbit",_6.gfx3d.Object,{constructor:function(){this.object=_4.clone(_6.gfx3d.defaultOrbit);},render:function(_26){var m=_6.gfx3d.matrix.multiply(_26,this.matrix);var _27=[0,Math.PI/4,Math.PI/3];var _28=_6.gfx3d.matrix.multiplyPoint(m,this.object.center);var _29=_4.map(_27,function(_2a){return {x:this.center.x+this.radius*Math.cos(_2a),y:this.center.y+this.radius*Math.sin(_2a),z:this.center.z};},this.object);_29=_4.map(_29,function(_2b){return _6.gfx3d.matrix.multiplyPoint(m,_2b);});var _2c=_6.gfx3d.vector.normalize(_29);_29=_4.map(_29,function(_2d){return _6.gfx3d.vector.substract(_2d,_28);});var A={xx:_29[0].x*_29[0].y,xy:_29[0].y*_29[0].y,xz:1,yx:_29[1].x*_29[1].y,yy:_29[1].y*_29[1].y,yz:1,zx:_29[2].x*_29[2].y,zy:_29[2].y*_29[2].y,zz:1,dx:0,dy:0,dz:0};var B=_4.map(_29,function(_2e){return -Math.pow(_2e.x,2);});var X=_6.gfx3d.matrix.multiplyPoint(_6.gfx3d.matrix.invert(A),B[0],B[1],B[2]);var _2f=Math.atan2(X.x,1-X.y)/2;var _30=_4.map(_29,function(_31){return _6.gfx.matrix.multiplyPoint(_6.gfx.matrix.rotate(-_2f),_31.x,_31.y);});var a=Math.pow(_30[0].x,2);var b=Math.pow(_30[0].y,2);var c=Math.pow(_30[1].x,2);var d=Math.pow(_30[1].y,2);var rx=Math.sqrt((a*d-b*c)/(d-b));var ry=Math.sqrt((a*d-b*c)/(a-c));this.cache={cx:_28.x,cy:_28.y,rx:rx,ry:ry,theta:_2f,normal:_2c};},draw:function(_32){if(this.shape){this.shape.setShape(this.cache);}else{this.shape=this.renderer.createEllipse(this.cache);}this.shape.applyTransform(_6.gfx.matrix.rotateAt(this.cache.theta,this.cache.cx,this.cache.cy)).setStroke(this.strokeStyle).setFill(this.toStdFill(_32,this.cache.normal));}});_4.declare("dojox.gfx3d.Path3d",_6.gfx3d.Object,{constructor:function(){this.object=_4.clone(_6.gfx3d.defaultPath3d);this.segments=[];this.absolute=true;this.last={};this.path="";},_collectArgs:function(_33,_34){for(var i=0;i<_34.length;++i){var t=_34[i];if(typeof (t)=="boolean"){_33.push(t?1:0);}else{if(typeof (t)=="number"){_33.push(t);}else{if(t instanceof Array){this._collectArgs(_33,t);}else{if("x" in t&&"y" in t){_33.push(t.x);_33.push(t.y);}}}}}},_validSegments:{m:3,l:3,z:0},_pushSegment:function(_35,_36){var _37=this._validSegments[_35.toLowerCase()],_38;if(typeof (_37)=="number"){if(_37){if(_36.length>=_37){_38={action:_35,args:_36.slice(0,_36.length-_36.length%_37)};this.segments.push(_38);}}else{_38={action:_35,args:[]};this.segments.push(_38);}}},moveTo:function(){var _39=[];this._collectArgs(_39,arguments);this._pushSegment(this.absolute?"M":"m",_39);return this;},lineTo:function(){var _3a=[];this._collectArgs(_3a,arguments);this._pushSegment(this.absolute?"L":"l",_3a);return this;},closePath:function(){this._pushSegment("Z",[]);return this;},render:function(_3b){var m=_6.gfx3d.matrix.multiply(_3b,this.matrix);var _3c="";var _3d=this._validSegments;_4.forEach(this.segments,function(_3e){_3c+=_3e.action;for(var i=0;i<_3e.args.length;i+=_3d[_3e.action.toLowerCase()]){var pt=_6.gfx3d.matrix.multiplyPoint(m,_3e.args[i],_3e.args[i+1],_3e.args[i+2]);_3c+=" "+pt.x+" "+pt.y;}});this.cache=_3c;},_draw:function(){return this.parent.createPath(this.cache);}});_4.declare("dojox.gfx3d.Triangles",_6.gfx3d.Object,{constructor:function(){this.object=_4.clone(_6.gfx3d.defaultTriangles);},setObject:function(_3f,_40){if(_3f instanceof Array){this.object=_6.gfx.makeParameters(this.object,{points:_3f,style:_40});}else{this.object=_6.gfx.makeParameters(this.object,_3f);}return this;},render:function(_41){var m=_6.gfx3d.matrix.multiply(_41,this.matrix);var c=_4.map(this.object.points,function(_42){return _6.gfx3d.matrix.multiplyPoint(m,_42);});this.cache=[];var _43=c.slice(0,2);var _44=c[0];if(this.object.style=="strip"){_4.forEach(c.slice(2),function(_45){_43.push(_45);_43.push(_43[0]);this.cache.push(_43);_43=_43.slice(1,3);},this);}else{if(this.object.style=="fan"){_4.forEach(c.slice(2),function(_46){_43.push(_46);_43.push(_44);this.cache.push(_43);_43=[_44,_46];},this);}else{for(var i=0;i<c.length;){this.cache.push([c[i],c[i+1],c[i+2],c[i]]);i+=3;}}}},draw:function(_47){this.cache=_6.gfx3d.scheduler.bsp(this.cache,function(it){return it;});if(this.shape){this.shape.clear();}else{this.shape=this.renderer.createGroup();}_4.forEach(this.cache,function(_48){this.shape.createPolyline(_48).setStroke(this.strokeStyle).setFill(this.toStdFill(_47,_6.gfx3d.vector.normalize(_48)));},this);},getZOrder:function(){var _49=0;_4.forEach(this.cache,function(_4a){_49+=(_4a[0].z+_4a[1].z+_4a[2].z)/3;});return (this.cache.length>1)?_49/this.cache.length:0;}});_4.declare("dojox.gfx3d.Quads",_6.gfx3d.Object,{constructor:function(){this.object=_4.clone(_6.gfx3d.defaultQuads);},setObject:function(_4b,_4c){this.object=_6.gfx.makeParameters(this.object,(_4b instanceof Array)?{points:_4b,style:_4c}:_4b);return this;},render:function(_4d){var m=_6.gfx3d.matrix.multiply(_4d,this.matrix),i;var c=_4.map(this.object.points,function(_4e){return _6.gfx3d.matrix.multiplyPoint(m,_4e);});this.cache=[];if(this.object.style=="strip"){var _4f=c.slice(0,2);for(i=2;i<c.length;){_4f=_4f.concat([c[i],c[i+1],_4f[0]]);this.cache.push(_4f);_4f=_4f.slice(2,4);i+=2;}}else{for(i=0;i<c.length;){this.cache.push([c[i],c[i+1],c[i+2],c[i+3],c[i]]);i+=4;}}},draw:function(_50){this.cache=_6.gfx3d.scheduler.bsp(this.cache,function(it){return it;});if(this.shape){this.shape.clear();}else{this.shape=this.renderer.createGroup();}for(var x=0;x<this.cache.length;x++){this.shape.createPolyline(this.cache[x]).setStroke(this.strokeStyle).setFill(this.toStdFill(_50,_6.gfx3d.vector.normalize(this.cache[x])));}},getZOrder:function(){var _51=0;for(var x=0;x<this.cache.length;x++){var i=this.cache[x];_51+=(i[0].z+i[1].z+i[2].z+i[3].z)/4;}return (this.cache.length>1)?_51/this.cache.length:0;}});_4.declare("dojox.gfx3d.Polygon",_6.gfx3d.Object,{constructor:function(){this.object=_4.clone(_6.gfx3d.defaultPolygon);},setObject:function(_52){this.object=_6.gfx.makeParameters(this.object,(_52 instanceof Array)?{path:_52}:_52);return this;},render:function(_53){var m=_6.gfx3d.matrix.multiply(_53,this.matrix);this.cache=_4.map(this.object.path,function(_54){return _6.gfx3d.matrix.multiplyPoint(m,_54);});this.cache.push(this.cache[0]);},draw:function(_55){if(this.shape){this.shape.setShape({points:this.cache});}else{this.shape=this.renderer.createPolyline({points:this.cache});}this.shape.setStroke(this.strokeStyle).setFill(this.toStdFill(_55,_6.gfx3d.matrix.normalize(this.cache)));},getZOrder:function(){var _56=0;for(var x=0;x<this.cache.length;x++){_56+=this.cache[x].z;}return (this.cache.length>1)?_56/this.cache.length:0;},getOutline:function(){return this.cache.slice(0,3);}});_4.declare("dojox.gfx3d.Cube",_6.gfx3d.Object,{constructor:function(){this.object=_4.clone(_6.gfx3d.defaultCube);this.polygons=[];},setObject:function(_57){this.object=_6.gfx.makeParameters(this.object,_57);},render:function(_58){var a=this.object.top;var g=this.object.bottom;var b={x:g.x,y:a.y,z:a.z};var c={x:g.x,y:g.y,z:a.z};var d={x:a.x,y:g.y,z:a.z};var e={x:a.x,y:a.y,z:g.z};var f={x:g.x,y:a.y,z:g.z};var h={x:a.x,y:g.y,z:g.z};var _59=[a,b,c,d,e,f,g,h];var m=_6.gfx3d.matrix.multiply(_58,this.matrix);var p=_4.map(_59,function(_5a){return _6.gfx3d.matrix.multiplyPoint(m,_5a);});a=p[0];b=p[1];c=p[2];d=p[3];e=p[4];f=p[5];g=p[6];h=p[7];this.cache=[[a,b,c,d,a],[e,f,g,h,e],[a,d,h,e,a],[d,c,g,h,d],[c,b,f,g,c],[b,a,e,f,b]];},draw:function(_5b){this.cache=_6.gfx3d.scheduler.bsp(this.cache,function(it){return it;});var _5c=this.cache.slice(3);if(this.shape){this.shape.clear();}else{this.shape=this.renderer.createGroup();}for(var x=0;x<_5c.length;x++){this.shape.createPolyline(_5c[x]).setStroke(this.strokeStyle).setFill(this.toStdFill(_5b,_6.gfx3d.vector.normalize(_5c[x])));}},getZOrder:function(){var top=this.cache[0][0];var _5d=this.cache[1][2];return (top.z+_5d.z)/2;}});_4.declare("dojox.gfx3d.Cylinder",_6.gfx3d.Object,{constructor:function(){this.object=_4.clone(_6.gfx3d.defaultCylinder);},render:function(_5e){var m=_6.gfx3d.matrix.multiply(_5e,this.matrix);var _5f=[0,Math.PI/4,Math.PI/3];var _60=_6.gfx3d.matrix.multiplyPoint(m,this.object.center);var _61=_4.map(_5f,function(_62){return {x:this.center.x+this.radius*Math.cos(_62),y:this.center.y+this.radius*Math.sin(_62),z:this.center.z};},this.object);_61=_4.map(_61,function(_63){return _6.gfx3d.vector.substract(_6.gfx3d.matrix.multiplyPoint(m,_63),_60);});var A={xx:_61[0].x*_61[0].y,xy:_61[0].y*_61[0].y,xz:1,yx:_61[1].x*_61[1].y,yy:_61[1].y*_61[1].y,yz:1,zx:_61[2].x*_61[2].y,zy:_61[2].y*_61[2].y,zz:1,dx:0,dy:0,dz:0};var B=_4.map(_61,function(_64){return -Math.pow(_64.x,2);});var X=_6.gfx3d.matrix.multiplyPoint(_6.gfx3d.matrix.invert(A),B[0],B[1],B[2]);var _65=Math.atan2(X.x,1-X.y)/2;var _66=_4.map(_61,function(_67){return _6.gfx.matrix.multiplyPoint(_6.gfx.matrix.rotate(-_65),_67.x,_67.y);});var a=Math.pow(_66[0].x,2);var b=Math.pow(_66[0].y,2);var c=Math.pow(_66[1].x,2);var d=Math.pow(_66[1].y,2);var rx=Math.sqrt((a*d-b*c)/(d-b));var ry=Math.sqrt((a*d-b*c)/(a-c));if(rx<ry){var t=rx;rx=ry;ry=t;_65-=Math.PI/2;}var top=_6.gfx3d.matrix.multiplyPoint(m,_6.gfx3d.vector.sum(this.object.center,{x:0,y:0,z:this.object.height}));var _68=this.fillStyle.type=="constant"?this.fillStyle.color:_6.gfx3d.gradient(this.renderer.lighting,this.fillStyle,this.object.center,this.object.radius,Math.PI,2*Math.PI,m);if(isNaN(rx)||isNaN(ry)||isNaN(_65)){rx=this.object.radius,ry=0,_65=0;}this.cache={center:_60,top:top,rx:rx,ry:ry,theta:_65,gradient:_68};},draw:function(){var c=this.cache,v=_6.gfx3d.vector,m=_6.gfx.matrix,_69=[c.center,c.top],_6a=v.substract(c.top,c.center);if(v.dotProduct(_6a,this.renderer.lighting.incident)>0){_69=[c.top,c.center];_6a=v.substract(c.center,c.top);}var _6b=this.renderer.lighting[this.fillStyle.type](_6a,this.fillStyle.finish,this.fillStyle.color),d=Math.sqrt(Math.pow(c.center.x-c.top.x,2)+Math.pow(c.center.y-c.top.y,2));if(this.shape){this.shape.clear();}else{this.shape=this.renderer.createGroup();}this.shape.createPath("").moveTo(0,-c.rx).lineTo(d,-c.rx).lineTo(d,c.rx).lineTo(0,c.rx).arcTo(c.ry,c.rx,0,true,true,0,-c.rx).setFill(c.gradient).setStroke(this.strokeStyle).setTransform([m.translate(_69[0]),m.rotate(Math.atan2(_69[1].y-_69[0].y,_69[1].x-_69[0].x))]);if(c.rx>0&&c.ry>0){this.shape.createEllipse({cx:_69[1].x,cy:_69[1].y,rx:c.rx,ry:c.ry}).setFill(_6b).setStroke(this.strokeStyle).applyTransform(m.rotateAt(c.theta,_69[1]));}}});_4.declare("dojox.gfx3d.Viewport",_6.gfx.Group,{constructor:function(){this.dimension=null;this.objects=[];this.todos=[];this.renderer=this;this.schedule=_6.gfx3d.scheduler.zOrder;this.draw=_6.gfx3d.drawer.conservative;this.deep=false;this.lights=[];this.lighting=null;},setCameraTransform:function(_6c){this.camera=_6.gfx3d.matrix.clone(_6c?_6.gfx3d.matrix.normalize(_6c):_6.gfx3d.identity,true);this.invalidate();return this;},applyCameraRightTransform:function(_6d){return _6d?this.setCameraTransform([this.camera,_6d]):this;},applyCameraLeftTransform:function(_6e){return _6e?this.setCameraTransform([_6e,this.camera]):this;},applyCameraTransform:function(_6f){return this.applyCameraRightTransform(_6f);},setLights:function(_70,_71,_72){this.lights=(_70 instanceof Array)?{sources:_70,ambient:_71,specular:_72}:_70;var _73={x:0,y:0,z:1};this.lighting=new _6.gfx3d.lighting.Model(_73,this.lights.sources,this.lights.ambient,this.lights.specular);this.invalidate();return this;},addLights:function(_74){return this.setLights(this.lights.sources.concat(_74));},addTodo:function(_75){if(_4.every(this.todos,function(_76){return _76!=_75;})){this.todos.push(_75);}},invalidate:function(){this.deep=true;this.todos=this.objects;},setDimensions:function(dim){if(dim){var w=_4.isString(dim.width)?parseInt(dim.width):dim.width;var h=_4.isString(dim.height)?parseInt(dim.height):dim.height;if(this.rawNode){var trs=this.rawNode.style;trs.height=h;trs.width=w;}this.dimension={width:w,height:h};}else{this.dimension=null;}},render:function(){if(!this.todos.length){return;}var m=_6.gfx3d.matrix;for(var x=0;x<this.todos.length;x++){this.todos[x].render(_6.gfx3d.matrix.normalize([m.cameraRotateXg(180),m.cameraTranslate(0,this.dimension.height,0),this.camera]),this.deep);}this.objects=this.schedule(this.objects);this.draw(this.todos,this.objects,this);this.todos=[];this.deep=false;}});_6.gfx3d.Viewport.nodeType=_6.gfx.Group.nodeType;_6.gfx3d._creators={createEdges:function(_77,_78){return this.create3DObject(_6.gfx3d.Edges,_77,_78);},createTriangles:function(_79,_7a){return this.create3DObject(_6.gfx3d.Triangles,_79,_7a);},createQuads:function(_7b,_7c){return this.create3DObject(_6.gfx3d.Quads,_7b,_7c);},createPolygon:function(_7d){return this.create3DObject(_6.gfx3d.Polygon,_7d);},createOrbit:function(_7e){return this.create3DObject(_6.gfx3d.Orbit,_7e);},createCube:function(_7f){return this.create3DObject(_6.gfx3d.Cube,_7f);},createCylinder:function(_80){return this.create3DObject(_6.gfx3d.Cylinder,_80);},createPath3d:function(_81){return this.create3DObject(_6.gfx3d.Path3d,_81);},createScene:function(){return this.create3DObject(_6.gfx3d.Scene);},create3DObject:function(_82,_83,_84){var obj=new _82();this.adopt(obj);if(_83){obj.setObject(_83,_84);}return obj;},adopt:function(obj){obj.renderer=this.renderer;obj.parent=this;this.objects.push(obj);this.addTodo(obj);return this;},abandon:function(obj,_85){for(var i=0;i<this.objects.length;++i){if(this.objects[i]==obj){this.objects.splice(i,1);}}obj.parent=null;return this;},setScheduler:function(_86){this.schedule=_86;},setDrawer:function(_87){this.draw=_87;}};_4.extend(_6.gfx3d.Viewport,_6.gfx3d._creators);_4.extend(_6.gfx3d.Scene,_6.gfx3d._creators);delete _6.gfx3d._creators;_4.extend(_6.gfx.Surface,{createViewport:function(){var _88=this.createObject(_6.gfx3d.Viewport,null,true);_88.setDimensions(this.getDimensions());return _88;}});}}};});