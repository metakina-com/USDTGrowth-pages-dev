(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{72372:function(e,t,l){Promise.resolve().then(l.bind(l,51964))},13931:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var n=l(14749),a=l(64090),i={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"outlined"},s=l(60688),r=a.forwardRef(function(e,t){return a.createElement(s.Z,(0,n.Z)({},e,{ref:t,icon:i}))})},51964:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return T}});var n=l(3827),a=l(64090),i=l(63886),s=l(22665),r=l(38302),c=l(28683),o=l(4779),u=l(1861),d=l(14749),_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},h=l(60688),m=a.forwardRef(function(e,t){return a.createElement(h.Z,(0,d.Z)({},e,{ref:t,icon:_}))}),x=l(20383),v=l(13931),A=l(47907),p=l(66403),j=l(20703),f=l(72338),C=l.n(f),M={src:"/_next/static/media/leftarraw.9fdb1a6b.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEVMaXH////////////////////////+/v6xnI00AAAACHRSTlMAoZQCBDUGP+fyt9kAAAAJcEhZcwAACxMAAAsTAQCanBgAAAArSURBVHicRYpBDgAgCMMKTPn/j800xFObdQDsllFkmBDDpK5MsL3ln9ESBwjAADyD9g/8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},D=e=>{let{title:t,backUrl:l}=e,a=(0,A.useRouter)(),i=()=>{a.push(l)};return(0,n.jsx)("div",{className:C().nativeBar,children:(0,n.jsxs)("div",{className:C().leftarraw,children:[(0,n.jsx)(j.default,{onClick:()=>i(),className:C().m1,src:M,alt:"coin",width:50,height:50}),(0,n.jsx)("div",{className:C().t1,children:t})]})})},g=l(23349),y=l(70975),b=l(80219),N=l.n(b),w=l(52805);let{Option:B}=i.default,Z=()=>{let e;let[t]=s.Z.useForm(),[l,d]=(0,a.useState)(!1),_=(0,A.useSearchParams)(),h=(null==_?void 0:_.get("MinerData"))||null;console.log("minerData:",h);try{e=h?JSON.parse(h):null,console.log("miner:",e)}catch(t){console.error("解析 MinerData 时出错:",t),e=null}let j=()=>{d(!l)},f=async e=>{let l=await (0,g.RA)(p.c.ETHAddress,y.B),n=w.vz(e.USDTnum,18);await l.deposit(n),t.resetFields()};return(0,n.jsxs)("div",{className:N().rewardcontainer,children:[(0,n.jsx)(D,{title:"充值与奖励",backUrl:"/Machine"}),(0,n.jsxs)("div",{className:N().conter,children:[(0,n.jsxs)("div",{style:{height:l?"400px":"300px",overflow:"hidden"},children:[(0,n.jsx)("div",{className:N().contertitle,children:null==e?void 0:e.name}),(0,n.jsxs)("div",{className:N().topup,children:[(0,n.jsx)("span",{children:"充值"}),(0,n.jsx)("span",{children:null==e?void 0:e.topupNum})]}),(0,n.jsxs)("div",{className:N().topup,children:[(0,n.jsx)("span",{children:"利息"}),(0,n.jsx)("span",{children:null==e?void 0:e.interestname})]}),(0,n.jsx)("div",{children:[{title:"额定算力",value:"180TH/s, -9%~+9%"},{title:"能效比",value:"23.5J/TH, -7%~+7%"},{title:"功耗",value:"3259W, -10%~+10%"},{title:"连接方式",value:"RJ45 LLK 100M"},{title:"风扇",value:"4* 12050 FAN"},{title:"风量，CFM",value:"420MAX"},{title:"运行温度",value:"-7\xb0C~39\xb0C"},{title:"裸机尺寸",value:"L271mm x W198mm x H2"},{title:"外箱尺寸",value:"L420MM x W325mm x H4"},{title:"净重",value:"14.5kg"},{title:"毛重",value:"14.6kg"},{title:"交流电压输入范围，Volt",value:"200~300"},{title:"交流电源输入频率范围，Hz",value:"50~70"},{title:"交流电流输入范围，Amp",value:"16"}].map((e,t)=>(0,n.jsxs)("div",{className:N().ComputingPower,children:[(0,n.jsx)("div",{children:e.title}),(0,n.jsx)("div",{children:e.value})]},t))})]}),(0,n.jsx)("div",{className:N().arrows,children:l?(0,n.jsx)(m,{className:"".concat(N().lconstyle," ").concat(l?"rotate-up":""),onClick:j}):(0,n.jsx)(x.Z,{className:"".concat(N().lconstyle," ").concat(l?"":"rotate-down"),onClick:j})})]}),(0,n.jsx)("div",{className:N().Content,children:(0,n.jsxs)(s.Z,{name:"amount",form:t,onFinish:f,layout:"vertical",style:{color:"white"},children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(c.Z,{span:24,children:(0,n.jsxs)("div",{className:N().Contentinterest,children:[(0,n.jsx)("span",{className:N().Contentlabel,children:"充值(USDT)"}),(0,n.jsx)("div",{className:"tikuan",children:(0,n.jsx)(i.default,{defaultValue:"USDT",suffixIcon:(0,n.jsx)(v.Z,{style:{color:"#E89E2C"}}),children:(0,n.jsx)(B,{value:"USDT",children:"USDT"})})})]})}),(0,n.jsx)(c.Z,{span:24,style:{marginTop:12,marginBottom:12},children:(0,n.jsx)(s.Z.Item,{colon:!1,name:"USDTnum",children:(0,n.jsx)(o.Z,{placeholder:"请输入数量",className:N().inputstyle})})})]}),(0,n.jsx)(r.Z,{style:{marginTop:24},children:(0,n.jsx)(c.Z,{span:24,children:(0,n.jsx)(s.Z.Item,{children:(0,n.jsx)(u.ZP,{type:"primary",htmlType:"submit",className:N().buttonstyle,children:"充值"})})})})]})})]})};var T=()=>(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)("div",{children:"Loading..."}),children:(0,n.jsx)(Z,{})})},72338:function(e){e.exports={nativeBar:"NativeBar_nativeBar__KKFtY",leftarraw:"NativeBar_leftarraw__qCP0h",m1:"NativeBar_m1__tIBI3",t1:"NativeBar_t1__6IyQ1"}},80219:function(e){e.exports={rewardcontainer:"MinerDetails_rewardcontainer__hG_rC",arrows:"MinerDetails_arrows__0UTWa",lconstyle:"MinerDetails_lconstyle__UlNRM",Content:"MinerDetails_Content__z3NEj",inputstyle:"MinerDetails_inputstyle__B04gf",buttonstyle:"MinerDetails_buttonstyle__rRHDJ",buttonstyleflg:"MinerDetails_buttonstyleflg__ysWfU",buttonHelpFriendstyle:"MinerDetails_buttonHelpFriendstyle__Omda_",ContentText:"MinerDetails_ContentText__PqI0R",ContentInstructions:"MinerDetails_ContentInstructions__j9Pvq",Contentinterest:"MinerDetails_Contentinterest__09YZQ",Contentlabel:"MinerDetails_Contentlabel__naPNI",interest:"MinerDetails_interest__CAJbj",labelContainer:"MinerDetails_labelContainer__29WrK",labelLeft:"MinerDetails_labelLeft__vkfMF",labelRight:"MinerDetails_labelRight__bhhjI",CalculatedValue:"MinerDetails_CalculatedValue__1ezxI",Ustyle:"MinerDetails_Ustyle__hQ_sy",Colstyle:"MinerDetails_Colstyle__5cfVC",conter:"MinerDetails_conter__4rvP0",contertitle:"MinerDetails_contertitle__iLGuX",topup:"MinerDetails_topup__io55x",ComputingPower:"MinerDetails_ComputingPower__KqGTU"}}},function(e){e.O(0,[86164,49923,22202,6624,63886,4122,92971,8069,1744],function(){return e(e.s=72372)}),_N_E=e.O()}]);