﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRDomain
{
    public class CTImage
    {
        public int Id { get; set; }

        public string ImagePath { get; set; }

        public int PatientCaseId { get; set; }

        public PatientCase PatientCase { get; set; }
    }
}
