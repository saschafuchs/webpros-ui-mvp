import { LitElement, html, css, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import style from '../assets/css/wui.css?inline'

const elementSizes = {
  sm: 'px-2 py-1 text-sm',
  xs: 'px-1 py-0.5 text-xs',
  md: 'px-3 py-1.5 text-base',
  lg: 'px-4 py-2 text-lg'
}

const elementColors = {
  default: {
    solid: 'bg-gray-200 text-gray-800',
    outline: 'border border-gray-200 text-gray-800',
    soft: 'bg-gray-100 text-gray-800',
    subtle: 'bg-gray-50 text-gray-800'
  },
  primary: {
    solid: 'bg-blue-500 text-white',
    outline: 'border border-blue-500 text-blue-500',
    soft: 'bg-blue-100 text-blue-500',
    subtle: 'bg-blue-50 text-blue-500'
  },
  secondary: {
    solid: 'bg-gray-500 text-white',
    outline: 'border border-gray-500 text-gray-500',
    soft: 'bg-gray-100 text-gray-500',
    subtle: 'bg-gray-50 text-gray-500'
  },
  success: {
    solid: 'bg-green-500 text-white',
    outline: 'border border-green-500 text-green-500',
    soft: 'bg-green-100 text-green-500',
    subtle: 'bg-green-50 text-green-500'
  },
  warning: {
    solid: 'bg-yellow-500 text-white',
    outline: 'border border-yellow-500 text-yellow-500',
    soft: 'bg-yellow-100 text-yellow-500',
    subtle: 'bg-yellow-50 text-yellow-500'
  },
  error: {
    solid: 'bg-red-500 text-white',
    outline: 'border border-red-500 text-red-500',
    soft: 'bg-red-100 text-red-500',
    subtle: 'bg-red-50 text-red-500'
  }
}

@customElement('wui-badge')
export class WuiBadge extends LitElement {
  static styles = css`${unsafeCSS(style)}`

  @property() variant: 'solid' | 'outline' | 'soft' | 'subtle' = 'solid'
  @property() size: 'sm' | 'xs' | 'md' | 'lg' = 'md'
  @property() color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' = 'default'

  render() {
    return html`
      <span class="rounded-md inline-flex items-center justify-center ${elementSizes[this.size]} ${elementColors[this.color][this.variant]}">
        <slot></slot>
      </span>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wui-badge': WuiBadge
  }
}
