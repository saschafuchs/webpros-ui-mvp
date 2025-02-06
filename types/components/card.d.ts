import { LitElement } from 'lit';
export declare class WuiCard extends LitElement {
    static styles: import("lit").CSSResult;
    private hasHeader;
    private observer;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private checkHeaderSlot;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-card': WuiCard;
    }
}
