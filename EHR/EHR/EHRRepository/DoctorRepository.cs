using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public sealed class DoctorRepository
    {
        private readonly EHRDbContext m_dbContext;

        public DoctorRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<Doctor> GetOneById(int id)
        {
            IQueryable<Doctor> query = m_dbContext.Doctors;
            if (id != 0) query = query.Where(item => item.Id == id);
            return query;
        }
    }
}
