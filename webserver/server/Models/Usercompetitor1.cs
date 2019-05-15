using System;
using System.Collections.Generic;

namespace server.Models
{
    public partial class Usercompetitor1
    {
        public int Id { get; set; }
        public int Userid { get; set; }
        public int Competitorid { get; set; }

        public virtual Competitor Competitor { get; set; }
        public virtual User1 User { get; set; }
    }
}
