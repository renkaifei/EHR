using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRDomain
{
    public class CareOption
    {
        public int Id { get; set; }

        public string Question { get; set; }

        public string Answer { get; set; }

        public string OptionType { get; set; }

        public string CreateTime { get; set; }

        public string UpdateTime { get; set; }

        public string OrderNo { get; set; }
    }
}
