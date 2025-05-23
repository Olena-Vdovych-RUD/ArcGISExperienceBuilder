/** @jsx jsx */
import { React, jsx, ScreenTransitionType } from 'jimu-core';
interface OwnProps {
    transitionType: ScreenTransitionType;
    panelTransitionType: ScreenTransitionType;
    onTransitionTypeChange: (type: ScreenTransitionType) => void;
    onPanelTransitionTypeChange: (type: ScreenTransitionType) => void;
    formatMessage: (id: string) => string;
}
export declare const icons: {
    PUSH: any;
    FADE: any;
    COVER: any;
};
export declare class TransitionPopperContent extends React.PureComponent<OwnProps> {
    getStyle(): import("jimu-core").SerializedStyles;
    onTypeChanged: (e: any, type: ScreenTransitionType, isPanel: boolean) => void;
    updateFirstPanel: (e: any) => void;
    createAnimationCard(type: ScreenTransitionType, index: number, isPanel?: boolean): jsx.JSX.Element;
    render(): jsx.JSX.Element;
}
export {};
