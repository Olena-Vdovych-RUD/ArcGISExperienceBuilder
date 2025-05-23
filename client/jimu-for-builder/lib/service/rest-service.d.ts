import type { IRequestOptions, IParams } from '@esri/arcgis-rest-request';
import type { ISearchOptions, SearchQueryBuilder, ISearchResult, IUserItemOptions, IUpdateItemOptions, IUpdateItemResponse, ICreateItemOptions, ICreateItemResponse, IItemDataOptions, IItemResourceOptions, IItemResourceResponse, ISharingResponse, IMoveItemOptions, IMoveItemResponse, IGetUserOptions, IGetUserTagsResponse, IGetItemResourceOptions, IGroup } from '@esri/arcgis-rest-portal';
import { type AppInfo, SearchType, type ImportAppOption } from './type';
export declare function searchItems(search: string | ISearchOptions | SearchQueryBuilder, searchType: SearchType): Promise<ISearchResult<AppInfo>>;
export declare function searchItemsByPortalUrl(search: string | ISearchOptions | SearchQueryBuilder, portalUrl: string): Promise<ISearchResult<AppInfo>>;
export declare function removeItem(requestOptions: IUserItemOptions): Promise<{
    success: boolean;
    itemId: string;
}>;
export declare function updateItem(requestOptions: IUpdateItemOptions): Promise<IUpdateItemResponse>;
export declare function importApp(item: ImportAppOption, requestOptions?: IItemDataOptions): Promise<IUpdateItemResponse>;
export declare function checkAppVersion(item: ImportAppOption, requestOptions?: IItemDataOptions): Promise<IUpdateItemResponse>;
export declare function updateAppsThumbnail(requestOptions: IUpdateItemOptions): Promise<IUpdateItemResponse>;
export declare function createItem(requestOptions: ICreateItemOptions): Promise<ICreateItemResponse>;
export declare function getItem(appInfo: AppInfo, requestOptions?: IRequestOptions): Promise<AppInfo>;
export declare function getItemData(appInfo: AppInfo, requestOptions?: IItemDataOptions): Promise<any>;
export declare function getDraftAppConfig(appInfo: AppInfo): Promise<any>;
export declare function getItemResources(appInfo: AppInfo, requestOptions?: IRequestOptions): Promise<any>;
export declare function getOrgCategorySchema(requestOptions?: IRequestOptions, isGetAGOLCategorySchema?: boolean): Promise<any>;
export declare function copyItem(originAppInfo: AppInfo, requestOptions?: IRequestOptions): Promise<any>;
export declare function deleteThumbnail(appInfo: AppInfo, requestOptions?: IRequestOptions): Promise<any>;
export declare function getGroupCategorySchema(groupId: string, requestOptions?: IRequestOptions, isGetAGOLCategorySchema?: boolean): Promise<any>;
export declare function getGroupContents(groupId: string, requestOptions?: IRequestOptions, isGetAGOLGroupContent?: boolean): Promise<any>;
export declare function getItemResource(appInfo: AppInfo, requestOptions?: IGetItemResourceOptions): Promise<any>;
export declare function addItemResource(requestOptions: IItemResourceOptions): Promise<IItemResourceResponse>;
export declare function updateItemResource(requestOptions: IItemResourceOptions): Promise<IItemResourceResponse>;
export declare function shareItemWithGroup(requestOptions: IParams): Promise<ISharingResponse>;
export declare function unshareItemWithGroup(requestOptions: IParams): Promise<ISharingResponse>;
export declare function itemsgroups(requestOptions: IParams): Promise<ISharingResponse>;
export declare function removeItemResource(requestOptions: IItemResourceOptions): Promise<{
    success: boolean;
}>;
export declare function getItemsGroups(requestOptions: IParams): Promise<ISharingResponse>;
export declare function moveItem(requestOptions: IMoveItemOptions): Promise<IMoveItemResponse>;
export declare function getUsersTags(requestOptions: IGetUserOptions): Promise<IGetUserTagsResponse>;
export declare function searchGroup(requestOptions: ISearchOptions | SearchQueryBuilder): Promise<ISearchResult<IGroup>>;
export declare function getUserContent(requestOptions: IParams): any;
export declare function createAppInFolder(requestOptions: ICreateItemOptions): Promise<ICreateItemResponse>;
export declare function getResourceOrigin(originalAppInfo: AppInfo): string;
