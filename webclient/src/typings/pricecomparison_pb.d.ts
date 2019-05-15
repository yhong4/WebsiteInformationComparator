// package: msyrpc
// file: pricecomparison.proto

import * as jspb from "google-protobuf";

export class Competitor extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getTier(): string;
  setTier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Competitor.AsObject;
  static toObject(includeInstance: boolean, msg: Competitor): Competitor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Competitor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Competitor;
  static deserializeBinaryFromReader(message: Competitor, reader: jspb.BinaryReader): Competitor;
}

export namespace Competitor {
  export type AsObject = {
    id: number,
    name: string,
    tier: string,
  }
}

export class Category extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class CompetitorPrice extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitorPrice.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitorPrice): CompetitorPrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitorPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitorPrice;
  static deserializeBinaryFromReader(message: CompetitorPrice, reader: jspb.BinaryReader): CompetitorPrice;
}

export namespace CompetitorPrice {
  export type AsObject = {
    name: string,
    price: number,
  }
}

export class Product extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getProductcode(): string;
  setProductcode(value: string): void;

  getProductdescription(): string;
  setProductdescription(value: string): void;

  getKeywords(): string;
  setKeywords(value: string): void;

  getCostprice(): number;
  setCostprice(value: number): void;

  getSalesprice(): number;
  setSalesprice(value: number): void;

  clearCompetitorpricesList(): void;
  getCompetitorpricesList(): Array<CompetitorPrice>;
  setCompetitorpricesList(value: Array<CompetitorPrice>): void;
  addCompetitorprices(value?: CompetitorPrice, index?: number): CompetitorPrice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    id: number,
    productcode: string,
    productdescription: string,
    keywords: string,
    costprice: number,
    salesprice: number,
    competitorpricesList: Array<CompetitorPrice.AsObject>,
  }
}

export class GetAllCategoryTypesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllCategoryTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllCategoryTypesRequest): GetAllCategoryTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllCategoryTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllCategoryTypesRequest;
  static deserializeBinaryFromReader(message: GetAllCategoryTypesRequest, reader: jspb.BinaryReader): GetAllCategoryTypesRequest;
}

export namespace GetAllCategoryTypesRequest {
  export type AsObject = {
  }
}

export class GetAllCompetitorTypesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllCompetitorTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllCompetitorTypesRequest): GetAllCompetitorTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllCompetitorTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllCompetitorTypesRequest;
  static deserializeBinaryFromReader(message: GetAllCompetitorTypesRequest, reader: jspb.BinaryReader): GetAllCompetitorTypesRequest;
}

export namespace GetAllCompetitorTypesRequest {
  export type AsObject = {
  }
}

export class GetAllNewCategoryTypesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllNewCategoryTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllNewCategoryTypesRequest): GetAllNewCategoryTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllNewCategoryTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllNewCategoryTypesRequest;
  static deserializeBinaryFromReader(message: GetAllNewCategoryTypesRequest, reader: jspb.BinaryReader): GetAllNewCategoryTypesRequest;
}

export namespace GetAllNewCategoryTypesRequest {
  export type AsObject = {
  }
}

export class GetProductComparisonRequest extends jspb.Message {
  clearCategorytypesList(): void;
  getCategorytypesList(): Array<number>;
  setCategorytypesList(value: Array<number>): void;
  addCategorytypes(value: number, index?: number): number;

  clearCompetitorstypesList(): void;
  getCompetitorstypesList(): Array<number>;
  setCompetitorstypesList(value: Array<number>): void;
  addCompetitorstypes(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductComparisonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductComparisonRequest): GetProductComparisonRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProductComparisonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductComparisonRequest;
  static deserializeBinaryFromReader(message: GetProductComparisonRequest, reader: jspb.BinaryReader): GetProductComparisonRequest;
}

export namespace GetProductComparisonRequest {
  export type AsObject = {
    categorytypesList: Array<number>,
    competitorstypesList: Array<number>,
  }
}

export class UpdateProductDescriptionRequest extends jspb.Message {
  getProductcode(): string;
  setProductcode(value: string): void;

  getUpdateddescription(): string;
  setUpdateddescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProductDescriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProductDescriptionRequest): UpdateProductDescriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProductDescriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProductDescriptionRequest;
  static deserializeBinaryFromReader(message: UpdateProductDescriptionRequest, reader: jspb.BinaryReader): UpdateProductDescriptionRequest;
}

