import { LitElement } from 'lit';

export class GetData extends LitElement {
    
    static get properties() {
        return {
            url: { type: String },
            method: { type: String }
        }
    }

    firstUpdated() {
        this.getData();
    }

    _sendData(data) {
        this.dispatchEvent(new CustomEvent("ApiData", {
            detail: data,
            bubbles: true,
            composed: true
        }));
    }

    async getData() {
        const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ab48532b8bmshdded5065e0fc22ep199073jsn0c022c8632d1',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            if (response.ok) {
                const result = await response.json();
                this._sendData(result);
            } else {
                console.error("Error fetching data:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

customElements.define('get-data', GetData);
