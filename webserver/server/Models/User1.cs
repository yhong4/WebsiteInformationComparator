using System;
using System.Collections.Generic;

namespace server.Models
{
    public partial class User1
    {
        public User1()
        {
            Usercompetitor = new HashSet<Usercompetitor>();
            Usercompetitor1 = new HashSet<Usercompetitor1>();
        }

        public int Userid { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Usercompetitor> Usercompetitor { get; set; }
        public virtual ICollection<Usercompetitor1> Usercompetitor1 { get; set; }
    }
}
