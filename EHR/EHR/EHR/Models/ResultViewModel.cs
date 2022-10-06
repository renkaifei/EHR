using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EHR.Models
{
    public class ResultViewModel<T>: OutputBaseViewModel
    {
        public T Data { get; set; }
    }
}
