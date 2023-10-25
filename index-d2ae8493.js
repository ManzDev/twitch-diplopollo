(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${c.styles}</style>
    <div class="head-group">
      <div class="head"></div>
      <div class="neck"></div>
    </div>`}}customElements.define("diplo-head",c);const u="cubic-bezier(0.25, -0.75, 0.50, 1.75)";class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.neckSize=0}static get styles(){return`
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
    `}incNeck(e){this.style.setProperty("--neck-timing",u),this.neckSize+=e,this.updateNeck()}setHead(e){this.style.setProperty("--image-head",`url("images/skins/${e}.png")`)}updateNeck(){this.style.setProperty("--neck-size",`${this.neckSize}px`)}decNeck(e){this.style.setProperty("--neck-timing",u),this.neckSize=Math.max(0,this.neckSize-e),this.updateNeck()}connectedCallback(){this.render();const e=new URL(location.href).searchParams.get("skin");e&&this.setHead(e)}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="container">
      <diplo-head></diplo-head>
      <div class="body"></div>
    </div>`}}customElements.define("diplo-pollo",d);const f=`:host{position:relative}.container{--offset: 8px;width:475px;height:600px;background:#888;background-image:url(images/cardboard-flat.png);box-shadow:calc(var(--offset) * 1) calc(var(--offset) * 1) 0 #000,calc(var(--offset) * 2) calc(var(--offset) * 2) 0 #000b,calc(var(--offset) * 3) calc(var(--offset) * 3) 0 #0008,calc(var(--offset) * 4) calc(var(--offset) * 4) 0 #0004;padding:20px;position:relative;z-index:1}h1{--color: #850b15;color:#fff;font-family:Larceny,monospace;font-size:5.25rem;margin-bottom:1.5rem;text-align:center;filter:drop-shadow(-3px 0 var(--color)) drop-shadow(0 3px var(--color))}img{display:block;width:256px;margin:2rem auto;margin-top:0}.data{display:flex;flex-direction:column;gap:.25rem}.data label{display:grid;grid-template-columns:.7fr 32px 1fr;align-items:center;gap:1rem}.data :is(p,small){font-family:Jost,EnterCommand,monospace;text-shadow:0 0 1px #000;margin:0;font-size:1.25rem;color:#111}.data small{font-size:1rem;margin-top:.5rem;text-align:center;color:#444}.data input[type=text],.data select{margin-top:5px;padding:4px;border:0;background:#000;color:#fff;z-index:10;font-family:EnterCommand,sans-serif;font-size:2rem;min-width:175px;text-align:center}.data input[type=text]:focus,.data select:focus{color:gold}.data input:invalid{background:#440404}.data button{border:0;border-radius:2px;padding:6px 16px;margin-top:6px;font-family:EnterCommand,sans-serif;font-size:2rem;color:#eee;background:linear-gradient(#0863a5,#1283d1);box-shadow:0 7px #0b5a92,0 8px 3px #0000004d;z-index:15;transition:all .15s;cursor:pointer}.data button:active{color:#888;background:linear-gradient(to bottom,#0006,#0008),linear-gradient(#0863a5,#1283d1);transform:translateY(5px);box-shadow:0 2px #0b5a92,0 3px 3px #0000004d}.data textarea{background:#333;border:2px solid #000;color:#fff;margin-top:1rem;min-height:100px;font-family:monospace;font-size:1.25rem;padding:.5rem;text-align:center;resize:none}select[disabled]{background:#555;color:#222;cursor:not-allowed}info-popup{--size: 25px;background:#0967ab;color:#fff;font-size:1rem;display:inline-grid;width:var(--size);height:var(--size);place-items:center;border-radius:50%;transform:translate(.25rem,-.05rem)}.preview{display:flex;flex-direction:column;position:absolute;top:50%;right:0;transform:translate(30px,-125px) rotate(45deg) scale(4)}.preview .head{width:32px;height:21px;background:var(--image-head, url(images/skins/original.png));transform:translateY(1px)}.preview .neck{width:32px;height:25px;background:url(images/neck.png)}
`,m=[{value:"original",name:"Genuine DiploPollo™"},{value:"sunglasses",name:"Beach DiploPollo™"},{value:"king",name:"King DiploPollo™"},{value:"niv3k",name:"DiploDuck™"},{value:"halloween",name:"DecapiPollo™"},{value:"nerd",name:"EmPollon™"},{value:"radioactive",name:"ChernoPollo™"},{value:"plucked",name:"CalvoPollo™"},{value:"magician",name:"HarryPollo™"}];class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return f}preload(){m.forEach(e=>{const o=document.createElement("link");o.rel="preload",o.href=`images/skins/${e.value}.png`,o.as="image",document.head.append(o)})}connectedCallback(){this.preload(),this.render();const[e,...o]=this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])"),n=this.shadowRoot.querySelector("select[name=skin]");n.addEventListener("input",()=>this.changeHead(n)),e.addEventListener("input",()=>this.updateURL()),o.forEach(t=>t.addEventListener("change",()=>this.updateURL())),this.shadowRoot.querySelector("button").addEventListener("click",()=>this.copyURL())}async copyURL(){const e=this.shadowRoot.querySelector("input[name=channel]");if(!e.value)e.reportValidity();else{const o=this.shadowRoot.querySelector("textarea").value;await navigator.clipboard.writeText(o)}}changeHead(e){const o=e[e.selectedIndex].value;this.style.setProperty("--image-head",`url("images/skins/${o}.png")`)}getURL(){const e=new URL(location.href),o=`${e.origin}${e.pathname}`,[n,...t]=[...this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])")],a=n.value,s=t.map(i=>`${i.name}=${i[i.selectedIndex].value}`).join("&");return`${o}?channel=${a.toLowerCase()}&${s}`}updateURL(){const e=this.shadowRoot.querySelector("textarea");e.value=this.getURL()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <img src="images/logo.png" alt="Logo DiploPollo">
    <div class="container">

      <div class="data">

        <label>
          <p>Canal de Twitch</p>
          <info-popup title="Canal de Twitch al que queremos conectarnos">ℹ</info-popup>
          <input type="text" name="channel" placeholder="ManzDev"
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
            ${m.map(e=>`<option value="${e.value}">${e.name}</option>`)}
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
          <p>Interacción</p>
          <info-popup title="Cuando hay una interacción con el pollo, ocurre algo adicional">ℹ</info-popup>
          <select name="action" disabled>
            <option value="none" selected>Ninguna</option>
            <option value="confetti">Party</option>
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
    `}}customElements.define("screen-menu",p);class g{constructor(){const{searchParams:e}=new URL(location.href),o=e.get("channel")??"ManzDev",n=e.get("mode")??"bit";this.diploPollo=document.querySelector("diplo-pollo"),this.connect(o),n==="bit"&&this.enableBitMode(),n==="command"&&this.enableCommandMode()}connect(e){this.client=new tmi.Client({channels:[e]}),this.client.connect()}enableBitMode(){this.client.on("cheer",(e,o,n)=>{const t=o.bits??1,a=Math.floor(t/2);this.diploPollo.incNeck(a)})}enableCommandMode(){this.client.on("message",(e,o,n,t)=>{if(!(n[0]==="!"))return;if(n.split(" ").at(0).toLowerCase()==="!pollo"){const i=Number.parseInt(n.split(" ").at(1)??1);if(!(!isNaN(i)&&i>-300&&i<300))return;console.log(i),i>0?this.diploPollo.incNeck(i):i<0&&this.diploPollo.decNeck(Math.abs(i))}})}}const r=document.querySelector(".container"),{searchParams:v}=new URL(location.href),h=!!v.get("channel");if(h){const l=document.createElement("diplo-pollo");r.classList.add("diplopollo-mode"),l.classList.add("animated"),r.append(l),new g}if(!h){r.classList.add("menu-mode");const l=document.createElement("screen-menu");r.append(l)}
