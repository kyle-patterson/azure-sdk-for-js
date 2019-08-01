/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/triggerRunsMappers";
import * as Parameters from "../models/parameters";
import { DataFactoryManagementClientContext } from "../dataFactoryManagementClientContext";

/** Class representing a TriggerRuns. */
export class TriggerRuns {
  private readonly client: DataFactoryManagementClientContext;

  /**
   * Create a TriggerRuns.
   * @param {DataFactoryManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataFactoryManagementClientContext) {
    this.client = client;
  }

  /**
   * Rerun single trigger instance by runId.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param runId The pipeline run identifier.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  rerun(resourceGroupName: string, factoryName: string, triggerName: string, runId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param runId The pipeline run identifier.
   * @param callback The callback
   */
  rerun(resourceGroupName: string, factoryName: string, triggerName: string, runId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param runId The pipeline run identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  rerun(resourceGroupName: string, factoryName: string, triggerName: string, runId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  rerun(resourceGroupName: string, factoryName: string, triggerName: string, runId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        triggerName,
        runId,
        options
      },
      rerunOperationSpec,
      callback);
  }

  /**
   * Query trigger runs.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param filterParameters Parameters to filter the pipeline run.
   * @param [options] The optional parameters
   * @returns Promise<Models.TriggerRunsQueryByFactoryResponse>
   */
  queryByFactory(resourceGroupName: string, factoryName: string, filterParameters: Models.RunFilterParameters, options?: coreHttp.RequestOptionsBase): Promise<Models.TriggerRunsQueryByFactoryResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param filterParameters Parameters to filter the pipeline run.
   * @param callback The callback
   */
  queryByFactory(resourceGroupName: string, factoryName: string, filterParameters: Models.RunFilterParameters, callback: coreHttp.ServiceCallback<Models.TriggerRunsQueryResponse>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param filterParameters Parameters to filter the pipeline run.
   * @param options The optional parameters
   * @param callback The callback
   */
  queryByFactory(resourceGroupName: string, factoryName: string, filterParameters: Models.RunFilterParameters, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.TriggerRunsQueryResponse>): void;
  queryByFactory(resourceGroupName: string, factoryName: string, filterParameters: Models.RunFilterParameters, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.TriggerRunsQueryResponse>, callback?: coreHttp.ServiceCallback<Models.TriggerRunsQueryResponse>): Promise<Models.TriggerRunsQueryByFactoryResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        filterParameters,
        options
      },
      queryByFactoryOperationSpec,
      callback) as Promise<Models.TriggerRunsQueryByFactoryResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const rerunOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/triggerRuns/{runId}/rerun",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName,
    Parameters.runId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const queryByFactoryOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/queryTriggerRuns",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "filterParameters",
    mapper: {
      ...Mappers.RunFilterParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.TriggerRunsQueryResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
