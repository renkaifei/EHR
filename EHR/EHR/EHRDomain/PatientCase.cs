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

        public int? ChiefComplaitHistoriesId { get; set; }

        public int? PathologyId { get; set; }

        public int? PathologyReportId { get; set; }

        public int? PathologySharedNotesId { get; set; }

        public int? RadiologyId { get; set; }

        public DateTime CreateTime { get; set; }

        public DateTime UpdateTime { get; set; }

        public Patient Patient { get; set; }

        public Doctor Attending { get; set; }

        public Doctor Consultant { get; set; }

        public PathologyReport PathologyReport {get;set;}

        public PathologySharedNotes PathologySharedNotes { get; set; }

        public List<PatientCaseTumorMarker> PatientCaseTumorMarkers { get; set; }

        public Radiology Radiology { get; set; }

        public ChiefComplaintHistories ChiefComplaintHistories { get; set; }
    }
}
