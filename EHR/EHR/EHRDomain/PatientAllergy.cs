using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRDomain
{
    public class PatientAllergy
    {
        public int Id { get; set; }

        public int PatientId { get; set; }

        public int AllergyId { get; set; }

        public Patient Patient { get; set; }

        public Allergy Allergy { get; set; }
    }
}
