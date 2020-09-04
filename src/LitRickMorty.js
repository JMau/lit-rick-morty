import { html, css, LitElement } from 'lit-element';

export class LitRickMorty extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--lit-rick-morty-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      data: { type: Array },
      personajes: { type: Array },
    };
  }

  constructor() {
    super();
    this.data = [];
    this.personajes = [];
  }

  firstUpdated(){
    fetch('https://rickandmortyapi.com/api/character/')
    .then(r => r.json())
    .then(r => {
      this.data = r.results;
      this.crearPersonajes();
    });
  }

  crearPersonajes() {
    this.data.forEach((personaje, id) => {
      this.personajes.push({
        name: personaje.name,
        index: id+1,
        url: personaje.image
      });
    });
    this.dispatchEvent(new CustomEvent('response', {detail: this.personajes}));
  }

  render() {
    return html``;
  }
}
