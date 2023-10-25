(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}})();class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    </div>`}}customElements.define("diplo-pollo",d);const h=`.container{--offset: 8px;width:475px;height:600px;background:#888;background-image:url(images/cardboard-flat.png);box-shadow:calc(var(--offset) * 1) calc(var(--offset) * 1) 0 #000,calc(var(--offset) * 2) calc(var(--offset) * 2) 0 #000b,calc(var(--offset) * 3) calc(var(--offset) * 3) 0 #0008,calc(var(--offset) * 4) calc(var(--offset) * 4) 0 #0004;padding:20px}h1{--color: #850b15;color:#fff;font-family:Larceny,monospace;font-size:5.25rem;margin-bottom:1.5rem;text-align:center;filter:drop-shadow(-3px 0 var(--color)) drop-shadow(0 3px var(--color))}img{display:block;width:256px;margin:2rem auto;margin-top:0}.data{display:flex;flex-direction:column;gap:.25rem}.data label{display:grid;grid-template-columns:.7fr 32px 1fr;align-items:center;gap:1rem}.data :is(p,small){font-family:Jost,EnterCommand,monospace;text-shadow:0 0 1px #000;margin:0;font-size:1.25rem;color:#111}.data small{font-size:1rem;margin-top:.5rem;text-align:center;color:#444}.data input[type=text],.data select{margin-top:5px;padding:4px;border:0;background:#000;color:#fff;z-index:10;font-family:EnterCommand,sans-serif;font-size:2rem;min-width:175px;text-align:center}.data input[type=text]:focus,.data select:focus{color:gold}.data input:invalid{background:#440404}.data button{border:0;border-radius:2px;padding:6px 16px;margin-top:6px;font-family:EnterCommand,sans-serif;font-size:2rem;color:#eee;background:linear-gradient(#0863a5,#1283d1);box-shadow:0 7px #0b5a92,0 8px 3px #0000004d;z-index:15;transition:all .15s;cursor:pointer}.data button:active{color:#888;background:linear-gradient(to bottom,#0006,#0008),linear-gradient(#0863a5,#1283d1);transform:translateY(5px);box-shadow:0 2px #0b5a92,0 3px 3px #0000004d}.data textarea{background:#333;border:2px solid #000;color:#fff;margin-top:1rem;min-height:100px;font-family:monospace;font-size:1.25rem;padding:.5rem;text-align:center;resize:none}select[disabled]{background:#555;color:#222;cursor:not-allowed}info-popup{--size: 25px;background:#0967ab;color:#fff;font-size:1rem;display:inline-grid;width:var(--size);height:var(--size);place-items:center;border-radius:50%;transform:translate(.25rem,-.05rem)}
`;class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return h}connectedCallback(){this.render();const[e,...i]=this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])");e.addEventListener("input",()=>this.updateURL()),i.forEach(a=>{a.addEventListener("change",()=>this.updateURL())}),this.shadowRoot.querySelector("button").addEventListener("click",()=>this.copyURL())}async copyURL(){const e=this.shadowRoot.querySelector("textarea").value;await navigator.clipboard.writeText(e)}getURL(){const e=new URL(location.href),i=`${e.origin}${e.pathname}`,[a,...o]=[...this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])")],t=a.value,s=o.map(n=>`${n.name}=${n[n.selectedIndex].value}`).join("&");return`${i}?channel=${t.toLowerCase()}&${s}`}updateURL(){const e=this.shadowRoot.querySelector("textarea");e.value=this.getURL()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <img src="images/logo.png" alt="Logo DiploPollo">
    <div class="container">

      <div class="data">

        <label>
          <p>Canal de Twitch</p>
          <info-popup title="Canal de Twitch al que queremos conectarnos">ℹ</info-popup>
          <input type="text" name="channel" placeholder="ManzDev" required>
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
            <option value="original">Genuine DiploPollo™</option>
            <option value="sunglasses">Beach DiploPollo™</option>
            <option value="king">King DiploPollo™</option>
            <option value="niv3k">DiploDuck™</option>
            <option value="halloween">DecapiPollo™</option>
            <option value="paperbag" disabled>McDiploPollo™</option>
          </select>
        </label>

        <label>
          <p>Autodecrecimiento</p>
          <info-popup title="Cuando no hay interacción con el pollo durante un tiempo, el cuello va decreciendo por sí solo.">ℹ</info-popup>
          <select name="decrease" disabled>
            <option value="1">Activado</option>
            <option value="0">Desactivado</option>
          </select>
        </label>

        <label>
          <p>Idle ghost</p>
          <info-popup title="Cuando no hay interacción con el pollo durante un tiempo, el pollo se vuelve semitransparente.">ℹ</info-popup>
          <select name="ghost" disabled>
            <option value="1">Activado</option>
            <option value="0">Desactivado</option>
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
            <option value="0">Desactivado</option>
          </select>
        </label>

        <label>
          <p>DiploPollo 3000™</p>
          <info-popup title="Funcionalidad especial">ℹ</info-popup>
          <select name="multineck" disabled>
            <option value="1">Activado</option>
            <option value="0">Desactivado</option>
          </select>
        </label>

        <textarea class="code" readonly></textarea>
        <button>Copiar URL</button>
        <small>Copia esta URL y pegala en el OBS como fuente de navegador.</small>
      </div>
    </div>`}}customElements.define("screen-menu",p);class f{constructor(){const{searchParams:e}=new URL(location.href),i=e.get("channel")??"ManzDev",a=e.get("mode")??"bit";this.diploPollo=document.querySelector("diplo-pollo"),this.connect(i),a==="bit"&&this.enableBitMode(),a==="command"&&this.enableCommandMode()}connect(e){this.client=new tmi.Client({channels:[e]}),this.client.connect()}enableBitMode(){this.client.on("cheer",(e,i,a)=>{const o=i.bits??1,t=Math.floor(o/2);this.diploPollo.incNeck(t)})}enableCommandMode(){this.client.on("message",(e,i,a,o)=>{if(!(a[0]==="!"))return;if(a.split(" ").at(0).toLowerCase()==="!pollo"){const n=Number.parseInt(a.split(" ").at(1)??1);if(!(!isNaN(n)&&n>-300&&n<300))return;console.log(n),n>0?this.diploPollo.incNeck(n):n<0&&this.diploPollo.decNeck(Math.abs(n))}})}}const r=document.querySelector(".container"),{searchParams:g}=new URL(location.href),m=!!g.get("channel");if(m){const l=document.createElement("diplo-pollo");r.classList.add("diplopollo-mode"),l.classList.add("animated"),r.append(l),new f}if(!m){r.classList.add("menu-mode");const l=document.createElement("screen-menu");r.append(l)}
