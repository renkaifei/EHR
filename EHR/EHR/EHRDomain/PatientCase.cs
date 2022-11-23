using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRDomain
{
    public class PatientCase
    {
        public int Id { get; set; }

        public int PatientId { get; set; }

        public int AttendingId { get; set; }

        public int ConsultantId { get; set; }

        public DateTime? AdmittedDate { get; set; }

        public string Location { get; set; }

        public Patient Patient { get; set; }

        public Doctor Attending { get; set; }

        public Doctor Consultant { get; set; }

        public Pathology Pathology { get; set; }

        public Radiology Radiology { get; set; }
    }
}
