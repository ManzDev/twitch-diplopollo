(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
        background: url("images/head.png");
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
    </div>`}}customElements.define("diplo-head",c);const d="cubic-bezier(0.25, -0.75, 0.50, 1.75)";class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.neckSize=0}static get styles(){return`
      :host {
        --scale: scale(3);
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
      }

      @keyframes idle {
        from { background-position: -128px 0px; }
        to { background-position: 0px 0px; }
      }
    `}incNeck(s){this.style.setProperty("--neck-timing",d),this.neckSize+=s,this.updateNeck()}updateNeck(){this.style.setProperty("--neck-size",`${this.neckSize}px`)}decNeck(s){this.style.setProperty("--neck-timing",d),this.neckSize=Math.max(0,this.neckSize-s),this.updateNeck()}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="container">
      <diplo-head></diplo-head>
      <div class="body"></div>
    </div>`}}customElements.define("diplo-pollo",l);const a=document.querySelector("diplo-pollo");class m{constructor(){const s=new URL(location.href).searchParams.get("channel")??"ManzDev",i=new URL(location.href).searchParams.get("mode")??"bit";this.client=new tmi.Client({channels:[s]}),this.client.connect(),i==="bit"&&this.enableBitMode(),i==="command"&&this.enableCommandMode()}enableBitMode(){this.client.on("cheer",(s,i,o)=>{const e=i.bits??1,t=Math.floor(e/2);a.incNeck(t)})}enableCommandMode(){this.client.on("message",(s,i,o,e)=>{if(!(o[0]==="!"))return;if(o.split(" ").at(0).toLowerCase()==="!pollo"){const n=Number.parseInt(o.split(" ").at(1)??1);if(!(!isNaN(n)&&n>-300&&n<300))return;console.log(n),n>0?a.incNeck(n):n<0&&a.decNeck(Math.abs(n))}})}}new m;
