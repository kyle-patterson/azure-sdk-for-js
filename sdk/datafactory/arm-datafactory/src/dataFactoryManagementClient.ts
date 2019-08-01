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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { DataFactoryManagementClientContext } from "./dataFactoryManagementClientContext";


class DataFactoryManagementClient extends DataFactoryManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  factories: operations.Factories;
  exposureControl: operations.ExposureControl;
  integrationRuntimes: operations.IntegrationRuntimes;
  integrationRuntimeObjectMetadata: operations.IntegrationRuntimeObjectMetadata;
  integrationRuntimeNodes: operations.IntegrationRuntimeNodes;
  linkedServices: operations.LinkedServices;
  datasets: operations.Datasets;
  pipelines: operations.Pipelines;
  pipelineRuns: operations.PipelineRuns;
  activityRuns: operations.ActivityRuns;
  triggers: operations.Triggers;
  triggerRuns: operations.TriggerRuns;
  rerunTriggers: operations.RerunTriggers;

  /**
   * Initializes a new instance of the DataFactoryManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The subscription identifier.
   * @param [options] The parameter options
   */
  constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, subscriptionId: string, options?: Models.DataFactoryManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.factories = new operations.Factories(this);
    this.exposureControl = new operations.ExposureControl(this);
    this.integrationRuntimes = new operations.IntegrationRuntimes(this);
    this.integrationRuntimeObjectMetadata = new operations.IntegrationRuntimeObjectMetadata(this);
    this.integrationRuntimeNodes = new operations.IntegrationRuntimeNodes(this);
    this.linkedServices = new operations.LinkedServices(this);
    this.datasets = new operations.Datasets(this);
    this.pipelines = new operations.Pipelines(this);
    this.pipelineRuns = new operations.PipelineRuns(this);
    this.activityRuns = new operations.ActivityRuns(this);
    this.triggers = new operations.Triggers(this);
    this.triggerRuns = new operations.TriggerRuns(this);
    this.rerunTriggers = new operations.RerunTriggers(this);
  }
}

// Operation Specifications

export {
  DataFactoryManagementClient,
  DataFactoryManagementClientContext,
  Models as DataFactoryManagementModels,
  Mappers as DataFactoryManagementMappers
};
export * from "./operations";
