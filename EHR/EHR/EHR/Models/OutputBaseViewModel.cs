using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EHR.Models
{
    public class OutputBaseViewModel
    {

        public int Status { get; set; }

        public string Message { get; set; }

        public OutputBaseViewModel()
        {
            Status = 100000;
            Message = "";
        }
    }
}
