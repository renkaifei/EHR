using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using EHRRepository;
using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public sealed class PatientCaseTumorMarkerRepository
    {
        private readonly EHRDbContext m_dbContext;

        public PatientCaseTumorMarkerRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<PatientCaseTumorMarker> GetListByPatientCaseId(int patientCaseId,int tumorMarkerId)
        {
            IQueryable<PatientCaseTumorMarker> query = m_dbContext.PathologyTumorMarkers;
            if (patientCaseId != 0) query = query.Where(item => item.PatientCaseId == patientCaseId);
            if (tumorMarkerId != 0) query = query.Where(item => item.TumorMarkerId == tumorMarkerId);
            return query;
        }
    }
}
