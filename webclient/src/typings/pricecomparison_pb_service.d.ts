// package: msyrpc
// file: pricecomparison.proto

import * as pricecomparison_pb from "./pricecomparison_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PriceComparisonServiceGetAllProductCategories = {
  readonly methodName: string;
  readonly service: typeof PriceComparisonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pricecomparison_pb.GetAllCategoryTypesRequest;
  readonly responseType: typeof pricecomparison_pb.AllCategoryTypesResponse;
};

type PriceComparisonServiceGetAllNewCategoryTypes = {
  readonly methodName: string;
  readonly service: typeof PriceComparisonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pricecomparison_pb.GetAllNewCategoryTypesRequest;
  readonly responseType: typeof pricecomparison_pb.AllNewCategoryTypesResponse;
};

type PriceComparisonServiceGetAllCompetitors = {
  readonly methodName: string;
  readonly service: typeof PriceComparisonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pricecomparison_pb.GetAllCompetitorTypesRequest;
  readonly responseType: typeof pricecomparison_pb.AllCompetitorTypesResponse;
};

type PriceComparisonServiceGetLoadProductComparisonInfomation = {
  readonly methodName: string;
  readonly service: typeof PriceComparisonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pricecomparison_pb.GetProductComparisonRequest;
  readonly responseType: typeof pricecomparison_pb.ProductComparisonResponse;
};

type PriceComparisonServiceGetLoadFilteredProductComparisonInfomation = {
  readonly methodName: string;
  readonly service: typeof PriceComparisonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pricecomparison_pb.GetProductComparisonRequest;
  readonly responseType: typeof pricecomparison_pb.ProductComparisonResponse;
};

type PriceComparisonServiceUpdateProductDescription = {
  readonly methodName: string;
  readonly service: typeof PriceComparisonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pricecomparison_pb.UpdateProductDescriptionRequest;
  readonly responseType: typeof pricecomparison_pb.UpdateProductDescriptionResponse;
};

type PriceComparisonServiceUpdateCompetitorTier = {
  readonly methodName: string;
  readonly service: typeof PriceComparisonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pricecomparison_pb.UpdateCompetitorTierRequest;
  readonly responseType: typeof pricecomparison_pb.UpdateCompetitorTierResponse;
};

type PriceComparisonServiceDeleteCompetitor = {
  readonly methodName: string;
  readonly service: typeof PriceComparisonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pricecomparison_pb.DeleteCompetitorRequest;
  readonly responseType: typeof pricecomparison_pb.DeleteCompetitorResponse;
};

type PriceComparisonServiceAddCompetitor = {
  readonly methodName: string;
  readonly service: typeof PriceComparisonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pricecomparison_pb.AddCompetitorRequest;
  readonly responseType: typeof pricecomparison_pb.AddCompetitorResponse;
};

type PriceComparisonServiceGetAllStateProductCategories = {
  readonly methodName: string;
  readonly service: typeof PriceComparisonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pricecomparison_pb.AllStateCategoryTypesRequest;
  readonly responseType: typeof pricecomparison_pb.AllStateCategoryTypesResponse;
};

type PriceComparisonServiceUpdateCategoryState = {
  readonly methodName: string;
  readonly service: typeof PriceComparisonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pricecomparison_pb.UpdateCategoryStateRequest;
  readonly responseType: typeof pricecomparison_pb.UpdateCategoryStateResponse;
};

type PriceComparisonServiceGetCategoryMargin = {
  readonly methodName: string;
  readonly service: typeof PriceComparisonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pricecomparison_pb.GetCategoryMarginRequest;
  readonly responseType: typeof pricecomparison_pb.GetCategoryMarginResponse;
};

type PriceComparisonServiceAddCategoryMargin = {
  readonly methodName: string;
  readonly service: typeof PriceComparisonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pricecomparison_pb.AddCategoryMarginRequest;
  readonly responseType: typeof pricecomparison_pb.AddCategoryMarginResponse;
};

type PriceComparisonServiceDeleteCategoryMargin = {
  readonly methodName: string;
  readonly service: typeof PriceComparisonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pricecomparison_pb.DeleteCategoryMarginRequest;
  readonly responseType: typeof pricecomparison_pb.DeleteCategoryMarginResponse;
};

