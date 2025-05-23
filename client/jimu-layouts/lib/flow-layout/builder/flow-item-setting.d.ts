/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import { type FlowLayoutItemSetting, LayoutItemSizeModes } from 'jimu-layouts/layout-runtime';
import type { LayoutItemSettingProps } from '../../builder/types';
import { type LinearUnit } from 'jimu-ui';
export default class FlowItemSetting extends React.PureComponent<LayoutItemSettingProps> {
    itemSetting: FlowLayoutItemSetting;
    updateWidth: (value: LinearUnit) => void;
    updateBBoxWidth: (value: LinearUnit) => void;
    updateHeight: (value: LinearUnit) => void;
    updateOffsetX: (value: number) => void;
    updateOffsetY: (value: number) => void;
    getSizeOfItem(): DOMRect;
    querySelector(selector: string): HTMLElement;
    updateHeightMode: (mode: LayoutItemSizeModes) => void;
    updateFloatingArea(value: number): void;
    render(): jsx.JSX.Element;
}
