using System;
using System.Collections.Generic;

namespace server.Models
{
    public partial class Product
    {
        public int Productid { get; set; }
        public string Productcode { get; set; }
        public string Productname { get; set; }
        public string Productdescription { get; set; }
        public double? Salesprice { get; set; }
        public double? Costprice { get; set; }
        public string Keywords { get; set; }
        public string Category { get; set; }
        public bool? Isupdating { get; set; }
    }
}
