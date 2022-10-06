using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public class PatientRepository
    {
        private EHRDbContext m_dbContext;

        public PatientRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<Patient> GetOne(int patientId)
        {
            IQueryable<Patient> query = m_dbContext.Patients;
            if (patientId != 0) query = query.Where(item => item.Id == patientId);
            return query;
        }
    }
}
