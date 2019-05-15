using System;
using System.Collections.Generic;

namespace server.Models
{
    public partial class Competitorprice
    {
        public int Id { get; set; }
        public int Productid { get; set; }
        public int Competitorid { get; set; }
        public double? Competitorprice1 { get; set; }
        public string Productname { get; set; }
        public DateTime? Updatetime { get; set; }
    }
}
