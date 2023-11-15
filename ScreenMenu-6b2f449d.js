import{_ as h}from"./index-a1e0801d.js";const c=[{value:"original",name:"Genuine DiploPollo™"},{value:"sunglasses",name:"Beach DiploPollo™"},{value:"king",name:"King DiploPollo™"},{value:"niv3k",name:"DiploDuck™"},{value:"halloween",name:"DecapiPollo™"},{value:"nerd",name:"EmPollon™"},{value:"radioactive",name:"ChernoPollo™"},{value:"plucked",name:"CalvoPollo™"},{value:"magician",name:"HarryPollo™"},{value:"pirate",name:"JackSpollow™"},{value:"mustache",name:"GentlePollo™"},{value:"moto",name:"HarleyPollo™"},{value:"pikapollo",name:"PikaPollo™"},{value:"pollocop",name:"PolloCop™"},{value:"santapollo",name:"SantaPollo™"},{value:"pollobros",name:"PolloBros™"},{value:"manzpollo",name:"ManzPollo™"},{value:"ironpollo",name:"IronPollo™"},{value:"batpollo",name:"BatPollo™"},{value:"homerpollo",name:"HomerPollo™"}];class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.currentIndex=0}static get styles(){return`
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
    `}preload(){const e=new URL(location.href);c.forEach(o=>{const t=document.createElement("link");t.rel="preload",t.href=`${e.href}images/skins/${o.value}.png`,t.as="image",document.head.append(t)})}get value(){return new URL(this.shadowRoot.querySelector("img.selected").src).pathname.replace("/twitch-diplopollo/images/skins/","").replace("/images/skins/","").replace(".png","")}left(){this.unselectAll(),this.currentIndex=this.currentIndex-1>=0?this.currentIndex-1:this.images.length+(this.currentIndex-1),this.images[this.currentIndex].classList.add("selected"),this.selectSkin(this.currentIndex),localStorage.setItem("skin",this.images[this.currentIndex].dataset.name)}right(){this.unselectAll(),this.currentIndex=(this.currentIndex+1)%this.images.length,this.images[this.currentIndex].classList.add("selected"),this.selectSkin(this.currentIndex),localStorage.setItem("skin",this.images[this.currentIndex].dataset.name)}unselectAll(){this.shadowRoot.querySelector("img.selected").classList.remove("selected")}connectedCallback(){this.preload(),this.render(),addEventListener("keydown",t=>{const{key:a}=t,n=a==="ArrowLeft"||a==="ArrowUp",s=a==="ArrowRight"||a==="ArrowDown";(n||s)&&t.preventDefault(),n&&this.left(),s&&this.right()});const e=this.images=[...this.shadowRoot.querySelectorAll("img")],o=localStorage.getItem("skin")??"original";e.forEach((t,a)=>{t.addEventListener("click",()=>{this.selectSkin(a),localStorage.setItem("skin",t.dataset.name)}),t.src.includes(o)&&t.classList.add("selected")})}selectSkin(e){this.currentIndex=e,this.unselectAll(),this.images[e].classList.add("selected");const o=new CustomEvent("selectskin",{composed:!0,bubbles:!0,detail:c[e].value});this.dispatchEvent(o)}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="container">
      ${c.map(e=>`<img src="images/skins/${e.value}.png" data-name="${e.value}" alt="${e.name}" title="${e.name}">`).join("")}
    </div>`}}customElements.define("select-skin",d);const g=`:host{position:relative}.container{--offset: 8px;width:475px;min-height:600px;background:#888;background-image:url(images/cardboard-flat.png);box-shadow:calc(var(--offset) * 1) calc(var(--offset) * 1) 0 #000,calc(var(--offset) * 2) calc(var(--offset) * 2) 0 #000b,calc(var(--offset) * 3) calc(var(--offset) * 3) 0 #0008,calc(var(--offset) * 4) calc(var(--offset) * 4) 0 #0004;padding:20px;position:relative;z-index:1}h1{--color: #850b15;color:#fff;font-family:Larceny,monospace;font-size:5.25rem;margin-bottom:1.5rem;text-align:center;filter:drop-shadow(-3px 0 var(--color)) drop-shadow(0 3px var(--color))}.logo{text-align:center}.logo img{display:block;width:256px;margin:0 auto;margin-bottom:.5rem}.logo .version{background:darkred;padding:0 12px;color:#fff;font-family:EnterCommand,monospace;font-size:26px;display:inline-block;transform:translate(95px,-15px) rotate(-7deg)}.data{display:grid;gap:.25rem}.data label{display:grid;grid-template-columns:.7fr 32px 1fr;align-items:center;gap:1rem}.data label:first-child{grid-row-start:1}.data label:first-child :is(p,info-popup){display:none}.data label:first-child select-skin{grid-column:1 / 4;padding:6px;box-sizing:border-box}.data :is(p,small){font-family:Jost,EnterCommand,monospace;text-shadow:0 0 1px #000;margin:0;font-size:1.25rem;color:#111}.data small{font-size:1rem;margin-top:.5rem;text-align:center;color:#444}.data input[type=text],.data select{margin-top:5px;padding:4px;border:0;background:#000;color:#fff;z-index:10;font-family:EnterCommand,sans-serif;font-size:2rem;min-width:175px;text-align:center}.data input[type=text]:focus,.data select:focus{color:gold}.data input:invalid{background:#440404}.data button{border:0;border-radius:2px;padding:6px 16px;margin-top:6px;font-family:EnterCommand,sans-serif;font-size:2rem;color:#eee;background:linear-gradient(#0863a5,#1283d1);box-shadow:0 7px #0b5a92,0 8px 3px #0000004d;z-index:15;transition:all .15s;cursor:pointer}.data button:active{color:#888;background:linear-gradient(to bottom,#0006,#0008),linear-gradient(#0863a5,#1283d1);transform:translateY(5px);box-shadow:0 2px #0b5a92,0 3px 3px #0000004d}.data textarea{background:#333;border:2px solid #000;color:#fff;margin-top:1rem;min-height:100px;font-family:monospace;font-size:1.25rem;padding:.5rem;text-align:center;resize:none}select[disabled]{background:#555;color:#222;cursor:not-allowed}select[name=skin] option:checked{background:#8da3c2}select[name=skin]::-webkit-scrollbar{background:#222}select[name=skin]::-webkit-scrollbar-thumb{background:#0967ab}info-popup{--size: 25px;background:#0967ab;color:#fff;font-size:1rem;display:inline-grid;width:var(--size);height:var(--size);place-items:center;border-radius:50%;transform:translate(.25rem,-.05rem)}.preview{display:flex;flex-direction:column;position:absolute;top:50%;right:0;animation:idle .3s steps(2) infinite alternate}.preview .head{width:32px;height:21px;background:var(--image-head, url(images/skins/original.png));transform:translateY(1px)}.preview .neck{width:32px;height:25px;background:url(images/neck.png)}@keyframes idle{0%{transform:translate(30px,-120px) rotate(45deg) scale(4)}to{transform:translateY(-90px) rotate(45deg) scale(4)}}
`,v="0.4.3",r=new Audio("sounds/music.mp3");r.loop=!0;const i=document.createElement("div"),f=()=>{r.pause(),i.style.setProperty("--opacity",1)},x=()=>{r.play(),i.style.setProperty("--opacity",0)};i.className="music-icon",i.innerHTML=`
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
    <path stroke="#fff" stroke-width="1" stroke-opacity="var(--opacity, 1)" d="M1 1 L16 16" />
    <path fill="#fff" d="M12 5.21v5.058A2 2 0 1 0 13 12V1.926a.8.8 0 0 0-1.07-.754l-6.4 2.286a.8.8 0 0 0-.53.753v7.056A2 2 0 1 0 6 13V7.353l6-2.142Z"/>
  </svg>`,document.body.append(i),i.addEventListener("click",()=>{r.paused?x():f()});class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --image-head: url("images/skins/${localStorage.getItem("skin")??"original"}.png");
      }
      ${g}
    `}connectedCallback(){this.render();const[e,...o]=this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])"),t=this.shadowRoot.querySelector("select-skin"),a=this.shadowRoot.querySelector("select[name='action']");t.addEventListener("selectskin",({detail:n})=>this.changeHead(n)),e.addEventListener("input",()=>this.updateURL()),o.forEach(n=>n.addEventListener("change",()=>this.updateURL())),this.shadowRoot.querySelector("button").addEventListener("click",()=>this.copyURL()),a.addEventListener("change",async()=>{a.options[a.selectedIndex].value==="confetti"&&(await h(()=>import("./index-a1e0801d.js").then(n=>n.c),["index-a1e0801d.js","index-3fff557e.css"])).default()})}async copyURL(){const e=this.shadowRoot.querySelector("input[name=channel]");if(!e.value)e.reportValidity();else{localStorage.setItem("channel",e.value);const o=this.shadowRoot.querySelector("textarea"),t=this.shadowRoot.querySelector("button"),a=o.value;o.select(),t.textContent="¡URL copiada!",await navigator.clipboard.writeText(a)}}changeHead(e){this.style.setProperty("--image-head",`url("images/skins/${e}.png")`),this.updateURL()}getURL(){const e=new URL(location.href),o=`${e.origin}${e.pathname}`,[t,...a]=[...this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])")],n=t.value,s=this.shadowRoot.querySelector("select-skin"),u=a.filter(l=>l[l.selectedIndex].value!=="none").map(l=>`${l.name}=${l[l.selectedIndex].value}`);u.push(`skin=${s.value}`);const m=u.join("&");return`${o}?channel=${n.toLowerCase()}&${m}`}updateURL(){const e=this.shadowRoot.querySelector("textarea"),o=this.shadowRoot.querySelector("button");e.value=this.getURL(),localStorage.setItem("url",this.getURL()),o.textContent="Copiar URL"}render(){const e=localStorage.getItem("channel")??"";this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="logo">
      <img src="images/logo.png" alt="Logo DiploPollo">
      <span class="version">v${v}</span>
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
          <input type="text" name="channel" placeholder="ManzDev" value="${e}"
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

        <textarea class="code" readonly>${localStorage.getItem("url")??""}</textarea>
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
    `}}customElements.define("screen-menu",p);
