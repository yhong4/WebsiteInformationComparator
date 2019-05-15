using System;
using System.Collections.Generic;

namespace server.Models
{
    public partial class Categorymargin
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public double? Targetmargin { get; set; }
        public double? Pricelow { get; set; }
        public double? Pricehigh { get; set; }
    }
}
