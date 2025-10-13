import { ColumnDef } from '@tanstack/lit-table';
import { CSSResult } from 'lit';
import { Dayjs } from 'dayjs';
import { default as default_2 } from 'dayjs';
import { LitElement } from 'lit';
import { nothing } from 'lit';
import { PaginationState } from '@tanstack/lit-table';
import { PropertyValueMap } from 'lit';
import { PropertyValues } from 'lit';
import { Row } from '@tanstack/lit-table';
import { RowData } from '@tanstack/lit-table';
import { RowSelectionState } from '@tanstack/lit-table';
import { SortingState } from '@tanstack/lit-table';
import { Table } from '@tanstack/lit-table';
import { TableController } from '@tanstack/lit-table';
import { TemplateResult } from 'lit';
import { TemplateResult as TemplateResult_2 } from 'lit-html';

export declare class AccordionBaseElement extends DdsElement {
    static readonly styles: CSSResult;
    private readonly accordionId;
    private readonly buttonId;
    private readonly contentId;
    /** The size of the accordion
     * @type { 'sm' | 'lg' }
     */
    size: CommonSize;
    /** The heading level of the accordion
     * @type { 1 | 2 | 3 | 4 | 5 | 6 }
     */
    headingLevel: HeadingLevel;
    /** Whether the accordion is opened */
    opened: boolean;
    /** Whether the accordion is disabled */
    disabled: boolean;
    /** Whether the accordion is in loading state */
    loading: boolean;
    /** The heading text of the accordion, this will be used as the aria label of the heading also if ariaLabel is not provided */
    heading?: string;
    /** The loading aria label of the accordion */
    loadingAriaLabel?: string;
    /** The location of the icon
     * @type { 'left' | 'right' }
     */
    iconLocation: LabelPlacement;
    /** The variant of the accordion
     * @type { 'default' | 'collapsed' | 'clean' | 'clean-collapsed' }
     */
    variant: AccordionVariant;
    /** Whether this is the last item in an accordion group */
    lastItem: boolean;
    /** ID of element that describes the accordion */
    ariaDescribedBy?: string;
    constructor();
    headingRender(): TemplateResult;
    contentRender(): TemplateResult;
    connectedCallback(): void;
    validateProperties(): void;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private onChange;
    private toggle;
    private handleKeyDown;
    private handleClick;
    private renderButtons;
    private renderContent;
    private renderHeading;
    renderAccordion(): TemplateResult;
}

declare type AccordionVariant = 'default' | 'collapsed' | 'clean' | 'clean-collapsed';

export declare type ActionType = {
    href?: string;
    target?: LinkTarget;
    rel?: string;
    text?: string;
    variant?: ButtonVariant;
    func?: () => void;
};

export declare type AlertType = 'default' | 'information' | 'successful' | 'error';

export declare type Alignment = 'vertical' | 'horizontal';

export declare const anchorClass = "dds-anchor";

/**
 * `dap-ds-icon-arrow-down-line`
 * @summary An icon
 * @element dap-ds-icon-arrow-down-line
 * @title - ArrowsArrowDownLine
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowDownLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-down-s-fill`
 * @summary An icon
 * @element dap-ds-icon-arrow-down-s-fill
 * @title - ArrowsArrowDownSFill
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowDownSFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-down-s-line`
 * @summary An icon
 * @element dap-ds-icon-arrow-down-s-line
 * @title - ArrowsArrowDownSLine
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowDownSLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-left-down-line`
 * @summary An icon
 * @element dap-ds-icon-arrow-left-down-line
 * @title - ArrowsArrowLeftDownLine
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowLeftDownLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-left-line`
 * @summary An icon
 * @element dap-ds-icon-arrow-left-line
 * @title - ArrowsArrowLeftLine
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowLeftLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-left-l-line`
 * @summary An icon
 * @element dap-ds-icon-arrow-left-l-line
 * @title - ArrowsArrowLeftLLine
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowLeftLLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-left-s-fill`
 * @summary An icon
 * @element dap-ds-icon-arrow-left-s-fill
 * @title - ArrowsArrowLeftSFill
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowLeftSFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-left-s-line`
 * @summary An icon
 * @element dap-ds-icon-arrow-left-s-line
 * @title - ArrowsArrowLeftSLine
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowLeftSLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-left-up-line`
 * @summary An icon
 * @element dap-ds-icon-arrow-left-up-line
 * @title - ArrowsArrowLeftUpLine
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowLeftUpLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-right-down-line`
 * @summary An icon
 * @element dap-ds-icon-arrow-right-down-line
 * @title - ArrowsArrowRightDownLine
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowRightDownLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-right-line`
 * @summary An icon
 * @element dap-ds-icon-arrow-right-line
 * @title - ArrowsArrowRightLine
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowRightLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-right-l-line`
 * @summary An icon
 * @element dap-ds-icon-arrow-right-l-line
 * @title - ArrowsArrowRightLLine
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowRightLLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-right-s-fill`
 * @summary An icon
 * @element dap-ds-icon-arrow-right-s-fill
 * @title - ArrowsArrowRightSFill
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowRightSFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-right-s-line`
 * @summary An icon
 * @element dap-ds-icon-arrow-right-s-line
 * @title - ArrowsArrowRightSLine
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowRightSLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-right-up-line`
 * @summary An icon
 * @element dap-ds-icon-arrow-right-up-line
 * @title - ArrowsArrowRightUpLine
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowRightUpLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-up-line`
 * @summary An icon
 * @element dap-ds-icon-arrow-up-line
 * @title - ArrowsArrowUpLine
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowUpLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-up-s-fill`
 * @summary An icon
 * @element dap-ds-icon-arrow-up-s-fill
 * @title - ArrowsArrowUpSFill
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowUpSFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-arrow-up-s-line`
 * @summary An icon
 * @element dap-ds-icon-arrow-up-s-line
 * @title - ArrowsArrowUpSLine
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsArrowUpSLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-expand-up-down-fill`
 * @summary An icon
 * @element dap-ds-icon-expand-up-down-fill
 * @title - ArrowsExpandUpDownFill
 * @group icon
 * @icontype arrows
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class ArrowsExpandUpDownFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

declare type AvatarGroupLayout = 'stack' | 'grid';

declare type AvatarShape = 'circle' | 'rounded' | 'square';

declare type AvatarVariant = 'image' | 'initials' | 'icon';

export declare type BackgroundShade = 'subtle' | 'base' | 'medium' | 'strong';

declare type BadgeSize = 'sm' | 'lg';

export declare type BadgeType = 'neutral' | 'brand' | 'info' | 'positive' | 'warning' | 'negative';

declare type BadgeType_2 = 'neutral' | 'brand' | 'info' | 'positive' | 'warning' | 'negative';

declare type BadgeVariant = 'round' | 'dot';

declare type BannerVariant = 'brand' | 'positive' | 'info' | 'warning' | 'negative';

declare type BodyProps = {
    variant: Extract<TypographyVariant, 'body'>;
    size: TypographySize;
};

/**
 * `dap-ds-icon-home-6-line`
 * @summary An icon
 * @element dap-ds-icon-home-6-line
 * @title - BuildingsHome6Line
 * @group icon
 * @icontype buildings
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class BuildingsHome6Line extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-calendar-line`
 * @summary An icon
 * @element dap-ds-icon-calendar-line
 * @title - BusinessCalendarLine
 * @group icon
 * @icontype business
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class BusinessCalendarLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

export declare type ButtonShape = 'button' | 'circle';

export declare type ButtonSize = Extract<Size, 'lg' | 'md' | 'sm' | 'xs'>;

declare type ButtonSize_2 = Extract<Size, 'lg' | 'md' | 'sm' | 'xs'>;

declare type ButtonVariant = 'primary' | 'outline' | 'subtle' | 'clean' | 'primary-inverted' | 'outline-inverted' | 'subtle-inverted' | 'clean-inverted' | 'subtle-neutral' | 'subtle-quiet' | 'subtle-quiet-inverted' | 'subtle-menu' | 'subtle-menu-item';

declare type ButtonVariant_2 = 'neutral' | 'brand' | 'inverted' | 'inverted-brand';

declare type CalloutVariant = 'brand' | 'info' | 'positive' | 'warning' | 'negative';

declare type CaptionProps = {
    variant: Extract<TypographyVariant, 'caption'>;
    size: never;
};

declare interface ChoiceElementMixinInterface {
    checked: boolean;
}

export { ColumnDef }

declare class ComboboxBaseElement extends GenericFormElement {
    readonly triggerInput: HTMLInputElement;
    readonly optionList: DapDSOptionList;
    placement: PopupPlacement;
    opened: boolean;
    searchMode: 'none' | 'typehead' | 'autocomplete' | 'manual';
    search: boolean;
    clearButton?: string;
    placeholder: string | null;
    sync?: boolean;
    allowManualInput?: boolean;
    searchForText?: boolean;
    searchOnValueSet?: string | undefined;
    loading?: boolean;
    selectable?: string;
    noAnimation?: boolean;
    textComplete?: boolean;
    openOnEmpty?: boolean;
    searchButtonAriaLabel?: string;
    subtle: boolean;
    selectedItem: any;
    currentItem: any;
    selectedText: string;
    private optionListObserver;
    private isUserInteraction;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): Promise<void>;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    /**
     * Handles value changes from outside the component
     * This ensures the selection state is updated when the value is set programmatically
     */
    private handleValueChange;
    private setupOptionListObserver;
    private updateComboboxState;
    /**
     * Updates the selection state based on the current value
     * This is useful when options are loaded asynchronously
     */
    private updateSelectionFromValue;
    private cleanupOptionListObserver;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
    get isAutoComplete(): boolean;
    /**
     * Get all option items directly from the combobox element
     * This is more reliable for dynamic updates than the option list component
     */
    private getComboboxOptions;
    get isOpenOnEmpty(): boolean;
    get isOpenOnAutocomplete(): boolean;
    get shouldHideClearIcon(): boolean;
    handleClick: () => void;
    private handleEnterKey;
    private handleCurrentItemEnter;
    private handleSearchEnter;
    private handleDefaultEnter;
    private handleSelectedItemChange;
    private handleTextSearch;
    private handleArrowKeys;
    handleKeyDown: (event: KeyboardEvent) => Promise<false | void | 0>;
    handleInput: (event: InputEvent) => Promise<void>;
    clearSelection(): Promise<void>;
    handleListKeyDown: (event: CustomEvent) => void;
    handleDocumentMouseDown: (event: MouseEvent) => void;
    handleFocus: () => void;
    handleBlur: () => void;
    showDropDown(): Promise<void>;
    hideDropDown(): Promise<void>;
    get focusElement(): HTMLInputElement;
    handleSelectedChange: (event: CustomEvent) => Promise<void>;
    handleOptionDeselect: (event: CustomEvent) => void;
    handleCurrentOptionChange: (event: CustomEvent) => void;
    handleListChanged: (event: CustomEvent) => void;
    handleClearClick: () => void;
    handleSearchClick: (event: MouseEvent) => void;
    private setSelectionRange;
    private clearSelectionRange;
    getValidity(): boolean;
    formResetCallback(): void;
    private getAutoCompleteValidity;
    private getManualInputValidity;
    private getSearchTextValidity;
    private getSelectedItemValidity;
    private getBasicValidity;
    get validity(): ValidityState;
    get validationMessage(): string;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setValidity(): void;
    handleInvalid(event: Event): void;
    getActiveDescendant(): HTMLInputElement | DapDSOptionItem | null | undefined;
    getSearchIconSize(size: string): "lg" | "md" | "sm";
    getInnerIconSize(size: string): 10 | 16;
    private renderInput;
    private renderClearButton;
    private renderIndicatorIcon;
    private renderSelectActions;
    private renderOptionList;
    renderCombobox(): TemplateResult_2;
}

export declare type Common<T> = Pick<T, keyof T>;

export declare type CommonFormElementSize = Extract<Size, 'sm' | 'md' | 'lg'>;

export declare type CommonSize = Extract<Size, 'sm' | 'lg'>;

export declare type CSSFlexDirection = 'column' | 'row' | 'column-reverse' | 'row-reverse';

/**
 * `dap-ds-accordion` is a custom accordion component.
 * @element dap-ds-accordion
 * @summary An accordion is a vertically stacked list of interactive items that can be expanded or collapsed to reveal or hide content.
 * @title - Accordion
 *
 * @property { 'sm' | 'lg' } size - The size of the accordion. Default is `sm`.
 * @property {string} heading - The heading text of the accordion, this will be used as the aria label of the heading also if ariaLabel is not provided
 * @property { 1 | 2 | 3 | 4 | 5 | 6 } headingLevel - The heading level of the accordion. Default is `4`.
 * @property {boolean} opened - Whether the accordion is opened. Default is `false`.
 * @property { 'left' | 'right' } iconLocation - The location of the icon. Default is `right`.
 * @property { 'default' | 'collapsed' | 'clean' | 'clean-collapsed' } variant - The variant of the accordion.
 * @property {boolean} lastItem - Whether the accordion is the last item.
 * @property {boolean} disabled - Whether the accordion is disabled.
 * @property {boolean} loading - Whether the accordion is in loading state.
 *
 * @event {{ open: boolean, item: AccordionBaseElement }} dds-opened - Event fired when the accordion is opened.
 * @event {{ open: boolean, item: AccordionBaseElement }} dds-closed - Event fired when the accordion is closed.
 *
 * @slot default - The content of the accordion.
 * @slot heading - The heading of the accordion.
 * @slot icon-opened - The icon when the accordion is opened.
 * @slot icon-closed - The icon when the accordion is closed.
 *
 * @csspart base - The main accordion container.
 * @csspart heading - The heading of the accordion.
 * @csspart button - The button of the accordion.
 * @csspart content - The content of the accordion.
 * @csspart content-container - The container of the accordion content.
 * @csspart icon-wrapper - The icon wrapper of the accordion.
 * @csspart open-icon - The icon when the accordion is opened.
 * @csspart open-icon-base - The base of the icon when the accordion is opened.
 * @csspart close-icon - The icon when the accordion is closed.
 * @csspart close-icon-base - The base of the icon when the accordion is closed.
 *
 * @cssproperty --dds-accordion-border-width - The width of the accordion border (default: var(--dds-border-width-base))
 * @cssproperty --dds-accordion-border-style - The style of the accordion border (default: solid)
 * @cssproperty --dds-accordion-border-radius - The border radius of the accordion (default: var(--dds-radius-base))
 * @cssproperty --dds-accordion-border-color - The color of the accordion border (default: var(--dds-border-neutral-divider))
 * @cssproperty --dds-accordion-background-color - The background color of the accordion (default: var(--dds-background-neutral-subtle))
 * @cssproperty --dds-accordion-text-color - The text color of the accordion (default: var(--dds-text-neutral-strong))
 * @cssproperty --dds-accordion-hover-background - The background color when hovering over the accordion (default: var(--dds-background-neutral-base))
 * @cssproperty --dds-accordion-active-background - The background color when the accordion is active (default: var(--dds-background-neutral-medium))
 * @cssproperty --dds-accordion-icon-background - The background color of the accordion icon (default: var(--dds-transparent-black-subtle))
 * @cssproperty --dds-accordion-icon-color - The color of the accordion icon (default: var(--dds-icon-neutral-base))
 * @cssproperty --dds-accordion-icon-hover-background - The background color of the accordion icon when hovered (default: var(--dds-transparent-black-base))
 * @cssproperty --dds-accordion-icon-active-background - The background color of the accordion icon when active (default: var(--dds-transparent-black-strong))
 * @cssproperty --dds-accordion-icon-hover-color - The color of the accordion icon when hovered (default: var(--dds-icon-neutral-strong))
 * @cssproperty --dds-accordion-icon-active-color - The color of the accordion icon when active (default: var(--dds-icon-neutral-strong))
 * @cssproperty --dds-accordion-content-color - The color of the accordion content (default: var(--dds-text-text-neutral))
 * @cssproperty --dds-accordion-transition-duration - The duration of the accordion transitions (default: var(--dds-transition-fast))
 * @cssproperty --dds-accordion-transition-timing - The timing function of the accordion transitions (default: var(--dds-easing-ease-in-out))
 * @cssproperty --dds-accordion-divider-color - The color of the divider between accordion items (default: var(--dds-border-neutral-divider))
 */
export declare class DapDSAccordion extends AccordionBaseElement {
    render(): TemplateResult_2;
}

/**
 * `dap-ds-accordion-group` is a custom accordion group component.
 * @element dap-ds-accordion-group
 * @summary An accordion group is a collection of accordion components.
 * @title - Accordion group
 * @group accordion
 *
 * @slot - The content of the accordion group.
 *
 * @csspart base - The main accordion group container.
 *
 * @cssproperty --dds-accordion-group-spacing - Controls the gap between accordion items (default: var(--dds-spacing-300))
 * @cssproperty --dds-accordion-group-border-color - Controls the border color (default: var(--dds-border-neutral-subtle))
 * @cssproperty --dds-accordion-group-border-width - Controls the border width (default: var(--dds-border-width-base))
 * @cssproperty --dds-accordion-group-border-radius - Controls the border radius (default: var(--dds-radius-base))
 * @cssproperty --dds-accordion-group-background - Controls the background color (default: transparent)
 */
export declare class DapDSAccordionGroup extends DdsElement {
    private readonly accordions;
    /** Whether to close other accordions when one is opened. */
    autoClose: string;
    /** The variant of the accordion
     * @type { 'default' | 'collapsed' | 'clean' | 'clean-collapsed' }
     */
    variant: AccordionVariant;
    static readonly styles: CSSResult;
    private readonly boundOnAccordionChange;
    private readonly boundOnSlotChange;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(_changedProperties: PropertyValueMap<DapDSAccordionGroup> | Map<PropertyKey, unknown>): void;
    private onSlotChange;
    private setupAccordions;
    private onAccordionChange;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-anchor-heading`
 * @summary Anchor heading is a heading with an anchor link.
 * @element dap-ds-anchor-heading
 * @title - Anchor heading
 *
 * @attribute {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} variant - The variant of the heading. Default is `h2`. Can be `h1`, `h2`, `h3`, `h4`, `h5`, or `h6`.
 * @attribute {string} label - The label of the heading.
 *
 * @csspart base - The main anchor heading container.
 * @csspart link - The link of the anchor heading. dap-ds-link element.
 * @csspart link-base - The base of the link part.
 * @csspart text - The text of the anchor heading.
 *
 * @cssproperty --dds-anchor-link-color - The color of the anchor link. Default is the primary color.
 * @cssproperty --dds-anchor-link-opacity - The opacity of the anchor link when not hovered. Default is 0.
 * @cssproperty --dds-anchor-link-hover-opacity - The opacity of the anchor link when hovered. Default is 1.
 * @cssproperty --dds-anchor-link-transition - The transition property for the anchor link opacity. Default is 'opacity 0.2s ease-in-out'.
 */
export declare class DapDSAnchorHeading extends DdsElement {
    variant: HeadingVariant;
    label: string;
    static readonly styles: CSSResult[];
    createRenderRoot(): this;
    get elementId(): string;
    get anchorTitle(): string;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-avatar`
 * @summary Avatar component can be used to display user profile images, initials, or icons.
 * @element dap-ds-avatar
 * @title - Avatar
 *
 * @slot icon - The icon to display when variant is 'icon'.
 * @slot fallback - Custom fallback content when image fails to load.
 *
 * @event dds-click - Fired when the avatar is clicked (only when interactive).
 * @event dds-load - Fired when the image loads successfully.
 * @event dds-error - Fired when the image fails to load.
 *
 * @csspart base - The main avatar container.
 * @csspart img - The avatar image.
 * @csspart initials - The initials container.
 * @csspart icon - The icon container.
 * @csspart fallback - The fallback content container.
 * @csspart loading - The loading indicator.
 *
 * @cssproperty --dds-avatar-border-radius - The border radius of the avatar. Default varies by shape.
 * @cssproperty --dds-avatar-background-color - The background color of the avatar. Default is neutral.
 * @cssproperty --dds-avatar-border-width - The width of the avatar's border. Default is 0.
 * @cssproperty --dds-avatar-border-color - The color of the avatar's border. Default is transparent.
 * @cssproperty --dds-avatar-border-style - The style of the avatar's border. Default is solid.
 * @cssproperty --dds-avatar-transition - The transition property for the avatar. Default is 'all 0.2s ease-in-out'.
 * @cssproperty --dds-avatar-text-color - The color of initials text. Default is neutral strong.
 * @cssproperty --dds-avatar-font-size - The font size for initials. Calculated based on size.
 * @cssproperty --dds-avatar-font-weight - The font weight for initials. Default is semibold.
 *
 * @cssproperty --dds-avatar-size-lg - The size of the large avatar. Default is 80px.
 * @cssproperty --dds-avatar-size-md - The size of the medium avatar. Default is 64px.
 * @cssproperty --dds-avatar-size-sm - The size of the small avatar. Default is 48px.
 * @cssproperty --dds-avatar-size-xs - The size of the extra small avatar. Default is 32px.
 * @cssproperty --dds-avatar-size-xxs - The size of the extra extra small avatar. Default is 24px.
 */
export declare class DapDSAvatar extends DdsElement {
    /** The size of the avatar
     * @default md
     * @type { 'xxs' | 'xs' | 'sm' | 'md' | 'lg' }
     * @example
     * ```html
     * <dap-ds-avatar size="xxs">
     * <dap-ds-avatar size="xs">
     * <dap-ds-avatar size="sm">
     * <dap-ds-avatar size="md">
     * <dap-ds-avatar size="lg">
     * ```
     */
    size: Size;
    /** The shape of the avatar
     * @default circle
     * @type { 'circle' | 'rounded' | 'square' }
     * @example
     * ```html
     * <dap-ds-avatar shape="circle">
     * <dap-ds-avatar shape="rounded">
     * <dap-ds-avatar shape="square">
     * ```
     */
    shape: AvatarShape;
    /** The variant type of the avatar
     * @default image
     * @type { 'image' | 'initials' | 'icon' }
     * @example
     * ```html
     * <dap-ds-avatar variant="image">
     * <dap-ds-avatar variant="initials">
     * <dap-ds-avatar variant="icon">
     * ```
     */
    variant: AvatarVariant;
    /** The source of the avatar image */
    src: string;
    /** The alt text of the avatar */
    alt: string;
    /** The initials to display when variant is 'initials' */
    initials: string;
    /** Accessible label for the avatar */
    label: string;
    /** Loading state indicator */
    loading: boolean;
    /** Whether the avatar is interactive (clickable) */
    interactive: boolean;
    /** The width of the avatar. This will override the size */
    width: number;
    /** The height of the avatar. This will override the size */
    height: number;
    private hasImageError;
    private isImageLoading;
    static readonly styles: CSSResult;
    private handleImageLoad;
    private handleImageError;
    private handleClick;
    private generateInitials;
    private mapSizeToSpinnerSize;
    private renderImage;
    private renderInitials;
    private renderIcon;
    private renderFallback;
    private renderLoading;
    private renderContent;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-avatar-group`
 * @summary Avatar group component displays multiple avatars in an organized layout with overflow management.
 * @element dap-ds-avatar-group
 * @title - Avatar Group
 * @group avatar
 *
 * @slot - The avatars to display in the group.
 *
 * @event dds-overflow-click - Fired when the overflow indicator is clicked.
 *
 * @csspart base - The main container of the avatar group.
 * @csspart avatars - The container for the visible avatars.
 * @csspart overflow - The overflow indicator element.
 *
 * @cssproperty --dds-avatar-group-gap - Gap between avatars in grid layout. Default is 0.
 * @cssproperty --dds-avatar-group-overlap - Overlap amount for stacked layout. Default is -8px.
 * @cssproperty --dds-avatar-group-border-width - Border width for avatars. Default is 2px.
 * @cssproperty --dds-avatar-group-border-color - Border color for avatars. Default is white.
 * @cssproperty --dds-avatar-group-overflow-bg - Background color for overflow indicator.
 * @cssproperty --dds-avatar-group-overflow-color - Text color for overflow indicator.
 * @cssproperty --dds-avatar-group-overflow-border - Border for overflow indicator.
 * @cssproperty --dds-avatar-group-size-lg - Size for large avatars. Default is 80px.
 * @cssproperty --dds-avatar-group-size-md - Size for medium avatars. Default is 64px.
 * @cssproperty --dds-avatar-group-size-sm - Size for small avatars. Default is 48px.
 * @cssproperty --dds-avatar-group-size-xs - Size for extra small avatars. Default is 32px.
 * @cssproperty --dds-avatar-group-size-xxs - Size for extra extra small avatars. Default is 24px.
 */
export declare class DapDSAvatarGroup extends DdsElement {
    private avatars;
    /** The size of avatars in the group
     * @default md
     * @type { 'xxs' | 'xs' | 'sm' | 'md' | 'lg' }
     * @example
     * ```html
     * <dap-ds-avatar-group size="xxs">
     * <dap-ds-avatar-group size="xs">
     * <dap-ds-avatar-group size="sm">
     * <dap-ds-avatar-group size="md">
     * <dap-ds-avatar-group size="lg">
     * ```
     */
    size: Size;
    /** Layout type for the avatar group
     * @default stack
     * @type { 'stack' | 'grid' }
     * @example
     * ```html
     * <dap-ds-avatar-group layout="stack">
     * <dap-ds-avatar-group layout="grid">
     * ```
     */
    layout: AvatarGroupLayout;
    /** Maximum number of avatars to show before showing overflow */
    max: number;
    /** Whether to show the total count in overflow indicator */
    showTotal: boolean;
    /** Interactive overflow indicator */
    interactiveOverflow: boolean;
    /** Accessible label for the avatar group */
    label: string;
    /** Accessible label for the overflow indicator */
    overflowLabel: string;
    static readonly styles: CSSResult;
    connectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private handleOverflowClick;
    private renderOverflowIndicator;
    private styleSlottedAvatars;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-badge`
 * @summary A badge is a small status descriptor for UI elements.
 * @element dap-ds-badge
 * @title - Badge
 *
 * @slot - The content of the badge.
 * @slot icon - The icon of the badge.
 *
 * @csspart base - The main container of the badge.
 * @csspart icon - The icon of the badge.
 * @csspart content - The content of the badge.
 * @csspart icon-base - The base of the icon.
 *
 * @cssproperty --dds-badge-border-width - The width of the badge's border. Default is the design system's base border width.
 * @cssproperty --dds-badge-border-style - The style of the badge's border. Default is solid.
 * @cssproperty --dds-badge-border-radius - The border radius of the badge. Default is the design system's base radius.
 * @cssproperty --dds-badge-font-weight - The font weight of the badge text. Default is bold.
 * @cssproperty --dds-badge-line-height - The line height of the badge text. Default is 1.2.
 * @cssproperty --dds-badge-transition - The transition property for the badge. Default is 'all 0.2s ease-in-out'.
 *
 * @cssproperty --dds-badge-padding-sm - The padding of the small badge. Default is the design system's spacing-100 and spacing-200.
 * @cssproperty --dds-badge-padding-lg - The padding of the large badge. Default is the design system's spacing-100 and spacing-300.
 * @cssproperty --dds-badge-font-size-sm - The font size of the small badge. Default is the design system's font-xs.
 * @cssproperty --dds-badge-font-size-lg - The font size of the large badge. Default is the design system's font-sm.
 *
 * @cssproperty --dds-badge-neutral-border-color - The border color of the neutral badge. Default is the design system's border-neutral-base.
 * @cssproperty --dds-badge-neutral-background - The background color of the neutral badge. Default is the design system's background-neutral-medium.
 * @cssproperty --dds-badge-neutral-color - The text color of the neutral badge. Default is the design system's text-neutral-subtle.
 *
 * @cssproperty --dds-badge-brand-border-color - The border color of the brand badge. Default is the design system's border-brand-base.
 * @cssproperty --dds-badge-brand-background - The background color of the brand badge. Default is the design system's background-brand-medium.
 * @cssproperty --dds-badge-brand-color - The text color of the brand badge. Default is the design system's text-brand-subtle.
 *
 * @cssproperty --dds-badge-info-border-color - The border color of the info badge. Default is the design system's border-informative-base.
 * @cssproperty --dds-badge-info-background - The background color of the info badge. Default is the design system's background-informative-medium.
 * @cssproperty --dds-badge-info-color - The text color of the info badge. Default is the design system's text-informative-subtle.
 *
 * @cssproperty --dds-badge-positive-border-color - The border color of the positive badge. Default is the design system's border-positive-base.
 * @cssproperty --dds-badge-positive-background - The background color of the positive badge. Default is the design system's background-positive-medium.
 * @cssproperty --dds-badge-positive-color - The text color of the positive badge. Default is the design system's text-positive-subtle.
 *
 * @cssproperty --dds-badge-warning-border-color - The border color of the warning badge. Default is the design system's border-warning-subtle.
 * @cssproperty --dds-badge-warning-background - The background color of the warning badge. Default is the design system's background-warning-medium.
 * @cssproperty --dds-badge-warning-color - The text color of the warning badge. Default is the design system's text-warning-subtle.
 *
 * @cssproperty --dds-badge-negative-border-color - The border color of the negative badge. Default is the design system's border-negative-base.
 * @cssproperty --dds-badge-negative-background - The background color of the negative badge. Default is the design system's background-negative-medium.
 * @cssproperty --dds-badge-negative-color - The text color of the negative badge. Default is the design system's text-negative-subtle.
 */
export declare class DapDSBadge extends DdsElement {
    /** The type of the badge
     * @type { 'neutral' | 'brand' | 'info' | 'positive' | 'warning' | 'negative' }
     */
    type: BadgeType_2;
    /** The size of the badge
     * @type { 'sm' | 'lg' }
     */
    size: BadgeSize;
    /** The icon of the badge, this is a name of a built in icon */
    icon?: string;
    /** Whether the badge represents dynamic content that should announce changes */
    live: boolean;
    private _hasSlottedIcon;
    private _cachedIconSize;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private setAccessibilityAttributes;
    private validateIcon;
    private setupSlotListeners;
    private updateIconSlot;
    private getIconSize;
    private renderIcon;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-banner` is a custom banner component.
 * @element dap-ds-banner
 * @summary A banner is a message displayed at the top of the page to provide important information to the user.
 * @title - Banner
 *
 * @event {{ void }} dds-close - Event fired when the banner is closed.
 *
 * @slot - The content of the banner.
 * @slot actions - Actions of banner
 * @slot icon - The icon of the banner.
 *
 * @csspart base - The main banner container.
 * @csspart card-base - The wrapper card container.
 * @csspart icon - The icon of the banner.
 * @csspart icon-element - The icon element of the banner.
 * @csspart icon-base - The base of the icon.
 * @csspart closebutton - The close button of the banner.
 * @csspart close-icon-element - The icon element of the close button.
 * @csspart close-icon-base - The base of the close button icon.
 * @csspart actions - The actions of the banner.
 * @csspart title -  The title of the banner.
 *
 * @cssproperty --dds-banner-gap - The gap between banner elements. Default is the design system's spacing-200.
 * @cssproperty --dds-banner-line-height - The line height of the banner text. Default is the design system's font-line-height-xlarge.
 * @cssproperty --dds-banner-transition - The transition property for the banner. Default is 'all 0.2s ease-in-out'.
 *
 * @cssproperty --dds-banner-brand-background - The background color of the brand banner. Default is the design system's banner-background-brand.
 * @cssproperty --dds-banner-brand-icon-color - The color of the brand banner icon. Default is the design system's banner-icon-brand.
 * @cssproperty --dds-banner-brand-text-color - The text color of the brand banner. Default is the design system's banner-text-brand.
 * @cssproperty --dds-banner-brand-action-color - The color of the brand banner actions. Default is the design system's banner-action-enabled.
 *
 * @cssproperty --dds-banner-info-background - The background color of the info banner. Default is the design system's banner-background-informative.
 * @cssproperty --dds-banner-info-icon-color - The color of the info banner icon. Default is the design system's banner-icon-informative.
 * @cssproperty --dds-banner-info-text-color - The text color of the info banner. Default is the design system's banner-text-informative.
 * @cssproperty --dds-banner-info-action-color - The color of the info banner actions. Default is the design system's banner-action-enabled.
 *
 * @cssproperty --dds-banner-positive-background - The background color of the positive banner. Default is the design system's banner-background-positive.
 * @cssproperty --dds-banner-positive-icon-color - The color of the positive banner icon. Default is the design system's banner-icon-positive.
 * @cssproperty --dds-banner-positive-text-color - The text color of the positive banner. Default is the design system's banner-text-positive.
 * @cssproperty --dds-banner-positive-action-color - The color of the positive banner actions. Default is the design system's banner-action-enabled.
 *
 * @cssproperty --dds-banner-warning-background - The background color of the warning banner. Default is the design system's banner-background-warning.
 * @cssproperty --dds-banner-warning-icon-color - The color of the warning banner icon. Default is the design system's banner-icon-warning.
 * @cssproperty --dds-banner-warning-text-color - The text color of the warning banner. Default is the design system's banner-text-warning.
 * @cssproperty --dds-banner-warning-action-color - The color of the warning banner actions. Default is the design system's banner-action-inverted-enabled.
 *
 * @cssproperty --dds-banner-negative-background - The background color of the negative banner. Default is the design system's banner-background-negative.
 * @cssproperty --dds-banner-negative-icon-color - The color of the negative banner icon. Default is the design system's banner-icon-negative.
 * @cssproperty --dds-banner-negative-text-color - The text color of the negative banner. Default is the design system's banner-text-negative.
 * @cssproperty --dds-banner-negative-action-color - The color of the negative banner actions. Default is the design system's banner-action-inverted-enabled.
 */
export declare class DapDSBanner extends DdsElement {
    /** @ignore */
    actionSlot: HTMLElement[];
    /** @ignore */
    actionContainer: HTMLElement;
    /** The variant of the banner
     * @type { 'brand' | 'positive' | 'info' | 'warning' | 'negative' }
     */
    variant: BannerVariant;
    /** Whether the banner is closeable */
    closeable: boolean;
    /** State of the banner. If false banner is hidden */
    opened: string;
    /** The aria-label for the close button */
    closeButtonLabel: string;
    /** The icon of the banner, this is a name of a built icon icon */
    icon: string;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<DapDSBanner> | Map<PropertyKey, unknown>): void;
    private onCloseClick;
    render(): TemplateResult_2 | typeof nothing;
}

/**
 * `dap-ds-breadcrumb`
 * @summary A breadcrumb is a secondary navigation scheme that reveals the user's location in a website or Web application.
 * @element dap-ds-breadcrumb
 * @title - Breadcrumb
 *
 * @slot - The content of the breadcrumb.
 * @slot separator - The separator between breadcrumb items. Default is '/'.
 *
 * @csspart base - The main breadcrumb container.
 * @csspart separator - The separator of the breadcrumb.
 *
 * @cssproperty --dds-breadcrumb-width - The width of the breadcrumb container. Default is 100%.
 * @cssproperty --dds-breadcrumb-overflow-x - The horizontal overflow behavior of the breadcrumb. Default is auto.
 * @cssproperty --dds-breadcrumb-transition - The transition property for the breadcrumb. Default is 'all 0.2s ease-in-out'.
 *
 * @cssproperty --dds-breadcrumb-list-display - The display property of the breadcrumb list. Default is flex.
 * @cssproperty --dds-breadcrumb-list-flex-wrap - The flex-wrap property of the breadcrumb list. Default is nowrap.
 * @cssproperty --dds-breadcrumb-list-align-items - The align-items property of the breadcrumb list. Default is center.
 * @cssproperty --dds-breadcrumb-list-min-width - The minimum width of the breadcrumb list. Default is max-content.
 */
export declare class DapDSBreadcrumb extends DdsElement {
    static readonly styles: CSSResult;
    /** @ignore */
    defaultSlot: HTMLSlotElement;
    /** @ignore */
    separatorSlot: HTMLSlotElement;
    variant: string;
    /** Mobile version of the breadcrumb */
    mobile: boolean;
    /** The aria-labelledby of the breadcrumb */
    ariaLabelledBy?: string;
    private _cachedItems;
    private _debounceTimeout?;
    private cloneSeparator;
    private handleSlotChange;
    private _updateBreadcrumbItems;
    render(): TemplateResult_2<1>;
}

/**
 * `dap-ds-breadcrumb-item` custom element.
 * @element dap-ds-breadcrumb-item
 * @summary A breadcrumb item is a secondary navigation scheme that reveals the user's location in a website or Web application.
 * @title - Breadcrumb item
 * @group breadcrumb
 *
 * @slot - The content of the breadcrumb item.
 * @slot separator - The separator between breadcrumb items. Default is an arrow-right-s-line icon.
 *
 * @csspart base - The main breadcrumb item container. The li element.
 * @csspart link - The link of the breadcrumb item. The dds-link component.
 * @csspart link-base - The base part of the link part. The dds-link components base part.
 * @csspart item-nolink - The item of the breadcrumb item without a link. The span element.
 * @csspart separator - The separator of the breadcrumb item.
 *
 * @cssproperty --dds-breadcrumb-item-display - The display property of the breadcrumb item. Default is inline-flex.
 * @cssproperty --dds-breadcrumb-item-flex-wrap - The flex-wrap property of the breadcrumb item. Default is nowrap.
 * @cssproperty --dds-breadcrumb-item-align-items - The align-items property of the breadcrumb item. Default is center.
 * @cssproperty --dds-breadcrumb-item-color - The text color of the breadcrumb item. Default is the design system's text-neutral-base.
 * @cssproperty --dds-breadcrumb-item-transition - The transition property for the breadcrumb item. Default is 'all 0.2s ease-in-out'.
 * @cssproperty --dds-breadcrumb-item-gap - The gap between the breadcrumb item and the separator. Default is the design system's spacing-200.
 *
 * @cssproperty --dds-breadcrumb-item-padding - The padding of the breadcrumb item. Default is the design system's spacing-200.
 * @cssproperty --dds-breadcrumb-item-font-size - The font size of the breadcrumb item. Default is the design system's font-sm.
 * @cssproperty --dds-breadcrumb-item-font-weight - The font weight of the breadcrumb item. Default is the design system's font-weight-medium.
 * @cssproperty --dds-breadcrumb-item-font-weight-bold - The bold font weight of the breadcrumb item. Default is the design system's font-weight-bold.
 *
 * @cssproperty --dds-breadcrumb-item-separator-color - The color of the separator. Default is the design system's text-neutral-disabled.
 * @cssproperty --dds-breadcrumb-item-link-color - The color of the link. Default is the design system's link-neutral-enabled.
 * @cssproperty --dds-breadcrumb-item-inverted-color - The text color when inverted. Default is the design system's text-neutral-inverted.
 * @cssproperty --dds-breadcrumb-item-inverted-link-color - The link color when inverted. Default is the design system's text-neutral-inverted.
 */
export declare class DapDSBreadcrumbItem extends DdsElement {
    /** The URL of the breadcrumb item. */
    href?: string;
    /** The target of the breadcrumb item.
     * @type {'_blank' | '_self' | '_parent' | '_top'}
     */
    target?: LinkTarget;
    /** The rel of the breadcrumb item link. */
    rel: string;
    /** Whether the breadcrumb item is disabled. */
    disabled: boolean;
    /** The variant of the breadcrumb item.
     * @type {'normal' | 'inverted'}
     */
    variant: string;
    static readonly styles: CSSResult;
    render(): TemplateResult_2<1>;
    private _shouldIncludeRel;
}

/**
 * `dap-ds-button` is a versatile button component for triggering actions and navigation.
 * @element dap-ds-button
 * @summary A button is a clickable element that can be used to trigger an action, submit forms, or navigate to other pages.
 * @title - Button
 *
 * @example Basic Usage
 * ```html
 * <dap-ds-button>Click me</dap-ds-button>
 * <dap-ds-button variant="outline">Secondary action</dap-ds-button>
 * <dap-ds-button href="/dashboard">Navigate</dap-ds-button>
 * ```
 *
 * @example Form Integration
 * ```html
 * <form>
 *   <dap-ds-button htmlType="submit">Submit Form</dap-ds-button>
 *   <dap-ds-button htmlType="reset" variant="outline">Reset</dap-ds-button>
 * </form>
 * ```
 *
 * @example Accessibility
 * ```html
 * <!-- Icon-only buttons require aria-label -->
 * <dap-ds-button aria-label="Close dialog" shape="circle">
 *   <dap-ds-icon name="close-line"></dap-ds-icon>
 * </dap-ds-button>
 * ```
 *
 * @event dds-loading-timeout - Emitted when the loading timeout is reached
 *
 * @slot - The content of the button. Can contain text, icons, or other elements.
 *
 * @csspart base - The main button container.
 * @csspart high-contrast - The high contrast part of the button.
 * @csspart content - The content wrapper inside the button.
 *
 * @cssproperty --dds-button-padding-x - Horizontal padding of the button (default: var(--dds-spacing-300))
 * @cssproperty --dds-button-padding-y - Vertical padding of the button (default: var(--dds-spacing-300))
 * @cssproperty --dds-button-border-radius - Border radius of the button (default: var(--dds-radius-rounded))
 * @cssproperty --dds-button-font-weight - Font weight of the button (default: 700)
 * @cssproperty --dds-button-line-height - Line height of the button (default: var(--dds-font-line-height-large))
 * @cssproperty --dds-button-transition - Transition property of the button (default: all 0.2s ease-in-out)
 * @cssproperty --dds-button-disabled-opacity - Opacity of disabled button (default: 0.5)
 *
 * @cssproperty --dds-button-size-lg - Size of large button (default: var(--dds-spacing-1200))
 * @cssproperty --dds-button-size-md - Size of medium button (default: var(--dds-spacing-1000))
 * @cssproperty --dds-button-size-sm - Size of small button (default: var(--dds-spacing-800))
 * @cssproperty --dds-button-size-xs - Size of extra small button (default: var(--dds-spacing-600))
 *
 * @cssproperty --dds-button-circle-lg - Size of large circle button (default: var(--dds-spacing-1200))
 * @cssproperty --dds-button-circle-md - Size of medium circle button (default: var(--dds-spacing-1000))
 * @cssproperty --dds-button-circle-sm - Size of small circle button (default: var(--dds-spacing-800))
 * @cssproperty --dds-button-circle-xs - Size of extra small circle button (default: var(--dds-spacing-600))
 *
 * Primary button properties:
 * @cssproperty --dds-button-primary-color-bg - Background color of primary button (default: var(--dds-button-primary-background-enabled))
 * @cssproperty --dds-button-primary-color-bg-hover - Background color of primary button on hover (default: var(--dds-button-primary-background-hover))
 * @cssproperty --dds-button-primary-color-bg-active - Background color of primary button when active (default: var(--dds-button-primary-background-pressed))
 * @cssproperty --dds-button-primary-color-bg-disabled - Background color of disabled primary button (default: var(--dds-button-primary-background-disabled))
 * @cssproperty --dds-button-primary-color-text - Text color of primary button (default: var(--dds-button-primary-text-enabled))
 * @cssproperty --dds-button-primary-color-text-disabled - Text color of disabled primary button (default: var(--dds-button-primary-text-disabled))
 *
 * Primary inverted button properties:
 * @cssproperty --dds-button-primary-inverted-color-bg - Background color of primary inverted button (default: var(--dds-button-primary-background-inverted-enabled))
 * @cssproperty --dds-button-primary-inverted-color-bg-hover - Background color of primary inverted button on hover (default: var(--dds-button-primary-background-inverted-hover))
 * @cssproperty --dds-button-primary-inverted-color-bg-active - Background color of primary inverted button when active (default: var(--dds-button-primary-background-inverted-pressed))
 * @cssproperty --dds-button-primary-inverted-color-bg-disabled - Background color of disabled primary inverted button (default: var(--dds-button-primary-background-inverted-disabled))
 * @cssproperty --dds-button-primary-inverted-color-text - Text color of primary inverted button (default: var(--dds-button-primary-text-inverted))
 * @cssproperty --dds-button-primary-inverted-color-text-disabled - Text color of disabled primary inverted button (default: var(--dds-button-primary-text-inverted-disabled))
 *
 * Outline button properties:
 * @cssproperty --dds-button-outline-color-border - Border color of outline button (default: var(--dds-button-outline-border-enabled))
 * @cssproperty --dds-button-outline-color-border-hover - Border color of outline button on hover (default: var(--dds-button-outline-border-hover))
 * @cssproperty --dds-button-outline-color-border-active - Border color of outline button when active (default: var(--dds-button-outline-border-pressed))
 * @cssproperty --dds-button-outline-color-border-disabled - Border color of disabled outline button (default: var(--dds-button-outline-border-disabled))
 * @cssproperty --dds-button-outline-color-text - Text color of outline button (default: var(--dds-button-outline-text-enabled))
 * @cssproperty --dds-button-outline-color-text-hover - Text color of outline button on hover (default: var(--dds-button-outline-text-hover))
 * @cssproperty --dds-button-outline-color-text-active - Text color of outline button when active (default: var(--dds-button-outline-text-pressed))
 * @cssproperty --dds-button-outline-color-text-disabled - Text color of disabled outline button (default: var(--dds-button-outline-text-disabled))
 *
 * Outline inverted button properties:
 * @cssproperty --dds-button-outline-inverted-color-border - Border color of outline inverted button (default: var(--dds-button-outline-border-inverted-enabled))
 * @cssproperty --dds-button-outline-inverted-color-border-hover - Border color of outline inverted button on hover (default: var(--dds-button-outline-border-inverted-hover))
 * @cssproperty --dds-button-outline-inverted-color-border-active - Border color of outline inverted button when active (default: var(--dds-button-outline-border-inverted-pressed))
 * @cssproperty --dds-button-outline-inverted-color-border-disabled - Border color of disabled outline inverted button (default: var(--dds-button-outline-border-inverted-disabled))
 * @cssproperty --dds-button-outline-inverted-color-text - Text color of outline inverted button (default: var(--dds-button-outline-text-inverted-enabled))
 * @cssproperty --dds-button-outline-inverted-color-text-hover - Text color of outline inverted button on hover (default: var(--dds-button-outline-text-inverted-hover))
 * @cssproperty --dds-button-outline-inverted-color-text-active - Text color of outline inverted button when active (default: var(--dds-button-outline-text-inverted-pressed))
 * @cssproperty --dds-button-outline-inverted-color-text-disabled - Text color of disabled outline inverted button (default: var(--dds-button-outline-text-inverted-disabled))
 *
 * Subtle button properties:
 * @cssproperty --dds-button-subtle-color-bg - Background color of subtle button (default: var(--dds-button-subtle-background-enabled))
 * @cssproperty --dds-button-subtle-color-bg-hover - Background color of subtle button on hover (default: var(--dds-button-subtle-background-hover))
 * @cssproperty --dds-button-subtle-color-bg-active - Background color of subtle button when active (default: var(--dds-button-subtle-background-pressed))
 * @cssproperty --dds-button-subtle-color-bg-disabled - Background color of disabled subtle button (default: var(--dds-button-subtle-background-disabled))
 * @cssproperty --dds-button-subtle-color-border - Border color of subtle button (default: var(--dds-button-subtle-border-enabled))
 * @cssproperty --dds-button-subtle-color-border-hover - Border color of subtle button on hover (default: var(--dds-button-subtle-border-hover))
 * @cssproperty --dds-button-subtle-color-border-active - Border color of subtle button when active (default: var(--dds-button-subtle-border-pressed))
 * @cssproperty --dds-button-subtle-color-border-disabled - Border color of disabled subtle button (default: var(--dds-button-subtle-border-disabled))
 * @cssproperty --dds-button-subtle-color-text - Text color of subtle button (default: var(--dds-button-subtle-text-enabled))
 * @cssproperty --dds-button-subtle-color-text-hover - Text color of subtle button on hover (default: var(--dds-button-subtle-text-hover))
 * @cssproperty --dds-button-subtle-color-text-active - Text color of subtle button when active (default: var(--dds-button-subtle-text-pressed))
 * @cssproperty --dds-button-subtle-color-text-disabled - Text color of disabled subtle button (default: var(--dds-button-subtle-text-disabled))
 *
 * Clean button properties:
 * @cssproperty --dds-button-clean-color-text - Text color of clean button (default: var(--dds-text-link-base))
 * @cssproperty --dds-button-clean-color-text-hover - Text color of clean button on hover (default: var(--dds-text-link-hover))
 * @cssproperty --dds-button-clean-color-text-active - Text color of clean button when active (default: var(--dds-text-link-pressed))
 * @cssproperty --dds-button-clean-color-text-disabled - Text color of disabled clean button (default: var(--dds-text-neutral-disabled))
 *
 * Clean inverted button properties:
 * @cssproperty --dds-button-clean-inverted-color-text - Text color of clean inverted button (default: var(--dds-button-primary-text-inverted))
 * @cssproperty --dds-button-clean-inverted-color-text-hover - Text color of clean inverted button on hover (default: var(--dds-button-primary-text-inverted))
 * @cssproperty --dds-button-clean-inverted-color-text-active - Text color of clean inverted button when active (default: var(--dds-button-primary-text-inverted))
 * @cssproperty --dds-button-clean-inverted-color-text-disabled - Text color of disabled clean inverted button (default: var(--dds-text-neutral-disabled))
 *
 * Danger button properties:
 * @cssproperty --dds-button-danger-color-bg - Background color of danger button (default: var(--dds-button-primary-background-destructive-enabled))
 * @cssproperty --dds-button-danger-color-bg-hover - Background color of danger button on hover (default: var(--dds-button-primary-background-destructive-hover))
 * @cssproperty --dds-button-danger-color-bg-active - Background color of danger button when active (default: var(--dds-button-primary-background-destructive-pressed))
 * @cssproperty --dds-button-danger-color-text - Text color of danger button (default: var(--dds-button-primary-text-enabled))
 * @cssproperty --dds-button-danger-outline-color-border - Border color of danger outline button (default: var(--dds-button-outline-border-destructive-enabled))
 * @cssproperty --dds-button-danger-outline-color-border-hover - Border color of danger outline button on hover (default: var(--dds-button-outline-border-destructive-hover))
 * @cssproperty --dds-button-danger-outline-color-border-active - Border color of danger outline button when active (default: var(--dds-button-outline-border-destructive-pressed))
 * @cssproperty --dds-button-danger-outline-color-text - Text color of danger outline button (default: var(--dds-button-outline-text-destructive-enabled))
 * @cssproperty --dds-button-danger-outline-color-text-hover - Text color of danger outline button on hover (default: var(--dds-button-outline-text-destructive-hover))
 * @cssproperty --dds-button-danger-outline-color-text-active - Text color of danger outline button when active (default: var(--dds-button-outline-text-destructive-pressed))
 * @cssproperty --dds-button-danger-subtle-color-bg - Background color of danger subtle button (default: var(--dds-button-subtle-background-destructive-enabled))
 * @cssproperty --dds-button-danger-subtle-color-bg-hover - Background color of danger subtle button on hover (default: var(--dds-button-subtle-background-destructive-hover))
 * @cssproperty --dds-button-danger-subtle-color-bg-active - Background color of danger subtle button when active (default: var(--dds-button-subtle-background-destructive-pressed))
 * @cssproperty --dds-button-danger-subtle-color-text - Text color of danger subtle button (default: var(--dds-button-subtle-text-destructive-enabled))
 * @cssproperty --dds-button-danger-subtle-color-text-hover - Text color of danger subtle button on hover (default: var(--dds-button-subtle-text-destructive-hover))
 * @cssproperty --dds-button-danger-subtle-color-text-active - Text color of danger subtle button when active (default: var(--dds-button-subtle-text-destructive-pressed))
 * @cssproperty --dds-button-danger-clean-color-text - Text color of danger clean button (default: var(--dds-text-negative-subtle))
 * @cssproperty --dds-button-danger-clean-color-text-hover - Text color of danger clean button on hover (default: var(--dds-text-negative-base))
 * @cssproperty --dds-button-danger-clean-color-text-active - Text color of danger clean button when active (default: var(--dds-text-negative-strong))
 */
export declare class DapDSButton extends GenericFormElement {
    /**
     * @ignore
     */
    readonly button: HTMLButtonElement | HTMLLinkElement;
    /** The visual style variant of the button
     * @type { 'primary' | 'outline' | 'subtle' | 'subtle-neutral' | 'subtle-quiet' | 'subtle-quiet-inverted' | 'clean' | 'primary-inverted' | 'outline-inverted' | 'subtle-inverted' | 'clean-inverted' | 'subtle-menu' | 'subtle-menu-item' }
     * @default 'primary'
     * @example
     * ```html
     * <dap-ds-button variant="primary">Primary action</dap-ds-button>
     * <dap-ds-button variant="outline">Secondary action</dap-ds-button>
     * <dap-ds-button variant="subtle">Tertiary action</dap-ds-button>
     * ```
     * @group Visual
     */
    variant: ButtonVariant;
    /** The size of the button affecting padding and font size
     * @type { 'lg' | 'md' | 'sm' | 'xs' }
     * @default 'md'
     * @example
     * ```html
     * <dap-ds-button size="xs">Extra small</dap-ds-button>
     * <dap-ds-button size="sm">Small</dap-ds-button>
     * <dap-ds-button>Medium (default)</dap-ds-button>
     * <dap-ds-button size="lg">Large</dap-ds-button>
     * ```
     * @group Visual
     */
    size: ButtonSize_2;
    /** Whether the button is in loading state, showing a spinner and disabling interaction
     * @default false
     * @example
     * ```html
     * <dap-ds-button loading>Submitting...</dap-ds-button>
     * ```
     * @group State
     */
    loading: boolean;
    /** Whether the button represents a destructive action (applies danger styling)
     * @default false
     * @example
     * ```html
     * <dap-ds-button danger>Delete Account</dap-ds-button>
     * <dap-ds-button variant="outline" danger>Remove Item</dap-ds-button>
     * ```
     * @group State
     */
    danger: boolean;
    /** The shape of the button - use 'circle' for icon-only buttons
     * @type { 'button' | 'circle' }
     * @default 'button'
     * @example
     * ```html
     * <dap-ds-button shape="circle" aria-label="Close">
     *   <dap-ds-icon name="close-line"></dap-ds-icon>
     * </dap-ds-button>
     * ```
     * @group Visual
     */
    shape: ButtonShape;
    /** The HTML type attribute for form interaction
     * @type { 'button' | 'submit' | 'reset' }
     * @default 'button'
     * @example
     * ```html
     * <form>
     *   <dap-ds-button htmlType="submit">Submit</dap-ds-button>
     *   <dap-ds-button htmlType="reset">Reset</dap-ds-button>
     * </form>
     * ```
     * @group Form
     */
    htmlType: HtmlButtonType;
    /** The URL to navigate to. When present, the button renders as an anchor element
     * @example
     * ```html
     * <dap-ds-button href="/dashboard">Go to Dashboard</dap-ds-button>
     * <dap-ds-button href="https://example.com" target="_blank">External Link</dap-ds-button>
     * ```
     * @group Navigation
     */
    href?: string;
    /** The target attribute for link navigation
     * @type { '_blank' | '_self' | '_parent' | '_top' }
     * @default '_self'
     * @example
     * ```html
     * <dap-ds-button href="https://example.com" target="_blank">Open in new tab</dap-ds-button>
     * ```
     * @group Navigation
     */
    target: LinkTarget;
    /** The rel attribute for link security and behavior
     * @default 'noreferrer noopener'
     * @example
     * ```html
     * <dap-ds-button href="https://example.com" rel="noopener">Safe external link</dap-ds-button>
     * ```
     * @group Navigation
     */
    rel?: string;
    /** The ID of the element controlled by this button
     * @example
     * ```html
     * <dap-ds-button aria-controls="menu-1" aria-expanded="false">Menu</dap-ds-button>
     * <div id="menu-1">Menu content</div>
     * ```
     * @group Accessibility
     */
    ariaControls?: string;
    /** The ID of the element that describes the button
     * @example
     * ```html
     * <dap-ds-button aria-describedby="help-text">Submit</dap-ds-button>
     * <div id="help-text">This will submit your form data</div>
     * ```
     * @group Accessibility
     */
    ariaDescribedBy?: string;
    /** Controls loading timeout in milliseconds
     * @default 0
     * @group State
     */
    loadingTimeout: number;
    /** Enables high contrast theme toggle functionality (internal use)
     * @default false
     * @ignore
     */
    hc: boolean;
    /** Whether the button is active
     * @default false
     * @example
     * ```html
     * <dap-ds-button active>Active</dap-ds-button>
     * ```
     */
    active: boolean;
    static readonly styles: CSSResult;
    private loadingTimer?;
    private getSecureRel;
    private validateAriaExpanded;
    private validateAriaPressed;
    private validateProperties;
    private isValidUrl;
    private handleClick;
    private toggleHighContrast;
    private startLoadingTimeout;
    private clearLoadingTimeout;
    focus(options?: FocusOptions): void;
    /**
     * @ignore
     */
    get focusElement(): HTMLLinkElement | HTMLButtonElement;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    disconnectedCallback(): void;
    render(): TemplateResult_2;
    private getLoadingIconSize;
    private _getLoadingSpinner;
}

/**
 * `dap-ds-calendar`
 * @summary A calendar is a visual representation of dates. It allows users to select a date.
 * @element dap-ds-calendar
 * @title - Calendar
 *
 * @event {{ value: Dayjs }} dds-change - Fired when the calendar value changes.
 *
 * @slot - The content of the calendar.
 *
 * @csspart base - The main calendar container.
 * @csspart header - The header of the calendar.
 * @csspart body - The body of the calendar.
 *
 * @cssproperty --dds-calendar-display - The display property of the calendar container. Default is flex.
 * @cssproperty --dds-calendar-isolation - The isolation property of the calendar. Default is isolate.
 * @cssproperty --dds-calendar-block-display - The display property of the calendar block. Default is block.
 * @cssproperty --dds-calendar-transition - The transition property for the calendar. Default is 'all 0.2s ease-in-out'.
 *
 * @cssproperty --dds-calendar-header-display - The display property of the calendar header. Default is grid.
 * @cssproperty --dds-calendar-header-grid-flow - The grid-auto-flow property of the calendar header. Default is column.
 * @cssproperty --dds-calendar-header-width - The width of the calendar header. Default is 100%.
 * @cssproperty --dds-calendar-header-gap - The gap between header items. Default is the design system's spacing-100.
 *
 * @cssproperty --dds-calendar-select-min-height - The minimum height of the select trigger. Default is auto.
 * @cssproperty --dds-calendar-select-max-height - The maximum height of the select trigger. Default is 32px.
 * @cssproperty --dds-calendar-select-padding - The padding of the select trigger. Default is the design system's spacing-200.
 * @cssproperty --dds-calendar-select-border-radius - The border radius of the select trigger. Default is the design system's radius-rounded.
 * @cssproperty --dds-calendar-select-border-color - The border color of the select trigger. Default is the design system's border-neutral-transparent-interactive.
 * @cssproperty --dds-calendar-select-background - The background color of the select trigger. Default is the design system's button-subtle-background-enabled.
 * @cssproperty --dds-calendar-select-color - The text color of the select trigger. Default is the design system's button-subtle-text-enabled.
 * @cssproperty --dds-calendar-select-font-size - The font size of the select trigger. Default is the design system's font-sm.
 * @cssproperty --dds-calendar-select-font-style - The font style of the select trigger. Default is normal.
 * @cssproperty --dds-calendar-select-font-weight - The font weight of the select trigger. Default is the design system's font-weight-bold.
 *
 * @cssproperty --dds-calendar-nav-button-margin - The margin of the navigation buttons. Default is the design system's spacing-200.
 * @cssproperty --dds-calendar-nav-button-color - The color of the navigation button icons. Default is the design system's button-subtle-icon-enabled.
 */
export declare class DapDSCalendar extends DdsElement {
    private readonly cells;
    private readonly monthSelect;
    /** The value of the calendar.
     * @type {Dayjs}
     */
    value?: Dayjs;
    /** The current visible date of the calendar. Only the month and year are considered.
     * @type {Dayjs}
     * @default dayjs()
     */
    currentDate: default_2.Dayjs;
    /** The minimum date of the calendar. Only the month and year are considered.
     * @type {Dayjs}
     * @default dayjs().subtract(50, 'year')
     */
    minDate: default_2.Dayjs;
    /** The maximum date of the calendar. Only the month and year are considered.
     * @type {Dayjs}
     * @default dayjs().add(50, 'year')
     */
    maxDate: default_2.Dayjs;
    /** The function to determine if the date is disabled.
     * @type {Function}
     * @default () => false
     */
    disabledDate: (date: Dayjs) => boolean;
    /** The locale of the calendar.
     * @type {string}
     * @default dayjs.locale()
     */
    locale: string;
    private _currentCell;
    private _yearOptionsLoaded;
    private instanceLocalData;
    connectedCallback(): Promise<void>;
    static readonly styles: CSSResult;
    get startDate(): default_2.Dayjs;
    get endDate(): default_2.Dayjs;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
    private readonly updateLocale;
    private readonly updateLocaleFromHtml;
    setValue(value?: Dayjs, setFocus?: boolean): void;
    private readonly getWeeksInMonth;
    private loadYearOptions;
    isOutOfRange(currentDate: Dayjs, date: Dayjs): boolean;
    isToday(date: Dayjs): boolean;
    isSelected(date: Dayjs): boolean;
    getDatesInWeek(week: number, from: Dayjs): default_2.Dayjs[];
    isDateInAllowedRange(date: Dayjs): boolean;
    isMonthInAllowedRange(year: number, month: number): boolean;
    isDateInAllowedRangeByDate(year: number, month: number, date: number): boolean;
    getAllowedMonths(currentDate: Dayjs): string[];
    setMonth(month: number): void;
    setDay(day: number): void;
    setYear(year: number): void;
    setSelectedDate(date: Dayjs): void;
    getFirstDayOfMonthCell(): DapDSCalendarCell | undefined;
    getCellByDate(date: Dayjs): DapDSCalendarCell | undefined;
    handleKeyDown(event: KeyboardEvent): void;
    setCurrentCell(cell: DapDSCalendarCell, setFocus?: boolean): void;
    setFocusToCurrentCell(): void;
    setToFirstDayOfMonth(): void;
    setToToday(): void;
    setToFirstAllowedDayOfMonth(currentDate?: default_2.Dayjs): void;
    focusNextCell(element: DapDSCalendarCell, offset: number): void;
    captureFocus(): void;
    private getWeekdaysMin;
    renderCalendarGridHeader(): TemplateResult_2;
    renderCalendarGridBody(date: Dayjs): TemplateResult_2;
    renderCalendarHeader(): TemplateResult_2;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-calendar-cell`
 * @summary Calendar cell represents a single cell in the calendar.
 * @element dap-ds-calendar-cell
 * @title - Calendar cell
 * @group calendar
 *
 * @slot - The content of the calendar cell.
 *
 * @csspart base - The main calendar cell container.
 * @csspart today-mark - The today mark of the calendar cell.
 *
 */
export declare class DapDSCalendarCell extends DapDSCalendarCell_base {
    /** The value of the calendar cell. */
    value: Dayjs;
    /** Whether the calendar cell is selected. */
    selected: boolean;
    /** Whether the calendar cell is disabled. */
    disabledDay: boolean;
    /** Whether the calendar cell is today. */
    today: boolean;
    /** Whether the calendar cell is out of range. */
    outOfRange: boolean;
    /** Whether the calendar cell is a date header. */
    header: boolean;
    /** Whether the calendar cell is focused. */
    focused: boolean;
    private _cachedLabel;
    private _lastLabelUpdate;
    static readonly styles: CSSResult;
    get label(): string;
    get focusElement(): HTMLElement;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    getDayName(dateStr: string, locale: string): string;
    render(): TemplateResult_2;
}

declare const DapDSCalendarCell_base: typeof DdsElement & {
    new (...args: any[]): FocusableElementInterface;
    prototype: FocusableElementInterface;
};

/**
 * `dap-ds-callout` is a custom callout component.
 * @element dap-ds-callout
 * @title - Callout
 *
 * @event {{ void }} dds-close - Fired when the close button is clicked.
 *
 * @slot - The content of the callout.
 * @slot title - The title of the callout.
 * @slot icon - The icon of the callout.
 * @slot actions - The actions of the callout.
 * @slot close - The close button of the callout.
 *
 * @csspart base - The main callout container.
 * @csspart icon - The icon of the callout.
 * @csspart title - The title of the callout.
 * @csspart description - The description of the callout.
 * @csspart actions - The actions of the callout.
 * @csspart close - The close button of the callout.
 *
 * @cssproperty --dds-callout-padding - Padding of the callout content. Default: var(--dds-spacing-300)
 * @cssproperty --dds-callout-gap - Gap between elements in horizontal layout. Default: var(--dds-spacing-300)
 * @cssproperty --dds-callout-icon-size - Size of the icon. Default: var(--dds-spacing-600)
 * @cssproperty --dds-callout-title-color - Color of the title text. Default: var(--dds-text-neutral-strong)
 * @cssproperty --dds-callout-description-color - Color of the description text. Default: var(--dds-text-neutral-base)
 * @cssproperty --dds-callout-title-font-size - Font size of the title. Default: var(--dds-font-base)
 * @cssproperty --dds-callout-description-font-size - Font size of the description. Default: var(--dds-font-base)
 * @cssproperty --dds-callout-title-font-weight - Font weight of the title. Default: var(--dds-font-weight-bold)
 * @cssproperty --dds-callout-description-font-weight - Font weight of the description. Default: var(--dds-font-weight-medium)
 * @cssproperty --dds-callout-actions-font-weight - Font weight of the actions. Default: var(--dds-font-weight-bold)
 * @cssproperty --dds-callout-actions-gap - Gap between action items. Default: var(--dds-spacing-400)
 * @cssproperty --dds-callout-content-gap - Gap between content elements. Default: var(--dds-spacing-100)
 * @cssproperty --dds-callout-border-radius - Border radius of the callout. Default: var(--dds-radius-base)
 *
 * @cssproperty --dds-callout-brand-background - Brand variant background color. Default: var(--dds-background-brand-base)
 * @cssproperty --dds-callout-brand-background-subtle - Brand variant subtle background color. Default: var(--dds-background-brand-subtle)
 * @cssproperty --dds-callout-brand-background-medium - Brand variant medium background color. Default: var(--dds-background-brand-medium)
 * @cssproperty --dds-callout-brand-background-strong - Brand variant strong background color. Default: var(--dds-background-brand-strong)
 * @cssproperty --dds-callout-brand-icon - Brand variant icon color. Default: var(--dds-icon-brand-subtle)
 * @cssproperty --dds-callout-brand-border - Brand variant border color. Default: var(--dds-border-brand-subtle)
 *
 * @cssproperty --dds-callout-info-background - Info variant background color. Default: var(--dds-background-informative-base)
 * @cssproperty --dds-callout-info-background-subtle - Info variant subtle background color. Default: var(--dds-background-informative-subtle)
 * @cssproperty --dds-callout-info-background-medium - Info variant medium background color. Default: var(--dds-background-informative-medium)
 * @cssproperty --dds-callout-info-background-strong - Info variant strong background color. Default: var(--dds-background-informative-strong)
 * @cssproperty --dds-callout-info-icon - Info variant icon color. Default: var(--dds-icon-informative-subtle)
 * @cssproperty --dds-callout-info-border - Info variant border color. Default: var(--dds-border-informative-subtle)
 *
 * @cssproperty --dds-callout-positive-background - Positive variant background color. Default: var(--dds-background-positive-base)
 * @cssproperty --dds-callout-positive-background-subtle - Positive variant subtle background color. Default: var(--dds-background-positive-subtle)
 * @cssproperty --dds-callout-positive-background-medium - Positive variant medium background color. Default: var(--dds-background-positive-medium)
 * @cssproperty --dds-callout-positive-background-strong - Positive variant strong background color. Default: var(--dds-background-positive-strong)
 * @cssproperty --dds-callout-positive-icon - Positive variant icon color. Default: var(--dds-icon-positive-subtle)
 * @cssproperty --dds-callout-positive-border - Positive variant border color. Default: var(--dds-border-positive-subtle)
 *
 * @cssproperty --dds-callout-warning-background - Warning variant background color. Default: var(--dds-background-warning-base)
 * @cssproperty --dds-callout-warning-background-subtle - Warning variant subtle background color. Default: var(--dds-background-warning-subtle)
 * @cssproperty --dds-callout-warning-background-medium - Warning variant medium background color. Default: var(--dds-background-warning-medium)
 * @cssproperty --dds-callout-warning-background-strong - Warning variant strong background color. Default: var(--dds-background-warning-strong)
 * @cssproperty --dds-callout-warning-icon - Warning variant icon color. Default: var(--dds-icon-neutral-strong)
 * @cssproperty --dds-callout-warning-border - Warning variant border color. Default: var(--dds-border-warning-subtle)
 *
 * @cssproperty --dds-callout-negative-background - Negative variant background color. Default: var(--dds-background-negative-base)
 * @cssproperty --dds-callout-negative-background-subtle - Negative variant subtle background color. Default: var(--dds-background-negative-subtle)
 * @cssproperty --dds-callout-negative-background-medium - Negative variant medium background color. Default: var(--dds-background-negative-medium)
 * @cssproperty --dds-callout-negative-background-strong - Negative variant strong background color. Default: var(--dds-background-negative-strong)
 * @cssproperty --dds-callout-negative-icon - Negative variant icon color. Default: var(--dds-icon-negative-subtle)
 * @cssproperty --dds-callout-negative-border - Negative variant border color. Default: var(--dds-border-negative-subtle)
 */
export declare class DapDSCallout extends DdsElement {
    /** @ignore */
    actionSlot: Element[];
    /** The variant of the callout
     * @type { 'brand' | 'positive' | 'info' | 'warning' | 'negative' }
     */
    variant: CalloutVariant;
    /** The alignment of the callout. Can be `vertical` or `horizontal`.
     * @type { 'vertical' | 'horizontal' }
     */
    alignment: Alignment;
    /** The strongness of the callout colors. Can be `subtle`, `base`, `medium`, or `strong`.
     * @type { 'subtle' | 'base' | 'medium' | 'strong' }
     */
    shade: BackgroundShade;
    /** If the callout has a border */
    noBorder: string;
    /** If the callout has a close button */
    closeable: boolean;
    /** The header of the callout */
    title: string;
    /** The label of the close button */
    closeButtonLabel: string;
    /** If the callout is opened */
    opened: string;
    static readonly styles: CSSResult;
    private get hasActions();
    private static readonly defaultIcons;
    getDefaultIcon(variant: CalloutVariant): TemplateResult_2;
    handleClose(): void;
    private handleKeyDown;
    render(): TemplateResult_2 | typeof nothing;
}

/**
 * `dap-ds-card`
 * @summary A card is a container for content, actions, and images in a consistent format.
 * @element dap-ds-card
 * @title - Card
 *
 * @property {'sm' | 'md' | 'lg'} size - The size of the card title. Default is `sm`.
 *
 * @slot - The content of the card.
 *
 * @csspart base - The main card container.
 *
 * @cssproperty --dds-card-padding - The padding of the card. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-border-radius - The border radius of the card. Default is `var(--dds-radius-large)`.
 * @cssproperty --dds-card-border-width - The border width of the card. Default is `var(--dds-border-width-base)`.
 * @cssproperty --dds-card-border-color - The border color of the card. Default is `var(--dds-border-neutral-divider)`.
 * @cssproperty --dds-card-background - The background color of the card. Default is `var(--dds-background-neutral-base)`.
 * @cssproperty --dds-card-hover-border-color - The border color when hovering over the card. Default is `var(--dds-border-brand-base)`.
 * @cssproperty --dds-card-active-border-color - The border color when the card is active. Default is `var(--dds-border-brand-medium)`.
 * @cssproperty --dds-card-shadow - The box shadow of the card. Default is `none`.
 * @cssproperty --dds-card-hover-shadow - The box shadow when hovering over the card. Default is `none`.
 * @cssproperty --dds-card-transition-duration - The duration of the card's transitions. Default is `var(--dds-transition-medium)`.
 * @cssproperty --dds-card-transition-timing - The timing function of the card's transitions. Default is `var(--dds-easing-ease-in-out)`.
 */
export declare class DapDSCard extends DapDSCard_base {
    /** Whether the card is interactive. Default is false. If true, the card will be rendered as an anchor element. */
    interactive: boolean;
    /**
     * The render as type of the card, only applicable when interactive.
     * @type {'a' | 'button'}
     */
    renderAs: 'a' | 'button';
    /** Whether the card is disabled. */
    disabled: boolean;
    /** Removes the border around the card */
    noBorder: boolean;
    /** Removes the padding around the card */
    noPadding: boolean;
    /** The link target of the card
     * @type { '_blank' | '_self' | '_parent' | '_top' }
     */
    target: LinkTarget;
    /** The URL of the card. */
    href: string;
    /** The rel of the card link. */
    rel: string;
    static readonly styles: CSSResult;
    focus(options?: FocusOptions): void;
    render(): TemplateResult_2;
}

declare const DapDSCard_base: typeof DdsElement & {
    new (...args: any[]): SizedElementInterface;
    prototype: SizedElementInterface;
};

/**
 * `dap-ds-card-actions`
 * @summary A card actions is a container for actions in a card.
 * @element dap-ds-card-actions
 * @title - Card actions
 * @group card
 *
 * @property {'sm' | 'md' | 'lg'} size - The size of the card actions. Default is `sm`.
 * @property {'top' | 'bottom' | 'both' | 'none'} spacing - The spacing of the card actions. This adds a margin to the card actions. Default is `bottom`.
 *
 * @slot - The content of the card actions.
 *
 * @csspart base - The main card actions container.
 *
 * @cssproperty --dds-card-actions-gap - The gap between items in the card actions. Default is `var(--dds-spacing-200)`.
 * @cssproperty --dds-card-actions-padding-lg - The padding for large size card actions. Default is `var(--dds-spacing-600)`.
 * @cssproperty --dds-card-actions-padding-md - The padding for medium size card actions. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-actions-padding-sm - The padding for small size card actions. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-actions-margin-lg - The margin for large size card actions spacing. Default is `var(--dds-spacing-600)`.
 * @cssproperty --dds-card-actions-margin-md - The margin for medium size card actions spacing. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-actions-margin-sm - The margin for small size card actions spacing. Default is `var(--dds-spacing-400)`.
 */
export declare class DapDSCardActions extends DapDSCardActions_base {
    /** Whether the card actions should be sized from the parent. */
    parentSized: string;
    static readonly styles: CSSResult;
    constructor();
    render(): TemplateResult_2;
}

declare const DapDSCardActions_base: typeof DdsElement & {
    new (...args: any[]): SizedElementInterface;
    prototype: SizedElementInterface;
};

/**
 * `dap-ds-card-content`
 * @summary A card content is a container for content in a card.
 * @element dap-ds-card-content
 * @title - Card content
 * @group card
 *
 * @property {'sm' | 'md' | 'lg'} size - The size of the card subtitle. Default is `sm`.
 * @property {'top' | 'bottom' | 'both' | 'none'} spacing - The spacing of the card content. This adds a margin to the card subtitle. Default is `bottom`.
 *
 * @slot - The content of the card-content.
 *
 * @csspart base - The main card content container.
 *
 * @cssproperty --dds-card-content-padding - The padding of the card content. Default is `0`.
 * @cssproperty --dds-card-content-margin - The margin of the card content. Default is `0`.
 * @cssproperty --dds-card-content-font-size - The font size of the card content. Default is `var(--dds-font-base)`.
 * @cssproperty --dds-card-content-line-height - The line height of the card content. Default is `var(--dds-font-line-height-xlarge)`.
 * @cssproperty --dds-card-content-spacing-lg - The large spacing value. Default is `var(--dds-spacing-600)`.
 * @cssproperty --dds-card-content-spacing-md - The medium spacing value. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-content-spacing-sm - The small spacing value. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-content-spacing-top - The top spacing value. Default is `0`.
 * @cssproperty --dds-card-content-spacing-bottom - The bottom spacing value. Default is `0`.
 */
export declare class DapDSCardContent extends DapDSCardContent_base {
    /** The base rendered root tag of the card content. */
    renderAs: string;
    /** Whether the card content should be sized from the parent. */
    parentSized: string;
    static readonly styles: CSSResult;
    constructor();
    render(): TemplateResult_2;
}

declare const DapDSCardContent_base: typeof DdsElement & {
    new (...args: any[]): SizedElementInterface;
    prototype: SizedElementInterface;
};

/**
 * `dap-ds-card-image`
 * @summary A card image is a container for images in a card.
 * @element dap-ds-card-image
 * @title - Card image
 * @group card
 *
 * @slot - The default slot for the image. The slot can accept any element, for example a video. If nothing is added to the slot, the image will be rendered.
 *
 * @csspart base - The main card image container.
 *
 * @cssproperty --dds-card-image-width - The width of the image. Default is `100%`.
 * @cssproperty --dds-card-image-height - The height of the image. Default is `auto`.
 * @cssproperty --dds-card-image-object-fit - How the image fits within its container. Default is `cover`.
 * @cssproperty --dds-card-image-background-position - The background position of the image. Default is `center`.
 * @cssproperty --dds-card-image-background-size - How the background image is sized. Default is `cover`.
 * @cssproperty --dds-card-image-background-repeat - How the background image repeats. Default is `no-repeat`.
 */
export declare class DapDSCardImage extends DdsElement {
    /** The source of the image.*/
    src: string;
    /** The alt text of the image.*/
    alt: string;
    /** The width of the image.*/
    width: number;
    /** The height of the image.*/
    height: number;
    static readonly styles: CSSResult;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-card-subtitle`
 * @summary Subtitle of the card
 * @element dap-ds-card-subtitle
 * @title - Card subtitle
 * @group card
 *
 * @property {'sm' | 'lg'} size - The size of the card subtitle. Default is `sm`.
 * @property {'top' | 'bottom' | 'both' | 'none'} spacing - The spacing of the card subtitle. This adds a margin to the card subtitle. Default is `top`.
 *
 * @slot - The content of the subtitle.
 *
 * @csspart base - The subtitle container.
 *
 * @cssproperty --dds-card-subtitle-color - The color of the subtitle text. Default is `var(--dds-text-neutral-subtle)`.
 * @cssproperty --dds-card-subtitle-font-size - The font size of the subtitle. Default is `var(--dds-font-xs)`.
 * @cssproperty --dds-card-subtitle-font-weight - The font weight of the subtitle. Default is `var(--dds-font-weight-bold)`.
 * @cssproperty --dds-card-subtitle-line-height - The line height of the subtitle. Default is `var(--dds-font-line-height-large)`.
 *
 * @cssproperty --dds-card-subtitle-padding-sm - The padding for small size. Default is `0 var(--dds-spacing-400)`.
 * @cssproperty --dds-card-subtitle-padding-md - The padding for medium size. Default is `0 var(--dds-spacing-400)`.
 * @cssproperty --dds-card-subtitle-padding-lg - The padding for large size. Default is `0 var(--dds-spacing-600)`.
 *
 * @cssproperty --dds-card-subtitle-margin-sm - The base margin for small size. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-subtitle-margin-md - The base margin for medium size. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-subtitle-margin-lg - The base margin for large size. Default is `var(--dds-spacing-600)`.
 *
 * @cssproperty --dds-card-subtitle-spacing-top-sm - The top spacing for small size. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-subtitle-spacing-top-md - The top spacing for medium size. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-subtitle-spacing-top-lg - The top spacing for large size. Default is `var(--dds-spacing-600)`.
 *
 * @cssproperty --dds-card-subtitle-spacing-bottom-sm - The bottom spacing for small size. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-subtitle-spacing-bottom-md - The bottom spacing for medium size. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-subtitle-spacing-bottom-lg - The bottom spacing for large size. Default is `var(--dds-spacing-600)`.
 *
 * @cssproperty --dds-card-subtitle-spacing-both-sm - The both (top and bottom) spacing for small size. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-subtitle-spacing-both-md - The both (top and bottom) spacing for medium size. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-subtitle-spacing-both-lg - The both (top and bottom) spacing for large size. Default is `var(--dds-spacing-600)`.
 */
export declare class DapDSCardSubtitle extends DapDSCardSubtitle_base {
    /** The base rendered root tag of the card subtitle. */
    renderAs: string;
    /** Whether the card subtitle should be sized from the parent. */
    parentSized: string;
    static readonly styles: CSSResult;
    constructor();
    render(): TemplateResult_2;
}

declare const DapDSCardSubtitle_base: typeof DdsElement & {
    new (...args: any[]): SizedElementInterface;
    prototype: SizedElementInterface;
};

/**
 * `dap-ds-card-title`
 * @summary Title of the card
 * @element dap-ds-card-title
 * @title - Card title
 * @group card
 *
 * @property {'sm' |'md' | 'lg'} size - The size of the card title. Default is `sm`.
 * @property {boolean} noPadding - Whether the card title should have no padding.
 * @property {'top' | 'bottom' | 'both' | 'none'} spacing - The spacing of the card title. This adds a margin to the card title. Default is `top`.
 *
 * @slot - The content of the title.
 *
 * @csspart base - The main card title container.
 *
 * @cssproperty --dds-card-title-color - The text color of the card title. Default is `var(--dds-color-text-primary)`.
 * @cssproperty --dds-card-title-font-family - The font family of the card title. Default is `var(--dds-font-family-base)`.
 * @cssproperty --dds-card-title-font-weight - The font weight of the card title. Default is `var(--dds-font-weight-bold)`.
 * @cssproperty --dds-card-title-line-height - The line height of the card title. Default is `var(--dds-font-line-height-large)`.
 * @cssproperty --dds-card-title-margin-bottom - The bottom margin of the card title. Default is `var(--dds-spacing-100)`.
 *
 * @cssproperty --dds-card-title-sm-padding-x - The horizontal padding for small size. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-title-sm-padding-bottom - The bottom padding for small size. Default is `var(--dds-spacing-100)`.
 * @cssproperty --dds-card-title-sm-spacing-top - The top spacing for small size. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-title-sm-spacing-bottom - The bottom spacing for small size. Default is `var(--dds-spacing-400)`.
 *
 * @cssproperty --dds-card-title-md-padding-x - The horizontal padding for medium size. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-title-md-padding-bottom - The bottom padding for medium size. Default is `var(--dds-spacing-100)`.
 * @cssproperty --dds-card-title-md-spacing-top - The top spacing for medium size. Default is `var(--dds-spacing-400)`.
 * @cssproperty --dds-card-title-md-spacing-bottom - The bottom spacing for medium size. Default is `var(--dds-spacing-400)`.
 *
 * @cssproperty --dds-card-title-lg-padding-x - The horizontal padding for large size. Default is `var(--dds-spacing-600)`.
 * @cssproperty --dds-card-title-lg-padding-bottom - The bottom padding for large size. Default is `var(--dds-spacing-100)`.
 * @cssproperty --dds-card-title-lg-spacing-top - The top spacing for large size. Default is `var(--dds-spacing-600)`.
 * @cssproperty --dds-card-title-lg-spacing-bottom - The bottom spacing for large size. Default is `var(--dds-spacing-600)`.
 */
export declare class DapDSCardTitle extends DapDSCardTitle_base {
    /** The base rendered root tag of the card title. */
    renderAs: string;
    /** Whether the card title should be sized from the parent. */
    parentSized: string;
    /** Whether the card title should have no padding. */
    noPadding: boolean;
    static readonly styles: CSSResult;
    constructor();
    render(): TemplateResult_2;
}

declare const DapDSCardTitle_base: typeof DdsElement & {
    new (...args: any[]): SizedElementInterface;
    prototype: SizedElementInterface;
};

/**
 * `dap-ds-checkbox`
 * @summary A checkbox is a form element that allows the user to select one or more options from a set.
 * @element dap-ds-checkbox
 * @title - Checkbox
 *
 * @event {{ checked: boolean, indeterminate: boolean, value: string, disabled: boolean, readonly: boolean, type: 'checkbox' }} dds-change - Fired when the checkbox is checked or unchecked.
 * @event {{ void }} dds-blur - Emitted when the checkbox loses focus.
 * @event {{ void }} dds-focus - Emitted when the checkbox gains focus.
 * @event {{ checked: boolean, indeterminate: boolean, value: string, disabled: boolean, readonly: boolean }} dds-input - Emitted when the checkbox receives input.
 *
 * @property {string} name - The name of the checkbox.
 * @property {string} value - The value of the checkbox.
 * @property {boolean} checked - Whether the checkbox is checked.
 * @property {string} label - The label of the checkbox.
 * @property {string} description - The description of the checkbox.
 * @property {boolean} disabled - Whether the checkbox is disabled.
 * @property {boolean} readonly - Whether the checkbox is readonly (cannot be changed but value is submitted with form).
 * @property {boolean} required - Whether the checkbox is required.
 * @property {'xs' | 'sm' | 'lg'} size - The size of the checkbox. Default is 'sm'.
 * @property {'left' | 'right'} labelPlacement - The placement of the label.
 * @property {'top' | 'bottom'} descriptionPlacement - The placement of the description.
 * @property {boolean} subtle - The weight of the label.
 * @property {string} feedback - The feedback of the checkbox.
 * @property {'negative' | 'positive' | 'warning'} feedbackType - The feedback type of the checkbox.
 * @property {boolean} invalid - The invalid state of the checkbox.
 * @property {boolean} optional - The optional state of the checkbox.
 * @property {string} optionalLabel - The optional label of the checkbox.
 *
 * @csspart base - The main checkbox container.
 * @csspart label - The label of the checkbox.
 * @csspart input - The input of the checkbox.
 * @csspart control - The control of the checkbox.
 * @csspart icon - The icon of the checkbox.
 * @csspart label-container - The label container of the checkbox.
 * @csspart description - The description of the checkbox.
 * @csspart readonly - The readonly state of the checkbox.
 *
 * @cssproperty --dds-checkbox-size - The size of the checkbox. Default is `var(--dds-spacing-500)`.
 * @cssproperty --dds-checkbox-border-width - The border width of the checkbox. Default is `var(--dds-border-width-large)`.
 * @cssproperty --dds-checkbox-border-radius - The border radius of the checkbox. Default is `var(--dds-radius-small)`.
 * @cssproperty --dds-checkbox-border-color - The border color of the checkbox. Default is `var(--dds-border-neutral-base)`.
 * @cssproperty --dds-checkbox-background-color - The background color of the checkbox. Default is `transparent`.
 * @cssproperty --dds-checkbox-icon-color - The color of the checkbox icon. Default is `var(--dds-button-primary-icon-enabled)`.
 * @cssproperty --dds-checkbox-hover-border-color - The border color when hovering over the checkbox. Default is `var(--dds-border-neutral-medium)`.
 * @cssproperty --dds-checkbox-hover-background-color - The background color when hovering over the checkbox. Default is `var(--dds-background-neutral-medium)`.
 * @cssproperty --dds-checkbox-active-border-color - The border color when the checkbox is active. Default is `var(--dds-border-neutral-strong)`.
 * @cssproperty --dds-checkbox-active-background-color - The background color when the checkbox is active. Default is `var(--dds-background-neutral-strong)`.
 * @cssproperty --dds-checkbox-checked-border-color - The border color when the checkbox is checked. Default is `var(--dds-background-brand-base-inverted)`.
 * @cssproperty --dds-checkbox-checked-background-color - The background color when the checkbox is checked. Default is `var(--dds-background-brand-base-inverted)`.
 * @cssproperty --dds-checkbox-checked-hover-border-color - The border color when hovering over a checked checkbox. Default is `var(--dds-background-brand-medium-inverted)`.
 * @cssproperty --dds-checkbox-checked-hover-background-color - The background color when hovering over a checked checkbox. Default is `var(--dds-background-brand-medium-inverted)`.
 * @cssproperty --dds-checkbox-checked-active-border-color - The border color when a checked checkbox is active. Default is `var(--dds-background-brand-strong-inverted)`.
 * @cssproperty --dds-checkbox-checked-active-background-color - The background color when a checked checkbox is active. Default is `var(--dds-background-brand-strong-inverted)`.
 * @cssproperty --dds-checkbox-invalid-border-color - The border color when the checkbox is invalid. Default is `var(--dds-border-negative-base)`.
 * @cssproperty --dds-checkbox-invalid-background-color - The background color when the checkbox is invalid. Default is `var(--dds-background-negative-base)`.
 * @cssproperty --dds-checkbox-invalid-hover-border-color - The border color when hovering over an invalid checkbox. Default is `var(--dds-border-negative-medium)`.
 * @cssproperty --dds-checkbox-invalid-hover-background-color - The background color when hovering over an invalid checkbox. Default is `var(--dds-background-negative-medium)`.
 * @cssproperty --dds-checkbox-invalid-active-border-color - The border color when an invalid checkbox is active. Default is `var(--dds-border-negative-strong)`.
 * @cssproperty --dds-checkbox-invalid-active-background-color - The background color when an invalid checkbox is active. Default is `var(--dds-background-negative-strong)`.
 * @cssproperty --dds-checkbox-disabled-border-color - The border color when the checkbox is disabled. Default is `var(--dds-button-primary-background-disabled)`.
 * @cssproperty --dds-checkbox-disabled-background-color - The background color when the checkbox is disabled. Default is `var(--dds-button-primary-background-disabled)`.
 * @cssproperty --dds-checkbox-disabled-icon-color - The color of the checkbox icon when disabled. Default is `var(--dds-button-primary-icon-disabled)`.
 * @cssproperty --dds-checkbox-readonly-border-color - The border color when the checkbox is readonly. Default is `var(--dds-border-neutral-subtle)`.
 * @cssproperty --dds-checkbox-readonly-background-color - The background color when the checkbox is readonly. Default is `var(--dds-background-neutral-subtle)`.
 * @cssproperty --dds-checkbox-readonly-icon-color - The color of the checkbox icon when readonly. Default is `var(--dds-text-neutral-base)`.
 */
export declare class DapDSCheckbox extends LabeledChoiceElement {
    private readonly input;
    /** Whether the checkbox is indeterminate */
    indeterminate: boolean;
    /** Whether the checkbox should prevent the default action */
    preventDefault: boolean;
    /** This sets up border around the checkbox, when true. */
    border: boolean;
    /** Whether the checkbox is readonly */
    readonly: boolean;
    /** The type of the checkbox
     * @type {'normal' | 'background'}
     */
    type: 'normal' | 'background';
    static readonly styles: CSSResult;
    /**
     * Validates property combinations and logs warnings for invalid states.
     * @private
     */
    private validateProperties;
    /**
     * Gets the aria-describedby attribute value by combining description and feedback IDs.
     * @returns {string | undefined} Space-separated IDs or undefined if none exist
     * @private
     */
    private getAriaDescribedBy;
    /**
     * Gets the aria-checked attribute value based on checkbox state.
     * @returns {'true' | 'false' | 'mixed'} The appropriate aria-checked value
     * @private
     */
    private getAriaChecked;
    /**
     * Handles click events on the checkbox.
     * Manages the checked/indeterminate state transitions and emits change events.
     * @private
     */
    private handleClick;
    /**
     * Handles input events on the checkbox.
     * Emits the dds-input event with current checkbox state.
     * @private
     */
    private handleInput;
    /**
     * Handles keyboard events on the checkbox.
     * Provides enhanced keyboard navigation and accessibility.
     * @param {KeyboardEvent} event - The keyboard event
     * @private
     */
    private handleKeyDown;
    get focusElement(): HTMLInputElement;
    /**
     * Programmatically focuses the checkbox input element.
     * @public
     */
    focus(): void;
    /**
     * Programmatically blurs the checkbox input element.
     * @public
     */
    blur(): void;
    /**
     * Renders the appropriate icon based on checkbox state.
     * @returns {TemplateResult | null} The icon template or null if unchecked
     * @private
     */
    renderIcon(): TemplateResult_2 | null;
    /**
     * Handles invalid events on the checkbox input.
     * Prevents the default browser validation UI from showing and manages invalid state.
     * @param {Event} event - The invalid event
     * @private
     */
    handleInvalid(event: Event): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-combobox`
 * @summary A select is a form element that allows the user to select one option from a set.
 * @element dap-ds-combobox
 * @title - Combobox
 *
 * @event {{ value }} dds-change - Fired when the select value changes.
 * @event {{ void }} dds-blur - Emitted when the select loses focus.
 * @event {{ void }} dds-focus - Emitted when the select gains focus.
 * @event {{ void }} dds-clear - Emitted when the select is cleared.
 * @event {{ search: string }} dds-search - Emitted when the manual input value changes.
 * @event {{ input: string, originalEvent: Event }} dds-input - Emitted when typing happens in the input.
 *
 * @property {string} value - The value of the select.
 * @property {string} placeholder - The placeholder of the select.
 * @property { 'top' | 'top-start' | 'top-end' | 'right' | 'right-start'| 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'} placement - The placement of the select dropdown. Default is 'bottom-start'.
 * @property {boolean} opened - Whether the select dropdown is opened.
 * @property {boolean} sync - The sync mode of the select dropdown. How the dropdown item size is synced to the trigger element'.
 * @property {string} label - The label of the select.
 * @property {string} description - The description of the select.
 * @property {string} tooltip - The tooltip of the select.
 * @property {'top' | 'right' | 'bottom' | 'left'} tooltipPlacement - The tooltip placement of the input.
 * @property {'xs' | 'sm' | 'lg'} size - The size of the select. Default is 'sm'.
 * @property {boolean} disabled - Whether the select is disabled.
 * @property {boolean} required - Whether the select is required.
 * @property {boolean} readonly - Whether the select is readonly.
 * @property {boolean} autofocus - Whether the select is autofocus.
 * @property {string} feedback - The feedback content of the select.
 * @property {'negative' | 'positive' | 'warning' | 'info'} feedbackType - The feedback type of the select.
 * @property {'none' | 'typehead' | 'autocomplete' | 'manual'} searchMode - The search mode of the select.
 * @property {boolean} openOnEmpty - Whether the combobox should open on empty results.
 * @property {boolean} allowManualInput - Whether the combobox allows manual input, or free text.
 * @property {boolean} searchForText - Whether the combobox should search for the selected item text.
 * @property {boolean} textComplete - Whether the combobox should complete the text.
 * @property {string} searchButtonAriaLabel - The aria label of the search button.
 * @property {string} selectable - Show the selected item check mark in the dropdown. 'true' or 'false'
 * @property {boolean} noAnimation - Whether the combobox open indicator should be animated.
 *
 * @csspart base - The main select container.
 * @csspart trigger - The trigger button of the select.
 * @csspart label - The label of the select.
 * @csspart description - The description of the select.
 * @csspart feedback - The feedback of the select.
 * @csspart tooltip - The tooltip of the select.
 * @csspart option-list - The option list of the select.
 *
 * @cssproperty --dds-combobox-background - The background color of the combobox. Defaults to var(--dds-fields-background-default).
 * @cssproperty --dds-combobox-border-color - The border color of the combobox. Defaults to var(--dds-border-neutral-base).
 * @cssproperty --dds-combobox-border-width - The border width of the combobox. Defaults to var(--dds-border-width-base, 1px).
 * @cssproperty --dds-combobox-border-radius - The border radius of the combobox. Defaults to var(--dds-radius-base).
 * @cssproperty --dds-combobox-text-color - The text color of the combobox. Defaults to var(--dds-text-neutral-base).
 * @cssproperty --dds-combobox-placeholder-color - The placeholder text color. Defaults to var(--dds-text-neutral-subtle).
 * @cssproperty --dds-combobox-disabled-background - The background color when disabled. Defaults to var(--dds-background-neutral-stronger).
 * @cssproperty --dds-combobox-disabled-text - The text color when disabled. Defaults to var(--dds-text-neutral-disabled).
 * @cssproperty --dds-combobox-error-border - The border color for error state. Defaults to var(--dds-border-negative-base).
 * @cssproperty --dds-combobox-success-border - The border color for success state. Defaults to var(--dds-border-positive-base).
 * @cssproperty --dds-combobox-icon-color - The color of the icons. Defaults to var(--dds-text-icon-neutral-subtle).
 * @cssproperty --dds-combobox-clear-icon-color - The color of the clear icon. Defaults to var(--dds-button-subtle-icon-neutral-enabled).
 * @cssproperty --dds-combobox-popup-background - The background color of the popup. Defaults to var(--dds-background-neutral-subtle).
 * @cssproperty --dds-combobox-popup-shadow - The box shadow of the popup. Defaults to 0 4px 6px -1px rgb(0 0 0 / 8%), 0 2px 4px -1px rgb(0 0 0 / 6%).
 *
 * @cssproperty --dds-combobox-padding-xs - The padding for extra small size. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-combobox-padding-sm - The padding for small size. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-combobox-padding-lg - The padding for large size. Defaults to var(--dds-spacing-300).
 * @cssproperty --dds-combobox-padding-horizontal - The horizontal padding. Defaults to var(--dds-spacing-300).
 * @cssproperty --dds-combobox-padding-vertical - The vertical padding. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-combobox-gap - The gap between elements. Defaults to var(--dds-spacing-100).
 * @cssproperty --dds-combobox-icon-gap - The gap between icons. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-combobox-action-gap - The gap between action elements. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-combobox-action-padding - The padding for action elements. Defaults to var(--dds-spacing-300).
 * @cssproperty --dds-combobox-clear-icon-width - The width of the clear icon. Defaults to var(--dds-spacing-800).
 * @cssproperty --dds-combobox-dropdown-icon-right - The right position of the dropdown icon. Defaults to var(--dds-spacing-600).
 * @cssproperty --dds-combobox-min-width - The minimum width of the combobox. Defaults to 7.5rem.
 *
 * @slot - The default slot for the options.
 */
export declare class DapDSCombobox extends ComboboxBaseElement {
    render(): TemplateResult_2;
}

/**
 * `dap-ds-command`
 * @summary A command is a component that displays a list of commands.
 * @element dap-ds-command
 * @title - Command
 *
 * @event {{ value: string }} dds-change - Fired when the command value changes.
 *
 * @slot trigger - The trigger element for the command dropdown.
 * @slot - The command items.
 */
export declare class DapDSCommand extends DapDSPopup {
    constructor();
    private readonly _trigger;
    static readonly styles: CSSResult;
    /**
     * The value of the command.
     */
    value: string | null;
    /** Whether the command popup should take full width of the screen. */
    fullWidth: boolean;
    /** ID of element that labels the command dropdown. */
    ariaLabelledBy?: string;
    private _lastClickedItem;
    private _keyboardNavigation;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    updated(changedProperties: Map<string, unknown>): Promise<void>;
    private _initializeKeyboardNavigation;
    private _handleKeyDown;
    private _handleMenuItemClick;
    private handleClick;
    private handleDocumentMouseDown;
    showDropDown(): Promise<void>;
    hideDropDown(): Promise<void>;
    private _handleFocusOut;
    focus(): void;
    private _handleTriggerChange;
    private _handleDefaultSlotChange;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-command-group`
 * @summary A command group is a group of command items.
 * @element dap-ds-command-group
 * @title - Command group
 * @group command
 *
 * @slot - The default slot for the command group.
 *
 * @cssprop --dds-command-group-gap - The gap between command group elements. Defaults to var(--dds-spacing-100)
 * @cssprop --dds-command-group-margin-bottom - The bottom margin of the command group. Defaults to var(--dds-spacing-200)
 * @cssprop --dds-command-group-border-radius - The border radius of the command group. Defaults to var(--dds-radius-small)
 * @cssprop --dds-command-group-label-font-weight - The font weight of the command group label. Defaults to var(--dds-font-weight-bold)
 * @cssprop --dds-command-group-items-gap - The gap between command items. Defaults to var(--dds-spacing-100)
 */
export declare class DapDSCommandGroup extends DdsElement {
    static readonly styles: CSSResult;
    /**
     * The label of the command group.
     */
    label?: string;
    /**
     * Whether the command group is exclusive, only one item can be selected at a time.
     */
    exclusive: boolean;
    private _selectedItem;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleItemClick;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-command-item`
 * @summary A command item is a command item that can be selected.
 * @element dap-ds-command-item
 * @title - Command item
 * @group command
 *
 * @event {{ value: string, closeOnSelect: boolean }} dds-command-item-click - Fired when the command item is clicked.
 *
 * @slot - The label of the command item.
 * @slot check - The check of the command item.
 *
 * @csspart base - The base part of the command item.
 * @csspart content - The content part of the command item.
 * @csspart label - The label part of the command item.
 *
 * @cssprop --dds-command-item-padding - The padding of the command item
 * @cssprop --dds-command-item-background - The background color of the command item
 * @cssprop --dds-command-item-color - The text color of the command item
 * @cssprop --dds-command-item-hover-background - The background color of the command item on hover
 * @cssprop --dds-command-item-selected-background - The background color of the selected command item
 */
export declare class DapDSCommandItem extends DdsElement {
    private readonly _trigger;
    static readonly styles: CSSResult;
    /**
     * The value of the command item.
     */
    value?: string;
    /**
     * Whether the command item is disabled.
     */
    disabled: boolean;
    /** The name of the button */
    name: string;
    /** The Href of the button. If this present the button will be rendered as an anchor `<a></a>` element. */
    href: string;
    /** The target of the button
     * @type { '_blank' | '_self' | '_parent' | '_top' }
     */
    target: LinkTarget;
    /**
     * The rel of the button link. Default is `noreferrer noopener`.
     */
    rel: string;
    /**
     * Whether the command item is selectable.
     */
    selectable: boolean;
    /**
     * Whether the command item is selected.
     */
    selected: boolean;
    /**
     * Whether the command item should close the command when selected.
     */
    closeOnSelect: string;
    private _isSelected;
    connectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    private _handleClick;
    private _handleKeyDown;
    focus(): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-content-switcher`
 * @summary A content switcher is a set of two or more segments, each of which functions as a mutually exclusive button.
 * @element dap-ds-content-switcher
 * @title - Content switcher
 *
 * @slot - The content switcher items.
 *
 * @event {{ value: string, selected: boolean }} dds-change - Fired when the content switcher is changed.
 *
 * @csspart base - The main content switcher container.
 *
 * @cssproperty --dds-content-switcher-min-width - The minimum width of the content switcher (default: var(--dds-spacing-4000, 160px))
 * @cssproperty --dds-content-switcher-padding - The padding of the content switcher (default: var(--dds-spacing-100, 4px))
 * @cssproperty --dds-content-switcher-border-width - The border width of the content switcher (default: var(--dds-border-width-base))
 * @cssproperty --dds-content-switcher-border-color - The border color of the content switcher (default: var(--dds-border-neutral-transparent))
 * @cssproperty --dds-content-switcher-border-radius - The border radius of the content switcher (default: var(--dds-radius-rounded, 1000px))
 * @cssproperty --dds-content-switcher-background - The background color of the content switcher (default: var(--dds-transparent-black-subtle, rgb(0 0 0 / 5%)))
 * @cssproperty --dds-content-switcher-gap - The gap between content switcher items (default: var(--dds-spacing-100, 4px))
 */
export declare class DapDSContentSwitcher extends DdsElement {
    /** Whether the content switcher allows multiple selections. */
    multiSelect: boolean;
    /** The value of the content switcher. A comma-separated list if `multiSelect` is `true`. */
    value: string;
    static readonly styles: CSSResult;
    private getAllInputs;
    private syncInputElements;
    private handleInputClick;
    protected updated(_changedProperties: PropertyValues): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-content-switcher-item`
 * @summary Segmented control item component for the segmented control.
 * @element dap-ds-content-switcher-item
 * @title - Content switcher item
 * @group content-switcher
 *
 * @slot iconcontent - The icon content of the segmented control item.
 *
 * @csspart input - The input of the segmented control item.
 *
 * @cssproperty --dds-content-switcher-item-height - The height of the content switcher item (default: var(--dds-spacing-800, 32px))
 * @cssproperty --dds-content-switcher-item-padding - The padding of the content switcher item (default: var(--dds-spacing-200, 8px) var(--dds-spacing-400, 16px))
 * @cssproperty --dds-content-switcher-item-font-size - The font size of the content switcher item (default: var(--dds-size-sm, 14px))
 * @cssproperty --dds-content-switcher-item-font-weight - The font weight of the content switcher item (default: var(--dds-weight-bold, 700))
 * @cssproperty --dds-content-switcher-item-border-radius - The border radius of the content switcher item (default: var(--dds-radius-large, 16px))
 * @cssproperty --dds-content-switcher-item-background - The background color of the content switcher item (default: transparent)
 * @cssproperty --dds-content-switcher-item-color - The text color of the content switcher item (default: var(--dds-text-neutral-base))
 * @cssproperty --dds-content-switcher-item-border-color - The border color of the content switcher item (default: transparent)
 * @cssproperty --dds-content-switcher-item-checked-background - The background color of the checked content switcher item (default: var(--dds-button-primary-background-enabled))
 * @cssproperty --dds-content-switcher-item-checked-color - The text color of the checked content switcher item (default: var(--dds-text-neutral-on-inverted))
 * @cssproperty --dds-content-switcher-item-checked-border-color - The border color of the checked content switcher item (default: var(--dds-border-neutral-transparent-interactive))
 */
export declare class DapDSContentSwitcherItem extends DdsElement {
    /** The value of the segmented control item. */
    value: string;
    /** The checked state of the segmented control item. */
    checked: boolean;
    /** The disabled state of the segmented control item. */
    disabled: boolean;
    /** The name of the segmented control item. */
    name: string;
    static readonly styles: CSSResult;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-copybox-input`
 * @summary A copybox input is a field for copying an input value.
 * @element dap-ds-copybox-input
 * @title - CopyBox input
 *
 * @property {string} label - The label of the input.
 * @property {string} placeholder - The placeholder of the input.
 * @property {string} description - The description of the input.
 * @property {string} tooltip - The tooltip of the input.
 * @property {'top' | 'right' | 'bottom' | 'left'} tooltipPlacement - The position of the tooltip. Can be `top`, `right`, `bottom`, or `left`.
 * @property {'success' | 'error'} status - The status of the input. Can be `success` or `error`.
 * @property {'xs' | 'sm' | 'sm'} size - The size of the input. Default is `sm`.
 * @property {string} name - The name of the input.
 * @property {string} value - The value of the input.
 * @property {boolean} disabled - The disabled state of the input. Default is false.
 * @property {boolean} required - The required state of the input. Default is false.
 * @property {boolean} readonly - The readonly state of the input. Default is false.
 * @property {boolean} autofocus - The autofocus state of the input. Default is false.
 * @property {string} feedback - The feedback of the input.
 * @property {'negative' | 'positive' | 'warning'} feedbackType - The feedback type of the input. Can be `negative`, `positive`, or `warning`.
 * @property {boolean} loading - The loading state of the input. Default is false.
 * @property {boolean} optional - The optional state of the input.
 * @property {string} optionalLabel - The optional label of the input.
 * @property {boolean} subtle - The weight of the label. Default is `false`
 * @property {string} copyButtonAriaLabel - The aria label of the copy button.
 *
 * @event {{ value: string }} dds-copy - Fired when the user clicks on the copy button.
 * @event {{ value: string }} dds-change - Fired when the input value changes.
 * @event {{ value: string }} dds-input - Fired when the input value changes.
 * @event {{ value: string, originalEvent: Event }} dds-keydown - Fired when a key is pressed down.
 * @event {{ void }} dds-blur - Fired when the input loses focus.
 * @event {{ void }} dds-focus - Emitted when the input gains focus.
 * @event {{ void }} dds-not-allowed - Emitted when the value cannot be copied.
 *
 * @cssproperty --dds-input-height - The height of the input. Default is var(--dds-spacing-1000).
 * @cssproperty --dds-input-padding - The padding of the input. Default is var(--dds-spacing-300).
 * @cssproperty --dds-input-font-size - The font size of the input. Default is var(--dds-font-base).
 * @cssproperty --dds-input-border-color - The border color of the input. Default is var(--dds-border-neutral-base).
 * @cssproperty --dds-input-background-color - The background color of the input. Default is var(--dds-fields-background-default).
 * @cssproperty --dds-input-text-color - The text color of the input. Default is var(--dds-text-neutral-base).
 * @cssproperty --dds-input-border-radius - The border radius of the input. Default is var(--dds-radius-base).
 * @cssproperty --dds-input-border-width - The border width of the input. Default is var(--dds-border-width-base).
 * @cssproperty --dds-input-disabled-background - The background color of the disabled input. Default is var(--dds-fields-background-disabled).
 * @cssproperty --dds-input-disabled-text - The text color of the disabled input. Default is var(--dds-text-neutral-disabled).
 * @cssproperty --dds-input-readonly-background - The background color of the readonly input. Default is var(--dds-fields-background-read-only).
 * @cssproperty --dds-input-readonly-text - The text color of the readonly input. Default is var(--dds-text-neutral-subtle).
 * @cssproperty --dds-input-success-border - The border color of the success input. Default is var(--dds-border-positive-base).
 * @cssproperty --dds-input-error-border - The border color of the error input. Default is var(--dds-border-negative-base).
 * @cssproperty --dds-input-addon-background - The background color of the input addon. Default is var(--dds-background-ui-neutral-enabled).
 * @cssproperty --dds-input-addon-success-background - The background color of the success input addon. Default is var(--dds-background-ui-positive-enabled).
 * @cssproperty --dds-input-addon-error-background - The background color of the error input addon. Default is var(--dds-background-ui-negative-enabled).
 *
 * @csspart base - The base container of the component.
 * @csspart postfix - The inner postfix icon part of the component.
 * @csspart button - The button of the component.
 */
export declare class DapDSCopyBoxInput extends InputBaseElement {
    constructor();
    copyButtonAriaLabel?: string;
    render(): TemplateResult_2<1>;
    onCopy(): void;
    private copyToClipboard;
}

/**
 * `dap-ds-dap-badge`
 * @summary A DÁP badge is a brand element showing the use of this system design library.
 * @element dap-ds-dap-badge
 * @title - Dap badge
 *
 * @slot - Description of badge
 * *
 * @csspart base - Main badge container
 * @csspart icon - Badge icon
 * @csspart text - Badge text
 *
 * @cssproperty --dds-badge-padding-sm - Custom padding for the small badge (default: var(--dds-spacing-200) var(--dds-spacing-300))
 * @cssproperty --dds-badge-padding-lg - Custom padding for the large badge (default: var(--dds-spacing-400))
 * @cssproperty --dds-badge-border-width - Custom border width for the badge (default: var(--dds-border-width-base))
 * @cssproperty --dds-badge-border-color - Custom border color for the badge (default: var(--dds-border-neutral-divider))
 * @cssproperty --dds-badge-border-radius - Custom border radius for the badge (default: var(--dds-radius-base))
 * @cssproperty --dds-badge-color - Custom text color for the badge (default: var(--dds-text-neutral-base))
 * @cssproperty --dds-badge-gap - Custom gap between icon and text (default: var(--dds-spacing-200))
 * @cssproperty --dds-badge-font-size-sm - Custom font size for the small badge (default: var(--dds-font-xs))
 * @cssproperty --dds-badge-font-size-lg - Custom font size for the large badge (default: var(--dds-font-xs))
 * @cssproperty --dds-badge-font-weight - Custom font weight for the badge (default: var(--dds-font-weight-medium))
 * @cssproperty --dds-badge-line-height - Custom line height for the badge (default: var(--dds-font-line-height-large))
 * @cssproperty --dds-badge-border-color-normal - Custom border color for the normal variant (default: var(--dds-transparent-black-medium))
 * @cssproperty --dds-badge-background-color-normal - Custom background color for the normal variant (default: var(--dds-background-brand-subtle))
 * @cssproperty --dds-badge-color-normal - Custom text color for the normal variant (default: var(--dds-text-brand-subtle))
 * @cssproperty --dds-badge-border-color-inverted - Custom border color for the inverted variant (default: var(--dds-transparent-white-medium))
 * @cssproperty --dds-badge-background-color-inverted - Custom background color for the inverted variant (default: var(--dds-background-brand-base-inverted))
 * @cssproperty --dds-badge-color-inverted - Custom text color for the inverted variant (default: var(--dds-text-neutral-inverted))
 */
export declare class DapDSDAPBadge extends DdsElement {
    /** The variant of the DÁP badge
     * @type {'normal' | 'inverted'}
     */
    variant: string;
    /** The size of the DÁP badge
     * @type {'sm' | 'lg'}
     */
    size: string;
    static readonly styles: CSSResult;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-datatable`
 * @summary A data table is a component that displays data in a tabular format.
 * @element dap-ds-datatable
 * @title - Data table
 * @generic T
 *
 * @event {{ sorting: SortingState }} dds-sorting-change - Fired when the sorting of the table changes.
 * @event {{ selection: RowSelectionState }} dds-selection-change - Fired when the selection of the table changes.
 * @event {{ pagination: PaginationState }} dds-pagination-change - Fired when the pagination of the table changes.
 * @event {{ row: Row<T> }} dds-row-click - Fired when a row is clicked.
 *
 * @slot loading - The loading content of the table.
 * @slot empty - The empty content of the table.
 *
 * @csspart base - The main table container.
 * @csspart header - The header of the table.
 * @csspart header-row - The header row of the table.
 * @csspart header-cell - All cells of the header.
 * @csspart body - The body of the table.
 * @csspart row - All rows of the table.
 * @csspart cell - All cells of the table.
 * @csspart pager - The pager of the table.
 *
 * @cssproperty --dds-datatable-bg-color - Background color of the table
 * @cssproperty --dds-datatable-border-color - Border color of the table cells
 * @cssproperty --dds-datatable-header-bg-color - Background color of the table header
 * @cssproperty --dds-datatable-header-text-color - Text color of the table header
 * @cssproperty --dds-datatable-row-hover-bg-color - Background color of hovered rows
 * @cssproperty --dds-datatable-row-selected-bg-color - Background color of selected rows
 * @cssproperty --dds-datatable-cell-padding - Padding of table cells
 * @cssproperty --dds-datatable-header-padding - Padding of header cells
 * @cssproperty --dds-datatable-border-width - Width of table borders
 * @cssproperty --dds-datatable-font-size - Font size of the table
 * @cssproperty --dds-datatable-line-height - Line height of the table
 * @cssproperty --dds-datatable-header-font-weight - Font weight of the header
 * @cssproperty --dds-datatable-stripe-color - Background color for striped rows
 * @cssproperty --dds-datatable-stripe-enabled - Whether to enable striped rows
 * @cssproperty --dds-datatable-border-radius - Border radius of the table
 * @cssproperty --dds-datatable-shadow - Box shadow of the table
 * @cssproperty --dds-datatable-transition-duration - Duration of hover/selection transitions
 * @cssproperty --dds-datatable-z-index - Z-index of the table
 * @cssproperty --dds-datatable-min-height - Minimum height of the table
 * @cssproperty --dds-datatable-max-height - Maximum height of the table
 * @cssproperty --dds-datatable-overflow-x - Horizontal overflow behavior
 * @cssproperty --dds-datatable-overflow-y - Vertical overflow behavior
 */
export declare class DapDSDataTable<T> extends DdsElement {
    static readonly styles: CSSResult;
    private readonly tableController;
    /** Data to display in the table */
    data: RowData[];
    /** Columns to display in the table */
    columns: ExtendedColumnDef<T>[];
    /** Row key to use for row selection, this should be a unique key for each row */
    rowKey: string;
    /** Enable row selection on the table, can be a boolean or a function that returns a boolean
     * @type {boolean | ((row: Row<T>) => boolean)}
     */
    enableRowSelection: boolean | ((row: Row<T>) => boolean);
    /** Enable sorting on the table */
    enableSorting: boolean;
    /** Enable manual sorting on the table */
    manualSorting: boolean;
    /** Enables manual pagination. If this option is set to true, the table will not automatically paginate rows and instead will expect you to manually paginate the rows before passing them to the table. This is useful if you are doing server-side pagination and aggregation. */
    manualPagination: boolean;
    /** If set to true, pagination will be reset to the first page when page-altering state changes eg. data is updated, filters change, grouping changes, etc. This behavior is automatically disabled when manualPagination is true but it can be overridden by explicitly assigning a boolean value to the autoResetPageIndex table option. */
    autoResetPageIndex: boolean;
    /** Enable row click on the table */
    enableRowClick: boolean;
    /** Loading state of the table */
    loading: boolean;
    /** Whether to enable striped rows */
    enableStripedRows: boolean;
    /** Number of rows in the table */
    rowCount?: number;
    /** ID of element describing the table */
    ariaDescribedBy?: string;
    /** Caption text for the table */
    caption?: string;
    /** The type of loading to use
     * @type {'spinner' | 'skeleton'}
     */
    loadingType: LoadingType;
    /**
     * The variant of the spinner. Only used if loadingType is 'spinner'.
     * @type {"neutral" | "brand" | "negative" | "positive" | "inverted"}
     */
    loadingVariant: SpinnerVariant;
    /**
     * The size of the spinner. Only used if loadingType is 'spinner'.
     * @type {"xxl" | "xl" | "lg" | "md" | "sm" | "xs"}
     */
    loadingSize: IconSize;
    /** The size of the spinner in pixels. This overrides the size attribute. Only used if loadingType is 'spinner'. */
    loadingStaticSize?: number;
    /** The loading text. Only used if loadingType is 'spinner'. */
    loadingText: string;
    /** The text to display when the table is empty. */
    emptyText: string;
    /** Whether to disable the header when the table is empty.
     * @type {'true' | 'false'}
     */
    disableHeaderOnEmpty: string;
    /** Whether to show the pager component when the table is empty. */
    showPagerOnEmpty: boolean;
    /** Whether to show the pager component */
    pager: boolean;
    /** Show the page size options. */
    showPageSizeOptions: string;
    /** Show the page index. */
    showPageIndex: string;
    /** Show the page count. */
    showPageCount: string;
    /** Show the first button. */
    showFirstButton: string;
    /** Show the previous button. */
    showPreviousButton: string;
    /** Show the next button. */
    showNextButton: string;
    /** Show the last button. */
    showLastButton: string;
    /** The label of the first button */
    firstButtonLabel: string;
    /** The label of the previous button */
    previousButtonLabel: string;
    /** The label of the next button */
    nextButtonLabel: string;
    /** The label of the last button */
    lastButtonLabel: string;
    /** The function to determine the pager text
     * @type {(pageIndex: number, pageSize: number, totalRows: number) => string}
     */
    pageStateText: (pageIndex: number, pageSize: number, totalRows: number) => string;
    /** Available page size options for the pager
     * @type {number[]}
     */
    pageSizeOptions: number[];
    /** Sorting state of the table */
    sorting: SortingState;
    /** @ignore */
    private _sorting;
    /** Selection state of the table */
    rowSelection: RowSelectionState;
    /** @ignore */
    private _rowSelection;
    /** Pagination state of the table */
    pagination: PaginationState;
    /** @ignore */
    private _pagination;
    /** @ignore */
    private get isTableEmpty();
    /** @ignore */
    private get shouldDisableHeaderActions();
    /** @ignore */
    private readonly _statusMessage;
    /** @ignore */
    debug: boolean;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private readonly columnsMemo;
    private renderHeaderCell;
    private renderHeaderCellContent;
    private getHeaderCellStyle;
    private getSortIcon;
    private getSortTitle;
    private getAriaSortValue;
    private handleRowClick;
    private handleRowKeydown;
    private readonly renderHeader;
    private readonly renderSkeletonRows;
    private readonly renderBody;
    protected render(): TemplateResult_2;
}

/**
 * `dap-ds-datepicker`
 * @summary A datepicker is a graphical user interface widget that allows the user to select a date from a calendar and/or time from a time range.
 * @element dap-ds-datepicker
 * @title - Datepicker
 *
 * @property {Dayjs} value - The value of the datepicker.
 * @property {string} label - The label of the datepicker.
 * @property {string} description - The description of the datepicker.
 * @property {'xs' | 'sm' | 'sm'} size - The size of the datepicker.
 * @property {boolean} disabled - The disabled state of the datepicker.
 * @property {boolean} required - The required state of the datepicker.
 * @property {boolean} readonly - The readonly state of the datepicker.
 * @property {boolean} autofocus - The autofocus state of the datepicker.
 * @property {string} tooltip - The tooltip of the datepicker.
 * @property {'top' | 'right' | 'bottom' | 'left'} tooltipPlacement - The tooltip placement of the datepicker.
 * @property {string} feedback - The feedback of the datepicker.
 * @property {'negative' | 'positive' | 'warning'} feedbackType - The feedback type of the datepicker.
 * @property {boolean} optional - The optional state of the datepicker.
 * @property {string} optionalLabel - The optional label of the datepicker.
 * @property {boolean} subtle - The weight of the label. Default is `false`
 * @property {string} autocomplete - The autocomplete of the datepicker.
 * @property {boolean} autofocus - The autofocus of the datepicker.
 *
 * @event {{ value: string }} dds-change - Fired when the datepicker value changes.
 * @event {{ value: string }} dds-input - Fired when the datepicker input value changes.
 * @event {{ value: string }} dds-valid-date - Fired when the datepicker input value is valid. Happens on manual input typing.
 * @event {{ value: string, type: 'invalid' | 'out-of-range' }} dds-invalid-date - Fired when the datepicker input value is invalid. Happens on manual input typing.
 * @event {{ void }} dds-clear - Fired when the datepicker is cleared.
 * @event {{ void }} dds-focus - Emitted when the datepicker gains focus.
 * @event {{ void }} dds-blur - Emitted when the datepicker loses focus.
 *
 * @csspart base - The main datepicker container.
 * @csspart calendar - The calendar of the datepicker.
 * @csspart trigger - The trigger button of the datepicker.
 * @csspart label - The label of the datepicker.
 * @csspart description - The description of the datepicker.
 * @csspart feedback - The feedback of the datepicker.
 * @csspart tooltip - The tooltip of the datepicker.
 * @csspart input - The input of the datepicker.
 * @csspart clear-button - The clear button of the datepicker.
 *
 * @cssproperty --dds-combobox-background - The background color of the combobox. Defaults to var(--dds-fields-background-default).
 * @cssproperty --dds-combobox-border-color - The border color of the combobox. Defaults to var(--dds-border-neutral-base).
 * @cssproperty --dds-combobox-border-width - The border width of the combobox. Defaults to var(--dds-border-width-base, 1px).
 * @cssproperty --dds-combobox-border-radius - The border radius of the combobox. Defaults to var(--dds-radius-base).
 * @cssproperty --dds-combobox-text-color - The text color of the combobox. Defaults to var(--dds-text-neutral-base).
 * @cssproperty --dds-combobox-placeholder-color - The placeholder text color. Defaults to var(--dds-text-neutral-subtle).
 * @cssproperty --dds-combobox-disabled-background - The background color when disabled. Defaults to var(--dds-background-neutral-stronger).
 * @cssproperty --dds-combobox-disabled-text - The text color when disabled. Defaults to var(--dds-text-neutral-disabled).
 * @cssproperty --dds-combobox-error-border - The border color for error state. Defaults to var(--dds-border-negative-base).
 * @cssproperty --dds-combobox-success-border - The border color for success state. Defaults to var(--dds-border-positive-base).
 * @cssproperty --dds-combobox-icon-color - The color of the icons. Defaults to var(--dds-text-icon-neutral-subtle).
 * @cssproperty --dds-combobox-clear-icon-color - The color of the clear icon. Defaults to var(--dds-button-subtle-icon-neutral-enabled).
 * @cssproperty --dds-combobox-popup-background - The background color of the popup. Defaults to var(--dds-background-neutral-subtle).
 * @cssproperty --dds-combobox-popup-shadow - The box shadow of the popup. Defaults to 0 4px 6px -1px rgb(0 0 0 / 8%), 0 2px 4px -1px rgb(0 0 0 / 6%).
 *
 * @cssproperty --dds-combobox-padding-xs - The padding for extra small size. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-combobox-padding-sm - The padding for small size. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-combobox-padding-lg - The padding for large size. Defaults to var(--dds-spacing-300).
 * @cssproperty --dds-combobox-padding-horizontal - The horizontal padding. Defaults to var(--dds-spacing-300).
 * @cssproperty --dds-combobox-padding-vertical - The vertical padding. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-combobox-gap - The gap between elements. Defaults to var(--dds-spacing-100).
 * @cssproperty --dds-combobox-icon-gap - The gap between icons. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-combobox-action-gap - The gap between action elements. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-combobox-action-padding - The padding for action elements. Defaults to var(--dds-spacing-300).
 * @cssproperty --dds-combobox-clear-icon-width - The width of the clear icon. Defaults to var(--dds-spacing-800).
 * @cssproperty --dds-combobox-dropdown-icon-right - The right position of the dropdown icon. Defaults to var(--dds-spacing-600).
 * @cssproperty --dds-combobox-min-width - The minimum width of the combobox. Defaults to 7.5rem.
 *
 */
export declare class DapDSDatePicker extends GenericFormElement {
    private readonly triggerInput;
    private readonly calendar;
    /** The current visible date of the calendar. Only the month and year are considered.
     * @type {Dayjs}
     * @default dayjs()
     */
    currentDate: default_2.Dayjs;
    /** The minimum date of the datepicker. This date will be the minimum selectable date.
     * @type {Dayjs}
     * @default dayjs('1901-01-01')
     */
    minDate: default_2.Dayjs;
    /** The maximum date of the datepicker. This date will be the maximum selectable date.
     * @type {Dayjs}
     * @default dayjs('2099-12-31')
     */
    maxDate: default_2.Dayjs;
    /** The disabled date of the datepicker. This function will be called for each date to determine if it is disabled.
     * @type {(date: Dayjs) => boolean}
     * @default (date: Dayjs) => false
     */
    disabledDate: (date: Dayjs) => boolean;
    /** The placement of the dropdown of the datepicker.
     * @type {'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'}
     */
    placement: PopupPlacement;
    /** The open state of the datepicker. */
    opened: boolean;
    /** Wheter the calendar should open on typing. */
    openCalendarOnInput: boolean;
    /** Wheter the calendar should send an empty event on typing. */
    sendEmptyEventOnInput: boolean;
    /** The placeholder of the datepicker. */
    placeholder: string | null;
    /** The loading state of the datepicker. */
    loading?: boolean;
    /** The format of the datepicker. This is a comma separated list of [formats](https://day.js.org/docs/en/display/format). */
    format?: string;
    /** The format separator character in the format attribute. */
    formatSeparator: string;
    /** Whether the clear button should be shown. */
    clearButton?: string;
    /** The aria label of the clear button. */
    clearButtonAriaLabel?: string;
    /** The floating strategy of the datepicker. */
    floatingStrategy: FloatingStrategy;
    /** The locale of the datepicker. By default it uses the global locale from dayjs. It is determined from the browser language.
     * @type {'hu' | 'en'}
     */
    locale: string;
    private formatOptions;
    private setValueState;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    getFormattedValue(): string;
    isValidFormat(value: string): boolean;
    isValueValid(): boolean;
    isInputValid(): boolean;
    setValue(value?: Dayjs, setInputValue?: boolean, sendEmptyEventOnInput?: boolean): void;
    clearSelection(): Promise<void>;
    private readonly handleDocumentMouseDown;
    private readonly handleInput;
    private readonly handleKeyDown;
    get focusElement(): HTMLInputElement;
    private readonly handleClick;
    private readonly handleClearClick;
    showCalendar(): Promise<void>;
    hideCalendar(): Promise<void>;
    private readonly handleFocus;
    private readonly handleBlur;
    getValidity(): boolean;
    get validity(): ValidityState;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setValidity(): void;
    handleInvalid(event: Event): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-divider`
 * @summary A divider is a visual separator between elements.
 * @element dap-ds-divider
 * @title - Divider
 *
 * @cssproperty --dds-divider-border-width - The width of the divider border. Defaults to var(--dds-border-width-base)
 * @cssproperty --dds-divider-border-style - The style of the divider border. Defaults to solid
 * @cssproperty --dds-divider-border-color - The color of the divider border. Defaults to var(--dds-border-neutral-divider)
 * @cssproperty --dds-divider-border-color-inverted - The color of the divider border when inverted. Defaults to var(--dds-border-neutral-divider-inverted)
 */
export declare class DapDSDivider extends DdsElement {
    /** Whether the divider is vertical */
    vertical: boolean;
    /** The spacing of the divider
     * @type { 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 1000 | 1200 | 1400 | 1600 | 1800 | 2000 | 2400 | 3000 | 4000 | 5000 | 6000 }
     */
    spacing: Spacing;
    /** The variant of the divider
     * @type {'normal' | 'inverted'}
     */
    variant: string;
    static readonly styles: CSSResult;
    connectedCallback(): void;
}

/**
 * `dap-ds-feedback`
 * @summary A feedback is a container for feedback messages.
 * @element dap-ds-feedback
 * @title - Feedback
 *
 * @property {string} feedback - The feedback message.
 * @property {'xs' | 'sm' | 'lg'} feedbackSize - The size of the feedback. Default is `sm`.
 * @property {'negative' | 'positive' | 'warning'} feedbackSize - The type of the feedback.
 * @property {boolean} feedbackSubtle - The weight of the feedback.
 * @property {boolean} feedbackNoMargin - Removes the margins around the feedback.
 * @property {string} feedbackId - The id of the feedback.
 *
 * @slot icon - The custom icon of the feedback.
 * @slot - The text of the feedback.
 *
 * @csspart base - The main feedback container.
 * @csspart icon - The icon of the feedback.
 * @csspart text - The text of the feedback.
 *
 * @cssproperty --dds-feedback-spacing - The spacing around the feedback component. Default is `var(--dds-spacing-200)`.
 * @cssproperty --dds-feedback-color - The text color of the feedback. Default is `var(--dds-text-positive-subtle)`.
 * @cssproperty --dds-feedback-font-size - The font size of the feedback. Default is `var(--dds-font-sm)`.
 * @cssproperty --dds-feedback-font-weight - The font weight of the feedback. Default is `var(--dds-font-weight-bold)`.
 * @cssproperty --dds-feedback-icon-fill - The fill color of the feedback icon. Default is `var(--dds-icon-positive-subtle)`.
 * @cssproperty --dds-feedback-icon-spacing - The spacing between the icon and text. Default is `var(--dds-spacing-100)`.
 *
 * @cssproperty --dds-feedback-color-warning - The text color for warning feedback. Default is `var(--dds-text-neutral-base)`.
 * @cssproperty --dds-feedback-color-positive - The text color for positive feedback. Default is `var(--dds-text-positive-subtle)`.
 * @cssproperty --dds-feedback-color-negative - The text color for negative feedback. Default is `var(--dds-text-negative-subtle)`.
 * @cssproperty --dds-feedback-icon-fill-warning - The icon fill color for warning feedback. Default is `var(--dds-icon-informative-subtle)`.
 * @cssproperty --dds-feedback-icon-fill-positive - The icon fill color for positive feedback. Default is `var(--dds-icon-positive-subtle)`.
 * @cssproperty --dds-feedback-icon-fill-negative - The icon fill color for negative feedback. Default is `var(--dds-icon-negative-subtle)`.
 */
export declare class DapDSFeedback extends DapDSFeedback_base {
    static readonly styles: CSSResult;
    render(): unknown;
}

declare const DapDSFeedback_base: typeof DdsElement & {
    new (...args: any[]): SizedElementInterface;
    prototype: SizedElementInterface;
} & {
    new (...args: any[]): FeedbackElementInterface;
    prototype: FeedbackElementInterface;
};

/**
 * `dap-ds-file-input`
 * @summary A file input is a control that allows users to select files to upload.
 * @element dap-ds-file-input
 * @title - File input
 *
 * @property {string} name - The name of the file input.
 * @property {string} value - The value of the file input.
 * @property {'success' | 'error'} status - The status of the file input.
 * @property {string} label - The label for the file input.
 * @property {string} description - The description for the file input.
 * @property {string} tooltip - The tooltip for the file input.
 * @property {'top' | 'right' | 'bottom' | 'left'} tooltipPlacement - The tooltip placement of the input.
 * @property {boolean} disabled - Whether the file input is disabled.
 * @property { 'xs' | 'sm' | 'lg' } size - The size of the file input.
 * @property {string} feedback - The feedback for the file input.
 * @property {'negative' | 'positive' | 'warning'} feedbackType - The type of feedback for the file input.
 * @property {boolean} required - Whether the file input is required.
 * @property {boolean} optional - Whether the file input is optional.
 * @property {boolean} subtle - Font weight of the feedback label. Default is `false` which is bold.
 * @property {string} uploadButtonLabel - The label for the upload button.
 * @property {string} browseButtonLabel - The label for the browse button.
 * @property {string} accept - The file types that the file input accepts.
 * @property {boolean} multiple - Whether the file input accepts multiple files.
 * @property {boolean} keepValue - Whether to keep the value when new files are selected.
 * @property {string} uploadUrl - A remote URL to upload files to.
 * @property {string} deleteUrl - A remote URL to delete uploaded files from. Supports placeholders: `{fileName}`, `{id}`, `{key}`, `{location}`.
 * @property {string} uploadHeaders - Custom headers for upload requests (JSON string).
 * @property {string} deleteHeaders - Custom headers for delete requests (JSON string).
 * @property {boolean} autoupload - Whether to automatically upload files after selection.
 * @property {number} maxFiles - The maximum number of files that can be uploaded.
 * @property {number} maxFileSize - The maximum size of files that can be uploaded (in bytes).
 * @property {string} maxFileSizeErrorText - Text for the max file size error.
 * @property {string} maxFileAmountErrorText - Text for the max file amount error.
 * @property {string} fileTypeErrorText - Text for the file type error.
 * @property {boolean} showDropzone - Whether to show a separate dropzone area.
 * @property {string} dropzoneText - Text to display in the dropzone.
 * @property {boolean} showFileList - Whether to show the built-in file list.
 * @property {boolean} confirmRemove - Whether to show confirmation dialog before removing files.
 * @property {string} showUploadButton - Whether to show the upload button. Default is `true`.
 * @property {string} removeButtonLabel - The label for the remove button.
 * @property {string} cancelButtonLabel - The label for the cancel button.
 *
 * @event {{ file: File }} dds-upload-start - Fired when a file upload starts.
 * @event {{ file: File, progress: number }} dds-upload-progress - Fired during file upload progress.
 * @event {{ file: File, item: DapDSFileInputListItem, result: any }} dds-upload-complete - Fired when a file upload completes successfully.
 * @event {{ file: File, item: DapDSFileInputListItem, error: Error } | { errors: Error[] }} dds-upload-error - Fired when a file upload encounters an error. Can contain a single error or an array of validation errors.
 * @event {{ void }} dds-all-uploads-complete - Fired when all file uploads are complete.
 * @event {{ file: FileListElement }} dds-file-removed - Fired when a file is removed from the file input.
 * @event {{ file: FileListElement, error: Error }} dds-file-delete-error - Fired when a file deletion from server encounters an error.
 * @event {{ files: File[] }} dds-file-change - Fired when the file input value changes.
 *
 * @slot dropzone-content - The content to display in the dropzone.
 *
 * @csspart base - The main file input container.
 * @csspart input - The file input control.
 * @csspart label - The file input label.
 * @csspart description - The file input description.
 * @csspart feedback - The file input feedback.
 * @csspart tooltip - The file input tooltip.
 * @csspart upload-progress - The upload progress container.
 * @csspart browse-button - The browse button.
 * @csspart upload-button - The upload button.
 * @csspart dropzone - The dropzone area.
 * @csspart file-list - The file list container.
 * @csspart file-list-item - Individual file list items.
 */
export declare class DapDSFileInput extends GenericFormElement {
    private readonly input;
    /** Label for the upload button */
    uploadButtonLabel: string;
    /** Label for the browse button */
    browseButtonLabel: string;
    /** Whether to show a separate dropzone area */
    showDropzone: boolean;
    /** Text to display in the dropzone */
    dropzoneText: string;
    /** Whether to show the built-in file list */
    showFileList: boolean;
    /** Whether to show confirmation dialog before removing files */
    confirmRemove: boolean;
    /** Whether to show the upload button */
    showUploadButton: string;
    /** Whether to show the browse button */
    showBrowseButton: string;
    /** The file types that the file input accepts */
    accept: string;
    /** Whether the file input accepts multiple files. */
    multiple: boolean;
    /** Whether to keep the value of the file input when new files are selected. */
    keepValue: boolean;
    /** A remote URL to upload files to */
    uploadUrl: string;
    /** Whether to automatically upload files after selection */
    autoupload: boolean;
    /** The property to use when uploading files */
    uploadProperty: string;
    /** The HTTP method to use when uploading files */
    uploadMethod: string;
    /** A remote URL to delete uploaded files from */
    deleteUrl: string;
    /** The HTTP method to use when deleting files */
    deleteMethod: string;
    /** Whether to send credentials with the file upload request */
    withCredentials: boolean;
    /** Custom headers to send with upload requests (JSON string) */
    uploadHeaders: string;
    /** Custom headers to send with delete requests (JSON string) */
    deleteHeaders: string;
    /** The file list component to bind to */
    fileList: DapDSFileInputList | null;
    /** The maximum number of files that can be uploaded */
    maxFiles?: number;
    /** The maximum size of files that can be uploaded (in bytes) */
    maxFileSize?: number;
    /** Text for the max file size error */
    maxFileSizeErrorText?: string;
    /** Text for the max file amount error */
    maxFileAmountErrorText?: string;
    /** Text for the file type error */
    fileTypeErrorText?: string;
    /** The label for the remove button */
    removeButtonLabel: string;
    /** The label for the cancel button */
    cancelButtonLabel: string;
    /** Whether the remove button is dangerous */
    removeButtonDanger: string;
    /** Whether to show thumbnail preview for supported file types in the built-in file list */
    showThumbnail: string;
    /** Size of the thumbnail preview in the built-in file list */
    thumbnailSize: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
    get files(): File[];
    private _files;
    private _uploadProgress;
    private readonly _uploadingFiles;
    private readonly _activeUploads;
    private readonly _uploadedFiles;
    private _isDragOver;
    private _showRemoveDialog;
    private _fileToRemove;
    private _removeResolve;
    private _removeReject;
    static readonly styles: CSSResult;
    checkFileEquality(file1: File | FileListElement, file2: File | FileListElement): boolean;
    /**
     * Validates if a file type is accepted based on the accept attribute
     */
    private validateFileType;
    get focusElement(): HTMLInputElement;
    /**
     * Validates a file list against all constraints (count, size, type)
     */
    private validateFiles;
    removeFile(fileData: FileListElement | File): Promise<void> | void;
    private performFileRemoval;
    connectedCallback(): void;
    onConfirmDelete(): Promise<void>;
    onCancelDelete(): void;
    onCancel(): void;
    onClick(): void;
    onDropzoneKeydown(event: KeyboardEvent): void;
    setFileLoadingState(file: File, loading: boolean): DapDSFileInputListItem | undefined;
    /**
     * Aborts upload for a specific file
     */
    abortUpload(fileName: string): void;
    /**
     * Aborts all active uploads
     */
    abortAllUploads(): void;
    /**
     * Manually start upload of all selected files
     */
    startUpload(): void;
    /**
     * Delete an uploaded file from the server
     */
    private deleteUploadedFile;
    private uploadFiles;
    private handleFileList;
    onChange(event: InputEvent): void;
    onDragenter(event: DragEvent): void;
    onDragover(event: DragEvent): void;
    onDragleave(event: DragEvent): void;
    onDrop(event: DragEvent): void;
    render(): TemplateResult_2<1>;
}

/**
 * `dap-ds-file-input-list`
 * @summary A file input list is a container for file input items.
 * @element dap-ds-file-input-list
 * @title - File input list
 * @group file-input
 *
 * @slot delete-button - The delete button.
 *
 * @csspart base - The main file input list container.
 *
 * @cssproperty --dds-file-list-display - Controls the display property (default: flex)
 * @cssproperty --dds-file-list-flex-direction - Controls the flex-direction property (default: column)
 * @cssproperty --dds-file-list-padding - Controls the padding property (default: 0)
 * @cssproperty --dds-file-list-list-style - Controls the list-style-type property (default: none)
 * @cssproperty --dds-file-list-gap - Controls the row-gap property (default: var(--dds-spacing-200))
 */
export declare class DapDSFileInputList extends DapDSFileInputList_base {
    /** The aria label for the file input list. */
    /** The id of the file input element to bind to. */
    for: string;
    /** Disables the file input list. */
    disabled: boolean;
    /** The label for the file input list. */
    label?: string;
    /** Whether to show the delete button in the file input list item. */
    showDeleteButton: string;
    /** Whether to show the file link in the file input list item. */
    showFileLink: string;
    /** File item template function
     * @type {(fileItemTemplate: FileItemTemplate) => TemplateResult}
     */
    fileItemTemplate?: (fileItemTemplate: FileItemTemplate) => TemplateResult;
    /** The label of the file link. */
    fileLinkLabel: string;
    /** Whether to show the file size in the file input list item */
    showFileSize: string;
    /** Whether to show thumbnail preview for supported file types
     * @ignore
     */
    showThumbnail: string;
    /** Size of the thumbnail preview
     * @ignore
     */
    thumbnailSize: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
    private _files;
    static readonly styles: CSSResult;
    private fileInputElement;
    get files(): NodeListOf<DapDSFileInputListItem>;
    getFileByName(name: string): Element | null;
    private _handleFileChange;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    removeFile(event: CustomEvent): void;
    render(): TemplateResult<1>;
}

declare const DapDSFileInputList_base: typeof DdsElement & {
    new (...args: any[]): SizedElementInterface;
    prototype: SizedElementInterface;
};

/**
 * `dap-ds-file-input-list-item`
 * @summary A file input list item is a container for file input list items.
 * @element dap-ds-file-input-list-item
 * @title - File input list item
 * @group file-input
 *
 * @event {{ file: FileListElement }} dds-file-remove - Dispatched when a file is removed from the list.
 *
 * @slot delete-button - The delete button.
 *
 * @csspart base - The main file input list item container.
 * @csspart feedback - The feedback container.
 * @csspart link - The link text of the item component.
 * @csspart filename - The filename text of the item component.
 * @csspart filesize - The filesize text of the item component.
 * @csspart spinner - The spinner of the item component.
 * @csspart remove-button - The remove button of the item component.
 * @csspart thumbnail - The thumbnail of the item component.
 *
 * @cssproperty --dds-file-list-item-padding - The padding of the file list item.
 * @cssproperty --dds-file-list-item-border-width - The border width of the file list item.
 * @cssproperty --dds-file-list-item-border-color - The border color of the file list item.
 * @cssproperty --dds-file-list-item-border-radius - The border radius of the file list item.
 * @cssproperty --dds-file-list-item-bg-color - The background color of the file list item.
 * @cssproperty --dds-file-list-item-font-weight - The font weight of the file list item.
 * @cssproperty --dds-file-list-item-disabled-bg-color - The background color of the disabled file list item.
 * @cssproperty --dds-file-list-item-disabled-color - The text color of the disabled file list item.
 * @cssproperty --dds-file-list-item-content-margin - The margin of the content within the file list item.
 * @cssproperty --dds-file-list-item-content-gap - The gap between content elements in the file list item.
 * @cssproperty --dds-file-list-item-filename-color - The color of the filename text.
 * @cssproperty --dds-file-list-item-filesize-color - The color of the filesize text.
 * @cssproperty --dds-file-list-item-feedback-padding - The padding of the feedback section.
 * @cssproperty --dds-file-list-item-feedback-border-color - The border color of the feedback section.
 * @cssproperty --dds-file-list-item-feedback-font-size - The font size of the feedback text.
 */
export declare class DapDSFileInputListItem extends DapDSFileInputListItem_base {
    /** Disables the file input list item. */
    disabled: boolean;
    /** The name of the file input. */
    inputName: string;
    /** The feedback message. */
    feedback: string;
    /** Feedback type.
     * @type {'negative' | 'positive' | 'warning' | 'info'}
     */
    feedbackType: FeedbackType;
    /** Loading state of the file input list item. */
    loading?: boolean | undefined;
    /** Show delete button. */
    showDeleteButton: string;
    /** Show file size. */
    showSize?: string | undefined;
    /** Show file link. */
    showFileLink?: string | undefined;
    /** File item template function
     * @type {(fileItemTemplate: FileItemTemplate) => TemplateResult}
     */
    fileItemTemplate?: (fileItemTemplate: FileItemTemplate) => TemplateResult;
    /** The label of the file link. */
    fileLinkLabel: string;
    /** The file data. */
    fileData: FileListElement | File;
    /** Subtle style. */
    subtle: boolean;
    /** The progress of the file upload. */
    progress: string;
    /** The url of the item link. If present, the item title will rendered as a link. */
    href: string;
    /** The rel of the item link. Only used if href is present. */
    rel: string;
    /** The target of the item link. Only used if href is present. */
    target: LinkTarget;
    /** Whether the file should be downloaded when clicked. */
    download: string;
    /** Whether to show thumbnail preview for supported file types. */
    showThumbnail: string;
    /** Size of the thumbnail preview. */
    thumbnailSize: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
    private _fileObjectUrl;
    private _thumbnailUrl;
    private _fileType;
    static readonly styles: CSSResult;
    delete(file?: FileListElement | File): void;
    private detectFileType;
    private getFileTypeIcon;
    private generateThumbnail;
    private createFileObjectUrl;
    cleanupFileObjectUrl(): void;
    private handleFileClick;
    connectedCallback(): void;
    updated(changedProperties: Map<string, any>): void;
    disconnectedCallback(): void;
    get formattedSize(): string;
    render(): TemplateResult<1>;
}

declare const DapDSFileInputListItem_base: typeof DdsElement & {
    new (...args: any[]): SizedElementInterface;
    prototype: SizedElementInterface;
};

/**
 * `dap-ds-form-label`
 * @summary A form label is a container for labels in a form.
 * @element dap-ds-form-label
 * @title - Form label
 * @group form
 *
 * @property {string} optionalLabel - Label of optional text
 * @property {boolean} subtle - Text weight of the label.
 * @property {boolean} optional - If the label is optional.
 * @property {boolean} required - If the label is required.
 * @property {string} label - The label text.
 *
 * @csspart base - The main form label container.
 * @csspart required - The required indicator of the form label.
 * @csspart optional - The optional indicator of the form label.
 *
 * @cssproperty --dds-form-label-font-weight - Font weight of the label. Defaults to var(--dds-font-weight-bold).
 * @cssproperty --dds-form-label-line-height - Line height of the label. Defaults to var(--dds-font-line-height-xlarge).
 * @cssproperty --dds-form-label-color - Text color of the label. Defaults to var(--dds-text-neutral-enabled).
 * @cssproperty --dds-form-label-disabled-color - Text color when the label is disabled. Defaults to var(--dds-text-neutral-disabled).
 * @cssproperty --dds-form-label-required-color - Color of the required indicator. Defaults to var(--dds-text-negative-subtle).
 * @cssproperty --dds-form-label-optional-color - Color of the optional indicator. Defaults to var(--dds-text-neutral-subtle).
 * @cssproperty --dds-form-label-margin-bottom - Bottom margin of the label. Defaults to var(--dds-spacing-200).
 */
export declare class DapDSFormLabel extends DapDSFormLabel_base {
    /** The id of the form element that the label is associated with. */
    for?: string;
    /** Whether the label should be rendered as text or a <label> tag. Default is label. */
    renderAs: string;
    static readonly styles: CSSResult;
    createRenderRoot(): this;
    render(): TemplateResult_2;
}

declare const DapDSFormLabel_base: {
    new (...args: any[]): LabelableElementInterface;
    prototype: LabelableElementInterface;
} & typeof DdsElement & {
    new (...args: any[]): SizedElementInterface;
    prototype: SizedElementInterface;
};

/**
 * `dap-ds-icon`
 * @summary An icon is a graphical symbol that represents an object or action.
 * @element dap-ds-icon
 * @title - Icon
 *
 * @property {boolean} ariaHidden - Whether the icon is hidden from the accessibility tree. Default is true.
 * @property {string} ariaLabel - The aria label of the icon.
 *
 * @slot - The content of the icon for custom svg icons.
 *
 * @csspart base - The main icon container.
 * @csspart icon - The icon of the icon.
 *
 * @cssproperty --dds-icon-size-xs - The size of extra small icons (default: 12px)
 * @cssproperty --dds-icon-size-sm - The size of small icons (default: 16px)
 * @cssproperty --dds-icon-size-md - The size of medium icons (default: 20px)
 * @cssproperty --dds-icon-size-lg - The size of large icons (default: 24px)
 * @cssproperty --dds-icon-size-xl - The size of extra large icons (default: 32px)
 * @cssproperty --dds-icon-size-xxl - The size of extra extra large icons (default: 40px)
 */
export declare class DapDSIcon extends DdsElement {
    /** The name of the icon */
    name: string;
    /** The size of the icon
     * @type {'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'}
     */
    size: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    /** The size of the icon in pixels. This overrides the size attribute. */
    staticSize?: number;
    /** Whether the icon is focusable. Default is false. */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
    private _getNamedIcon;
    private _getSlotIcon;
    private _getIconSizePx;
}

/**
 * `dap-ds-icon-button`
 * @summary An icon button is a button with an icon.
 * @element dap-ds-icon-button
 * @title - Icon button
 *
 * @property {string} ariaLabel - The aria label of the button.
 *
 * @slot - The icon of the button.
 *
 * @csspart base - The main button container.
 * @csspart content - The icon of the button.
 *
 * @cssproperty --dds-icon-button-border-width - The width of the button's border. Defaults to var(--dds-border-width-base).
 * @cssproperty --dds-icon-button-border-color - The color of the button's border. Defaults to var(--dds-border-neutral-transparent-interactive).
 * @cssproperty --dds-icon-button-border-radius - The border radius of the button. Defaults to var(--dds-radius-rounded).
 * @cssproperty --dds-icon-button-hover-border-width - The width of the button's border on hover. Defaults to var(--dds-border-width-large).
 * @cssproperty --dds-icon-button-active-border-width - The width of the button's border when active. Defaults to var(--dds-border-width-xlarge).
 * @cssproperty --dds-icon-button-transition - The transition property for the button. Defaults to var(--dds-transition-all).
 * @cssproperty --dds-icon-button-cursor - The cursor style for the button. Defaults to pointer.
 * @cssproperty --dds-icon-button-disabled-cursor - The cursor style for the disabled button. Defaults to not-allowed.
 *
 * @cssproperty --dds-icon-button-column-gap - The gap between icon and text. Defaults to var(--dds-spacing-100).
 * @cssproperty --dds-icon-button-padding-lg - Padding for large size. Defaults to var(--dds-spacing-0).
 * @cssproperty --dds-icon-button-padding-md - Padding for medium size. Defaults to var(--dds-spacing-100).
 * @cssproperty --dds-icon-button-padding-sm - Padding for small size. Defaults to var(--dds-spacing-50).
 * @cssproperty --dds-icon-button-padding-xs - Padding for extra small size. Defaults to var(--dds-spacing-25).
 *
 * @cssproperty --dds-icon-button-size-lg - Size for large button. Defaults to var(--dds-spacing-800).
 * @cssproperty --dds-icon-button-size-md - Size for medium button. Defaults to var(--dds-spacing-600).
 * @cssproperty --dds-icon-button-size-sm - Size for small button. Defaults to var(--dds-spacing-400).
 * @cssproperty --dds-icon-button-size-xs - Size for extra small button. Defaults to var(--dds-spacing-300).
 *
 * @cssproperty --dds-icon-button-neutral-bg - Background color for neutral variant. Defaults to var(--dds-transparent-black-subtle).
 * @cssproperty --dds-icon-button-neutral-color - Text color for neutral variant. Defaults to var(--dds-icon-neutral-base).
 * @cssproperty --dds-icon-button-neutral-hover-bg - Hover background color for neutral variant. Defaults to var(--dds-transparent-black-base).
 * @cssproperty --dds-icon-button-neutral-active-bg - Active background color for neutral variant. Defaults to var(--dds-transparent-black-medium).
 *
 * @cssproperty --dds-icon-button-brand-bg - Background color for brand variant. Defaults to var(--dds-button-subtle-background-enabled).
 * @cssproperty --dds-icon-button-brand-color - Text color for brand variant. Defaults to var(--dds-button-subtle-icon-enabled).
 * @cssproperty --dds-icon-button-brand-hover-bg - Hover background color for brand variant. Defaults to var(--dds-button-subtle-background-hover).
 * @cssproperty --dds-icon-button-brand-active-bg - Active background color for brand variant. Defaults to var(--dds-button-subtle-background-pressed).
 *
 * @cssproperty --dds-icon-button-inverted-bg - Background color for inverted variant. Defaults to var(--dds-transparent-white-subtle).
 * @cssproperty --dds-icon-button-inverted-color - Text color for inverted variant. Defaults to var(--dds-button-primary-icon-enabled).
 * @cssproperty --dds-icon-button-inverted-hover-bg - Hover background color for inverted variant. Defaults to var(--dds-transparent-white-base).
 * @cssproperty --dds-icon-button-inverted-active-bg - Active background color for inverted variant. Defaults to var(--dds-transparent-white-medium).
 *
 * @cssproperty --dds-icon-button-inverted-brand-bg - Background color for inverted brand variant. Defaults to var(--dds-button-primary-background-enabled).
 * @cssproperty --dds-icon-button-inverted-brand-color - Text color for inverted brand variant. Defaults to var(--dds-button-primary-icon-enabled).
 * @cssproperty --dds-icon-button-inverted-brand-hover-bg - Hover background color for inverted brand variant. Defaults to var(--dds-button-primary-background-enabled).
 * @cssproperty --dds-icon-button-inverted-brand-active-bg - Active background color for inverted brand variant. Defaults to var(--dds-button-primary-background-enabled).
 *
 * @cssproperty --dds-icon-button-disabled-color - Color for disabled state. Defaults to var(--dds-icon-neutral-disabled).
 */
export declare class DapDSIconButton extends DdsElement {
    /** The type of the button.
     * @type {'neutral' | 'brand' | 'inverted' | 'inverted-brand'}
     */
    variant?: ButtonVariant_2;
    /** Adds a transparent background to the button */
    clean?: boolean | undefined;
    /** The size of the icon
     * @type {'lg' | 'md' | 'sm' | 'xs'}
     */
    size: ButtonSize_2;
    /**
     * The size of the icon in pixels. By default the icon gets the size of the button. This property overwrites the size of the icon.
     */
    iconSize: number;
    /** The disabled state of the button. */
    disabled: boolean;
    /**
     * The type of the button.
     * @type {'button' | 'submit' | 'reset'}
     */
    htmlType: HtmlButtonType_2;
    /** The icon of the button. You can use the icon names from the icon component */
    icon: string;
    /** The name of the button */
    name: string;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    focus(): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-input`
 * @summary An input is a field used to collect user input.
 * @element dap-ds-input
 * @title - Input
 *
 * @property {string} label - The label of the input.
 * @property {string} description - The description of the input.
 * @property {string} optionalLabel - Text of optional label.
 * @property {boolean} subtle - Text weight of label. If true the label is subtle. Default value is false.
 * @property {string} value - The value of the input.
 * @property {string} placeholder - The placeholder of the input.
 * @property {boolean} loading - The loading state of the input. Default is false.
 * @property {string} tooltip - The tooltip of the input.
 * @property {'top' | 'right' | 'bottom' | 'left'} tooltipPlacement - The tooltip placement of the input.
 * @property {string} tooltipAriaLabel - The aria label of the tooltip.
 * @property {string} feedback - The feedback of the input.
 * @property {'negative' | 'positive' | 'warning'} feedbackType - The feedback type of the input. Can be `negative`, `positive`, or `warning`.
 * @property {'succes' | 'error'} status - The status of the input. Can be `success` or `error`.
 * @property {'xs' | 'sm' | 'lg'} size - The size of the input. Default is `sm`.
 * @property {string} name - The name of the input.
 * @property {'text' | 'number' | 'button' | 'color' | 'email' | 'hidden' | 'reset' | 'submit' | 'url' | 'password'| 'file' | 'time'} type - The type of the input. Default is 'text'.
 * @property {boolean} disabled - The disabled state of the input. Default is false.
 * @property {boolean} required - The required state of the input. Default is false.
 * @property {boolean} readonly - The readonly state of the input. Default is false.
 * @property {boolean} autofocus - The autofocus state of the input. Default is false.
 * @property {boolean} autocapitalize - The autocapitalize state of the input. Default is false.
 * @property {number} minlength - The minimum length of the input.
 * @property {number} maxlength - The maximum length of the input.
 * @property {number} min - The minimum value of the number input.
 * @property {number} max - The maximum value of the number input.
 * @property {number} step - The step value of the number input.
 * @property {string} inputmode - The inputmode of the input.
 * @property {string} pattern - The regex pattern of the input.
 *
 * @cssproperty --dds-input-height - The height of the input. Default is var(--dds-spacing-1000).
 * @cssproperty --dds-input-padding - The padding of the input. Default is var(--dds-spacing-300).
 * @cssproperty --dds-input-font-size - The font size of the input. Default is var(--dds-font-base).
 * @cssproperty --dds-input-border-color - The border color of the input. Default is var(--dds-border-neutral-base).
 * @cssproperty --dds-input-background-color - The background color of the input. Default is var(--dds-fields-background-default).
 * @cssproperty --dds-input-text-color - The text color of the input. Default is var(--dds-text-neutral-base).
 * @cssproperty --dds-input-border-radius - The border radius of the input. Default is var(--dds-radius-base).
 * @cssproperty --dds-input-border-width - The border width of the input. Default is var(--dds-border-width-base).
 * @cssproperty --dds-input-disabled-background - The background color of the disabled input. Default is var(--dds-fields-background-disabled).
 * @cssproperty --dds-input-disabled-text - The text color of the disabled input. Default is var(--dds-text-neutral-disabled).
 * @cssproperty --dds-input-readonly-background - The background color of the readonly input. Default is var(--dds-fields-background-read-only).
 * @cssproperty --dds-input-readonly-text - The text color of the readonly input. Default is var(--dds-text-neutral-subtle).
 * @cssproperty --dds-input-success-border - The border color of the success input. Default is var(--dds-border-positive-base).
 * @cssproperty --dds-input-error-border - The border color of the error input. Default is var(--dds-border-negative-base).
 * @cssproperty --dds-input-addon-background - The background color of the input addon. Default is var(--dds-background-ui-neutral-enabled).
 * @cssproperty --dds-input-addon-success-background - The background color of the success input addon. Default is var(--dds-background-ui-positive-enabled).
 * @cssproperty --dds-input-addon-error-background - The background color of the error input addon. Default is var(--dds-background-ui-negative-enabled).
 *
 * @event {{ value: string }} dds-change - Fired when the input value changes.
 * @event {{ value: string }} dds-input - Fired when the input value changes.
 * @event {{ value: string, originalEvent: Event }} dds-keydown - Fired when a key is pressed down.
 * @event {{ void }} dds-blur - Fired when the input loses focus.
 * @event {{ void }} dds-focus - Emitted when the input gains focus.
 *
 * @slot postfix - The postfix of the input.
 * @slot prefix - The prefix of the input.
 * @slot addon-before - The addon before the input.
 * @slot addon-after - The addon after the input.
 * @slot feedback-icon - The custom icon of the feedback.
 *
 * @csspart base - The main input container.
 * @csspart input - The input element.
 * @csspart label - The label of the input.
 * @csspart description - The description of the input.
 * @csspart feedback - The feedback of the input.
 * @csspart tooltip - The tooltip of the input.
 * @csspart addon-before - The addon before the input.
 * @csspart addon-after - The addon after the input.
 * @csspart prefix - The prefix of the input.
 * @csspart postfix - The postfix of the input.
 *
 */
export declare class DapDSInput extends InputBaseElement {
    render(): TemplateResult_2<1>;
}

/**
 * `dap-ds-input-group`
 * @summary An input group is a container for inputs.
 * @element dap-ds-input-group
 * @title - Input group
 * @group form
 *
 * @property {string} label - The label of the input group.
 * @property {string} description - The description of the input group.
 * @property {string} tooltip - The tooltip of the input group.
 * @property {'top' | 'right' | 'bottom' | 'left'} tooltipPlacement - The tooltip placement of the input group.
 * @property {string} tooltipAriaLabel - The aria label of the tooltip.
 * @property {string} optionalLabel - The label of the input group when it is optional.
 * @property {boolean} disabled - Whether the input group is disabled.
 * @property {'xs' | 'sm' | 'lg'} size - The size of the input group. Default is `sm`. Can be `sm` or `lg`.
 * @property {boolean} required - Whether the input group is required.
 * @property {boolean} optional - Whether the input group is optional.
 * @property {string} feedback - The feedback of the input.
 * @property {string} feedbackType - The type of the feedback.
 * @property {boolean} subtle - Whether the input group label is subtle.
 *
 * @slot - The content of the input group items.
 * @slot feedback-icon - The custom icon of the feedback.
 *
 * @csspart base - The main input group container.
 * @csspart label - The label of the input group.
 * @csspart description - The description of the input group.
 * @csspart tooltip - The tooltip of the input group.
 * @csspart container - The container of the input group items.
 */
export declare class DapDSInputGroup extends GenericFormElement {
    static readonly styles: CSSResult;
    allInputs: DapDSCheckbox[] | DapDSSwitch[];
    handleLabelClick(): void;
    private getItems;
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
    render(): TemplateResult_2;
    private _handleSlotChange;
    private _renderFeedback;
}

/**
 * `dap-ds-label`
 * @summary A label is a container for labels intended for general use. It contains a label text, description, and tooltip.
 * @element dap-ds-label
 * @title - Label
 *
 * @property {string} label - The label text
 * @property {string} description - The description of the label
 * @property {string} tooltip - The tooltip text
 * @property {'xs' | 'sm' | 'lg'} size - The size of the input. Default is `sm`.
 * @property {'top' | 'right' | 'bottom' | 'left'} tooltipPlacement - The tooltip placement of the label.
 * @property {boolean} optional - If the label is optional. Default value is `false`.
 * @property {string} optionalLabel - Label of optional text
 * @property {boolean} subtle - Text weight of label. If true the label is subtle. Default value is `false`.
 * @property {boolean} disabled - The disabled state of the label. Default is `false`.
 * @property {boolean} required - The required state of the label. Default is `false`.
 *
 * @csspart base - The main label container.
 * @csspart label - Tha main label container. dap-ds-form-label element.
 * @csspart label-base - The label text.
 * @csspart label-required - The required indicator of the label.
 * @csspart label-optional - The optional indicator of the label.
 * @csspart tooltip - The tooltip of the label. dap-ds-tooltip element.
 * @csspart description - The description of the label.
 *
 * @cssproperty {string} --dds-label-background - The background color of the label container. Default is `var(--dds-background-neutral-subtle)`.
 * @cssproperty {string} --dds-label-border-color - The border color of the label container. Default is `var(--dds-border-neutral-subtle)`.
 * @cssproperty {string} --dds-label-border-width - The border width of the label container. Default is `var(--dds-border-width-base)`.
 * @cssproperty {string} --dds-label-border-radius - The border radius of the label container. Default is `var(--dds-radius-base)`.
 * @cssproperty {string} --dds-label-padding - The padding of the label container. Default is `var(--dds-spacing-400)`.
 * @cssproperty {string} --dds-label-disabled-background - The background color of the label container when disabled. Default is `var(--dds-background-neutral-disabled-inverted)`.
 * @cssproperty {string} --dds-label-checked-border-color - The border color of the label container when checked. Default is `var(--dds-background-brand-base-inverted)`.
 */
export declare class DapDSLabel extends DapDSLabel_base {
    static readonly styles: CSSResult;
    render(): unknown;
}

declare const DapDSLabel_base: {
    new (...args: any[]): LabelableElementInterface;
    prototype: LabelableElementInterface;
} & typeof DdsElement;

/**
 * `dap-ds-link`
 * @summary A link is a reference to a web resource.
 * @element dap-ds-link
 * @title - Link
 *
 * @event {{ event: Event }} dds-click - Emitted when the link is clicked.
 *
 * @slot - The text of the link.
 *
 * @csspart base - The main link container.
 * @csspart text - The text of the link.
 *
 * @cssproperty --dds-link-color - The color of the link text
 * @cssproperty --dds-link-hover-color - The color of the link text on hover
 * @cssproperty --dds-link-active-color - The color of the link text when active
 * @cssproperty --dds-link-visited-color - The color of the visited link text
 * @cssproperty --dds-link-font-size - The font size of the link text
 * @cssproperty --dds-link-line-height - The line height of the link text
 * @cssproperty --dds-link-font-weight - The font weight of the link text
 * @cssproperty --dds-link-text-decoration - The text decoration of the link
 *
 * @cssproperty --dds-link-neutral-color - The color of the neutral variant link
 * @cssproperty --dds-link-neutral-hover-color - The hover color of the neutral variant link
 * @cssproperty --dds-link-neutral-active-color - The active color of the neutral variant link
 * @cssproperty --dds-link-neutral-visited-color - The visited color of the neutral variant link
 *
 * @cssproperty --dds-link-brand-color - The color of the brand variant link
 * @cssproperty --dds-link-brand-hover-color - The hover color of the brand variant link
 * @cssproperty --dds-link-brand-active-color - The active color of the brand variant link
 * @cssproperty --dds-link-brand-visited-color - The visited color of the brand variant link
 *
 * @cssproperty --dds-link-inverted-color - The color of the inverted variant link
 * @cssproperty --dds-link-inverted-hover-color - The hover color of the inverted variant link
 * @cssproperty --dds-link-inverted-active-color - The active color of the inverted variant link
 * @cssproperty --dds-link-inverted-visited-color - The visited color of the inverted variant link
 *
 * @cssproperty --dds-link-warning-color - The color of the warning variant link
 * @cssproperty --dds-link-warning-hover-color - The hover color of the warning variant link
 * @cssproperty --dds-link-warning-active-color - The active color of the warning variant link
 * @cssproperty --dds-link-warning-visited-color - The visited color of the warning variant link
 *
 * @cssproperty --dds-link-disabled-color - The color of the disabled link
 * @cssproperty --dds-link-disabled-hover-color - The hover color of the disabled link
 * @cssproperty --dds-link-disabled-active-color - The active color of the disabled link
 * @cssproperty --dds-link-disabled-visited-color - The visited color of the disabled link
 *
 * @cssproperty --dds-link-lg-font-size - The font size of the large link
 * @cssproperty --dds-link-lg-line-height - The line height of the large link
 * @cssproperty --dds-link-md-font-size - The font size of the medium link
 * @cssproperty --dds-link-md-line-height - The line height of the medium link
 * @cssproperty --dds-link-sm-font-size - The font size of the small link
 * @cssproperty --dds-link-sm-line-height - The line height of the small link
 * @cssproperty --dds-link-xs-font-size - The font size of the extra small link
 * @cssproperty --dds-link-xs-line-height - The line height of the extra small link
 *
 * @cssproperty --dds-link-normal-font-weight - The font weight of the normal link
 * @cssproperty --dds-link-bold-font-weight - The font weight of the bold link
 *
 * @cssproperty --dds-link-no-underline-text-decoration - The text decoration when underline is removed
 */
export declare class DapDSLink extends DdsElement {
    /** The size of the link
     * @type {'lg' | 'md' | 'sm' | 'xs'}
     */
    size?: LinkSize;
    /** The theme of the link
     * @type {'neutral' | 'brand' | 'inverted' | 'warning'}
     */
    variant: LinkVariant;
    /** The target of the link.
     * @type {'_blank' | '_self' | '_parent' | '_top'}
     */
    target: LinkTarget;
    /** Bold link style */
    bold: boolean;
    /** Removes underline style */
    noUnderline: boolean;
    /** The href / URL of the link */
    href: string;
    /** Disabled state of the link */
    disabled: boolean;
    /** The rel of the link */
    rel: string;
    /** The download attribute of the link */
    download: boolean;
    static readonly styles: CSSResult;
    private handleClick;
    focus(): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-list-item` is a custom banner component.
 * @element dap-ds-list-item
 * @summary A list
 * @title - List item
 *
 * @slot - The content of the list item.
 * @slot icon - The icon of the list item.
 * @slot title - The title of the list item.
 * @slot actions - The actions of the list item.
 *
 * @csspart base - The main list item container.
 * @csspart icon - The icon of the list item.
 * @csspart title - The title of the list item.
 * @csspart description - The description of the list item.
 * @csspart container - The container of the list item.
 * @csspart list-item-base - The base list item container.
 * @csspart icon-container - The container of the icon.
 * @csspart title-container - The container of the title.
 * @csspart description-container - The container of the description.
 * @csspart actions-container - The container of the actions.
 * @csspart iteractive-indicator-container - The container of the interactive indicator.
 *
 * @cssproperty --dds-list-item-gap - Gap between list item elements (default: var(--dds-spacing-200))
 * @cssproperty --dds-list-item-content-gap - Gap between content elements (default: var(--dds-spacing-200))
 * @cssproperty --dds-list-item-horizontal-gap - Gap for horizontal alignment (default: var(--dds-spacing-300))
 * @cssproperty --dds-list-item-vertical-gap - Gap for vertical alignment (default: var(--dds-spacing-200))
 * @cssproperty --dds-list-item-icon-size - Size of the icon (default: var(--dds-spacing-600))
 * @cssproperty --dds-list-item-number-size - Size of the number icon (default: 20px)
 * @cssproperty --dds-list-item-actions-gap - Gap between action elements (default: var(--dds-spacing-400))
 * @cssproperty --dds-list-item-actions-padding - Padding for the actions container (default: var(--dds-spacing-100))
 *
 * @cssproperty --dds-list-item-background-base - Background color for base shade (default: var(--dds-background-neutral-base))
 * @cssproperty --dds-list-item-background-subtle - Background color for subtle shade (default: var(--dds-background-neutral-subtle))
 * @cssproperty --dds-list-item-background-medium - Background color for medium shade (default: var(--dds-background-neutral-medium))
 * @cssproperty --dds-list-item-background-strong - Background color for strong shade (default: var(--dds-background-neutral-strong))
 *
 * @cssproperty --dds-list-item-icon-brand - Color for brand icon (default: var(--dds-icon-brand-subtle))
 * @cssproperty --dds-list-item-icon-neutral - Color for neutral icon (default: var(--dds-icon-neutral-base))
 * @cssproperty --dds-list-item-icon-positive - Color for positive icon (default: var(--dds-icon-positive-subtle))
 * @cssproperty --dds-list-item-icon-negative - Color for negative icon (default: var(--dds-icon-negative-subtle))
 *
 * @cssproperty --dds-list-item-title-color - Title text color (default: var(--dds-text-neutral-strong))
 * @cssproperty --dds-list-item-description-color - Description text color (default: var(--dds-text-neutral-base))
 * @cssproperty --dds-list-item-number-text-color - Number text color (default: var(--dds-text-neutral-inverted))
 *
 */
export declare class DapDSListItem extends DdsElement {
    private readonly actionSlot;
    private readonly actionContainer;
    /**
     * The variant of the list item.
     * @type {'info' | 'pass' | 'fail' | 'notapplicable' | 'empty' | 'number'}
     */
    variant: ListItemVariant;
    /**
     * The background strongness of the list item.
     * @type {'none' | 'subtle' | 'base' | 'medium' | 'strong'}
     */
    shade: BackgroundShade;
    /**
     * The status of the list item.
     * @type {'transparent' | 'brand' | 'neutral' | 'positive' | 'negative'}
     */
    status: ListItemStatus;
    /**
     * The alignment of the list item.
     * @type {'horizontal' | 'vertical'}
     */
    alignment: Alignment;
    /**
     * The title of the list item.
     */
    title: string;
    /**
     * The icon of the list item. This is an icon name from the built in icons.
     */
    icon: string;
    /**
     * The number of the list item. Only used when variant is 'number'.
     */
    number: number;
    /**
     * Whether the list item is interactive. Generates an anchor tag.
     */
    interactive: boolean;
    /** The link target of the list item when interactive.
     * @type { '_blank' | '_self' | '_parent' | '_top' }
     */
    target: LinkTarget;
    /** The href of the list item when interactive */
    href: string;
    /** The rel of the list item when interactive */
    rel: string;
    /**
     * Whether the list item has an icon.
     */
    noIcon: boolean;
    /**
     * Whether the list item has no padding.
     */
    noPadding: boolean;
    /**
     * The render as type of the list item, only applicable when interactive.
     * @type {'a' | 'button'}
     */
    renderAs: 'a' | 'button';
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private readonly getIcon;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-modal`
 * @summary A modal is a container for modal content.
 * @element dap-ds-modal
 * @title - Modal
 *
 * @property {boolean} open - The open state of the modal.
 * @property {boolean} fullScreen - The full screen version of the modal.
 * @property {boolean} wideFooter - Wide layout mode for footer.
 * @property {boolean} bottomFooter - Pushes the footer to bottom.
 * @property {boolean} closeOnEsc - Whether the modal should close on pressing the escape key. Default is true.
 * @property {boolean} closeOnOverlayClick - Whether the modal should close on clicking the overlay. Default is true.
 * @property {string} closeButton - Whether the modal should have a close button. Default is true.
 * @property {string} title - The title of the modal.
 * @property {string} description - The description of the modal.
 * @property {string} okButtonLabel - The label of the OK button.
 * @property {string} cancelButtonLabel - The label of the Cancel button.
 * @property {boolean} okButtonDisabled - Whether the OK button should be disabled.
 * @property {boolean} cancelButtonDisabled - Whether the Cancel button should be disabled.
 * @property {boolean} cancelButtonDanger - Whether the Cancel button should be a danger button.
 * @property {boolean} okButtonDanger - Whether the OK button should be a danger button.
 * @property {boolean} hideOkButton - Whether the OK button should be hidden.
 * @property {boolean} hideCancelButton - Whether the Cancel button should be hidden.
 * @property {string} footer - Whether the modal should have a footer. Default is true.
 * @property {string} header - Whether the modal should have a header. Default is true.
 * @property {boolean} useNativeFocus - Whether the modal should use native focus. Default is false.
 *
 * @event {{ void }} dds-before-open - Fires before the modal opens.
 * @event {{ void }} dds-opened - Fires after the modal opens.
 * @event {{ void }} dds-before-close - Fires before the modal closes.
 * @event {{ void }} dds-closed - Fires after the modal closed.
 * @event {{ void }} dds-close - Fires when the modal is closes. You can prevent the modal from closing by calling `event.preventDefault()`.
 * @event {{ void }} dds-ok - Fires when the OK button is clicked. You can prevent the modal from closing by calling `event.preventDefault()`.
 * @event {{ void }} dds-cancel - Fires when the Cancel button is clicked. You can prevent the modal from closing by calling `event.preventDefault()`.
 *
 * @slot - The content of the modal.
 * @slot title - The title of the modal.
 * @slot description - The description of the modal.
 * @slot footer - The footer of the modal.
 *
 * @csspart base - The main modal container.
 * @csspart panel - The panel of the modal.
 * @csspart header - The header of the modal.
 * @csspart title - The title of the modal.
 * @csspart description - The description of the modal.
 * @csspart footer - The footer of the modal.
 * @csspart content - The body of the modal.
 * @csspart closebutton - The close button of the modal.
 *
 * @cssproperty --dds-modal-max-block-size - Maximum height of the modal. Default: 80vh.
 * @cssproperty --dds-modal-max-inline-size - Maximum width of the modal. Default: 600px.
 * @cssproperty --dds-modal-padding - Padding inside the modal. Default: var(--dds-spacing-800).
 * @cssproperty --dds-modal-transform-amount - Amount to transform for entrance animation. Default: 2rem.
 * @cssproperty --dds-modal-transition-speed - Speed of transition animations. Default: var(--dds-transition-fast).
 * @cssproperty --dds-modal-transition-timing - Timing function for transitions. Default: var(--dds-easing-ease-in-out).
 * @cssproperty --dds-modal-border-width - Border width of the modal. Default: var(--dds-border-width-base).
 * @cssproperty --dds-modal-border-color - Border color of the modal. Default: var(--dds-border-neutral-divider).
 * @cssproperty --dds-modal-border-radius - Border radius of the modal. Default: var(--dds-radius-large, 16px).
 * @cssproperty --dds-modal-background - Background color of the modal. Default: var(--dds-background-neutral-subtle).
 * @cssproperty --dds-modal-header-margin - Margin below the header. Default: var(--dds-spacing-800).
 * @cssproperty --dds-modal-footer-margin - Margin above the footer. Default: var(--dds-spacing-400).
 * @cssproperty --dds-modal-footer-gap - Gap between footer elements. Default: var(--dds-spacing-400).
 * @cssproperty --dds-modal-close-margin - Margin for the close button. Default: var(--dds-spacing-300).
 *
 */
export declare class DapDSModal extends ModalBaseElement {
    constructor();
    render(): TemplateResult_2<1>;
}

/**
 * `dap-ds-navigation-menu`
 * @summary A horizontal navigation menu container that can contain multiple navigation items.
 * @element dap-ds-navigation-menu
 * @title - Navigation Menu
 *
 * @property {string} activeHref - The currently active href for highlighting active navigation items.
 * @property {'horizontal' | 'vertical'} orientation - The orientation of the navigation menu.
 *
 * @event {{ href: string, event: Event }} dds-navigation-item-click - Fired when a navigation item is clicked.
 *
 * @slot - The navigation menu list and items.
 *
 * @csspart base - The main navigation menu container.
 */
export declare class DapDSNavigationMenu extends DdsElement {
    static readonly styles: CSSResult;
    /** The currently active href for highlighting active navigation items. */
    activeHref?: string;
    /** The orientation of the navigation menu.
     * @type {'horizontal' | 'vertical'}
     */
    orientation: 'horizontal' | 'vertical';
    /** Whether the navigation menu should take full width of the screen. */
    fullWidth: boolean;
    connectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    firstUpdated(changedProperties: Map<string, unknown>): void;
    private _updateChildFullWidth;
    private _updateActiveHref;
    disconnectedCallback(): void;
    private _handleNavigationItemClick;
    private _handleDropdownOpen;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-navigation-menu-item`
 * @summary A navigation menu item that can contain either a simple link or dropdown content.
 * @element dap-ds-navigation-menu-item
 * @title - Navigation Menu Item
 * @group navigation-menu
 *
 * @property {'xs' | 'sm' | 'lg'} size - The size of the popup.
 * @property {boolean} disabled - The disabled state of the popup.
 * @property {boolean} opened - The open state of the popup.
 * @property {'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'} placement - The placement of the popup.
 * @property {'absolute' | 'fixed'} floatingStrategy - The floating strategy of the popup.
 * @property {number} offset - The offset of the popup.
 * @property {boolean} sync - Whether the popup should sync its width with the trigger.
 * @property {number | 'auto'} maxHeight - The maximum height of the popup.
 * @property {number | 'auto'} maxWidth - The maximum width of the popup.
 * @property {boolean} hasArrow - Whether the popup has an arrow.
 * @property {boolean} overflow - Whether the popup should overflow.
 * @property {boolean} fullWidth - Whether the popup should take full width of the screen.
 * @property {boolean} exactHref - Whether the navigation item should be active if the href is exactly the same as the activeHref.
 * @property {string} icon - The name of the icon to display in the trigger.
 * @property {string} ariaLabelledBy - The name of the element that labels the navigation dropdown.
 * @property {string} activeHref - The href of the navigation item that is active.
 * @property {string} baseHref - The href of the navigation item. If provided, the navigation item will be active if the href is a substring of the activeHref. It is useful for dropdowns that are not direct children of the navigation menu.
 * @property {boolean} exactHref - Whether the navigation item should be active if the href is exactly the same as the activeHref.
 *
 * @event {{ href: string, event: Event }} dds-navigation-item-click - Fired when a navigation item is clicked.
 * @event {{ item: DapDSNavigationMenuItem }} dds-navigation-dropdown-open - Fired when a navigation dropdown is opened.
 *
 * @slot trigger - The trigger element (link, button, etc.) for this navigation item.
 * @slot title - The title of the navigation item.
 * @slot - The dropdown content (only used if trigger slot is provided).
 *
 * @csspart base - The base part of the navigation item.
 * @csspart trigger - The trigger element part.
 * @csspart content - The dropdown content part.
 */
export declare class DapDSNavigationMenuItem extends DapDSPopup {
    constructor();
    static readonly styles: CSSResult;
    private readonly _assignedTrigger;
    /** The name of the icon to display in the trigger. */
    icon?: string;
    /** ID of element that labels the navigation dropdown. */
    ariaLabelledBy?: string;
    /** The href of the navigation item that is active. */
    activeHref?: string;
    /** The href of the navigation item. If provided, the navigation item will be active if the href is a substring of the activeHref. It is useful for dropdowns that are not direct children of the navigation menu. */
    baseHref?: string;
    /** Whether the navigation item should be active if the href is exactly the same as the activeHref. */
    exactHref: boolean;
    private hasContent;
    private _lastClickedItem;
    private active;
    private _keyboardNavigation;
    private get _trigger();
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): Promise<void>;
    private _handleClick;
    private _handleKeyDown;
    private handleDocumentMouseDown;
    private _initializeKeyboardNavigation;
    private _handleFocusOut;
    focus(): void;
    showDropDown(): Promise<void>;
    hideDropDown(): Promise<void>;
    _handleTriggerSlotChangeCallback(): void;
    private _updateActiveState;
    _handleContentSlotChange(e: Event): void;
    renderTrigger(): TemplateResult_2;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-notification-badge`
 * @summary A notification badge component is a user interface element that visually indicates the presence of new information or updates, often displaying a numeric count of unread notifications, messages, or items requiring attention.
 * @element dap-ds-notification-badge
 * @title - Notification badge
 *
 * @slot - The content of the notification badge.
 *
 * @csspart base - The main container of the notification badge.
 * @csspart noty - The notification badge container.
 *
 * @cssproperty --dds-notification-badge-size - Controls the overall size of the notification badge
 * @cssproperty --dds-notification-badge-min-width - Minimum width of the notification badge
 * @cssproperty --dds-notification-badge-height - Height of the notification badge
 * @cssproperty --dds-notification-badge-padding - Padding inside the notification badge
 * @cssproperty --dds-notification-badge-border-radius - Border radius of the notification badge
 * @cssproperty --dds-notification-badge-font-size - Font size of the notification badge text
 * @cssproperty --dds-notification-badge-dot-size - Size of the dot variant
 * @cssproperty --dds-notification-badge-color - Text color of the notification badge
 * @cssproperty --dds-notification-badge-neutral-bg - Background color for neutral type
 * @cssproperty --dds-notification-badge-brand-bg - Background color for brand type
 * @cssproperty --dds-notification-badge-info-bg - Background color for info type
 * @cssproperty --dds-notification-badge-positive-bg - Background color for positive type
 * @cssproperty --dds-notification-badge-warning-bg - Background color for warning type
 * @cssproperty --dds-notification-badge-negative-bg - Background color for negative type
 * @cssproperty --dds-notification-badge-circular-offset-x - Horizontal offset for circular positioning
 * @cssproperty --dds-notification-badge-circular-offset-y - Vertical offset for circular positioning
 */
export declare class DapDSNotificationBadge extends DdsElement {
    /** The content of the badge, it can be a number or a string. Content tried to be parsed as a number, if it's not a number, it will be displayed as a string. */
    badgeContent: string;
    /** This switch decides the visibility of the badge. This property overrides the badge content visibility. Use it for explicit control. */
    visible: boolean;
    /** This switch decides whether to show a zero value or not. */
    showZero: boolean;
    /** The color scheme of the badge
     * @type { 'neutral' | 'brand' | 'info' | 'positive' | 'warning' | 'negative' }
     */
    type: BadgeType;
    /** The variant of the badge.
     * @type { 'round' | 'dot' }
     */
    variant: BadgeVariant;
    /** The cap value of badge content, if the badge content is greater than the max value, it will be displayed as `[number]+`. Zero means no cap. */
    max: number;
    /** The position of the badge content around the slot content.
     * @type { 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' }
     */
    placement: PopupPlacement;
    /** Whether to automatically detect circular elements and adjust positioning accordingly */
    circularAuto: boolean;
    /** Override circular positioning detection - forces circular positioning calculation */
    forceCircular: boolean;
    private isCircularElement;
    private circularOffset;
    static readonly styles: CSSResult;
    connectedCallback(): void;
    private detectCircularElement;
    private isElementCircular;
    private calculateCircularOffset;
    private getAngleForPlacement;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private parseBadgeContent;
    private handleMax;
    private renderContent;
    private get hide();
    render(): TemplateResult_2;
}

/**
 * `dap-ds-number-input`
 * @summary A number input component.
 * @element dap-ds-number-input
 * @title - Number input
 *
 * @property {string} label - The label of the input.
 * @property {string} placeholder - The placeholder of the input.
 * @property {string} description - The description of the input.
 * @property {string} tooltip - The tooltip of the input.
 * @property {'top' | 'right' | 'bottom' | 'left'} tooltipPlacement - The tooltip placement of the input.
 * @property {'success' | 'error'} status - The status of the input. Can be `success` or `error`.
 * @property {'xs' | 'sm' | 'sm'} size - The size of the input. Default is `sm`. Can be `sm` or `lg`.
 * @property {string} name - The name of the input.
 * @property {string} value - The value of the input.
 * @property {string} thousandSeparator - The thousand separator of the input.
 * @property {string} decimalSeparator - The decimal separator of the input.
 * @property {number} decimalScale - The decimal scale of the input.
 * @property {string} allowNegative - The allow negative state of the input.
 * @property {string} allowDecimal - The allow decimal state of the input.
 * @property {boolean} disabled - The disabled state of the input. Default is false.
 * @property {boolean} required - The required state of the input. Default is false.
 * @property {boolean} readonly - The readonly state of the input. Default is false.
 * @property {boolean} autofocus - The autofocus state of the input. Default is false.
 * @property {number} min - The minimum value of the number input.
 * @property {number} max - The maximum value of the number input.
 * @property {number} step - The step value of the number input.
 * @property {string} feedback - The feedback of the input.
 * @property {'negative' | 'positive' | 'warning'} feedbackType - The feedback type of the input. Can be `negative`, `positive`, or `warning`.
 * @property {boolean} loading - The loading state of the input. Default is false.
 * @property {boolean} optional - The optional state of the input.
 * @property {string} optionalLabel - The optional label of the input.
 * @property {boolean} subtle - The weight of the label. Default is `false`
 * @property {boolean} disableEnter - Disables the enter key from being used to submit the form.
 * @property {boolean} hideControls - Hides the increment and decrement buttons.
 *
 * @event {{ value: string }} dds-change - Fired when the input value changes.
 * @event {{ value: string }} dds-input - Fired when the input value changes.
 * @event {{ value: string, originalEvent: Event }} dds-keydown - Fired when a key is pressed down.
 * @event {{ void }} dds-blur - Fired when the input loses focus.
 * @event {{ void }} dds-focus - Emitted when the input gains focus.
 *
 * @slot feedback-icon - The custom icon of the feedback.
 *
 * @cssproperty --dds-input-height - The height of the input. Default is var(--dds-spacing-1000).
 * @cssproperty --dds-input-padding - The padding of the input. Default is var(--dds-spacing-300).
 * @cssproperty --dds-input-font-size - The font size of the input. Default is var(--dds-font-base).
 * @cssproperty --dds-input-border-color - The border color of the input. Default is var(--dds-border-neutral-base).
 * @cssproperty --dds-input-background-color - The background color of the input. Default is var(--dds-fields-background-default).
 * @cssproperty --dds-input-text-color - The text color of the input. Default is var(--dds-text-neutral-base).
 * @cssproperty --dds-input-border-radius - The border radius of the input. Default is var(--dds-radius-base).
 * @cssproperty --dds-input-border-width - The border width of the input. Default is var(--dds-border-width-base).
 * @cssproperty --dds-input-disabled-background - The background color of the disabled input. Default is var(--dds-fields-background-disabled).
 * @cssproperty --dds-input-disabled-text - The text color of the disabled input. Default is var(--dds-text-neutral-disabled).
 * @cssproperty --dds-input-readonly-background - The background color of the readonly input. Default is var(--dds-fields-background-read-only).
 * @cssproperty --dds-input-readonly-text - The text color of the readonly input. Default is var(--dds-text-neutral-subtle).
 * @cssproperty --dds-input-success-border - The border color of the success input. Default is var(--dds-border-positive-base).
 * @cssproperty --dds-input-error-border - The border color of the error input. Default is var(--dds-border-negative-base).
 * @cssproperty --dds-input-addon-background - The background color of the input addon. Default is var(--dds-background-ui-neutral-enabled).
 * @cssproperty --dds-input-addon-success-background - The background color of the success input addon. Default is var(--dds-background-ui-positive-enabled).
 * @cssproperty --dds-input-addon-error-background - The background color of the error input addon. Default is var(--dds-background-ui-negative-enabled).
 *
 * @csspart postfix - The postfix of the input.
 * @csspart decrement - The decrement button of the input.
 * @csspart increment - The increment button of the input.
 */
export declare class DapDSNumberInput extends InputBaseElement {
    constructor();
    private readonly inputElement;
    thousandSeparator: string;
    decimalSeparator: string;
    decimalScale?: number;
    allowNegative: string;
    allowDecimal: string;
    hideControls: boolean;
    private formattedValue;
    get _thousandSeparator(): string;
    firstUpdated(): void;
    private handleKeydown;
    private getMaskedValue;
    private isBackspaceOrDelete;
    private handleEmptyValue;
    private createNumericRegex;
    private enforceDecimalScale;
    private convertToNumericValue;
    private handleInput;
    protected updated(changedProperties: PropertyValues): void;
    formResetCallback(): void;
    private _decrement;
    private _increment;
    render(): TemplateResult_2<1>;
}

/**
 * `dap-ds-official-website-banner`
 * @element dap-ds-official-website-banner
 * @summary An official website banner is a banner that displays that the website is an official website.
 * @title - Official website-banner
 *
 * @property { 'sm' | 'lg' } size - The size of the official website banner. Default is `sm`.
 * @property {string} heading - The heading text of the accordion, this will be used as the aria label of the heading also if ariaLabel is not provided
 * @property { 1 | 2 | 3 | 4 | 5 | 6 } headingLevel - The heading level of the accordion. Default is `4`.
 * @property {boolean} opened - Whether the accordion is opened. Default is `false`.
 * @property { 'left' | 'right' } iconLocation - The location of the icon. Default is `right`.
 * @property { 'default' | 'collapsed' | 'clean' | 'clean-collapsed' } variant - The variant of the accordion.
 * @property {boolean} lastItem - Whether the accordion is the last item.
 *
 * @event {{ void }} dds-opened - Event fired when the accordion is opened.
 * @event {{ void }} dds-closed - Event fired when the accordion is closed.
 *
 * @slot default - The content of the accordion.
 * @slot heading - The heading of the accordion.
 * @slot icon-opened - The icon when the accordion is opened.
 * @slot icon-closed - The icon when the accordion is closed.
 *
 * @csspart base - The main accordion container.
 * @csspart heading - The heading of the accordion.
 * @csspart button - The button of the accordion.
 * @csspart content - The content of the accordion.
 * @csspart content-container - The container of the accordion content.
 * @csspart icon-wrapper - The icon wrapper of the accordion.
 * @csspart open-icon - The icon when the accordion is opened.
 * @csspart open-icon-base - The base of the icon when the accordion is opened.
 * @csspart close-icon - The icon when the accordion is closed.
 * @csspart close-icon-base - The base of the icon when the accordion is closed.
 *
 * @cssproperty --dds-official-banner-background-color - The background color of the official website banner.
 * @cssproperty --dds-official-banner-text-color - The text color of the official website banner.
 * @cssproperty --dds-official-banner-heading-hover-color - The heading hover color of the official website banner.
 * @cssproperty --dds-official-banner-border-radius - The border radius of the official website banner.
 * @cssproperty --dds-official-banner-icon-color - The icon color of the official website banner.
 * @cssproperty --dds-official-banner-icon-color-hover - The icon hover color of the opener icon official website banner.
 */
export declare class DapDSOfficialWebsiteBanner extends AccordionBaseElement {
    static readonly styles: CSSResult;
    headingRender(): TemplateResult_2<1>;
    contentRender(): TemplateResult_2<1>;
    render(): TemplateResult_2<1>;
}

/**
 * `dap-ds-option-item`
 * @summary An option item is a selectable item in a list of options.
 * @element dap-ds-option-item
 * @title - Option item
 * @group select,combobox
 * *
 * @csspart base - The main option item container.
 * @csspart prefix - The prefix of the option item.
 * @csspart label - The label of the option item.
 * @csspart suffix - The suffix of the option item.
 *
 * @slot prefix - The prefix of the option item.
 * @slot - The label of the option item.
 * @slot suffix - The suffix of the option item.
 *
 * @cssproperty --dds-option-item-padding-vertical - The vertical padding of the option item.
 * @cssproperty --dds-option-item-padding-horizontal - The horizontal padding of the option item.
 * @cssproperty --dds-option-item-border-radius - The border radius of the option item.
 * @cssproperty --dds-option-item-color - The text color of the option item.
 * @cssproperty --dds-option-item-hover-bg - The background color of the option item when hovered.
 * @cssproperty --dds-option-item-active-bg - The background color of the option item when active.
 * @cssproperty --dds-option-item-disabled-color - The text color of the option item when disabled.
 * @cssproperty --dds-option-item-high-contrast-border - The border color of the option item in high contrast mode.
 * @cssproperty --dds-option-item-selected-font-weight - The font weight of the option item when selected.
 * @cssproperty --dds-option-item-xs-font-size - The font size of the option item in extra small size.
 * @cssproperty --dds-option-item-lg-font-size - The font size of the option item in large size.
 * @cssproperty --dds-option-item-selected-icon-width - The width of the selected icon.
 */
export declare class DapDSOptionItem extends DapDSOptionItem_base {
    /** The selected state of the option item */
    selected?: boolean;
    /** Wheteher the item is selectable, whether it shows the selected icon */
    selectable?: string | undefined;
    /** The position of the selected icon */
    selectedIconPosition?: string | undefined;
    /** The value of the option item */
    value?: any;
    /** The disabled state of the option item */
    disabled?: boolean;
    /** The focused state of the option item */
    focused?: boolean;
    /** The label of the option item, it can be a simplier version of an item */
    label?: string;
    private readonly _prefixNode;
    private readonly _postfixNode;
    private _hasPrefix;
    private _hasSuffix;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private handleClick;
    get optionText(): string;
    render(): TemplateResult_2<1>;
}

declare const DapDSOptionItem_base: typeof DdsElement & {
    new (...args: any[]): SizedElementInterface;
    prototype: SizedElementInterface;
};

/**
 * `dap-ds-option-list`
 * @summary An option list is a list of selectable options.
 * @element dap-ds-option-list
 * @title - Option list
 *
 * @event {{ void }} dds-cancel - Fired when the escape key is pressed.
 * @event {{ option: DapDSOptionItem, value: string, index: number, text: string }} dds-option-change - Fired when the option list value changes.
 * @event {{ void }} dds-keydown - Fired when a key is pressed down.
 * @event {{ elements: DapDSOptionItem[] }} dds-list-changed - Fired when the available options list changes.
 *
 * @csspart base - The main option list container.
 *
 * @slot - The default slot for the options.
 */
export declare class DapDSOptionList extends DapDSOptionList_base {
    /** The filter text of the option list */
    filterText: string;
    /** The value of the option list */
    value?: string;
    /** The focused state of the option list. */
    focused: boolean;
    /** Whether the option list is searchable */
    search: boolean;
    /** The search mode of the option list. Default is `none` */
    searchMode: 'none' | 'typehead' | 'autocomplete' | 'manual';
    /**
     * @ignore
     */
    searchOnValueSet: string;
    /** Whether the option list items are selectable, whether it shows the selected icon */
    selectable: string;
    /**
     * @ignore
     */
    options?: any[];
    /**
     * @ignore
     */
    disableDelaySet: boolean;
    queryTimeout: number | undefined;
    queryString: string;
    firstLoad: boolean;
    private currentOption;
    selectedIndex: number;
    private optionEls;
    private availableOptions;
    get isAutoComplete(): boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    getAllOptions(): DapDSOptionItem[];
    private getAllRenderedOptions;
    getAllAvailabeOptions(): DapDSOptionItem[];
    getActiveOption(): DapDSOptionItem | null | undefined;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected shouldUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): boolean;
    filterAvailableOptions(): void;
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    setOptionsFromSlottedItems(): void;
    private handleKeydown;
    private scrollToActiveOption;
    private handleNavigationKey;
    private handleActionKey;
    private handleTypeheadKey;
    private handleKeyCodes;
    private getEventDetails;
    private findNearestEnabled;
    private findIndexByValue;
    private clearItemFocusStates;
    private setCurrentOption;
    private setFocusedOption;
    private setSelectedOption;
    private selectionChanged;
    private changeOption;
    private readonly handleOptionClick;
    getSearchString: (char: string) => string;
    buildQueryString: (char: string) => void;
    private handleInitialFocus;
    private handleKeyFocus;
    captureFocus(key?: string): void;
    removeFocus(): void;
    private handleSlotChange;
    render(): TemplateResult_2;
}

declare const DapDSOptionList_base: typeof DdsElement & {
    new (...args: any[]): SizedElementInterface;
    prototype: SizedElementInterface;
};

/**
 * `dap-ds-overlay`
 * @summary An overlay is a container for overlay content.
 * @element dap-ds-overlay
 * @title - Overlay
 *
 * @csspart overlay - The overlay element
 *
 * @cssproperty --dds-overlay-z-index - Controls the z-index of the overlay (default: 1)
 * @cssproperty --dds-overlay-background-color - Controls the background color of the overlay (default: var(--dds-black-10))
 * @cssproperty --dds-overlay-opacity-closed - Controls the opacity when overlay is closed (default: 0)
 * @cssproperty --dds-overlay-opacity-open - Controls the opacity when overlay is open (default: 1)
 */
export declare class DapDSOverlay extends DdsElement {
    /** The open state of the overlay. */
    open?: boolean;
    static readonly styles: CSSResult;
    render(): TemplateResult_2<1>;
}

/**
 * `dap-ds-pager`
 * @summary A pager is a component that displays pagination controls.
 * @element dap-ds-pager
 * @title - Pager
 *
 * @event {{ action: string, pagination: { pageIndex: number, pageSize: number } }} dds-pagination-change - Event fired when the pagination changes
 *
 * @csspart base - The main pager container.
 * @csspart first - The first page button.
 * @csspart previous - The previous page button.
 * @csspart next - The next page button.
 * @csspart last - The last page button.
 *
 * @cssproperty --dds-pager-spacing-vertical - The vertical spacing of the pager.
 * @cssproperty --dds-pager-spacing-horizontal - The horizontal spacing of the pager.
 * @cssproperty --dds-pager-button-padding - The padding of the pager buttons.
 * @cssproperty --dds-pager-button-border-width - The border width of the pager buttons.
 * @cssproperty --dds-pager-button-border-color - The border color of the pager buttons.
 * @cssproperty --dds-pager-button-border-radius - The border radius of the pager buttons.
 * @cssproperty --dds-pager-button-background - The background color of the pager buttons.
 * @cssproperty --dds-pager-button-font-size - The font size of the pager buttons.
 * @cssproperty --dds-pager-button-font-weight - The font weight of the pager buttons.
 */
export declare class DapDSPager extends DdsElement {
    /** Whether the pager is disabled. */
    disabled: boolean;
    /** Enable manual pagination. If true, the component will not automatically update the page index. */
    manualPagination: boolean;
    /** The current page index. */
    pageIndex: number;
    private _pageIndex;
    /** The number of items per page. */
    pageSize: number;
    private _pageSize;
    /** The total number of rows. */
    totalRows: number;
    /** Available page size options */
    pageSizeOptions: number[];
    /** Show the page size options. */
    showPageSizeOptions: string;
    /** Show the page index. */
    showPageIndex: string;
    /** Show the page count. */
    showPageCount: string;
    /** Show the first button. */
    showFirstButton: string;
    /** Show the previous button. */
    showPreviousButton: string;
    /** Show the next button. */
    showNextButton: string;
    /** Show the last button. */
    showLastButton: string;
    /** The first button label. */
    firstButtonLabel: string;
    /** The previous button label. */
    previousButtonLabel: string;
    /** The next button label. */
    nextButtonLabel: string;
    /** The last button label. */
    lastButtonLabel: string;
    /** The function to determine the pager text
     * @type {Function}
     */
    pageStateText: (pageIndex: number, pageSize: number, totalRows: number) => string;
    static readonly styles: CSSResult;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private updatePageIndex;
    private updatePageSize;
    private renderPageSizeSelect;
    private renderNavigationButton;
    private renderPageInfo;
    protected render(): TemplateResult_2<1>;
}

/**
 * `dap-ds-password-input`
 * @summary A password input a field for entering a password.
 * @element dap-ds-password-input
 * @title - Password input
 *
 * @property {string} label - The label of the password input.
 * @property {string} placeholder - The placeholder of the password input.
 * @property {string} description - The description of the password input.
 * @property {string} tooltip - The tooltip of the password input.
 * @property {'top' | 'right' | 'bottom' | 'left'} tooltipPlacement - The tooltip placement of the input.
 * @property {string} status - The status of the password input. Can be `success` or `error`.
 * @property {'xs' | 'sm' | 'sm'} size - The size of the password input. Default is `sm`.
 * @property {string} name - The name of the password input.
 * @property {string} value - The value of the password input.
 * @property {boolean} disabled - The disabled state of the password input. Default is false.
 * @property {boolean} required - The required state of the password input. Default is false.
 * @property {boolean} readonly - The readonly state of the password input. Default is false.
 * @property {boolean} autofocus - The autofocus state of the password input. Default is false.
 * @property {string} feedback - The feedback of the input.
 * @property {'negative' | 'positive' | 'warning'} feedbackType - The feedback type of the input. Can be `negative`, `positive`, or `warning`.
 * @property {boolean} loading - The loading state of the password input. Default is false.
 * @property {boolean} optional - The optional state of the password input.
 * @property {string} optionalLabel - The optional label of the password input.
 * @property {boolean} subtle - The weight of the label. Default is `false`
 *
 * @event {{ value: string }} dds-change - Fired when the input value changes.
 * @event {{ value: string }} dds-input - Fired when the input value changes.
 * @event {{ value: string, originalEvent: Event }} dds-keydown - Fired when a key is pressed down.
 * @event {{ void }} dds-blur - Fired when the input loses focus.
 * @event {{ void }} dds-focus - Emitted when the input gains focus.
 *
 * @cssproperty --dds-input-height - The height of the input. Default is var(--dds-spacing-1000).
 * @cssproperty --dds-input-padding - The padding of the input. Default is var(--dds-spacing-300).
 * @cssproperty --dds-input-font-size - The font size of the input. Default is var(--dds-font-base).
 * @cssproperty --dds-input-border-color - The border color of the input. Default is var(--dds-border-neutral-base).
 * @cssproperty --dds-input-background-color - The background color of the input. Default is var(--dds-fields-background-default).
 * @cssproperty --dds-input-text-color - The text color of the input. Default is var(--dds-text-neutral-base).
 * @cssproperty --dds-input-border-radius - The border radius of the input. Default is var(--dds-radius-base).
 * @cssproperty --dds-input-border-width - The border width of the input. Default is var(--dds-border-width-base).
 * @cssproperty --dds-input-disabled-background - The background color of the disabled input. Default is var(--dds-fields-background-disabled).
 * @cssproperty --dds-input-disabled-text - The text color of the disabled input. Default is var(--dds-text-neutral-disabled).
 * @cssproperty --dds-input-readonly-background - The background color of the readonly input. Default is var(--dds-fields-background-read-only).
 * @cssproperty --dds-input-readonly-text - The text color of the readonly input. Default is var(--dds-text-neutral-subtle).
 * @cssproperty --dds-input-success-border - The border color of the success input. Default is var(--dds-border-positive-base).
 * @cssproperty --dds-input-error-border - The border color of the error input. Default is var(--dds-border-negative-base).
 * @cssproperty --dds-input-addon-background - The background color of the input addon. Default is var(--dds-background-ui-neutral-enabled).
 * @cssproperty --dds-input-addon-success-background - The background color of the success input addon. Default is var(--dds-background-ui-positive-enabled).
 * @cssproperty --dds-input-addon-error-background - The background color of the error input addon. Default is var(--dds-background-ui-negative-enabled).
 *
 * @csspart postfix - The postfix of the password input.
 * @csspart password-input - The password input.
 * @csspart password-input--visible - The visible password input.
 * @csspart icon - The icon of the password input.
 * @csspart icon-base - The base of the icon.
 */
export declare class DapDSPasswordInput extends InputBaseElement {
    passwordVisibile: boolean;
    static readonly styles: CSSResult;
    constructor();
    private _toggleVisibility;
    private getIconSize;
    render(): TemplateResult_2<1>;
}

/**
 * `dap-ds-popup`
 * @summary A popup is a container for popup content.
 * @element dap-ds-popup
 * @title - Popup
 *
 * @property {'xs' | 'sm' | 'lg'} size - The size of the popup.
 * @property {boolean} disabled - The disabled state of the popup.
 * @property {boolean} opened - The open state of the popup.
 * @property {'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'} placement - The placement of the popup.
 * @property {'absolute' | 'fixed'} floatingStrategy - The floating strategy of the popup.
 * @property {number} offset - The offset of the popup.
 * @property {boolean} sync - Whether the popup should sync its width with the trigger.
 * @property {number | 'auto'} maxHeight - The maximum height of the popup.
 * @property {number | 'auto'} maxWidth - The maximum width of the popup.
 * @property {boolean} hasArrow - Whether the popup has an arrow.
 * @property {boolean} overflow - Whether the popup should overflow.
 * @property {boolean} fullWidth - Whether the popup should take full width of the screen.
 *
 * @event {{ void }} dds-opened - Fired when the popup is opened.
 * @event {{ void }} dds-closed - Fired when the popup is closed.
 * @event {{ void }} dds-close - Fired when the popup should be closed.
 *
 * @slot trigger - The trigger of the popup.
 * @slot - The content of the popup.
 *
 * @csspart popup - The main popup container.
 * @csspart arrow - The arrow of the popup.
 *
 * @cssproperty --dds-popup-z-index - Z-index of the popup.
 * @cssproperty --dds-popup-padding - Default padding of the popup.
 * @cssproperty --dds-popup-padding-xs - Padding of the popup when size is xs.
 * @cssproperty --dds-popup-padding-lg - Padding of the popup when size is lg.
 * @cssproperty --dds-popup-border-width - Border width of the popup.
 * @cssproperty --dds-popup-border-radius - Border radius of the popup.
 * @cssproperty --dds-popup-border-color - Border color of the popup.
 * @cssproperty --dds-popup-background - Background color of the popup.
 * @cssproperty --dds-popup-color - Text color of the popup.
 * @cssproperty --dds-popup-arrow-size - Size of the popup arrow.
 */
export declare class DapDSPopup extends PopupBaseElement {
    render(): TemplateResult_2;
}

/**
 * `dap-ds-radio-button`
 * @summary A radio button is a graphical control element that allows the user to choose only one of a predefined set of mutually exclusive options.
 * @element dap-ds-radio-button
 * @title - Radio button
 *
 * @event {{ checked: boolean, value: string, disabled: boolean, readonly: boolean, type: 'radio' }} dds-change - Fired when the radio button is checked.
 * @event {{ void }} dds-blur - Emitted when the radio button loses focus.
 * @event {{ void }} dds-focus - Emitted when the radio button gains focus.
 * @event {{ checked: boolean, value: string, disabled: boolean, readonly: boolean }} dds-input - Emitted when the radio button receives input.
 *
 * @property {string} name - The name of the radio button.
 * @property {string} value - The value of the radio button.
 * @property {boolean} checked - Whether the radio button is checked.
 * @property {string} label - The label of the radio button.
 * @property {string} description - The description of the radio button.
 * @property {boolean} disabled - Whether the radio button is disabled.
 * @property {boolean} readonly - Whether the radio button is readonly (cannot be changed but value is submitted with form).
 * @property {boolean} required - Whether the radio button is required.
 * @property {'xs' | 'sm' | 'lg'} size - The size of the radio button. Default is 'sm'.
 * @property {'left' | 'right'} labelPlacement - The placement of the label.
 * @property {'top' | 'bottom'} descriptionPlacement - The placement of the description.
 * @property {boolean} subtle - The weight of the label.
 * @property {string} feedback - The feedback of the radio button.
 * @property {'negative' | 'positive' | 'warning'} feedbackType - The feedback type of the radio button.
 * @property {boolean} invalid - The invalid state of the radio button.
 * @property {boolean} optional - The optional state of the radio button.
 * @property {string} optionalLabel - The optional label of the radio button.
 * @property {boolean} preventDefault - Whether the radio button should prevent the default action.
 * @property {boolean} focusable - Whether the radio button is focusable.
 * @property {'normal' | 'background'} type - The type of the radio button.
 * @property {boolean} border - This sets up a border around the radio button, when true.
 *
 * @csspart base - The main radio button container.
 * @csspart wrapper - The wrapper of the radio button.
 * @csspart base-label - The main label container.
 * @csspart label - The label of the radio button.
 * @csspart input - The native input of the radio button.
 * @csspart control - The control of the radio button.
 * @csspart label-container - The label container of the radio button.
 * @csspart description - The description of the radio button.
 *
 * @cssproperty --dds-radio-size - Sets the size of the radio button. Default: var(--dds-spacing-600)
 * @cssproperty --dds-radio-border-width - Sets the border width of the radio button. Default: var(--dds-border-width-large)
 * @cssproperty --dds-radio-border-radius - Sets the border radius of the radio button. Default: var(--dds-radius-rounded)
 * @cssproperty --dds-radio-border-color - Sets the border color of the radio button. Default: var(--dds-border-neutral-base)
 * @cssproperty --dds-radio-background-color - Sets the background color of the radio button. Default: var(--dds-background-neutral-base)
 * @cssproperty --dds-radio-hover-border-color - Sets the border color of the radio button on hover. Default: var(--dds-border-neutral-medium)
 * @cssproperty --dds-radio-hover-background-color - Sets the background color of the radio button on hover. Default: var(--dds-background-neutral-medium)
 * @cssproperty --dds-radio-active-border-color - Sets the border color of the radio button when active. Default: var(--dds-border-neutral-strong)
 * @cssproperty --dds-radio-active-background-color - Sets the background color of the radio button when active. Default: var(--dds-background-neutral-strong)
 * @cssproperty --dds-radio-checked-background-color - Sets the background color of the checked radio button. Default: var(--dds-background-brand-base-inverted)
 * @cssproperty --dds-radio-checked-hover-background-color - Sets the background color of the checked radio button on hover. Default: var(--dds-background-brand-medium-inverted)
 * @cssproperty --dds-radio-checked-active-background-color - Sets the background color of the checked radio button when active. Default: var(--dds-background-brand-strong-inverted)
 * @cssproperty --dds-radio-disabled-background-color - Sets the background color of the disabled radio button. Default: var(--dds-background-neutral-disabled)
 * @cssproperty --dds-radio-icon-background-color - Sets the background color of the radio button icon. Default: var(--dds-transparent-white-strong-static)
 * @cssproperty --dds-radio-disabled-icon-background-color - Sets the background color of the disabled radio button icon. Default: var(--dds-background-neutral-stronger)
 * @cssproperty --dds-radio-invalid-border-color - Sets the border color of the invalid radio button. Default: var(--dds-border-negative-base)
 * @cssproperty --dds-radio-invalid-background-color - Sets the background color of the invalid radio button. Default: var(--dds-background-negative-base)
 * @cssproperty --dds-radio-invalid-hover-border-color - Sets the border color of the invalid radio button on hover. Default: var(--dds-border-negative-medium)
 * @cssproperty --dds-radio-invalid-hover-background-color - Sets the background color of the invalid radio button on hover. Default: var(--dds-background-negative-medium)
 * @cssproperty --dds-radio-invalid-active-border-color - Sets the border color of the invalid radio button when active. Default: var(--dds-border-negative-strong)
 * @cssproperty --dds-radio-invalid-active-background-color - Sets the background color of the invalid radio button when active. Default: var(--dds-background-negative-strong)
 * @cssproperty --dds-radio-invalid-checked-background-color - Sets the background color of the invalid checked radio button. Default: var(--dds-background-negative-base-inverted)
 * @cssproperty --dds-radio-invalid-checked-hover-background-color - Sets the background color of the invalid checked radio button on hover. Default: var(--dds-background-negative-medium-inverted)
 * @cssproperty --dds-radio-invalid-checked-active-background-color - Sets the background color of the invalid checked radio button when active. Default: var(--dds-background-negative-strong-inverted)
 * @cssproperty --dds-radio-icon-size - Sets the size of the radio button icon. Default: var(--dds-spacing-300)
 * @cssproperty --dds-radio-readonly-border-color - Sets the border color when the radio button is readonly. Default is `var(--dds-border-neutral-subtle)`.
 * @cssproperty --dds-radio-readonly-background-color - Sets the background color when the radio button is readonly. Default is `var(--dds-background-neutral-subtle)`.
 * @cssproperty --dds-radio-readonly-icon-color - Sets the color of the radio button icon when readonly. Default is `var(--dds-text-neutral-base)`.
 */
export declare class DapDSRadioButton extends LabeledChoiceElement {
    private readonly input;
    /** Whether the radio button is focusable */
    focusable: boolean;
    /** Whether the radio button should prevent the default action */
    preventDefault: boolean;
    /** Whether the radio button is readonly */
    readonly: boolean;
    /** This sets up a border around the radio button, when true. */
    border: boolean;
    /** The type of the radio button
     * @type {'normal' | 'background'}
     */
    type: 'normal' | 'background';
    static readonly styles: CSSResult;
    /**
     * Gets the aria-describedby attribute value by combining description and feedback IDs.
     * @returns {string | undefined} Space-separated IDs or undefined if none exist
     * @private
     */
    private getAriaDescribedBy;
    /**
     * Handles click events on the radio button.
     * Manages the checked state and emits change events.
     * @private
     */
    private handleClick;
    formResetCallback(): void;
    /**
     * Handles input events on the radio button.
     * Emits the dds-input event with current radio button state.
     * @private
     */
    private handleInput;
    /**
     * Handles keyboard events on the radio button.
     * Provides enhanced keyboard navigation and accessibility.
     * @param {KeyboardEvent} event - The keyboard event
     * @private
     */
    private handleKeyDown;
    get focusElement(): HTMLInputElement;
    /**
     * Programmatically focuses the radio button input element.
     * @public
     */
    focus(): void;
    /**
     * Programmatically blurs the radio button input element.
     * @public
     */
    blur(): void;
    /**
     * Handles invalid events on the radio button input.
     * Prevents the default browser validation UI from showing and manages invalid state.
     * @param {Event} event - The invalid event
     * @private
     */
    handleInvalid(event: Event): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-radio-group`
 * @summary A radio group is a form element that allows the user to select one option from a set.
 * @element dap-ds-radio-group
 * @title - Radio group
 * @group radio-button
 *
 * @event dds-change - Fired when the radio group is checked.
 * @event dds-blur - Emitted when the radio group loses focus.
 * @event dds-focus - Emitted when the radio group gains focus.
 *
 * @property {string} name - The name of the radio group.
 * @property {string} value - The value of the radio group.
 * @property {boolean} disabled - Whether the radio group is disabled.
 * @property {boolean} required - Whether the radio group is required.
 * @property {string} label - The label of the radio group.
 * @property {string} description - The description of the radio group.
 * @property {string} tooltip - The tooltip of the radio group.
 * @property {'top' | 'right' | 'bottom' | 'left'} tooltipPlacement - The tooltip placement of the radio group.
 * @property {string} feedback - The feedback of the radio group.
 * @property {'negative' | 'positive' | 'warning'} feedbackType - The feedback type of the radio group. Can be `negative`, `positive`, or `warning`.
 * @property {boolean} optional - The optional state of the radio group.
 * @property {string} optionalLabel - Text of optional label.
 * @property {boolean} subtle - The weight of the label. Default is `false`
 * @property {'xs' | 'sm' | 'lg'} size - The size of the radio group. Default is `sm`.
 * @property {boolean} subtle - Font weight of the feedback label. Default is `false` which is bold.
 *
 * @slot - The content of the radio group.
 * @slot feedback-icon - The custom icon of the feedback.
 *
 * @csspart base - The main radio group container.
 * @csspart label - The label of the radio group.
 * @csspart tooltip - The tooltip of the radio group.
 * @csspart container - The container of the radio group items.
 */
export declare class DapDSRadioGroup extends GenericFormElement {
    /** The placement of the tooltip.
     * @type { 'top' | 'right' | 'bottom' | 'left' }
     */
    tooltipPlacement: PopupPlacement;
    hiddenInput: HTMLInputElement;
    optionalLabel: string;
    private _previousValue?;
    static readonly styles: CSSResult;
    willUpdate(changedProperties: Map<string, unknown>): void;
    updated(changedProperties: Map<string, unknown>): void;
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
    private _handleSlotChange;
    private getAllRadios;
    private updateRadioStates;
    private syncRadioElements;
    private handleRadioClick;
    private handleKeyDown;
    setValidity(): void;
    get validationMessage(): string;
    checkValidity(): boolean;
    get validity(): {
        valid: boolean;
        valueMissing: boolean;
        badInput: boolean;
        customError: boolean;
        patternMismatch: boolean;
        rangeOverflow: boolean;
        rangeUnderflow: boolean;
        stepMismatch: boolean;
        tooLong: boolean;
        tooShort: boolean;
        typeMismatch: boolean;
    };
    reportValidity(): boolean;
    handleLabelClick(): void;
    handleInvalid(event: Event): void;
    render(): TemplateResult_2;
    private _renderFeedback;
}

/**
 * `dap-ds-rating`
 * @summary Rating is a component that allows users to rate a product or service.
 * @element dap-ds-rating
 * @title - Rating
 *
 * @event {{ value: number }} dds-change - Event fired when the rating value changes.
 *
 * @csspart base - The main rating container.
 * @csspart star - The star element.
 * @csspart stars-container - The container of the stars.
 * @csspart icon - The icon of the star.
 */
export declare class DapDSRating extends GenericFormElement {
    /** Reference to the live region for screen reader announcements */
    private readonly _liveRegion;
    constructor();
    static readonly styles: CSSResult;
    /** The label of the rating */
    label: string;
    /** The maximum number of stars */
    max: number;
    private _ratingContainer;
    private _hasFocus;
    private _hoverValue;
    private readonly _uniqueId;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    _handleContainerFocus: () => void;
    _handleContainerBlur: () => void;
    _handleContainerKeyDown: (event: KeyboardEvent) => void;
    /**
     * Handle keyboard events for the entire component
     * This is a backup to catch keyboard events if they bubble up
     */
    _handleKeyDown: (event: KeyboardEvent) => void;
    _incrementRating(): void;
    _decrementRating(): void;
    _setRating(value: number): void;
    /**
     * Announce the current rating to screen readers
     */
    _announceRating(): void;
    _handleStarClick(value: number): void;
    _handleStarHover(value: number): void;
    _handleStarLeave(): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-scroll-area`
 * @summary A component that provides a customizable scrollable area with a custom scrollbar.
 * @element dap-ds-scroll-area
 * @title - Scroll area
 *
 * @slot - The content to be scrolled
 *
 * @csspart viewport - The viewport element that contains the scrollable content
 * @csspart scrollbar - The scrollbar container
 * @csspart corner - The corner between vertical and horizontal scrollbars
 *
 * @cssprop --dds-scroll-area-radius - The border radius of the scroll area and its elements (default: var(--dds-radius-base))
 * @cssprop --dds-scroll-area-background - The background color of the scroll area (default: var(--dds-background-neutral-base))
 * @cssprop --dds-scroll-area-scrollbar-background - The background color of the scrollbar (default: var(--dds-background-neutral-subtle))
 * @cssprop --dds-scroll-area-thumb-background - The background color of the scrollbar thumb (default: var(--dds-background-neutral-interactive))
 * @cssprop --dds-scroll-area-thumb-hover-background - The background color of the scrollbar thumb on hover (default: var(--dds-background-neutral-interactive-hover))
 * @cssprop --dds-scroll-area-thumb-active-background - The background color of the scrollbar thumb when active (default: var(--dds-background-neutral-interactive-active))
 * @cssprop --dds-scroll-area-transition - The transition timing for scrollbar interactions (default: var(--dds-transition-fast) var(--dds-easing-ease-out))
 * @cssprop --dds-scroll-area-scrollbar-size - The width/height of the scrollbar (default: 10px)
 */
export declare class DapDSScrollArea extends DdsElement {
    /**
     * The orientation of the scrollbar.
     * @type {'vertical' | 'horizontal' | 'both'}
     * @default 'vertical'
     */
    orientation: 'vertical' | 'horizontal' | 'both';
    static readonly styles: CSSResult;
    private viewport;
    private scrollbar;
    private thumbHorizontal;
    private thumbVertical;
    private isDragging;
    private startY;
    private startScrollTop;
    firstUpdated(): void;
    private setupScrollbar;
    getScrollbar(orientation: 'horizontal' | 'vertical'): TemplateResult_2;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-search`
 * @summary A select is a form element that allows the user to select one option from a set.
 * @element dap-ds-search
 * @title - Search
 *
 * @event dds-change - Fired when the search value changes.
 * @event dds-blur - Emitted when the search loses focus.
 * @event dds-focus - Emitted when the search gains focus.
 * @event dds-clear - Emitted when the search is cleared.
 * @event dds-search - Emitted when the search input value changes.
 * @event dds-input - Emitted when typing happens in the search input.
 *
 * @property {string} value - The value of the search.
 * @property {string} placeholder - The placeholder of the search.
 * @property { 'top' | 'top-start' | 'top-end' | 'right' | 'right-start'| 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'} placement - The placement of the select dropdown. Default is 'bottom-start'.
 * @property {boolean} opened - Whether the search dropdown is opened.
 * @property {boolean} sync - The sync mode of the search dropdown. How the dropdown item size is synced to the trigger element'.
 * @property {string} label - The label of the search.
 * @property {string} description - The description of the search.
 * @property {string} tooltip - The tooltip of the search.
 * @property {'xs' | 'sm' | 'lg'} size - The size of the search.
 * @property {'none' | 'typehead' | 'autocomplete' | 'manual'} searchMode - The search mode of the select. Default is 'none'.
 * @property {boolean} disabled - Whether the search is disabled.
 * @property {boolean} required - Whether the search is required.
 * @property {boolean} readonly - Whether the search is readonly.
 * @property {boolean} autofocus - Whether the search is autofocus.
 * @property {string} clearButton - Whether the search is clearable. Default is 'true'.
 * @property {string} feedback - The feedback content of the search.
 * @property {'negative' | 'positive' | 'warning' | 'info'} feedbackType - The feedback type of the search.
 * @property {boolean} allowManualInput - Whether the search allows manual input, or free text.
 * @property {boolean} searchForText - Whether the search should search for the selected item text.
 * @property {boolean} textComplete - Whether the search should not complete the text.
 * @property {string} searchButtonAriaLabel - The aria label of the search button.
 * @property {boolean} openOnEmpty - Whether the search should open on empty results.
 * @property {string} selectable - Show the selected item check mark in the dropdown. Default is 'false'.
 * @property {boolean} noAnimation - Whether the search open indicator should be animated. Default is true.
 * @property {boolean} subtle - Subtle color version
 *
 * @cssproperty --dds-combobox-padding-xs - The padding for extra small size. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-combobox-padding-sm - The padding for small size. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-combobox-padding-lg - The padding for large size. Defaults to var(--dds-spacing-300).
 * @cssproperty --dds-combobox-padding-horizontal - The horizontal padding. Defaults to var(--dds-spacing-300).
 * @cssproperty --dds-combobox-padding-vertical - The vertical padding. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-combobox-gap - The gap between elements. Defaults to var(--dds-spacing-100).
 * @cssproperty --dds-combobox-icon-gap - The gap between icons. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-combobox-action-gap - The gap between action elements. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-combobox-action-padding - The padding for action elements. Defaults to var(--dds-spacing-300).
 * @cssproperty --dds-combobox-clear-icon-width - The width of the clear icon. Defaults to var(--dds-spacing-800).
 * @cssproperty --dds-combobox-dropdown-icon-right - The right position of the dropdown icon. Defaults to var(--dds-spacing-600).
 * @cssproperty --dds-combobox-min-width - The minimum width of the combobox. Defaults to 7.5rem.
 *
 * @csspart base - The main search container.
 * @csspart trigger - The trigger button of the search.
 * @csspart label - The label of the search.
 * @csspart description - The description of the search.
 * @csspart feedback - The feedback of the search.
 * @csspart tooltip - The tooltip of the search.
 * @csspart option-list - The option list of the search.
 *
 * @slot - The default slot for the options.
 *
 */
export declare class DapDSSearch extends ComboboxBaseElement {
    constructor();
    render(): TemplateResult_2;
}

/**
 * `dap-ds-select`
 * @summary A select is a form element that allows the user to select one option from a set.
 * @element dap-ds-select
 * @title - Select
 *
 * @event {{ value: string }} dds-change - Fired when the select value changes.
 * @event {{ void }} dds-blur - Emitted when the select loses focus.
 * @event {{ void }} dds-focus - Emitted when the select gains focus.
 * @event {{ void }} dds-opened - Emitted when the select dropdown is opened.
 * @event {{ void }} dds-closed - Emitted when the select dropdown is closed.
 *
 * @property {string} value - The value of the select.
 * @property {string} label - The label of the select.
 * @property {string} description - The description of the select.
 * @property {string} tooltip - The tooltip of the select.
 * @property {'top' | 'right' | 'bottom' | 'left'} tooltipPlacement - The tooltip placement of the select.
 * @property {'xs' | 'sm' | 'lg'} size - The size of the select. Default is `sm`.
 * @property {boolean} disabled - Whether the select is disabled.
 * @property {boolean} required - Whether the select is required.
 * @property {boolean} readonly - Whether the select is readonly.
 * @property {boolean} autofocus - Whether the select is autofocus.
 * @property {string} feedback - The feedback of the select.
 * @property {negative | positive | warning} feedbackType - The feedback type of the select. Can be `negative`, `positive`, or `warning`.
 * @property {string} status - The status of the select. Can be `success` or `error`.
 * @property {boolean} optional - The optional state of the select.
 * @property {string} optionalLabel - The optional label of the select.
 * @property {boolean} subtle - The weight of the label. Default is `false`
 *
 * @csspart base - The main select container.
 * @csspart trigger - The trigger button of the select.
 * @csspart label - The label of the select.
 * @csspart description - The description of the select.
 * @csspart feedback - The feedback of the select.
 * @csspart tooltip - The tooltip of the select.
 * @csspart option-list - The option list of the select.
 *
 * @cssproperty --dds-select-min-height - Minimum height of the select component (default: var(--dds-spacing-1000))
 * @cssproperty --dds-select-padding - Padding of the select component (default: var(--dds-spacing-300))
 * @cssproperty --dds-select-column-gap - Column gap of the select component (default: var(--dds-spacing-100))
 * @cssproperty --dds-select-border-color - Border color of the select component (default: var(--dds-border-neutral-base))
 * @cssproperty --dds-select-border-radius - Border radius of the select component (default: var(--dds-radius-base))
 * @cssproperty --dds-select-bg-color - Background color of the select component (default: var(--dds-background-neutral-subtle))
 * @cssproperty --dds-select-text-color - Text color of the select component (default: var(--dds-text-neutral-base))
 * @cssproperty --dds-select-icon-right - Right position of the icon (default: var(--dds-spacing-200))
 * @cssproperty --dds-select-icon-color - Color of the icon (default: var(--dds-icon-neutral-subtle))
 * @cssproperty --dds-select-text-margin-right - Right margin of the text (default: var(--dds-spacing-600))
 * @cssproperty --dds-select-disabled-border-color - Border color when disabled (default: var(--dds-background-neutral-stronger))
 * @cssproperty --dds-select-disabled-bg-color - Background color when disabled (default: var(--dds-background-neutral-stronger))
 * @cssproperty --dds-select-disabled-text-color - Text color when disabled (default: var(--dds-text-neutral-disabled))
 * @cssproperty --dds-select-error-border-color - Border color in error state (default: var(--dds-border-negative-base))
 * @cssproperty --dds-select-success-border-color - Border color in success state (default: var(--dds-border-positive-base))
 * @cssproperty --dds-select-xs-min-height - Minimum height for extra small size (default: var(--dds-spacing-800))
 * @cssproperty --dds-select-xs-padding - Padding for extra small size (default: var(--dds-spacing-200))
 * @cssproperty --dds-select-xs-font-size - Font size for extra small size (default: var(--dds-font-sm))
 * @cssproperty --dds-select-lg-min-height - Minimum height for large size (default: var(--dds-spacing-1200))
 * @cssproperty --dds-select-lg-padding - Padding for large size (default: var(--dds-spacing-400))
 * @cssproperty --dds-select-lg-font-size - Font size for large size (default: var(--dds-font-lg))
 * @cssproperty --dds-select-lg-icon-right - Right position of the icon for large size (default: var(--dds-spacing-300))
 * @cssproperty --dds-select-lg-icon-color - Color of the icon for large size (default: var(--dds-text-icon-neutral-subtle))
 * @cssproperty --dds-select-popup-bg-color - Background color of the popup (default: var(--dds-background-neutral-subtle))
 *
 * @slot - The option list of the select.
 * @slot indicator-icon - The indicator icon of the select.
 */
export declare class DapDSSelect extends GenericFormElement {
    /**
     * @ignore
     */
    triggerButton: HTMLButtonElement;
    /**
     * @ignore
     */
    optionList: DapDSOptionList;
    /** The popup placement of the select
     * @type {'top' | 'top-start' | 'top-end' | 'right' | 'right-start'| 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'}
     */
    placement: PopupPlacement;
    /** Whether the select dropdown is opened.*/
    opened?: boolean | undefined;
    /** The placeholder of the select. */
    placeholder: string | null;
    /** The sync size of the select dropdown */
    sync?: boolean;
    /** Whether the select is in mobile mode. */
    isMobile?: boolean;
    /** The loading state of the select. */
    loading?: boolean;
    /** The max heigth of the select dropdown. */
    maxHeight?: number;
    /** Whether the select dropdown indicator is animated or not */
    noAnimation?: boolean;
    /** The floating strategy of the select dropdown
     * @type {'absolute' | 'fixed'}
     */
    floatingStrategy: FloatingStrategy;
    /**
     * @ignore
     */
    selectedItem: any;
    static readonly styles: CSSResult;
    /**
     * Lifecycle method to handle property changes
     */
    updated(changedProperties: Map<string, unknown>): void;
    private readonly handleClick;
    private readonly handleKeyDown;
    private readonly handleListKeyDown;
    private readonly handleDocumentMouseDown;
    private readonly handleFocus;
    private readonly handleBlur;
    formResetCallback(): void;
    showDropDown(key?: string): Promise<void>;
    hideDropDown(): Promise<void>;
    get focusElement(): HTMLButtonElement;
    get validity(): ValidityState;
    get validationMessage(): string;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setValidity(): void;
    handleInvalid(event: Event): void;
    private readonly handleSelectedChange;
    private readonly handleOptionDeselect;
    renderTriggerElement(): TemplateResult_2;
    renderOptionList(): TemplateResult_2;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-sidenav`
 * @summary Side navigation is a list of links that are used to navigate to different sections of a page.
 * @element dap-ds-sidenav
 * @title - Side navigation
 *
 * @event {{ href: string, event: Event }} dds-item-click - Event fired when the side navigation item is clicked.
 *
 * @slot - The content of the side navigation.
 *
 * @csspart base - The main side navigation container.
 * @csspart menu - The menu of the side navigation.
 */
export declare class DapDSSideNav extends DdsElement {
    /** The label of the side navigation, if aria label is not provided, it will be used as aria label */
    label: string;
    /** The active href of the side navigation, to explicitly set the active item, if not provided, it will be set based on the current location */
    activeHref: string;
    /** The size of the side navigation */
    size: 'xs' | 'sm' | 'lg';
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
    private removeActive;
    private setActive;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-sidenav-group`
 * @summary Side navigation group
 * @element dap-ds-sidenav-group
 * @title - Side navigation group
 * @group side-navigation
 *
 * @slot - The content of the side navigation group.
 * @slot submenu - The submenu of the side navigation group.
 * @slot suffix - The suffix of the side navigation group.
 *
 * @csspart base - The main side navigation group container.
 * @csspart title - The title of the side navigation group.
 * @csspart link - The link of the side navigation group.
 * @csspart toggle - The toggle button of the side navigation group.
 * @csspart submenu - The submenu of the side navigation group.
 *
 * @cssproperty --dds-sidenav-group-margin-bottom - Default bottom margin of the sidenav group.
 * @cssproperty --dds-sidenav-group-border-radius - Border radius of the sidenav group.
 * @cssproperty --dds-sidenav-group-spacing-margin - Margin used for spacing variants.
 * @cssproperty --dds-sidenav-group-item-min-height-xs - Minimum height of the sidenav group item.
 * @cssproperty --dds-sidenav-group-item-min-height-sm - Minimum height of the sidenav group item.
 * @cssproperty --dds-sidenav-group-item-min-height-lg - Minimum height of the sidenav group item.
 * @cssproperty --dds-sidenav-group-item-padding-xs - Padding of the sidenav group item.
 * @cssproperty --dds-sidenav-group-item-padding-sm - Padding of the sidenav group item.
 * @cssproperty --dds-sidenav-group-item-padding-lg - Padding of the sidenav group item.
 * @cssproperty --dds-sidenav-group-item-color - Text color of the sidenav group item.
 * @cssproperty --dds-sidenav-group-item-font-size-xs - Font size of the sidenav group item.
 * @cssproperty --dds-sidenav-group-item-font-size-sm - Font size of the sidenav group item.
 * @cssproperty --dds-sidenav-group-item-font-size-lg - Font size of the sidenav group item.
 * @cssproperty --dds-sidenav-group-item-font-weight - Font weight of the sidenav group item.
 * @cssproperty --dds-sidenav-group-item-bg-active - Background color when the item is active.
 * @cssproperty --dds-sidenav-group-item-bg-hover - Background color on hover and active states.
 * @cssproperty --dds-sidenav-group-toggle-margin - Margin for the toggle button.
 * @cssproperty --dds-sidenav-group-submenu-padding - Padding for the submenu.
 */
export declare class DapDSSideNavGroup extends DdsElement {
    /** The href of the side navigation item */
    href: string;
    /** Whether the side navigation item is active */
    active: boolean;
    /** The spacing of the side navigation item
     * @type {'top' | 'bottom' | 'both' | 'none'}
     */
    spacing: Spacing_2;
    /** Whether the side navigation group is open */
    open: boolean;
    /** The size of the side navigation group */
    size: 'xs' | 'sm' | 'lg';
    static readonly styles: CSSResult;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-sidenav-item`
 * @summary Side navigation item
 * @element dap-ds-sidenav-item
 * @title - Side navigation item
 * @group side-navigation
 *
 * @slot - The content of the side navigation item.
 * @slot suffix - The suffix of the side navigation item.
 *
 * @csspart base - The main side navigation item container.
 * @csspart link - The link of the side navigation item.
 *
 * @cssproperty --dds-sidenav-item-min-height-xs - Minimum height of the sidenav item.
 * @cssproperty --dds-sidenav-item-min-height-sm - Minimum height of the sidenav item.
 * @cssproperty --dds-sidenav-item-min-height-lg - Minimum height of the sidenav item.
 * @cssproperty --dds-sidenav-item-margin-bottom - Default bottom margin of the sidenav item.
 * @cssproperty --dds-sidenav-item-padding-xs - Padding of the sidenav item.
 * @cssproperty --dds-sidenav-item-padding-sm - Padding of the sidenav item.
 * @cssproperty --dds-sidenav-item-padding-lg - Padding of the sidenav item.
 * @cssproperty --dds-sidenav-item-radius - Border radius of the sidenav item.
 * @cssproperty --dds-sidenav-item-color - Text color of the sidenav item.
 * @cssproperty --dds-sidenav-item-font-size-xs - Font size of the sidenav item.
 * @cssproperty --dds-sidenav-item-font-size-sm - Font size of the sidenav item.
 * @cssproperty --dds-sidenav-item-font-size-lg - Font size of the sidenav item.
 * @cssproperty --dds-sidenav-item-font-weight - Font weight of the sidenav item.
 * @cssproperty --dds-sidenav-item-spacing-margin - Margin used for spacing variants.
 * @cssproperty --dds-sidenav-item-bg-active - Background color when the item is active.
 * @cssproperty --dds-sidenav-item-bg-hover - Background color on hover and active states.
 */
export declare class DapDSSideNavItem extends DdsElement {
    /** The href of the side navigation item */
    href: string;
    /** Whether the side navigation item is active */
    active: boolean;
    /** The spacing of the side navigation item
     * @type {'top' | 'bottom' | 'both' | 'none'}
     */
    spacing: Spacing_3;
    /** The size of the side navigation item */
    size: 'xs' | 'sm' | 'lg';
    static readonly styles: CSSResult;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-skeleton`
 * @summary A skeleton loader component for displaying placeholder content while loading.
 * @element dap-ds-skeleton
 * @title - Skeleton
 *
 * @example Basic Usage
 * ```html
 * <dap-ds-skeleton></dap-ds-skeleton>
 * <dap-ds-skeleton variant="circular"></dap-ds-skeleton>
 * <dap-ds-skeleton variant="rectangular" width="200px" height="100px"></dap-ds-skeleton>
 * <dap-ds-skeleton animation="custom" custom-keyframes="0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); }"></dap-ds-skeleton>
 * ```
 *
 * @csspart base - The main skeleton container.
 *
 * @cssprop --dds-skeleton-color - The base color of the skeleton.
 * @cssprop --dds-skeleton-animation-duration - Duration of the loading animation.
 * @cssprop --dds-skeleton-border-radius - Border radius for rectangular skeletons.
 * @cssprop --dds-skeleton-text-spacing - Spacing between text lines in text variant.
 * @cssprop --dds-skeleton-animation-timing-function - Timing function for the loading animation.
 */
export declare class DapDSSkeleton extends DdsElement {
    /**
     * The variant of the skeleton.
     * @type {"text" | "circular" | "rectangular"}
     */
    variant: SkeletonVariant;
    /**
     * The width of the skeleton. Can be any valid CSS width value.
     */
    width?: string;
    /**
     * The height of the skeleton. Can be any valid CSS height value.
     */
    height?: string;
    /**
     * Whether to animate the skeleton.
     */
    animated: boolean;
    /**
     * The animation type for the skeleton.
     * @type {"wave" | "pulse" | "custom"}
     */
    animation: SkeletonAnimation;
    /**
     * Custom keyframes for the animation when animation="custom".
     * Should be a valid CSS keyframes string without the @keyframes wrapper.
     * @example "0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); }"
     */
    customKeyframes?: string;
    static readonly styles: CSSResult;
    private _customStyleSheet?;
    private _updateCustomAnimation;
    updated(changedProperties: Map<string, unknown>): void;
    render(): TemplateResult_2<1>;
}

/**
 * `dap-ds-skip-link`
 * @summary A skip link is a link that allows keyboard users to skip to the main content of a page.
 * @element dap-ds-skip-link
 * @title - Skip link
 *
 * @slot - The content of the skip link.
 *
 * @csspart base - The main skip link container.
 * @csspart text - The text container of the skip link.
 * @csspart high-contrast - The high contrast outline container.
 *
 * @cssproperty --dds-skip-link-border-color - Border color for the high contrast outline (default: var(--dds-border-neutral-transparent-interactive, #fff500))
 * @cssproperty --dds-skip-link-border-width - Border width for the high contrast outline (default: var(--dds-border-width-large))
 * @cssproperty --dds-skip-link-border-width-active - Border width for the active state (default: var(--dds-border-width-xlarge))
 * @cssproperty --dds-skip-link-border-radius - Border radius of the skip link (default: var(--dds-radius-small))
 * @cssproperty --dds-skip-link-padding-sm - Padding for small size variant (default: var(--dds-spacing-200))
 * @cssproperty --dds-skip-link-padding-lg - Padding for large size variant (default: var(--dds-spacing-400))
 * @cssproperty --dds-skip-link-text-underline-offset - Underline offset for the text (default: 3px)
 * @cssproperty --dds-skip-link-z-index - Z-index of the skip link (default: var(--dds-z-index-100))
 */
export declare class DapDSSkipLink extends DdsElement {
    /** The placement of the skip link.
     * @type {'left' | 'center'}
     */
    placement: Placement;
    /** The href of the skip link */
    href: string;
    /** The size of the skip link
     * @type {'sm' | 'lg'}
     */
    size: CommonSize;
    /** Whether the skip link should have an underline */
    noUnderline: boolean;
    static readonly styles: CSSResult;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-snackbar`
 * @summary The Snackbar is a container of sliding messages.
 * @element dap-ds-snackbar
 * @title - Snackbar
 *
 * @csspart host - The host element
 *
 * @cssproperty --dds-snackbar-spacing - Spacing used for positioning the snackbar (default: var(--dds-spacing-400))
 * @cssproperty --dds-snackbar-z-index - Z-index of the snackbar container (default: 10000)
 * @cssproperty --dds-snackbar-pointer-events - Pointer events behavior for the snackbar (default: auto)
 * @cssproperty --dds-snackbar-animation-duration - Duration of entrance animations (default: 0.3s)
 * @cssproperty --dds-snackbar-animation-timing - Timing function for animations (default: ease-out)
 */
export declare class DapDSSnackbar extends DdsElement {
    /** The maximum number of snackbar messages at a given time. */
    maxItems: number;
    /** The position of the snackbar
     * @type {'bottom-left' | 'bottom-right' | 'bottom-center' | 'top-right' | 'top-center'}
     */
    position: SnackbarPosition;
    /** The duration of the snackbar message in milliseconds */
    duration: number;
    /** Whether the snackbar should announce new messages to screen readers */
    announceMessages: boolean;
    private messages;
    private idCounter;
    private timeouts;
    static readonly styles: CSSResult;
    /**
     * Static method to show a snackbar message anywhere in the application
     * @param message - The message to display
     * @param options - Optional configuration for the message
     */
    static show(message: string, options?: MessageOptionsType): void;
    /**
     * Static method to show a success message
     * @param message - The message to display
     * @param options - Optional configuration (alertType will be overridden to 'successful')
     */
    static success(message: string, options?: Omit<MessageOptionsType, 'alertType'>): void;
    /**
     * Static method to show an error message
     * @param message - The message to display
     * @param options - Optional configuration (alertType will be overridden to 'error')
     */
    static error(message: string, options?: Omit<MessageOptionsType, 'alertType'>): void;
    /**
     * Static method to show an information message
     * @param message - The message to display
     * @param options - Optional configuration (alertType will be overridden to 'information')
     */
    static info(message: string, options?: Omit<MessageOptionsType, 'alertType'>): void;
    /**
     * Static method to show a default message
     * @param message - The message to display
     * @param options - Optional configuration (alertType will be overridden to 'default')
     */
    static default(message: string, options?: Omit<MessageOptionsType, 'alertType'>): void;
    /**
     * Static method to close all snackbar messages globally
     */
    static closeAll(): void;
    /**
     * Close all currently displayed messages
     */
    closeAll(): void;
    private generateId;
    addMessage(message: string, options?: MessageOptionsType): void;
    private sliceMessage;
    private removeMessage;
    private elapseMessages;
    private clearTimeout;
    private clearAllTimeouts;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleShowSnackbarEvent;
    private handleCloseAllEvent;
    private handleKeyDown;
    private announceToScreenReader;
    private _closeMessage;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-snackbar-message`
 * @summary The Snackbar component shows a sliding message to the user.
 * @element dap-ds-snackbar-message
 * @title - Snackbar message
 * @group snackbar
 *
 * @event {{ id: string }} dds-close - Fires when the snackbar closes.
 *
 * @slot default - The content of the snackbar.
 *
 * @csspart base - Main snackbar container.
 * @csspart text - The text part of the snackbar.
 * @csspart closebutton - The close button part of the component.
 * @csspart icon - The icon part of the close button.
 *
 * @cssproperty --dds-snackbar-width - Width of the snackbar.
 * @cssproperty --dds-snackbar-gap - Gap between snackbar elements.
 * @cssproperty --dds-snackbar-padding - Padding inside the snackbar.
 * @cssproperty --dds-snackbar-margin-bottom - Bottom margin of the snackbar.
 * @cssproperty --dds-snackbar-transition - Transition property for the snackbar.
 * @cssproperty --dds-snackbar-border-width - Border width of the snackbar.
 * @cssproperty --dds-snackbar-border-radius - Border radius of the snackbar.
 * @cssproperty --dds-snackbar-font-size - Font size used in the snackbar.
 * @cssproperty --dds-snackbar-background - Background color of the snackbar.
 * @cssproperty --dds-snackbar-border - Border color of the snackbar.
 * @cssproperty --dds-snackbar-text - Text color of the snackbar.
 * @cssproperty --dds-snackbar-icon - Icon color of the snackbar.
 * @cssproperty --dds-snackbar-link - Link color of the snackbar.
 * @cssproperty --dds-snackbar-information-background - Background color for information variant.
 * @cssproperty --dds-snackbar-information-border - Border color for information variant.
 * @cssproperty --dds-snackbar-information-icon - Icon color for information variant.
 * @cssproperty --dds-snackbar-success-background - Background color for success variant.
 * @cssproperty --dds-snackbar-success-border - Border color for success variant.
 * @cssproperty --dds-snackbar-success-icon - Icon color for success variant.
 * @cssproperty --dds-snackbar-error-background - Background color for error variant.
 * @cssproperty --dds-snackbar-error-border - Border color for error variant.
 * @cssproperty --dds-snackbar-error-icon - Icon color for error variant.
 * @cssproperty --dds-snackbar-variant-text - Text color for information, success, and error variants.
 * @cssproperty --dds-snackbar-variant-icon - Icon color for information, success, and error variants.
 * @cssproperty --dds-snackbar-variant-link - Link color for information, success, and error variants.
 */
export declare class DapDSSnackbarMessage extends DdsElement {
    /** The actions of the snackbar item. */
    actions?: ActionType[];
    /** The message of the snackbar item. */
    message: string;
    /** Whether the snackbar has a close button. */
    closeButton: string;
    /** The message type of the snackbar item. */
    alertType: AlertType;
    /** The custom style of the snackbar item. */
    customStyle?: Record<string, string>;
    /** The position of the snackbar container for directional animations. */
    position: SnackbarPosition;
    private isClosing;
    static readonly styles: CSSResult;
    private getActions;
    private getAlertTypeIcon;
    private _close;
    render(): TemplateResult;
}

/**
 * `dap-ds-spinner`
 * @summary Loading spinner component.
 * @element dap-ds-spinner
 * @title - Spinner
 *
 * @csspart base - The main spinner container.
 * @csspart icon - The loading icon element.
 * @csspart icon-base - The base of the loading icon.
 * @csspart text - The loading text element.
 *
 * @slot - The loading text content.
 *
 * @cssprop --dds-spinner-icon-color-neutral - Color for neutral spinner icons.
 * @cssprop --dds-spinner-icon-color-brand - Color for brand spinner icons.
 * @cssprop --dds-spinner-icon-color-negative - Color for negative spinner icons.
 * @cssprop --dds-spinner-icon-color-positive - Color for positive spinner icons.
 * @cssprop --dds-spinner-icon-color-inverted - Color for inverted spinner icons.
 * @cssprop --dds-spinner-text-spacing - Spacing between spinner and text.
 * @cssprop --dds-spinner-animation-duration - Duration of the spinner animation.
 *
 */
export declare class DapDSSpinner extends DdsElement {
    /**
     * The variant of the spinner.
     * @type {"neutral" | "brand" | "negative" | "positive" | "inverted"}
     */
    variant: SpinnerVariant;
    /**
     * The size of the spinner.
     * @type {"xxl" | "xl" | "lg" | "md" | "sm" | "xs"}
     */
    size: IconSize;
    /** The size of the spinner in pixels. This overrides the size attribute */
    staticSize?: number;
    /** The loading text. */
    text: string;
    /** Removes the text color */
    noColor: boolean;
    static readonly styles: CSSResult;
    render(): TemplateResult_2<1>;
}

/**
 * `dap-ds-stack`
 * @summary A stack is a container for stacked content.
 * @element dap-ds-stack
 * @title - Stack
 *
 * @slot - The content of the stack.
 *
 * @csspart stack - The main stack container.
 */
export declare class DapDSStack extends DdsElement {
    /** The direction of the stack.
     * @type {'column' | 'column-reverse' | 'row' | 'row-reverse'}
     */
    direction: CSSFlexDirection;
    /** Adds margin to the end of the stack. */
    endMargin?: boolean;
    /** Adds margin to the start of the stack. */
    startMargin?: boolean;
    private _spacing;
    /** The spacing of the stack. Uses the system spacing scale (100, 200, 300...etc) */
    set spacing(value: Spacing);
    get spacing(): Spacing;
    static readonly styles: CSSResult;
    getMarginStyles(direction: CSSFlexDirection, spacing: number, startMargin?: boolean, endMargin?: boolean): string;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-switch`
 * @summary A switch is a graphical control element that allows the user to toggle between two states.
 * @element dap-ds-switch
 * @title - Switch
 *
 * @property {string} name - The name of the switch.
 * @property {string} value - The value of the switch.
 * @property {string} label - The label of the switch.
 * @property {string} description - The description of the switch.
 * @property {boolean} checked - The checked state of the switch.
 * @property {'xs' | 'sm' | 'lg'} size - The size of the switch.
 * @property {boolean} disabled - The disabled state of the switch.
 * @property {boolean} readonly - Whether the switch is readonly (cannot be changed but value is submitted with form).
 * @property {boolean} required - The required state of the switch.
 * @property {'left' | 'right'} labelPlacement - The placement of the label.
 * @property {'top' | 'bottom'} descriptionPlacement - The placement of the description.
 * @property {boolean} subtle - The weight of the label.
 * @property {string} feedback - The feedback of the switch.
 * @property {'negative' | 'positive' | 'warning'} feedbackType - The feedback type of the switch.
 * @property {boolean} optional - The optional state of the switch.
 * @property {string} optionalLabel - The optional label of the switch.
 *
 * @cssProperty --dds-switch-width - Width of the switch control.
 * @cssProperty --dds-switch-height - Height of the switch control.
 * @cssProperty --dds-switch-thumb-width - Width of the switch thumb.
 * @cssProperty --dds-switch-thumb-height - Height of the switch thumb.
 * @cssProperty --dds-switch-thumb-margin - Margin around the switch thumb.
 * @cssProperty --dds-switch-thumb-color - Color of the switch thumb.
 * @cssProperty --dds-switch-unchecked-bg - Background color of the switch when unchecked.
 * @cssProperty --dds-switch-checked-bg - Background color of the switch when checked.
 * @cssProperty --dds-switch-invalid-bg - Background color of the switch when invalid.
 * @cssProperty --dds-switch-disabled-bg - Background color of the switch when disabled.
 * @cssProperty --dds-switch-wrapper-padding - Padding of the switch wrapper.
 * @cssProperty --dds-switch-wrapper-bg - Background color of the switch wrapper.
 * @cssProperty --dds-switch-border-color - Border color of the switch.
 * @cssProperty --dds-switch-high-contrast-border-color - Border color of the switch in high contrast mode.
 *
 * @event {{ value: string }} dds-change - Fired when the input value changes.
 * @event {{ void }} dds-blur - Emitted when the input loses focus.
 * @event {{ void }} dds-focus - Emitted when the input gains focus.
 * @event {{ value: string }} dds-input - Emitted when the input receives input.
 *
 * @csspart base - The main switch container.
 * @csspart baselabel - The main label container
 * @csspart label - The label of the switch.
 * @csspart input - The native input of the switch.
 * @csspart control - The control of the switch.
 * @csspart description - The description of the switch.
 */
export declare class DapDSSwitch extends LabeledChoiceElement {
    private readonly input;
    /** This sets up border around the switch, when true. */
    border: boolean;
    /** The type of the switch
     * @type {'normal' | 'background'}
     */
    type: 'normal' | 'background';
    static readonly styles: CSSResult;
    /**
     * Validates property combinations and logs warnings for invalid states.
     * @private
     */
    private validateProperties;
    /**
     * Gets the aria-describedby attribute value by combining description and feedback IDs.
     * @returns {string | undefined} Space-separated IDs or undefined if none exist
     * @private
     */
    private getAriaDescribedBy;
    /**
     * Handles click events on the switch.
     * Manages the checked state transitions and emits change events.
     * @private
     */
    private readonly handleClick;
    get focusElement(): HTMLInputElement;
    /**
     * Programmatically focuses the switch input element.
     * @public
     */
    focus(): void;
    /**
     * Programmatically blurs the switch input element.
     * @public
     */
    blur(): void;
    /**
     * Handles invalid events on the switch input.
     * Prevents the default browser validation UI from showing and manages invalid state.
     * @param {Event} event - The invalid event
     * @private
     */
    handleInvalid(event: Event): void;
    /**
     * Handles keyboard events on the switch.
     * Provides enhanced keyboard navigation and accessibility.
     * @param {KeyboardEvent} event - The keyboard event
     * @private
     */
    private handleKeyDown;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-tab`
 * @summary A tab item component. It is used in dap-ds-tab-group component slot to create a tab item.
 * @element dap-ds-tab
 * @title - Tab
 * *
 * @slot - The tab title template.
 * @slot content - The tab content.
 *
 * @csspart base - The main tab content container.
 */
export declare class DapDSTab extends DdsElement {
    static readonly styles: CSSResult;
    /** The tab id. Required */
    tabId: string;
    /** The disabled state of the tab. */
    disabled: boolean;
    private _selected;
    firstUpdated(): void;
    render(): TemplateResult_2<1>;
}

/**
 * `dap-ds-tab-group`
 * @summary A tab group component. It is used with dap-ds-tab component to create a tab group.
 * @element dap-ds-tab-group
 * @title - Tab group
 * @group tab
 *
 * @event dds-tab-select - Fired when select a new tab.
 *
 * @slot - The tab items.
 *
 * @csspart base - The main container.
 * @csspart tab-nav - The tab navigation container.
 * @csspart tab-content - The tab content container.
 *
 * @cssproperty --dds-tab-group-border-radius - Border radius of the tab group container
 * @cssproperty --dds-tab-group-border-width - Border width of the tab navigation
 * @cssproperty --dds-tab-group-border-color - Border color of the tab navigation
 * @cssproperty --dds-tab-height-sm - Height of small tabs
 * @cssproperty --dds-tab-height-lg - Height of large tabs
 * @cssproperty --dds-tab-font-size-sm - Font size of small tabs
 * @cssproperty --dds-tab-font-size-lg - Font size of large tabs
 * @cssproperty --dds-tab-padding - Padding of the tab buttons
 * @cssproperty --dds-tab-border-width - Border width for tabs
 * @cssproperty --dds-tab-selected-border-color - Border color for selected tabs
 * @cssproperty --dds-tab-text-color - Text color for tabs
 * @cssproperty --dds-tab-hover-text-color - Text color for tabs on hover
 * @cssproperty --dds-tab-disabled-text-color - Text color for disabled tabs
 * @cssproperty --dds-tab-hover-background - Background color for tabs on hover
 * @cssproperty --dds-tab-active-background - Background color for active tabs
 */
export declare class DapDSTabGroup extends DdsElement {
    /**@ignore */
    defaultSlot: HTMLSlotElement;
    /**@ignore */
    tabNavElements: HTMLElement[];
    /** The selected tab id. */
    selectedTabId: string;
    /** The size of the tab buttons. Default is `sm`. Can be `sm` or `lg`.
     * @type {'sm' | 'lg'}
     */
    size: CommonSize;
    /** If true, the tab group will be displayed in mobile mode. */
    mobile: boolean;
    static readonly styles: CSSResult;
    private _tabNavItems;
    private _activeTabIds;
    private _initialEmit;
    emitTabSelect(tabId: string): void;
    attributeChangedCallback(name: string, oldValue: string | null, value: string | null): void;
    handleSlotChange(event: Event): void;
    handleClick(tabId: string | null): void;
    handleKeyDown(event: KeyboardEvent): void;
    render(): TemplateResult_2<1>;
}

/**
 * Data table component.
 * @element dap-ds-table
 * @title - Table
 *
 * @slot - The default slot. Accepts `dap-ds-table-row` elements.
 *
 * @cssprop --dds-table-border-width - Width of the table border. Default: var(--dds-border-width-base, 1px)
 * @cssprop --dds-table-border-color - Color of the table border. Default: var(--dds-border-neutral-subtle)
 * @cssprop --dds-table-border-radius - Border radius of the table. Default: var(--dds-radius-small, 4px)
 * @cssprop --dds-table-row-divider-color - Color of the divider between rows in mobile view. Default: var(--dds-border-neutral-subtle)
 */
export declare class DapDSTable extends DdsElement {
    /**@ignore */
    rows: Array<HTMLElement>;
    role: string;
    /**If the table has mobile design */
    mobile: boolean;
    /** The caption of the table */
    caption: string;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * Table cell component.
 * @element dap-ds-table-cell
 * @title - Table cell
 * @group table
 *
 * @slot - The default slot.
 *
 * @csspart base - The main cell container.
 *
 * @cssproperty --dds-table-cell-padding-block - Padding for the top and bottom of the cell. Default: var(--dds-spacing-200)
 * @cssproperty --dds-table-cell-padding-inline-start - Padding for the start (left in LTR) of the cell. Default: var(--dds-spacing-500)
 * @cssproperty --dds-table-cell-padding-inline-end - Padding for the end (right in LTR) of the cell. Default: var(--dds-spacing-500)
 * @cssproperty --dds-table-cell-border-width - Width of the cell's bottom border. Default: var(--dds-border-width-base)
 * @cssproperty --dds-table-cell-border-color - Color of the cell's bottom border. Default: var(--dds-border-neutral-subtle)
 * @cssproperty --dds-table-cell-text-color - Text color of the cell. Default: var(--dds-text-neutral-base)
 * @cssproperty --dds-table-cell-line-height - Line height of the cell text. Default: 1.5
 * @cssproperty --dds-table-cell-text-align - Text alignment in the cell. Default: left
 */
export declare class DapDSTableCell extends DdsElement {
    static readonly styles: CSSResult;
    /**If the cell is the last one.*/
    last: boolean;
    /** The html role of the cell */
    role: string;
    render(): TemplateResult_2;
}

/**
 * Table header cell component.
 * @element dap-ds-table-header
 * @title - Table header
 * @group table
 *
 * @slot - The default slot.
 *
 * @csspart base - The main header cell container.
 *
 * @cssproperty --dds-table-header-padding-block - Padding for the top and bottom of the header cell.
 * @cssproperty --dds-table-header-padding-inline-start - Padding for the start (left in LTR) of the header cell.
 * @cssproperty --dds-table-header-padding-inline-end - Padding for the end (right in LTR) of the header cell.
 * @cssproperty --dds-table-header-border-width - Width of the header cell's bottom border.
 * @cssproperty --dds-table-header-border-color - Color of the header cell's bottom border.
 * @cssproperty --dds-table-header-text-color - Text color of the header cell.
 * @cssproperty --dds-table-header-font-weight - Font weight of the header cell text.
 * @cssproperty --dds-table-header-line-height - Line height of the header cell text.
 */
export declare class DapDSTableHeader extends DdsElement {
    static readonly styles: CSSResult;
    /**If the header cell is the last one.*/
    last: boolean;
    /** The html role of the header cell */
    role: string;
    render(): TemplateResult_2;
}

/**
 * Table row component.
 * @element dap-ds-table-row
 * @title - Table row
 * @group table
 *
 * @slot - The default slot. Accepts `dap-ds-table-cell` and `dap-ds-table-header` elements.
 *
 * @cssprop --dds-table-row-padding-right - Padding right for the last table header, defaults to var(--dds-spacing-500)
 * @cssprop --dds-table-row-padding-top - Padding top for table headers in mobile view, defaults to var(--dds-spacing-400)
 * @cssprop --dds-table-row-padding-bottom - Padding bottom for the last table cell in mobile view, defaults to var(--dds-spacing-400)
 * @cssprop --dds-table-row-border-color - Border color for table cells and headers, defaults to transparent
 */
export declare class DapDSTableRow extends DdsElement {
    static readonly styles: CSSResult;
    /** The html role of the row */
    role: string;
    /**If the row is mobile design */
    mobile: boolean;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-textarea`
 * @summary A textarea is a multi-line text input field.
 * @element dap-ds-textarea
 * @title - Textarea
 *
 * @property {'xs' | 'sm' | 'lg'} size - The size of the textarea. Default is `md`.
 * @property {boolean} disabled - The disabled state of the textarea.
 * @property {number} minlength - The minimum length of the textarea.
 * @property {string} value - The value of the textarea.
 * @property {string} tooltip - The tooltip of the textarea.
 * @property {'top' | 'right' | 'bottom' | 'left'} tooltipPlacement - The tooltip placement of the textarea.
 * @property {InputStatus} status - The status of the textarea. Can be `success` or `error`.
 * @property {boolean} readonly - The readonly state of the textarea.
 * @property {boolean} required - The required state of the textarea.
 * @property {string} label - The label of the textarea.
 * @property {string} description - The description of the textarea.
 * @property {string} feedback - The feedback of the textarea.
 * @property {'negative' | 'positive' | 'warning'} feedbackType - The feedback type of the textarea. Can be `negative`, `positive`, or `warning`.
 * @property {boolean} optional - The optional state of the textarea.
 * @property {string} optionalLabel - The optional label of the textarea.
 * @property {boolean} subtle - The weight of the label. Default is `false`
 * @property {boolean} autofocus - The autofocus state of the textarea.
 *
 * @event {{ value: number }} dds-count-change - Fires when the count of the textarea changes.
 * @event {{ value: string }} dds-change - Fired when the textarea value changes.
 * @event {{ value: string }} dds-input - Fired when the textarea value changes.
 * @event {{ value: string, originalEvent: Event }} dds-keydown - Fired when a key is pressed down.
 * @event {{ void }} dds-blur - Fired when the textarea loses focus.
 * @event {{ void }} dds-focus - Emitted when the textarea gains focus.
 * @event {{ value: string }} dds-select - Emitted when select text in textarea.
 *
 * @slot feedback-icon - The custom icon of the feedback.
 *
 * @csspart base - The main textarea container.
 * @csspart input - The native input of the textarea.
 * @csspart counter - The counter of the textarea.
 * @csspart counter-base - The base of the counter.
 * @csspart feedback - The feedback of the textarea.
 * @csspart feedback-base - The base of the feedback.
 * @csspart feedback-text - The text of the feedback.
 * @csspart feedback-icon - The icon of the feedback.
 *
 * @cssproperty --dds-textarea-min-rows - Minimum number of rows in the textarea. Default is 2.
 * @cssproperty --dds-textarea-spacing - Gap between elements in the textarea container. Default is var(--dds-spacing-200).
 * @cssproperty --dds-textarea-gap - Gap between elements in the textarea container. Default is var(--dds-spacing-200).
 * @cssproperty --dds-textarea-margin-top - Top margin of the textarea. Default is var(--dds-spacing-200).
 * @cssproperty --dds-textarea-padding - Padding of the textarea control. Default is var(--dds-spacing-200) var(--dds-spacing-300).
 * @cssproperty --dds-textarea-border-width - Border width of the textarea. Default is var(--dds-border-width-base).
 * @cssproperty --dds-textarea-border-color - Border color of the textarea. Default is var(--dds-border-neutral-base).
 * @cssproperty --dds-textarea-background - Background color of the textarea. Default is var(--dds-fields-background-default).
 * @cssproperty --dds-textarea-color - Text color of the textarea. Default is var(--dds-text-neutral-base).
 * @cssproperty --dds-textarea-border-radius - Border radius of the textarea. Default is var(--dds-radius-base).
 * @cssproperty --dds-textarea-disabled-bg - Background color when disabled. Default is var(--dds-fields-background-disabled).
 * @cssproperty --dds-textarea-disabled-color - Text color when disabled. Default is var(--dds-text-neutral-disabled).
 * @cssproperty --dds-textarea-readonly-bg - Background color when readonly. Default is var(--dds-fields-background-read-only).
 * @cssproperty --dds-textarea-readonly-color - Text color when readonly. Default is var(--dds-text-neutral-subtle).
 * @cssproperty --dds-textarea-error-border - Border color when in error state. Default is var(--dds-border-negative-base).
 * @cssproperty --dds-textarea-success-border - Border color when in success state. Default is var(--dds-border-positive-base).
 */
export declare class DapDSTextarea extends GenericFormElement {
    /**@ignore */
    input: HTMLTextAreaElement;
    /** Hide character counter. */
    hideCounter: boolean;
    /** The minimum length of the textarea. */
    minlength?: number;
    /** The maximum length of the textarea. */
    maxlength?: number;
    /** The number of rows in the textarea. */
    rows?: number;
    /** The number of columns in the textarea. */
    cols?: number;
    /** The placeholder of the textarea. */
    placeholder: string;
    /** Indicates how the control should wrap the value for form submission. */
    wrap: 'hard' | 'soft';
    /**@ignore */
    count: number;
    static readonly styles: CSSResult;
    get focusElement(): HTMLTextAreaElement;
    private _handleSlotChange;
    connectedCallback(): Promise<void>;
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    onInput(): void;
    onChange(): void;
    onSelect(e: Event): void;
    formResetCallback(): void;
    handleInvalid(event: Event): void;
    private _renderFooter;
    render(): unknown;
    private _renderFeedback;
}

/**
 * `dap-ds-time-grid`
 * @summary A time grid component that allows users to select hours and minutes in two side-by-side scrollable columns.
 * @element dap-ds-time-grid
 * @title - Time grid
 * @group timepicker
 *
 * @property {number} selectedHour - The currently selected hour (0-23).
 * @property {number} selectedMinute - The currently selected minute (0-59).
 * @property {string} minTime - The minimum selectable time (format: 'HH:mm').
 * @property {string} maxTime - The maximum selectable time (format: 'HH:mm').
 * @property {number} step - The step interval in minutes.
 * @property {string} locale - The locale for time formatting.
 *
 * @event {{ detail: TimeSelection }} dds-change - Fired when time selection changes.
 * @event {{ void }} dds-close - Fired when the time grid should close.
 *
 * @csspart time-grid - The main time grid container.
 * @csspart hour-section - The hour selection section.
 * @csspart minute-section - The minute selection section.
 * @csspart time-button - Individual time selection buttons.
 * @csspart section-header-title - The title of the section header.
 * @csspart section-header-divider - The divider between the section header and the time buttons.
 * @csspart time-column - The time column container.
 *
 * @cssprop --dds-time-grid-gap - The gap between time sections (default: var(--dds-spacing-400)).
 * @cssprop --dds-time-grid-padding - The padding around the time grid (default: var(--dds-spacing-0)).
 * @cssprop --dds-time-grid-column-gap - The gap between time buttons in columns (default: var(--dds-spacing-200)).
 * @cssprop --dds-time-grid-border-radius - The border radius of the time grid (default: var(--dds-radius-base)).
 * @cssprop --dds-time-grid-background - The background color of the time grid (default: var(--dds-background-neutral-subtle)).
 * @cssprop --dds-time-grid-transition - The transition timing for the time grid (default: all 0.2s ease-in-out).
 * @cssprop --dds-time-grid-max-width - The maximum width of the time grid (default: 400px).
 * @cssprop --dds-time-grid-column-max-height - The maximum height of time columns (default: 240px).
 */
export declare class DapDSTimeGrid extends DdsElement {
    selectedHour: number;
    selectedMinute: number;
    minTime: string;
    maxTime: string;
    step: number;
    locale: string;
    static readonly styles: CSSResult;
    private getHours;
    private getMinutes;
    private isTimeDisabled;
    private handleHourSelect;
    private handleMinuteSelect;
    private emitChange;
    private formatHour;
    private formatMinute;
    scrollToSelectedTime(): void;
    firstUpdated(changedProperties: Map<string, unknown>): void;
    updated(changedProperties: Map<string, unknown>): void;
    render(): TemplateResult_2<1>;
}

/**
 * `dap-ds-timeline`
 * @summary A timeline is a graphical representation of a series of events.
 * @element dap-ds-timeline
 * @title - Timeline
 *
 * @slot - The default slot for the timeline items.
 *
 * @csspart base - The main timeline container.
 */
export declare class DapDSTimeline extends DdsElement {
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-timeline-item`
 * @summary A timeline is a graphical representation of a series of events.
 * @element dap-ds-timeline-item
 * @title - Timeline item
 * @group timeline
 *
 * @slot - The default slot for the item content.
 *
 * @csspart base - The main timeline item container.
 * @csspart connector - The connector element between two timeline items.
 * @csspart content - The content of the timeline item.
 *
 * @cssproperty --dds-timeline-position - Position of the timeline dot (default: 28px)
 * @cssproperty --dds-timeline-connector-width - Width of the timeline connector line (default: 1px)
 * @cssproperty --dds-timeline-connector-left-position - Left position of the timeline connector (default: 5.5px)
 * @cssproperty --dds-timeline-dot-size - Size of the timeline dot (default: var(--dds-spacing-300))
 * @cssproperty --dds-timeline-item-margin-bottom - Bottom margin of timeline items (default: var(--dds-spacing-200))
 * @cssproperty --dds-timeline-item-padding-left - Left padding of timeline items (default: var(--dds-spacing-400))
 */
export declare class DapDSTimelineItem extends DdsElement {
    static readonly styles: CSSResult;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-timepicker`
 * @summary A timepicker is a graphical user interface widget that allows the user to select a time from a time range.
 * @element dap-ds-timepicker
 * @title - Timepicker
 *
 * @property {Dayjs} value - The value of the timepicker.
 * @property {string} label - The label of the timepicker.
 * @property {string} description - The description of the timepicker.
 * @property {'xs' | 'sm' | 'lg'} size - The size of the timepicker.
 * @property {boolean} disabled - The disabled state of the timepicker.
 * @property {boolean} required - The required state of the timepicker.
 * @property {boolean} readonly - The readonly state of the timepicker.
 * @property {boolean} autofocus - The autofocus state of the timepicker.
 * @property {string} tooltip - The tooltip of the timepicker.
 * @property {'top' | 'right' | 'bottom' | 'left'} tooltipPlacement - The tooltip placement of the timepicker.
 * @property {string} feedback - The feedback of the timepicker.
 * @property {'negative' | 'positive' | 'warning'} feedbackType - The feedback type of the timepicker.
 * @property {boolean} optional - The optional state of the timepicker.
 * @property {string} optionalLabel - The optional label of the timepicker.
 * @property {boolean} subtle - The weight of the label. Default is `false`
 * @property {string} autocomplete - The autocomplete of the timepicker.
 * @property {string} placeholder - The placeholder of the timepicker.
 * @property {boolean} loading - The loading state of the timepicker.
 * @property {string} format - The format of the timepicker. Defaults to 'HH:mm'.
 * @property {string} minTime - The minimum time of the timepicker. Format: 'HH:mm'.
 * @property {string} maxTime - The maximum time of the timepicker. Format: 'HH:mm'.
 * @property {number} step - The step interval in minutes. Defaults to 15.
 * @property {boolean} openTimeOnInput - Whether the time picker should open on typing.
 * @property {boolean} sendEmptyEventOnInput - Whether the time picker should send an empty event on typing.
 * @property {string} clearButton - Whether the clear button should be shown. Defaults to 'true'.
 * @property {string} clearButtonAriaLabel - The aria label of the clear button.
 * @property {string} placement - The placement of the dropdown of the timepicker.
 * @property {FloatingStrategy} floatingStrategy - The floating strategy of the timepicker.
 * @property {string} locale - The locale of the timepicker.
 * @property {boolean} closeOnSelection - Whether the dropdown should close when a time is selected.
 *
 * @event {{ value: string }} dds-change - Fired when the timepicker value changes.
 * @event {{ value: string }} dds-input - Fired when the timepicker input value changes.
 * @event {{ value: string }} dds-valid-time - Fired when the timepicker input value is valid. Happens on manual input typing.
 * @event {{ value: string, type: 'invalid' | 'out-of-range' }} dds-invalid-time - Fired when the timepicker input value is invalid. Happens on manual input typing.
 * @event {{ void }} dds-clear - Fired when the timepicker is cleared.
 * @event {{ void }} dds-focus - Emitted when the timepicker gains focus.
 * @event {{ void }} dds-blur - Emitted when the timepicker loses focus.
 *
 * @csspart base - The main timepicker container.
 * @csspart trigger - The trigger button of the timepicker.
 * @csspart label - The label of the timepicker.
 * @csspart description - The description of the timepicker.
 * @csspart feedback - The feedback of the timepicker.
 * @csspart tooltip - The tooltip of the timepicker.
 * @csspart input - The input of the timepicker.
 * @csspart clear-button - The clear button of the timepicker.
 *
 * @cssproperty --dds-timepicker-background - The background color of the timepicker. Defaults to var(--dds-fields-background-default).
 * @cssproperty --dds-timepicker-border-color - The border color of the timepicker. Defaults to var(--dds-border-neutral-base).
 * @cssproperty --dds-timepicker-border-width - The border width of the timepicker. Defaults to var(--dds-border-width-base, 1px).
 * @cssproperty --dds-timepicker-border-radius - The border radius of the timepicker. Defaults to var(--dds-radius-base).
 * @cssproperty --dds-timepicker-text-color - The text color of the timepicker. Defaults to var(--dds-text-neutral-base).
 * @cssproperty --dds-timepicker-placeholder-color - The placeholder text color. Defaults to var(--dds-text-neutral-subtle).
 * @cssproperty --dds-timepicker-disabled-background - The background color when disabled. Defaults to var(--dds-background-neutral-stronger).
 * @cssproperty --dds-timepicker-disabled-text - The text color when disabled. Defaults to var(--dds-text-neutral-disabled).
 * @cssproperty --dds-timepicker-error-border - The border color for error state. Defaults to var(--dds-border-negative-base).
 * @cssproperty --dds-timepicker-success-border - The border color for success state. Defaults to var(--dds-border-positive-base).
 * @cssproperty --dds-timepicker-icon-color - The color of the icons. Defaults to var(--dds-text-icon-neutral-subtle).
 * @cssproperty --dds-timepicker-clear-icon-color - The color of the clear icon. Defaults to var(--dds-button-subtle-icon-neutral-enabled).
 * @cssproperty --dds-timepicker-popup-background - The background color of the popup. Defaults to var(--dds-background-neutral-subtle).
 * @cssproperty --dds-timepicker-popup-shadow - The box shadow of the popup. Defaults to 0 4px 6px -1px rgb(0 0 0 / 8%), 0 2px 4px -1px rgb(0 0 0 / 6%).
 *
 * @cssproperty --dds-timepicker-padding-xs - The padding for extra small size. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-timepicker-padding-sm - The padding for small size. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-timepicker-padding-lg - The padding for large size. Defaults to var(--dds-spacing-300).
 * @cssproperty --dds-timepicker-padding-horizontal - The horizontal padding. Defaults to var(--dds-spacing-300).
 * @cssproperty --dds-timepicker-padding-vertical - The vertical padding. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-timepicker-gap - The gap between elements. Defaults to var(--dds-spacing-100).
 * @cssproperty --dds-timepicker-icon-gap - The gap between icons. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-timepicker-action-gap - The gap between action elements. Defaults to var(--dds-spacing-200).
 * @cssproperty --dds-timepicker-action-padding - The padding for action elements. Defaults to var(--dds-spacing-300).
 * @cssproperty --dds-timepicker-clear-icon-width - The width of the clear icon. Defaults to var(--dds-spacing-800).
 * @cssproperty --dds-timepicker-dropdown-icon-right - The right position of the dropdown icon. Defaults to var(--dds-spacing-600).
 * @cssproperty --dds-timepicker-min-width - The minimum width of the timepicker. Defaults to 7.5rem.
 *
 */
export declare class DapDSTimePicker extends GenericFormElement {
    private readonly triggerInput;
    private readonly timeGrid;
    private _timeValue?;
    private get timeValue();
    private set timeValue(value);
    /** The minimum time of the timepicker. This time will be the minimum selectable time.
     * @type {string}
     * @default '00:00'
     */
    minTime: string;
    /** The maximum time of the timepicker. This time will be the maximum selectable time.
     * @type {string}
     * @default '23:59'
     */
    maxTime: string;
    /** The step interval in minutes for the time input.
     * @type {number}
     * @default 5
     */
    step: number;
    /** The placement of the dropdown of the timepicker.
     * @type {'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'}
     */
    placement: PopupPlacement;
    /** The open state of the timepicker. */
    opened: boolean;
    /** Whether the time picker should open on typing. */
    openTimeOnInput: boolean;
    /** Whether the time picker should send an empty event on typing. */
    sendEmptyEventOnInput: boolean;
    /** The placeholder of the timepicker. */
    placeholder: string | null;
    /** The loading state of the timepicker. */
    loading?: boolean;
    /** The format of the timepicker. This is the time format used for display and validation.
     * @type {string}
     * @default 'HH:mm'
     */
    format: string;
    /** Whether the clear button should be shown. */
    clearButton?: string;
    /** The aria label of the clear button. */
    clearButtonAriaLabel?: string;
    /** The floating strategy of the timepicker. */
    floatingStrategy: FloatingStrategy;
    /** The locale of the timepicker. By default it uses the global locale from dayjs.
     * @type {'hu' | 'en'}
     */
    locale: string;
    /** Whether the dropdown should close when a time is selected. */
    closeOnSelection: boolean;
    private setValueState;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    private syncTimeValue;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private updateTimeGridSelection;
    private getHourValue;
    private getMinuteValue;
    getFormattedValue(): string;
    isValidTime(value: string): boolean;
    isValueValid(): boolean;
    isInputValid(): boolean;
    setValue(value?: Dayjs, setInputValue?: boolean, sendEmptyEventOnInput?: boolean): void;
    clearSelection(): Promise<void>;
    private readonly handleDocumentMouseDown;
    private readonly handleInput;
    private readonly handleKeyDown;
    get focusElement(): HTMLInputElement;
    private readonly handleClick;
    private readonly handleClearClick;
    private readonly handleTimeChange;
    showTimePicker(): Promise<void>;
    hideTimePicker(): Promise<void>;
    private readonly handleFocus;
    private readonly handleBlur;
    private readonly handlePopupOpened;
    getValidity(): boolean;
    get validity(): ValidityState;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setValidity(): void;
    handleInvalid(event: Event): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-toc`
 * @summary A table of contents (TOC) is a list of links that allows users to quickly navigate to sections within a document.
 * @element dap-ds-toc
 * @title - toc
 *
 * @property {'sm' | 'lg'} size - The size of the toc. Default is `lg`.
 *
 * @event {{ selectedItem: HTMLAnchorElement, anchorElement: IntersectionObserverEntry | HTMLElement }} dds-anchor-change - Event that is triggered when the anchor changes.
 *
 * @csspart base - The main container of the toc.
 *
 * @cssproperty --dds-toc-border-width - Width of the TOC border. Default: var(--dds-border-width-base)
 * @cssproperty --dds-toc-border-color - Color of the TOC border. Default: var(--dds-border-neutral-divider)
 * @cssproperty --dds-toc-title-color - Color of the TOC title. Default: var(--dds-text-neutral-strong)
 * @cssproperty --dds-toc-title-font-size - Font size of the TOC title. Default: var(--dds-font-base)
 * @cssproperty --dds-toc-title-font-weight - Font weight of the TOC title. Default: var(--dds-font-weight-bold)
 * @cssproperty --dds-toc-title-line-height - Line height of the TOC title. Default: 1.25
 * @cssproperty --dds-toc-link-color - Color of the TOC links. Default: var(--dds-button-subtle-text-neutral-enabled)
 * @cssproperty --dds-toc-link-active-color - Color of the active TOC link. Default: var(--dds-button-subtle-text-enabled)
 * @cssproperty --dds-toc-link-border-color - Border color of the active TOC link. Default: var(--dds-border-brand-base)
 * @cssproperty --dds-toc-link-line-height - Line height of the TOC links. Default: 1.2
 * @cssproperty --dds-toc-link-padding - Padding of the TOC links. Default: var(--dds-spacing-200)
 */
export declare class DapDSTOC extends DapDSTOC_base {
    /** The root element to observe [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#root) */
    root: string;
    /** The margin around the root element to observe [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) */
    rootMargin: string;
    /** The margin around the last anchor to observe [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) */
    lastAnchorRootMargin: string;
    /** The threshold to trigger [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold) */
    threshold: number[];
    /** The minimum heading level to include in the TOC. The default value is `2`. */
    minHeadingLevel: number;
    /** The maximum heading level to include in the TOC. The default value is `3`. */
    maxHeadingLevel: number;
    /** Whether to indent the TOC items. */
    noIndent: boolean;
    /** The header of the TOC. */
    header: string;
    private _observer;
    private _lastAnchorObserver;
    private _anchors;
    private _activeAnchor;
    private _selectors;
    private _items;
    private _intersectionData;
    private _debounceTimer;
    static readonly styles: CSSResult;
    constructor();
    get activeAnchor(): HTMLAnchorElement;
    get anchors(): HTMLElement[];
    get items(): Heading[];
    connectedCallback(): void;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): Promise<void>;
    attributeChangedCallback(name: string, oldValue: any, newValue: any): Promise<void>;
    updated(changedProperties: Map<PropertyKey, unknown>): Promise<void>;
    disconnectedCallback(): void;
    private readonly onScroll;
    renderTree(): Promise<void>;
    getAnchors(minHeadingLevel: number, maxHeadingLevel: number): HTMLElement[];
    setActiveAnchor(element: HTMLAnchorElement, entry: IntersectionObserverEntry | HTMLElement): void;
    private readonly getHeaders;
    buildTree(headers: any[]): string;
    private readonly _handleIntersect;
    private readonly _updateActiveAnchor;
}

declare const DapDSTOC_base: typeof DdsElement & {
    new (...args: any[]): SizedElementInterface;
    prototype: SizedElementInterface;
};

/**
 * `dap-ds-toggle-button` is a custom toggle button component.
 * @element dap-ds-toggle-button
 * @summary A toggle button is a button that can be toggled on (active) or off (inactive).
 * @title - Toggle button
 *
 * @slot - The content of the toggle button.
 *
 * @csspart base - The main button container.
 * @csspart high-contrast - The high contrast part of the button.
 *
 * @cssproperty --dds-toggle-button-min-width-lg - Minimum width of the large toggle button
 * @cssproperty --dds-toggle-button-min-width-md - Minimum width of the medium toggle button
 * @cssproperty --dds-toggle-button-min-width-sm - Minimum width of the small toggle button
 * @cssproperty --dds-toggle-button-min-width-xs - Minimum width of the extra small toggle button
 * @cssproperty --dds-toggle-button-height-lg - Height of the large toggle button
 * @cssproperty --dds-toggle-button-height-md - Height of the medium toggle button
 * @cssproperty --dds-toggle-button-height-sm - Height of the small toggle button
 * @cssproperty --dds-toggle-button-height-xs - Height of the extra small toggle button
 * @cssproperty --dds-toggle-button-padding-lg - Padding of the large toggle button
 * @cssproperty --dds-toggle-button-padding-md - Padding of the medium toggle button
 * @cssproperty --dds-toggle-button-padding-sm - Padding of the small toggle button
 * @cssproperty --dds-toggle-button-padding-xs - Padding of the extra small toggle button
 * @cssproperty --dds-toggle-button-font-size-lg - Font size of the large toggle button
 * @cssproperty --dds-toggle-button-font-size-md - Font size of the medium toggle button
 * @cssproperty --dds-toggle-button-font-size-sm - Font size of the small toggle button
 * @cssproperty --dds-toggle-button-font-size-xs - Font size of the extra small toggle button
 * @cssproperty --dds-toggle-button-border-enabled - Border color in enabled state
 * @cssproperty --dds-toggle-button-background-enabled - Background color in enabled state
 * @cssproperty --dds-toggle-button-content-enabled - Content/text color in enabled state
 * @cssproperty --dds-toggle-button-border-hover - Border color in hover state
 * @cssproperty --dds-toggle-button-background-hover - Background color in hover state
 * @cssproperty --dds-toggle-button-border-pressed - Border color in pressed state
 * @cssproperty --dds-toggle-button-background-pressed - Background color in pressed state
 * @cssproperty --dds-toggle-button-background-selected-enabled - Background color in selected enabled state
 * @cssproperty --dds-toggle-button-content-selected-enabled - Content/text color in selected enabled state
 * @cssproperty --dds-toggle-button-background-selected-hover - Background color in selected hover state
 * @cssproperty --dds-toggle-button-background-selected-pressed - Background color in selected pressed state
 * @cssproperty --dds-toggle-button-border-disabled - Border color in disabled state
 * @cssproperty --dds-toggle-button-background-disabled - Background color in disabled state
 * @cssproperty --dds-toggle-button-content-disabled - Content/text color in disabled state
 * @cssproperty --dds-toggle-button-highcontrast-border - High contrast border color
 * @cssproperty --dds-toggle-button-highcontrast-border-hover - High contrast border color on hover
 */
export declare class DapDSToggleButton extends GenericFormElement {
    /** The size of the button
     * @type { 'lg' | 'md' | 'sm' | 'xs' }
     */
    size: ButtonSize;
    /** Whether the button is active. */
    active: boolean;
    /** The shape of the button
     * @type { 'button' | 'circle' }
     */
    shape: ButtonShape;
    sizeChildren: string;
    static readonly styles: CSSResult;
    get focusElement(): HTMLButtonElement;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    private handleClick;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-tooltip`
 * @summary A tooltip is a container for tooltip content.
 * @element dap-ds-tooltip
 * @title - Tooltip
 *
 * @slot - The content of the tooltip.
 * @slot trigger - The trigger element of the tooltip.
 *
 * @csspart base - The main tooltip container.
 * @csspart trigger - The trigger element of the tooltip.
 * @csspart popup - The popup of the tooltip.
 * @csspart arrow - The arrow of the tooltip.
 *
 * @cssproperty --dds-tooltip-max-width - The maximum width of the tooltip before its content will wrap.
 * @cssproperty --dds-tooltip-padding - The padding inside the tooltip.
 * @cssproperty --dds-tooltip-border-color - The border color of the tooltip.
 * @cssproperty --dds-tooltip-bg-color - The background color of the tooltip.
 * @cssproperty --dds-tooltip-text-color - The text color of the tooltip.
 * @cssproperty --dds-tooltip-font-size - The font size of the tooltip text.
 * @cssproperty --dds-tooltip-box-shadow - The box shadow of the tooltip.
 */
export declare class DapDSTooltip extends DdsElement {
    static readonly styles: CSSResult;
    /** The content of the tooltip, supporting text only. */
    content: string;
    /** The position of the tooltip around the trigger element.
     * @type { 'top' | 'right' | 'bottom' | 'left' }
     */
    placement: PopupPlacement;
    /** Sets the tooltip to opened by default (will still be closed on closing events). */
    opened?: boolean | undefined;
    /** Sets the tooltip to toggle mode.
     * @type { 'tooltip' | 'toggle' }
     */
    mode?: TooltipMode_2;
    /** Hides the arrow of the tooltip. */
    noArrow?: boolean | undefined;
    /** The floating strategy of the tooltip. Default is `absolute`. Can be `absolute` or `fixed`.
     * @type { 'absolute' | 'fixed' }
     */
    floatingStrategy: 'absolute' | 'fixed';
    private _trigger;
    /** Sets custom trigger event (hover, focus, click). Default is `hover focus`. */
    set trigger(value: string);
    get trigger(): string;
    /** @ignore */
    mouseOverTooltip: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    showTooltip(): Promise<void>;
    hideTooltip(): Promise<void>;
    private readonly handleBlur;
    private readonly handleClick;
    private readonly handleFocus;
    private readonly handleMouseOver;
    private readonly handleMouseOut;
    private readonly hasTrigger;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-tray`
 * @summary A tray is a container for slide in content.
 * @element dap-ds-tray
 * @title - Tray
 *
 * @property {boolean} open - The open state of the tray.
 * @property {boolean} closeOnEsc - Whether the tray should close on pressing the escape key. Default is true.
 * @property {boolean} closeOnOverlayClick - Whether the tray should close on clicking the overlay. Default is true.
 * @property {string} closeButton - Whether the tray should have a close button. Default is true.
 * @property {string} title - The title of the tray.
 * @property {string} description - The description of the tray.
 * @property {string} okButtonLabel - The label of the OK button.
 * @property {string} cancelButtonLabel - The label of the Cancel button.
 * @property {string} footer - Whether the tray should have a footer. Default is false.
 * @property {string} header - Whether the tray should have a header. Default is false.
 *
 * @event {{ void }} dds-before-open - Fires before the tray opens.
 * @event {{ void }} dds-opened - Fires after the tray opens.
 * @event {{ void }} dds-before-close - Fires before the tray closes.
 * @event {{ void }} dds-closed - Fires after the tray closed.
 * @event {{ void }} dds-close - Fires when the tray is closes. You can prevent the tray from closing by calling `event.preventDefault()`.
 *
 * @slot - The content of the tray.
 * @slot header - The header of the tray.
 * @slot footer - The footer of the tray.
 *
 * @cssproperty --dds-modal-max-block-size - Maximum height of the modal. Default: 80vh.
 * @cssproperty --dds-modal-max-inline-size - Maximum width of the modal. Default: 600px.
 * @cssproperty --dds-modal-padding - Padding inside the modal. Default: var(--dds-spacing-800).
 * @cssproperty --dds-modal-transform-amount - Amount to transform for entrance animation. Default: 2rem.
 * @cssproperty --dds-modal-transition-speed - Speed of transition animations. Default: var(--dds-transition-fast).
 * @cssproperty --dds-modal-transition-timing - Timing function for transitions. Default: var(--dds-easing-ease-in-out).
 * @cssproperty --dds-modal-border-width - Border width of the modal. Default: var(--dds-border-width-base).
 * @cssproperty --dds-modal-border-color - Border color of the modal. Default: var(--dds-border-neutral-divider).
 * @cssproperty --dds-modal-border-radius - Border radius of the modal. Default: var(--dds-radius-large, 16px).
 * @cssproperty --dds-modal-background - Background color of the modal. Default: var(--dds-background-neutral-subtle).
 * @cssproperty --dds-modal-header-margin - Margin below the header. Default: var(--dds-spacing-800).
 * @cssproperty --dds-modal-footer-margin - Margin above the footer. Default: var(--dds-spacing-400).
 * @cssproperty --dds-modal-footer-gap - Gap between footer elements. Default: var(--dds-spacing-400).
 * @cssproperty --dds-modal-close-margin - Margin for the close button. Default: var(--dds-spacing-300).
 * @cssproperty --dds-tray-width-side - Width of the side (left/right) trays. Default: 250px.
 * @cssproperty --dds-tray-min-width-horizontal - Minimum width of the horizontal (top/bottom) trays. Default: 400px.
 * @cssproperty --dds-tray-min-height-horizontal - Minimum height of the horizontal (top/bottom) trays. Default: 300px.
 * @cssproperty --dds-tray-min-height-vertical - Minimum height of the vertical (left/right) trays. Default: 100%.
 * @cssproperty --dds-tray-transform-duration - Duration of the transform animation. Default: 0.3s.
 * @cssproperty --dds-tray-transform-timing - Timing function for the transform animation. Default: ease-in-out.
 *
 * @csspart base - The main tray container.
 * @csspart panel - The panel of the tray.
 * @csspart header - The header of the tray.
 * @csspart footer - The footer of the tray.
 * @csspart body - The body of the tray.
 *
 */
export declare class DapDSTray extends ModalBaseElement {
    /** The placement of the tray.
     * @type { 'left' | 'right' | 'top' | 'bottom' }
     */
    placement: 'left' | 'right' | 'top' | 'bottom';
    constructor();
    static readonly styles: CSSResult;
    render(): TemplateResult_2<1>;
}

/**
 * @element dap-ds-typography
 * @summary Typography is used to display text in different styles.
 * @title - Typography
 *
 * @slot default - The content of the typography.
 *
 * @csspart base - The main typography container.
 *
 * @cssproperty --dds-text-color - The color of the typography.
 * @cssproperty --dds-text-heading-color - The color of the heading typography.
 * @cssproperty --dds-text-description-subtle - The color of the subtle typography.
 * @cssproperty --dds-text-font-family - The font family of the typography.
 * @cssproperty --dds-text-font-weight-medium - The font weight of the medium typography.
 * @cssproperty --dds-text-font-weight-bold - The font weight of the bold typography.
 * @cssproperty --dds-text-font-size-h1 - The font size of the h1 typography.
 * @cssproperty --dds-text-font-size-h2 - The font size of the h2 typography.
 * @cssproperty --dds-text-font-size-h3 - The font size of the h3 typography.
 * @cssproperty --dds-text-font-size-h4 - The font size of the h4 typography.
 * @cssproperty --dds-text-font-size-h5 - The font size of the h5 typography.
 * @cssproperty --dds-text-font-size-h6 - The font size of the h6 typography.
 * @cssproperty --dds-text-font-size-body - The font size of the body typography.
 * @cssproperty --dds-text-font-size-caption - The font size of the caption typography.
 * @cssproperty --dds-text-font-size-description - The font size of the description typography.
 * @cssproperty --dds-text-font-size-description-lg - The font size of the description lg typography.
 * @cssproperty --dds-text-font-size-description-sm - The font size of the description sm typography.
 * @cssproperty --dds-text-font-size-lg - The font size of the lg typography.
 * @cssproperty --dds-text-font-size-md - The font size of the md typography.
 * @cssproperty --dds-text-font-size-sm - The font size of the sm typography.
 * @cssproperty --dds-text-font-size-xs - The font size of the xs typography.
 */
export declare class DapDSTypography extends DdsElement implements Common<TypographyProps> {
    /**
     * The variant of the typography.
     * @type {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'description'}
     */
    variant: TypographyVariant;
    /**
     * The size of the typography.
     * @type {'sm' | 'md' | 'lg'}
     */
    size?: TypographySize;
    /**
     * The html element of the body typography.
     */
    bodyAs?: string;
    /** The custom class of the typography. */
    customClass?: string;
    /** Whether the typography is an anchor for the TOC component. */
    anchor: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private get elementId();
    private _renderHeading;
    private _renderBody;
    private _renderCaption;
    private _renderDescription;
    private _getElement;
    render(): TemplateResult_2 | null;
}

export declare type DdsAllUploadsCompleteEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsAnchorChangeEvent = CustomEvent<{
    selectedItem: HTMLAnchorElement;
    anchorElement: IntersectionObserverEntry | HTMLElement;
}>;

export declare type DdsBeforeCloseEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsBeforeOpenEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsBlurEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsCancelEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsChangeEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsClearEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsClickEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsClosedEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsCloseEvent = CustomEvent<{
    id?: string;
}>;

export declare type DdsCommandItemClickEvent = CustomEvent<{
    value: string;
    closeOnSelect?: string;
}>;

export declare type DdsCopyEvent = CustomEvent<{
    value: string;
}>;

export declare type DdsCountChangeEvent = CustomEvent<{
    value: number | string;
}>;

declare class DdsElement extends LitElement {
    emit<V = Record<PropertyKey, any>>(name: string, value?: V, options?: EventOptions): CustomEvent<V>;
}

export declare type DdsErrorEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsFileChangeEvent = CustomEvent<{
    files: File[];
}>;

export declare type DdsFileDeleteErrorEvent = CustomEvent<{
    file: FileListElement;
    error: Error;
}>;

export declare type DdsFileRemovedEvent = CustomEvent<{
    file: DapDSFileInputListItem;
    cancel: {
        allow: (value: boolean) => void;
        reject: () => void;
    };
}>;

export declare type DdsFileRemoveEvent = CustomEvent<{
    file: FileListElement;
}>;

export declare type DdsFocusEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsInputEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsInvalidDateEvent = CustomEvent<{
    value: string | Dayjs;
    type: 'invalid' | 'out-of-range';
}>;

export declare type DdsInvalidTimeEvent = CustomEvent<{
    value: string | Dayjs;
    hour: number;
    minute: number;
    type: 'invalid' | 'out-of-range';
}>;

export declare type DdsItemClickEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsKeydownEvent = CustomEvent<{
    value: string;
    event: KeyboardEvent;
} | {
    code: string;
    key: string;
    value: string;
    event: KeyboardEvent;
    index: number;
    opt: DapDSOptionItem;
    text: string;
}>;

export declare type DdsListChangedEvent = CustomEvent<{
    elements: any[];
}>;

export declare type DdsLoadEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsLoadingTimeoutEvent = CustomEvent<{
    timeout: number;
}>;

export declare type DdsNavigationDropdownOpenEvent = CustomEvent<{
    item: DapDSNavigationMenuItem;
}>;

export declare type DdsNavigationItemClickEvent = CustomEvent<{
    href: string;
    event: Event;
}>;

export declare type DdsNotAllowedEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsOkEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsOpenedEvent = CustomEvent<Record<PropertyKey, never>>;

export declare type DdsOptionChangeEvent = CustomEvent<{
    index: number;
    opt: DapDSOptionItem;
    text: string;
    selected?: boolean;
}>;

export declare type DdsOverflowClickEvent = CustomEvent<{
    /** The original click event that triggered this overflow click */
    originalEvent: Event;
}>;

export declare type DdsPaginationChangeEvent = CustomEvent<{
    pagination: PaginationState;
}>;

export declare type DdsRowClickEvent = CustomEvent<SortingState[]>;

export declare type DdsSearchEvent = CustomEvent<{
    search: string;
}>;

export declare type DdsSelectEvent = CustomEvent<{
    value: string;
}>;

export declare type DdsSelectionChangeEvent = CustomEvent<RowSelectionState>;

export declare type DdsSortingChangeEvent = CustomEvent<{
    sorting: SortingState;
}>;

export declare type DdsTabSelectEvent = CustomEvent<{
    tabId: string;
}>;

export declare type DdsUploadCompleteEvent = CustomEvent<{
    file: File;
    item: DapDSFileInputListItem;
    result: any;
}>;

export declare type DdsUploadErrorEvent = CustomEvent<{
    file: File;
    error: Error;
    item: DapDSFileInputListItem;
}>;

export declare type DdsUploadProgressEvent = CustomEvent<{
    file: File;
    item: DapDSFileInputListItem;
    progress: number;
}>;

export declare type DdsUploadStartEvent = CustomEvent<{
    file: File;
}>;

export declare type DdsValidDateEvent = CustomEvent<{
    value: string | Dayjs;
}>;

export declare type DdsValidTimeEvent = CustomEvent<{
    value: string | Dayjs;
    hour: number;
    minute: number;
}>;

export declare type DescriptionPlacement = Extract<Placement, 'top' | 'bottom'>;

declare type DescriptionProps = {
    variant: Extract<TypographyVariant, 'description'>;
    size: Extract<TypographySize, 'lg' | 'sm'>;
};

/**
 * `dap-ds-icon-edit-line`
 * @summary An icon
 * @element dap-ds-icon-edit-line
 * @title - DesignEditLine
 * @group icon
 * @icontype design
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class DesignEditLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-tools-line`
 * @summary An icon
 * @element dap-ds-icon-tools-line
 * @title - DesignToolsLine
 * @group icon
 * @icontype design
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class DesignToolsLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-computer-line`
 * @summary An icon
 * @element dap-ds-icon-computer-line
 * @title - DeviceComputerLine
 * @group icon
 * @icontype device
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class DeviceComputerLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

declare type DisableableElement = HTMLElement & {
    disabled?: boolean;
};

/**
 * `dap-ds-icon-clipboard-line`
 * @summary An icon
 * @element dap-ds-icon-clipboard-line
 * @title - DocumentClipboardLine
 * @group icon
 * @icontype document
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class DocumentClipboardLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-file-copy-line`
 * @summary An icon
 * @element dap-ds-icon-file-copy-line
 * @title - DocumentFileCopyLine
 * @group icon
 * @icontype document
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class DocumentFileCopyLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-file-image-line`
 * @summary An icon
 * @element dap-ds-icon-file-image-line
 * @title - DocumentFileImageLine
 * @group icon
 * @icontype document
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class DocumentFileImageLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-file-music-line`
 * @summary An icon
 * @element dap-ds-icon-file-music-line
 * @title - DocumentFileMusicLine
 * @group icon
 * @icontype document
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class DocumentFileMusicLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-file-text-line`
 * @summary An icon
 * @element dap-ds-icon-file-text-line
 * @title - DocumentFileTextLine
 * @group icon
 * @icontype document
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class DocumentFileTextLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-file-video-line`
 * @summary An icon
 * @element dap-ds-icon-file-video-line
 * @title - DocumentFileVideoLine
 * @group icon
 * @icontype document
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class DocumentFileVideoLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-folder-line`
 * @summary An icon
 * @element dap-ds-icon-folder-line
 * @title - DocumentFolderLine
 * @group icon
 * @icontype document
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class DocumentFolderLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-folder-open-line`
 * @summary An icon
 * @element dap-ds-icon-folder-open-line
 * @title - DocumentFolderOpenLine
 * @group icon
 * @icontype document
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class DocumentFolderOpenLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

export declare type ElementSpacing = 'top' | 'bottom' | 'both' | 'none';

declare interface EventOptions {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}

export declare type ExtendedColumnDef<T> = ColumnDef<T, unknown> & {
    textAlign?: string;
    headerTextAlign?: string;
    disableDefaultSorting?: boolean;
};

declare interface FeedbackElementInterface {
    feedbackSize?: CommonSize;
    feedback: string;
    feedbackType?: FeedbackType;
    feedbackSubtle?: boolean;
    feedbackNoMargin?: boolean;
    feedbackId?: string;
    renderFeedback(content?: unknown): unknown;
}

declare type FeedbackType = 'negative' | 'positive' | 'warning';

export declare class FileError extends Error {
    file: File;
    type: string;
    meta?: Record<string, any>;
    constructor(message: string, file: File, type: string, meta?: Record<string, any>);
}

export declare type FileItemTemplate = {
    file: File;
    fileObjectUrl: string;
    href: string;
    target: string;
    rel: string;
    download: string;
    showFileLink: string;
    showSize: string;
    showDeleteButton: string;
    formattedSize: string;
    feedback: string;
    feedbackType: string;
    loading: boolean;
    showThumbnail: string;
    fileType: string;
    fileLinkLabel?: string;
    thumbnailUrl?: string | null;
    thumbnailSize?: string;
    handleFileClick: (event: Event) => void;
    handleDelete: (file: FileListElement | File) => void;
};

export declare type FileListElement = {
    name: string;
    type: string;
    size: number;
    lastModified: number;
};

export declare type FileType = 'image' | 'video' | 'audio' | 'document' | 'unknown' | 'pdf';

export declare type FloatingStrategy = 'absolute' | 'fixed';

declare interface FocusableElementInterface {
    disabled: boolean;
    autofocus: boolean;
    focusElement: DisableableElement;
    focus(options?: FocusOptions): void;
    blur(): void;
    click(): void;
}

declare interface FormElementInterface {
    name: string;
    defaultValue?: any;
    form?: string;
    formElement?: HTMLFormElement | null;
    disabled: boolean;
    required: boolean;
    readonly: boolean;
    invalid: boolean;
    value?: any;
    status?: InputStatus;
    internals: ElementInternals;
    validity: ValidityState;
    validationMessage: string;
    willValidate: boolean;
    innerInput: HTMLElement;
    autocomplete: string;
    setValidity(): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
    onInput(event?: InputEvent): void;
    onKeydown(event?: KeyboardEvent): void;
    onBlur(): void;
    onFocus(): void;
    onChange(event?: InputEvent): void;
    handleInvalid(event: Event): void;
}

declare const GenericFormElement: {
    new (...args: any[]): LabelableElementInterface;
    prototype: LabelableElementInterface;
} & typeof DdsElement & {
    new (...args: any[]): FormElementInterface;
    prototype: FormElementInterface;
} & {
    new (...args: any[]): SizedElementInterface;
    prototype: SizedElementInterface;
} & {
    new (...args: any[]): FocusableElementInterface;
    prototype: FocusableElementInterface;
} & {
    new (...args: any[]): FeedbackElementInterface;
    prototype: FeedbackElementInterface;
};

declare type Heading = {
    level: number;
    id: any;
    text: any;
};

export declare type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

declare type HeadingProps = {
    variant: Extract<TypographyVariant, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
    size?: TypographySize;
};

declare type HeadingVariant = Extract<TypographyVariant, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

/**
 * `dap-ds-icon-heart-fill`
 * @summary An icon
 * @element dap-ds-icon-heart-fill
 * @title - HealthHeartFill
 * @group icon
 * @icontype health
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class HealthHeartFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-heart-line`
 * @summary An icon
 * @element dap-ds-icon-heart-line
 * @title - HealthHeartLine
 * @group icon
 * @icontype health
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class HealthHeartLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

declare type HtmlButtonType = 'button' | 'submit' | 'reset';

declare type HtmlButtonType_2 = 'button' | 'submit' | 'reset';

export declare class HttpError extends Error {
    response: any;
    status: number;
    constructor(message: string, response: any, status: number);
}

declare type IconSize = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

declare class InputBaseElement extends GenericFormElement {
    input: HTMLInputElement;
    private readonly _addonBeforeNode;
    private readonly _addonAfterNode;
    private readonly _prefixNode;
    private readonly _postfixNode;
    type: InputTypes;
    placeholder?: string;
    minlength?: number;
    maxlength?: number;
    min?: number;
    max?: number;
    pattern?: string;
    step?: number | 'any';
    inputmode?: string;
    loading: boolean;
    manualValueSet: boolean;
    disableEnter: boolean;
    private _hasAddonBefore;
    private _hasAddonAfter;
    private _hasPrefix;
    private _hasPostfix;
    static readonly styles: CSSResult;
    get nativeControl(): HTMLInputElement;
    private _handleSlotChange;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    onInput: () => void;
    formResetCallback(): void;
    onBlur(): void;
    onFocus(): void;
    onChange(): void;
    onKeydown(event: KeyboardEvent): void;
    get focusElement(): HTMLInputElement;
    handleInvalid(event: Event): void;
    renderDefaultContent(): TemplateResult_2<1>;
    renderInput(content?: unknown): TemplateResult_2<1>;
    private _renderFeedback;
}

export declare type InputStatus = 'success' | 'error';

export declare type InputTypes = 'text' | 'number' | 'button' | 'color' | 'email' | 'hidden' | 'reset' | 'submit' | 'url' | 'password' | 'file' | 'time';

declare interface LabelableElementInterface {
    label?: string;
    description?: string;
    tooltip?: string;
    tooltipPlacement: PopupPlacement;
    size: Size;
    required: boolean;
    disabled: boolean;
    optional: boolean;
    optionalLabel: string;
    subtle: boolean;
    tooltipAriaLabel: string;
    renderLabel(id?: string, content?: unknown): unknown;
}

declare const LabeledChoiceElement: {
    new (...args: any[]): LabelableElementInterface;
    prototype: LabelableElementInterface;
} & typeof DdsElement & {
    new (...args: any[]): FormElementInterface;
    prototype: FormElementInterface;
} & {
    new (...args: any[]): SizedElementInterface;
    prototype: SizedElementInterface;
} & {
    new (...args: any[]): FocusableElementInterface;
    prototype: FocusableElementInterface;
} & {
    new (...args: any[]): ChoiceElementMixinInterface;
    prototype: ChoiceElementMixinInterface;
} & {
    new (...args: any[]): LabelPositionedElementInterface;
    prototype: LabelPositionedElementInterface;
} & {
    new (...args: any[]): FeedbackElementInterface;
    prototype: FeedbackElementInterface;
};

export declare type LabelPlacement = Extract<Placement, 'left' | 'right'>;

declare interface LabelPositionedElementInterface {
    labelPlacement: LabelPlacement;
    descriptionPlacement: DescriptionPlacement;
}

export declare type Layout = 'horizontal' | 'vertical';

declare type LinkSize = Extract<Size, 'lg' | 'md' | 'sm' | 'xs'>;

export declare type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

declare type LinkVariant = 'neutral' | 'brand' | 'inverted' | 'warning';

declare type ListItemStatus = 'brand' | 'neutral' | 'positive' | 'negative';

declare type ListItemVariant = 'info' | 'pass' | 'fail' | 'notapplicable' | 'empty' | 'number';

declare type LoadingType = 'spinner' | 'skeleton';

export declare type MessageOptionsType = {
    duration?: number;
    alertType?: AlertType;
    actions?: ActionType[];
    closeButton?: string;
    customStyle?: Record<string, string>;
};

declare class ModalBaseElement extends DdsElement {
    dialog: HTMLDialogElement;
    modalBox: HTMLElement;
    open?: boolean;
    fullScreen?: boolean;
    closeOnEsc: string;
    closeOnOverlayClick: string;
    closeButton: string;
    title: string;
    description: string;
    okButtonLabel: string;
    cancelButtonLabel: string;
    closeButtonLabel: string;
    okButtonVariant: ButtonVariant;
    cancelButtonVariant: ButtonVariant;
    okButtonDisabled: boolean;
    cancelButtonDisabled: boolean;
    cancelButtonDanger: boolean;
    okButtonDanger: boolean;
    hideOkButton: boolean;
    hideCancelButton: boolean;
    footer: string;
    header: string;
    wideFooter: boolean;
    bottomFooter: boolean;
    useNativeFocus: boolean;
    private previouslyFocusedElement;
    private focusableElements;
    private canceled;
    static readonly styles: CSSResult;
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private handleOpen;
    private handleCloseAction;
    scrollLock: (open: boolean) => void;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    show(): void;
    hide(): void;
    private handleClose;
    private handleCancel;
    private handleEscClose;
    private handleOkButton;
    private handleCancelButton;
    private handleClick;
    private handleKeDown;
    private getFocusableElements;
    private getActiveElement;
    private getElementFromElement;
    private handleFocusTrap;
    renderModal(): TemplateResult_2<1>;
}

/**
 * `dap-ds-icon-cookie-line`
 * @summary An icon
 * @element dap-ds-icon-cookie-line
 * @title - OthersCookieLine
 * @group icon
 * @icontype others
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class OthersCookieLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

export { PaginationState }

export declare type Placement = 'top' | 'right' | 'bottom' | 'left' | 'center';

declare class PopupBaseElement extends PopupBaseElement_base {
    static readonly styles: CSSResult;
    private triggerElement;
    private cleanup;
    private intersectionObserver;
    private readonly popup;
    private readonly arrowElement?;
    /** The disabled state of the popup. */
    disabled?: boolean | undefined;
    /** The open state of the popup. */
    opened?: boolean | undefined;
    /** The placement of the popup.
     * @type {'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'}
     */
    placement: PopupPlacement;
    /** The floating strategy of the popup.
     * @type {'absolute' | 'fixed'}
     */
    floatingStrategy: FloatingStrategy;
    /** The offset of the popup. */
    offset: number;
    /** Whether the popup should sync its width with the trigger. */
    sync?: boolean;
    /** The maximum height of the popup. */
    maxHeight: number | 'auto';
    /** The maximum width of the popup. */
    maxWidth: number | 'auto';
    /** Whether the popup has an arrow. */
    hasArrow: boolean;
    /** Whether the popup should overflow. */
    overflow: boolean;
    /** Whether the popup should take full width of the screen. */
    fullWidth: boolean;
    connectedCallback(): Promise<void>;
    protected firstUpdated(changedProps: Map<string, unknown>): void;
    updated(changedProps: Map<string, unknown>): Promise<void>;
    _handleTriggerSlotChange(e?: Event | undefined): Promise<void>;
    _handleTriggerSlotChangeCallback(_e?: Event): void;
    _handleContentSlotChange(_e: Event): void;
    startUpdate(): void;
    stopUpdate(): Promise<void>;
    disconnectedCallback(): void;
    private updatePosition;
    renderTrigger(): TemplateResult;
    renderPopup(): TemplateResult;
}

declare const PopupBaseElement_base: typeof DdsElement & {
    new (...args: any[]): SizedElementInterface;
    prototype: SizedElementInterface;
};

export declare type PopupPlacement = 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';

export declare type PopupTrigger = 'click' | 'hover' | 'focus' | 'manual' | 'hover focus';

export { Row }

export { RowData }

export { RowSelectionState }

export declare type Size = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';

declare interface SizedElementInterface {
    size: Size;
    parentSized: string;
    spacing: ElementSpacing;
}

declare type SkeletonAnimation = 'wave' | 'pulse' | 'custom';

declare type SkeletonVariant = 'text' | 'circular' | 'rectangular';

export declare type SnackbarMessage = {
    id: string;
    message: string;
    options?: MessageOptionsType;
};

export declare type SnackbarPosition = 'bottom-left' | 'bottom-right' | 'bottom-center' | 'top-right' | 'top-center';

export { SortingState }

export declare type Spacing = 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 1000 | 1200 | 1400 | 1600 | 1800 | 2000 | 2400 | 3000 | 4000 | 5000 | 6000;

declare type Spacing_2 = 'top' | 'bottom' | 'both' | 'none';

declare type Spacing_3 = 'top' | 'bottom' | 'both' | 'none';

declare type SpinnerVariant = 'neutral' | 'brand' | 'negative' | 'positive' | 'inverted';

/**
 * `dap-ds-icon-add-line`
 * @summary An icon
 * @element dap-ds-icon-add-line
 * @title - SystemAddLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemAddLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-alert-fill`
 * @summary An icon
 * @element dap-ds-icon-alert-fill
 * @title - SystemAlertFill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemAlertFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-alert-line`
 * @summary An icon
 * @element dap-ds-icon-alert-line
 * @title - SystemAlertLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemAlertLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-checkbox-blank-circle-fill`
 * @summary An icon
 * @element dap-ds-icon-checkbox-blank-circle-fill
 * @title - SystemCheckboxBlankCircleFill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemCheckboxBlankCircleFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-checkbox-blank-circle-fill-check`
 * @summary An icon
 * @element dap-ds-icon-checkbox-blank-circle-fill-check
 * @title - SystemCheckboxBlankCircleFillCheck
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
declare class SystemCheckboxBlankCircleFillCheck extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}
export { SystemCheckboxBlankCircleFillCheck as CheckboxBlankCircleFillCheck }
export { SystemCheckboxBlankCircleFillCheck }

/**
 * `dap-ds-icon-checkbox-blank-circle-line`
 * @summary An icon
 * @element dap-ds-icon-checkbox-blank-circle-line
 * @title - SystemCheckboxBlankCircleLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemCheckboxBlankCircleLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-checkbox-circle-fill`
 * @summary An icon
 * @element dap-ds-icon-checkbox-circle-fill
 * @title - SystemCheckboxCircleFill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemCheckboxCircleFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-checkbox-circle-line`
 * @summary An icon
 * @element dap-ds-icon-checkbox-circle-line
 * @title - SystemCheckboxCircleLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemCheckboxCircleLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-check-line`
 * @summary An icon
 * @element dap-ds-icon-check-line
 * @title - SystemCheckLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemCheckLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-check-line2`
 * @summary An icon
 * @element dap-ds-icon-check-line2
 * @title - SystemCheckLine2
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemCheckLine2 extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-close-circle-fill`
 * @summary An icon
 * @element dap-ds-icon-close-circle-fill
 * @title - SystemCloseCircleFill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemCloseCircleFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-close-circle-line`
 * @summary An icon
 * @element dap-ds-icon-close-circle-line
 * @title - SystemCloseCircleLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemCloseCircleLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-close-fill`
 * @summary An icon
 * @element dap-ds-icon-close-fill
 * @title - SystemCloseFill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemCloseFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-close-line`
 * @summary An icon
 * @element dap-ds-icon-close-line
 * @title - SystemCloseLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemCloseLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-delete-bin-fill`
 * @summary An icon
 * @element dap-ds-icon-delete-bin-fill
 * @title - SystemDeleteBinFill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemDeleteBinFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-delete-bin-line`
 * @summary An icon
 * @element dap-ds-icon-delete-bin-line
 * @title - SystemDeleteBinLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemDeleteBinLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-download-line`
 * @summary An icon
 * @element dap-ds-icon-download-line
 * @title - SystemDownloadLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemDownloadLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-error-warning-fill`
 * @summary An icon
 * @element dap-ds-icon-error-warning-fill
 * @title - SystemErrorWarningFill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemErrorWarningFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-error-warning-line`
 * @summary An icon
 * @element dap-ds-icon-error-warning-line
 * @title - SystemErrorWarningLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemErrorWarningLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-external-link-line`
 * @summary An icon
 * @element dap-ds-icon-external-link-line
 * @title - SystemExternalLinkLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemExternalLinkLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-eye-line`
 * @summary An icon
 * @element dap-ds-icon-eye-line
 * @title - SystemEyeLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemEyeLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-eye-off-line`
 * @summary An icon
 * @element dap-ds-icon-eye-off-line
 * @title - SystemEyeOffLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemEyeOffLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-forbid-fill`
 * @summary An icon
 * @element dap-ds-icon-forbid-fill
 * @title - SystemForbidFill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemForbidFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-information-2-fill`
 * @summary An icon
 * @element dap-ds-icon-information-2-fill
 * @title - SystemInformation2Fill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemInformation2Fill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-information-fill`
 * @summary An icon
 * @element dap-ds-icon-information-fill
 * @title - SystemInformationFill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemInformationFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-information-line`
 * @summary An icon
 * @element dap-ds-icon-information-line
 * @title - SystemInformationLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemInformationLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-lightbulb-fill`
 * @summary An icon
 * @element dap-ds-icon-lightbulb-fill
 * @title - SystemLightbulbFill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemLightbulbFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-loading-spinner`
 * @summary An icon
 * @element dap-ds-icon-loading-spinner
 * @title - SystemLoadingSpinner
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemLoadingSpinner extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-lock-fill`
 * @summary An icon
 * @element dap-ds-icon-lock-fill
 * @title - SystemLockFill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemLockFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-lock-line`
 * @summary An icon
 * @element dap-ds-icon-lock-line
 * @title - SystemLockLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemLockLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-menu-line`
 * @summary An icon
 * @element dap-ds-icon-menu-line
 * @title - SystemMenuLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemMenuLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-menu-line-s`
 * @summary An icon
 * @element dap-ds-icon-menu-line-s
 * @title - SystemMenuLineS
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemMenuLineS extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-more-2-line`
 * @summary An icon
 * @element dap-ds-icon-more-2-line
 * @title - SystemMore2Line
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemMore2Line extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-more-line`
 * @summary An icon
 * @element dap-ds-icon-more-line
 * @title - SystemMoreLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemMoreLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-search-line`
 * @summary An icon
 * @element dap-ds-icon-search-line
 * @title - SystemSearchLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemSearchLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-share-line`
 * @summary An icon
 * @element dap-ds-icon-share-line
 * @title - SystemShareLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemShareLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-shield-check-fill`
 * @summary An icon
 * @element dap-ds-icon-shield-check-fill
 * @title - SystemShieldCheckFill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemShieldCheckFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-shield-check-line`
 * @summary An icon
 * @element dap-ds-icon-shield-check-line
 * @title - SystemShieldCheckLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemShieldCheckLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-star-fill`
 * @summary An icon
 * @element dap-ds-icon-star-fill
 * @title - SystemStarFill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemStarFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-subtract-line`
 * @summary An icon
 * @element dap-ds-icon-subtract-line
 * @title - SystemSubtractLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemSubtractLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-subtract-line2`
 * @summary An icon
 * @element dap-ds-icon-subtract-line2
 * @title - SystemSubtractLine2
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemSubtractLine2 extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-time-fill`
 * @summary An icon
 * @element dap-ds-icon-time-fill
 * @title - SystemTimeFill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemTimeFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-time-line`
 * @summary An icon
 * @element dap-ds-icon-time-line
 * @title - SystemTimeLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemTimeLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-upload-2-fill`
 * @summary An icon
 * @element dap-ds-icon-upload-2-fill
 * @title - SystemUpload2Fill
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemUpload2Fill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-upload-2-line`
 * @summary An icon
 * @element dap-ds-icon-upload-2-line
 * @title - SystemUpload2Line
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemUpload2Line extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-upload-line`
 * @summary An icon
 * @element dap-ds-icon-upload-line
 * @title - SystemUploadLine
 * @group icon
 * @icontype system
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class SystemUploadLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

export { Table }

export { TableController }

export declare type TooltipMode = 'tooltip' | 'toggle';

declare type TooltipMode_2 = 'tooltip' | 'toggle';

declare type TypographyProps = HeadingProps | BodyProps | CaptionProps | DescriptionProps;

declare type TypographySize = Extract<Size, 'lg' | 'md' | 'sm'> | null | undefined;

declare type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'description';

/**
 * `dap-ds-icon-account-circle-fill`
 * @summary An icon
 * @element dap-ds-icon-account-circle-fill
 * @title - UserAccountCircleFill
 * @group icon
 * @icontype user
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class UserAccountCircleFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-account-circle-line`
 * @summary An icon
 * @element dap-ds-icon-account-circle-line
 * @title - UserAccountCircleLine
 * @group icon
 * @icontype user
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class UserAccountCircleLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-user-fill`
 * @summary An icon
 * @element dap-ds-icon-user-fill
 * @title - UserUserFill
 * @group icon
 * @icontype user
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class UserUserFill extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

/**
 * `dap-ds-icon-user-line`
 * @summary An icon
 * @element dap-ds-icon-user-line
 * @title - UserUserLine
 * @group icon
 * @icontype user
 *
 * @attribute {number} size - (optional) The width and height in pixels
 * @attribute {boolean} selected - (optional) Sets the icon color via the `fill` attribute
 * @attribute {string} accessibilityTitle - (optional) When using the icon standalone, make it meaningful for accessibility
 * @attribute {boolean} focusable - (optional) If `true` the icon can receive focus
 *
 * @csspart base - The main icon container.
 */
export declare class UserUserLine extends DdsElement {
    /** (optional) The width and height in pixels */
    size?: number | undefined;
    /** (optional) Sets the icon color via the `fill` attribute */
    selected?: boolean;
    /** (optional) When using the icon standalone, make it meaningful for accessibility */
    accessibilityTitle?: string;
    /** (optional) If `true` the icon can receive focus */
    focusable?: boolean;
    static readonly styles: CSSResult;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult_2;
}

export { }
