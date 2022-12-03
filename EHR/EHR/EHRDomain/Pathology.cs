using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRDomain
{
    public class Pathology
    {
        public int Id { get; set; }

        public string Report { get; set; }

        public string ClinicalNotes { get; set; }

        public DateTime CreateTime { get; set; }

        public DateTime UpdateTime { get; set; }

        public List<PathologyTumorMarker> PathologyTumorMarkers { get; set; }
    }
}
