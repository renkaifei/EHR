using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public class RadiologyRepository
    {
        private EHRDbContext m_dbContext;

        public RadiologyRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<Radiology> GetOneByPatientCaseId(int patientCaseId)
        {
            IQueryable<Radiology> query = m_dbContext.Radiologys;
            if (patientCaseId != 0) query = query.Where(item => item.PatientCaseId == patientCaseId);
            return query;
        }

        public IQueryable<Radiology> GetOneById(int id) {
            IQueryable<Radiology> query = m_dbContext.Radiologys;
            if (id != 0) query = query.Where(item => item.Id == id);
            return query;
        }

        public async Task SaveChangesAsync()
        {
            await m_dbContext.SaveChangesAsync();
        }
    }
}
