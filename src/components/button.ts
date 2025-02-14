import { LitElement, html, css, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import style from '../assets/css/wui.css?inline'
import './base/iconLoadingSpinner'

const elementVariants = {
  default: 'bg-gray-200 enabled:hover:bg-gray-300 text-gray-800',
  primary: 'bg-blue-500 enabled:hover:bg-blue-600 text-white',
  secondary: 'bg-gray-500 enabled:hover:bg-gray-600 text-white'
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
  @property({ type: Boolean }) isDisabled: boolean = false
  @property({ type: Boolean }) isLoading: boolean = false

  private handleClick() {
    if (this.isDisabled || this.isLoading) return
    this.dispatchEvent(new CustomEvent('click'))
  }

  render() {
    return html`
      <button
        class="inline-grid grid-cols-1 grid-rows-1 items-center justify-center ${elementVariants[this.variant]} ${elementSizes[this.size]} rounded-md transition-colors duration-500 ${this.isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} w-full"
        ?disabled=${this.isDisabled}
        @click=${this.handleClick}
        aria-busy=${this.isLoading}
        aria-disabled=${this.isDisabled}
      >

        <span class="row-start-1 row-end-1 col-start-1 col-end-1 flex items-center justify-center ${this.isLoading ? 'visible' : 'invisible'}">
          <slot name="loading"><wui-icon-loading-spinner /></slot>
        </span>
        </span>
        <span class="row-start-1 row-end-1 col-start-1 col-end-1 ${this.isLoading ? 'invisible' : 'visible'}">
          <slot></slot>
        </span>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wui-button': WuiButton
  }
}
