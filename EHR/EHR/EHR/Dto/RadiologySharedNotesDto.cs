using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using EHRDomain;

namespace EHR.Dto
{
    public class RadiologySharedNotesDto
    {
        public int Id { get; set; }

        public string SharedNotes { get; set; }

        public int PatientCaseId { get; set; }

        public RadiologySharedNotes ToDomain()
        {
            RadiologySharedNotes temp = new RadiologySharedNotes();
            temp.Id = Id;
            temp.SharedNotes = SharedNotes;
            temp.PatientCaseId = PatientCaseId;
            return temp;
        }
    }
}
