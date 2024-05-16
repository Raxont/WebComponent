import {LitElement, css, html} from 'lit';

export class MyElement extends LitElement {
  static styles = css`
  :host{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .body{
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .header{
      display: flex;
      height: 5vh;
      font-size: 1.5em;
      justify-content: center;
      align-items: center;
  }
  .UserOptions{
      display: flex;
      justify-content: space-around;
      align-items: center;
  }
  .songName{
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .songName h3,
  .songName h6{
    font-size: 1.5em;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .mediaOptions{
      display: flex;
      flex-direction: column;
      padding-left: 3vh;
      padding-right: 3vh;
      height: 25vh;
      justify-content: space-around;
  }
  
  .musicTime{
      display: flex;
      justify-content: space-between;

  }
  .progressMusic{
      display: flex;
      justify-content: center;
  }
  .progressMusic progress{
      width: 100%;
      height: 0.5vh;
      background-color: #ddd;
  }
  progress::-webkit-progress-value{
      background-color: #27AE60;
  }
  progress::-webkit-progress-bar {

      background-color: #ececec;
  }
  .mediaControl{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
  }
  .volumeControl{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .volumeControl progress{
      width: 50%;
      height: 0.3vh;
      background-color: #ddd;
  }
  .deviceOutput{
      display: flex;
      justify-content: center;
      align-items: center;
      justify-content: center;
  }
  .deviceOutput div{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      background: #6fcf9752;
      width: 18vh;
      border-radius: 1vh;
  }
  .SongImage{
    display: flex;
    justify-content: center
  }
  .SongImage img{
    width: 50vh;
    height: 50vh;
    border-radius: 5px;
  }
  `;
  render() {
    return html`
    <link src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js">
    <body class="body">
    <header class="header">
      <div>
        <h3>Now Playing</h3>
      </div>
    </header>
    <div class="SongInfo">
      <div class="SongImage">
        <img src="../../public/img/image 20.png" />
      </div>
      <div class="UserOptions">
        <div>
          <box-icon name='plus' color='#9bd8b5'></box-icon>
        </div>
        <div class="songName">
          <h3>
            Money Machine
          </h3>
          <h6>
            1000 Gecks
          </h6>
        </div>
        <div>
          <box-icon name='heart' color='#9bd8b5' ></box-icon>
        </div>
      </div>
    </div>
    <div class="mediaOptions">
      <div class="musicTimeline">
        <div class="musicTime">
          <p>2:14</p>
          <p>-1:15</p>
        </div>
        <div class="progressMusic">
          <progress class="progress" value="214" max="329"></progress>
        </div>
        </div>
      <div class="mediaControl">
        <box-icon name='shuffle' flip='vertical' color='#828282' ></box-icon>
        <box-icon name='rewind' flip='vertical' color='#27ae60' size='lg' ></box-icon>
        <box-icon name='play-circle' color='#27ae60' size='lg'></box-icon>
        <box-icon name='rewind' rotate='180' color='#27ae60' size='lg'></box-icon>
        <box-icon name='repeat' color='#828282'></box-icon>
      </div>
      <div class="volumeControl">
        <box-icon name='volume-low' color='#828282'></box-icon>
        <progress class="progress" value="214" max="329"></progress>
        <box-icon name='volume-full' color='#828282' ></box-icon>
      </div>
      <div class="deviceOutput">
        <div>
          <box-icon name='headphone' color='#828282' ></box-icon>
          <p>Airpods Pro (Dave)</p>
        </div>
      </div>
    </div>
  </body>
    `;
  }
}
customElements.define('my-player', MyElement);