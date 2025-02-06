import { LitElement } from 'lit';
export declare class WuiButton extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'default' | 'primary' | 'secondary';
    size: 'small' | 'medium' | 'large';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-button': WuiButton;
    }
}