export namespace UpdateProductDescriptionRequest {
  export type AsObject = {
    productcode: string,
    updateddescription: string,
  }
}

export class CategoryData extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  clearDataList(): void;
  getDataList(): Array<Category>;
  setDataList(value: Array<Category>): void;
  addData(value?: Category, index?: number): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryData.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryData): CategoryData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryData;
  static deserializeBinaryFromReader(message: CategoryData, reader: jspb.BinaryReader): CategoryData;
}

export namespace CategoryData {
  export type AsObject = {
    type: string,
    dataList: Array<Category.AsObject>,
  }
}

export class AllNewCategoryTypesResponse extends jspb.Message {
  clearCategoryList(): void;
  getCategoryList(): Array<CategoryData>;
  setCategoryList(value: Array<CategoryData>): void;
  addCategory(value?: CategoryData, index?: number): CategoryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllNewCategoryTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AllNewCategoryTypesResponse): AllNewCategoryTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllNewCategoryTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllNewCategoryTypesResponse;
  static deserializeBinaryFromReader(message: AllNewCategoryTypesResponse, reader: jspb.BinaryReader): AllNewCategoryTypesResponse;
}

export namespace AllNewCategoryTypesResponse {
  export type AsObject = {
    categoryList: Array<CategoryData.AsObject>,
  }
}

export class AllCategoryTypesResponse extends jspb.Message {
  clearCategorydailyList(): void;
  getCategorydailyList(): Array<Category>;
  setCategorydailyList(value: Array<Category>): void;
  addCategorydaily(value?: Category, index?: number): Category;

  clearCategorymondayandthursdayList(): void;
  getCategorymondayandthursdayList(): Array<Category>;
  setCategorymondayandthursdayList(value: Array<Category>): void;
  addCategorymondayandthursday(value?: Category, index?: number): Category;

  clearCategorytuesdayandfridayList(): void;
  getCategorytuesdayandfridayList(): Array<Category>;
  setCategorytuesdayandfridayList(value: Array<Category>): void;
  addCategorytuesdayandfriday(value?: Category, index?: number): Category;

  clearCategorywednesdayandsaturdayList(): void;
  getCategorywednesdayandsaturdayList(): Array<Category>;
  setCategorywednesdayandsaturdayList(value: Array<Category>): void;
  addCategorywednesdayandsaturday(value?: Category, index?: number): Category;

  clearCategoryunassignedList(): void;
  getCategoryunassignedList(): Array<Category>;
  setCategoryunassignedList(value: Array<Category>): void;
  addCategoryunassigned(value?: Category, index?: number): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllCategoryTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AllCategoryTypesResponse): AllCategoryTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllCategoryTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllCategoryTypesResponse;
  static deserializeBinaryFromReader(message: AllCategoryTypesResponse, reader: jspb.BinaryReader): AllCategoryTypesResponse;
}

export namespace AllCategoryTypesResponse {
  export type AsObject = {
    categorydailyList: Array<Category.AsObject>,
    categorymondayandthursdayList: Array<Category.AsObject>,
    categorytuesdayandfridayList: Array<Category.AsObject>,
    categorywednesdayandsaturdayList: Array<Category.AsObject>,
    categoryunassignedList: Array<Category.AsObject>,
  }
}

export class AllCompetitorTypesResponse extends jspb.Message {
  clearCompetitorstieroneList(): void;
  getCompetitorstieroneList(): Array<Competitor>;
  setCompetitorstieroneList(value: Array<Competitor>): void;
  addCompetitorstierone(value?: Competitor, index?: number): Competitor;

  clearCompetitorstiertwoList(): void;
  getCompetitorstiertwoList(): Array<Competitor>;
  setCompetitorstiertwoList(value: Array<Competitor>): void;
  addCompetitorstiertwo(value?: Competitor, index?: number): Competitor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllCompetitorTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AllCompetitorTypesResponse): AllCompetitorTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllCompetitorTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllCompetitorTypesResponse;
  static deserializeBinaryFromReader(message: AllCompetitorTypesResponse, reader: jspb.BinaryReader): AllCompetitorTypesResponse;
}

export namespace AllCompetitorTypesResponse {
  export type AsObject = {
    competitorstieroneList: Array<Competitor.AsObject>,
    competitorstiertwoList: Array<Competitor.AsObject>,
  }
}

