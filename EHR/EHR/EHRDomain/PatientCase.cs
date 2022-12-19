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

        public int? ChiefComplaintHistoriesId { get; set; }

        public int? PathologyReportId { get; set; }

        public int? PathologySharedNotesId { get; set; }

        public int? RadiologyReportId { get; set; }

        public int? RadiologySharedNotesId { get; set; }

        public DateTime CreateTime { get; set; }

        public DateTime UpdateTime { get; set; }

        public Patient Patient { get; set; }

        public Doctor Attending { get; set; }

        public Doctor Consultant { get; set; }

        public PathologyReport PathologyReport {get;set;}

        public PathologySharedNotes PathologySharedNotes { get; set; }

        public RadiologyReport RadiologyReport { get; set; }

        public RadiologySharedNotes RadiologySharedNotes { get; set; }

        public List<PatientCaseTumorMarker> PatientCaseTumorMarkers { get; set; }

        public List<CTImage> CTImages { get; set; }

        public ChiefComplaintHistories ChiefComplaintHistories { get; set; }
    }
}
