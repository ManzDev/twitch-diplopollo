var ke=(x,t)=>()=>(t||x((t={exports:{}}).exports,t),t.exports);var Te=ke((Ne,T)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))y(p);new MutationObserver(p=>{for(const b of p)if(b.type==="childList")for(const E of b.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&y(E)}).observe(document,{childList:!0,subtree:!0});function u(p){const b={};return p.integrity&&(b.integrity=p.integrity),p.referrerPolicy&&(b.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?b.credentials="include":p.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function y(p){if(p.ep)return;p.ep=!0;const b=u(p);fetch(p.href,b)}})();var T={};(function x(t,u,y,p){var b=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),E=typeof Path2D=="function"&&typeof DOMMatrix=="function";function M(){}function R(a){var e=u.exports.Promise,o=e!==void 0?e:t.Promise;return typeof o=="function"?new o(a):(a(M,M),null)}var z=function(){var a=Math.floor(16.666666666666668),e,o,r={},l=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(i){var s=Math.random();return r[s]=requestAnimationFrame(function n(c){l===c||l+a-1<c?(l=c,delete r[s],i()):r[s]=requestAnimationFrame(n)}),s},o=function(i){r[i]&&cancelAnimationFrame(r[i])}):(e=function(i){return setTimeout(i,a)},o=function(i){return clearTimeout(i)}),{frame:e,cancel:o}}(),K=function(){var a,e,o={};function r(l){function i(s,n){l.postMessage({options:s||{},callback:n})}l.init=function(n){var c=n.transferControlToOffscreen();l.postMessage({canvas:c},[c])},l.fire=function(n,c,m){if(e)return i(n,null),e;var f=Math.random().toString(36).slice(2);return e=R(function(h){function g(w){w.data.callback===f&&(delete o[f],l.removeEventListener("message",g),e=null,m(),h())}l.addEventListener("message",g),i(n,f),o[f]=g.bind(null,{data:{callback:f}})}),e},l.reset=function(){l.postMessage({reset:!0});for(var n in o)o[n](),delete o[n]}}return function(){if(a)return a;if(!y&&b){var l=["var CONFETTI, SIZE = {}, module = {};","("+x.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{a=new Worker(URL.createObjectURL(new Blob([l])))}catch(i){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",i),null}r(a)}return a}}(),J={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function Q(a,e){return e?e(a):a}function X(a){return a!=null}function v(a,e,o){return Q(a&&X(a[e])?a[e]:J[e],o)}function ee(a){return a<0?0:Math.floor(a)}function ae(a,e){return Math.floor(Math.random()*(e-a))+a}function F(a){return parseInt(a,16)}function te(a){return a.map(ne)}function ne(a){var e=String(a).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:F(e.substring(0,2)),g:F(e.substring(2,4)),b:F(e.substring(4,6))}}function oe(a){var e=v(a,"origin",Object);return e.x=v(e,"x",Number),e.y=v(e,"y",Number),e}function re(a){a.width=document.documentElement.clientWidth,a.height=document.documentElement.clientHeight}function ie(a){var e=a.getBoundingClientRect();a.width=e.width,a.height=e.height}function le(a){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=a,e}function se(a,e,o,r,l,i,s,n,c){a.save(),a.translate(e,o),a.rotate(i),a.scale(r,l),a.arc(0,0,1,s,n,c),a.restore()}function ce(a){var e=a.angle*(Math.PI/180),o=a.spread*(Math.PI/180);return{x:a.x,y:a.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:a.startVelocity*.5+Math.random()*a.startVelocity,angle2D:-e+(.5*o-Math.random()*o),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:a.color,shape:a.shape,tick:0,totalTicks:a.ticks,decay:a.decay,drift:a.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:a.gravity*3,ovalScalar:.6,scalar:a.scalar,flat:a.flat}}function de(a,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var o=e.tick++/e.totalTicks,r=e.x+e.random*e.tiltCos,l=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,s=e.wobbleY+e.random*e.tiltSin;if(a.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-o)+")",a.beginPath(),E&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))a.fill(pe(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(i-r)*.1,Math.abs(s-l)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var n=Math.PI/10*e.wobble,c=Math.abs(i-r)*.1,m=Math.abs(s-l)*.1,f=e.shape.bitmap.width*e.scalar,h=e.shape.bitmap.height*e.scalar,g=new DOMMatrix([Math.cos(n)*c,Math.sin(n)*c,-Math.sin(n)*m,Math.cos(n)*m,e.x,e.y]);g.multiplySelf(new DOMMatrix(e.shape.matrix));var w=a.createPattern(e.shape.bitmap,"no-repeat");w.setTransform(g),a.globalAlpha=1-o,a.fillStyle=w,a.fillRect(e.x-f/2,e.y-h/2,f,h),a.globalAlpha=1}else if(e.shape==="circle")a.ellipse?a.ellipse(e.x,e.y,Math.abs(i-r)*e.ovalScalar,Math.abs(s-l)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):se(a,e.x,e.y,Math.abs(i-r)*e.ovalScalar,Math.abs(s-l)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var d=Math.PI/2*3,S=4*e.scalar,k=8*e.scalar,C=e.x,L=e.y,I=5,P=Math.PI/I;I--;)C=e.x+Math.cos(d)*k,L=e.y+Math.sin(d)*k,a.lineTo(C,L),d+=P,C=e.x+Math.cos(d)*S,L=e.y+Math.sin(d)*S,a.lineTo(C,L),d+=P;else a.moveTo(Math.floor(e.x),Math.floor(e.y)),a.lineTo(Math.floor(e.wobbleX),Math.floor(l)),a.lineTo(Math.floor(i),Math.floor(s)),a.lineTo(Math.floor(r),Math.floor(e.wobbleY));return a.closePath(),a.fill(),e.tick<e.totalTicks}function ue(a,e,o,r,l){var i=e.slice(),s=a.getContext("2d"),n,c,m=R(function(f){function h(){n=c=null,s.clearRect(0,0,r.width,r.height),l(),f()}function g(){y&&!(r.width===p.width&&r.height===p.height)&&(r.width=a.width=p.width,r.height=a.height=p.height),!r.width&&!r.height&&(o(a),r.width=a.width,r.height=a.height),s.clearRect(0,0,r.width,r.height),i=i.filter(function(w){return de(s,w)}),i.length?n=z.frame(g):h()}n=z.frame(g),c=h});return{addFettis:function(f){return i=i.concat(f),m},canvas:a,promise:m,reset:function(){n&&z.cancel(n),c&&c()}}}function q(a,e){var o=!a,r=!!v(e||{},"resize"),l=!1,i=v(e,"disableForReducedMotion",Boolean),s=b&&!!v(e||{},"useWorker"),n=s?K():null,c=o?re:ie,m=a&&n?!!a.__confetti_initialized:!1,f=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,h;function g(d,S,k){for(var C=v(d,"particleCount",ee),L=v(d,"angle",Number),I=v(d,"spread",Number),P=v(d,"startVelocity",Number),fe=v(d,"decay",Number),ve=v(d,"gravity",Number),ge=v(d,"drift",Number),j=v(d,"colors",te),be=v(d,"ticks",Number),W=v(d,"shapes"),ye=v(d,"scalar"),we=!!v(d,"flat"),V=oe(d),Z=C,O=[],Me=a.width*V.x,xe=a.height*V.y;Z--;)O.push(ce({x:Me,y:xe,angle:L,spread:I,startVelocity:P,color:j[Z%j.length],shape:W[ae(0,W.length)],ticks:be,decay:fe,gravity:ve,drift:ge,scalar:ye,flat:we}));return h?h.addFettis(O):(h=ue(a,O,c,S,k),h.promise)}function w(d){var S=i||v(d,"disableForReducedMotion",Boolean),k=v(d,"zIndex",Number);if(S&&f)return R(function(P){P()});o&&h?a=h.canvas:o&&!a&&(a=le(k),document.body.appendChild(a)),r&&!m&&c(a);var C={width:a.width,height:a.height};n&&!m&&n.init(a),m=!0,n&&(a.__confetti_initialized=!0);function L(){if(n){var P={getBoundingClientRect:function(){if(!o)return a.getBoundingClientRect()}};c(P),n.postMessage({resize:{width:P.width,height:P.height}});return}C.width=C.height=null}function I(){h=null,r&&(l=!1,t.removeEventListener("resize",L)),o&&a&&(document.body.removeChild(a),a=null,m=!1)}return r&&!l&&(l=!0,t.addEventListener("resize",L,!1)),n?n.fire(d,C,I):g(d,C,I)}return w.reset=function(){n&&n.reset(),h&&h.reset()},w}var A;function H(){return A||(A=q(null,{useWorker:!0,resize:!0})),A}function pe(a,e,o,r,l,i,s){var n=new Path2D(a),c=new Path2D;c.addPath(n,new DOMMatrix(e));var m=new Path2D;return m.addPath(c,new DOMMatrix([Math.cos(s)*l,Math.sin(s)*l,-Math.sin(s)*i,Math.cos(s)*i,o,r])),m}function he(a){if(!E)throw new Error("path confetti are not supported in this browser");var e,o;typeof a=="string"?e=a:(e=a.path,o=a.matrix);var r=new Path2D(e),l=document.createElement("canvas"),i=l.getContext("2d");if(!o){for(var s=1e3,n=s,c=s,m=0,f=0,h,g,w=0;w<s;w+=2)for(var d=0;d<s;d+=2)i.isPointInPath(r,w,d,"nonzero")&&(n=Math.min(n,w),c=Math.min(c,d),m=Math.max(m,w),f=Math.max(f,d));h=m-n,g=f-c;var S=10,k=Math.min(S/h,S/g);o=[k,0,0,k,-Math.round(h/2+n)*k,-Math.round(g/2+c)*k]}return{type:"path",path:e,matrix:o}}function me(a){var e,o=1,r="#000000",l='"Twemoji Mozilla", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "system emoji", sans-serif';typeof a=="string"?e=a:(e=a.text,o="scalar"in a?a.scalar:o,l="fontFamily"in a?a.fontFamily:l,r="color"in a?a.color:r);var i=10*o,s=""+i+"px "+l,n=new OffscreenCanvas(i,i),c=n.getContext("2d");c.font=s;var m=c.measureText(e),f=Math.floor(m.width),h=Math.floor(m.fontBoundingBoxAscent+m.fontBoundingBoxDescent);n=new OffscreenCanvas(f,h),c=n.getContext("2d"),c.font=s,c.fillStyle=r,c.fillText(e,0,i);var g=1/o;return{type:"bitmap",bitmap:n.transferToImageBitmap(),matrix:[g,0,0,g,-f*g/2,-h*g/2]}}u.exports=function(){return H().apply(this,arguments)},u.exports.reset=function(){H().reset()},u.exports.create=q,u.exports.shapeFromPath=he,u.exports.shapeFromText=me})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),T,!1);const Ce=T.exports;T.exports.create;const{searchParams:Pe}=new URL(location.href),D=x=>Pe.get(x);class U extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${U.styles}</style>
    <div class="head-group">
      <div class="head"></div>
      <div class="neck"></div>
    </div>`}}customElements.define("diplo-head",U);const Ee="cubic-bezier(0.25, -0.75, 0.50, 1.75)";class B extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.neckSize=0}static get styles(){return`
      :host {
        --scale: scale(3);
        --image-head: url("images/skins/original.png");
      }

      .container {
        width: 32px;
        transform: var(--scale);
        transform-origin: 0 100%;
        image-rendering: pixelated;
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
    `}incNeck(t){this.style.setProperty("--neck-timing",Ee),this.neckSize+=t,this.updateNeck()}setHead(t){this.style.setProperty("--image-head",`url("images/skins/${t}.png")`)}updateNeck(){this.style.setProperty("--neck-size",`${this.neckSize}px`),D("action")==="confetti"&&Ce({particleCount:50,spread:42,origin:{x:.02,y:1}})}connectedCallback(){this.render();const t=new URL(location.href).searchParams.get("skin");t&&this.setHead(t)}render(){this.shadowRoot.innerHTML=`
    <style>${B.styles}</style>
    <div class="container">
      <diplo-head></diplo-head>
      <div class="body"></div>
    </div>`}}customElements.define("diplo-pollo",B);const Se=`:host{position:relative}.container{--offset: 8px;width:475px;height:600px;background:#888;background-image:url(images/cardboard-flat.png);box-shadow:calc(var(--offset) * 1) calc(var(--offset) * 1) 0 #000,calc(var(--offset) * 2) calc(var(--offset) * 2) 0 #000b,calc(var(--offset) * 3) calc(var(--offset) * 3) 0 #0008,calc(var(--offset) * 4) calc(var(--offset) * 4) 0 #0004;padding:20px;position:relative;z-index:1}h1{--color: #850b15;color:#fff;font-family:Larceny,monospace;font-size:5.25rem;margin-bottom:1.5rem;text-align:center;filter:drop-shadow(-3px 0 var(--color)) drop-shadow(0 3px var(--color))}img{display:block;width:256px;margin:2rem auto;margin-top:0}.data{display:flex;flex-direction:column;gap:.25rem}.data label{display:grid;grid-template-columns:.7fr 32px 1fr;align-items:center;gap:1rem}.data :is(p,small){font-family:Jost,EnterCommand,monospace;text-shadow:0 0 1px #000;margin:0;font-size:1.25rem;color:#111}.data small{font-size:1rem;margin-top:.5rem;text-align:center;color:#444}.data input[type=text],.data select{margin-top:5px;padding:4px;border:0;background:#000;color:#fff;z-index:10;font-family:EnterCommand,sans-serif;font-size:2rem;min-width:175px;text-align:center}.data input[type=text]:focus,.data select:focus{color:gold}.data input:invalid{background:#440404}.data button{border:0;border-radius:2px;padding:6px 16px;margin-top:6px;font-family:EnterCommand,sans-serif;font-size:2rem;color:#eee;background:linear-gradient(#0863a5,#1283d1);box-shadow:0 7px #0b5a92,0 8px 3px #0000004d;z-index:15;transition:all .15s;cursor:pointer}.data button:active{color:#888;background:linear-gradient(to bottom,#0006,#0008),linear-gradient(#0863a5,#1283d1);transform:translateY(5px);box-shadow:0 2px #0b5a92,0 3px 3px #0000004d}.data textarea{background:#333;border:2px solid #000;color:#fff;margin-top:1rem;min-height:100px;font-family:monospace;font-size:1.25rem;padding:.5rem;text-align:center;resize:none}select[disabled]{background:#555;color:#222;cursor:not-allowed}info-popup{--size: 25px;background:#0967ab;color:#fff;font-size:1rem;display:inline-grid;width:var(--size);height:var(--size);place-items:center;border-radius:50%;transform:translate(.25rem,-.05rem)}.preview{display:flex;flex-direction:column;position:absolute;top:50%;right:0;transform:translate(30px,-125px) rotate(45deg) scale(4)}.preview .head{width:32px;height:21px;background:var(--image-head, url(images/skins/original.png));transform:translateY(1px)}.preview .neck{width:32px;height:25px;background:url(images/neck.png)}
`,Y=[{value:"original",name:"Genuine DiploPollo™"},{value:"sunglasses",name:"Beach DiploPollo™"},{value:"king",name:"King DiploPollo™"},{value:"niv3k",name:"DiploDuck™"},{value:"halloween",name:"DecapiPollo™"},{value:"nerd",name:"EmPollon™"},{value:"radioactive",name:"ChernoPollo™"},{value:"plucked",name:"CalvoPollo™"},{value:"magician",name:"HarryPollo™"},{value:"pirate",name:"JackSpollow™"},{value:"mustache",name:"GentlePollo™"},{value:"moto",name:"HarleyPollo™"}];class $ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return Se}preload(){Y.forEach(t=>{const u=document.createElement("link");u.rel="preload",u.href=`images/skins/${t.value}.png`,u.as="image",document.head.append(u)})}connectedCallback(){this.preload(),this.render();const[t,...u]=this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])"),y=this.shadowRoot.querySelector("select[name=skin]");y.addEventListener("input",()=>this.changeHead(y)),t.addEventListener("input",()=>this.updateURL()),u.forEach(p=>p.addEventListener("change",()=>this.updateURL())),this.shadowRoot.querySelector("button").addEventListener("click",()=>this.copyURL())}async copyURL(){const t=this.shadowRoot.querySelector("input[name=channel]");if(!t.value)t.reportValidity();else{localStorage.setItem("channel",t.value);const u=this.shadowRoot.querySelector("textarea").value;await navigator.clipboard.writeText(u)}}changeHead(t){const u=t[t.selectedIndex].value;this.style.setProperty("--image-head",`url("images/skins/${u}.png")`)}getURL(){const t=new URL(location.href),u=`${t.origin}${t.pathname}`,[y,...p]=[...this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])")],b=y.value,E=p.filter(M=>M[M.selectedIndex].value!=="none").map(M=>`${M.name}=${M[M.selectedIndex].value}`).join("&");return`${u}?channel=${b.toLowerCase()}&${E}`}updateURL(){const t=this.shadowRoot.querySelector("textarea");t.value=this.getURL()}render(){const t=localStorage.getItem("channel")??"";this.shadowRoot.innerHTML=`
    <style>${$.styles}</style>
    <img src="images/logo.png" alt="Logo DiploPollo">
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
          <select name="skin">
            ${Y.map(u=>`<option value="${u.value}">${u.name}</option>`)}
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
          <select name="decrease" disabled>
            <option value="1">Activado</option>
            <option value="0" selected>Desactivado</option>
          </select>
        </label>

        <label>
          <p>Idle ghost</p>
          <info-popup title="Cuando no hay interacción con el pollo durante un tiempo, el pollo se vuelve semitransparente.">ℹ</info-popup>
          <select name="ghost" disabled>
            <option value="1">Activado</option>
            <option value="0" selected>Desactivado</option>
          </select>
        </label>

        <label>
          <p>Sonido</p>
          <info-popup title="Activa los sonidos. Desmarcado, mutea los sonidos.">ℹ</info-popup>
          <select name="sound" disabled>
            <option value="1">Activado</option>
            <option value="0" selected>Desactivado</option>
          </select>
        </label>

        <label>
          <p>DiploPollo 3000™</p>
          <info-popup title="Funcionalidad especial">ℹ</info-popup>
          <select name="multineck" disabled>
            <option value="1">Activado</option>
            <option value="0" selected>Desactivado</option>
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
    `}}customElements.define("screen-menu",$);const _=300;class Le{constructor(){const t=D("channel")??"ManzDev",u=D("mode")??"bit";this.diploPollo=document.querySelector("diplo-pollo"),this.connect(t),u==="bit"&&this.enableBitMode(),u==="command"&&this.enableCommandMode()}connect(t){this.client=new tmi.Client({channels:[t]}),this.client.connect()}enableBitMode(){this.client.on("cheer",(t,u,y)=>{const p=u.bits??1,b=Math.floor(p/2);this.diploPollo.incNeck(b)})}enableCommandMode(){this.client.on("message",(t,u,y,p)=>{if(!(y[0]==="!"))return;if(y.split(" ").at(0).toLowerCase()==="!pollo"){const M=Number.parseInt(y.split(" ").at(1)??1);if(!(!isNaN(M)&&M>-_&&M<_))return;this.diploPollo.incNeck(M)}})}}const N=document.querySelector(".container"),{searchParams:Ie}=new URL(location.href),G=!!Ie.get("channel");if(G){const x=document.createElement("diplo-pollo");N.classList.add("diplopollo-mode"),x.classList.add("animated"),N.append(x),new Le}if(!G){N.classList.add("menu-mode");const x=document.createElement("screen-menu");N.append(x)}});export default Te();
