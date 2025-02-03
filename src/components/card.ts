import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('ui-card')
export class Card extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .card {
      @apply bg-white rounded-lg shadow-md overflow-hidden;
    }
    .header {
      @apply px-6 py-4 border-b border-gray-200;
    }
    .content {
      @apply px-6 py-4;
    }
  `

  render() {
    return html`
      <div class="card">
        <div class="header">
          <slot name="header"></slot>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `
  }
}
