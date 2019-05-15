using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Google.Protobuf.Collections;
using Grpc.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.ExpressionVisitors.Internal;
using Msyrpc;
using Remotion.Linq.Clauses;
using Remotion.Linq.Parsing.ExpressionVisitors.Transformation.PredefinedTransformations;
using server.Models;
using Competitor = Msyrpc.Competitor;
using Product = Msyrpc.Product;

namespace server.Services
{
    class PricecomparisonServices : PriceComparisonService.PriceComparisonServiceBase
    {
        public override Task<AllCompetitorTypesResponse> GetAllCompetitors(GetAllCompetitorTypesRequest request,
            ServerCallContext context)
        {
            using (var priceContext = new pricecompContext())
            {
                var competitors = priceContext.Competitor1.ToList();

                RepeatedField<Competitor> competitorsTierOne = new RepeatedField<Competitor>();
                RepeatedField<Competitor> competitorsTierTwo = new RepeatedField<Competitor>();

                foreach (var competitor in competitors)
                {
                    if (competitor.Tier == "T1")
                    {
                        Competitor competitorItem = new Competitor()
                        {
                            Id = competitor.Competitorid,
                            Name = competitor.Name,
                            Tier = competitor.Tier
                        };
                        competitorsTierOne.Add(competitorItem);
                    }
                    else
                    {
                        Competitor competitorItem = new Competitor()
                        {
                            Id = competitor.Competitorid,
                            Name = competitor.Name,
                            Tier = competitor.Tier
                        };
                        competitorsTierTwo.Add(competitorItem);
                    }
                }

                AllCompetitorTypesResponse response = new AllCompetitorTypesResponse
                {
                    CompetitorsTierOne = {competitorsTierOne},
                    CompetitorsTierTwo = {competitorsTierTwo}
                };
                Console.WriteLine(response);
                return Task.FromResult(response);
            }

        }

        public override Task<AllCategoryTypesResponse> GetAllProductCategories(GetAllCategoryTypesRequest request,
            ServerCallContext context)
        {
            using (var priceContext = new pricecompContext())
            {
//                var categories = priceContext.Stateassignment.ToList();
                var categories =
                    from cm in priceContext.Categorymargin
                    from sm in priceContext.Stateassignment
                    where cm.Category == sm.Category
                    select new
                    {
                        Id = cm.Id,
                        Category = cm.Category,
                        State = sm.State
                    };

                RepeatedField<Category> categoryDaily = new RepeatedField<Category>();
                RepeatedField<Category> categoryMondayAndThursday = new RepeatedField<Category>();
                RepeatedField<Category> categoryTuesdayAndFriday = new RepeatedField<Category>();
                RepeatedField<Category> categoryWednesdayAndSaturday = new RepeatedField<Category>();
                RepeatedField<Category> categoryUnassigned = new RepeatedField<Category>();

                foreach (var category in categories)
                {
                    Category categoryItem = new Category()
                    {
                        Id = category.Id,
                        Name = category.Category
                    };

                    int index = Int32.Parse(category.State.Substring(0, 1));
                    switch (index)
                    {
                        case 0:
                        {
                            categoryDaily.Add(categoryItem);
                            break;
                        }
                        case 1:
                        {
                            categoryMondayAndThursday.Add(categoryItem);
                            break;
                        }
                        case 2:
                        {
                            categoryTuesdayAndFriday.Add(categoryItem);
                            break;
                        }
                        case 3:
                        {
                            categoryWednesdayAndSaturday.Add(categoryItem);
                            break;
                        }
                        default:
                        {
                            categoryUnassigned.Add(categoryItem);
                            break;
                        }
                    }
                }

                AllCategoryTypesResponse response = new AllCategoryTypesResponse()
                {
                    CategoryDaily = {categoryDaily},
                    CategoryMondayAndThursday = {categoryMondayAndThursday},
                    CategoryTuesdayAndFriday = {categoryTuesdayAndFriday},
                    CategoryWednesdayAndSaturday = {categoryWednesdayAndSaturday},
                    CategoryUnassigned = {categoryUnassigned}
                };

                Console.WriteLine(response);

                return Task.FromResult(response);
            }
        }

