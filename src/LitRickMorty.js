import { html, css, LitElement } from 'lit-element';

export class LitRickMorty extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--lit-rick-morty-text-color, #000);
      }
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        row-gap: 1.5rem;
        column-gap: 1rem;
        align-content: space-around;
        justify-content: space-around;
      }
      
      .contenido p {
        text-align: center;
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
    console.log(this.personajes);
  }

  render() {
    return html`
      <div class="container">
        ${this.personajes.map(personaje => html`
          <div class="card">
            <div class="imagen">
              <img src="${personaje.url}" alt="${personaje.name}"/>
            </div>
            <div class="contenido">
              <p><span>${personaje.index}</span></p>
              <p><strong>${personaje.name}</strong></p>
            </div>
          </div>
        `)}
      </div>
    `;
  }
}
