export class MyLeftBar extends LitElement {
  
    constructor() {
      super();
    }
  
    render() {
      return html`
        <div class="leftBar__user">
          <a href="#">
            <img src="../../public/img/mastercard-line.svg">
          </a>
          <a href="#">
          <img src="../../public/img/Ellipse 13.svg">
          </a>
        </div>
        <hr>
        <div class="leftBar__options">
          <a href="#">
            <img src="../../public/img/Frame 24.svg">
          </a>
          <a href="#">
            <img src="../../public/img/Frame 19.svg">
          </a>
          <a href="#">
            <img src="../../public/img/Frame 23.svg">
          </a>
          <a href="#">
            <img src="../../public/img/Frame 20.svg">
          </a>
        </div>
        <div class="leftBar__exit">
          <a href="#">
            <img src="../../public/img/Frame 22.svg">
          </a>
          <a href="#">
            <img src="../../public/img/Frame 26.svg">
          </a>
        </div>
      `
    }
  
    static get styles() {
      return css`
        :host{
          display:flex;
          flex-direction: column;
          align-items: center;
          /*justify-content: center;*/
          background: gray;
          height: 98vh;
        }
        img{
          width: 2.5em;
          height: auto;
        }
        .leftBar__user{
          display: flex;
          flex-direction: column;
          margin: 2em 0;
        }
        .leftBar__options{
          display: flex;
          flex-direction: column;
          margin-top: 2em;
          gap: 1em
        }
        .leftBar__exit{
          position: absolute;
          bottom: 5em;
          display: flex;
          flex-direction: column;
        }
      `
    }
  }
  
  customElements.define('my-leftbar', MyLeftBar);