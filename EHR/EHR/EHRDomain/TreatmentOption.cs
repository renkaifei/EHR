using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRDomain
{
    public class TreatmentOption
    {
        public int Id { get; set; }

        public int QuestionId { get; set; }

        public int TreatmentMethodId { get; set; }

        public string Content { get; set; }

        public DateTime CreateTime { get; set; }

        public DateTime UpdateTime { get; set; }
    }
}