        public override Task<AllNewCategoryTypesResponse> GetAllNewCategoryTypes(GetAllNewCategoryTypesRequest request,
            ServerCallContext context)
        {
            using (var priceContext = new pricecompContext())
            {
                AllNewCategoryTypesResponse response;

                RepeatedField<CategoryData> categoryData = new RepeatedField<CategoryData>();

                try
                {
                    var categories = priceContext.Stateassignment.Select(item => item.State).Distinct().OrderBy(x => x)
                        .ToList();

                    foreach (var category in categories)
                    {
                        var categoriesList = priceContext.Stateassignment.Where(item => item.State == category)
                            .Select(item => item).ToList();

                        RepeatedField<Category> categoryDataList = new RepeatedField<Category>();
                        foreach (var categoryItem in categoriesList)
                        {
                            categoryDataList.Add(new Category
                            {
                                Id = categoryItem.Id,
                                Name = categoryItem.Category
                            });
                        }

                        categoryData.Add(new CategoryData
                        {
                            Type = category,
                            Data = {categoryDataList}
                        });
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
                
                response = new AllNewCategoryTypesResponse()
                {
                    Category = { categoryData }
                };

//                Console.WriteLine(response);
                return Task.FromResult(response);
            }
        }

                public override Task<ProductComparisonResponse> GetLoadProductComparisonInfomation(
                    GetProductComparisonRequest request, ServerCallContext context)
                {
                    using (var pricecompContext = new pricecompContext())
                    {
        
                        var categoryType = request.CategoryTypes;
                        var competitorsType = request.CompetitorsTypes;
        
        
                        var products =
                            pricecompContext.Stateassignment
                                .Join(
                                    pricecompContext.Product,
                                    category => category.Category,
                                    product => product.Category,
                                    (category, product) => new
                                    {
                                        id = category.Id,
                                        productid = product.Productid,
                                        productcode = product.Productcode,
                                        productname = product.Productname,
                                        salesprice = product.Salesprice,
                                        costprice = product.Costprice,
                                        keywords = product.Keywords
                                    }
                                )
                                .Where(item => categoryType.Contains(item.id)).ToList();
//        //
//        foreach (var item in products)
//        {
//            Console.WriteLine(item+"\n");
//        }
        
                        var competitorprice =
                            pricecompContext.Competitorprice
                                .Where(item => competitorsType.Contains(item.Competitorid))
                                .Join(
                                    pricecompContext.Competitor1,
                                    price => price.Competitorid,
                                    competitor => competitor.Competitorid,
                                    (price, competitor) => new
                                    {
                                        id = price.Productid,
                                        productid = price.Productid,
                                        competitorid = price.Competitorid,
                                        competitorprice = price.Competitorprice1,
                                        competitorname = competitor.Name
                                    }
                                ).ToList();
//                        foreach (var item in competitorprice)
//                        {
//                            Console.WriteLine(item + "\n");
//                        }
//                        Console.WriteLine("end competitor price");


                        var datatable = from productItem in products
                                        join competitorItem in competitorprice
                                on productItem.productid equals competitorItem.productid into productCompetitor
                            from data in productCompetitor.DefaultIfEmpty()
                            select new
                            {
                                productItem.productid,
                                productItem.productcode,
                                productItem.productname,
                                productItem.salesprice,
                                productItem.costprice,
                                productItem.keywords,
                                competitorid = (data != null) ? data.competitorid: -1,
                                competitorprice = (data != null) ? data.competitorprice:-1,
                                competitorname = (data != null) ? data.competitorname:"No data"
                            };

//                        foreach (var item in datatable)
//                        {
//                            Console.WriteLine(item);
//                        }

                        var productWithCompetitorPrice = datatable.GroupBy(item => item.productid);
//
//                        foreach (var item in productWithCompetitorPrice)
//                        {
//                            Console.WriteLine(item);
//                        }
                        RepeatedField<Msyrpc.Product> productComparison = new RepeatedField<Msyrpc.Product>();
        
                        foreach (var productWithCompetitorPriceList in productWithCompetitorPrice)
                        {
        
                            RepeatedField<CompetitorPrice> competitorPrices = new RepeatedField<CompetitorPrice>();
        
                            int id = 0;
                            string productCode = "";
                            string productDescription = "";
                            string keywords = "";
                            double costPrice = 0;
                            double salesPrice = 0;
        
                            foreach (var productWithCompetitorPriceItem in productWithCompetitorPriceList)
                            {
                                id = productWithCompetitorPriceItem.productid;
                                productCode = productWithCompetitorPriceItem.productcode;
                                productDescription = productWithCompetitorPriceItem.productname;
                                keywords = productWithCompetitorPriceItem.keywords;
                                costPrice = (double) productWithCompetitorPriceItem.costprice;
                                salesPrice = (double) productWithCompetitorPriceItem.salesprice;
        
        
                                competitorPrices.Add(new CompetitorPrice()
                                {
                                    Name = productWithCompetitorPriceItem.competitorname,
                                    Price = (double) productWithCompetitorPriceItem.competitorprice
                                });
                            }
        
                            Product productItem = new Product()
                            {
                                Id = id,
                                ProductCode = productCode,
                                ProductDescription = productDescription,
                                Keywords = keywords,
                                CostPrice = costPrice,
                                SalesPrice = salesPrice,
                                CompetitorPrices = {competitorPrices}
                            };
        
                            productComparison.Add(productItem);
                        }
        
                        ProductComparisonResponse response = new ProductComparisonResponse()
                        {
                            ProductComparison = {productComparison}
                        };
        
                        Console.WriteLine(response);
        
                        return Task.FromResult(response);
                    }
                }
//        public override Task<ProductComparisonResponse> GetLoadProductComparisonInfomation(
//            GetProductComparisonRequest request, ServerCallContext context)
//        {
//            using (var pricecompContext = new pricecompContext())
//            {
//                var categoryType = request.CategoryTypes;
//                var competitorsType = request.CompetitorsTypes;
//
//                var response = new ProductComparisonResponse();
//
//                var filteredProduct = 
//                    from product in pricecompContext.Product
//                    join statecategory in pricecompContext.Stateassignment on product.Category equals statecategory
//                        .Category into productWithCategory
//                    from pc in productWithCategory.DefaultIfEmpty()
//                    where categoryType.Contains(pc.Id)
//                    select new
//                    {
//                        productid = product.Productid,
//                        productcode = product.Productcode,
//                        productname = product.Productname,
//                        salesprice = product.Salesprice,
//                        costprice = product.Costprice,
//                        keywords = product.Keywords,
//                    };
////                foreach (var data in filteredProduct)
////                    {
////                        Console.WriteLine(data);
////                    }
//
//                var filteredCompetitorPrice =
//                from competitorprice in pricecompContext.Competitorprice
//                where competitorsType.Contains(competitorprice.Competitorid)
//                join competitor in pricecompContext.Competitor1 on competitorprice.Competitorid equals competitor
//                    .Competitorid
//                select new
//                {
//                    productid = competitorprice.Productid,
//                    competitorid = competitorprice.Competitorid,
//                    competitorprice = competitorprice.Competitorprice1,
//                    productname = competitorprice.Productname,
//                    competitorname = competitor.Name,
//                };
//
////                foreach (var data in filteredCompetitorPrice)
////                {
////                    Console.WriteLine(data);
////                }
//
//                var productWithCompetitorPrice =
//                    from product in filteredProduct
//                    join competitor in filteredCompetitorPrice on product.productid equals competitor.productid into
//                        productWithCompetitorPriceTable
//                    from subdata in productWithCompetitorPriceTable.DefaultIfEmpty()
//                    select new
//                    {
//                        productid = product.productid,
//                        productcode = product.productcode,
//                        productname = product.productname,
//                        salesprice = product.salesprice,
//                        costprice = product.costprice,
//                        keywords = product.keywords,
//                        competitorid = subdata.competitorid,
//                        competitorprice = subdata.competitorprice,
//                        competitorname = subdata.competitorname
//                    };
//
////                var productCompetitorData = productWithCompetitorPrice.GroupBy(item => item.productid).Select(item => item).ToList();
//                Console.WriteLine(productWithCompetitorPrice);
//                foreach (var data in productWithCompetitorPrice)
//                {
//                    Console.WriteLine(data);
//                }
//                Console.ReadKey();
//
//                return Task.FromResult(response);
//
//            }
//        }

        public override Task<UpdateProductDescriptionResponse> UpdateProductDescription(UpdateProductDescriptionRequest request, ServerCallContext context)
        {
            using (var priceContext = new pricecompContext())
            {
                UpdateProductDescriptionResponse response;

                var productCode = request.ProductCode;
                var updatedKeyWord = request.UpdatedDescription;

                var record = priceContext.Product.FirstOrDefault(item => item.Productcode == productCode);


                if (record != null)
                {
                    record.Keywords = updatedKeyWord;
                    priceContext.Product.Update(record);
                    var dbres = priceContext.SaveChanges();

                    if (dbres > 0)
                    {

                        response = new UpdateProductDescriptionResponse()
                        {
                            Status = "success"
                        };
                    }
                    else
                    {
                        response = new UpdateProductDescriptionResponse()
                        {
                            Status = "error"
                        };
                    }

                    return Task.FromResult(response);
                }
                else
                {
                    return Task.FromResult(new UpdateProductDescriptionResponse()
                        {
                            Status = "error"
                        }
                    );
                }
            }
        }

        public override Task<UpdateCompetitorTierResponse> UpdateCompetitorTier(UpdateCompetitorTierRequest request, ServerCallContext context)
        {
            using (var priceContext = new pricecompContext())
            {
                UpdateCompetitorTierResponse response;

                var updatedCompetitors = request.UpdatedCompetitor;
                List<Int32> updatedRecord = new List<Int32>();

                Console.WriteLine("updatedCompetitors"+ updatedCompetitors);
                try
                {
                    foreach (var competitor in updatedCompetitors)
                    {
                        var record =
                            priceContext.Competitor1.FirstOrDefault(
                                item => item.Competitorid == competitor.CompetitorId);

                        if (record != null)
                        {
                            record.Tier = competitor.UpdatedTier;
                            priceContext.Update(record);
                            var res = priceContext.SaveChanges();

                            updatedRecord.Add(res);

                        }
                        else
                        {
                            updatedRecord.Add(0);
                        }
                    }

                    foreach (var record in updatedRecord)
                    {
                        Console.WriteLine("record"+record);
                    }
                    
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return Task.FromResult(new UpdateCompetitorTierResponse()
                    {
                        Status = "update tier fail"
                    });
                }
               
                if (updatedRecord.Contains(0))
                {
                    return Task.FromResult(new UpdateCompetitorTierResponse()
                    {
                        Status = "update tier fail"
                    });
                }
                else
                {
                    return Task.FromResult(new UpdateCompetitorTierResponse()
                    {
                        Status = "update tier success"
                    });
                }
            }
        }

        public override Task<DeleteCompetitorResponse> DeleteCompetitor(DeleteCompetitorRequest request, ServerCallContext context)
        {
            using (var priceContext = new pricecompContext())
            {
                DeleteCompetitorResponse response;
                var competitorid = request.CompetitorId;

                var record = priceContext.Competitor1.SingleOrDefault(item => item.Competitorid == competitorid);

                var status = false;

                Console.WriteLine("record.Competitorid", request.CompetitorId);

                if (record != null)
                {
                    try
                    {
                        
                        priceContext.Competitor1.Remove(record);
                        priceContext.SaveChanges();
                        status = true;
                    }
                    catch(Exception e)
                    {
                        status = false;
                        
                    }
                }
                else
                {
                    status = false;
                }

                if (status)
                {
                    response = new DeleteCompetitorResponse()
                    {
                        Status = "succeed to delete"
                    };
                }
                else
                {
                    response = new DeleteCompetitorResponse()
                    {
                        Status = "fail to delete"
                    };
                }

                return Task.FromResult(response);
            }
        }

        public override Task<AddCompetitorResponse> AddCompetitor(AddCompetitorRequest request,
            ServerCallContext context)
        {
            using (var priceContext = new pricecompContext())
            {
                var competitorName = request.Name;
                var competitorTier = request.Tier;
                AddCompetitorResponse response;

                var competitors = priceContext.Competitor1;

                var index = competitors.OrderByDescending(item => item.Competitorid).FirstOrDefault().Competitorid + 1;
                

                Console.WriteLine(index);

                var status = false;

                var competitor = new Competitor1()
                {
                    Competitorid = index,
                    Keyword = null,
                    Name = competitorName,
                    State = null,
                    Tier = competitorTier,
                    Website = null
                };

//                Console.WriteLine(competitor);
                try
                {
                    competitors.Add(competitor);
                    var res = priceContext.SaveChanges();
                    
                    if (res != 0)
                    {
                        Console.WriteLine("restrue" + res);
                        status = true;
                    }
                    else
                    {
                        Console.WriteLine("restruefalse" + res);
                        status = false;
                    }
                   
                }
                catch(Exception e)
                {
                    status = false;
                    Console.WriteLine(e);
                }

                if (status)
                {
                    response = new AddCompetitorResponse()
                    {
                        Status = "succedd to add new competitor"
                    };
                }
                else
                {
                    response = new AddCompetitorResponse()
                    {
                        Status = "fail to add new competitor"
                    };
                }

                return Task.FromResult(response);
            }
        }



        public override Task<AllStateCategoryTypesResponse> GetAllStateProductCategories(
            AllStateCategoryTypesRequest request, ServerCallContext context)
        {
            using (var priceContext = new pricecompContext())
            {
                //                var categories = priceContext.Stateassignment.ToList();
                var categories =
                    from sm in priceContext.Stateassignment
                    select new
                    {
                        Id = sm.Id,
                        Category = sm.Category,
                        State = sm.State
                    };

                RepeatedField<StateCategory> categoryDaily = new RepeatedField<StateCategory>();
                RepeatedField<StateCategory> categoryMondayAndThursday = new RepeatedField<StateCategory>();
                RepeatedField<StateCategory> categoryTuesdayAndFriday = new RepeatedField<StateCategory>();
                RepeatedField<StateCategory> categoryWednesdayAndSaturday = new RepeatedField<StateCategory>();
                RepeatedField<StateCategory> categoryUnassigned = new RepeatedField<StateCategory>();

                foreach (var category in categories)
                {
                    StateCategory categoryItem = new StateCategory()
                    {
                        Id = category.Id,
                        Name = category.Category,
                        Category = category.State
                    };

                    int index = Int32.Parse(category.State.Substring(0, 1));
                    switch (index)
                    {
                        case 0:
                            {
                                categoryDaily.Add(categoryItem);
                                break;
                            }
                        case 1:
                            {
                                categoryMondayAndThursday.Add(categoryItem);
                                break;
                            }
                        case 2:
                            {
                                categoryTuesdayAndFriday.Add(categoryItem);
                                break;
                            }
                        case 3:
                            {
                                categoryWednesdayAndSaturday.Add(categoryItem);
                                break;
                            }
                        default:
                            {
                                categoryUnassigned.Add(categoryItem);
                                break;
                            }
                    }
                }

                AllStateCategoryTypesResponse response = new AllStateCategoryTypesResponse()
                {
                    CategoryDaily = { categoryDaily },
                    CategoryMondayAndThursday = { categoryMondayAndThursday },
                    CategoryTuesdayAndFriday = { categoryTuesdayAndFriday },
                    CategoryWednesdayAndSaturday = { categoryWednesdayAndSaturday },
                    CategoryUnassigned = { categoryUnassigned }
                };

                Console.WriteLine(response);

                return Task.FromResult(response);
            }
        }

        public override Task<UpdateCategoryStateResponse> UpdateCategoryState(UpdateCategoryStateRequest request,
            ServerCallContext context)
        {
            using (var priceContext = new pricecompContext())
            {
                UpdateCategoryStateResponse response;

                var updatedCatogories = request.UpdatedCategories;
                List<Int32> updatedRecord = new List<Int32>();

                Console.WriteLine("updatedCompetitors" + updatedCatogories);
                try
                {
                    foreach (var category in updatedCatogories)
                    {
                        var record =
                            priceContext.Stateassignment.FirstOrDefault(
                                item => item.Id == category.Id);

                        if (record != null)
                        {
                            record.State = category.Category;
                            priceContext.Update(record);
                            var res = priceContext.SaveChanges();

                            updatedRecord.Add(res);

                        }
                        else
                        {
                            updatedRecord.Add(0);
                        }
                    }

                    foreach (var record in updatedRecord)
                    {
                        Console.WriteLine("record" + record);
                    }

                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return Task.FromResult(new UpdateCategoryStateResponse()
                    {
                        Status = "update state fail"
                    });
                }

                if (updatedRecord.Contains(0))
                {
                    return Task.FromResult(new UpdateCategoryStateResponse()
                    {
                        Status = "update state fail"
                    });
                }
                else
                {
                    return Task.FromResult(new UpdateCategoryStateResponse()
                    {
                        Status = "update state success"
                    });
                }
            }
        }

        public override Task<GetCategoryMarginResponse> GetCategoryMargin(GetCategoryMarginRequest reqeust,
            ServerCallContext context)
        {
            using (var priceContext = new pricecompContext())
            {
                

                var categoryMargin = new RepeatedField<GetCategoryMarginResponseItem>();

                var categoriesMargin =
                    from cm in priceContext.Categorymargin
                    select new
                    {
                        Id = cm.Id,
                        Name = cm.Category,
                        Target = cm.Targetmargin,
                        Start = cm.Pricelow,
                        End = cm.Pricehigh
                    };

                foreach (var category in categoriesMargin)
                {
                    var margin = new CategoryMargin()
                    {
                        Target = (float)category.Target,
                        Start = (int)category.Start,
                        End = (int)category.End
                    };

                    var categoryMarginItem = new GetCategoryMarginResponseItem()
                    {
                        Id = category.Id,
                        Name = category.Name,
                        Margin = margin
                    };

                    categoryMargin.Add(categoryMarginItem);
                }

                var reponse = new GetCategoryMarginResponse()
                {
                    CategoryMargins = { categoryMargin }
                };

                return Task.FromResult(reponse);
            }
        }

        public override Task<AddCategoryMarginResponse> AddCategoryMargin(AddCategoryMarginRequest request,
            ServerCallContext conetxt)
        {
            using (var priceContext = new pricecompContext())
            {
                var categorymargin = priceContext.Categorymargin;
                AddCategoryMarginResponse response;

//                var index = categorymargin.OrderByDescending(item => item.Id).FirstOrDefault().Id + 1;
                Console.WriteLine("request", request);
                var margin = Double.Parse(request.Margin.ToString("0.##"));
                var addedCategoryMargin = new Categorymargin()
                {
                    Category = request.Category,
                    Id = request.Id,
                    Targetmargin = margin,
                    Pricelow = request.PriceRangeStart,
                    Pricehigh = request.PriceRangeEnd
                };

                var status = false;

                try
                {
                    categorymargin.Add(addedCategoryMargin);
                    var res = priceContext.SaveChanges();

                    if (res != 0)
                    {
                        status = true;
                    }
                    else
                    {
                        status = false;
                    }
                }
                catch (Exception e)
                {
                    status = false;
                }

                if (status)
                {
                    response = new AddCategoryMarginResponse()
                    {
                        Status = "add successful"
                    };
                    return Task.FromResult(response);
                }
                else
                {
                    response = new AddCategoryMarginResponse()
                    {
                        Status = "fail to add new rule"
                    };
                    return Task.FromResult(response);
                }
            }
        }

        public override Task<DeleteCategoryMarginResponse> DeleteCategoryMargin(DeleteCategoryMarginRequest request,
            ServerCallContext context)
        {
            using (var priceContext = new pricecompContext())
            {

                DeleteCategoryMarginResponse response;
                var index = request.Id;
                var record = priceContext.Categorymargin.FirstOrDefault(item => item.Id == index);


                var status = false;

                if (record != null)
                {
                    try
                    {
                        priceContext.Categorymargin.Remove(record);
                        priceContext.SaveChanges();
                        status = true;
                    }catch(Exception e)
                    {
                        status = false;
                    }
                }

                if (status)
                {
                    response = new DeleteCategoryMarginResponse()
                    {
                        Status = "success"
                    };
                }
                else
                {
                    response = new DeleteCategoryMarginResponse()
                    {
                        Status = "fail"
                    };
                }

                return Task.FromResult(response);
            }
        }
    }
}
