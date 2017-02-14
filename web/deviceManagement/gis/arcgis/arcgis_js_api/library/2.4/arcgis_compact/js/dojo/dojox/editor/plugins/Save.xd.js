/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.editor.plugins.Save"],["require","dijit.form.Button"],["require","dijit._editor._Plugin"],["require","dojo.i18n"],["requireLocalization","dojox.editor.plugins","Save",null,"ROOT,ar,ca,cs,da,de,el,es,fi,fr,he,hu,it,ja,kk,ko,nb,nl,pl,pt,pt-pt,ro,ru,sk,sl,sv,th,tr,zh,zh-tw","ROOT,ar,ca,cs,da,de,el,es,fi,fr,he,hu,it,ja,kk,ko,nb,nl,pl,pt,pt-pt,ro,ru,sk,sl,sv,th,tr,zh,zh-tw"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.editor.plugins.Save"]){_4._hasResource["dojox.editor.plugins.Save"]=true;_4.provide("dojox.editor.plugins.Save");_4.require("dijit.form.Button");_4.require("dijit._editor._Plugin");_4.require("dojo.i18n");_4.declare("dojox.editor.plugins.Save",_5._editor._Plugin,{iconClassPrefix:"dijitAdditionalEditorIcon",url:"",logResults:true,_initButton:function(){var _7=_4.i18n.getLocalization("dojox.editor.plugins","Save");this.button=new _5.form.Button({label:_7["save"],showLabel:false,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"Save",tabIndex:"-1",onClick:_4.hitch(this,"_save")});},updateState:function(){this.button.set("disabled",this.get("disabled"));},setEditor:function(_8){this.editor=_8;this._initButton();},_save:function(){var _9=this.editor.get("value");this.save(_9);},save:function(_a){var _b={"Content-Type":"text/html"};if(this.url){var _c={url:this.url,postData:_a,headers:_b,handleAs:"text"};this.button.set("disabled",true);var _d=_4.xhrPost(_c);_d.addCallback(_4.hitch(this,this.onSuccess));_d.addErrback(_4.hitch(this,this.onError));}else{console.log("No URL provided, no post-back of content: "+_a);}},onSuccess:function(_e,_f){this.button.set("disabled",false);if(this.logResults){console.log(_e);}},onError:function(_10,_11){this.button.set("disabled",false);if(this.logResults){console.log(_10);}}});_4.subscribe(_5._scopeName+".Editor.getPlugin",null,function(o){if(o.plugin){return;}var _12=o.args.name.toLowerCase();if(_12==="save"){o.plugin=new _6.editor.plugins.Save({url:("url" in o.args)?o.args.url:"",logResults:("logResults" in o.args)?o.args.logResults:true});}});}}};});