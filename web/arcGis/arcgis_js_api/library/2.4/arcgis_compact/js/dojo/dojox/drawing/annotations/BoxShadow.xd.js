/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.drawing.annotations.BoxShadow"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.drawing.annotations.BoxShadow"]){_4._hasResource["dojox.drawing.annotations.BoxShadow"]=true;_4.provide("dojox.drawing.annotations.BoxShadow");_6.drawing.annotations.BoxShadow=_6.drawing.util.oo.declare(function(_7){this.stencil=_7.stencil;this.util=_7.stencil.util;this.mouse=_7.stencil.mouse;this.style=_7.stencil.style;var _8={size:6,mult:4,alpha:0.05,place:"BR",color:"#646464"};delete _7.stencil;this.options=_4.mixin(_8,_7);this.options.color=new _4.Color(this.options.color);this.options.color.a=this.options.alpha;switch(this.stencil.shortType){case "image":case "rect":this.method="createForRect";break;case "ellipse":this.method="createForEllipse";break;case "line":this.method="createForLine";break;case "path":this.method="createForPath";break;case "vector":this.method="createForZArrow";break;default:console.warn("A shadow cannot be made for Stencil type ",this.stencil.type);}if(this.method){this.render();this.stencil.connectMult([[this.stencil,"onTransform",this,"onTransform"],this.method=="createForZArrow"?[this.stencil,"render",this,"render"]:[this.stencil,"render",this,"onRender"],[this.stencil,"onDelete",this,"destroy"]]);}},{showing:true,render:function(){if(this.container){this.container.removeShape();}this.container=this.stencil.container.createGroup();this.container.moveToBack();var o=this.options,_9=o.size,_a=o.mult,d=this.method=="createForPath"?this.stencil.points:this.stencil.data,r=d.r||1,p=o.place,c=o.color;this[this.method](o,_9,_a,d,r,p,c);},hide:function(){if(this.showing){this.showing=false;this.container.removeShape();}},show:function(){if(!this.showing){this.showing=true;this.stencil.container.add(this.container);}},createForPath:function(o,_b,_c,_d,r,p,c){var sh=_b*_c/4,_e=/B/.test(p)?sh:/T/.test(p)?sh*-1:0,_f=/R/.test(p)?sh:/L/.test(p)?sh*-1:0;var _10=true;for(var i=1;i<=_b;i++){var _11=i*_c;if(_6.gfx.renderer=="svg"){var _12=[];_4.forEach(_d,function(o,i){if(i==0){_12.push("M "+(o.x+_f)+" "+(o.y+_e));}else{var cmd=o.t||"L ";_12.push(cmd+(o.x+_f)+" "+(o.y+_e));}},this);if(_10){_12.push("Z");}this.container.createPath(_12.join(", ")).setStroke({width:_11,color:c,cap:"round"});}else{var pth=this.container.createPath({}).setStroke({width:_11,color:c,cap:"round"});_4.forEach(this.points,function(o,i){if(i==0||o.t=="M"){pth.moveTo(o.x+_f,o.y+_e);}else{if(o.t=="Z"){_10&&pth.closePath();}else{pth.lineTo(o.x+_f,o.y+_e);}}},this);_10&&pth.closePath();}}},createForLine:function(o,_13,_14,d,r,p,c){var sh=_13*_14/4,shy=/B/.test(p)?sh:/T/.test(p)?sh*-1:0,shx=/R/.test(p)?sh:/L/.test(p)?sh*-1:0;for(var i=1;i<=_13;i++){var _15=i*_14;this.container.createLine({x1:d.x1+shx,y1:d.y1+shy,x2:d.x2+shx,y2:d.y2+shy}).setStroke({width:_15,color:c,cap:"round"});}},createForEllipse:function(o,_16,_17,d,r,p,c){var sh=_16*_17/8,shy=/B/.test(p)?sh:/T/.test(p)?sh*-1:0,shx=/R/.test(p)?sh*0.8:/L/.test(p)?sh*-0.8:0;for(var i=1;i<=_16;i++){var _18=i*_17;this.container.createEllipse({cx:d.cx+shx,cy:d.cy+shy,rx:d.rx-sh,ry:d.ry-sh,r:r}).setStroke({width:_18,color:c});}},createForRect:function(o,_19,_1a,d,r,p,c){var sh=_19*_1a/2,shy=/B/.test(p)?sh:/T/.test(p)?0:sh/2,shx=/R/.test(p)?sh:/L/.test(p)?0:sh/2;for(var i=1;i<=_19;i++){var _1b=i*_1a;this.container.createRect({x:d.x+shx,y:d.y+shy,width:d.width-sh,height:d.height-sh,r:r}).setStroke({width:_1b,color:c});}},arrowPoints:function(){var d=this.stencil.data;var _1c=this.stencil.getRadius();var _1d=this.style.zAngle+30;var pt=this.util.pointOnCircle(d.x1,d.y1,_1c*0.75,_1d);var obj={start:{x:d.x1,y:d.y1},x:pt.x,y:pt.y};var _1d=this.util.angle(obj);var _1e=this.util.length(obj);var al=this.style.arrows.length;var aw=this.style.arrows.width/3;if(_1e<al){al=_1e/2;}var p1=this.util.pointOnCircle(obj.x,obj.y,-al,_1d-aw);var p2=this.util.pointOnCircle(obj.x,obj.y,-al,_1d+aw);return [{x:obj.x,y:obj.y},p1,p2];},createForZArrow:function(o,_1f,_20,pts,r,p,c){if(this.stencil.data.cosphi<1||!this.stencil.points[0]){return;}var sh=_1f*_20/4,shy=/B/.test(p)?sh:/T/.test(p)?sh*-1:0,shx=/R/.test(p)?sh:/L/.test(p)?sh*-1:0;var _21=true;for(var i=1;i<=_1f;i++){var _22=i*_20;pts=this.arrowPoints();if(!pts){return;}if(_6.gfx.renderer=="svg"){var _23=[];_4.forEach(pts,function(o,i){if(i==0){_23.push("M "+(o.x+shx)+" "+(o.y+shy));}else{var cmd=o.t||"L ";_23.push(cmd+(o.x+shx)+" "+(o.y+shy));}},this);if(_21){_23.push("Z");}this.container.createPath(_23.join(", ")).setStroke({width:_22,color:c,cap:"round"}).setFill(c);}else{var pth=this.container.createPath({}).setStroke({width:_22,color:c,cap:"round"});_4.forEach(pts,function(o,i){if(i==0||o.t=="M"){pth.moveTo(o.x+shx,o.y+shy);}else{if(o.t=="Z"){_21&&pth.closePath();}else{pth.lineTo(o.x+shx,o.y+shy);}}},this);_21&&pth.closePath();}var sp=this.stencil.points;this.container.createLine({x1:sp[0].x,y1:sp[0].y,x2:pts[0].x,y2:pts[0].y}).setStroke({width:_22,color:c,cap:"round"});}},onTransform:function(){this.render();},onRender:function(){this.container.moveToBack();},destroy:function(){if(this.container){this.container.removeShape();}}});}}};});