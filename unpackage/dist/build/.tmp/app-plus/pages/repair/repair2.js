(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/repair/repair2"],{"4a8a":function(o,e,t){"use strict";(function(o){t("b6a3"),t("921b");n(t("66fd"));var e=n(t("ddc5"));function n(o){return o&&o.__esModule?o:{default:o}}o(e.default)}).call(this,t("6e42")["createPage"])},"53a2":function(o,e,t){"use strict";(function(o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t("8d2a"),a=n.constant,i=n.factory,r={data:function(){return{minDate:(new Date).getTime(),bindDate:"",bindTime:"",roomCloums:[],roomIdArr:[],roomName:"",roomId:"",roomShow:!1,columns:["卧室报修","管道报修","客厅报修"],typeName:"",typeId:"",typeShow:!1,timeShow:!1,photoList:[],bindTel:"",context:"",bindRepairName:"",userId:"",storeId:"",photos:[],communityId:"",dateShow:!1}},components:{},props:{},onLoad:function(o){var e=this;n.getRooms().then(function(o){var t=o.data.rooms,n=[],a=[];t.map(function(o){n.push(o.floorNum+"号楼"+o.unitNum+"单元"+o.roomNum+"室"),a.push(o.roomId)}),e.roomCloums=n,e.roomIdArr=a,e.userId=o.data.owner.appUserId,e.communityId=o.data.owner.communityId})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{formatter:function(o,e){return"year"===o?"".concat(e,"年"):"month"===o?"".concat(e,"月"):"day"===o?"".concat(e,"日"):e},bindInput:function(e){console.log(o("数据监听",e," at pages\\repair\\repair2.vue:157"));var t=this,n=e.currentTarget.dataset,a=e.detail,i=n.name;t[i]=a,console.log(o(this," at pages\\repair\\repair2.vue:165"))},bindOwner:function(e){var t={typeId:this.typeId,bindRepairName:this.bindRepairName,bindTel:this.bindTel,roomId:this.roomId,photos:[],context:this.context,userId:this.userId,communityId:this.communityId},i=this.photos;i.forEach(function(o){t.photos.push({photo:o})}),console.log(o(t,3333333333333," at pages\\repair\\repair2.vue:189"));var r="";""==t.roomId?r="请选择房屋":""==t.typeId?r="请选择报修类型":""==t.bindRepairName?r="请填写报修人":""==t.bindTel?r="请填写手机号":""==t.bindDate?r="请选择预约日期":""==t.bindTime?r="请选择预约时间":""==t.context&&(r="请填写投诉内容"),console.log(o(t.roomId," at pages\\repair\\repair2.vue:208")),""!=r?wx.showToast({title:r,icon:"none",duration:2e3}):(console.log(o("提交数据",t," at pages\\repair\\repair2.vue:217")),n.request({url:a.url.saveOwnerRepair,header:n.getHeaders(),method:"POST",data:{repairType:"10001",roomId:"752019100758260005",communityId:"7020181217000001",repairName:"吴学文",tel:"17797173942",context:"服务太差",appointmentTime:"2019-12-14 18:30:30",photos:["base64...."]},success:function(e){console.log(o(e,99999," at pages\\repair\\repair2.vue:235"))}}))},onChange:function(e){console.log(o(e," at pages\\repair\\repair2.vue:241"))},onTimeConfirm:function(e){console.log(o("onConfirm",e," at pages\\repair\\repair2.vue:244")),this.bindTime=e.detail,this.timeShow=!1},onTimeCancel:function(o){this.timeShow=!1},chooseTime:function(o){this.timeShow=!0},onDateConfirm:function(e){console.log(o("onConfirm",e," at pages\\repair\\repair2.vue:255"));var t=new Date(1*e.detail),n=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();console.log(o("oYear",n," at pages\\repair\\repair2.vue:260")),console.log(o("oMonth",a," at pages\\repair\\repair2.vue:261")),console.log(o("oDay",i," at pages\\repair\\repair2.vue:262")),this.bindDate=n+"-"+a+"-"+i,this.dateShow=!1},onDateCancel:function(o){this.dateShow=!1},chooseDate:function(o){this.dateShow=!0},onTypeConfirm:function(e){console.log(o("onConfirm",e," at pages\\repair\\repair2.vue:273")),this.typeName=e.detail.value,this.typeId=e.detail.index?"809001":"809002",this.typeShow=!1},onTypeCancel:function(o){this.typeShow=!1},chooseType:function(o){this.typeShow=!0},onRoomConfirm:function(e){console.log(o("onConfirm",e," at pages\\repair\\repair2.vue:285")),this.roomName=e.detail.value,this.roomId=this.roomIdArr[e.detail.index],this.roomShow=!1},onRoomCancel:function(o){this.roomShow=!1},chooseRoom:function(o){this.roomShow=!0},afterRead:function(e){var t=e.detail.file,n=this,a=this.photoList,r=void 0===a?[]:a;r.push(t),this.photoList=r,i.base64.urlTobase64(t.path).then(function(o){n.photos.push(o)}),console.log(o("data信息：",this," at pages\\repair\\repair2.vue:314"))},removePhoto:function(e){console.log(o(e.detail.index," at pages\\repair\\repair2.vue:317"));var t=[];this.photoList.forEach(function(o,n){n!=e.detail.index&&t.push(o)});var n=[];this.photos.forEach(function(o,t){t!=e.detail.index&&n.push(o)}),this.photos=n,this.photoList=t}}};e.default=r}).call(this,t("0de9")["default"])},"612f":function(o,e,t){},"93cf":function(o,e,t){"use strict";var n,a=function(){var o=this,e=o.$createElement;o._self._c},i=[];t.d(e,"b",function(){return a}),t.d(e,"c",function(){return i}),t.d(e,"a",function(){return n})},ddc5:function(o,e,t){"use strict";t.r(e);var n=t("93cf"),a=t("e70e");for(var i in a)"default"!==i&&function(o){t.d(e,o,function(){return a[o]})}(i);t("edb8");var r,s=t("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=u.exports},e70e:function(o,e,t){"use strict";t.r(e);var n=t("53a2"),a=t.n(n);for(var i in n)"default"!==i&&function(o){t.d(e,o,function(){return n[o]})}(i);e["default"]=a.a},edb8:function(o,e,t){"use strict";var n=t("612f"),a=t.n(n);a.a}},[["4a8a","common/runtime","common/vendor"]]]);