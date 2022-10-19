using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public class PathologyRepository
    {
        private EHRDbContext m_dbContext;

        public PathologyRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<Pathology> GetOneById(int id)
        {
            IQueryable<Pathology> query = m_dbContext.Pathologys.Where(item => item.Id == id);
            return query;
        }

        public IQueryable<Pathology> GetOneByPatientCaseId(int patientCaseId)
        {
            IQueryable<Pathology> query = m_dbContext.Pathologys.Where(item => item.PatientCaseId == patientCaseId);
            return query;
        }
    }
}
