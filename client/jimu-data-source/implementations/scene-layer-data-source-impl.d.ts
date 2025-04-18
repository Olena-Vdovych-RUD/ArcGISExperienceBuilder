import { type IMDataSourceJson, type IMDataSourceSchema, type IMReversedDataSourceSchema, DataSourceTypes, type SceneLayerDataSource, type IMArcGISQueryParams, type QueryResult, type DataRecord, type ArcGISQueryParams, type CodedValue, type QueryOptions, type FeatureDataRecord, type QueryParams, type GetCurrentQueryParamsOptions, type ArcGISSelectOptions, type ArcGISCapabilities, type QueryProgressCallback, type ArcGISQueriableUsedFieldsOptions, type TimezoneRuntime } from 'jimu-core';
import type { IFeature, ILayerDefinition, IPopupInfo, GeometryType } from '@esri/arcgis-rest-feature-service';
import type { IItem } from '@esri/arcgis-rest-portal';
import type { FeatureLayerDataSourceImpl } from './feature-layer-data-source-impl';
import { AbstractArcGISQueriableDataSource, type ArcGISQueriableDataSourceConstructorOptions } from '../base-classes/abstract-arcgis-queriable-data-source';
export interface SceneLayerDataSourceConstructorOptions extends ArcGISQueriableDataSourceConstructorOptions {
    layer?: __esri.SceneLayer;
}
export declare class SceneLayerDataSourceImpl extends AbstractArcGISQueriableDataSource implements SceneLayerDataSource {
    layerId?: string;
    protected _layer?: __esri.SceneLayer;
    protected associatedDataSource: FeatureLayerDataSourceImpl;
    type: DataSourceTypes.SceneLayer;
    constructor(options: SceneLayerDataSourceConstructorOptions);
    ready(): Promise<void>;
    protected jsAPILayerQueryObjectIds(query: __esri.Query | __esri.QueryProperties, layer?: __esri.SceneLayer | __esri.FeatureLayer): Promise<number[]>;
    protected jsAPILayerQueryFeatures(query: __esri.Query | __esri.QueryProperties, layer?: __esri.SceneLayer | __esri.FeatureLayer): Promise<__esri.FeatureSet>;
    protected jsAPILayerQueryExtent(query: __esri.Query | __esri.QueryProperties, layer?: __esri.SceneLayer | __esri.FeatureLayer): Promise<{
        count: number;
        extent: __esri.Extent;
    }>;
    protected jsAPILayerQueryFeatureCount(query: __esri.Query | __esri.QueryProperties, layer?: __esri.SceneLayer | __esri.FeatureLayer): Promise<number>;
    private onInfoChange;
    createAssociatedDataSource(): Promise<FeatureLayerDataSourceImpl>;
    protected _createAssociatedDataSourceWithLayer(): Promise<FeatureLayerDataSourceImpl>;
    protected _createAssociatedDataSourceWithUrl(): Promise<FeatureLayerDataSourceImpl>;
    protected _getNewAssociatedDataSourceId(): string;
    getTimezone(): TimezoneRuntime;
    fetchLayerDefinition(): Promise<ILayerDefinition>;
    getLayerDefinition(): ILayerDefinition;
    setLayerDefinition(layerDef: ILayerDefinition): void;
    getPopupInfo(): IPopupInfo;
    setPopupInfo(popupInfo: IPopupInfo): void;
    getCapabilities(): ArcGISCapabilities;
    get layer(): __esri.SceneLayer;
    set layer(l: __esri.SceneLayer);
    getItemInfo(): IItem;
    fetchSchema(): Promise<IMDataSourceSchema>;
    setDataSourceJson(dsJson: IMDataSourceJson): void;
    getFetchedSchema(): IMDataSourceSchema;
    setFetchedSchema(fetchedSchema: IMDataSourceSchema): void;
    getReversedConfigSchema(): IMReversedDataSourceSchema;
    getSelectedFields(): string[];
    setSelectedFields(jimuNames: string[]): void;
    getIdField(): string;
    queryById(id: string): Promise<FeatureDataRecord>;
    addRecord(record: FeatureDataRecord): Promise<FeatureDataRecord>;
    updateRecord(record: FeatureDataRecord): Promise<boolean>;
    updateRecords(records: FeatureDataRecord[]): Promise<boolean>;
    deleteRecord(index: number): Promise<boolean>;
    deleteRecordById(id: string): Promise<boolean>;
    doQuery(realQuery: IMArcGISQueryParams, originQuery: IMArcGISQueryParams): Promise<QueryResult>;
    doQueryById(id: string, fields?: string[]): Promise<FeatureDataRecord>;
    doQueryIds(queryParams: IMArcGISQueryParams): Promise<QueryResult>;
    doQueryCount(queryProperties: IMArcGISQueryParams): Promise<QueryResult>;
    getConfigQueryParams(): ArcGISQueryParams;
    getRemoteQueryParams(): ArcGISQueryParams;
    getCurrentQueryParams(options?: GetCurrentQueryParamsOptions): ArcGISQueryParams;
    getRuntimeQueryParams(excludeWidgetId?: string): QueryParams;
    getCurrentQueryId(): string;
    mergeQueryParams(...queries: ArcGISQueryParams[]): ArcGISQueryParams;
    buildRecord(feature: IFeature | __esri.Graphic): FeatureDataRecord;
    getFieldCodedValueList(jimuFieldName: string, record?: FeatureDataRecord): CodedValue[];
    getRealQueryParams(query: any, flag: 'query' | 'load', options?: QueryOptions): ArcGISQueryParams;
    getAllUsedFields(options?: ArcGISQueriableUsedFieldsOptions): string[] | '*';
    applyUsedFields(query: ArcGISQueryParams, usedFields?: string[] | '*'): ArcGISQueryParams;
    updateQueryParams(query: QueryParams, widgetId: string): void;
    getGDBVersion(): string;
    getGeometryType(): GeometryType;
    getQueryPageSize(): number;
    getMaxRecordCount(): number;
    getRecordsByPage(page: number, pageSize: number): DataRecord[];
    getPagesData(): {
        [page: number]: DataRecord[];
    };
    setPagesData(pages: {
        [page: number]: DataRecord[];
    }): void;
    getRealQueryPages(page: number, pageSize: number): number[];
    load(query: QueryParams, options?: QueryOptions): Promise<DataRecord[]>;
    loadCount(query: QueryParams, options?: QueryOptions): Promise<number>;
    query(query: QueryParams, options?: QueryOptions): Promise<QueryResult>;
    queryAll(query: QueryParams, signal?: AbortSignal, progressCallback?: QueryProgressCallback, options?: QueryOptions): Promise<QueryResult>;
    queryCount(query: QueryParams, options?: QueryOptions): Promise<QueryResult>;
    loadById(id: string, refresh?: boolean): Promise<DataRecord>;
    changeGDBVersion(gdbVersion: string): void;
    getAssociatedDataSource(): FeatureLayerDataSourceImpl;
    private getAssociatedDataSourceById;
    private fixQueryOptions;
    private fixExcludeQuery;
    private _getRealAssociatedDataSourceId;
    clearRecords(): void;
    setRecords(records: FeatureDataRecord[]): void;
    getRecords(): FeatureDataRecord[];
    setSourceRecords(records: FeatureDataRecord[]): void;
    getSourceRecords(): FeatureDataRecord[];
    private fixRecordDataSource;
    getSelectedRecords(): FeatureDataRecord[];
    nextRecord(): DataRecord;
    prevRecord(): DataRecord;
    getRecord(index: number): DataRecord;
    getRecordById(id: string): FeatureDataRecord;
    clearRecordsNotAddVersion(): void;
    clearSelection(): void;
    addVersion(): void;
    selectRecord(index: number): void;
    selectRecords(options: ArcGISSelectOptions, signal?: AbortSignal, progressCallback?: QueryProgressCallback): Promise<QueryResult>;
    selectRecordById(id: string, record?: FeatureDataRecord): void;
    selectRecordsByIds(ids: string[], records?: FeatureDataRecord[]): void;
    destroy(): void;
    supportSymbol(): boolean;
    supportAttachment(): boolean;
    getDataViews(): SceneLayerDataSource[];
    getDataView(dataViewId: string): SceneLayerDataSource;
    getMainDataSource(): SceneLayerDataSource;
    protected _mergeAssociatedDataSourceJson(associatedDataSourceJson: IMDataSourceJson): IMDataSourceJson;
    get count(): number;
    set count(count: number);
    allowToExportData(): Promise<boolean>;
}
