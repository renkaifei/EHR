using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public class AllergyRepository
    {
        private EHRDbContext m_dbContext;

        public AllergyRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<Allergy> GetAll()
        {
            return m_dbContext.Allergies;
        }
    }
}
