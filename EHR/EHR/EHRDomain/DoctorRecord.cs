using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRDomain
{
    public class DoctorRecord: EHREntity
    {

        public int? DoctorId { get; set; }

        public int PatientCaseId { get; set; }

        public string Content { get; set; }

        public string RecordType { get; set; }

        public static DoctorRecord CreateEmpty()
        {
            return new DoctorRecord();
        }

        public bool ExistsInDb()
        {
            return this.Id != 0;
        }

        public string Validate()
        {
            List<string> errors = new List<string>();
            if (string.IsNullOrEmpty(Content)) errors.Add("记录内容不能为空");
            if (string.IsNullOrEmpty(RecordType)) errors.Add("记录类型不能为空");
            return string.Join(';', errors);
        }
    }
}
