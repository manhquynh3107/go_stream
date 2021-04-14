if (self.CavalryLogger) { CavalryLogger.start_js(["6xr1GqN"]); }

__d("MQTTRequestStreamUtils",["BladeRunnerStreamHandler","BladeRunnerTypes","RequestStreamCommonRequestStreamCommonTypes"],(function(a,b,c,d,e,f){"use strict";f.convertToBRHandler=a;var g="Stream closed";f.TERMINATION_REASON_CLOSED=g;var h="Stream rejected";f.TERMINATION_REASON_REJECTED=h;function a(a){var c=function(c){switch(c){case b("BladeRunnerTypes").StreamStatus.ACCEPTED:a.onFlowStatus(b("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Accepted);break;case b("BladeRunnerTypes").StreamStatus.STARTED:a.onFlowStatus(b("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Started);break;case b("BladeRunnerTypes").StreamStatus.PAUSED:a.onFlowStatus(b("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Stopped);break;case b("BladeRunnerTypes").StreamStatus.CLOSED:a.onTermination(g);break;case b("BladeRunnerTypes").StreamStatus.REJECTED:a.onTermination(h);break}};return new(b("BladeRunnerStreamHandler"))(function(b){return a.onData(b)},null,c,function(b){return a.onLog(b)},null)}}),null);
__d("DGWStreamCallbacks",[],(function(a,b,c,d,e,f){"use strict"}),null);
__d("DGWStreamGroupCallbacks",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum")({TRANSPORT_SERVER_INTERNAL_ERROR:0,TRANSPORT_ABNORMAL_CLOSURE:1,TRANSPORT_GOING_AWAY:2,TRANSPORT_UNKNOWN_ERROR:3});f.DGWStreamGroupError=a}),null);
__d("GroupedStream",["DGWAckManager","DGWConstants","DGWLoggingContext","DGWStream","DGWStreamEvents","regeneratorRuntime"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a,c,d,e,f,g,h){this.$1=a,this.$3=!1,this.$4=!1,this.$5=!1,this.$6=c,this.$7=d,this.$8=e,this.$2=g,this.$9=f,this.$10=new(b("DGWAckManager").DGWAckManager)(this.$9),this.$12=new(b("DGWStreamEvents").DGWStreamEvents)(this.$9,b("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT),this.$11=0,this.$13=h}var c=a.prototype;c.send=function(a,c){var d,e,f;return b("regeneratorRuntime").async(function(g){while(1)switch(g.prev=g.next){case 0:e=this.$11++%b("DGWConstants").MAX_ACK_ID;if(this.$14(a,!0,e)){g.next=3;break}return g.abrupt("return",!1);case 3:g.next=5;return b("regeneratorRuntime").awrap(this.$10.waitForAck(e,(d=c)!=null?d:b("DGWConstants").DEFAULT_ACK_TIMEOUT_MS));case 5:f=g.sent;return g.abrupt("return",f);case 7:case"end":return g.stop()}},null,this)};c.sendAndForget=function(a){return this.$14(a,!1)};c.close=function(){this.$8.isOpen()||this.$9.logError(b("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT,"Failed to send EndOfData","StreamGroupTransport not open during send");var a=this.$2.encodeEndOfData(this.$1);if(a==null){this.$9.logError(b("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT,"Failed to encode EndOfData","streamId: "+this.$1);return}this.$8.send(a);this.$12.endOfDataSent();this.$5=!0;this.$4&&this.$15()};c.__sendDrain=function(a){var c=b("DGWConstants").drainReasonToDrainReasonString(a);if(this.$5||!this.$8.isOpen())return!1;a=this.$2.encodeDrain(a);if(a==null)return!1;this.$12.drainSent(c);this.$8.send(a);return!0};c.__transportCloseHook=function(a){this.$10.clearPendingAcks(),a?(this.$12.error("Received StreamError","StreamErrorType: "+b("DGWStream").streamErrorToString(a)),this.$6.onError(a)):this.$5&&this.$4?this.$15():(this.$12.streamClosed(!1,"Stream closed: ClosedLocally: "+this.$5.toString()+", EndOfDataReceived: "+this.$4.toString()),this.$6.onError(b("DGWStream").StreamError.PREMATURE_CLOSE))};c.$15=function(){this.$12.streamClosed(!0,"Graceful close"),this.$6.onClose(this)};c.__dataReceivedHook=function(a,b){this.$6.onDataReceived(a),b!=null&&this.$16(b)};c.__ackReceivedHook=function(a){this.$10.handleAckReceived(a)};c.__drainReceivedHook=function(a){this.$3===!1&&(this.$6.onStreamMustDrain(this,a),this.$3=!0)};c.__endOfDataHook=function(){this.$12.endOfDataReceived(),this.$4=!0,this.$5?(this.$15(),this.$13()):this.$6.onServerHasFinishedSendingData(this)};c.$14=function(a,c,d){c===void 0&&(c=!1);d===void 0&&(d=0);if(!this.$8.isOpen()||this.$5){this.$9.logError(b("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT,"Failed to send data","StreamGroupTransport not open during send","TransportOpen: "+this.$8.isOpen().toString()+", ClosedLocally: "+this.$5.toString());return!1}a=this.$2.encodeData(a,c,d);if(a==null)return!1;this.$8.send(a);this.$12.dataSent(d,a.length,c);return!0};c.$16=function(a){if(!this.$8.isOpen()){this.$9.logError(b("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT,"Failed to send ACK","StreamGroupTransport not open during send. AckId: "+a);return!1}var c=this.$2.encodeAck(a);if(c==null){this.$9.logError(b("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT,"Failed to encode ACK","ackId: "+a);return!1}this.$12.ackSent(a);this.$8.send(c);return!0};return a}();f.GroupedStream=a}),null);
__d("StreamGroupContext",[],(function(a,b,c,d,e,f){"use strict"}),null);
__d("StreamGroupWebSocketTransport",["DGWConstants","DGWExponentialBackoff","DGWStream","DGWStreamGroupCallbacks","DGWTransportEvents","DGWUtils","DGWWebSocketTransport","GroupedStream","Promise","StreamIdGenerator","err","regeneratorRuntime"],(function(a,b,c,d,e,f){"use strict";var g=function(a,c,d,e){var f=this;this.groupedStream=a;this.$1=setTimeout(function(){d(b("err")("Stream establishment timed out"))},e);this.handleEstablishFrameReceived=function(){clearTimeout(f.$1),c(f.groupedStream)}};a=function(){function a(a,c,d,e){var f=this;this.$10=e;this.$1=a;this.$6=new(b("StreamIdGenerator").StreamIdGenerator)();this.$4=new Map();this.$5=new Map();this.$3=!0;this.$8=new(b("DGWTransportEvents").DGWTransportEvents)(c);this.$7=new TextEncoder();this.$9=d;e={onDataReceived:function(){},handleAckReceived:function(){},receivedDrainSignal:function(a){f.$9.streamGroupCallbacks.onStreamGroupMustDrain(a),f.$4.forEach(function(b){b.__drainReceivedHook(a)})},onGroupedStreamDataReceived:function(a,b,c){if(f.$4.has(a)){a=f.$4.get(a);a==null?void 0:a.__dataReceivedHook(b,c)}},onGroupedStreamAckReceived:function(a,b){if(f.$4.has(a)){a=f.$4.get(a);a==null?void 0:a.__ackReceivedHook(b)}},onGroupedStreamEndOfDataReceived:function(a){if(f.$4.has(a)){a=f.$4.get(a);a==null?void 0:a.__endOfDataHook()}},onGroupedStreamEstablishStreamReceived:function(a,b){if(f.$5.has(a)){b=f.$5.get(a);f.$5["delete"](a);b==null?void 0:b.handleEstablishFrameReceived()}}};this.$2=new(b("DGWUtils").DGWCodec)(c,e)}var c=a.prototype;c.send=function(a){this.$1.send(a)};c.isOpen=function(){return this.$1.readyState===WebSocket.OPEN};c.close=function(){this.$1.close(b("DGWConstants").WebsocketCloseCodes.DGW_NORMAL_CLOSURE)};a.getTransport=function(c,d,e,f){var g;return b("regeneratorRuntime").async(function(h){while(1)switch(h.prev=h.next){case 0:h.next=2;return b("regeneratorRuntime").awrap(b("DGWUtils").DGWCodec.initialize());case 2:g=function(){return a.$11(c,d,e,f)};h.prev=3;h.next=6;return b("regeneratorRuntime").awrap(b("DGWExponentialBackoff").callWithExponentialBackoff(g));case 6:return h.abrupt("return",h.sent);case 9:h.prev=9;h.t0=h["catch"](3);throw h.t0;case 12:case"end":return h.stop()}},null,this,[[3,9]])};c.establishGroupedStream=function(a,c,d){var e=this,f,g,h,i;return b("regeneratorRuntime").async(function(j){while(1)switch(j.prev=j.next){case 0:f=this.$6.getNextStreamId();g=new(b("GroupedStream").GroupedStream)(f,a,c,this,d,this.$2,function(){e.$4["delete"](f),e.$6.putBackStreamId(f),e.$4.size===0&&e.close()});h=this.$2.encodeEstablishStream(f,Uint8Array.from(this.$7.encode(JSON.stringify(c.groupedStreamHeaders))));if(!(h==null)){j.next=6;break}throw b("err")("Failed to encode EstablishStreamFrame");case 6:this.$1.send(h);case 7:j.prev=7;j.next=10;return b("regeneratorRuntime").awrap(this.waitForEstablishStream(g,f));case 10:i=j.sent;this.$4.set(f,g);return j.abrupt("return",i);case 15:j.prev=15;j.t0=j["catch"](7);this.$8.streamEstablishmentTimeout("Stream establishment timeout","streamId: "+f);throw j.t0;case 19:case"end":return j.stop()}},null,this,[[7,15]])};c.waitForEstablishStream=function(a,c){var d=this,e;return b("regeneratorRuntime").async(function(f){while(1)switch(f.prev=f.next){case 0:f.next=2;break;return f.abrupt("return",a);case 2:f.next=4;return b("regeneratorRuntime").awrap(new(b("Promise"))(function(b,e){d.$5.set(c,new g(a,b,e,3e4))}));case 4:e=f.sent;return f.abrupt("return",e);case 6:case"end":return f.stop()}},null,this)};a.$11=function(c,d,e,f){var g,h,i;return b("regeneratorRuntime").async(function(j){while(1)switch(j.prev=j.next){case 0:g=b("DGWWebSocketTransport").getWebSocketConnection(c);h=new a(g,e,d,f);g.onmessage=a.$12(h);g.onopen=function(){h.$3=!1};g.onerror=function(){};g.onclose=a.$13(h);j.next=8;return b("regeneratorRuntime").awrap(a.getTransportPromise(h));case 8:i=j.sent;return j.abrupt("return",i);case 10:case"end":return j.stop()}},null,this)};a.getTransportPromise=function(a){var c;return b("regeneratorRuntime").async(function(d){while(1)switch(d.prev=d.next){case 0:d.next=2;return b("regeneratorRuntime").awrap(new(b("Promise"))(function(c,d){var e=a.$1.onerror,f=a.$1.onopen;a.$1.onerror=function(){e(),d(b("err")("Transport could not be initialized"))};a.$1.onopen=function(){f(),c(a)}}));case 2:c=d.sent;return d.abrupt("return",c);case 4:case"end":return d.stop()}},null,this)};a.$12=function(a){return function(b){if(!(b.data instanceof ArrayBuffer)){a.$8.transportError("Incorrect Data Protocol","Received "+typeof b.data+" instead of ArrayBuffer");return}a.$2.append(new Uint8Array(b.data));a.$2.processData()}};a.$13=function(a){return function(c){if(a.$3===!0){a.$8.transportEstablishmentFailure(c.code);a.$4.clear();return}a.$10();a.$3=!0;if(c.code!==b("DGWConstants").WebsocketCloseCodes.DGW_NORMAL_CLOSURE){a.$8.transportClosed(!1,"Websocket connection failure with code "+c.code);var d=b("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_UNKNOWN_ERROR,e=b("DGWStream").StreamError.UNKNOWN_ERROR;switch(c.code){case b("DGWConstants").WebsocketCloseCodes.NORMAL_CLOSURE:d=b("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_ABNORMAL_CLOSURE;e=b("DGWStream").StreamError.ABNORMAL_CLOSURE;break;case b("DGWConstants").WebsocketCloseCodes.ABNORMAL_CLOSURE:d=b("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_ABNORMAL_CLOSURE;e=b("DGWStream").StreamError.ABNORMAL_CLOSURE;break;case b("DGWConstants").WebsocketCloseCodes.SERVER_INTERNAL_ERROR:d=b("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_SERVER_INTERNAL_ERROR;e=b("DGWStream").StreamError.SERVER_INTERNAL_ERROR;break;case b("DGWConstants").WebsocketCloseCodes.GOING_AWAY:d=b("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_GOING_AWAY;e=b("DGWStream").StreamError.GOING_AWAY;break;default:d=b("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_UNKNOWN_ERROR;e=b("DGWStream").StreamError.UNKNOWN_ERROR;break}a.$9.streamGroupCallbacks.onStreamGroupError(d);a.$4.forEach(function(a){a.__transportCloseHook(e)})}else a.$8.transportClosed(!0,""),a.$4.forEach(function(a){a.__transportCloseHook()}),a.$9.streamGroupCallbacks.onStreamGroupTransportClose();a.$4.clear()}};return a}();f.StreamGroupWebSocketTransport=a}),null);
__d("StreamGroup",["DGWConstants","DGWLoggingContext","DGWUtils","Promise","StreamGroupWebSocketTransport","regeneratorRuntime"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a,c,d,e,f,g,h,i,j){this.$2=j;this.$1=j.getNewStreamGroupId();j=(j=h.overrideUrl)!=null?j:f;this.$3={appId:a,appVersion:c,authType:d,dgwVersion:e,headers:h.streamGroupAppHeaders,tier:(f=h.serviceTier)!=null?f:b("DGWConstants").DEFAULT_SERVICE_TIER,connectEndpoint:j,fbId:g,serviceId:h.serviceId,streamGroupCallbacks:i};this.$4=h;this.$5=new(b("DGWLoggingContext").DGWLoggingContext)(this.$3.dgwVersion,this.$4.loggingId,this.$3.serviceId,this.$3.fbId)}var c=a.prototype;c.establishStream=function(a,c){var d=this,e,f;return b("regeneratorRuntime").async(function(g){while(1)switch(g.prev=g.next){case 0:if(!(this.$2.containsStreamGroup(this.$1)===!1)){g.next=6;break}e=b("DGWUtils").DGWUtils.constructConnectUrl({appId:this.$3.appId,appVersion:this.$3.appVersion,authType:this.$3.authType,dgwVersion:this.$3.dgwVersion,fbId:this.$3.fbId,headers:babelHelpers["extends"]({},this.$3.headers),loggingId:a.loggingId,tier:this.$3.tier,serviceId:this.$3.serviceId,endpoint:this.$3.connectEndpoint,regionHint:this.$4.regionHint});g.next=4;return b("regeneratorRuntime").awrap(b("StreamGroupWebSocketTransport").StreamGroupWebSocketTransport.getTransport(e,this.$3,this.$5,function(){d.$2.removeStreamGroupAndTransport(d.$1)}));case 4:f=g.sent,this.$2.setStreamGroupAndTransport(this.$1,f);case 6:return g.abrupt("return",this.establishStreamWithTransport(a,c));case 7:case"end":return g.stop()}},null,this)};c.establishStreamWithTransport=function(a,c){var d=this,e;return b("regeneratorRuntime").async(function(f){while(1)switch(f.prev=f.next){case 0:f.next=2;return b("regeneratorRuntime").awrap(new(b("Promise"))(function(e){var f,g,h;return b("regeneratorRuntime").async(function(i){while(1)switch(i.prev=i.next){case 0:g=(f=a.loggingId)!=null?f:b("DGWUtils").uuidv4();d.$5.logEvent(b("DGWLoggingContext").DGWLoggingComponent.STREAM_GROUP_COMPONENT,"establishing Stream loggingId: "+g);i.next=4;return b("regeneratorRuntime").awrap(d.$2.getStreamGroupTransport(d.$1).establishGroupedStream(c,a,new(b("DGWLoggingContext").DGWLoggingContext)(d.$3.dgwVersion,g,d.$3.serviceId,d.$3.fbId)));case 4:h=i.sent,e(h);case 6:case"end":return i.stop()}},null,this)}));case 2:e=f.sent;return f.abrupt("return",e);case 4:case"end":return f.stop()}},null,this)};return a}();f.StreamGroup=a}),null);
__d("StreamGroupRegistry",["Random","err"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1=new Map(),this.$2=new Set()}var c=a.prototype;c.setStreamGroupAndTransport=function(a,b){this.$1.set(a,b)};c.containsStreamGroup=function(a){return this.$1.has(a)};c.removeStreamGroupAndTransport=function(a){this.$1["delete"](a)};c.getStreamGroupTransport=function(a){a=this.$1.get(a);if(a==void 0)throw b("err")("No stream group transport");return a};c.getNewStreamGroupId=function(){var a=b("Random").uint32();while(this.$2.has(a))a=b("Random").uint32();this.$2.add(a);return a};return a}();f.StreamGroupRegistry=a}),null);
__d("JavascriptWebErrorFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1828905");c=b("FalcoLoggerInternal").create("javascript_web_error",a);e.exports=c}),null);
__d("ErrorTransport",["JavascriptWebErrorFalcoEvent"],(function(a,b,c,d,e,f){"use strict";f.log=a;function a(a){b("JavascriptWebErrorFalcoEvent").log(function(){return a})}}),null);
__d("ErrorSetup",["fb-error"],(function(a,b,c,d,e,f){"use strict";a=b("fb-error").ErrorSetup;e.exports=a}),null);
__d("ErrorLogging",["ClientConsistency","Env","ErrorGuard","ErrorSetup","ErrorTransport","JSErrorLoggingConfig","ScriptPath","SiteData","WebSession","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g,h;(g||b("ErrorGuard")).skipGuardGlobal((h||(h=b("Env"))).nocatch);b("JSErrorLoggingConfig").sampleWeight!=null&&b("setTimeout")(function(){b("ErrorSetup").setup({additional_client_revisions:b("ClientConsistency").getAdditionalRevisions(),appId:b("JSErrorLoggingConfig").appId,client_revision:b("SiteData").client_revision,extra:b("JSErrorLoggingConfig").extra,loggingFramework:b("SiteData").haste_site==="mobile"?"mobile":"blue",server_revision:b("SiteData").server_revision,spin:b("SiteData").spin,push_phase:b("SiteData").push_phase,report_source:b("JSErrorLoggingConfig").report_source,report_source_ref:b("JSErrorLoggingConfig").report_source_ref,sample_weight:b("JSErrorLoggingConfig").sampleWeight,script_path:b("ScriptPath").getScriptPath(),web_session_id:b("WebSession").getId()},b("ErrorTransport").log)},0);b("ErrorSetup").preSetup()}),null);