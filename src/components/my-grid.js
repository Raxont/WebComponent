import { LitElement, html, css } from "lit";
import "./my-element.js";
import "./my-tracklist.js";
import "./my-leftbar.js";
import "./my-player.js";

export class MyGrid extends LitElement {
  static styles = css`
    :host {
      margin: 0;
      padding: 0;
    }
    main {
      width: 100%;
      height: 100vh;
      display: grid;
      grid-template-columns: 0.5fr 4fr 8fr 4fr;
      grid-template-rows: repeat(12, 1fr);
      grid-template-areas:
        "item_1 item_5 item_4 item_7"
        "item_1 item_5 item_4 item_7"
        "item_1 item_5 item_4 item_8"
        "item_1 item_2 item_4 item_8"
        "item_1 item_2 item_4 item_8"
        "item_1 item_2 item_4 item_8"
        "item_1 item_2 item_4 item_8"
        "item_1 item_2 item_4 item_8"
        "item_1 item_2 item_4 item_8"
        "item_1 item_6 item_4 item_8"
        "item_1 item_3 item_4 item_8"
        "item_1 item_3 item_4 item_8";
    }

    .item_1 {
      grid-area: item_1;
      width: 100%;
    }
    .item_1::before {
      content: "";
      position: fixed;
      top: 0;
      bottom: 0;
      left: 75.6%;
      width: 1px;
      background-color: grey;
      z-index: 1000;
    }
    .item_2 {
      grid-area: item_2;
    }
    .item_3 {
      grid-area: item_3;
      overflow:scroll;
      height: 90%;
    }
    .item_3::-webkit-scrollbar {
      display: none;
    }
    .item_4 {
      grid-area: item_4;
      height: 100%;
    }
    .item_4::before {
      content: "";
      position: fixed;
      top: 0;
      bottom: 0;
      left: 28.1%;
      width: 1px;
      background-color: grey;
      z-index: 1000;
    }

    .item_5 {
      grid-area: item_5;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 6%;
    }

    .item_5 h1 {
      font-size: 2.5em;
      width: 100%;
    }

    .item_5__container {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .item_5__container h2 {
      font-size: 1.6em;
    }

    .item_5__container .dropdown {
      position: relative;
      font-size: 1em;
      color: gray;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .item_5__container .dropdown button {
      padding: 5px 10px;
      font-size: 1em;
      cursor: pointer;
      background-color: #f1f1f1;
      border: none;
      display: flex;
      align-items: center;
    }

    .item_5__container .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 5vw;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      right: 0;
      margin-top: 70px;
    }

    .item_5__container .dropdown-content a {
      color: black;
      padding: 10px 10px;
      text-decoration: none;
      display: block;
    }

    .item_5__container .dropdown-content a:hover {
      background-color: grey;
    }

    .item_5__container .dropdown:hover .dropdown-content {
      display: block;
    }

    .item_5__container div i {
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: gainsboro;
    }

    .item_6 {
      grid-area: item_6;
      display: flex;
      align-items: center;
      padding-left: 6%;
    }
    .item_6 h3 {
      font-size: 1.6em;
    }

    .item_7 {
      height: 100%;
      grid-area: item_7;
      padding: 0.5em 0em 0em 0.5em;
    }
    .item_7 h1 {
      margin-block-start: 0em;
      margin-block-end: 0em;
    }
    .item_7__container {
      height: 50%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .item_7_icons {
      font-size: 2em;
      color: grey;
    }
    .item_7_icons a:-webkit-any-link {
      text-decoration: none;
    }
    .item_7__container p {
      color: gray;
      font-size: 1.3em;
      margin-block-start: 0em;
      margin-block-end: 0em;
    }

    .item_8 {
      grid-area: item_8;
      height: 100%;
      overflow: scroll;
    }
    .item_8::-webkit-scrollbar {
      display: none;
    }

    @media (width < 700px) {
      main {
        grid-template-areas:
          "item_2 item_2 item_2 item_2"
          "item_2 item_2 item_2 item_2"
          "item_2 item_2 item_2 item_2"
          "item_2 item_2 item_2 item_2"
          "item_2 item_2 item_2 item_2"
          "item_2 item_2 item_2 item_2"
          "item_2 item_2 item_2 item_2"
          "item_2 item_2 item_2 item_2"
          "item_2 item_2 item_2 item_2"
          "item_2 item_2 item_2 item_2"
          "item_1 item_1 item_1 item_1"
          "item_1 item_1 item_1 item_1";
      }

      .item_4,
      .item_3,
      .item_7,
      .item_5,
      .item_6,
      .item_8 {
        display: none;
      }
    }
  `;

  static properties = {
    content: { type: String },
    selectedOption: { type: String }
  };

  constructor() {
    super();
    this.content = 'Contenido de la sección que se va a recargar.';
    this.selectedOption = 'Week';
  }
  render() {
    return html`
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <main>
        <div class="item_1">
          <my-leftbar></my-leftbar>
        </div>
        <div class="item_2">
          <my-element .content="${this.content}"></my-element>
        </div>
        <div class="item_3">
          <my-tracklist></my-tracklist>
        </div>
        <div class="item_4">
          <my-player></my-player>
        </div>
        <div class="item_5">
          <h1>Discover new music</h1>
          <div class="item_5__container">
            <h2>Top-chart</h2>
            <div class="dropdown">
              <button id="dropdown-button">
              ${this.selectedOption}<i class="bx bx-chevron-down"></i>
              </button>
              <div id="dropdown-menu" class="dropdown-content">
                <a href="#" @click="${this.reloadSection}" data-option="week">Week</a>
                <a href="#" @click="${this.reloadSection}" data-option="month">Month</a>
                <a href="#" @click="${this.reloadSection}" data-option="year">Year</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="item_6">
          <h3>You may like</h3>
        </div>
        <div class="item_7">
          <h1>Track list</h1>
          <div class="item_7__container">
            <div class="item_7_icons">
              <a href="#">
                <img src="../../public/img/Group 45.svg" />
              </a>
              <a href="#">
                <img src="../../public/img/Group 44.svg" />
              </a>
            </div>
            <p>Playing next</p>
          </div>
        </div>
        <div class="item_8">
          <my-tracklist></my-tracklist>
        </div>
      </main>
    `;
  }
  reloadSection(event) {
    event.preventDefault();
    const option = event.target.getAttribute('data-option');
    this.selectedOption = option;
    const myElement = this.shadowRoot.querySelector('my-element');
    if (myElement) {
      myElement.option = option; 
    }
  }
}

customElements.define("my-grid", MyGrid);
