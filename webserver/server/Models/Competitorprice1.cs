using System;
using System.Collections.Generic;

namespace server.Models
{
    public partial class Competitorprice1
    {
        public int Id { get; set; }
        public int Productid { get; set; }
        public int Competitorid { get; set; }
        public double? Competitorprice { get; set; }
        public DateTime? Updatetime { get; set; }
    }
}
