// src/components/webplay-canvas.js
import { LitElement, html, css } from "lit";
import { GameCanvas } from "./game-canvas";
import styles from "../styles/canvas.module.css";

class WebplayCanvas extends LitElement {
  static styles = css`
    /* Using the styles from the imported CSS Module */
    :host {
      display: block;
    }
  `;

  static properties = {
    isMuted: { type: Boolean },
    isFullscreen: { type: Boolean },
  };

  constructor() {
    super();
    this.isMuted = false;
    this.isFullscreen = false;
    this.gameCanvas = null;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.gameCanvas) this.initialize();
  }

  initialize() {
    if (!this.gameCanvas) return;
    this.gameCanvas.canvas = this.renderRoot.querySelector("canvas");
    this.gameCanvas.context = this.gameCanvas.canvas.getContext("2d");
    this.gameCanvas.start(
      (deltaTime, keys) => this.onUpdate(deltaTime, keys),
      (context) => this.onRender(context)
    );
  }

  onUpdate(deltaTime, keys) {
    console.log("Updating game state...");
  }

  onRender(context) {
    this.gameCanvas.clear();
    context.fillStyle = "blue";
    context.fillRect(50, 50, 100, 100);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.requestUpdate();
  }

  toggleFullscreen() {
    if (this.isFullscreen) {
      document.exitFullscreen();
    } else {
      this.requestFullscreen();
    }
    this.isFullscreen = !this.isFullscreen;
    this.requestUpdate();
  }

  takeScreenshot() {
    const link = document.createElement("a");
    link.href = this.renderRoot.querySelector("canvas").toDataURL();
    link.download = "screenshot.png";
    link.click();
  }

  render() {
    return html`
      <canvas id="canvas" class="${styles.canvas}"></canvas>
      <div id="canvas-controls">
        <button class="${styles.button}" @click="${this.toggleMute}">
          ${this.isMuted ? "Unmute" : "Mute"}
        </button>
        <button class="${styles.button}" @click="${this.toggleFullscreen}">
          ${this.isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
        <button class="${styles.button}" @click="${this.takeScreenshot}">
          Screenshot
        </button>
      </div>
    `;
  }
}

customElements.define("webplay-canvas", WebplayCanvas);
