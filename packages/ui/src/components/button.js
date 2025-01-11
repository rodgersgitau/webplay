import { LitElement, html, css } from "lit";
import styles from "../styles/button.module.css";

class WebplayButton extends LitElement {
  static styles = css`
    /* Using the styles from the imported CSS Module */
    :host {
      display: block;
    }
  `;

  static properties = {
    text: { type: String },
    onClick: { type: Function },
  };

  constructor() {
    super();
    this.text = "Button";
    this.onClick = () => {};
  }

  render() {
    return html`
      <button
        class="${styles.button} ${styles.buttonHover}"
        @click="${this.onClick}"
      >
        ${this.text}
      </button>
    `;
  }
}

customElements.define("webplay-button", WebplayButton);