export class ProductComparisonResponse extends jspb.Message {
  clearProductcomparisonList(): void;
  getProductcomparisonList(): Array<Product>;
  setProductcomparisonList(value: Array<Product>): void;
  addProductcomparison(value?: Product, index?: number): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductComparisonResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductComparisonResponse): ProductComparisonResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductComparisonResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductComparisonResponse;
  static deserializeBinaryFromReader(message: ProductComparisonResponse, reader: jspb.BinaryReader): ProductComparisonResponse;
}

export namespace ProductComparisonResponse {
  export type AsObject = {
    productcomparisonList: Array<Product.AsObject>,
  }
}

export class UpdateProductDescriptionResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProductDescriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProductDescriptionResponse): UpdateProductDescriptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProductDescriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProductDescriptionResponse;
  static deserializeBinaryFromReader(message: UpdateProductDescriptionResponse, reader: jspb.BinaryReader): UpdateProductDescriptionResponse;
}

export namespace UpdateProductDescriptionResponse {
  export type AsObject = {
    status: string,
  }
}

export class UpdatedCompetitor extends jspb.Message {
  getCompetitorid(): number;
  setCompetitorid(value: number): void;

  getUpdatedtier(): string;
  setUpdatedtier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatedCompetitor.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatedCompetitor): UpdatedCompetitor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatedCompetitor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatedCompetitor;
  static deserializeBinaryFromReader(message: UpdatedCompetitor, reader: jspb.BinaryReader): UpdatedCompetitor;
}

export namespace UpdatedCompetitor {
  export type AsObject = {
    competitorid: number,
    updatedtier: string,
  }
}

export class UpdateCompetitorTierRequest extends jspb.Message {
  clearUpdatedcompetitorList(): void;
  getUpdatedcompetitorList(): Array<UpdatedCompetitor>;
  setUpdatedcompetitorList(value: Array<UpdatedCompetitor>): void;
  addUpdatedcompetitor(value?: UpdatedCompetitor, index?: number): UpdatedCompetitor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCompetitorTierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCompetitorTierRequest): UpdateCompetitorTierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCompetitorTierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCompetitorTierRequest;
  static deserializeBinaryFromReader(message: UpdateCompetitorTierRequest, reader: jspb.BinaryReader): UpdateCompetitorTierRequest;
}

export namespace UpdateCompetitorTierRequest {
  export type AsObject = {
    updatedcompetitorList: Array<UpdatedCompetitor.AsObject>,
  }
}

export class DeleteCompetitorRequest extends jspb.Message {
  getCompetitorid(): number;
  setCompetitorid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCompetitorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCompetitorRequest): DeleteCompetitorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCompetitorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCompetitorRequest;
  static deserializeBinaryFromReader(message: DeleteCompetitorRequest, reader: jspb.BinaryReader): DeleteCompetitorRequest;
}

export namespace DeleteCompetitorRequest {
  export type AsObject = {
    competitorid: number,
  }
}

export class AddCompetitorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTier(): string;
  setTier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCompetitorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddCompetitorRequest): AddCompetitorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddCompetitorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCompetitorRequest;
  static deserializeBinaryFromReader(message: AddCompetitorRequest, reader: jspb.BinaryReader): AddCompetitorRequest;
}

export namespace AddCompetitorRequest {
  export type AsObject = {
    name: string,
    tier: string,
  }
}

export class UpdateCompetitorTierResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCompetitorTierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCompetitorTierResponse): UpdateCompetitorTierResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCompetitorTierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCompetitorTierResponse;
  static deserializeBinaryFromReader(message: UpdateCompetitorTierResponse, reader: jspb.BinaryReader): UpdateCompetitorTierResponse;
}

export namespace UpdateCompetitorTierResponse {
  export type AsObject = {
    status: string,
  }
}

export class DeleteCompetitorResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCompetitorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCompetitorResponse): DeleteCompetitorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCompetitorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCompetitorResponse;
  static deserializeBinaryFromReader(message: DeleteCompetitorResponse, reader: jspb.BinaryReader): DeleteCompetitorResponse;
}

export namespace DeleteCompetitorResponse {
  export type AsObject = {
    status: string,
  }
}

export class AddCompetitorResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCompetitorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddCompetitorResponse): AddCompetitorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddCompetitorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCompetitorResponse;
  static deserializeBinaryFromReader(message: AddCompetitorResponse, reader: jspb.BinaryReader): AddCompetitorResponse;
}

