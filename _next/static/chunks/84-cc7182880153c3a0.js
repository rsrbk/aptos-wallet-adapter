(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84],{2819:function(e,t,n){"use strict";n.r(t),n.d(t,{DEVNET_NODE_URL:function(){return i},default:function(){return h}});var s=n(7458),a=n(234),l=n(3341),r=n(2983);function o(e){let{text:t}=e;return(0,s.jsxs)("div",{className:"bg-teal-100 border border-teal-400 text-teal-900 px-4 py-3 rounded relative",role:"alert",children:[(0,s.jsx)("span",{className:"block sm:inline break-all right-3",children:t}),(0,s.jsx)("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:(0,s.jsxs)("svg",{className:"fill-current h-6 w-6 text-teal-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:[(0,s.jsx)("title",{children:"Close"}),(0,s.jsx)("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})]})})]})}function c(e){let{text:t}=e;return(0,s.jsxs)("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert",children:[(0,s.jsx)("span",{className:"block sm:inline break-all",children:t}),(0,s.jsx)("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:(0,s.jsxs)("svg",{className:"fill-current h-6 w-6 text-red-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:[(0,s.jsx)("title",{children:"Close"}),(0,s.jsx)("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})]})})]})}let i="https://fullnode.devnet.aptoslabs.com/v1",d=new a.gK(i,{WITH_CREDENTIALS:!1});function h(){let{connect:e,disconnect:t,account:n,network:a,wallet:i,wallets:h,signAndSubmitTransaction:u,signTransaction:w,signMessage:g}=(0,l.O)(),[m,x]=(0,r.useState)(""),[p,y]=(0,r.useState)(""),b=t=>{e(t)},f=async()=>{let e={type:"entry_function_payload",function:"0x1::coin::transfer",type_arguments:["0x1::aptos_coin::AptosCoin"],arguments:[null==n?void 0:n.address,1]};try{let t=await u(e);await d.waitForTransaction((null==t?void 0:t.hash)||""),x("https://explorer.devnet.aptos.dev/txn/".concat(null==t?void 0:t.hash))}catch(s){console.log("error",s),y(s)}},v=async()=>{let e={type:"entry_function_payload",function:"0x1::coin::transfer",type_arguments:["0x1::aptos_coin::AptosCoin"],arguments:[null==n?void 0:n.address,1]};try{let t=await w(e);console.log("response",t)}catch(s){console.log("error",s),y(s)}},j=async()=>{try{let e=await g({message:"Hello from Aptos Wallet Adapter",nonce:"random_string"});x(JSON.stringify(e)),console.log("response",e)}catch(t){console.log("error",t),y(t)}};return console.log("wallets",h),(0,s.jsxs)("div",{children:[m.length>0&&(0,s.jsx)(o,{text:m}),p.length>0&&(0,s.jsx)(c,{text:p}),(0,s.jsx)("table",{className:"table-auto w-full border-separate border-spacing-y-8 shadow-lg bg-white border-separate",children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"px-8 py-4 w-1/4",children:(0,s.jsx)("h3",{children:"Connect a Wallet"})}),(0,s.jsx)("td",{className:"px-8 py-4 w-3/4",children:(0,s.jsx)("div",{children:null==h?void 0:h.map(e=>(0,s.jsx)("button",{className:"bg-blue-500  text-white font-bold py-2 px-4 rounded mr-4 ".concat("Installed"!==e.readyState?"opacity-50 cursor-not-allowed":"hover:bg-blue-700"),disabled:"Installed"!==e.readyState,onClick:()=>b(e.name),children:e.name},e.name))})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"px-8 py-4 border-t w-1/4",children:(0,s.jsx)("h3",{children:"Actions"})}),(0,s.jsx)("td",{className:"px-8 py-4 border-t break-all w-3/4",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{className:"bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4",onClick:t,children:"Disconnect"}),(0,s.jsx)("button",{className:"bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4",onClick:f,children:"Sign and submit transaction"}),(0,s.jsx)("button",{className:"bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4",onClick:v,children:"Sign transaction"}),(0,s.jsx)("button",{className:"bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4",onClick:j,children:"Sign Message"})]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"px-8 py-4 border-t w-1/4",children:(0,s.jsx)("h3",{children:"Wallet Name"})}),(0,s.jsxs)("td",{className:"px-8 py-4 border-t w-3/4",children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("img",{style:{width:"25px",marginRight:"20px"},src:null==i?void 0:i.icon}),JSON.stringify(null==i?void 0:i.name)]}),(0,s.jsx)("div",{children:(0,s.jsx)("a",{target:"_blank",href:null==i?void 0:i.url,children:null==i?void 0:i.url})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"px-8 py-4 border-t",children:(0,s.jsx)("h3",{children:"Account"})}),(0,s.jsx)("td",{className:"px-8 py-4 border-t break-all",children:(0,s.jsx)("div",{children:JSON.stringify(n)})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"px-8 py-4 border-t",children:(0,s.jsx)("h3",{children:"Network"})}),(0,s.jsx)("td",{className:"px-8 py-4 border-t",children:(0,s.jsx)("div",{children:JSON.stringify(a)})})]})]})})]})}},3341:function(e,t,n){"use strict";n.d(t,{A:function(){return N},O:function(){return l}});var s=n(2983);let a=(0,s.createContext)({connected:!1});function l(){let e=(0,s.useContext)(a);if(!e)throw Error("useWallet must be used within a WalletContextState");return e}var r=n(7458),o=n(1883),c=class extends Error{constructor(e,t){super(e),this.error=t}},i=class extends c{constructor(){super(...arguments),this.name="WalletNotSelectedError"}},d=class extends c{constructor(){super(...arguments),this.name="WalletNotReadyError"}},h=class extends c{constructor(){super(...arguments),this.name="WalletConnectionError"}},u=class extends c{constructor(){super(...arguments),this.name="WalletDisconnectionError"}},w=class extends c{constructor(){super(...arguments),this.name="WalletAccountError"}},g=class extends c{constructor(){super(...arguments),this.name="WalletGetNetworkError"}},m=class extends c{constructor(){super(...arguments),this.name="WalletAccountChangeError"}},x=class extends c{constructor(){super(...arguments),this.name="WalletNetworkChangeError"}},p=class extends c{constructor(){super(...arguments),this.name="WalletNotConnectedError"}},y=class extends c{constructor(){super(...arguments),this.name="WalletSignMessageError"}},b=class extends c{constructor(){super(...arguments),this.name="WalletSignAndSubmitMessageError"}},f=class extends c{constructor(){super(...arguments),this.name="WalletSignTransactionError"}},v="AptosWalletName",j=class extends o.EventEmitter{scopePollingDetectionStrategy(){var e;null==(e=this._wallets)||e.forEach(e=>{e.readyState="undefined"==typeof document?"Unsupported":"NotDetected","Unsupported"!==e.readyState&&function(e){if("undefined"==typeof document)return;let t=[];function n(){let n=e();if(n)for(let s of t)s()}let s=setInterval(n,1e3);t.push(()=>clearInterval(s)),"loading"===document.readyState&&(document.addEventListener("DOMContentLoaded",n,{once:!0}),t.push(()=>document.removeEventListener("DOMContentLoaded",n))),"complete"!==document.readyState&&(window.addEventListener("load",n,{once:!0}),t.push(()=>window.removeEventListener("load",n))),n()}(()=>!!Object.keys(window).includes(e.name.toLocaleLowerCase())&&(e.readyState="Installed",!0))})}isWalletExists(){if(!this._connected||this._connecting||!this._wallet)throw new p().name;if(!("Loadable"===this._wallet.readyState||"Installed"===this._wallet.readyState))throw new d().name;return!0}clearData(){this.setWallet(null),this.setAccount(null),this.setNetwork(null),localStorage.removeItem(v)}setWallet(e){this._wallet=e}setAccount(e){this._account=e}setNetwork(e){this._network=e}isConnected(){return this._connected}get wallets(){return this._wallets}get wallet(){try{if(!this._wallet)return null;return{name:this._wallet.name,icon:this._wallet.icon,url:this._wallet.url}}catch(e){throw new i(e).message}}get account(){try{return this._account}catch(e){throw new w(e).message}}get network(){try{return this._network}catch(e){throw new g(e).message}}async connect(e){var t,n;try{this._connecting=!0;let s=null==(t=this._wallets)?void 0:t.find(t=>t.name===e);if(!s||"Installed"!==s.readyState)return;this.setWallet(s);let a=await s.connect();this.setAccount({...a});let l=await s.network();this.setNetwork({...l}),n=s.name,localStorage.setItem(v,n),this._connected=!0,this.emit("connect",a)}catch(r){throw this.clearData(),new h(r).message}finally{this._connecting=!1}}async disconnect(){var e;try{await (null==(e=this._wallet)?void 0:e.disconnect()),this._connected=!1,this.clearData(),this.emit("disconnect")}catch(t){throw new u(t).message}}async signAndSubmitTransaction(e){var t;try{this.isWalletExists();let n=await (null==(t=this._wallet)?void 0:t.signAndSubmitTransaction(e));return n}catch(a){let s="object"==typeof a&&"message"in a?a.message:a;throw new b(s).message}}async signTransaction(e){try{if(this._wallet&&!("signTransaction"in this._wallet))return null;this.isWalletExists();let t=await this._wallet.signTransaction(e);return t}catch(s){let n="object"==typeof s&&"message"in s?s.message:s;throw new f(n).message}}async signMessage(e){var t;try{if(this.isWalletExists(),!this._wallet)return null;let n=await (null==(t=this._wallet)?void 0:t.signMessage(e));return n}catch(a){let s="object"==typeof a&&"message"in a?a.message:a;throw new y(s).message}}async onAccountChange(){var e;try{this.isWalletExists(),await (null==(e=this._wallet)?void 0:e.onAccountChange(e=>{this.setAccount({...e}),this.emit("accountChange",this._account)}))}catch(n){let t="object"==typeof n&&"message"in n?n.message:n;throw new m(t).message}}async onNetworkChange(){var e;try{this.isWalletExists(),await (null==(e=this._wallet)?void 0:e.onNetworkChange(e=>{this.setNetwork({...e}),this.emit("networkChange",this._network)}))}catch(n){let t="object"==typeof n&&"message"in n?n.message:n;throw new x(t).message}}constructor(e){super(),this._wallets=null,this._wallet=null,this._account=null,this._network=null,this._connecting=!1,this._connected=!1,this._wallets=e,this.scopePollingDetectionStrategy()}};let _={connected:!1,account:null,network:null,wallet:null},N=e=>{let{children:t,plugins:n,autoConnect:l=!1}=e,[o,c]=(0,s.useState)(new j(n)),[{connected:i,account:d,network:h,wallet:u},w]=(0,s.useState)(_),[g,m]=(0,s.useState)(o.wallets),[x,p]=(0,s.useState)(!1);(0,s.useEffect)(()=>{p(!0)},[]);let y=e=>{try{o.connect(e)}catch(t){console.log("connect error",t)}},b=()=>{try{o.disconnect()}catch(e){console.log("disconnect error",e)}},f=async e=>{try{return await o.signAndSubmitTransaction(e)}catch(t){throw t}},v=async e=>{try{return await o.signTransaction(e)}catch(t){throw t}},N=async e=>{try{return await o.signMessage(e)}catch(t){throw t}};(0,s.useEffect)(()=>{l&&localStorage.getItem("AptosWalletName")&&y(localStorage.getItem("AptosWalletName"))},[]),(0,s.useEffect)(()=>{i&&(o.onAccountChange(),o.onNetworkChange())},[o,i]);let k=(0,s.useCallback)(()=>{w(e=>({...e,connected:!0,account:o.account,network:o.network,wallet:o.wallet}))},[i]),C=(0,s.useCallback)(()=>{i&&w(e=>({...e,connected:!1,account:o.account,network:o.network,wallet:null}))},[i]),S=(0,s.useCallback)(()=>{i&&o.wallet&&w(e=>({...e,account:o.account}))},[i]),E=(0,s.useCallback)(()=>{i&&o.wallet&&w(e=>({...e,network:o.network}))},[i]);return((0,s.useEffect)(()=>(o.on("connect",k),o.on("disconnect",C),o.on("accountChange",S),o.on("networkChange",E),()=>{o.off("connect",k),o.off("disconnect",C),o.off("accountChange",S),o.off("networkChange",E)}),[i]),x)?(0,r.jsx)(a.Provider,{value:{connect:y,account:d,network:h,connected:i,disconnect:b,wallet:u,wallets:g,signAndSubmitTransaction:f,signTransaction:v,signMessage:N},children:t}):(0,r.jsx)(r.Fragment,{})}},3938:function(){}}]);