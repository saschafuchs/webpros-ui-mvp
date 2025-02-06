import { LitElement, html, css, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import style from '../assets/css/wui.css?inline'

const elementVariants = {
  default: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  primary: 'bg-blue-500 hover:bg-blue-600 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white'
}

const elementSizes = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg'
}

@customElement('wui-button')
export class WuiButton extends LitElement {
  static styles = css`${unsafeCSS(style)}`

  @property() variant: 'default' | 'primary' | 'secondary' = 'default'
  @property() size: 'small' | 'medium' | 'large' = 'medium'

  render() {
    return html`
      <button class="${elementVariants[this.variant]} ${elementSizes[this.size]} rounded-md transition-colors cursor-pointer">
        <slot></slot>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wui-button': WuiButton
  }
}
