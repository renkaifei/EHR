using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using EHRRepository;
using EHRDomain;

namespace EHRApp
{
    public sealed class PatientCaseTumorMarkerApp
    {
        private readonly PatientCaseTumorMarkerRepository m_patientCaseTumorMarkerRepository;

        public PatientCaseTumorMarkerApp(PatientCaseTumorMarkerRepository patientCaseTumorMarkerRepository)
        {
            m_patientCaseTumorMarkerRepository = patientCaseTumorMarkerRepository;
        }

        public async Task<List<PatientCaseTumorMarker>> GetListByPatientCaseIdAsync(int patientCaseId)
        {
            List<PatientCaseTumorMarker> lst = new List<PatientCaseTumorMarker>();
            List<PatientCaseTumorMarker> tempList = await m_patientCaseTumorMarkerRepository
                .GetListByPatientCaseId(patientCaseId).ToListAsync().ConfigureAwait(false);
            if(tempList != null) lst.AddRange(tempList);
            return lst;
        }
    }
}