export namespace AddCompetitorResponse {
  export type AsObject = {
    status: string,
  }
}

export class StateCategory extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateCategory.AsObject;
  static toObject(includeInstance: boolean, msg: StateCategory): StateCategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StateCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateCategory;
  static deserializeBinaryFromReader(message: StateCategory, reader: jspb.BinaryReader): StateCategory;
}

export namespace StateCategory {
  export type AsObject = {
    id: number,
    name: string,
    category: string,
  }
}

export class UpdateCategoryStateRequest extends jspb.Message {
  clearUpdatedcategoriesList(): void;
  getUpdatedcategoriesList(): Array<StateCategory>;
  setUpdatedcategoriesList(value: Array<StateCategory>): void;
  addUpdatedcategories(value?: StateCategory, index?: number): StateCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCategoryStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCategoryStateRequest): UpdateCategoryStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCategoryStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCategoryStateRequest;
  static deserializeBinaryFromReader(message: UpdateCategoryStateRequest, reader: jspb.BinaryReader): UpdateCategoryStateRequest;
}

export namespace UpdateCategoryStateRequest {
  export type AsObject = {
    updatedcategoriesList: Array<StateCategory.AsObject>,
  }
}

export class UpdateCategoryStateResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCategoryStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCategoryStateResponse): UpdateCategoryStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCategoryStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCategoryStateResponse;
  static deserializeBinaryFromReader(message: UpdateCategoryStateResponse, reader: jspb.BinaryReader): UpdateCategoryStateResponse;
}

export namespace UpdateCategoryStateResponse {
  export type AsObject = {
    status: string,
  }
}

export class AllStateCategoryTypesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllStateCategoryTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AllStateCategoryTypesRequest): AllStateCategoryTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllStateCategoryTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllStateCategoryTypesRequest;
  static deserializeBinaryFromReader(message: AllStateCategoryTypesRequest, reader: jspb.BinaryReader): AllStateCategoryTypesRequest;
}

export namespace AllStateCategoryTypesRequest {
  export type AsObject = {
  }
}

export class AllStateCategoryTypesResponse extends jspb.Message {
  clearCategorydailyList(): void;
  getCategorydailyList(): Array<StateCategory>;
  setCategorydailyList(value: Array<StateCategory>): void;
  addCategorydaily(value?: StateCategory, index?: number): StateCategory;

  clearCategorymondayandthursdayList(): void;
  getCategorymondayandthursdayList(): Array<StateCategory>;
  setCategorymondayandthursdayList(value: Array<StateCategory>): void;
  addCategorymondayandthursday(value?: StateCategory, index?: number): StateCategory;

  clearCategorytuesdayandfridayList(): void;
  getCategorytuesdayandfridayList(): Array<StateCategory>;
  setCategorytuesdayandfridayList(value: Array<StateCategory>): void;
  addCategorytuesdayandfriday(value?: StateCategory, index?: number): StateCategory;

  clearCategorywednesdayandsaturdayList(): void;
  getCategorywednesdayandsaturdayList(): Array<StateCategory>;
  setCategorywednesdayandsaturdayList(value: Array<StateCategory>): void;
  addCategorywednesdayandsaturday(value?: StateCategory, index?: number): StateCategory;

  clearCategoryunassignedList(): void;
  getCategoryunassignedList(): Array<StateCategory>;
  setCategoryunassignedList(value: Array<StateCategory>): void;
  addCategoryunassigned(value?: StateCategory, index?: number): StateCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllStateCategoryTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AllStateCategoryTypesResponse): AllStateCategoryTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllStateCategoryTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllStateCategoryTypesResponse;
  static deserializeBinaryFromReader(message: AllStateCategoryTypesResponse, reader: jspb.BinaryReader): AllStateCategoryTypesResponse;
}

export namespace AllStateCategoryTypesResponse {
  export type AsObject = {
    categorydailyList: Array<StateCategory.AsObject>,
    categorymondayandthursdayList: Array<StateCategory.AsObject>,
    categorytuesdayandfridayList: Array<StateCategory.AsObject>,
    categorywednesdayandsaturdayList: Array<StateCategory.AsObject>,
    categoryunassignedList: Array<StateCategory.AsObject>,
  }
}

