var Ie=(x,t)=>()=>(t||x((t={exports:{}}).exports,t),t.exports);var je=Ie((_e,A)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))m(h);new MutationObserver(h=>{for(const f of h)if(f.type==="childList")for(const P of f.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&m(P)}).observe(document,{childList:!0,subtree:!0});function d(h){const f={};return h.integrity&&(f.integrity=h.integrity),h.referrerPolicy&&(f.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?f.credentials="include":h.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function m(h){if(h.ep)return;h.ep=!0;const f=d(h);fetch(h.href,f)}})();const{searchParams:Se}=new URL(location.href),$=x=>Se.get(x),G=300,Le=5,Re=10*1e3;class Te{constructor(){this.lastCommand=null;const t=$("channel")??"ManzDev",d=$("mode")??"bit";this.diploPollo=document.querySelector("diplo-pollo"),this.connect(t),d==="bit"&&this.enableBitMode(),d==="command"&&this.enableCommandMode()}connect(t){this.client=new tmi.Client({channels:[t]}),this.client.connect()}enableBitMode(){this.client.on("cheer",(t,d,m)=>{const h=d.bits??1,f=Math.floor(h/2);this.diploPollo.incNeck(f)})}enableCommandMode(){this.client.on("message",(t,d,m,h)=>{const f=m[0]==="!",P=new Date().getTime()-Re>this.lastCommand;if(!f||!P)return;if(m.split(" ").at(0).toLowerCase()==="!pollo"){const E=Number.parseInt(m.split(" ").at(1)??Le);if(!(!isNaN(E)&&E>-G&&E<G))return;this.diploPollo.incNeck(E),this.lastCommand=new Date().getTime()}})}}var A={};(function x(t,d,m,h){var f=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),P=typeof Path2D=="function"&&typeof DOMMatrix=="function";function T(){}function E(a){var e=d.exports.Promise,o=e!==void 0?e:t.Promise;return typeof o=="function"?new o(a):(a(T,T),null)}var M=function(){var a=Math.floor(16.666666666666668),e,o,r={},s=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(i){var l=Math.random();return r[l]=requestAnimationFrame(function n(c){s===c||s+a-1<c?(s=c,delete r[l],i()):r[l]=requestAnimationFrame(n)}),l},o=function(i){r[i]&&cancelAnimationFrame(r[i])}):(e=function(i){return setTimeout(i,a)},o=function(i){return clearTimeout(i)}),{frame:e,cancel:o}}(),ee=function(){var a,e,o={};function r(s){function i(l,n){s.postMessage({options:l||{},callback:n})}s.init=function(n){var c=n.transferControlToOffscreen();s.postMessage({canvas:c},[c])},s.fire=function(n,c,g){if(e)return i(n,null),e;var v=Math.random().toString(36).slice(2);return e=E(function(u){function y(w){w.data.callback===v&&(delete o[v],s.removeEventListener("message",y),e=null,g(),u())}s.addEventListener("message",y),i(n,v),o[v]=y.bind(null,{data:{callback:v}})}),e},s.reset=function(){s.postMessage({reset:!0});for(var n in o)o[n](),delete o[n]}}return function(){if(a)return a;if(!m&&f){var s=["var CONFETTI, SIZE = {}, module = {};","("+x.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{a=new Worker(URL.createObjectURL(new Blob([s])))}catch(i){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",i),null}r(a)}return a}}(),ae={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function te(a,e){return e?e(a):a}function ne(a){return a!=null}function b(a,e,o){return te(a&&ne(a[e])?a[e]:ae[e],o)}function oe(a){return a<0?0:Math.floor(a)}function re(a,e){return Math.floor(Math.random()*(e-a))+a}function O(a){return parseInt(a,16)}function ie(a){return a.map(se)}function se(a){var e=String(a).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:O(e.substring(0,2)),g:O(e.substring(2,4)),b:O(e.substring(4,6))}}function le(a){var e=b(a,"origin",Object);return e.x=b(e,"x",Number),e.y=b(e,"y",Number),e}function ce(a){a.width=document.documentElement.clientWidth,a.height=document.documentElement.clientHeight}function de(a){var e=a.getBoundingClientRect();a.width=e.width,a.height=e.height}function he(a){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=a,e}function pe(a,e,o,r,s,i,l,n,c){a.save(),a.translate(e,o),a.rotate(i),a.scale(r,s),a.arc(0,0,1,l,n,c),a.restore()}function ue(a){var e=a.angle*(Math.PI/180),o=a.spread*(Math.PI/180);return{x:a.x,y:a.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:a.startVelocity*.5+Math.random()*a.startVelocity,angle2D:-e+(.5*o-Math.random()*o),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:a.color,shape:a.shape,tick:0,totalTicks:a.ticks,decay:a.decay,drift:a.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:a.gravity*3,ovalScalar:.6,scalar:a.scalar,flat:a.flat}}function me(a,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var o=e.tick++/e.totalTicks,r=e.x+e.random*e.tiltCos,s=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,l=e.wobbleY+e.random*e.tiltSin;if(a.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-o)+")",a.beginPath(),P&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))a.fill(ge(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(i-r)*.1,Math.abs(l-s)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var n=Math.PI/10*e.wobble,c=Math.abs(i-r)*.1,g=Math.abs(l-s)*.1,v=e.shape.bitmap.width*e.scalar,u=e.shape.bitmap.height*e.scalar,y=new DOMMatrix([Math.cos(n)*c,Math.sin(n)*c,-Math.sin(n)*g,Math.cos(n)*g,e.x,e.y]);y.multiplySelf(new DOMMatrix(e.shape.matrix));var w=a.createPattern(e.shape.bitmap,"no-repeat");w.setTransform(y),a.globalAlpha=1-o,a.fillStyle=w,a.fillRect(e.x-v/2,e.y-u/2,v,u),a.globalAlpha=1}else if(e.shape==="circle")a.ellipse?a.ellipse(e.x,e.y,Math.abs(i-r)*e.ovalScalar,Math.abs(l-s)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):pe(a,e.x,e.y,Math.abs(i-r)*e.ovalScalar,Math.abs(l-s)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var p=Math.PI/2*3,S=4*e.scalar,k=8*e.scalar,C=e.x,L=e.y,R=5,I=Math.PI/R;R--;)C=e.x+Math.cos(p)*k,L=e.y+Math.sin(p)*k,a.lineTo(C,L),p+=I,C=e.x+Math.cos(p)*S,L=e.y+Math.sin(p)*S,a.lineTo(C,L),p+=I;else a.moveTo(Math.floor(e.x),Math.floor(e.y)),a.lineTo(Math.floor(e.wobbleX),Math.floor(s)),a.lineTo(Math.floor(i),Math.floor(l)),a.lineTo(Math.floor(r),Math.floor(e.wobbleY));return a.closePath(),a.fill(),e.tick<e.totalTicks}function fe(a,e,o,r,s){var i=e.slice(),l=a.getContext("2d"),n,c,g=E(function(v){function u(){n=c=null,l.clearRect(0,0,r.width,r.height),s(),v()}function y(){m&&!(r.width===h.width&&r.height===h.height)&&(r.width=a.width=h.width,r.height=a.height=h.height),!r.width&&!r.height&&(o(a),r.width=a.width,r.height=a.height),l.clearRect(0,0,r.width,r.height),i=i.filter(function(w){return me(l,w)}),i.length?n=M.frame(y):u()}n=M.frame(y),c=u});return{addFettis:function(v){return i=i.concat(v),g},canvas:a,promise:g,reset:function(){n&&M.cancel(n),c&&c()}}}function W(a,e){var o=!a,r=!!b(e||{},"resize"),s=!1,i=b(e,"disableForReducedMotion",Boolean),l=f&&!!b(e||{},"useWorker"),n=l?ee():null,c=o?ce:de,g=a&&n?!!a.__confetti_initialized:!1,v=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,u;function y(p,S,k){for(var C=b(p,"particleCount",oe),L=b(p,"angle",Number),R=b(p,"spread",Number),I=b(p,"startVelocity",Number),ye=b(p,"decay",Number),we=b(p,"gravity",Number),xe=b(p,"drift",Number),V=b(p,"colors",ie),Me=b(p,"ticks",Number),Y=b(p,"shapes"),ke=b(p,"scalar"),Ce=!!b(p,"flat"),Z=le(p),K=C,D=[],Pe=a.width*Z.x,Ee=a.height*Z.y;K--;)D.push(ue({x:Pe,y:Ee,angle:L,spread:R,startVelocity:I,color:V[K%V.length],shape:Y[re(0,Y.length)],ticks:Me,decay:ye,gravity:we,drift:xe,scalar:ke,flat:Ce}));return u?u.addFettis(D):(u=fe(a,D,c,S,k),u.promise)}function w(p){var S=i||b(p,"disableForReducedMotion",Boolean),k=b(p,"zIndex",Number);if(S&&v)return E(function(I){I()});o&&u?a=u.canvas:o&&!a&&(a=he(k),document.body.appendChild(a)),r&&!g&&c(a);var C={width:a.width,height:a.height};n&&!g&&n.init(a),g=!0,n&&(a.__confetti_initialized=!0);function L(){if(n){var I={getBoundingClientRect:function(){if(!o)return a.getBoundingClientRect()}};c(I),n.postMessage({resize:{width:I.width,height:I.height}});return}C.width=C.height=null}function R(){u=null,r&&(s=!1,t.removeEventListener("resize",L)),o&&a&&(document.body.removeChild(a),a=null,g=!1)}return r&&!s&&(s=!0,t.addEventListener("resize",L,!1)),n?n.fire(p,C,R):y(p,C,R)}return w.reset=function(){n&&n.reset(),u&&u.reset()},w}var z;function _(){return z||(z=W(null,{useWorker:!0,resize:!0})),z}function ge(a,e,o,r,s,i,l){var n=new Path2D(a),c=new Path2D;c.addPath(n,new DOMMatrix(e));var g=new Path2D;return g.addPath(c,new DOMMatrix([Math.cos(l)*s,Math.sin(l)*s,-Math.sin(l)*i,Math.cos(l)*i,o,r])),g}function ve(a){if(!P)throw new Error("path confetti are not supported in this browser");var e,o;typeof a=="string"?e=a:(e=a.path,o=a.matrix);var r=new Path2D(e),s=document.createElement("canvas"),i=s.getContext("2d");if(!o){for(var l=1e3,n=l,c=l,g=0,v=0,u,y,w=0;w<l;w+=2)for(var p=0;p<l;p+=2)i.isPointInPath(r,w,p,"nonzero")&&(n=Math.min(n,w),c=Math.min(c,p),g=Math.max(g,w),v=Math.max(v,p));u=g-n,y=v-c;var S=10,k=Math.min(S/u,S/y);o=[k,0,0,k,-Math.round(u/2+n)*k,-Math.round(y/2+c)*k]}return{type:"path",path:e,matrix:o}}function be(a){var e,o=1,r="#000000",s='"Twemoji Mozilla", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "system emoji", sans-serif';typeof a=="string"?e=a:(e=a.text,o="scalar"in a?a.scalar:o,s="fontFamily"in a?a.fontFamily:s,r="color"in a?a.color:r);var i=10*o,l=""+i+"px "+s,n=new OffscreenCanvas(i,i),c=n.getContext("2d");c.font=l;var g=c.measureText(e),v=Math.floor(g.width),u=Math.floor(g.fontBoundingBoxAscent+g.fontBoundingBoxDescent);n=new OffscreenCanvas(v,u),c=n.getContext("2d"),c.font=l,c.fillStyle=r,c.fillText(e,0,i);var y=1/o;return{type:"bitmap",bitmap:n.transferToImageBitmap(),matrix:[y,0,0,y,-v*y/2,-u*y/2]}}d.exports=function(){return _().apply(this,arguments)},d.exports.reset=function(){_().reset()},d.exports.create=W,d.exports.shapeFromPath=ve,d.exports.shapeFromText=be})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),A,!1);const Ae=A.exports;A.exports.create;class B extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
      }

      .head-group {
        transform: translateY(5px);
      }

      :host-context(.animated) .head-group {
        animation: head-move 400ms infinite steps(4);
      }

      .head {
        width: 32px;
        height: 21px;
        background: var(--image-head);
        transform: translateY(1px);
      }

      .neck {
        width: 32px;
        height: var(--neck-size, 0px);
        background: url("images/neck.png");
        transition: height 0.75s var(--neck-timing);
      }

      @keyframes head-move {
        from { transform: translateY(3px); }
        to { transform: translateY(8px); }
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${B.styles}</style>
    <div class="head-group">
      <div class="head"></div>
      <div class="neck"></div>
    </div>`}}customElements.define("diplo-head",B);const Ne=6,F=[],Oe="cubic-bezier(0.25, -0.75, 0.50, 1.75)",ze=5*60*1e3,De=-5,Fe=.25,J=new URL(location.href).searchParams.get("skin"),Ue=new URL(location.href).searchParams.get("decrease")==="1",$e=new URL(location.href).searchParams.get("ghost")==="1",Q=new URL(location.href).searchParams.get("sound")==="1";class q extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.neckSize=0,this.activity=0}static get styles(){return`
      :host {
        --scale: scale(3);
        --image-head: url("images/skins/original.png");
      }

      .container {
        width: 32px;
        transform: var(--scale);
        transform-origin: 0 100%;
        image-rendering: pixelated;
        opacity: var(--opacity, 1);
        transition: opacity 0.3s;
      }

      diplo-head {
        display: block;
        transform: translateY(1px);
      }

      .body {
        width: 32px;
        height: 25px;
        background: url("images/body.png");
        animation: idle 400ms infinite steps(4);
        position: relative;
      }

      @keyframes idle {
        from { background-position: -128px 0px; }
        to { background-position: 0px 0px; }
      }
    `}setOpacity(t){t>=0&&t<=1&&this.style.setProperty("--opacity",t)}incNeck(t){this.style.setProperty("--neck-timing",Oe),this.neckSize+=t,this.updateNeck(),this.activity++,this.setOpacity(1),this.playSound()}playSound(){if(!Q)return;if(~~(Math.random()*Ne)===0){const d=~~(Math.random()*F.length),m=F[d];m.currentTime=0,m.play()}}setHead(t){this.style.setProperty("--image-head",`url("images/skins/${t}.png")`)}updateNeck(){this.style.setProperty("--neck-size",`${this.neckSize}px`),$("action")==="confetti"&&Ae({particleCount:50,spread:42,origin:{x:.02,y:1}})}connectedCallback(){this.render(),this.initSound(),this.manageSkins(),setInterval(()=>this.manageEvents(),ze)}initSound(){if(Q)for(let t=1;t<5;t++)F.push(new Audio(`sounds/chicken-${t}.mp3`))}manageSkins(){J&&this.setHead(J)}manageEvents(){this.activity>0||(Ue&&this.neckSize>0&&this.incNeck(De),$e&&this.setOpacity(Fe)),this.activity=0}render(){this.shadowRoot.innerHTML=`
    <style>${q.styles}</style>
    <div class="container">
      <diplo-head></diplo-head>
      <div class="body"></div>
    </div>`}}customElements.define("diplo-pollo",q);const U=[{value:"original",name:"Genuine DiploPollo™"},{value:"sunglasses",name:"Beach DiploPollo™"},{value:"king",name:"King DiploPollo™"},{value:"niv3k",name:"DiploDuck™"},{value:"halloween",name:"DecapiPollo™"},{value:"nerd",name:"EmPollon™"},{value:"radioactive",name:"ChernoPollo™"},{value:"plucked",name:"CalvoPollo™"},{value:"magician",name:"HarryPollo™"},{value:"pirate",name:"JackSpollow™"},{value:"mustache",name:"GentlePollo™"},{value:"moto",name:"HarleyPollo™"},{value:"pikapollo",name:"PikaPollo™"},{value:"pollocop",name:"PolloCop™"},{value:"santapollo",name:"SantaPollo™"},{value:"pollobros",name:"PolloBros™"},{value:"manzpollo",name:"ManzPollo™"},{value:"ironpollo",name:"IronPollo™"},{value:"batpollo",name:"BatPollo™"},{value:"homerpollo",name:"HomerPollo™"}];class H extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.currentIndex=0}static get styles(){return`
      :host {
        display: block;
        width: 100%;
        min-height: 50px;
        background: #000;
      }
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2px;

        & img {
          width: calc(20px * 2);
          height: calc(20px * 2);
          object-fit: cover;
          object-position: right 4px top 0;
          border: 3px solid black;
          cursor: pointer;

          &.selected {
            border-color: gold;
          }
        }
      }
    `}preload(){U.forEach(t=>{const d=document.createElement("link");d.rel="preload",d.href=`images/skins/${t.value}.png`,d.as="image",document.head.append(d)})}get value(){return new URL(this.shadowRoot.querySelector("img.selected").src).pathname.replace("/twitch-diplopollo/images/skins/","").replace("/images/skins/","").replace(".png","")}left(){this.unselectAll(),this.currentIndex=this.currentIndex-1>=0?this.currentIndex-1:this.images.length+(this.currentIndex-1),this.images[this.currentIndex].classList.add("selected")}right(){this.unselectAll(),this.currentIndex=(this.currentIndex+1)%this.images.length,this.images[this.currentIndex].classList.add("selected")}unselectAll(){this.shadowRoot.querySelector("img.selected").classList.remove("selected")}connectedCallback(){this.preload(),this.render(),addEventListener("keydown",d=>{const{key:m}=d,h=m==="ArrowLeft"||m==="ArrowUp",f=m==="ArrowRight"||m==="ArrowDown";(h||f)&&d.preventDefault(),h&&this.left(),f&&this.right()}),this.images=[...this.shadowRoot.querySelectorAll("img")],this.images[0].classList.add("selected"),this.images.forEach((d,m)=>d.addEventListener("click",()=>this.selectSkin(m)))}selectSkin(t){this.currentIndex=t,this.unselectAll(),this.images[t].classList.add("selected");const d=new CustomEvent("selectskin",{composed:!0,bubbles:!0,detail:U[t].value});this.dispatchEvent(d)}render(){this.shadowRoot.innerHTML=`
    <style>${H.styles}</style>
    <div class="container">
      ${U.map(t=>`<img src="images/skins/${t.value}.png" alt="${t.name}" title="${t.name}">`).join("")}
    </div>`}}customElements.define("select-skin",H);const Be=`:host{position:relative}.container{--offset: 8px;width:475px;min-height:600px;background:#888;background-image:url(images/cardboard-flat.png);box-shadow:calc(var(--offset) * 1) calc(var(--offset) * 1) 0 #000,calc(var(--offset) * 2) calc(var(--offset) * 2) 0 #000b,calc(var(--offset) * 3) calc(var(--offset) * 3) 0 #0008,calc(var(--offset) * 4) calc(var(--offset) * 4) 0 #0004;padding:20px;position:relative;z-index:1}h1{--color: #850b15;color:#fff;font-family:Larceny,monospace;font-size:5.25rem;margin-bottom:1.5rem;text-align:center;filter:drop-shadow(-3px 0 var(--color)) drop-shadow(0 3px var(--color))}.logo{text-align:center}.logo img{display:block;width:256px;margin:0 auto;margin-bottom:.5rem}.logo .version{background:darkred;padding:0 12px;color:#fff;font-family:EnterCommand,monospace;font-size:26px;display:inline-block;transform:translate(95px,-15px) rotate(-7deg)}.data{display:grid;gap:.25rem}.data label{display:grid;grid-template-columns:.7fr 32px 1fr;align-items:center;gap:1rem}.data label:first-child{grid-row-start:1}.data label:first-child :is(p,info-popup){display:none}.data label:first-child select-skin{grid-column:1 / 4;padding:6px;box-sizing:border-box}.data :is(p,small){font-family:Jost,EnterCommand,monospace;text-shadow:0 0 1px #000;margin:0;font-size:1.25rem;color:#111}.data small{font-size:1rem;margin-top:.5rem;text-align:center;color:#444}.data input[type=text],.data select{margin-top:5px;padding:4px;border:0;background:#000;color:#fff;z-index:10;font-family:EnterCommand,sans-serif;font-size:2rem;min-width:175px;text-align:center}.data input[type=text]:focus,.data select:focus{color:gold}.data input:invalid{background:#440404}.data button{border:0;border-radius:2px;padding:6px 16px;margin-top:6px;font-family:EnterCommand,sans-serif;font-size:2rem;color:#eee;background:linear-gradient(#0863a5,#1283d1);box-shadow:0 7px #0b5a92,0 8px 3px #0000004d;z-index:15;transition:all .15s;cursor:pointer}.data button:active{color:#888;background:linear-gradient(to bottom,#0006,#0008),linear-gradient(#0863a5,#1283d1);transform:translateY(5px);box-shadow:0 2px #0b5a92,0 3px 3px #0000004d}.data textarea{background:#333;border:2px solid #000;color:#fff;margin-top:1rem;min-height:100px;font-family:monospace;font-size:1.25rem;padding:.5rem;text-align:center;resize:none}select[disabled]{background:#555;color:#222;cursor:not-allowed}select[name=skin] option:checked{background:#8da3c2}select[name=skin]::-webkit-scrollbar{background:#222}select[name=skin]::-webkit-scrollbar-thumb{background:#0967ab}info-popup{--size: 25px;background:#0967ab;color:#fff;font-size:1rem;display:inline-grid;width:var(--size);height:var(--size);place-items:center;border-radius:50%;transform:translate(.25rem,-.05rem)}.preview{display:flex;flex-direction:column;position:absolute;top:50%;right:0;transform:translate(30px,-125px) rotate(45deg) scale(4)}.preview .head{width:32px;height:21px;background:var(--image-head, url(images/skins/original.png));transform:translateY(1px)}.preview .neck{width:32px;height:25px;background:url(images/neck.png)}
`,qe="0.4.1";class j extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return Be}connectedCallback(){this.render();const[t,...d]=this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])");this.shadowRoot.querySelector("select-skin").addEventListener("selectskin",({detail:h})=>this.changeHead(h)),t.addEventListener("input",()=>this.updateURL()),d.forEach(h=>h.addEventListener("change",()=>this.updateURL())),this.shadowRoot.querySelector("button").addEventListener("click",()=>this.copyURL())}async copyURL(){const t=this.shadowRoot.querySelector("input[name=channel]");if(!t.value)t.reportValidity();else{localStorage.setItem("channel",t.value);const d=this.shadowRoot.querySelector("textarea").value;await navigator.clipboard.writeText(d)}}changeHead(t){this.style.setProperty("--image-head",`url("images/skins/${t}.png")`),this.updateURL()}getURL(){const t=new URL(location.href),d=`${t.origin}${t.pathname}`,[m,...h]=[...this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])")],f=m.value,P=this.shadowRoot.querySelector("select-skin"),T=h.filter(M=>M[M.selectedIndex].value!=="none").map(M=>`${M.name}=${M[M.selectedIndex].value}`);T.push(`skin=${P.value}`);const E=T.join("&");return`${d}?channel=${f.toLowerCase()}&${E}`}updateURL(){const t=this.shadowRoot.querySelector("textarea");t.value=this.getURL()}render(){const t=localStorage.getItem("channel")??"";this.shadowRoot.innerHTML=`
    <style>${j.styles}</style>
    <div class="logo">
      <img src="images/logo.png" alt="Logo DiploPollo">
      <span class="version">v${qe}</span>
    </div>
    <div class="container">

      <div class="data">

        <label>
          <p>Skin</p>
          <info-popup title="Elige la skin del pollo que más te guste">ℹ</info-popup>
          <select-skin></select-skin>
        </label>

        <label>
          <p>Canal de Twitch</p>
          <info-popup title="Canal de Twitch al que queremos conectarnos">ℹ</info-popup>
          <input type="text" name="channel" placeholder="ManzDev" value="${t}"
                required pattern="([a-zA-Z0-9_])+">
        </label>

        <label>
          <p>Modalidad</p>
          <info-popup title="El cuello del pollo crece cuando el chat escribe comandos o cuando dona bits">ℹ</info-popup>
          <select name="mode">
            <option value="command" selected>Comando !pollo</option>
            <option value="bit">Bits (Donaciones)</option>
          </select>
        </label>

        <label>
          <p>Interacción</p>
          <info-popup title="Cuando hay una interacción con el pollo, ocurre algo adicional">ℹ</info-popup>
          <select name="action">
            <option value="none" selected>Ninguna</option>
            <option value="confetti">Party</option>
          </select>
        </label>

        <label>
          <p>Autodecrecimiento</p>
          <info-popup title="Cuando no hay interacción con el pollo durante un tiempo, el cuello va decreciendo por sí solo.">ℹ</info-popup>
          <select name="decrease">
            <option value="1">Activado</option>
            <option value="none" selected>Desactivado</option>
          </select>
        </label>

        <label>
          <p>Idle ghost</p>
          <info-popup title="Cuando no hay interacción con el pollo durante un tiempo, el pollo se vuelve semitransparente.">ℹ</info-popup>
          <select name="ghost">
            <option value="1">Activado</option>
            <option value="none" selected>Desactivado</option>
          </select>
        </label>

        <label>
          <p>Sonido</p>
          <info-popup title="Activa los sonidos. Desmarcado, mutea los sonidos.">ℹ</info-popup>
          <select name="sound">
            <option value="1">Activado</option>
            <option value="none" selected>Desactivado</option>
          </select>
        </label>

        <label>
          <p>DiploPollo 3000™</p>
          <info-popup title="Funcionalidad especial">ℹ</info-popup>
          <select name="multineck" disabled>
            <option value="1">Activado</option>
            <option value="none" selected>Desactivado</option>
          </select>
        </label>

        <textarea class="code" readonly></textarea>
        <button>Copiar URL</button>
        <small>Copia esta URL y pegala en el OBS como fuente de navegador.</small>
      </div>
    </div>
    <div class="preview">
      <div class="group">
        <div class="head"></div>
        <div class="neck"></div>
      </div>
    </div>
    `}}customElements.define("screen-menu",j);const N=document.querySelector(".container"),{searchParams:He}=new URL(location.href),X=!!He.get("channel");if(X){const x=document.createElement("diplo-pollo");N.classList.add("diplopollo-mode"),x.classList.add("animated"),N.append(x),new Te}if(!X){N.classList.add("menu-mode");const x=document.createElement("screen-menu");N.append(x)}});export default je();