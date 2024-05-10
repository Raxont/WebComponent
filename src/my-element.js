import { LitElement, css, html } from 'lit'

export class MyElement extends LitElement {
  static get properties() {
    return {
      docsHint: { type: String },
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="container">
            <div class="div_cajas"></div>
            <div class="div_cajas"></div>
            <div class="div_cajas"></div>
            <div class="div_cajas"></div>
            <div class="div_cajas"></div>
            <div class="div_cajas"></div>
      </div>    
    `
  }

  static get styles() {
    return css`
      .container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        height: 340px;
        width: 340px;
        max-height: 320px;
        overflow-y: scroll;
        background: red;
      }
      .container::-webkit-scrollbar{
        display: hidden;
      }
      .div_cajas{
        height: 150px;
        width: 150px;
        background: blue;
        margin: 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }
    `
  }
}

window.customElements.define('my-element', MyElement)