export class CategoryMargin extends jspb.Message {
  getTarget(): number;
  setTarget(value: number): void;

  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryMargin.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryMargin): CategoryMargin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryMargin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryMargin;
  static deserializeBinaryFromReader(message: CategoryMargin, reader: jspb.BinaryReader): CategoryMargin;
}

export namespace CategoryMargin {
  export type AsObject = {
    target: number,
    start: number,
    end: number,
  }
}

export class GetCategoryMarginRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCategoryMarginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCategoryMarginRequest): GetCategoryMarginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCategoryMarginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCategoryMarginRequest;
  static deserializeBinaryFromReader(message: GetCategoryMarginRequest, reader: jspb.BinaryReader): GetCategoryMarginRequest;
}

export namespace GetCategoryMarginRequest {
  export type AsObject = {
  }
}

export class GetCategoryMarginResponseItem extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasMargin(): boolean;
  clearMargin(): void;
  getMargin(): CategoryMargin | undefined;
  setMargin(value?: CategoryMargin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCategoryMarginResponseItem.AsObject;
  static toObject(includeInstance: boolean, msg: GetCategoryMarginResponseItem): GetCategoryMarginResponseItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCategoryMarginResponseItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCategoryMarginResponseItem;
  static deserializeBinaryFromReader(message: GetCategoryMarginResponseItem, reader: jspb.BinaryReader): GetCategoryMarginResponseItem;
}

export namespace GetCategoryMarginResponseItem {
  export type AsObject = {
    id: number,
    name: string,
    margin?: CategoryMargin.AsObject,
  }
}

export class GetCategoryMarginResponse extends jspb.Message {
  clearCategorymarginsList(): void;
  getCategorymarginsList(): Array<GetCategoryMarginResponseItem>;
  setCategorymarginsList(value: Array<GetCategoryMarginResponseItem>): void;
  addCategorymargins(value?: GetCategoryMarginResponseItem, index?: number): GetCategoryMarginResponseItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCategoryMarginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCategoryMarginResponse): GetCategoryMarginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCategoryMarginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCategoryMarginResponse;
  static deserializeBinaryFromReader(message: GetCategoryMarginResponse, reader: jspb.BinaryReader): GetCategoryMarginResponse;
}

export namespace GetCategoryMarginResponse {
  export type AsObject = {
    categorymarginsList: Array<GetCategoryMarginResponseItem.AsObject>,
  }
}

export class AddCategoryMarginRequest extends jspb.Message {
  getCategory(): string;
  setCategory(value: string): void;

  getPricerangestart(): number;
  setPricerangestart(value: number): void;

  getPricerangeend(): number;
  setPricerangeend(value: number): void;

  getMargin(): number;
  setMargin(value: number): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCategoryMarginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddCategoryMarginRequest): AddCategoryMarginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddCategoryMarginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCategoryMarginRequest;
  static deserializeBinaryFromReader(message: AddCategoryMarginRequest, reader: jspb.BinaryReader): AddCategoryMarginRequest;
}

export namespace AddCategoryMarginRequest {
  export type AsObject = {
    category: string,
    pricerangestart: number,
    pricerangeend: number,
    margin: number,
    id: number,
  }
}

export class AddCategoryMarginResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCategoryMarginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddCategoryMarginResponse): AddCategoryMarginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddCategoryMarginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCategoryMarginResponse;
  static deserializeBinaryFromReader(message: AddCategoryMarginResponse, reader: jspb.BinaryReader): AddCategoryMarginResponse;
}

export namespace AddCategoryMarginResponse {
  export type AsObject = {
    status: string,
  }
}

export class DeleteCategoryMarginRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCategoryMarginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCategoryMarginRequest): DeleteCategoryMarginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCategoryMarginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCategoryMarginRequest;
  static deserializeBinaryFromReader(message: DeleteCategoryMarginRequest, reader: jspb.BinaryReader): DeleteCategoryMarginRequest;
}

export namespace DeleteCategoryMarginRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteCategoryMarginResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCategoryMarginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCategoryMarginResponse): DeleteCategoryMarginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCategoryMarginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCategoryMarginResponse;
  static deserializeBinaryFromReader(message: DeleteCategoryMarginResponse, reader: jspb.BinaryReader): DeleteCategoryMarginResponse;
}

export namespace DeleteCategoryMarginResponse {
  export type AsObject = {
    status: string,
  }
}

