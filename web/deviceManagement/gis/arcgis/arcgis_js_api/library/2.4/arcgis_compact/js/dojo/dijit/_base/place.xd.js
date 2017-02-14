/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit._base.place"],["require","dojo.window"],["require","dojo.AdapterRegistry"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit._base.place"]){_4._hasResource["dijit._base.place"]=true;_4.provide("dijit._base.place");_4.require("dojo.window");_4.require("dojo.AdapterRegistry");_5.getViewport=function(){return _4.window.getBox();};_5.placeOnScreen=function(_7,_8,_9,_a){var _b=_4.map(_9,function(_c){var c={corner:_c,pos:{x:_8.x,y:_8.y}};if(_a){c.pos.x+=_c.charAt(1)=="L"?_a.x:-_a.x;c.pos.y+=_c.charAt(0)=="T"?_a.y:-_a.y;}return c;});return _5._place(_7,_b);};_5._place=function(_d,_e,_f,_10){var _11=_4.window.getBox();if(!_d.parentNode||String(_d.parentNode.tagName).toLowerCase()!="body"){_4.body().appendChild(_d);}var _12=null;_4.some(_e,function(_13){var _14=_13.corner;var pos=_13.pos;var _15=0;var _16={w:_14.charAt(1)=="L"?(_11.l+_11.w)-pos.x:pos.x-_11.l,h:_14.charAt(1)=="T"?(_11.t+_11.h)-pos.y:pos.y-_11.t};if(_f){var res=_f(_d,_13.aroundCorner,_14,_16,_10);_15=typeof res=="undefined"?0:res;}var _17=_d.style;var _18=_17.display;var _19=_17.visibility;_17.visibility="hidden";_17.display="";var mb=_4.marginBox(_d);_17.display=_18;_17.visibility=_19;var _1a=Math.max(_11.l,_14.charAt(1)=="L"?pos.x:(pos.x-mb.w)),_1b=Math.max(_11.t,_14.charAt(0)=="T"?pos.y:(pos.y-mb.h)),_1c=Math.min(_11.l+_11.w,_14.charAt(1)=="L"?(_1a+mb.w):pos.x),_1d=Math.min(_11.t+_11.h,_14.charAt(0)=="T"?(_1b+mb.h):pos.y),_1e=_1c-_1a,_1f=_1d-_1b;_15+=(mb.w-_1e)+(mb.h-_1f);if(_12==null||_15<_12.overflow){_12={corner:_14,aroundCorner:_13.aroundCorner,x:_1a,y:_1b,w:_1e,h:_1f,overflow:_15,spaceAvailable:_16};}return !_15;});if(_12.overflow&&_f){_f(_d,_12.aroundCorner,_12.corner,_12.spaceAvailable,_10);}var l=_4._isBodyLtr(),s=_d.style;s.top=_12.y+"px";s[l?"left":"right"]=(l?_12.x:_11.w-_12.x-_12.w)+"px";return _12;};_5.placeOnScreenAroundNode=function(_20,_21,_22,_23){_21=_4.byId(_21);var _24=_4.position(_21,true);return _5._placeOnScreenAroundRect(_20,_24.x,_24.y,_24.w,_24.h,_22,_23);};_5.placeOnScreenAroundRectangle=function(_25,_26,_27,_28){return _5._placeOnScreenAroundRect(_25,_26.x,_26.y,_26.width,_26.height,_27,_28);};_5._placeOnScreenAroundRect=function(_29,x,y,_2a,_2b,_2c,_2d){var _2e=[];for(var _2f in _2c){_2e.push({aroundCorner:_2f,corner:_2c[_2f],pos:{x:x+(_2f.charAt(1)=="L"?0:_2a),y:y+(_2f.charAt(0)=="T"?0:_2b)}});}return _5._place(_29,_2e,_2d,{w:_2a,h:_2b});};_5.placementRegistry=new _4.AdapterRegistry();_5.placementRegistry.register("node",function(n,x){return typeof x=="object"&&typeof x.offsetWidth!="undefined"&&typeof x.offsetHeight!="undefined";},_5.placeOnScreenAroundNode);_5.placementRegistry.register("rect",function(n,x){return typeof x=="object"&&"x" in x&&"y" in x&&"width" in x&&"height" in x;},_5.placeOnScreenAroundRectangle);_5.placeOnScreenAroundElement=function(_30,_31,_32,_33){return _5.placementRegistry.match.apply(_5.placementRegistry,arguments);};_5.getPopupAroundAlignment=function(_34,_35){var _36={};_4.forEach(_34,function(pos){switch(pos){case "after":_36[_35?"BR":"BL"]=_35?"BL":"BR";break;case "before":_36[_35?"BL":"BR"]=_35?"BR":"BL";break;case "below-alt":_35=!_35;case "below":_36[_35?"BL":"BR"]=_35?"TL":"TR";_36[_35?"BR":"BL"]=_35?"TR":"TL";break;case "above-alt":_35=!_35;case "above":default:_36[_35?"TL":"TR"]=_35?"BL":"BR";_36[_35?"TR":"TL"]=_35?"BR":"BL";break;}});return _36;};}}};});