var Se=(M,t)=>()=>(t||M((t={exports:{}}).exports,t),t.exports);var je=Se((_e,N)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))y(u);new MutationObserver(u=>{for(const g of u)if(g.type==="childList")for(const P of g.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&y(P)}).observe(document,{childList:!0,subtree:!0});function d(u){const g={};return u.integrity&&(g.integrity=u.integrity),u.referrerPolicy&&(g.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?g.credentials="include":u.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function y(u){if(u.ep)return;u.ep=!0;const g=d(u);fetch(u.href,g)}})();const{searchParams:Le}=new URL(location.href),$=M=>Le.get(M),G=300,Ie=5,Re=10*1e3;class Te{constructor(){this.lastCommand=null;const t=$("channel")??"ManzDev",d=$("mode")??"bit";this.diploPollo=document.querySelector("diplo-pollo"),this.connect(t),d==="bit"&&this.enableBitMode(),d==="command"&&this.enableCommandMode()}connect(t){this.client=new tmi.Client({channels:[t]}),this.client.connect()}enableBitMode(){this.client.on("cheer",(t,d,y)=>{const u=d.bits??1,g=Math.floor(u/2);this.diploPollo.incNeck(g)})}enableCommandMode(){this.client.on("message",(t,d,y,u)=>{const g=y[0]==="!",P=new Date().getTime()-Re>this.lastCommand;if(!g||!P)return;if(y.split(" ").at(0).toLowerCase()==="!pollo"){const E=Number.parseInt(y.split(" ").at(1)??Ie);if(!(!isNaN(E)&&E>-G&&E<G))return;this.diploPollo.incNeck(E),this.lastCommand=new Date().getTime()}})}}var N={};(function M(t,d,y,u){var g=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),P=typeof Path2D=="function"&&typeof DOMMatrix=="function";function T(){}function E(a){var e=d.exports.Promise,n=e!==void 0?e:t.Promise;return typeof n=="function"?new n(a):(a(T,T),null)}var x=function(){var a=Math.floor(16.666666666666668),e,n,r={},l=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(i){var s=Math.random();return r[s]=requestAnimationFrame(function o(c){l===c||l+a-1<c?(l=c,delete r[s],i()):r[s]=requestAnimationFrame(o)}),s},n=function(i){r[i]&&cancelAnimationFrame(r[i])}):(e=function(i){return setTimeout(i,a)},n=function(i){return clearTimeout(i)}),{frame:e,cancel:n}}(),ee=function(){var a,e,n={};function r(l){function i(s,o){l.postMessage({options:s||{},callback:o})}l.init=function(o){var c=o.transferControlToOffscreen();l.postMessage({canvas:c},[c])},l.fire=function(o,c,m){if(e)return i(o,null),e;var f=Math.random().toString(36).slice(2);return e=E(function(h){function b(w){w.data.callback===f&&(delete n[f],l.removeEventListener("message",b),e=null,m(),h())}l.addEventListener("message",b),i(o,f),n[f]=b.bind(null,{data:{callback:f}})}),e},l.reset=function(){l.postMessage({reset:!0});for(var o in n)n[o](),delete n[o]}}return function(){if(a)return a;if(!y&&g){var l=["var CONFETTI, SIZE = {}, module = {};","("+M.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{a=new Worker(URL.createObjectURL(new Blob([l])))}catch(i){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",i),null}r(a)}return a}}(),ae={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function te(a,e){return e?e(a):a}function oe(a){return a!=null}function v(a,e,n){return te(a&&oe(a[e])?a[e]:ae[e],n)}function ne(a){return a<0?0:Math.floor(a)}function re(a,e){return Math.floor(Math.random()*(e-a))+a}function z(a){return parseInt(a,16)}function ie(a){return a.map(le)}function le(a){var e=String(a).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:z(e.substring(0,2)),g:z(e.substring(2,4)),b:z(e.substring(4,6))}}function se(a){var e=v(a,"origin",Object);return e.x=v(e,"x",Number),e.y=v(e,"y",Number),e}function ce(a){a.width=document.documentElement.clientWidth,a.height=document.documentElement.clientHeight}function de(a){var e=a.getBoundingClientRect();a.width=e.width,a.height=e.height}function pe(a){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=a,e}function ue(a,e,n,r,l,i,s,o,c){a.save(),a.translate(e,n),a.rotate(i),a.scale(r,l),a.arc(0,0,1,s,o,c),a.restore()}function he(a){var e=a.angle*(Math.PI/180),n=a.spread*(Math.PI/180);return{x:a.x,y:a.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:a.startVelocity*.5+Math.random()*a.startVelocity,angle2D:-e+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:a.color,shape:a.shape,tick:0,totalTicks:a.ticks,decay:a.decay,drift:a.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:a.gravity*3,ovalScalar:.6,scalar:a.scalar,flat:a.flat}}function me(a,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var n=e.tick++/e.totalTicks,r=e.x+e.random*e.tiltCos,l=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,s=e.wobbleY+e.random*e.tiltSin;if(a.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",a.beginPath(),P&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))a.fill(ge(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(i-r)*.1,Math.abs(s-l)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var o=Math.PI/10*e.wobble,c=Math.abs(i-r)*.1,m=Math.abs(s-l)*.1,f=e.shape.bitmap.width*e.scalar,h=e.shape.bitmap.height*e.scalar,b=new DOMMatrix([Math.cos(o)*c,Math.sin(o)*c,-Math.sin(o)*m,Math.cos(o)*m,e.x,e.y]);b.multiplySelf(new DOMMatrix(e.shape.matrix));var w=a.createPattern(e.shape.bitmap,"no-repeat");w.setTransform(b),a.globalAlpha=1-n,a.fillStyle=w,a.fillRect(e.x-f/2,e.y-h/2,f,h),a.globalAlpha=1}else if(e.shape==="circle")a.ellipse?a.ellipse(e.x,e.y,Math.abs(i-r)*e.ovalScalar,Math.abs(s-l)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):ue(a,e.x,e.y,Math.abs(i-r)*e.ovalScalar,Math.abs(s-l)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var p=Math.PI/2*3,L=4*e.scalar,k=8*e.scalar,C=e.x,I=e.y,R=5,S=Math.PI/R;R--;)C=e.x+Math.cos(p)*k,I=e.y+Math.sin(p)*k,a.lineTo(C,I),p+=S,C=e.x+Math.cos(p)*L,I=e.y+Math.sin(p)*L,a.lineTo(C,I),p+=S;else a.moveTo(Math.floor(e.x),Math.floor(e.y)),a.lineTo(Math.floor(e.wobbleX),Math.floor(l)),a.lineTo(Math.floor(i),Math.floor(s)),a.lineTo(Math.floor(r),Math.floor(e.wobbleY));return a.closePath(),a.fill(),e.tick<e.totalTicks}function fe(a,e,n,r,l){var i=e.slice(),s=a.getContext("2d"),o,c,m=E(function(f){function h(){o=c=null,s.clearRect(0,0,r.width,r.height),l(),f()}function b(){y&&!(r.width===u.width&&r.height===u.height)&&(r.width=a.width=u.width,r.height=a.height=u.height),!r.width&&!r.height&&(n(a),r.width=a.width,r.height=a.height),s.clearRect(0,0,r.width,r.height),i=i.filter(function(w){return me(s,w)}),i.length?o=x.frame(b):h()}o=x.frame(b),c=h});return{addFettis:function(f){return i=i.concat(f),m},canvas:a,promise:m,reset:function(){o&&x.cancel(o),c&&c()}}}function W(a,e){var n=!a,r=!!v(e||{},"resize"),l=!1,i=v(e,"disableForReducedMotion",Boolean),s=g&&!!v(e||{},"useWorker"),o=s?ee():null,c=n?ce:de,m=a&&o?!!a.__confetti_initialized:!1,f=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,h;function b(p,L,k){for(var C=v(p,"particleCount",ne),I=v(p,"angle",Number),R=v(p,"spread",Number),S=v(p,"startVelocity",Number),ye=v(p,"decay",Number),we=v(p,"gravity",Number),Me=v(p,"drift",Number),V=v(p,"colors",ie),xe=v(p,"ticks",Number),Y=v(p,"shapes"),ke=v(p,"scalar"),Ce=!!v(p,"flat"),Z=se(p),K=C,F=[],Pe=a.width*Z.x,Ee=a.height*Z.y;K--;)F.push(he({x:Pe,y:Ee,angle:I,spread:R,startVelocity:S,color:V[K%V.length],shape:Y[re(0,Y.length)],ticks:xe,decay:ye,gravity:we,drift:Me,scalar:ke,flat:Ce}));return h?h.addFettis(F):(h=fe(a,F,c,L,k),h.promise)}function w(p){var L=i||v(p,"disableForReducedMotion",Boolean),k=v(p,"zIndex",Number);if(L&&f)return E(function(S){S()});n&&h?a=h.canvas:n&&!a&&(a=pe(k),document.body.appendChild(a)),r&&!m&&c(a);var C={width:a.width,height:a.height};o&&!m&&o.init(a),m=!0,o&&(a.__confetti_initialized=!0);function I(){if(o){var S={getBoundingClientRect:function(){if(!n)return a.getBoundingClientRect()}};c(S),o.postMessage({resize:{width:S.width,height:S.height}});return}C.width=C.height=null}function R(){h=null,r&&(l=!1,t.removeEventListener("resize",I)),n&&a&&(document.body.removeChild(a),a=null,m=!1)}return r&&!l&&(l=!0,t.addEventListener("resize",I,!1)),o?o.fire(p,C,R):b(p,C,R)}return w.reset=function(){o&&o.reset(),h&&h.reset()},w}var D;function _(){return D||(D=W(null,{useWorker:!0,resize:!0})),D}function ge(a,e,n,r,l,i,s){var o=new Path2D(a),c=new Path2D;c.addPath(o,new DOMMatrix(e));var m=new Path2D;return m.addPath(c,new DOMMatrix([Math.cos(s)*l,Math.sin(s)*l,-Math.sin(s)*i,Math.cos(s)*i,n,r])),m}function ve(a){if(!P)throw new Error("path confetti are not supported in this browser");var e,n;typeof a=="string"?e=a:(e=a.path,n=a.matrix);var r=new Path2D(e),l=document.createElement("canvas"),i=l.getContext("2d");if(!n){for(var s=1e3,o=s,c=s,m=0,f=0,h,b,w=0;w<s;w+=2)for(var p=0;p<s;p+=2)i.isPointInPath(r,w,p,"nonzero")&&(o=Math.min(o,w),c=Math.min(c,p),m=Math.max(m,w),f=Math.max(f,p));h=m-o,b=f-c;var L=10,k=Math.min(L/h,L/b);n=[k,0,0,k,-Math.round(h/2+o)*k,-Math.round(b/2+c)*k]}return{type:"path",path:e,matrix:n}}function be(a){var e,n=1,r="#000000",l='"Twemoji Mozilla", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "system emoji", sans-serif';typeof a=="string"?e=a:(e=a.text,n="scalar"in a?a.scalar:n,l="fontFamily"in a?a.fontFamily:l,r="color"in a?a.color:r);var i=10*n,s=""+i+"px "+l,o=new OffscreenCanvas(i,i),c=o.getContext("2d");c.font=s;var m=c.measureText(e),f=Math.floor(m.width),h=Math.floor(m.fontBoundingBoxAscent+m.fontBoundingBoxDescent);o=new OffscreenCanvas(f,h),c=o.getContext("2d"),c.font=s,c.fillStyle=r,c.fillText(e,0,i);var b=1/n;return{type:"bitmap",bitmap:o.transferToImageBitmap(),matrix:[b,0,0,b,-f*b/2,-h*b/2]}}d.exports=function(){return _().apply(this,arguments)},d.exports.reset=function(){_().reset()},d.exports.create=W,d.exports.shapeFromPath=ve,d.exports.shapeFromText=be})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),N,!1);const Ne=N.exports;N.exports.create;class B extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    </div>`}}customElements.define("diplo-head",B);const Oe=6,U=[],Ae="cubic-bezier(0.25, -0.75, 0.50, 1.75)",ze=5*60*1e3,De=-5,Fe=.25,J=new URL(location.href).searchParams.get("skin"),Ue=new URL(location.href).searchParams.get("decrease")==="1",$e=new URL(location.href).searchParams.get("ghost")==="1",Q=new URL(location.href).searchParams.get("sound")==="1";class q extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.neckSize=0,this.activity=0}static get styles(){return`
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
    `}setOpacity(t){t>=0&&t<=1&&this.style.setProperty("--opacity",t)}incNeck(t){this.style.setProperty("--neck-timing",Ae),this.neckSize+=t,this.updateNeck(),this.activity++,this.setOpacity(1),this.playSound()}playSound(){if(!Q)return;if(~~(Math.random()*Oe)===0){const d=~~(Math.random()*U.length),y=U[d];y.currentTime=0,y.play()}}setHead(t){this.style.setProperty("--image-head",`url("images/skins/${t}.png")`)}updateNeck(){this.style.setProperty("--neck-size",`${this.neckSize}px`),$("action")==="confetti"&&Ne({particleCount:50,spread:42,origin:{x:.02,y:1}})}connectedCallback(){this.render(),this.initSound(),this.manageSkins(),setInterval(()=>this.manageEvents(),ze)}initSound(){if(Q)for(let t=1;t<5;t++)U.push(new Audio(`sounds/chicken-${t}.mp3`))}manageSkins(){J&&this.setHead(J)}manageEvents(){this.activity>0||(Ue&&this.neckSize>0&&this.incNeck(De),$e&&this.setOpacity(Fe)),this.activity=0}render(){this.shadowRoot.innerHTML=`
    <style>${q.styles}</style>
    <div class="container">
      <diplo-head></diplo-head>
      <div class="body"></div>
    </div>`}}customElements.define("diplo-pollo",q);const O=[{value:"original",name:"Genuine DiploPollo™"},{value:"sunglasses",name:"Beach DiploPollo™"},{value:"king",name:"King DiploPollo™"},{value:"niv3k",name:"DiploDuck™"},{value:"halloween",name:"DecapiPollo™"},{value:"nerd",name:"EmPollon™"},{value:"radioactive",name:"ChernoPollo™"},{value:"plucked",name:"CalvoPollo™"},{value:"magician",name:"HarryPollo™"},{value:"pirate",name:"JackSpollow™"},{value:"mustache",name:"GentlePollo™"},{value:"moto",name:"HarleyPollo™"},{value:"pikapollo",name:"PikaPollo™"},{value:"pollocop",name:"PolloCop™"},{value:"santapollo",name:"SantaPollo™"},{value:"pollobros",name:"PolloBros™"},{value:"manzpollo",name:"ManzPollo™"},{value:"ironpollo",name:"IronPollo™"},{value:"batpollo",name:"BatPollo™"},{value:"pollominion",name:"PolloMinion™"}];class H extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}get value(){return new URL(this.shadowRoot.querySelector("img.selected").src).pathname.replace("/images/skins/","").replace(".png","")}connectedCallback(){this.render(),this.images=[...this.shadowRoot.querySelectorAll("img")],this.images[0].classList.add("selected"),this.images.forEach((d,y)=>d.addEventListener("click",()=>this.selectSkin(y)))}selectSkin(t){this.shadowRoot.querySelector("img.selected").classList.remove("selected"),this.images[t].classList.add("selected");const d=new CustomEvent("selectskin",{composed:!0,bubbles:!0,detail:O[t].value});this.dispatchEvent(d)}render(){this.shadowRoot.innerHTML=`
    <style>${H.styles}</style>
    <div class="container">
      ${O.map(t=>`<img src="images/skins/${t.value}.png" alt="${t.name}" title="${t.name}">`).join("")}
    </div>`}}customElements.define("select-skin",H);const Be=`:host{position:relative}.container{--offset: 8px;width:475px;min-height:600px;background:#888;background-image:url(images/cardboard-flat.png);box-shadow:calc(var(--offset) * 1) calc(var(--offset) * 1) 0 #000,calc(var(--offset) * 2) calc(var(--offset) * 2) 0 #000b,calc(var(--offset) * 3) calc(var(--offset) * 3) 0 #0008,calc(var(--offset) * 4) calc(var(--offset) * 4) 0 #0004;padding:20px;position:relative;z-index:1}h1{--color: #850b15;color:#fff;font-family:Larceny,monospace;font-size:5.25rem;margin-bottom:1.5rem;text-align:center;filter:drop-shadow(-3px 0 var(--color)) drop-shadow(0 3px var(--color))}.logo{text-align:center}.logo img{display:block;width:256px;margin:2rem auto;margin-top:0}.logo .version{background:darkred;padding:0 12px;color:#fff;font-family:EnterCommand,monospace;font-size:27px;display:inline-block;transform:translate(95px,-35px) rotate(-7deg)}.data{display:flex;flex-direction:column;gap:.25rem}.data label{display:grid;grid-template-columns:.7fr 32px 1fr;align-items:center;gap:1rem}.data :is(p,small){font-family:Jost,EnterCommand,monospace;text-shadow:0 0 1px #000;margin:0;font-size:1.25rem;color:#111}.data small{font-size:1rem;margin-top:.5rem;text-align:center;color:#444}.data input[type=text],.data select{margin-top:5px;padding:4px;border:0;background:#000;color:#fff;z-index:10;font-family:EnterCommand,sans-serif;font-size:2rem;min-width:175px;text-align:center}.data input[type=text]:focus,.data select:focus{color:gold}.data input:invalid{background:#440404}.data button{border:0;border-radius:2px;padding:6px 16px;margin-top:6px;font-family:EnterCommand,sans-serif;font-size:2rem;color:#eee;background:linear-gradient(#0863a5,#1283d1);box-shadow:0 7px #0b5a92,0 8px 3px #0000004d;z-index:15;transition:all .15s;cursor:pointer}.data button:active{color:#888;background:linear-gradient(to bottom,#0006,#0008),linear-gradient(#0863a5,#1283d1);transform:translateY(5px);box-shadow:0 2px #0b5a92,0 3px 3px #0000004d}.data textarea{background:#333;border:2px solid #000;color:#fff;margin-top:1rem;min-height:100px;font-family:monospace;font-size:1.25rem;padding:.5rem;text-align:center;resize:none}select[disabled]{background:#555;color:#222;cursor:not-allowed}select[name=skin] option:checked{background:#8da3c2}select[name=skin]::-webkit-scrollbar{background:#222}select[name=skin]::-webkit-scrollbar-thumb{background:#0967ab}info-popup{--size: 25px;background:#0967ab;color:#fff;font-size:1rem;display:inline-grid;width:var(--size);height:var(--size);place-items:center;border-radius:50%;transform:translate(.25rem,-.05rem)}.preview{display:flex;flex-direction:column;position:absolute;top:50%;right:0;transform:translate(30px,-125px) rotate(45deg) scale(4)}.preview .head{width:32px;height:21px;background:var(--image-head, url(images/skins/original.png));transform:translateY(1px)}.preview .neck{width:32px;height:25px;background:url(images/neck.png)}
`,qe="0.4.0";class j extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return Be}preload(){O.forEach(t=>{const d=document.createElement("link");d.rel="preload",d.href=`images/skins/${t.value}.png`,d.as="image",document.head.append(d)})}connectedCallback(){this.preload(),this.render();const[t,...d]=this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])");this.shadowRoot.querySelector("select-skin").addEventListener("selectskin",({detail:u})=>this.changeHead(u)),t.addEventListener("input",()=>this.updateURL()),d.forEach(u=>u.addEventListener("change",()=>this.updateURL())),this.shadowRoot.querySelector("button").addEventListener("click",()=>this.copyURL())}async copyURL(){const t=this.shadowRoot.querySelector("input[name=channel]");if(!t.value)t.reportValidity();else{localStorage.setItem("channel",t.value);const d=this.shadowRoot.querySelector("textarea").value;await navigator.clipboard.writeText(d)}}changeHead(t){this.style.setProperty("--image-head",`url("images/skins/${t}.png")`),this.updateURL()}getURL(){const t=new URL(location.href),d=`${t.origin}${t.pathname}`,[y,...u]=[...this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])")],g=y.value,P=this.shadowRoot.querySelector("select-skin"),T=u.filter(x=>x[x.selectedIndex].value!=="none").map(x=>`${x.name}=${x[x.selectedIndex].value}`);T.push(`skin=${P.value}`);const E=T.join("&");return`${d}?channel=${g.toLowerCase()}&${E}`}updateURL(){const t=this.shadowRoot.querySelector("textarea");t.value=this.getURL()}render(){const t=localStorage.getItem("channel")??"";this.shadowRoot.innerHTML=`
    <style>${j.styles}</style>
    <div class="logo">
      <img src="images/logo.png" alt="Logo DiploPollo">
      <span class="version">v${qe}</span>
    </div>
    <div class="container">

      <div class="data">

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
          <p>Skin</p>
          <info-popup title="Elige la skin del pollo que más te guste">ℹ</info-popup>
          <select-skin></select-skin>
          <!-- select name="skin">
            ${O.map(d=>`<option value="${d.value}">${d.name}</option>`).join("")}
          </select-->
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
    `}}customElements.define("screen-menu",j);const A=document.querySelector(".container"),{searchParams:He}=new URL(location.href),X=!!He.get("channel");if(X){const M=document.createElement("diplo-pollo");A.classList.add("diplopollo-mode"),M.classList.add("animated"),A.append(M),new Te}if(!X){A.classList.add("menu-mode");const M=document.createElement("screen-menu");A.append(M)}});export default je();
