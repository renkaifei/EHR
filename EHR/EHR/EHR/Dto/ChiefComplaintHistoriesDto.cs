using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;

using EHRDomain;

namespace EHR.Dto
{
    public class ChiefComplaintHistoriesDto
    {

        public int Id { get; set; }

        public string Content { get; set; }

        public int PatientCaseId { get; set; }

        public ChiefComplaintHistories ToDomain()
        {
            ChiefComplaintHistories temp = new ChiefComplaintHistories();
            temp.Id = Id;
            temp.Content = Content;
            temp.PatientCaseId = PatientCaseId;
            return temp;
        }
    }
}
