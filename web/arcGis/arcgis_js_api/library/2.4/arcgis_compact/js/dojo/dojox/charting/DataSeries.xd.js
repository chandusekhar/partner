/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.charting.DataSeries"],["require","dojox.lang.functional"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.charting.DataSeries"]){_4._hasResource["dojox.charting.DataSeries"]=true;_4.provide("dojox.charting.DataSeries");_4.require("dojox.lang.functional");_4.declare("dojox.charting.DataSeries",null,{constructor:function(_7,_8,_9){this.store=_7;this.kwArgs=_8;if(_9){if(_4.isFunction(_9)){this.value=_9;}else{if(_4.isObject(_9)){this.value=_4.hitch(this,"_dictValue",_6.lang.functional.keys(_9),_9);}else{this.value=_4.hitch(this,"_fieldValue",_9);}}}else{this.value=_4.hitch(this,"_defaultValue");}this.data=[];this._events=[];if(this.store.getFeatures()["dojo.data.api.Notification"]){this._events.push(_4.connect(this.store,"onNew",this,"_onStoreNew"),_4.connect(this.store,"onDelete",this,"_onStoreDelete"),_4.connect(this.store,"onSet",this,"_onStoreSet"));}this.fetch();},destroy:function(){_4.forEach(this._events,_4.disconnect);},setSeriesObject:function(_a){this.series=_a;},_dictValue:function(_b,_c,_d,_e){var o={};_4.forEach(_b,function(_f){o[_f]=_d.getValue(_e,_c[_f]);});return o;},_fieldValue:function(_10,_11,_12){return _11.getValue(_12,_10);},_defaultValue:function(_13,_14){return _13.getValue(_14,"value");},fetch:function(){if(!this._inFlight){this._inFlight=true;var _15=_4.delegate(this.kwArgs);_15.onComplete=_4.hitch(this,"_onFetchComplete");_15.onError=_4.hitch(this,"onFetchError");this.store.fetch(_15);}},_onFetchComplete:function(_16,_17){this.items=_16;this._buildItemMap();this.data=_4.map(this.items,function(_18){return this.value(this.store,_18);},this);this._pushDataChanges();this._inFlight=false;},onFetchError:function(_19,_1a){this._inFlight=false;},_buildItemMap:function(){if(this.store.getFeatures()["dojo.data.api.Identity"]){var _1b={};_4.forEach(this.items,function(_1c,_1d){_1b[this.store.getIdentity(_1c)]=_1d;},this);this.itemMap=_1b;}},_pushDataChanges:function(){if(this.series){this.series.chart.updateSeries(this.series.name,this);this.series.chart.delayedRender();}},_onStoreNew:function(){this.fetch();},_onStoreDelete:function(_1e){if(this.items){var _1f=_4.some(this.items,function(it,_20){if(it===_1e){this.items.splice(_20,1);this._buildItemMap();this.data.splice(_20,1);return true;}return false;},this);if(_1f){this._pushDataChanges();}}},_onStoreSet:function(_21){if(this.itemMap){var id=this.store.getIdentity(_21),_22=this.itemMap[id];if(typeof _22=="number"){this.data[_22]=this.value(this.store,this.items[_22]);this._pushDataChanges();}}else{if(this.items){var _23=_4.some(this.items,function(it,_24){if(it===_21){this.data[_24]=this.value(this.store,it);return true;}return false;},this);if(_23){this._pushDataChanges();}}}}});}}};});