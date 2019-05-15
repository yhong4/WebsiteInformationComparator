using System;
using System.Collections.Generic;

namespace server.Models
{
    public partial class Settings
    {
        public int Settingid { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
    }
}
