using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRDomain
{
    public class Patient:User
    {
        public Patient()
        {
            UserType = 1;
        }

        public List<PatientCase> PatientCases { get; set; }
    }
}
