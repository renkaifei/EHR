using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRDomain
{
    public class TumorMarker
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string FullName { get; set; }

        public double MinValue { get; set; }

        public double MaxValue { get; set; }

        public string Unit { get; set; }

        public DateTime CreateTime { get; set; }

        public DateTime UpdateTime { get; set; }

        public List<PatientCaseTumorMarker> PathologyTumorMarkers { get; set; }
    }
}
