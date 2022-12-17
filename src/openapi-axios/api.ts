/* tslint:disable */
/* eslint-disable */
/**
 * e-h-2-10-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface DetailsPost200Response
 */
export interface DetailsPost200Response {
    /**
     * 
     * @type {number}
     * @memberof DetailsPost200Response
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof DetailsPost200Response
     */
    'name'?: string;
}
/**
 * 
 * @export
 * @interface DetailsPost400Response
 */
export interface DetailsPost400Response {
    /**
     * 
     * @type {string}
     * @memberof DetailsPost400Response
     */
    'error'?: string;
}
/**
 * 
 * @export
 * @interface DetailsPostRequest
 */
export interface DetailsPostRequest {
    /**
     * 
     * @type {string}
     * @memberof DetailsPostRequest
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof DetailsPostRequest
     */
    'user_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof DetailsPostRequest
     */
    'sport'?: string;
    /**
     * 
     * @type {string}
     * @memberof DetailsPostRequest
     */
    'duration'?: string;
}
/**
 * 
 * @export
 * @interface TodaysMenuGet200Response
 */
export interface TodaysMenuGet200Response {
    /**
     * 
     * @type {string}
     * @memberof TodaysMenuGet200Response
     */
    'sport'?: string;
    /**
     * 
     * @type {string}
     * @memberof TodaysMenuGet200Response
     */
    'duration'?: string;
}
/**
 * 
 * @export
 * @interface TodaysMenuGet404Response
 */
export interface TodaysMenuGet404Response {
    /**
     * 
     * @type {string}
     * @memberof TodaysMenuGet404Response
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof TodaysMenuGet404Response
     */
    'message'?: string;
}

/**
 * DetailsApi - axios parameter creator
 * @export
 */
export const DetailsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 本日のメニュー情報をDBに登録する
         * @summary 本日のメニュー登録
         * @param {DetailsPostRequest} detailsPostRequest It contains the transaction\&#39;s id and the cancel reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        detailsPost: async (detailsPostRequest: DetailsPostRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'detailsPostRequest' is not null or undefined
            assertParamExists('detailsPost', 'detailsPostRequest', detailsPostRequest)
            const localVarPath = `/details`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(detailsPostRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DetailsApi - functional programming interface
 * @export
 */
export const DetailsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DetailsApiAxiosParamCreator(configuration)
    return {
        /**
         * 本日のメニュー情報をDBに登録する
         * @summary 本日のメニュー登録
         * @param {DetailsPostRequest} detailsPostRequest It contains the transaction\&#39;s id and the cancel reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async detailsPost(detailsPostRequest: DetailsPostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DetailsPost200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.detailsPost(detailsPostRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DetailsApi - factory interface
 * @export
 */
export const DetailsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DetailsApiFp(configuration)
    return {
        /**
         * 本日のメニュー情報をDBに登録する
         * @summary 本日のメニュー登録
         * @param {DetailsPostRequest} detailsPostRequest It contains the transaction\&#39;s id and the cancel reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        detailsPost(detailsPostRequest: DetailsPostRequest, options?: any): AxiosPromise<DetailsPost200Response> {
            return localVarFp.detailsPost(detailsPostRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DetailsApi - object-oriented interface
 * @export
 * @class DetailsApi
 * @extends {BaseAPI}
 */
export class DetailsApi extends BaseAPI {
    /**
     * 本日のメニュー情報をDBに登録する
     * @summary 本日のメニュー登録
     * @param {DetailsPostRequest} detailsPostRequest It contains the transaction\&#39;s id and the cancel reason
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DetailsApi
     */
    public detailsPost(detailsPostRequest: DetailsPostRequest, options?: AxiosRequestConfig) {
        return DetailsApiFp(this.configuration).detailsPost(detailsPostRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * TodaysMenuApi - axios parameter creator
 * @export
 */
export const TodaysMenuApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 本日のメニュー取得
         * @param {string} id ユーザーID
         * @param {string} userName ユーザー名
         * @param {string} level 運動のレベル
         * @param {string} city 都市名
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todaysMenuGet: async (id: string, userName: string, level: string, city: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('todaysMenuGet', 'id', id)
            // verify required parameter 'userName' is not null or undefined
            assertParamExists('todaysMenuGet', 'userName', userName)
            // verify required parameter 'level' is not null or undefined
            assertParamExists('todaysMenuGet', 'level', level)
            // verify required parameter 'city' is not null or undefined
            assertParamExists('todaysMenuGet', 'city', city)
            const localVarPath = `/todays_menu`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }

            if (level !== undefined) {
                localVarQueryParameter['level'] = level;
            }

            if (city !== undefined) {
                localVarQueryParameter['city'] = city;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TodaysMenuApi - functional programming interface
 * @export
 */
export const TodaysMenuApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TodaysMenuApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary 本日のメニュー取得
         * @param {string} id ユーザーID
         * @param {string} userName ユーザー名
         * @param {string} level 運動のレベル
         * @param {string} city 都市名
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todaysMenuGet(id: string, userName: string, level: string, city: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodaysMenuGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todaysMenuGet(id, userName, level, city, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TodaysMenuApi - factory interface
 * @export
 */
export const TodaysMenuApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TodaysMenuApiFp(configuration)
    return {
        /**
         * 
         * @summary 本日のメニュー取得
         * @param {string} id ユーザーID
         * @param {string} userName ユーザー名
         * @param {string} level 運動のレベル
         * @param {string} city 都市名
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todaysMenuGet(id: string, userName: string, level: string, city: string, options?: any): AxiosPromise<TodaysMenuGet200Response> {
            return localVarFp.todaysMenuGet(id, userName, level, city, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TodaysMenuApi - object-oriented interface
 * @export
 * @class TodaysMenuApi
 * @extends {BaseAPI}
 */
export class TodaysMenuApi extends BaseAPI {
    /**
     * 
     * @summary 本日のメニュー取得
     * @param {string} id ユーザーID
     * @param {string} userName ユーザー名
     * @param {string} level 運動のレベル
     * @param {string} city 都市名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodaysMenuApi
     */
    public todaysMenuGet(id: string, userName: string, level: string, city: string, options?: AxiosRequestConfig) {
        return TodaysMenuApiFp(this.configuration).todaysMenuGet(id, userName, level, city, options).then((request) => request(this.axios, this.basePath));
    }
}

