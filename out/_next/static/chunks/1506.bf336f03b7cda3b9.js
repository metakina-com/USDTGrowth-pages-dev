"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1506,63337],{37321:function(n,e,t){t.d(e,{d:function(){return a}});let a=(0,t(85738).ax)({id:97,name:"BNB Smart Chain Testnet",nativeCurrency:{name:"BNB Chain Native Token",symbol:"tBNB",decimals:18},blockExplorers:[{name:"bscscan-testnet",url:"https://testnet.bscscan.com"}]})},81604:function(n,e,t){t.d(e,{M1:function(){return s}});var a=t(94293);let r=[{type:"address",name:"owner"},{type:"address",name:"spender"}],c=[{type:"uint256"}];async function s(n){return(0,a.readContract)({contract:n.contract,method:["0xdd62ed3e",r,c],params:[n.owner,n.spender]})}},46188:function(n,e,t){t.d(e,{B:function(){return c}});var a=t(71551),r=t(46510);async function c(n){let e=await (0,a.sendTransaction)(n);return(0,r.h)(e)}}}]);