using System;
using System.Collections.Generic;

namespace server.Models
{
    public partial class Product1
    {
        public int Productid { get; set; }
        public string Productcode { get; set; }
        public string Productname { get; set; }
        public string Productdescription { get; set; }
        public double? Ourprice { get; set; }
        public string Keywords { get; set; }
    }
}
