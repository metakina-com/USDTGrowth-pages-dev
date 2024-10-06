"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61563],{61563:function(e,t,n){n.r(t),n.d(t,{connectSmartWallet:function(){return ev},disconnectSmartWallet:function(){return eh},isSmartWallet:function(){return ey},personalAccountToSmartAccountMap:function(){return em}});var a=n(63121),r=n(85738),i=n(47275),s=n(68725),o=n(90874),c=n(14520);function l(e){if(["string","number"].includes(typeof e)&&!Number.isInteger(Number(e)))throw Error("Expected value to be an integer to convert to a bigint, got ".concat(e," of type ").concat(typeof e));return e instanceof Uint8Array?BigInt((0,c.dg)(e)):BigInt(e)}var u=n(94646),d=n(80695),p=n(73256);let y=e=>{let t=function(e){let{gas:t,nonce:n,to:a,from:r,value:i,maxFeePerGas:s,maxPriorityFeePerGas:o,paymaster:c,paymasterInput:l,gasPerPubdata:u,data:d}=e;return{txType:113n,from:BigInt(r),to:a?BigInt(a):0n,gasLimit:null!=t?t:0n,gasPerPubdataByteLimit:null!=u?u:50000n,maxFeePerGas:null!=s?s:0n,maxPriorityFeePerGas:null!=o?o:0n,paymaster:c?BigInt(c):0n,nonce:n?BigInt(n):0n,value:null!=i?i:0n,data:d||"0x0",factoryDeps:[],paymasterInput:l||"0x"}}(e);return{domain:{name:"zkSync",version:"2",chainId:e.chainId},types:{Transaction:[{name:"txType",type:"uint256"},{name:"from",type:"uint256"},{name:"to",type:"uint256"},{name:"gasLimit",type:"uint256"},{name:"gasPerPubdataByteLimit",type:"uint256"},{name:"maxFeePerGas",type:"uint256"},{name:"maxPriorityFeePerGas",type:"uint256"},{name:"paymaster",type:"uint256"},{name:"nonce",type:"uint256"},{name:"value",type:"uint256"},{name:"data",type:"bytes"},{name:"factoryDeps",type:"bytes32[]"},{name:"paymasterInput",type:"bytes"}]},primaryType:"Transaction",message:t}};async function m(e){let{account:t,eip712Transaction:n,chainId:a}=e,r=y(n),i=await t.signTypedData({...r});return function(e){var t;let{chainId:n,gas:a,nonce:r,to:i,from:o,value:l,maxFeePerGas:u,maxPriorityFeePerGas:d,customSignature:p,factoryDeps:y,paymaster:m,paymasterInput:f,gasPerPubdata:v,data:h}=e,g=[r?(0,c.NC)(r):"0x",d?(0,c.NC)(d):"0x",u?(0,c.NC)(u):"0x",a?(0,c.NC)(a):"0x",null!=i?i:"0x",l?(0,c.NC)(l):"0x",null!=h?h:"0x0",(0,c.NC)(n),(0,c.NC)(""),(0,c.NC)(""),(0,c.NC)(n),null!=o?o:"0x",v?(0,c.NC)(v):(0,c.NC)(50000n),null!=y?y:[],null!=p?p:"0x",m&&f?[m,f]:[]];return t=["0x71",(0,s.LV)(g)],"0x".concat(t.reduce((e,t)=>e+t.replace("0x",""),""))}({...n,chainId:a,customSignature:i})}async function f(e){let{account:t,transaction:n}=e,[a,r,i,s,y,m,f]=await Promise.all([(0,d.encode)(n),(0,u.q)(n.to),(0,u.q)(n.value),(0,u.q)(n.gas),(0,u.q)(n.maxFeePerGas),(0,u.q)(n.maxPriorityFeePerGas),(0,u.q)(n.eip712).then(e=>null==e?void 0:e.gasPerPubdata)]);if(!s||!y||!m){let e=(0,o.getRpcClient)(n),u=await e({method:"zks_estimateFee",params:[{from:t.address,to:r,data:a,value:i?(0,c.eC)(i):void 0}]});s=l(u.gas_limit),y=2n*l(u.max_fee_per_gas),m=l(u.max_priority_fee_per_gas)||1n,f=l(u.gas_per_pubdata_limit)}return{...await (0,p.n)({transaction:{...n,gas:s,maxFeePerGas:y,maxPriorityFeePerGas:m},from:t.address}),...n.eip712,gasPerPubdata:f,from:t.address}}var v=n(83286),h=n(24053),g=n(77808),w=n(45581),b=n(95305),G=n(81106);let x=G.r;var A=n(92155),P=n(28201),I=n(67705);let O="/docs/contract/decodeEventLog";var T=n(55139),B=n(80230);class C extends B.G{constructor(e){super('Filter type "'.concat(e,'" is not supported.')),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}var U=n(73596),L=n(30206),M=n(8580),_=n(21230),N=n(14433),E=n(9226);let D="/docs/contract/encodeEventTopics";function F(e){let{param:t,value:n}=e;if("string"===t.type||"bytes"===t.type)return(0,L.w)((0,U.O0)(n));if("tuple"===t.type||t.type.match(/^(.*)\[(\d+)?\]$/))throw new C(t.type);return(0,M.E)([t],[n])}var S=n(23565),j=n(49859),k=n(36062),H=n(3556),V=n(1793);let q=()=>{let e=BigInt(Math.floor(4294967296*Math.random())),t=BigInt(Math.floor(4294967296*Math.random())),n=BigInt(Math.floor(4294967296*Math.random())),a=BigInt(Math.floor(4294967296*Math.random())),r=BigInt(Math.floor(4294967296*Math.random())),i=BigInt(Math.floor(4294967296*Math.random()));return e<<BigInt(160)|t<<BigInt(128)|n<<BigInt(96)|a<<BigInt(64)|r<<BigInt(32)|i},R=()=>BigInt((0,H.zo)([(0,c.eC)(q()),"0x0000000000000000"]));function z(e){return Object.fromEntries(Object.entries(e).map(e=>{let[t,n]=e;return[t,(0,V.v)(n)?n:(0,c.NC)(n)]}))}async function $(e){var t;return Z({...e,operation:"eth_sendUserOperation",params:[z(e.userOp),null!==(t=e.options.entrypointAddress)&&void 0!==t?t:k.Ex]})}async function W(e){var t;let n=await Z({...e,operation:"eth_estimateUserOperationGas",params:[z(e.userOp),null!==(t=e.options.entrypointAddress)&&void 0!==t?t:k.Ex]});return{preVerificationGas:(0,c.y_)(n.preVerificationGas),verificationGas:(0,c.y_)(n.verificationGas),verificationGasLimit:(0,c.y_)(n.verificationGasLimit),callGasLimit:(0,c.y_)(n.callGasLimit)+k.X_}}async function J(e){let t=await Z({...e,operation:"thirdweb_getUserOperationGasPrice",params:[]});return{maxPriorityFeePerGas:(0,c.y_)(t.maxPriorityFeePerGas),maxFeePerGas:(0,c.y_)(t.maxFeePerGas)}}async function K(e){let t=await X(e);if(t){if(!1===t.success){var n,a;let e=null===(a=function(e){let{logs:t,events:n,strict:a}=e;return function(e){let{abi:t,eventName:n,logs:a,strict:r=!0}=e;return a.map(e=>{try{let a=function(e){let{abi:t,data:n,strict:a,topics:r}=e,i=null==a||a,[s,...o]=r;if(!s)throw new w.FM({docsPath:O});let c=t.find(e=>"event"===e.type&&s===x((0,I.t)(e)));if(!(c&&"name"in c)||"event"!==c.type)throw new w.lC(s,{docsPath:O});let{name:l,inputs:u}=c,d=null==u?void 0:u.some(e=>!("name"in e&&e.name)),p=d?[]:{},y=u.filter(e=>"indexed"in e&&e.indexed);for(let e=0;e<y.length;e++){let t=y[e],n=o[e];if(!n)throw new w.Gy({abiItem:c,param:t});p[d?e:t.name||e]=function(e){let{param:t,value:n}=e;return"string"===t.type||"bytes"===t.type||"tuple"===t.type||t.type.match(/^(.*)\[(\d+)?\]$/)?n:((0,P.r)([t],n)||[])[0]}({param:t,value:n})}let m=u.filter(e=>!("indexed"in e&&e.indexed));if(m.length>0){if(n&&"0x"!==n)try{let e=(0,P.r)(m,n);if(e){if(d)p=[...p,...e];else for(let t=0;t<m.length;t++)p[m[t].name]=e[t]}}catch(e){if(i){if(e instanceof w.xB||e instanceof A.lQ)throw new w.SM({abiItem:c,data:n,params:m,size:(0,b.d)(n)});throw e}}else if(i)throw new w.SM({abiItem:c,data:"0x",params:m,size:0})}return{eventName:l,args:Object.values(p).length>0?p:void 0}}({...e,abi:t,strict:r});if(n&&!n.includes(a.eventName))return null;return{...a,...e}}catch(i){let t,n;if(i instanceof w.lC)return null;if(i instanceof w.SM||i instanceof w.Gy){var a;if(r)return null;t=i.abiItem.name,n=null===(a=i.abiItem.inputs)||void 0===a?void 0:a.some(e=>!("name"in e&&e.name))}return{...e,args:n?[]:{},eventName:t}}}).filter(Boolean)}({logs:t,abi:n.map(e=>e.abiEvent),strict:a})}({events:[function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e){let t;let{signature:n}=e;return{abiEvent:t=n&&"object"==typeof n&&"type"in n&&"event"===n.type?n:(0,T.s)(n),hash:(0,G.r)(t),topics:function(e){let{abi:t,eventName:n,args:a}=e,r=t[0];if(n){let e=function(e){let t;let{abi:n,args:a=[],name:r}=e,i=(0,_.v)(r,{strict:!1}),s=n.filter(e=>i?"function"===e.type?(0,E.C)(e)===r:"event"===e.type&&x(e)===r:"name"in e&&e.name===r);if(0!==s.length){if(1===s.length)return s[0];for(let e of s)if("inputs"in e){if(!a||0===a.length){if(!e.inputs||0===e.inputs.length)return e;continue}if(e.inputs&&0!==e.inputs.length&&e.inputs.length===a.length&&a.every((t,n)=>{let a="inputs"in e&&e.inputs[n];return!!a&&function e(t,n){let a=typeof t,r=n.type;switch(r){case"address":return(0,N.U)(t,{strict:!1});case"bool":return"boolean"===a;case"function":case"string":return"string"===a;default:if("tuple"===r&&"components"in n)return Object.values(n.components).every((n,a)=>e(Object.values(t)[a],n));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r))return"number"===a||"bigint"===a;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r))return"string"===a||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r))return Array.isArray(t)&&t.every(t=>e(t,{...n,type:r.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,a)})){if(t&&"inputs"in t&&t.inputs){let n=function e(t,n,a){for(let r in t){let i=t[r],s=n[r];if("tuple"===i.type&&"tuple"===s.type&&"components"in i&&"components"in s)return e(i.components,s.components,a[r]);let o=[i.type,s.type];if(o.includes("address")&&o.includes("bytes20")||(o.includes("address")&&o.includes("string")||o.includes("address")&&o.includes("bytes"))&&(0,N.U)(a[r],{strict:!1}))return o}}(e.inputs,t.inputs,a);if(n)throw new w.S4({abiItem:e,type:n[0]},{abiItem:t,type:n[1]})}t=e}}return t||s[0]}}({abi:t,name:n});if(!e)throw new w.mv(n,{docsPath:D});r=e}if("event"!==r.type)throw new w.mv(void 0,{docsPath:D});let i=x((0,I.t)(r)),s=[];if(a&&"inputs"in r){var o,c,l;let e=null===(o=r.inputs)||void 0===o?void 0:o.filter(e=>"indexed"in e&&e.indexed),t=Array.isArray(a)?a:Object.values(a).length>0&&null!==(c=null==e?void 0:e.map(e=>a[e.name]))&&void 0!==c?c:[];t.length>0&&(s=null!==(l=null==e?void 0:e.map((e,n)=>Array.isArray(t[n])?t[n].map((a,r)=>F({param:e,value:t[n][r]})):t[n]?F({param:e,value:t[n]}):null))&&void 0!==l?l:[])}return[i,...s]}({abi:[t],args:e.filters})}}({signature:"event UserOperationRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)",filters:e})}()],logs:t.logs})[0])||void 0===a?void 0:null===(n=a.args)||void 0===n?void 0:n.revertReason;if(!e)throw Error("UserOp failed at txHash: ".concat(t.receipt.transactionHash));let r=(0,g.p)({data:e});throw Error("UserOp failed with reason: '".concat(r.args.join(","),"' at txHash: ").concat(t.receipt.transactionHash))}return t.receipt}}async function X(e){let t=await Z({options:e,operation:"eth_getUserOperationReceipt",params:[e.userOpHash]});if(t)return function(e){let{receipt:t}=e,n={...t,transactionHash:t.transactionHash,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs,to:t.to?t.to:null,transactionIndex:t.transactionIndex,status:t.status,type:t.type};return t.blobGasPrice&&(n.blobGasPrice=BigInt(t.blobGasPrice)),t.blobGasUsed&&(n.blobGasUsed=BigInt(t.blobGasUsed)),{...e,receipt:n,userOpHash:e.userOpHash,actualGasCost:BigInt(e.actualGasCost),actualGasUsed:BigInt(e.actualGasUsed),nonce:BigInt(e.nonce)}}(t)}async function Q(e){let t=await Z({options:e.options,operation:"zk_paymasterData",params:[e.transaction]});return{paymaster:t.paymaster,paymasterInput:t.paymasterInput}}async function Y(e){return{transactionHash:(await Z({options:e.options,operation:"zk_broadcastTransaction",params:[{...e.transaction,signedTransaction:e.signedTransaction}]})).transactionHash}}async function Z(e){var t;let{options:n,operation:a,params:r}=e;k.eM&&console.debug(">>> sending ".concat(a," with payload:"),r);let i=null!==(t=n.bundlerUrl)&&void 0!==t?t:(0,k.Rg)(n.chain),s=(0,S.NX)(n.client),o=await s(i,{method:"POST",headers:{"Content-Type":"application/json"},body:(0,j.P)({jsonrpc:"2.0",id:1,method:a,params:r})}),c=await o.json();if(!o.ok||c.error){let e=c.error||o.statusText;"object"==typeof e&&(e=JSON.stringify(e));let t=c.code||"UNKNOWN";throw Error("".concat(a," error: ").concat(e,"\nStatus: ").concat(o.status,"\nCode: ").concat(t))}return k.eM&&console.debug("<<< ".concat(a," result:"),c),c.result}var ee=n(14698),et=n(94293);async function en(e){let{factoryContract:t,predictAddressOverride:n,adminAddress:a,accountSalt:r,accountAddress:i}=e;if(n)return n(t);if(i)return i;if(!a)throw Error("Account address is required to predict the smart wallet address.");let s=(0,c.$G)(null!=r?r:"");return(0,et.readContract)({contract:t,method:"function getAddress(address, bytes) returns (address)",params:[a,s]})}var ea=n(75525),er=n(97686),ei=n(88267),es=n(47456),eo=n(70777);async function ec(e){var t;let{userOp:n,paymasterOverride:a,client:r,chain:i,entrypointAddress:s}=e;if(a)return a(n);let o=(0,k.K9)(i),l=null!=s?s:k.Ex,u=(0,S.NX)(r),d=await u(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method:"pm_sponsorUserOperation",params:[z(n),l]})}),p=await d.json();if(!d.ok){let e=p.error||d.statusText,t=p.code||"UNKNOWN";throw Error("Paymaster error: ".concat(e,"\nStatus: ").concat(d.status,"\nCode: ").concat(t))}if(k.eM&&console.debug("Paymaster result:",p),p.result)return"string"==typeof p.result?{paymasterAndData:p.result}:{paymasterAndData:p.result.paymasterAndData,verificationGasLimit:p.result.verificationGasLimit?(0,c.y_)(p.result.verificationGasLimit):void 0,preVerificationGas:p.result.preVerificationGas?(0,c.y_)(p.result.preVerificationGas):void 0,callGasLimit:p.result.callGasLimit?(0,c.y_)(p.result.callGasLimit):void 0};let y=(null===(t=p.error)||void 0===t?void 0:t.message)||p.error||d.statusText||"unknown error";throw Error("Paymaster error from ".concat(o,": ").concat(y))}async function el(e){let t=e.timeoutMs||12e4,n=e.intervalMs||1e3,a=Date.now()+t;for(;Date.now()<a;){let t=await K(e);if(t)return t;await new Promise(e=>setTimeout(e,n))}throw Error("Timeout waiting for userOp to be mined")}async function eu(e){var t,n,a;let{transaction:r,accountContract:i,factoryContract:s,adminAddress:o,overrides:c,sponsorGas:l}=e,p=r.chain,y=r.client,m=await (0,ei.isContractDeployed)(i)?"0x":await ep({factoryContract:s,adminAddress:o,accountSalt:null==c?void 0:c.accountSalt,createAccountOverride:null==c?void 0:c.createAccount}),f=await (0,d.encode)(r),v={client:y,chain:p,entrypointAddress:null==c?void 0:c.entrypointAddress},{maxFeePerGas:h,maxPriorityFeePerGas:g}=r,w=null!==(t=null==c?void 0:c.bundlerUrl)&&void 0!==t?t:(0,k.Rg)(p);if((0,S.Rm)(w)){let e=await J({options:v});h=e.maxFeePerGas,g=e.maxPriorityFeePerGas}else{let[e,t]=await Promise.all([(0,u.q)(h),(0,u.q)(g)]);if(e&&t)h=e,g=t;else{let r=await (0,ea.E)(y,p);g=null!==(n=null!=t?t:r.maxPriorityFeePerGas)&&void 0!==n?n:0n,h=null!==(a=null!=e?e:r.maxFeePerGas)&&void 0!==a?a:0n}}let b=R(),G={sender:i.address,nonce:b,initCode:m,callData:f,maxFeePerGas:h,maxPriorityFeePerGas:g,callGasLimit:0n,verificationGasLimit:0n,preVerificationGas:0n,paymasterAndData:"0x",signature:k.Ld};if(l){let e=await ec({userOp:G,chain:p,client:y,entrypointAddress:null==c?void 0:c.entrypointAddress,paymasterOverride:null==c?void 0:c.paymaster}),t=e.paymasterAndData;if(t&&"0x"!==t&&(G.paymasterAndData=t),e.callGasLimit&&e.verificationGasLimit&&e.preVerificationGas)G.callGasLimit=e.callGasLimit,G.verificationGasLimit=e.verificationGasLimit,G.preVerificationGas=e.preVerificationGas;else{let e=await W({userOp:G,options:v});if(G.callGasLimit=e.callGasLimit,G.verificationGasLimit=e.verificationGasLimit,G.preVerificationGas=e.preVerificationGas,t&&"0x"!==t){let e=await ec({userOp:G,chain:p,client:y,entrypointAddress:null==c?void 0:c.entrypointAddress,paymasterOverride:null==c?void 0:c.paymaster});e.paymasterAndData&&"0x"!==e.paymasterAndData&&(G.paymasterAndData=e.paymasterAndData)}}}else{let e=await W({userOp:G,options:v});G.callGasLimit=e.callGasLimit,G.verificationGasLimit=e.verificationGasLimit,G.preVerificationGas=e.preVerificationGas}return{...G,signature:"0x"}}async function ed(e){let{userOp:t,chain:n,entrypointAddress:a,adminAccount:r}=e,i=function(e){let{userOp:t,entryPoint:n,chainId:a}=e,r=(0,eo.w)(t.initCode),i=(0,eo.w)(t.callData),s=(0,eo.w)(t.paymasterAndData),o=(0,er.encodeAbiParameters)([{type:"address"},{type:"uint256"},{type:"bytes32"},{type:"bytes32"},{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"bytes32"}],[t.sender,t.nonce,r,i,t.callGasLimit,t.verificationGasLimit,t.preVerificationGas,t.maxFeePerGas,t.maxPriorityFeePerGas,s]),c=(0,er.encodeAbiParameters)([{type:"bytes32"},{type:"address"},{type:"uint256"}],[(0,eo.w)(o),n,BigInt(a)]);return(0,eo.w)(c)}({userOp:t,entryPoint:a||k.Ex,chainId:n.id});if(r.signMessage){let e=await r.signMessage({message:{raw:(0,es.nr)(i)}});return{...t,signature:e}}throw Error("signMessage not implemented in signingAccount")}async function ep(e){let{factoryContract:t,adminAddress:n,accountSalt:a,createAccountOverride:r}=e,i=function(e){let{adminAddress:t,factoryContract:n,createAccountOverride:a,accountSalt:r}=e;return a?a(n):(0,ee.A)({contract:n,method:"function createAccount(address, bytes) returns (address)",params:[t,(0,c.$G)(null!=r?r:"")]})}({factoryContract:t,adminAddress:n,accountSalt:a,createAccountOverride:r});return(0,H.zo)([t.address,await (0,d.encode)(i)])}function ey(e){return"smart"===e.id}let em=new WeakMap,ef=new WeakMap;async function ev(e,t,n){var a,s,o,c;let{personalAccount:l,client:u,chain:d}=t;if(!l)throw Error("Personal wallet does not have an account");let p=null!==(c=n.factoryAddress)&&void 0!==c?c:k.mV,y=null!=d?d:n.chain,v="gasless"in n?n.gasless:n.sponsorGas;if(324===y.id||300===y.id||302===y.id)return[function(e){let{creationOptions:t,connectionOptions:n,chain:a}=e,i={address:n.personalAccount.address,async sendTransaction(s){var o,c,l,u,d,p;let y={data:s.data,to:null!==(l=s.to)&&void 0!==l?l:void 0,value:null!==(u=s.value)&&void 0!==u?u:0n,chain:(0,r.XY)(s.chainId),client:n.client},v=await f({account:i,transaction:y});if(e.sponsorGas){let e=await Q({options:{client:n.client,chain:a,bundlerUrl:null===(d=t.overrides)||void 0===d?void 0:d.bundlerUrl,entrypointAddress:null===(p=t.overrides)||void 0===p?void 0:p.entrypointAddress},transaction:v});v={...v,...e}}let h=await m({account:i,chainId:a.id,eip712Transaction:v});return{transactionHash:(await Y({options:{client:n.client,chain:a,bundlerUrl:null===(o=t.overrides)||void 0===o?void 0:o.bundlerUrl,entrypointAddress:null===(c=t.overrides)||void 0===c?void 0:c.entrypointAddress},transaction:v,signedTransaction:h})).transactionHash,client:n.client,chain:a}},async signMessage(e){let{message:t}=e;return n.personalAccount.signMessage({message:t})},async signTypedData(e){let t=(0,h.t)(e);return n.personalAccount.signTypedData(t)},async onTransactionRequested(e){var t,a;return null===(t=(a=n.personalAccount).onTransactionRequested)||void 0===t?void 0:t.call(a,e)}};return i}({creationOptions:n,connectionOptions:t,chain:y,sponsorGas:v}),y];let g=(0,i.u)({client:u,address:p,chain:y}),w=await en({factoryContract:g,adminAddress:l.address,predictAddressOverride:null===(a=n.overrides)||void 0===a?void 0:a.predictAddress,accountSalt:null===(s=n.overrides)||void 0===s?void 0:s.accountSalt,accountAddress:null===(o=n.overrides)||void 0===o?void 0:o.accountAddress}).then(e=>e).catch(e=>{throw Error("Failed to get account address with factory contract ".concat(g.address," on chain ID ").concat(y.id,". Are you on the right chain?"),{cause:e})}),b=(0,i.u)({client:u,address:w,chain:y}),G=await eg({...n,chain:y,sponsorGas:v,personalAccount:l,accountContract:b,factoryContract:g,client:u});return em.set(l,e),ef.set(e,l),[G,y]}async function eh(e){let t=ef.get(e);t&&(em.delete(t),ef.delete(e))}async function eg(e){let{accountContract:t}=e,r={address:(0,v.Kn)(t.address),async sendTransaction(n){var a;return eb({executeTx:function(e){let{accountContract:t,transaction:n,executeOverride:a}=e;return a?a(t,n):(0,ee.A)({contract:t,method:"function execute(address, uint256, bytes)",params:[n.to||"",n.value||0n,n.data||"0x"]})}({accountContract:t,transaction:n,executeOverride:null===(a=e.overrides)||void 0===a?void 0:a.execute}),options:e})},async sendBatchTransaction(n){var a;return eb({executeTx:function(e){let{accountContract:t,transactions:n,executeBatchOverride:a}=e;return a?a(t,n):(0,ee.A)({contract:t,method:"function executeBatch(address[], uint256[], bytes[])",params:[n.map(e=>e.to||""),n.map(e=>e.value||0n),n.map(e=>e.data||"0x")]})}({accountContract:t,transactions:n,executeBatchOverride:null===(a=e.overrides)||void 0===a?void 0:a.executeBatch}),options:e})},async signMessage(a){let i,{message:s}=a,[{isContractDeployed:o},{readContract:c},{encodeAbiParameters:l},{hashMessage:u},{checkContractWalletSignature:d}]=await Promise.all([Promise.resolve().then(n.bind(n,88267)),Promise.resolve().then(n.bind(n,94293)),Promise.resolve().then(n.bind(n,97686)),n.e(49045).then(n.bind(n,49045)),n.e(45941).then(n.bind(n,45941))]);await o(t)||await ew({options:e,account:r,accountContract:t});let p=u(s),y=!1;try{await c({contract:t,method:"function getMessageHash(bytes32 _hash) public view returns (bytes32)",params:[p]}),y=!0}catch(e){}if(y){let n=l([{type:"bytes32"}],[p]);i=await e.personalAccount.signTypedData({domain:{name:"Account",version:"1",chainId:e.chain.id,verifyingContract:t.address},primaryType:"AccountMessage",types:{AccountMessage:[{name:"message",type:"bytes"}]},message:{message:n}})}else i=await e.personalAccount.signMessage({message:s});if(await d({contract:t,message:s,signature:i}))return i;throw Error("Unable to verify signature on smart account, please make sure the smart account is deployed and the signature is valid.")},async signTypedData(i){var s,o,c;let l;let u=(0,h.t)(i),[{isContractDeployed:d},{readContract:p},{encodeAbiParameters:y},{checkContractWalletSignedTypedData:m}]=await Promise.all([Promise.resolve().then(n.bind(n,88267)),Promise.resolve().then(n.bind(n,94293)),Promise.resolve().then(n.bind(n,97686)),n.e(91348).then(n.bind(n,91348))]);if((null===(o=u.domain)||void 0===o?void 0:null===(s=o.verifyingContract)||void 0===s?void 0:s.toLowerCase())===(null===(c=t.address)||void 0===c?void 0:c.toLowerCase()))return e.personalAccount.signTypedData(u);await d(t)||(console.log("Account contract not deployed yet. Deploying account before signing message"),await ew({options:e,account:r,accountContract:t}));let f=(0,a.Jv)(u),v=!1;try{await p({contract:t,method:"function getMessageHash(bytes32 _hash) public view returns (bytes32)",params:[f]}),v=!0}catch(e){}if(v){let n=y([{type:"bytes32"}],[f]);l=await e.personalAccount.signTypedData({domain:{name:"Account",version:"1",chainId:e.chain.id,verifyingContract:t.address},primaryType:"AccountMessage",types:{AccountMessage:[{name:"message",type:"bytes"}]},message:{message:n}})}else l=await e.personalAccount.signTypedData(u);if(await m({contract:t,data:u,signature:l}))return l;throw Error("Unable to verify signature on smart account, please make sure the smart account is deployed and the signature is valid.")},async onTransactionRequested(t){var n,a;return null===(n=(a=e.personalAccount).onTransactionRequested)||void 0===n?void 0:n.call(a,t)}};return r}async function ew(e){let{options:t,account:a,accountContract:r}=e,[{sendTransaction:i},{prepareTransaction:s}]=await Promise.all([n.e(71551).then(n.bind(n,71551)),Promise.resolve().then(n.bind(n,26554))]),o=s({client:t.client,chain:t.chain,to:r.address,value:0n,gas:50000n});return await i({transaction:o,account:a})}async function eb(e){var t;let{executeTx:n,options:a}=e,r=await eu({transaction:n,factoryContract:a.factoryContract,accountContract:a.accountContract,adminAddress:a.personalAccount.address,sponsorGas:a.sponsorGas,overrides:a.overrides}),i=await ed({chain:a.chain,adminAccount:a.personalAccount,entrypointAddress:null===(t=a.overrides)||void 0===t?void 0:t.entrypointAddress,userOp:r}),s=await $({options:a,userOp:i}),o=await el({...a,userOpHash:s});return{client:a.client,chain:a.chain,transactionHash:o.transactionHash}}},68725:function(e,t,n){n.d(t,{LV:function(){return o}});var a=n(80230),r=n(3425),i=n(73596),s=n(15578);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hex",n=function e(t){return Array.isArray(t)?function(e){let t=e.reduce((e,t)=>e+t.length,0),n=c(t);return{length:t<=55?1+t:1+n+t,encode(a){for(let{encode:r}of(t<=55?a.pushByte(192+t):(a.pushByte(247+n),1===n?a.pushUint8(t):2===n?a.pushUint16(t):3===n?a.pushUint24(t):a.pushUint32(t)),e))r(a)}}}(t.map(t=>e(t))):function(e){let t="string"==typeof e?(0,i.nr)(e):e,n=c(t.length);return{length:1===t.length&&t[0]<128?1:t.length<=55?1+t.length:1+n+t.length,encode(e){1===t.length&&t[0]<128||(t.length<=55?e.pushByte(128+t.length):(e.pushByte(183+n),1===n?e.pushUint8(t.length):2===n?e.pushUint16(t.length):3===n?e.pushUint24(t.length):e.pushUint32(t.length))),e.pushBytes(t)}}}(t)}(e),a=(0,r.q)(new Uint8Array(n.length));return(n.encode(a),"hex"===t)?(0,s.ci)(a.bytes):a.bytes}function c(e){if(e<256)return 1;if(e<65536)return 2;if(e<16777216)return 3;if(e<4294967296)return 4;throw new a.G("Length is too large.")}},63121:function(e,t,n){n.d(t,{Jv:function(){return c}});var a=n(8580),r=n(3556),i=n(15578),s=n(30206),o=n(94237);function c(e){let{domain:t={},message:n,primaryType:a}=e,i={EIP712Domain:(0,o.cj)({domain:t}),...e.types};(0,o.iC)({domain:t,message:n,primaryType:a,types:i});let c=["0x1901"];return t&&c.push(function(e){let{domain:t,types:n}=e;return l({data:t,primaryType:"EIP712Domain",types:n})}({domain:t,types:i})),"EIP712Domain"!==a&&c.push(l({data:n,primaryType:a,types:i})),(0,s.w)((0,r.zo)(c))}function l(e){let{data:t,primaryType:n,types:r}=e,o=function e(t){let{data:n,primaryType:r,types:o}=t,c=[{type:"bytes32"}],l=[function(e){let{primaryType:t,types:n}=e,a=(0,i.NC)(function(e){let{primaryType:t,types:n}=e,a="",r=function e(t){let{primaryType:n,types:a}=t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set,i=n.match(/^\w*/u),s=null==i?void 0:i[0];if(r.has(s)||void 0===a[s])return r;for(let t of(r.add(s),a[s]))e({primaryType:t.type,types:a},r);return r}({primaryType:t,types:n});for(let e of(r.delete(t),[t,...Array.from(r).sort()]))a+="".concat(e,"(").concat(n[e].map(e=>{let{name:t,type:n}=e;return"".concat(n," ").concat(t)}).join(","),")");return a}({primaryType:t,types:n}));return(0,s.w)(a)}({primaryType:r,types:o})];for(let t of o[r]){let[r,u]=function t(n){let{types:r,name:o,type:c,value:l}=n;if(void 0!==r[c])return[{type:"bytes32"},(0,s.w)(e({data:l,primaryType:c,types:r}))];if("bytes"===c){let e=l.length%2?"0":"";return l="0x".concat(e+l.slice(2)),[{type:"bytes32"},(0,s.w)(l)]}if("string"===c)return[{type:"bytes32"},(0,s.w)((0,i.NC)(l))];if(c.lastIndexOf("]")===c.length-1){let e=c.slice(0,c.lastIndexOf("[")),n=l.map(n=>t({name:o,type:e,types:r,value:n}));return[{type:"bytes32"},(0,s.w)((0,a.E)(n.map(e=>{let[t]=e;return t}),n.map(e=>{let[,t]=e;return t})))]}return[{type:c},l]}({types:o,name:t.name,type:t.type,value:n[t.name]});c.push(r),l.push(u)}return(0,a.E)(c,l)}({data:t,primaryType:n,types:r});return(0,s.w)(o)}}}]);