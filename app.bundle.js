(()=>{"use strict";var n={208:(n,t,e)=>{e.d(t,{A:()=>f});var r=e(601),l=e.n(r),o=e(314),i=e.n(o),a=e(417),s=e.n(a),c=new URL(e(647),e.b),d=new URL(e(948),e.b),u=i()(l()),p=s()(c),h=s()(d);u.push([n.id,`/* @font-face {\n  font-family: "myFontRegular";\n  src: url("./notosans-variablefont_wdthwght-webfont.woff2") format("woff2");\n} */\n\n@font-face {\n  font-family: "myFontTitle";\n  src: url(${p}) format("woff");\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n  background: linear-gradient(\n    to top,\n    #004e92,\n    /* Deep ocean blue */ #0072ff,\n    /* Medium ocean blue */ #00c6ff,\n    /* Light blue cyan */ #00d4ff,\n    /* Bright cyan */ #00e5ff,\n    /* Light aqua near the surface */ #b2fefa\n      /* Sunlit water surface light cyan */\n  );\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  justify-content: center;\n  align-items: center;\n  padding-top: 2rem;\n}\n\n#play-again {\n  visibility: hidden;\n  outline: none;\n  cursor: pointer;\n  background-color: rgb(14, 168, 0);\n  border: none;\n  width: 350px;\n  color: white;\n  font-family: myFontTitle;\n  font-size: 3rem;\n  display: grid;\n  place-content: center;\n  padding-top: 1.25rem;\n  padding-bottom: 0.75rem;\n}\n\n.logo {\n  font-family: myFontTitle;\n  font-size: 7rem;\n  background: linear-gradient(\n    to right,\n    /* Deep red */ #ff4500,\n    /* Red-orange */ #ff8c00,\n    /* Dark orange */ #ffa500\n  );\n\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  display: inline-block;\n}\n\n.main-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: "player-side computer-side";\n}\n\n.player-side {\n  grid-area: player-side;\n  display: grid;\n  grid-template-rows: 100px min-content 0.5fr 1fr;\n  grid-template-areas:\n    "."\n    "player-grid"\n    "player-icon" "player-panel";\n  place-items: end;\n  padding-right: 5vw;\n}\n\n.player-grid {\n  grid-area: player-grid;\n  display: grid;\n  grid-template-columns: repeat(10, minmax(25px, 1fr));\n  width: 600px;\n  height: 600px;\n  box-shadow: 3px 3px 10px rgba(111, 105, 105, 0.3);\n}\n\n.player-icon,\n.computer-icon {\n  align-self: start;\n  padding-top: 1rem;\n  height: 100px;\n  width: 100px;\n}\n\n.player-icon {\n  grid-area: player-icon;\n  padding-right: 15.7rem;\n}\n\n.player-panel {\n  grid-area: player-panel;\n  padding-right: 15.7rem;\n  place-self: start end;\n}\n\n.grid-cell:nth-child(10n) {\n  border-right: 1px solid black;\n}\n\n.grid-cell:nth-last-child(-n + 10) {\n  border-bottom: 1px solid black;\n}\n\n.grid-cell {\n  border-top: 1px solid black;\n  border-left: 1px solid black;\n  font-size: 3rem;\n  text-align: center;\n  height: 60px;\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 2rem;\n  justify-content: start;\n  padding-left: 15rem;\n  padding-top: 20rem;\n}\n\n#randomize {\n  outline: none;\n  cursor: pointer;\n  background-image: url(${h});\n  background-size: 80px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: rgb(240, 200, 0);\n  border: none;\n  width: 300px;\n  height: 90px;\n}\n\n#play {\n  outline: none;\n  cursor: pointer;\n  background-color: rgb(14, 168, 0);\n  border: none;\n  width: 300px;\n  color: white;\n  font-family: myFontTitle;\n  font-size: 3rem;\n  display: grid;\n  place-content: center;\n  padding-top: 1.25rem;\n  padding-bottom: 1rem;\n}\n\n.computer-side {\n  grid-area: computer-side;\n  display: grid;\n  grid-template-rows: 100px min-content 0.5fr 1fr;\n  grid-template-areas:\n    "."\n    "computer-grid"\n    "computer-icon"\n    "computer-panel";\n  place-items: start;\n  padding-left: 5vw;\n  display: none;\n}\n\n.computer-grid {\n  grid-area: computer-grid;\n  display: grid;\n  grid-template-columns: repeat(10, minmax(25px, 1fr));\n  width: 600px;\n  height: 600px;\n  box-shadow: 3px 3px 10px rgba(111, 105, 105, 0.3);\n}\n\n.computer-grid > .grid-cell {\n  cursor: crosshair;\n}\n\n.computer-icon {\n  grid-area: computer-icon;\n  place-self: start;\n  padding-left: 15.7rem;\n}\n\n.computer-panel {\n  grid-area: computer-panel;\n  padding-left: 15.7rem;\n}\n\n.icons {\n  width: 35px;\n  height: 35px;\n}\n\n#player-victory,\n#computer-victory {\n  visibility: hidden;\n  width: 100px;\n  height: 100px;\n}\n`,""]);const f=u},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,l,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),l&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=l):d[4]="".concat(l)),t.push(d))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var o={},i=[],a=0;a<n.length;a++){var s=n[a],c=r.base?s[0]+r.base:s[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var p=e(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=l(h,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function l(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,l){var o=r(n=n||[],l=l||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var a=e(o[i]);t[a].references--}for(var s=r(n,l),c=0;c<o.length;c++){var d=e(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var l=void 0!==e.layer;l&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,l&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},647:(n,t,e)=>{n.exports=e.p+"9e7b2cb2877af8180235.woff"},948:(n,t,e)=>{n.exports=e.p+"8546990d8c1d47730704.svg"}},t={};function e(r){var l=t[r];if(void 0!==l)return l.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var l=r.length-1;l>-1&&(!n||!/^http(s?):/.test(n));)n=r[l--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0;class r{constructor(n,t){this.length=n,this.hits=0,this.sunk=!1,this.placement=t}hit(){this.hits<this.length&&(this.hits+=1)}isSunk(){return this.length===this.hits&&(this.sunk=!0,!0)}}function l(n){const t=["left","right","top","bottom"];let e=Math.floor(4*Math.random());return t[e]!==n?t[e]:l(n)}class o{constructor(){this.board=[[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null]],this.shipCoordsArr=[],this.shipsFoundArr=[]}placeShip(n,t,e){this.shipCoordsArr.push(t);const l=t[0],o=t[1],i=new r(n,e);for(let t=0;t<n;t++)"left"===e?this.board[l][o-t]=i:"right"===e?this.board[l][o+t]=i:"top"===e?this.board[l-t][o]=i:"bottom"===e&&(this.board[l+t][o]=i)}randomCoords(n){let t=Math.floor(10*Math.random()),e=Math.floor(4*Math.random()),r=Math.floor(10*Math.random()),o=0,i=0,a=0,s=["left","right","top","bottom"][e];for(let e=0;e<n;e++)("left"===s&&r-e>=0||"right"===s&&r+e<=9||"top"===s&&t-e>=0||"bottom"===s&&t+e<=9)&&o++;for(let e=0;e<n;e++)o===n&&("left"===s&&null===this.board[t][r-e]||"right"===s&&null===this.board[t][r+e]||"top"===s&&null===this.board[t-e][r]||"bottom"===s&&null===this.board[t+e][r])&&i++;for(let e=0;e<n;e++)i===n&&r-e>=0&&r+e<=9&&t-e>=0&&t+e<=9&&("left"===s&&null===this.board[t-e][r+e]&&null===this.board[t+e][r+e]||"right"===s&&null===this.board[t-e][r-e]&&null===this.board[t+e][r-e]||"top"===s&&null===this.board[t-e][r-e]&&null===this.board[t-e][r+e]||"bottom"===s&&null===this.board[t+e][r-e]&&null===this.board[t+e][r+e])&&a++;if(a===n)return{coord:[t,r],placement:s,shipLength:n};s=l(s),this.randomCoords(n)}receiveAttack(n){return"object"==typeof this.board[n[0]][n[1]]&&null!==this.board[n[0]][n[1]]?(this.board[n[0]][n[1]].hit(),this.shipsFoundArr.push([n[0],n[1]]),!0):(this.board[n[0]][n[1]]="miss",!1)}isAllSunk(){let n=0;return this.shipCoordsArr.forEach((t=>{this.board[t[0]][t[1]].isSunk()&&n++})),n===this.shipCoordsArr.length}}class i{constructor(n){this.type=n,this.gameBoard=new o,this.visitedArr=[[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]]}}var a=e(72),s=e.n(a),c=e(825),d=e.n(c),u=e(659),p=e.n(u),h=e(56),f=e.n(h),g=e(540),m=e.n(g),b=e(113),y=e.n(b),v=e(208),x={};x.styleTagTransform=y(),x.setAttributes=f(),x.insert=p().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=m(),s()(v.A,x),v.A&&v.A.locals&&v.A.locals;const w=e.p+"2b731494db6cc1b0d793.svg",A=e.p+"4e542566dc6288d4c4c1.svg",k=e.p+"9d76af7158f8c92cc97e.svg",S=e.p+"3a95965bedf8732cb3a9.svg",T=e.p+"ecf59108aee7e2d2d2a0.svg",L=e.p+"fbb44375eccaec802abf.svg",M=e.p+"f166c4afa5fb61710f96.svg",B=e.p+"2c74b8691fbc24b17f43.svg",C=e.p+"82fd6d20ac1149b84602.svg";function I(n){n.placeShip(4,[5,5],"top"),n.placeShip(3,[0,9],"left"),n.placeShip(3,[8,2],"right"),n.placeShip(2,[1,1],"bottom"),n.placeShip(2,[7,8],"top"),n.placeShip(2,[6,1],"right"),n.placeShip(1,[9,9],"left"),n.placeShip(1,[9,0],"right"),n.placeShip(1,[2,8],"left"),n.placeShip(1,[4,2],"left")}function E(n){n.placeShip(4,[0,0],"bottom"),n.placeShip(3,[2,9],"left"),n.placeShip(3,[3,4],"bottom"),n.placeShip(2,[7,1],"right"),n.placeShip(2,[8,6],"right"),n.placeShip(2,[6,8],"top"),n.placeShip(1,[1,5],"left"),n.placeShip(1,[9,2],"left"),n.placeShip(1,[2,2],"left"),n.placeShip(1,[4,6],"left")}document.querySelector(".player-icon").src=B,document.querySelector(".computer-icon").src=C;const F=new Image;function j(n,t){for(const e of n.children){const n=e.getAttribute("data-row"),r=e.getAttribute("data-column"),l=e.getAttribute("hit");if(e.style.cssText="background-color: white;",e.innerHTML="","object"==typeof t[n][r]&&null!==t[n][r]){if(e.style.cssText="background-color:rgb(0, 106, 255);",e.innerHTML="",4==t[n][r].length){const n=new Image;n.src=T,n.classList.add("icons"),e.appendChild(n)}else if(3==t[n][r].length){const n=new Image;n.src=A,n.classList.add("icons"),e.appendChild(n)}else if(2==t[n][r].length){const n=new Image;n.src=L,n.classList.add("icons"),e.appendChild(n)}else{const n=new Image;n.src=M,n.classList.add("icons"),e.appendChild(n)}if("true"===l){e.style.cssText="background-color: red;",e.innerHTML="";const n=new Image;n.src=w,n.classList.add("icons"),e.appendChild(n)}}else if("miss"===t[n][r]){e.style.cssText="background-color:rgb(255, 249, 208);",e.innerHTML="";const n=new Image;n.src=k,n.classList.add("icons"),e.appendChild(n)}if(null!==t[n][r]&&"object"==typeof t[n][r]&&t[n][r].isSunk()){e.style.cssText="background-color: darkred",e.innerHTML="";const n=new Image;n.src=S,n.classList.add("icons"),e.appendChild(n)}}}function H(n,t){for(const e of n.children){const n=e.getAttribute("data-row"),r=e.getAttribute("data-column"),l=e.getAttribute("hit");if(e.style.cssText="background-color: white;",e.innerHTML="","object"==typeof t[n][r]&&null!==t[n][r]&&"true"===l){e.style.cssText="background-color: red;",e.innerHTML="";const n=new Image;n.src=w,n.classList.add("icons"),e.appendChild(n)}else if("miss"===t[n][r]){e.style.cssText="background-color:rgb(255, 249, 208);",e.innerHTML="";const n=new Image;n.src=k,n.classList.add("icons"),e.appendChild(n)}if(null!==t[n][r]&&"object"==typeof t[n][r]&&t[n][r].isSunk()){e.style.cssText="background-color: darkred",e.innerHTML="";const n=new Image;n.src=S,n.classList.add("icons"),e.appendChild(n)}}}function q(n,t,e){const r=Math.floor(10*Math.random()),l=Math.floor(10*Math.random()),o=function(n){if(n)return[[n[0],n[1]-1],[n[0],n[1]+1],[n[0]-1,n[1]],[n[0]+1,n[1]]][Math.floor(4*Math.random())]}(n.shipsFoundArr.shift());if(o&&o[0]>=0&&o[0]<=9&&o[1]>=0&&o[1]<=9){if(!t[o[0]][o[1]]){for(const t of e.children){const e=t.getAttribute("data-row"),r=t.getAttribute("data-column");o[0]==e&&o[1]==r&&n.receiveAttack([o[0],o[1]])&&t.setAttribute("hit",!0)}return void(t[o[0]][o[1]]=!0)}}else if(!t[r][l]){for(const t of e.children){const e=t.getAttribute("data-row"),o=t.getAttribute("data-column");r==e&&l==o&&n.receiveAttack([r,l])&&t.setAttribute("hit",!0)}return void(t[r][l]=!0)}q(n,t,e)}function z(n,t){for(;;){const e=n.randomCoords(t);if(e){n.placeShip(e.shipLength,e.coord,e.placement);break}}}function R(n,t){for(let e=0;e<10;e++)for(let r=0;r<10;r++)n.board[e][r]=null,t.visitedArr[e][r]=!1;n.shipCoordsArr=[],n.shipsFoundArr=[],z(n,4),z(n,3),z(n,3),z(n,2),z(n,2),z(n,2),z(n,1),z(n,1),z(n,1),z(n,1)}function N(n,t){for(let e=0;e<n.gameBoard.board.length;e++)for(let r=0;r<n.gameBoard.board[0].length;r++){const n=document.createElement("div");n.classList.add("grid-cell"),n.setAttribute("data-row",e),n.setAttribute("data-column",r),n.setAttribute("hit",!1),n.setAttribute("chosen",!1),t.appendChild(n)}}F.src=w,F.classList.add("icons");const $=e.p+"58cbad55cba67249864f.svg",D=new i("human"),P=new i("computer"),U=document.querySelector(".player-grid"),_=document.querySelector(".computer-grid");N(D,U),N(P,_),I(D.gameBoard),j(U,D.gameBoard.board),E(P.gameBoard);const O=document.querySelector("#player-victory"),J=document.querySelector("#computer-victory");J.src=$,O.src=$,document.getElementById("randomize").addEventListener("click",(()=>{R(D.gameBoard,D),j(U,D.gameBoard.board),R(P.gameBoard,P)}));const Q=document.querySelector(".home"),V=document.getElementById("play"),G=document.querySelector(".computer-side");V.addEventListener("click",(()=>{Q.style.cssText="display: none;",G.style.cssText="display: grid;",H(_,P.gameBoard.board)}));const K=document.getElementById("play-again");K.addEventListener("click",(()=>{K.style.cssText="visibility: hidden;",G.style.cssText="display: none;",Q.style.cssText="display: flex;",O.style.cssText="visibility: hidden;",J.style.cssText="visibility: hidden;",function(n,t,e,r){for(let t=0;t<10;t++)for(let r=0;r<10;r++)n.gameBoard.board[t][r]=null,e.gameBoard.board[t][r]=null,n.visitedArr[t][r]=!1,e.visitedArr[t][r]=!1;for(const n of t.children)n.setAttribute("chosen",!1),n.setAttribute("hit",!1);for(const n of r.children)n.setAttribute("chosen",!1),n.setAttribute("hit",!1);n.gameBoard.shipCoordsArr=[],e.gameBoard.shipCoordsArr=[],n.gameBoard.shipsFoundArr=[],e.gameBoard.shipsFoundArr=[],I(n.gameBoard),E(e.gameBoard),j(t,n.gameBoard.board)}(D,U,P,_)})),_.addEventListener("click",(n=>{if("DIV"===n.target.tagName&&"false"===n.target.getAttribute("chosen")&&!D.gameBoard.isAllSunk()&&!P.gameBoard.isAllSunk()){const t=n.target.getAttribute("data-row"),e=n.target.getAttribute("data-column");!function(n,t,e,r){r.setAttribute("chosen",!0),n.receiveAttack([t,e])&&r.setAttribute("hit",!0)}(P.gameBoard,t,e,n.target),H(_,P.gameBoard.board),q(D.gameBoard,D.visitedArr,U),j(U,D.gameBoard.board),D.gameBoard.isAllSunk()?(J.style.cssText="visibility: visible;",K.style.cssText="visibility: visible;"):P.gameBoard.isAllSunk()&&(O.style.cssText="visibility: visible;",K.style.cssText="visibility: visible;")}}))})();