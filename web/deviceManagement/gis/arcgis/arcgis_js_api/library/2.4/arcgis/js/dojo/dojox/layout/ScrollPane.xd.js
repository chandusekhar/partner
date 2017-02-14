/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.layout.ScrollPane"],["require","dijit.layout.ContentPane"],["require","dijit._Templated"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.layout.ScrollPane"]){_4._hasResource["dojox.layout.ScrollPane"]=true;_4.provide("dojox.layout.ScrollPane");_4.experimental("dojox.layout.ScrollPane");_4.require("dijit.layout.ContentPane");_4.require("dijit._Templated");_4.declare("dojox.layout.ScrollPane",[_5.layout.ContentPane,_5._Templated],{_line:null,_lo:null,_offset:15,orientation:"vertical",autoHide:true,templateString:_4.cache("dojox.layout","resources/ScrollPane.html","<div class=\"dojoxScrollWindow\" dojoAttachEvent=\"onmouseenter: _enter, onmouseleave: _leave\">\r\n    <div class=\"dojoxScrollWrapper\" style=\"${style}\" dojoAttachPoint=\"wrapper\" dojoAttachEvent=\"onmousemove: _calc\">\r\n\t<div class=\"dojoxScrollPane\" dojoAttachPoint=\"containerNode\"></div>\r\n    </div>\r\n    <div dojoAttachPoint=\"helper\" class=\"dojoxScrollHelper\"><span class=\"helperInner\">|</span></div>\r\n</div>\r\n"),resize:function(_7){if(_7){if(_7.h){_4.style(this.domNode,"height",_7.h+"px");}if(_7.w){_4.style(this.domNode,"width",_7.w+"px");}}var _8=this._dir,_9=this._vertical,_a=this.containerNode[(_9?"scrollHeight":"scrollWidth")];_4.style(this.wrapper,this._dir,this.domNode.style[this._dir]);this._lo=_4.coords(this.wrapper,true);this._size=Math.max(0,_a-this._lo[(_9?"h":"w")]);if(!this._size){this.helper.style.display="none";this.wrapper[this._scroll]=0;return;}else{this.helper.style.display="";}this._line=new _4._Line(0-this._offset,this._size+(this._offset*2));var u=this._lo[(_9?"h":"w")],r=Math.min(1,u/_a),s=u*r,c=Math.floor(u-(u*r));this._helpLine=new _4._Line(0,c);_4.style(this.helper,_8,Math.floor(s)+"px");},postCreate:function(){this.inherited(arguments);if(this.autoHide){this._showAnim=_4._fade({node:this.helper,end:0.5,duration:350});this._hideAnim=_4.fadeOut({node:this.helper,duration:750});}this._vertical=(this.orientation=="vertical");if(!this._vertical){_4.addClass(this.containerNode,"dijitInline");this._dir="width";this._edge="left";this._scroll="scrollLeft";}else{this._dir="height";this._edge="top";this._scroll="scrollTop";}if(this._hideAnim){this._hideAnim.play();}_4.style(this.wrapper,"overflow","hidden");},_set:function(n){if(!this._size){return;}this.wrapper[this._scroll]=Math.floor(this._line.getValue(n));_4.style(this.helper,this._edge,Math.floor(this._helpLine.getValue(n))+"px");},_calc:function(e){if(!this._lo){this.resize();}this._set(this._vertical?((e.pageY-this._lo.y)/this._lo.h):((e.pageX-this._lo.x)/this._lo.w));},_enter:function(e){if(this._hideAnim){if(this._hideAnim.status()=="playing"){this._hideAnim.stop();}this._showAnim.play();}},_leave:function(e){if(this._hideAnim){this._hideAnim.play();}}});}}};});