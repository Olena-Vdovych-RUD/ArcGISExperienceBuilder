import { type AppConfig } from 'jimu-core';
import type { Template, TemplatesInfo, TemplateType, TemplateTagType } from './type';
export declare function init(): Promise<TemplatesInfo>;
export declare function getAppTemplates(filterTags?: TemplateTagType[]): Template[];
export declare function getFullScreenPageTemplates(includeBlankTemplate?: boolean): Template[];
export declare function getFullScreenGridPageTemplates(includeBlankTemplate?: boolean): Template[];
export declare function getScrollingPageTemplates(includeBlankTemplate?: boolean): Template[];
export declare function getFixedModalWindowTemplates(includeBlankTemplate?: boolean): Template[];
export declare function getFixedNonModalWindowTemplates(): Template[];
export declare function getAnchoredWindowTemplates(): Template[];
export declare function getWindowTemplates(includeBlankTemplate?: boolean): Template[];
export declare function getHeaderTemplates(): Template[];
export declare function getFooterTemplates(): Template[];
export declare function getBlockTemplates(): Template[];
export declare function getGridTemplates(): Template[];
export declare function getScreenGroupTemplates(): Template[];
export declare function getScreenTemplates(): Template[];
export * from './type';
export declare function getTemplateConfig(templateType: TemplateType, templateName: string): Promise<AppConfig>;
export declare function loadI18nMessage(): Promise<any>;
