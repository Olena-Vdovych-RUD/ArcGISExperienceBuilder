import type { AllDataSourceTypes, ImmutableArray, UseDataSource, IMDataSourceJson } from 'jimu-core';
/**
 * The DataSourceList component props.
 */
export interface DataSourceListProps {
    /**
     * If `true`, data sources are inited.
     */
    isDataSourceInited: boolean;
    /**
     * Supported data source types.
     * `AllDataSourceTypes` is union of `DataSourceTypes` **(see `jimu-core` API documentation)** and `ArcGISDataSourceTypes` **(see `jimu-arcgis` API documentation)**.
     *
     * ```ts
     * import { AllDataSourceTypes } from 'jimu-ui/advanced/data-source-selector'
     * ```
     */
    types: ImmutableArray<AllDataSourceTypes>;
    /**
     * Must pass `widgetId` to use parent widget's data view by default when using the same data source as parent widget.
     */
    widgetId?: string;
    /**
     * Only list child data sources generated by these root data sources.
     */
    fromRootDsIds?: ImmutableArray<string>;
    /**
     * Only list these data sources.
     */
    fromDsIds?: ImmutableArray<string>;
    /**
     * Whether to hide the data source in the list.
     */
    hideDs?: (dsJson: IMDataSourceJson) => boolean;
    /**
     * Selected data sources.
     */
    useDataSources?: ImmutableArray<UseDataSource>;
    /**
     * Whether to hide header of the component.
     *
     * @default false
     */
    hideHeader?: boolean;
    /**
     * Whether to hide dropdown that is used to filter the list by data source type.
     *
     * @default false
     */
    hideTypeDropdown?: boolean;
    /**
     * Whether to hide `All` option of type dropdown. Works only when `hideTypeDropdown` is not true.
     *
     * @default false
     */
    hideAllOptionOfTypeDropdown?: boolean;
    /**
     * Whether to hide the add data button at bottom.
     *
     * @default false
     */
    hideAddDataButton?: boolean;
    /**
     * Whether to hide the add data button at bottom.
     *
     * @default false
     * @deprecated
     */
    disableAddData?: boolean;
    /**
     * Hide some of the tabs.
     * Please note that if pass in `hideTabs`, won't calculate which tabs need to be displayed automatically, will only show tabs that are not included in the array.
     */
    hideTabs?: ImmutableArray<'ADDED' | 'OUTPUT'>;
    /**
     * Whether to support multiple selection.
     *
     * @default false
     */
    isMultiple?: boolean;
    /**
     * Whether support batch selection. If true, selecting a parent data source will automatically select all supported child data sources.
     * Only takes effect when `isMultiple` is true.
     *
     * @default false
     */
    isBatched?: boolean;
    /**
     * Before selecting the component, this will check the variable to make sure it can continue selecting.
     */
    disableSelection?: boolean;
    /**
     * Before removing the component, this will check the variable to make sure it can continue removing.
     */
    disableRemove?: boolean;
    /**
     * Allow to select output data sources which are generated by current widget itself.
     * Do not allow widgets to select these data sources by default.
     *
     * @default false
     */
    enableToSelectOutputDsFromSelf?: boolean;
    /**
     * Whether or not to show queriable data sources that have no fields.
     * These data sources extend from the `QueriableDataSource` but do not have fields, which means it will throw error if call `query` method or `load` method.
     *
     * @default false
     */
    showQueriableDataSourceWithoutFields?: boolean;
    /**
     * Callback when selected data sources are changed.
     */
    onChange?: (useDataSources: UseDataSource[]) => void;
    /**
     * Callback when close icon is clicked.
     */
    onCloseClick?: () => void;
    /**
     * Change data source init status, it will be necessary if the user is allowed to add new data source in the component.
     */
    changeInitStatus?: (isInitialized: boolean) => void;
    /**
     * only used by theme.
     */
    className?: string;
}
/**
 * @ignore
 */
export interface DataSourceItemProps {
    dataSourceJson: IMDataSourceJson;
    isMoreIconShown?: boolean;
    isCloseIconShown?: boolean;
    isRenameInputShown?: boolean;
    isRelatedWidgetsShown?: boolean;
    isMappingIconShown?: boolean;
    isErrorIconShown?: boolean;
    isSelected?: boolean;
    isHideable?: boolean;
    isLoadingShown?: boolean;
    errorTitle?: string;
    onDataSourceItemClick?: (dsJson: IMDataSourceJson) => void;
    onMappingIconClick?: (dsJson: IMDataSourceJson) => void;
    onCloseIconClick?: (dsJson: IMDataSourceJson) => void;
    onMoreIconClick?: (dsJson: IMDataSourceJson) => void;
    onRename?: (dsLabel: string) => void;
    onToggleHidden?: (dsJson: IMDataSourceJson) => void;
    onChildDataIconClick?: (dsJson: IMDataSourceJson) => void;
    onRelatedWidgetsIconClick?: (dsJson: IMDataSourceJson) => void;
    className?: string;
}
export declare const DEFAULT_DATA_VIEW_ID = "USE_MAIN_DATA_SOURCE";
