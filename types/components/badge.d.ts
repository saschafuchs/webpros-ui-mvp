import { LitElement } from 'lit';
export declare class WuiBadge extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'solid' | 'outline' | 'soft' | 'subtle';
    size: 'sm' | 'xs' | 'md' | 'lg';
    color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-badge': WuiBadge;
    }
}
