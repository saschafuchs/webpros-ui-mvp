import { LitElement, html, css, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import style from '../assets/css/pui.css?inline'


@customElement('ui-button')
export class Button extends LitElement {
  static styles = css`${unsafeCSS(style)}`

  @property() variant: 'default' | 'primary' | 'secondary' = 'default'

  render() {
    const classes = {
      default: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
      primary: 'bg-blue-500 hover:bg-blue-600 text-white',
      secondary: 'bg-gray-500 hover:bg-gray-600 text-white'
    }

    return html`
      <div>
        <button class="px-4 py-2 rounded-md font-medium transition-colors ${classes[this.variant]}">
          <slot></slot>
        </button>
      </div>
    `
  }
}
