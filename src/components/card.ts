import { LitElement, html, css, unsafeCSS } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import style from '../assets/css/wui.css?inline'

@customElement('wui-card')
export class WuiCard extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
    :host {
      display: block;
    }
  `

  @state() private hasHeader = false

  private observer: MutationObserver | undefined

  connectedCallback() {
    super.connectedCallback()
    this.checkHeaderSlot()
    this.observer = new MutationObserver(() => this.checkHeaderSlot())
    this.observer.observe(this, { childList: true, subtree: true, attributes: true })
  }

  disconnectedCallback() {
    this.observer?.disconnect()
    super.disconnectedCallback()
  }

  private checkHeaderSlot() {
    const headerEl = this.querySelector('[slot="header"]')
    const hasHeader = !!headerEl
    if (hasHeader !== this.hasHeader) {
      this.hasHeader = hasHeader
    }
  }

  render() {
    return html`
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        ${this.hasHeader
    ? html`
            <div class="px-6 py-4 border-b border-gray-200 font-bold bg-gray-50">
              <slot name="header"></slot>
            </div>
          `
    : ''}
        <div class="px-6 py-4">
          <slot></slot>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wui-card': WuiCard
  }
}
