using EHRDomain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EHR.Dto
{
    public class DoctorRecordDto
    {
        public int Id { get; set; }

        public int PatientCaseId { get; set; }

        public string Content { get; set; }

        public string RecordType { get; set; }

        public DateTime CreateTime { get; set; }

        public DateTime UpdateTime { get; set; }

        public DoctorRecord ToDomain()
        {
            DoctorRecord doctorRecord = new DoctorRecord();
            doctorRecord.Id = Id;
            doctorRecord.PatientCaseId = PatientCaseId;
            doctorRecord.Content = Content;
            doctorRecord.RecordType = RecordType;
            doctorRecord.CreateTime = CreateTime;
            doctorRecord.UpdateTime = UpdateTime;
            return doctorRecord;
        }
    }
}
