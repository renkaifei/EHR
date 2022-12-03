using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRDomain
{
    public class PathologySharedNotes
    {
        public int Id { get; set; }

        public string SharedNotes { get; set; }

        public int PatientCaseId { get; set; }

        public DateTime CreateTime { get; set; }

        public DateTime UpdateTime { get; set; }
    }
}
