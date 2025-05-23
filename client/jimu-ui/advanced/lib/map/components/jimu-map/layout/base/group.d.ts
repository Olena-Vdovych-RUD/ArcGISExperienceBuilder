/** @jsx jsx */
import { jsx, React, type IntlShape } from 'jimu-core';
import { UIComponent, type UIComponentProps } from './ui-component';
import type { ToolConfig } from '../../config';
import type { LayoutJson, GroupJson, HiddenElementNames, ToolJson } from '../config';
interface GroupProps extends UIComponentProps {
    layoutConfig: LayoutJson;
    toolConfig: ToolConfig;
    groupName: string;
    className: string;
    style: React.CSSProperties;
    isResponsive?: boolean;
    isMobile?: boolean;
    isMainGroup?: boolean;
    hiddenElementNames?: HiddenElementNames;
    isHidden?: boolean;
    isThumbMap?: boolean;
    intl?: IntlShape;
    activeToolName: string;
    onActiveToolNameChange: (activeToolName: string) => void;
    onSetHiddenElementNames?: (hiddenElementNames: HiddenElementNames) => void;
}
interface GroupStates {
    bottomPanelHeight?: number;
    widgetWidth?: number;
    widgetHeight?: number;
    isThumbMap?: boolean;
}
export default class Group extends UIComponent<GroupProps, GroupStates> {
    moveY: number;
    startY: number;
    sliding: boolean;
    startDrag: boolean;
    currentBottomPanelHeight: number;
    bottomPanelContainer: HTMLDivElement;
    thumbMapElementNames: string[];
    exbMapUiGroupCon: React.RefObject<HTMLDivElement>;
    getStyle(): import("jimu-core").SerializedStyles;
    constructor(props: any);
    componentDidUpdate(prevProps: GroupProps, prevState: GroupStates): void;
    checkIsHiddenElement: (elementName: any) => boolean;
    start: (event: any, type: any) => void;
    move: (event: any, type: any) => void;
    end: (event: any, type: any) => void;
    checkResponsive: () => void;
    onResize: ({ width, height }: {
        width: any;
        height: any;
    }) => void;
    returnNullNode: (key?: any) => jsx.JSX.Element;
    checkIsLastElement: (parentGroupJson: GroupJson, toolJson: ToolJson) => boolean;
    getGroupContent: (layoutJson: LayoutJson) => jsx.JSX.Element;
    checkIsShowGroup: (layoutJson: LayoutJson, children: string[]) => boolean;
    findAllToolNames: (layoutJson: LayoutJson, children: string[], toolNames: string[]) => void;
    render(): jsx.JSX.Element;
}
export {};
