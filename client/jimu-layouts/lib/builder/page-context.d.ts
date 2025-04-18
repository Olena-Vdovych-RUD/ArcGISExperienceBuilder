import { React, type IMThemeVariables } from 'jimu-core';
export declare const PageContext: React.Context<PageContextProps>;
export interface PageContextProps {
    rootLayoutId?: string;
    isHeader?: boolean;
    isFooter?: boolean;
    isDialog?: boolean;
    pageId?: string;
    builderTheme?: IMThemeVariables;
    theme?: IMThemeVariables;
    viewOnly?: boolean;
    maxWidth?: number;
    formatMessage?: (id: string, values?: any) => string;
    dialogId?: string;
}
export declare const ViewportVisibilityContext: React.Context<boolean>;
export declare const PageVisibilityContext: React.Context<boolean>;
export declare const ViewVisibilityContext: React.Context<ViewVisibilityContextProps>;
export interface ViewVisibilityContextProps {
    isInView?: boolean;
    isInCurrentView?: boolean;
}
export declare const ScreenGroupContext: React.Context<string>;
