// package: msyrpc
// file: pricecomparison.proto

var pricecomparison_pb = require("./pricecomparison_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PriceComparisonService = (function () {
  function PriceComparisonService() {}
  PriceComparisonService.serviceName = "msyrpc.PriceComparisonService";
  return PriceComparisonService;
}());

PriceComparisonService.GetAllProductCategories = {
  methodName: "GetAllProductCategories",
  service: PriceComparisonService,
  requestStream: false,
  responseStream: false,
  requestType: pricecomparison_pb.GetAllCategoryTypesRequest,
  responseType: pricecomparison_pb.AllCategoryTypesResponse
};

PriceComparisonService.GetAllNewCategoryTypes = {
  methodName: "GetAllNewCategoryTypes",
  service: PriceComparisonService,
  requestStream: false,
  responseStream: false,
  requestType: pricecomparison_pb.GetAllNewCategoryTypesRequest,
  responseType: pricecomparison_pb.AllNewCategoryTypesResponse
};

PriceComparisonService.GetAllCompetitors = {
  methodName: "GetAllCompetitors",
  service: PriceComparisonService,
  requestStream: false,
  responseStream: false,
  requestType: pricecomparison_pb.GetAllCompetitorTypesRequest,
  responseType: pricecomparison_pb.AllCompetitorTypesResponse
};

PriceComparisonService.GetLoadProductComparisonInfomation = {
  methodName: "GetLoadProductComparisonInfomation",
  service: PriceComparisonService,
  requestStream: false,
  responseStream: false,
  requestType: pricecomparison_pb.GetProductComparisonRequest,
  responseType: pricecomparison_pb.ProductComparisonResponse
};

PriceComparisonService.GetLoadFilteredProductComparisonInfomation = {
  methodName: "GetLoadFilteredProductComparisonInfomation",
  service: PriceComparisonService,
  requestStream: false,
  responseStream: false,
  requestType: pricecomparison_pb.GetProductComparisonRequest,
  responseType: pricecomparison_pb.ProductComparisonResponse
};

PriceComparisonService.UpdateProductDescription = {
  methodName: "UpdateProductDescription",
  service: PriceComparisonService,
  requestStream: false,
  responseStream: false,
  requestType: pricecomparison_pb.UpdateProductDescriptionRequest,
  responseType: pricecomparison_pb.UpdateProductDescriptionResponse
};

PriceComparisonService.UpdateCompetitorTier = {
  methodName: "UpdateCompetitorTier",
  service: PriceComparisonService,
  requestStream: false,
  responseStream: false,
  requestType: pricecomparison_pb.UpdateCompetitorTierRequest,
  responseType: pricecomparison_pb.UpdateCompetitorTierResponse
};

PriceComparisonService.DeleteCompetitor = {
  methodName: "DeleteCompetitor",
  service: PriceComparisonService,
  requestStream: false,
  responseStream: false,
  requestType: pricecomparison_pb.DeleteCompetitorRequest,
  responseType: pricecomparison_pb.DeleteCompetitorResponse
};

PriceComparisonService.AddCompetitor = {
  methodName: "AddCompetitor",
  service: PriceComparisonService,
  requestStream: false,
  responseStream: false,
  requestType: pricecomparison_pb.AddCompetitorRequest,
  responseType: pricecomparison_pb.AddCompetitorResponse
};

PriceComparisonService.GetAllStateProductCategories = {
  methodName: "GetAllStateProductCategories",
  service: PriceComparisonService,
  requestStream: false,
  responseStream: false,
  requestType: pricecomparison_pb.AllStateCategoryTypesRequest,
  responseType: pricecomparison_pb.AllStateCategoryTypesResponse
};

PriceComparisonService.UpdateCategoryState = {
  methodName: "UpdateCategoryState",
  service: PriceComparisonService,
  requestStream: false,
  responseStream: false,
  requestType: pricecomparison_pb.UpdateCategoryStateRequest,
  responseType: pricecomparison_pb.UpdateCategoryStateResponse
};

PriceComparisonService.GetCategoryMargin = {
  methodName: "GetCategoryMargin",
  service: PriceComparisonService,
  requestStream: false,
  responseStream: false,
  requestType: pricecomparison_pb.GetCategoryMarginRequest,
  responseType: pricecomparison_pb.GetCategoryMarginResponse
};

PriceComparisonService.AddCategoryMargin = {
  methodName: "AddCategoryMargin",
  service: PriceComparisonService,
  requestStream: false,
  responseStream: false,
  requestType: pricecomparison_pb.AddCategoryMarginRequest,
  responseType: pricecomparison_pb.AddCategoryMarginResponse
};

PriceComparisonService.DeleteCategoryMargin = {
  methodName: "DeleteCategoryMargin",
  service: PriceComparisonService,
  requestStream: false,
  responseStream: false,
  requestType: pricecomparison_pb.DeleteCategoryMarginRequest,
  responseType: pricecomparison_pb.DeleteCategoryMarginResponse
};

exports.PriceComparisonService = PriceComparisonService;

function PriceComparisonServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PriceComparisonServiceClient.prototype.getAllProductCategories = function getAllProductCategories(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PriceComparisonService.GetAllProductCategories, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PriceComparisonServiceClient.prototype.getAllNewCategoryTypes = function getAllNewCategoryTypes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PriceComparisonService.GetAllNewCategoryTypes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PriceComparisonServiceClient.prototype.getAllCompetitors = function getAllCompetitors(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PriceComparisonService.GetAllCompetitors, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PriceComparisonServiceClient.prototype.getLoadProductComparisonInfomation = function getLoadProductComparisonInfomation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PriceComparisonService.GetLoadProductComparisonInfomation, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PriceComparisonServiceClient.prototype.getLoadFilteredProductComparisonInfomation = function getLoadFilteredProductComparisonInfomation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PriceComparisonService.GetLoadFilteredProductComparisonInfomation, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PriceComparisonServiceClient.prototype.updateProductDescription = function updateProductDescription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PriceComparisonService.UpdateProductDescription, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PriceComparisonServiceClient.prototype.updateCompetitorTier = function updateCompetitorTier(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PriceComparisonService.UpdateCompetitorTier, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PriceComparisonServiceClient.prototype.deleteCompetitor = function deleteCompetitor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PriceComparisonService.DeleteCompetitor, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PriceComparisonServiceClient.prototype.addCompetitor = function addCompetitor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PriceComparisonService.AddCompetitor, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PriceComparisonServiceClient.prototype.getAllStateProductCategories = function getAllStateProductCategories(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PriceComparisonService.GetAllStateProductCategories, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PriceComparisonServiceClient.prototype.updateCategoryState = function updateCategoryState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PriceComparisonService.UpdateCategoryState, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PriceComparisonServiceClient.prototype.getCategoryMargin = function getCategoryMargin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PriceComparisonService.GetCategoryMargin, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PriceComparisonServiceClient.prototype.addCategoryMargin = function addCategoryMargin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PriceComparisonService.AddCategoryMargin, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PriceComparisonServiceClient.prototype.deleteCategoryMargin = function deleteCategoryMargin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PriceComparisonService.DeleteCategoryMargin, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.PriceComparisonServiceClient = PriceComparisonServiceClient;

