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
        private readonly TumorMarkerRepository m_tumorMarkerRepository;
        private readonly PatientCaseTumorMarkerRepository m_patientCaseTumorMarkerRepository;

        public PatientCaseTumorMarkerApp(PatientCaseTumorMarkerRepository patientCaseTumorMarkerRepository)
        {
            m_patientCaseTumorMarkerRepository = patientCaseTumorMarkerRepository;
        }

        public async Task<List<PatientCaseTumorMarker>> GetListByPatientCaseIdAsync(int patientCaseId)
        {
            List<PatientCaseTumorMarker> lst = new List<PatientCaseTumorMarker>();
            List<PatientCaseTumorMarker> tempList = await m_patientCaseTumorMarkerRepository
                .GetListByPatientCaseId(patientCaseId,0).ToListAsync().ConfigureAwait(false);
            if(tempList != null) lst.AddRange(tempList);
            return lst;
        }

        public async Task<List<PatientCaseTumorMarker>> GetCAListByPatientCaseIdAsync(int patientCaseId)
        {
            List<PatientCaseTumorMarker> lst = new List<PatientCaseTumorMarker>();
            IQueryable<TumorMarker> queryTumorMaker = m_tumorMarkerRepository.GetOneByName("CA");
            TumorMarker tumorMarker = await queryTumorMaker.FirstOrDefaultAsync();
            if (tumorMarker == null) return lst;
            List<PatientCaseTumorMarker> tempList = await m_patientCaseTumorMarkerRepository
                .GetListByPatientCaseId(patientCaseId, tumorMarker.Id).ToListAsync().ConfigureAwait(false);
            if (tempList != null) lst.AddRange(tempList);
            return lst;
        }
    }
}
