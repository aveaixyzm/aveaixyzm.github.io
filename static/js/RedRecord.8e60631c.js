(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["RedRecord"],{"11a7":function(e,t,o){e.exports=o.p+"static/img/tx_chat_cn.45cd5bf4.png"},"1f84":function(e,t,o){"use strict";o.r(t);o("fb6a");var c=o("7a23"),n=o("3cd6"),a=o.n(n),r=o("11a7"),l=o.n(r),i={class:"burn-container"},s={class:"section-1"},d={class:"top"},u={key:0,class:"font-12 block color-999 mt_10"},b={class:"iconfont icon-copy font-12"},m={class:"section-3"},v={class:"icon-svg","aria-hidden":"true"},p=["xlink:href"],f={class:"section-4 mb_10"},j={class:"content"},h={class:"alert"},O={class:"section-5 mb_10"},k={class:"content"},g={class:"section-5"},y={class:"section-6"},C={class:"submit-bar van-safe-area-bottom van-hairline--top"},_={class:"tx-tips-content"},$={class:"image-box"},N={key:0,src:a.a,alt:""},x={key:1,src:l.a,alt:""};function V(e,t,o,n,a,r){var l,V,E=Object(c["resolveComponent"])("van-nav-bar"),w=Object(c["resolveComponent"])("van-image"),B=Object(c["resolveComponent"])("van-radio"),D=Object(c["resolveComponent"])("van-cell"),S=Object(c["resolveComponent"])("van-cell-group"),A=Object(c["resolveComponent"])("van-radio-group"),I=Object(c["resolveComponent"])("van-button"),F=Object(c["resolveComponent"])("van-icon"),R=Object(c["resolveComponent"])("van-field"),T=Object(c["resolveComponent"])("van-form"),P=Object(c["resolveComponent"])("van-dialog"),z=Object(c["resolveDirective"])("copy");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("section",i,[Object(c["createVNode"])(E,{"left-text":"","left-arrow":"",onClickLeft:t[0]||(t[0]=function(t){return e.$f.goBack()}),fixed:"",placeholder:"","safe-area-inset-top":"","z-index":"2",title:e.$t("operationPay")},null,8,["title"]),Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("div",d,[Object(c["createVNode"])(w,{class:"icon",width:"0.48rem",height:"0.48rem",round:"","lazy-load":"",src:"".concat(e.$store.state.s3BaseUrl,"token_icon/oec/0x382bb369d343125bfb2117af9c149795c6c65c50.png")},null,8,["src"]),Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(r.amount)+"USDT",1)]),a.tokenAddress?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",u,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("contractAddress"))+" "+Object(c["toDisplayString"])((null===(l=a.tokenAddress)||void 0===l?void 0:l.slice(0,4))+"..."+(null===(V=a.tokenAddress)||void 0===V?void 0:V.slice(-4)))+" ",1),Object(c["withDirectives"])(Object(c["createElementVNode"])("i",b,null,512),[[z,a.tokenAddress]])])):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("div",m,[Object(c["createElementVNode"])("h3",null,Object(c["toDisplayString"])(e.$t("selectBurnMethod")),1),Object(c["createVNode"])(A,{modelValue:a.chain,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.chain=e})},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(S,{border:!1},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.chains,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(D,{key:t,title:e.title,clickable:"",onClick:function(t){return r.handleClick(e)},center:""},{icon:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(),Object(c["createElementBlock"])("svg",v,[Object(c["createElementVNode"])("use",{"xlink:href":"#icon-".concat(e.chain)},null,8,p)]))]})),"right-icon":Object(c["withCtx"])((function(){return[Object(c["createVNode"])(B,{name:e.chain},null,8,["name"])]})),_:2},1032,["title","onClick"])})),128))]})),_:1})]})),_:1},8,["modelValue"])]),Object(c["createElementVNode"])("div",f,[Object(c["createElementVNode"])("h3",null,Object(c["toDisplayString"])(e.$t("toAddress")),1),Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(r.toAddress),1),Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createBlock"])(I,{class:"btn",round:"",type:"primary",size:"small"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("copy")),1)]})),_:1})),[[z,r.toAddress]])]),Object(c["createElementVNode"])("div",h,"*"+Object(c["toDisplayString"])(e.$t("copyToTransfer")),1)]),Object(c["createElementVNode"])("div",O,[Object(c["createElementVNode"])("h3",null,[Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.$t("fromAddress")),1)]),Object(c["createElementVNode"])("div",k,Object(c["toDisplayString"])(r.fromAddress),1)]),Object(c["createElementVNode"])("div",g,[Object(c["createElementVNode"])("h3",null,[Object(c["createElementVNode"])("span",null,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("transaction"))+" hash ",1),Object(c["createVNode"])(F,{name:"question-o",color:"#3F80F7",onClick:Object(c["withModifiers"])(r.handleAlert,["stop"])},null,8,["onClick"])])]),Object(c["createVNode"])(T,{ref:"form",onSubmit:r.checkConsumedUser},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(R,{class:"content",modelValue:a.tx,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.tx=e}),name:"tx",label:"",type:"textarea",placeholder:e.$t("pleaseEnterTransactionId"),autosize:"",clearable:"",rules:[{required:!0,message:e.$t("pleaseEnterTransactionId")},{pattern:r.txHashPattern,message:e.$t("pleaseEnterCorrectTxHash"),trigger:"onBlur"}]},null,8,["modelValue","placeholder","rules"])]})),_:1},8,["onSubmit"])]),Object(c["createElementVNode"])("div",y,Object(c["toDisplayString"])(e.$t("chainTransferTips")),1),Object(c["createElementVNode"])("div",C,[Object(c["createVNode"])(I,{block:"",round:"",loading:a.loading,type:"primary",disabled:!a.tx,onClick:t[3]||(t[3]=Object(c["withModifiers"])((function(t){return e.$refs.form.submit()}),["stop"]))},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("IHaveTransferred")),1)]})),_:1},8,["loading","disabled"])])]),Object(c["createVNode"])(P,{show:a.show,"onUpdate:show":t[4]||(t[4]=function(e){return a.show=e}),"confirm-button-color":"#3F80F7","confirm-button-text":e.$t("iKnown")},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",_,[Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.$t("txHashTipsContent")),1),Object(c["createElementVNode"])("div",$,["en"===r.lang?(Object(c["openBlock"])(),Object(c["createElementBlock"])("img",N)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("img",x))])])]})),_:1},8,["show","confirm-button-text"])],64)}o("d3b7");var E=o("365c"),w=o("fa7d"),B={name:"ChatPayment",data:function(){return{chain:this.$store.getters.netId||"oec",chains:[{title:"OKC",chainId:66,chain:"oec"},{title:"BSC",chainId:56,chain:"bsc"}],tx:"",loading:!1,show:!1,tokenAddress:""}},computed:{groupId:function(){return this.$store.state.chat.groupId},txHashPattern:function(){return/^0x[0-9a-zA-Z]{64}$/},lang:function(){return this.$store.getters.language},fromAddress:function(){return this.$store.state.currentAccount},toAddress:function(){var e;return(null===(e=this.$store.state.chat.chatConfig)||void 0===e?void 0:e.ave_chat_usdt_to_address)||""},amount:function(){var e;return(null===(e=this.$store.state.chat.chatConfig)||void 0===e?void 0:e.ave_chat_usdt_count_register)||""}},activated:function(){var e,t,o,c;(this.tx="",this.$store.dispatch("getChatInfo"),"oec"===(null===(e=this.$store.getters)||void 0===e?void 0:e.netId))&&(this.tokenAddress=null===(o=this.$store.state.chat.chatConfig)||void 0===o?void 0:o.ave_chat_usdt_address_oec);"bsc"===(null===(t=this.$store.getters)||void 0===t?void 0:t.netId)&&(this.tokenAddress=null===(c=this.$store.state.chat.chatConfig)||void 0===c?void 0:c.ave_chat_usdt_address_bsc)},watch:{chain:function(e){var t,o;"oec"===e&&(this.tokenAddress=null===(t=this.$store.state.chat.chatConfig)||void 0===t?void 0:t.ave_chat_usdt_address_oec);"bsc"===e&&(this.tokenAddress=null===(o=this.$store.state.chat.chatConfig)||void 0===o?void 0:o.ave_chat_usdt_address_bsc)}},methods:{handleClick:function(e){this.chain=e.chain},checkConsumedUser:function(){var e=this,t={user_address:this.fromAddress,chain:this.chain,tx:this.tx};this.loading=!0,Object(E["x"])(t).then((function(t){t&&(e.$toast.success(e.$t("success")),e.tx="",e.groupId?(e.$router.push("/chat/".concat(e.groupId)),Object(w["b"])()):e.$router.push("/myChat"))})).catch((function(t){e.$toast.fail(t)})).finally((function(t){console.log(t),e.loading=!1}))},handleAlert:function(){this.show=!0}}},D=(o("fb9e"),o("6b0d")),S=o.n(D);const A=S()(B,[["render",V],["__scopeId","data-v-2648f8fa"]]);t["default"]=A},"2b6f":function(e,t,o){"use strict";o.r(t);o("99af"),o("fb6a");var c=o("7a23"),n={class:"record-container"},a={class:"top"},r={ref:"slide",class:"slide"},l={class:"info"},i={class:"color-333 font-14 block mt-5"},s={key:0,class:"color-FF3C3C font-22 block mt-10",style:{"font-weight":"500"}},d={key:1,class:"color-FF3C3C font-22 block mt-10",style:{"font-weight":"500"}},u={class:"color-999 font-14 block mt-10"},b={class:"content mt-10"},m={class:"flex"},v={key:0,class:"color-999"},p={key:1},f={key:2},j={key:3,class:"color-FF3C3C font-12",style:{"text-align":"right"}},h={class:"fl flex-start"},O=["onClick"],k={class:"ml-5"},g={class:"flex-start",style:{"flex-wrap":"wrap"}},y={class:"font-15"},C={key:1,class:"font-15 color-999"},_={class:"font-12 color-999 block"},$={class:"color-333"},N=Object(c["createTextVNode"])("  "),x={key:0,class:"color-FFDA71 block font-12"},V={key:1,class:"font-14 mt-40 color-333 block text-center"};function E(e,t,E,w,B,D){var S,A,I,F,R,T,P,z,H,U,L,M=Object(c["resolveComponent"])("van-nav-bar"),q=Object(c["resolveComponent"])("van-image"),J=Object(c["resolveComponent"])("van-count-down"),K=Object(c["resolveComponent"])("van-icon"),Z=Object(c["resolveComponent"])("van-cell"),G=Object(c["resolveComponent"])("van-empty");return Object(c["openBlock"])(),Object(c["createElementBlock"])("section",n,[Object(c["createVNode"])(M,{"left-text":"","left-arrow":"",onClickLeft:t[0]||(t[0]=function(t){return e.$f.goBack()}),fixed:"",placeholder:"","safe-area-inset-top":"","z-index":"2",title:e.$t("seeLuck")},null,8,["title"]),Object(c["createElementVNode"])("div",a,[Object(c["createElementVNode"])("div",r,null,512),Object(c["createElementVNode"])("div",l,[Object(c["createVNode"])(q,{round:"",width:"0.8rem",height:"0.8rem","icon-size":"0.8rem","lazy-load":"","show-loading":"",style:{background:"#fff"},class:"icon-left",src:e.$f.formatIcon("".concat(B.redpacket.contract_address,"-").concat(B.redpacket.contract_chain)),"error-icon":o("aecc")},null,8,["src","error-icon"]),Object(c["createElementVNode"])("span",i,Object(c["toDisplayString"])((null===(S=B.redpacket)||void 0===S?void 0:S.symbol)||"---"),1),D.currentAccountRedPacket?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",s,Object(c["toDisplayString"])(e.$f.formatNumber2(null===(A=D.currentAccountRedPacket)||void 0===A?void 0:A.amount))+Object(c["toDisplayString"])(e.$t("per")),1)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",d,Object(c["toDisplayString"])(e.$t("whoSend",{user:B.redpacket.creator_nickname||((null===(I=B.redpacket.creator_address)||void 0===I||null===(F=I.slice)||void 0===F?void 0:F.call(I,0,4))||"")+"..."+((null===(R=B.redpacket.creator_address)||void 0===R||null===(T=R.slice)||void 0===T?void 0:T.call(R,-4))||"")})),1)),Object(c["createElementVNode"])("span",u,Object(c["toDisplayString"])(B.redpacket.remark),1)])]),Object(c["createElementVNode"])("div",b,[Object(c["createElementVNode"])("div",m,[B.list.length<(null===(P=B.redpacket)||void 0===P?void 0:P.count)?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",v,Object(c["toDisplayString"])(e.$t("tipRecordReceived",{n:B.list.length+"/"+(null===(z=B.redpacket)||void 0===z?void 0:z.count)||0,m:e.$f.formatNumber2(B.receiveAmount)+"/"+e.$f.formatNumber2(null===(H=B.redpacket)||void 0===H?void 0:H.total_amount)})),1)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",p,Object(c["toDisplayString"])(e.$t("tipRecordRobbed",{n:(null===(U=B.redpacket)||void 0===U?void 0:U.count)||0,m:e.$f.formatNumber2(null===(L=B.redpacket)||void 0===L?void 0:L.total_amount),z:B.time})),1)),3==B.status||4==B.status?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",f,[B.timeHide?(Object(c["openBlock"])(),Object(c["createBlock"])(J,{key:0,time:B.timeCountDown,onChange:D.changeCountDown},null,8,["time","onChange"])):Object(c["createCommentVNode"])("",!0)])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",j,Object(c["toDisplayString"])(e.$f.filterRedPacketStatus(B.status)),1))]),B.list.length>0?(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:0},[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(B.list,(function(t,o){return Object(c["openBlock"])(),Object(c["createBlock"])(Z,{class:"flex",key:o,"value-class":"cell-right"},{title:Object(c["withCtx"])((function(){var o,n,a,r,l,i,s,d,u,b,m,v;return[Object(c["createElementVNode"])("div",h,[Object(c["createElementVNode"])("div",null,[t.user_image?(Object(c["openBlock"])(),Object(c["createBlock"])(q,{key:0,class:"chat-avatar",round:"",width:"0.8rem",height:"0.8rem","icon-size":"0.8rem","lazy-load":"","show-loading":"",src:D.isUser(t)&&(null===(o=e.$store.state.chat)||void 0===o||null===(n=o.userInfo)||void 0===n?void 0:n.image)||t.user_image,onClick:Object(c["withModifiers"])((function(o){return D.isUser(t)&&e.$router.push({name:"UserInfo"})}),["stop"])},null,8,["src","onClick"])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:1,class:"chat-avatar",style:Object(c["normalizeStyle"])({backgroundColor:"#"+(null===(a=t.user_address)||void 0===a?void 0:a.slice(-6)),color:D.avatarColor(t)}),onClick:Object(c["withModifiers"])((function(o){return D.isUser(t)&&e.$router.push({name:"UserInfo"})}),["stop"])},Object(c["toDisplayString"])(null===(r=t.user_address)||void 0===r?void 0:r.slice(-2)),13,O))]),Object(c["createElementVNode"])("div",k,[Object(c["createElementVNode"])("div",g,[D.formatRole(t)?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{key:0,class:"role-tag",style:Object(c["normalizeStyle"])({backgroundColor:D.formatRole(t,"color")})},Object(c["toDisplayString"])(D.formatRole(t)),5)):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("span",y,Object(c["toDisplayString"])(""!=t.user_nickname?t.user_nickname:((null===t||void 0===t||null===(l=t.user_address)||void 0===l||null===(i=l.slice)||void 0===i?void 0:i.call(l,0,4))||"")+"..."+((null===t||void 0===t||null===(s=t.user_address)||void 0===s||null===(d=s.slice)||void 0===d?void 0:d.call(s,-4))||"")),1),t.user_nickname?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",C,"("+Object(c["toDisplayString"])(((null===t||void 0===t||null===(u=t.user_address)||void 0===u||null===(b=u.slice)||void 0===b?void 0:b.call(u,0,4))||"")+"..."+((null===t||void 0===t||null===(m=t.user_address)||void 0===m||null===(v=m.slice)||void 0===v?void 0:v.call(m,-4))||""))+")",1)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("span",_,Object(c["toDisplayString"])(e.$f.formatDate(t.time)||"--"),1)])])]})),value:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",$,[Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.$f.formatNumber2(t.amount)||0),1),N,Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.$t("per")),1),B.bestLuckyAddress==t.user_address?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",x,[Object(c["createVNode"])(K,{name:"good-job-o",class:"font-16"}),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(e.$t("bestLuck")),1)])):Object(c["createCommentVNode"])("",!0)])]})),_:2},1024)})),128)),B.tx?(Object(c["openBlock"])(),Object(c["createElementBlock"])("a",{key:0,class:"font-14 mt-40 color-3F80F7 block text-center",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(){return D.jump&&D.jump.apply(D,arguments)}),["stop","prevent"])),href:"",target:"_blank"},Object(c["toDisplayString"])(e.$t("transferHash"))+": "+Object(c["toDisplayString"])(B.tx.slice(2,6)+"..."+B.tx.slice(-4)),1)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",V,Object(c["toDisplayString"])(e.$t("transferHash"))+": --",1))],64)):(Object(c["openBlock"])(),Object(c["createBlock"])(G,{key:1,description:e.$t("emptyData")},null,8,["description"]))])])}var w=o("5530"),B=(o("b0c0"),o("4de4"),o("d3b7"),o("c740"),o("a434"),o("a9e3"),o("4e82"),o("365c")),D={name:"ChatRedRecord",data:function(){return{list:[],redpacket:{},receiveAmount:0,time:0,bestLuckyAddress:"",timeCountDown:0,timeHide:!1,status:0,tx:""}},watch:{packetId:function(){"ChatRedRecord"==this.$route.name&&(this.timeHide=!1,this.timeCountDown=0,this.viewDetailRedPacket())}},mounted:function(){this.viewDetailRedPacket()},computed:{currentAccountRedPacket:function(){var e=this;return this.list.filter((function(t){return t.user_address==e.$store.state.chat.userInfo.address||t.user_address==e.$store.state.currentAccount}))[0]},packetId:function(){return this.$route.query.packetId}},methods:{viewDetailRedPacket:function(){var e=this,t={groupId:this.$route.params.id,redPacketId:this.$route.query.packetId},o=this.$toast.loading({message:"Loading...",forbidClick:!0,duration:0});Object(B["xd"])(t).then((function(t){var o,c,n,a,r;e.list=(null===t||void 0===t?void 0:t.receive_list)||[];var l,i,s=e.list.findIndex((function(t){return t.user_address===e.$store.state.chat.userInfo.address||t.user_address===e.$store.state.currentAccount}));if(-1!=s&&(e.list.unshift(e.list[s]),e.list.splice(s+1,1)),e.receiveAmount=e.list.reduce((function(e,t){return e+Number(t.amount)}),0),e.redpacket=Object(w["a"])(Object(w["a"])({},null===t||void 0===t?void 0:t.redpacket),{},{creator_image:t.creator_image,creator_nickname:t.creator_nickname}),e.list.length>=(null===(o=e.redpacket)||void 0===o?void 0:o.count)){var d=e.list.slice().sort((function(e,t){return t.time-e.time}));e.time=d[0].time-e.redpacket.created_time}if((e.list.length>=(null===(c=e.redpacket)||void 0===c?void 0:c.count)||2===t.status)&&0===e.redpacket.type&&e.list.length>0){var u=e.list.slice().sort((function(e,t){return t.amount-e.amount}));e.bestLuckyAddress=u[0].user_address}else e.bestLuckyAddress="";(e.status=t.status,1e3*((null===(n=e.redpacket)||void 0===n?void 0:n.created_time)+(null===(a=e.redpacket)||void 0===a?void 0:a.end_time))-(new Date).getTime()>0)?e.timeCountDown=1e3*((null===(l=e.redpacket)||void 0===l?void 0:l.created_time)+(null===(i=e.redpacket)||void 0===i?void 0:i.end_time))-(new Date).getTime():e.timeCountDown=0;e.timeCountDown>0&&(3==e.status||4==e.status)?e.timeHide=!0:e.timeHide=!1,e.tx=e.redpacket.unlock_tx||(null===(r=e.list[0])||void 0===r?void 0:r.tx)})).catch((function(t){e.$notify({type:"danger",message:"View Failed"}),console.log(t)})).finally((function(){o.clear()}))},changeCountDown:function(e){e&&0===(null===e||void 0===e?void 0:e.days)&&0===(null===e||void 0===e?void 0:e.hours)&&0===(null===e||void 0===e?void 0:e.minutes)&&0===(null===e||void 0===e?void 0:e.seconds)&&(this.timeHide=!1,this.timeCountDown=0,this.viewDetailRedPacket())},avatarColor:function(e){var t,o=null===(t=e.user_address)||void 0===t?void 0:t.slice(-6),c=.2126*Number("0x"+(null===o||void 0===o?void 0:o.slice(0,2))),n=.7152*Number("0x"+(null===o||void 0===o?void 0:o.slice(2,4))),a=.0722*Number("0x"+(null===o||void 0===o?void 0:o.slice(4,6))),r=c+n+a,l=r/255,i="hsl(0, 0%, ".concat(-999999*(l-.6),"%");return i},isUser:function(e){var t,o,c,n,a,r;return e.user_address===(null===(t=this.$store.state)||void 0===t||null===(o=t.chat)||void 0===o||null===(c=o.userInfo)||void 0===c?void 0:c.address)&&e.user_chain===(null===(n=this.$store.state)||void 0===n||null===(a=n.chat)||void 0===a||null===(r=a.userInfo)||void 0===r?void 0:r.chain)},formatRole:function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",c=2===e.group_role?1.5:e.group_role,n=Math.max(c,e.user_role),a={0:{name:"",role:0,color:"#1FD0A3"},1:{name:this.$t("admin"),role:1,color:"#1FD0A3"},1.5:{name:this.$t("projectParty"),role:1.5,color:"#3F80F7"},2:{name:this.$t("inspector"),role:2,color:"#FFC800"},3:{name:this.$t("superAdmin"),role:3,color:"#1FD0A3"}};return(null===a||void 0===a||null===(t=a[n])||void 0===t?void 0:t[o])||""},jump:function(){var e="https://bscscan.com/tx/".concat(this.tx);this.$f.openBrowser(e)}}},S=(o("f53b"),o("6b0d")),A=o.n(S);const I=A()(D,[["render",E],["__scopeId","data-v-4e92b3a2"]]);t["default"]=I},"3cd6":function(e,t,o){e.exports=o.p+"static/img/tx_en.afc875e9.png"},"4f84":function(e,t,o){},"7a50":function(e,t,o){},f53b:function(e,t,o){"use strict";o("7a50")},fb9e:function(e,t,o){"use strict";o("4f84")}}]);