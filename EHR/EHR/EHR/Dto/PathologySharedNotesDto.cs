using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using EHRDomain;

namespace EHR.Dto
{
    public class PathologySharedNotesDto
    {
        public int Id { get; set; }

        public string SharedNotes { get; set; }

        public int PatientCaseId { get; set; }

        public PathologySharedNotes ToDomain()
        {
            PathologySharedNotes temp = new PathologySharedNotes();
            temp.Id = Id;
            temp.SharedNotes = SharedNotes;
            temp.PatientCaseId = PatientCaseId;
            return temp;
        }
    }
}
