/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.timing.Sequence"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.timing.Sequence"]){_4._hasResource["dojox.timing.Sequence"]=true;_4.provide("dojox.timing.Sequence");_4.experimental("dojox.timing.Sequence");_4.declare("dojox.timing.Sequence",null,{_goOnPause:0,_running:false,constructor:function(){this._defsResolved=[];},go:function(_7,_8){this._running=true;_4.forEach(_7,function(_9){if(_9.repeat>1){var _a=_9.repeat;for(var j=0;j<_a;j++){_9.repeat=1;this._defsResolved.push(_9);}}else{this._defsResolved.push(_9);}},this);var _b=_7[_7.length-1];if(_8){this._defsResolved.push({func:_8});}this._defsResolved.push({func:[this.stop,this]});this._curId=0;this._go();},_go:function(){if(!this._running){return;}var _c=this._defsResolved[this._curId];this._curId+=1;function _d(_e){var _f=null;if(_4.isArray(_e)){if(_e.length>2){_f=_e[0].apply(_e[1],_e.slice(2));}else{_f=_e[0].apply(_e[1]);}}else{_f=_e();}return _f;};if(this._curId>=this._defsResolved.length){_d(_c.func);return;}if(_c.pauseAfter){if(_d(_c.func)!==false){setTimeout(_4.hitch(this,"_go"),_c.pauseAfter);}else{this._goOnPause=_c.pauseAfter;}}else{if(_c.pauseBefore){var x=_4.hitch(this,function(){if(_d(_c.func)!==false){this._go();}});setTimeout(x,_c.pauseBefore);}else{if(_d(_c.func)!==false){this._go();}}}},goOn:function(){if(this._goOnPause){setTimeout(_4.hitch(this,"_go"),this._goOnPause);this._goOnPause=0;}else{this._go();}},stop:function(){this._running=false;}});}}};});