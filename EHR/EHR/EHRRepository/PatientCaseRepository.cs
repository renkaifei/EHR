using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public class PatientCaseRepository
    {
        private EHRDbContext m_dbContext;

        public PatientCaseRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<PatientCase> GetOne(int id)
        {
            IQueryable<PatientCase> query = m_dbContext.PatientCases;
            if (id != 0) query = query.Where(item => item.Id == id);
            return query;
        }
    }
}
