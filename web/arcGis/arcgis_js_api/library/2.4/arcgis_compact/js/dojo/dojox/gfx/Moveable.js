/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.gfx.Moveable"]){dojo._hasResource["dojox.gfx.Moveable"]=true;dojo.provide("dojox.gfx.Moveable");dojo.require("dojox.gfx.Mover");dojo.declare("dojox.gfx.Moveable",null,{constructor:function(_1,_2){this.shape=_1;this.delay=(_2&&_2.delay>0)?_2.delay:0;this.mover=(_2&&_2.mover)?_2.mover:dojox.gfx.Mover;this.events=[this.shape.connect("onmousedown",this,"onMouseDown"),this.shape.connect("ontouchstart",this,"onMouseDown")];},destroy:function(){dojo.forEach(this.events,this.shape.disconnect,this.shape);this.events=this.shape=null;},onMouseDown:function(e){var _3=e.touches?e.touches[0]:e;if(this.delay){this.events.push(this.shape.connect("onmousemove",this,"onMouseMove"));this.events.push(this.shape.connect("ontouchmove",this,"onMouseMove"));this.events.push(this.shape.connect("onmouseup",this,"onMouseUp"));this.events.push(this.shape.connect("ontouchend",this,"onMouseUp"));this._lastX=_3.clientX;this._lastY=_3.clientY;}else{new this.mover(this.shape,_3,this);}dojo.stopEvent(e);},onMouseMove:function(e){var _4=e.touches?e.touches[0]:e;if(Math.abs(_4.clientX-this._lastX)>this.delay||Math.abs(_4.clientY-this._lastY)>this.delay){this.onMouseUp(e);new this.mover(this.shape,_4,this);}dojo.stopEvent(e);},onMouseUp:function(e){this.shape.disconnect(this.events.shift());this.shape.disconnect(this.events.shift());},onMoveStart:function(_5){dojo.publish("/gfx/move/start",[_5]);dojo.addClass(dojo.body(),"dojoMove");},onMoveStop:function(_6){dojo.publish("/gfx/move/stop",[_6]);dojo.removeClass(dojo.body(),"dojoMove");},onFirstMove:function(_7){},onMove:function(_8,_9){this.onMoving(_8,_9);this.shape.applyLeftTransform(_9);this.onMoved(_8,_9);},onMoving:function(_a,_b){},onMoved:function(_c,_d){}});}