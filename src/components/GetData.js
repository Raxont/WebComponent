import { LitElement} from 'lit'

export class GetData extends LitElement {

    static get properties() {
        return {
            url: { type: String },
            metho: { type: Number }
        }
    }
    firstUpdated(){
        this.getData();
    }

    _sendData(data) {
        this.dispatchEvent(new CustomEvent("ApiData",{
            detail: data,
            bubbles: true,
            composed: true,
            cancelable: true,
        }));
    }

    async getData() {
        try {
            const response = await fetch(this.url, {
                method: this.method
            });
            if (response.ok) {
                const data = await response.json();
                this._sendData(data);
            } else {
                return Promise.resolve(response);
            }
        } catch (error) {
            console.warn("Something went wrong", error);
        }
    }
    

}
customElements.define('get-data', GetData);