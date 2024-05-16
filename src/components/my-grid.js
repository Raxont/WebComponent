import { LitElement, html, css } from "lit";
import "./my-element";
import "./my-tracklist";
import "./my-leftbar";

export class myGrid extends LitElement {
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
      width:100%;
    }
    .item_2 {
      grid-area: item_2;
    }
    .item_3 {
      grid-area: item_3;
      background-color: aqua;
    }
    .item_4 {
      grid-area: item_4;
      background-color: blueviolet;
    }

    .item_5 {
      grid-area: item_5;
      display: flex;
      flex-direction: column;
      /* background-color: blue; */
      justify-content: space-around;
      padding: 6%;
    }
    .item_5 h1 {
      font-size: 2.5em;
      width: 100%;
      /* background-color: gold; */
    }
    .item_5__container {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: space-between;
      align-items: end;
    }
    .item_5__container div {
      font-size: 1.3em;
      color: gray;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .item_5__container h2 {
      font-size: 1.6em;
    }

    .item_5__container div i {
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: gainsboro;
      margin-left: 5px;
    }

    .item_6 {
      grid-area: item_6;
      /* background-color: brown; */
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
    //   background: red;
      padding: .5em 0em 0em .5em;
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
    .item_7_icons{
        font-size:2em;
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
    //   background: blue;
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
          <my-element></my-element>
        </div>
        <div class="item_3">
        <my-tracklist></my-tracklist></div>
        <div class="item_4"></div>
        <div class="item_5">
          <h1>Discover new music</h1>
          <div class="item_5__container">
            <h2>Top-chart</h2>
            <div>
              <h4>Week</h4>
              <a>
                <i class="bx bx-chevron-down"></i>
              </a>
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
}

customElements.define("my-grid", myGrid);
