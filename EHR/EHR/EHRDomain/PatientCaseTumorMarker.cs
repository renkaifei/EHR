using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRDomain
{
    public class PatientCaseTumorMarker
    {
        public int Id { get; set; }

        public double Value { get; set; }

        public DateTime TestDate { get; set; }

        public int PatientCaseId { get; set; }

        public int TumorMarkerId { get; set; }

        public DateTime CreateTime { get; set; }

        public DateTime UpdateTime { get; set; }

        public PatientCase PatientCase { get; set; }

        public TumorMarker TumorMarker { get; set; }
    }
}