export class PriceComparisonService {
  static readonly serviceName: string;
  static readonly GetAllProductCategories: PriceComparisonServiceGetAllProductCategories;
  static readonly GetAllNewCategoryTypes: PriceComparisonServiceGetAllNewCategoryTypes;
  static readonly GetAllCompetitors: PriceComparisonServiceGetAllCompetitors;
  static readonly GetLoadProductComparisonInfomation: PriceComparisonServiceGetLoadProductComparisonInfomation;
  static readonly GetLoadFilteredProductComparisonInfomation: PriceComparisonServiceGetLoadFilteredProductComparisonInfomation;
  static readonly UpdateProductDescription: PriceComparisonServiceUpdateProductDescription;
  static readonly UpdateCompetitorTier: PriceComparisonServiceUpdateCompetitorTier;
  static readonly DeleteCompetitor: PriceComparisonServiceDeleteCompetitor;
  static readonly AddCompetitor: PriceComparisonServiceAddCompetitor;
  static readonly GetAllStateProductCategories: PriceComparisonServiceGetAllStateProductCategories;
  static readonly UpdateCategoryState: PriceComparisonServiceUpdateCategoryState;
  static readonly GetCategoryMargin: PriceComparisonServiceGetCategoryMargin;
  static readonly AddCategoryMargin: PriceComparisonServiceAddCategoryMargin;
  static readonly DeleteCategoryMargin: PriceComparisonServiceDeleteCategoryMargin;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class PriceComparisonServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAllProductCategories(
    requestMessage: pricecomparison_pb.GetAllCategoryTypesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.AllCategoryTypesResponse|null) => void
  ): UnaryResponse;
  getAllProductCategories(
    requestMessage: pricecomparison_pb.GetAllCategoryTypesRequest,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.AllCategoryTypesResponse|null) => void
  ): UnaryResponse;
  getAllNewCategoryTypes(
    requestMessage: pricecomparison_pb.GetAllNewCategoryTypesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.AllNewCategoryTypesResponse|null) => void
  ): UnaryResponse;
  getAllNewCategoryTypes(
    requestMessage: pricecomparison_pb.GetAllNewCategoryTypesRequest,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.AllNewCategoryTypesResponse|null) => void
  ): UnaryResponse;
  getAllCompetitors(
    requestMessage: pricecomparison_pb.GetAllCompetitorTypesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.AllCompetitorTypesResponse|null) => void
  ): UnaryResponse;
  getAllCompetitors(
    requestMessage: pricecomparison_pb.GetAllCompetitorTypesRequest,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.AllCompetitorTypesResponse|null) => void
  ): UnaryResponse;
  getLoadProductComparisonInfomation(
    requestMessage: pricecomparison_pb.GetProductComparisonRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.ProductComparisonResponse|null) => void
  ): UnaryResponse;
  getLoadProductComparisonInfomation(
    requestMessage: pricecomparison_pb.GetProductComparisonRequest,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.ProductComparisonResponse|null) => void
  ): UnaryResponse;
  getLoadFilteredProductComparisonInfomation(
    requestMessage: pricecomparison_pb.GetProductComparisonRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.ProductComparisonResponse|null) => void
  ): UnaryResponse;
  getLoadFilteredProductComparisonInfomation(
    requestMessage: pricecomparison_pb.GetProductComparisonRequest,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.ProductComparisonResponse|null) => void
  ): UnaryResponse;
  updateProductDescription(
    requestMessage: pricecomparison_pb.UpdateProductDescriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.UpdateProductDescriptionResponse|null) => void
  ): UnaryResponse;
  updateProductDescription(
    requestMessage: pricecomparison_pb.UpdateProductDescriptionRequest,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.UpdateProductDescriptionResponse|null) => void
  ): UnaryResponse;
  updateCompetitorTier(
    requestMessage: pricecomparison_pb.UpdateCompetitorTierRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.UpdateCompetitorTierResponse|null) => void
  ): UnaryResponse;
  updateCompetitorTier(
    requestMessage: pricecomparison_pb.UpdateCompetitorTierRequest,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.UpdateCompetitorTierResponse|null) => void
  ): UnaryResponse;
  deleteCompetitor(
    requestMessage: pricecomparison_pb.DeleteCompetitorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.DeleteCompetitorResponse|null) => void
  ): UnaryResponse;
  deleteCompetitor(
    requestMessage: pricecomparison_pb.DeleteCompetitorRequest,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.DeleteCompetitorResponse|null) => void
  ): UnaryResponse;
  addCompetitor(
    requestMessage: pricecomparison_pb.AddCompetitorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.AddCompetitorResponse|null) => void
  ): UnaryResponse;
  addCompetitor(
    requestMessage: pricecomparison_pb.AddCompetitorRequest,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.AddCompetitorResponse|null) => void
  ): UnaryResponse;
  getAllStateProductCategories(
    requestMessage: pricecomparison_pb.AllStateCategoryTypesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.AllStateCategoryTypesResponse|null) => void
  ): UnaryResponse;
  getAllStateProductCategories(
    requestMessage: pricecomparison_pb.AllStateCategoryTypesRequest,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.AllStateCategoryTypesResponse|null) => void
  ): UnaryResponse;
  updateCategoryState(
    requestMessage: pricecomparison_pb.UpdateCategoryStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.UpdateCategoryStateResponse|null) => void
  ): UnaryResponse;
  updateCategoryState(
    requestMessage: pricecomparison_pb.UpdateCategoryStateRequest,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.UpdateCategoryStateResponse|null) => void
  ): UnaryResponse;
  getCategoryMargin(
    requestMessage: pricecomparison_pb.GetCategoryMarginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.GetCategoryMarginResponse|null) => void
  ): UnaryResponse;
  getCategoryMargin(
    requestMessage: pricecomparison_pb.GetCategoryMarginRequest,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.GetCategoryMarginResponse|null) => void
  ): UnaryResponse;
  addCategoryMargin(
    requestMessage: pricecomparison_pb.AddCategoryMarginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.AddCategoryMarginResponse|null) => void
  ): UnaryResponse;
  addCategoryMargin(
    requestMessage: pricecomparison_pb.AddCategoryMarginRequest,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.AddCategoryMarginResponse|null) => void
  ): UnaryResponse;
  deleteCategoryMargin(
    requestMessage: pricecomparison_pb.DeleteCategoryMarginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.DeleteCategoryMarginResponse|null) => void
  ): UnaryResponse;
  deleteCategoryMargin(
    requestMessage: pricecomparison_pb.DeleteCategoryMarginRequest,
    callback: (error: ServiceError|null, responseMessage: pricecomparison_pb.DeleteCategoryMarginResponse|null) => void
  ): UnaryResponse;
}

