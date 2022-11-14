using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRDomain
{
    public class Radiology
    {
        public int Id { get; set; }

        public string Report { get; set; }

        public string SharedNotes { get; set; }

        public int PatientCaseId { get; set; }

        public PatientCase PatientCase { get; set; }

        public List<CTImage> CTImages { get; set; }
    }
}
