﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRDomain
{
    public class Patient:User
    {
        public string MRN { get; set; }

        public List<PatientCase> PatientCases { get; set; }

        public List<PatientAllergy> PatientAllergies { get; set; }
    }
}
