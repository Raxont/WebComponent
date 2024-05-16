import { LitElement, html, css } from "lit";

export class MyLeftBar extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container">
        <div class="leftBar__user">
          <a href="#">
            <img src="../../public/img/mastercard-line.svg" />
          </a>
          <a href="#">
            <img src="../../public/img/Ellipse 13.svg" />
          </a>
        </div>
        <hr class="hr" />
        <div class="leftBar__options">
          <a href="#">
            <img src="../../public/img/Frame 24.svg" />
          </a>
          <a href="#">
            <img src="../../public/img/Frame 19.svg" />
          </a>
          <a href="#">
            <img src="../../public/img/Frame 23.svg" />
          </a>
          <a href="#">
            <img src="../../public/img/Frame 20.svg" />
          </a>
        </div>
      </div>
      <div class="leftBar__exit">
        <a href="#">
          <img src="../../public/img/Frame 22.svg" />
        </a>
        <a href="#">
          <img src="../../public/img/Frame 26.svg" />
        </a>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      
      img {
        width: 3.5em;
      }
      .container{
        display:flex;
        flex-direction: column;
        gap:1em;
      }
      .leftBar__user {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:.5em;
      }
      .leftBar__user img {
        width: 3em;
      }
      .hr {
        width: 80%;
        background: grey;
      }
      .leftBar__options {
        display: flex;
        flex-direction: column;
        
      }
      .leftBar__exit {
        display: flex;
        flex-direction: column;
      }
    `;
  }
}

customElements.define("my-leftbar", MyLeftBar);
