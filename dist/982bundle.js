"use strict";(self.webpackChunkplatzi_store=self.webpackChunkplatzi_store||[]).push([[982],{7876:(e,a,t)=>{var o;t.d(a,{Z:()=>c}),e=t.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r=function(e){return{type:"ADD_TO_CART",payload:e}},s=function(e){return{type:"REMOVE_FROM_CART",payload:e}},d={addToCart:r,removeFromCart:s},i=d;const c=i;var n,l;(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(n.register(r,"addToCart","/home/armandochindoy/platzi/webpack-express/platzi-store/src/actions/index.js"),n.register(s,"removeFromCart","/home/armandochindoy/platzi/webpack-express/platzi-store/src/actions/index.js"),n.register(d,"actions","/home/armandochindoy/platzi/webpack-express/platzi-store/src/actions/index.js"),n.register(i,"default","/home/armandochindoy/platzi/webpack-express/platzi-store/src/actions/index.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)},9982:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});t(7294);var o,r=t(958),s=t(7876),d=t(5893);e=t.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i=function(e){var a=e.cart;return(0,d.jsxs)("div",{className:"Checkout",children:[(0,d.jsxs)("div",{className:"Checkout-content",children:[a.length>0?(0,d.jsx)("h3",{children:"Lista de Pedidos:"}):(0,d.jsx)("h2",{children:"Sin Pedidos"}),a.map((function(a){return(0,d.jsxs)("div",{className:"Checkout-item",children:[(0,d.jsxs)("div",{className:"Checkout-element",children:[(0,d.jsx)("h4",{children:a.title}),(0,d.jsxs)("span",{children:["$",a.price]})]}),(0,d.jsx)("button",{type:"button",onClick:(t=a,function(){e.removeFromCart(t)}),children:(0,d.jsx)("i",{className:"fas fa-trash-alt"})})]},a.title);var t}))]}),a.length>0&&(0,d.jsx)("div",{className:"Checkout-sidebar",children:(0,d.jsx)("h3",{children:"Precio Total: $ ".concat(a.reduce((function(e,a){return e+a.price}),0))})})]})},c=function(e){return{cart:e.cart}},n={removeFromCart:s.Z.removeFromCart},l=(0,r.$j)(c,n)(i);const p=l;var u,h;(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(i,"Checkout","/home/armandochindoy/platzi/webpack-express/platzi-store/src/containers/Checkout.jsx"),u.register(c,"mapStateToProps","/home/armandochindoy/platzi/webpack-express/platzi-store/src/containers/Checkout.jsx"),u.register(n,"mapDispatchToProps","/home/armandochindoy/platzi/webpack-express/platzi-store/src/containers/Checkout.jsx"),u.register(l,"default","/home/armandochindoy/platzi/webpack-express/platzi-store/src/containers/Checkout.jsx")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}}]);