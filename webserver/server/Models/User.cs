using System;
using System.Collections.Generic;

namespace server.Models
{
    public partial class User
    {
        public int Userid { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
