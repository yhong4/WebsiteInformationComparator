using System;
using System.Collections.Generic;

namespace server.Models
{
    public partial class Competitor
    {
        public Competitor()
        {
            Usercompetitor = new HashSet<Usercompetitor>();
            Usercompetitor1 = new HashSet<Usercompetitor1>();
        }

        public int Competitorid { get; set; }
        public string Name { get; set; }
        public string State { get; set; }
        public string Website { get; set; }
        public string Nameonstaticice { get; set; }
        public string Dataextractpattern { get; set; }

        public virtual ICollection<Usercompetitor> Usercompetitor { get; set; }
        public virtual ICollection<Usercompetitor1> Usercompetitor1 { get; set; }
    }
}
