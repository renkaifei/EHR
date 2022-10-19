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

        public Patient Patient { get; set; } 

        public Pathology Pathology { get; set; }
    }
}
