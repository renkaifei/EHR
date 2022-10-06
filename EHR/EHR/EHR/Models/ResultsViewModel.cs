using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EHR.Models
{
    public class ResultsViewModel<T>:OutputBaseViewModel
    {
        public List<T> Data { get; set; }

        public int Total { get; set; }
    }
}
