(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ChatBurn"],{"3cd6":function(e,t,n){e.exports=n.p+"static/img/tx_en.afc875e9.png"},"87e9":function(e,t,n){e.exports=n.p+"static/img/恭喜.1a984f7d.svg"},cd7c:function(e,t,n){"use strict";n("d7e9")},cf15:function(e,t,n){"use strict";n.r(t);n("fb6a");var o=n("7a23"),c=n("3cd6"),i=n.n(c),a=n("f80a"),s=n.n(a),r=n("87e9"),l=n.n(r),d=function(e){return Object(o["pushScopeId"])("data-v-6ee2c8d8"),e=e(),Object(o["popScopeId"])(),e},u={class:"burn-container"},h={class:"section-1"},b={class:"top"},m={key:0,class:"font-12 block color-999 mt_10"},p={class:"iconfont icon-copy font-12"},O={class:"bottom"},j={class:"section-2"},f={class:"section-2-box van-hairline--top"},v={class:"block"},g=d((function(){return Object(o["createElementVNode"])("span",{class:"colon"},":",-1)})),V={class:"block"},k={class:"section-3"},C={class:"icon-svg","aria-hidden":"true"},N=["xlink:href"],$={class:"section-4 mb_10"},w={class:"content"},_={class:"alert"},x={class:"section-5 mb_10"},E={class:"content"},y={class:"section-5"},B={class:"section-6"},D={class:"submit-bar van-safe-area-bottom van-hairline--top"},S={class:"tx-tips-content"},A={class:"image-box"},I={key:0,src:i.a,alt:""},T={key:1,src:s.a,alt:""},F=d((function(){return Object(o["createElementVNode"])("img",{style:{width:"100%"},src:l.a},null,-1)})),z={class:"admin-title"},H={class:"admin-content"};function U(e,t,n,c,i,a){var s,r,l=Object(o["resolveComponent"])("van-nav-bar"),d=Object(o["resolveComponent"])("van-image"),U=Object(o["resolveComponent"])("van-count-down"),M=Object(o["resolveComponent"])("van-radio"),L=Object(o["resolveComponent"])("van-cell"),q=Object(o["resolveComponent"])("van-cell-group"),J=Object(o["resolveComponent"])("van-radio-group"),K=Object(o["resolveComponent"])("van-button"),P=Object(o["resolveComponent"])("van-icon"),R=Object(o["resolveComponent"])("van-field"),G=Object(o["resolveComponent"])("van-form"),Z=Object(o["resolveComponent"])("van-dialog"),Q=Object(o["resolveDirective"])("copy");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("section",u,[Object(o["createVNode"])(l,{"left-text":"","left-arrow":"",onClickLeft:t[0]||(t[0]=function(t){return e.$f.goBack()}),fixed:"",placeholder:"","safe-area-inset-top":"","z-index":"2",title:e.$t("destroyForAdmin")},null,8,["title"]),Object(o["createElementVNode"])("div",h,[Object(o["createElementVNode"])("div",b,[Object(o["createVNode"])(d,{class:"icon",width:"0.48rem",height:"0.48rem",round:"","lazy-load":"",src:"".concat(e.$store.state.s3BaseUrl,"token_icon/oec/0x382bb369d343125bfb2117af9c149795c6c65c50.png")},null,8,["src"]),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(a.amount)+"USDT",1)]),i.tokenAddress?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",m,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("contractAddress"))+" "+Object(o["toDisplayString"])((null===(s=i.tokenAddress)||void 0===s?void 0:s.slice(0,4))+"..."+(null===(r=i.tokenAddress)||void 0===r?void 0:r.slice(-4)))+" ",1),Object(o["withDirectives"])(Object(o["createElementVNode"])("i",p,null,512),[[Q,i.tokenAddress]])])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",O,Object(o["toDisplayString"])(e.$route.params.illegalId?this.$t("groupViolationHandling"):this.$t("groupManagementExchange")),1)]),Object(o["createElementVNode"])("div",j,[Object(o["createElementVNode"])("div",f,[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.$t("operationRemainingTime")),1),Object(o["createVNode"])(U,{class:"count-down",time:i.time,onFinish:a.onFinish},{default:Object(o["withCtx"])((function(e){return[Object(o["createElementVNode"])("span",v,Object(o["toDisplayString"])(e.minutes<10?"0"+e.minutes:e.minutes),1),g,Object(o["createElementVNode"])("span",V,Object(o["toDisplayString"])(e.seconds<10?"0"+e.seconds:e.seconds),1)]})),_:1},8,["time","onFinish"])])]),Object(o["createElementVNode"])("div",k,[Object(o["createElementVNode"])("h3",null,Object(o["toDisplayString"])(e.$t("selectBurnMethod")),1),Object(o["createVNode"])(J,{modelValue:i.chain,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.chain=e})},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(q,{border:!1},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(i.chains,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(L,{key:t,title:e.title,clickable:"",onClick:function(t){return a.handleClick(e)},center:""},{icon:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(),Object(o["createElementBlock"])("svg",C,[Object(o["createElementVNode"])("use",{"xlink:href":"#icon-".concat(e.chain)},null,8,N)]))]})),"right-icon":Object(o["withCtx"])((function(){return[Object(o["createVNode"])(M,{name:e.chain},null,8,["name"])]})),_:2},1032,["title","onClick"])})),128))]})),_:1})]})),_:1},8,["modelValue"])]),Object(o["createElementVNode"])("div",$,[Object(o["createElementVNode"])("h3",null,Object(o["toDisplayString"])(e.$t("toAddress")),1),Object(o["createElementVNode"])("div",w,[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(a.toAddress),1),Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(K,{class:"btn",round:"",type:"primary",size:"small"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("copy")),1)]})),_:1})),[[Q,a.toAddress]])]),Object(o["createElementVNode"])("div",_,"*"+Object(o["toDisplayString"])(e.$t("copyToTransfer")),1)]),Object(o["createElementVNode"])("div",x,[Object(o["createElementVNode"])("h3",null,[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.$t("fromAddress")),1)]),Object(o["createElementVNode"])("div",E,Object(o["toDisplayString"])(a.fromAddress),1)]),Object(o["createElementVNode"])("div",y,[Object(o["createElementVNode"])("h3",null,[Object(o["createElementVNode"])("span",null,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("transaction"))+" hash ",1),Object(o["createVNode"])(P,{name:"question-o",color:"#3F80F7",onClick:Object(o["withModifiers"])(a.handleAlert,["stop"])},null,8,["onClick"])])]),Object(o["createVNode"])(G,{ref:"form",onSubmit:a.checkConsumed},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(R,{class:"content",modelValue:i.tx,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.tx=e}),name:"tx",label:"",type:"textarea",placeholder:e.$t("pleaseEnterTransactionId"),autosize:"",clearable:"",rules:[{required:!0,message:e.$t("pleaseEnterTransactionId")},{pattern:a.txHashPattern,message:e.$t("pleaseEnterCorrectTxHash"),trigger:"onBlur"}]},null,8,["modelValue","placeholder","rules"])]})),_:1},8,["onSubmit"])]),Object(o["createElementVNode"])("div",B,Object(o["toDisplayString"])(e.$t("chainTransferTips")),1),Object(o["createElementVNode"])("div",D,[Object(o["createVNode"])(K,{block:"",round:"",loading:i.loading,type:"primary",disabled:!i.tx,onClick:t[3]||(t[3]=Object(o["withModifiers"])((function(t){return e.$refs.form.submit()}),["stop"]))},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("IHaveBurned")),1)]})),_:1},8,["loading","disabled"])])]),Object(o["createVNode"])(Z,{show:i.show,"onUpdate:show":t[4]||(t[4]=function(e){return i.show=e}),"confirm-button-color":"#3F80F7","confirm-button-text":e.$t("iKnown")},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",S,[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.$t("txHashTipsContent")),1),Object(o["createElementVNode"])("div",A,["en"===a.lang?(Object(o["openBlock"])(),Object(o["createElementBlock"])("img",I)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("img",T))])])]})),_:1},8,["show","confirm-button-text"]),i.show1?(Object(o["openBlock"])(),Object(o["createBlock"])(Z,{key:0,show:i.show1,"onUpdate:show":t[5]||(t[5]=function(e){return i.show1=e}),title:"",showConfirmButton:!1},{default:Object(o["withCtx"])((function(){return[F,Object(o["createElementVNode"])("div",z,Object(o["toDisplayString"])(e.$t("congratulationsOnBecomingAdmin")),1),Object(o["createVNode"])(U,{ref:"countDown",time:i.countDownTime,onFinish:a.countDownFinish},{default:Object(o["withCtx"])((function(t){return[Object(o["createElementVNode"])("div",H,Object(o["toDisplayString"])(e.$t("backToChatAfter",{n:t.seconds})),1)]})),_:1},8,["time","onFinish"])]})),_:1},8,["show"])):Object(o["createCommentVNode"])("",!0)],64)}n("ac1f"),n("5319");var M=n("365c"),L={name:"ChatBurn",components:{},data:function(){var e,t,n,o;return{time:18e5,chain:this.$store.getters.netId||"oec",chains:[{title:"OKC",chainId:66,chain:"oec"},{title:"BSC",chainId:56,chain:"bsc"}],tx:"",isBuy:!1,loading:!1,show:!1,show1:!1,countDownTime:4e3,tokenAddress:"oec"===this.chain?(null===(e=this.$store.state.chat)||void 0===e||null===(t=e.chatConfig)||void 0===t?void 0:t.ave_chat_usdt_address_oec)||"":(null===(n=this.$store.state.chat)||void 0===n||null===(o=n.chatConfig)||void 0===o?void 0:o.ave_chat_usdt_address_bsc)||""}},computed:{groupId:function(){return this.$store.state.chat.groupId},txHashPattern:function(){return/^0x[0-9a-zA-Z]{64}$/},lang:function(){return this.$store.getters.language},fromAddress:function(){return this.$store.state.currentAccount},toAddress:function(){var e;return(null===(e=this.$store.state.chat.chatConfig)||void 0===e?void 0:e.ave_chat_usdt_to_address)||""},amount:function(){var e;return null===(e=this.$store.state.chat.chatConfig)||void 0===e?void 0:e.ave_chat_usdt_count}},activated:function(){var e,t,n,o;"oec"===(null===(e=this.$store.getters)||void 0===e?void 0:e.netId)&&(this.tokenAddress=null===(n=this.$store.state.chat.chatConfig)||void 0===n?void 0:n.ave_chat_usdt_address_oec);"bsc"===(null===(t=this.$store.getters)||void 0===t?void 0:t.netId)&&(this.tokenAddress=null===(o=this.$store.state.chat.chatConfig)||void 0===o?void 0:o.ave_chat_usdt_address_bsc)},watch:{chain:function(e){var t,n;"oec"===e&&(this.tokenAddress=null===(t=this.$store.state.chat.chatConfig)||void 0===t?void 0:t.ave_chat_usdt_address_oec);"bsc"===e&&(this.tokenAddress=null===(n=this.$store.state.chat.chatConfig)||void 0===n?void 0:n.ave_chat_usdt_address_bsc)}},beforeRouteLeave:function(e,t,n){var o=this;this.isBuy?n():setTimeout((function(){o.$dialog.confirm({message:o.$t("AlmostDoneConfirmingExit"),"confirm-button-text":o.$t("confirm1"),"cancel-button-text":o.$t("thinkAgain")}).then((function(){n()})).catch((function(){n(!1)}))}),100)},methods:{init:function(){this.getTokenInfo()},getTokenInfo:function(){var e=this;this.groupId&&Object(M["zb"])(this.groupId).then((function(t){e.tokenInfo=t}))},handleClick:function(e){this.chain=e.chain},checkConsumed:function(){var e=this,t={consumed_Type:this.$route.params.illegalId?2:1,group_id:this.groupId,chain:this.chain,tx:this.tx};this.loading=!0,Object(M["w"])(t).then((function(t){t&&(e.isBuy=!0,e.$route.params.illegalId?(e.$store.dispatch("getChatGroupSettings").then((function(){e.$toast({message:e.$t("dissolutionSuccessful"),position:"top"}),e.loading=!1})),e.countDownFinish()):(e.$store.dispatch("getChatInfo"),e.show1=!0,e.loading=!1))})).catch((function(t){e.loading=!1,e.$toast({message:t,position:"top"})}))},onFinish:function(){this.isBuy=!0,this.$f.goBack()},handleAlert:function(){this.show=!0},countDownFinish:function(){this.$router.replace({name:"Chat",params:{id:this.groupId}})}}},q=(n("cd7c"),n("6b0d")),J=n.n(q);const K=J()(L,[["render",U],["__scopeId","data-v-6ee2c8d8"]]);t["default"]=K},d7e9:function(e,t,n){},f80a:function(e,t,n){e.exports=n.p+"static/img/tx_cn.f7210084.png"}}]);