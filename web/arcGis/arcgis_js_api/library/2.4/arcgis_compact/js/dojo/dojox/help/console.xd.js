/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.help.console"],["require","dojox.help._base"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.help.console"]){_4._hasResource["dojox.help.console"]=true;_4.provide("dojox.help.console");_4.require("dojox.help._base");_4.mixin(_6.help,{_plainText:function(_7){return _7.replace(/(<[^>]*>|&[^;]{2,6};)/g,"");},_displayLocated:function(_8){var _9={};_4.forEach(_8,function(_a){_9[_a[0]]=_4.isMoz?{toString:function(){return "Click to view";},item:_a[1]}:_a[1];});console.dir(_9);},_displayHelp:function(_b,_c){if(_b){var _d="Help for: "+_c.name;console.log(_d);var _e="";for(var i=0;i<_d.length;i++){_e+="=";}console.log(_e);}else{if(!_c){console.log("No documentation for this object");}else{var _f=false;for(var _10 in _c){var _11=_c[_10];if(_10=="returns"&&_c.type!="Function"&&_c.type!="Constructor"){continue;}if(_11&&(!_4.isArray(_11)||_11.length)){_f=true;console.info(_10.toUpperCase());_11=_4.isString(_11)?_6.help._plainText(_11):_11;if(_10=="returns"){var _12=_4.map(_11.types||[],"return item.title;").join("|");if(_11.summary){if(_12){_12+=": ";}_12+=_6.help._plainText(_11.summary);}console.log(_12||"Uknown");}else{if(_10=="parameters"){for(var j=0,_13;_13=_11[j];j++){var _14=_4.map(_13.types,"return item.title").join("|");console.log((_14)?(_13.name+": "+_14):_13.name);var _15="";if(_13.optional){_15+="Optional. ";}if(_13.repating){_15+="Repeating. ";}_15+=_6.help._plainText(_13.summary);if(_15){_15="  - "+_15;for(var k=0;k<_13.name.length;k++){_15=" "+_15;}console.log(_15);}}}else{console.log(_11);}}}}if(!_f){console.log("No documentation for this object");}}}}});_6.help.init();}}};});