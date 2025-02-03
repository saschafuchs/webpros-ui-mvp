import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('ui-button')
export class Button extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
    button {
      @apply px-4 py-2 rounded-md font-medium transition-colors;
    }
    button.default {
      @apply bg-gray-200 hover:bg-gray-300 text-gray-800;
    }
    button.primary {
      @apply bg-blue-500 hover:bg-blue-600 text-white;
    }
    button.secondary {
      @apply bg-gray-500 hover:bg-gray-600 text-white;
    }
  `;

  static properties = {variant: { type: String }}
  variant = 'default';

  render() {
    const classes = {
      default: this.variant === 'default',
      primary: this.variant === 'primary',
      secondary: this.variant === 'secondary',
    };

    return html`
      <button class=${classMap(classes)}>
        <slot></slot>
      </button>
    `;
  }
}