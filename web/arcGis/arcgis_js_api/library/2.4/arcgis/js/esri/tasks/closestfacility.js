/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */

if(!dojo._hasResource["esri.tasks.closestfacility"]){dojo._hasResource["esri.tasks.closestfacility"]=true;dojo.provide("esri.tasks.closestfacility");dojo.require("esri.tasks._task");dojo.require("esri.tasks.na");dojo.declare("esri.tasks.ClosestFacilityTask",esri.tasks._Task,{constructor:function(_1){this._url.path+="/solveClosestFacility";this._handler=dojo.hitch(this,this._handler);},__msigns:[{n:"solve",c:3,a:[{i:0,p:["incidents.features","facilities.features","pointBarriers.features","polylineBarriers.features","polygonBarriers.features"]}],e:2}],_handler:function(_2,io,_3,_4,_5){try{var _6=new esri.tasks.ClosestFacilitySolveResult(_2);this._successHandler([_6],"onSolveComplete",_3,_5);}catch(err){this._errorHandler(err,_4,_5);}},solve:function(_7,_8,_9,_a){var _b=_a.assembly,_c=this._encode(dojo.mixin({},this._url.query,{f:"json"},_7.toJson(_b&&_b[0]))),_d=this._handler,_e=this._errorHandler;return esri.request({url:this._url.path,content:_c,callbackParamName:"callback",load:function(r,i){_d(r,i,_8,_9,_a.dfd);},error:function(r){_e(r,_9,_a.dfd);}});},onSolveComplete:function(){}});esri._createWrappers("esri.tasks.ClosestFacilityTask");dojo.declare("esri.tasks.ClosestFacilityParameters",null,{accumulateAttributes:null,attributeParameterValues:null,defaultCutoff:null,defaultTargetFacilityCount:null,directionsLanguage:null,directionsLengthUnits:null,directionsTimeAttribute:false,facilities:null,impedanceAttribute:null,incidents:null,outputGeometryPrecision:null,outputGeometryPrecisionUnits:null,outputLines:null,outSpatialReference:null,pointBarriers:null,polygonBarriers:null,polylineBarriers:null,restrictionAttributes:null,restrictUTurns:null,returnDirections:false,returnFacilities:false,returnIncidents:false,returnPointBarriers:false,returnPolylgonBarriers:false,returnPolylineBarriers:false,returnRoutes:true,travelDirection:null,useHierarchy:false,toJson:function(_f){var _10={returnDirections:this.returnDirections,returnFacilities:this.returnFacilities,returnIncidents:this.returnIncidents,returnBarriers:this.returnPointBarriers,returnPolygonBarriers:this.returnPolygonBarriers,returnPolylineBarriers:this.returnPolylineBarriers,returnRoutes:this.returnRoutes,useHierarchy:this.useHierarchy,attributeParameterValues:this.attributeParameterValues&&dojo.toJson(this.attributeParameterValues),defaultCutoff:this.defaultCutoff,defaultTargetFacilityCount:this.defaultTargetFacilityCount,directionsLanguage:this.directionsLanguage,directionsLengthUnits:esri.tasks._NALengthUnit[this.directionsLengthUnits],directionsTimeAttributeName:this.directionsTimeAttribute,impedanceAttributeName:this.impedanceAttribute,outputGeometryPrecision:this.outputGeometryPrecision,outputGeometryPrecisionUnits:this.outputGeometryPrecisionUnits,outputLines:this.outputLines,outSR:this.outSpatialReference?(this.outSpatialReference.wkid||dojo.toJson(this.outSpatialReference.toJson())):null,restrictionAttributeNames:this.restrictionAttributes?this.restrictionAttributes.join(","):null,restrictUTurns:this.restrictUTurns,accumulateAttributeNames:this.accumulateAttributes?this.accumulateAttributes.join(","):null,travelDirection:this.travelDirection};var _11=this.incidents;if(_11 instanceof esri.tasks.FeatureSet&&_11.features.length>0){_10.incidents=dojo.toJson({type:"features",features:esri._encodeGraphics(_11.features,_f&&_f["incidents.features"])});}else{if(_11 instanceof esri.tasks.DataLayer){_10.incidents=_11;}}var _12=this.facilities;if(_12 instanceof esri.tasks.FeatureSet&&_12.features.length>0){_10.facilities=dojo.toJson({type:"features",features:esri._encodeGraphics(_12.features,_f&&_f["facilities.features"])});}else{if(_12 instanceof esri.tasks.DataLayer){_10.facilities=_12;}}var _13=function(_14,_15){if(!_14){return null;}if(_14 instanceof esri.tasks.FeatureSet){if(_14.features.length>0){return dojo.toJson({type:"features",features:esri._encodeGraphics(_14.features,_f&&_f[_15])});}else{return null;}}else{if(_14 instanceof esri.tasks.DataLayer){return _14;}}return dojo.toJson(_14);};_10.barriers=_13(this.pointBarriers,"pointBarriers.features");_10.polygonBarriers=_13(this.polygonBarriers,"polygonBarriers.features");_10.polylineBarriers=_13(this.polylineBarriers,"polylineBarriers.features");return esri.filter(_10,function(_16){if(_16!==null){return true;}});}});dojo.declare("esri.tasks.ClosestFacilitySolveResult",null,{constructor:function(_17){if(_17.directions){this.directions=[];dojo.forEach(_17.directions,function(_18,idx){var cgs=[];dojo.forEach(_18.features,function(f,i){cgs[i]=f.compressedGeometry;});this.directions[idx]=new esri.tasks.DirectionsFeatureSet(_18,cgs);},this);}if(_17.routes){this.routes=this._graphicsFromJson(_17.routes);}if(_17.facilities){this.facilities=this._graphicsFromJson(_17.facilities);}if(_17.incidents){this.incidents=this._graphicsFromJson(_17.incidents);}if(_17.barriers){this.pointBarriers=this._graphicsFromJson(_17.barriers);}if(_17.polylineBarriers){this.polylineBarriers=this._graphicsFromJson(_17.polylineBarriers);}if(_17.polygonBarriers){this.polygonBarriers=this._graphicsFromJson(_17.polygonBarriers);}if(_17.messages){this.messages=dojo.map(_17.messages,function(_19,i){return new esri.tasks.NAMessage(_19);});}},routes:null,facilities:null,incidents:null,pointBarriers:null,polylineBarriers:null,polygonBarriers:null,directions:null,messages:null,_graphicsFromJson:function(_1a){var sr=new esri.SpatialReference(_1a.spatialReference);var _1b=_1a.features;return dojo.map(_1b,function(_1c,i){return new esri.Graphic(_1c).geometry.setSpatialReference(sr);});}});}