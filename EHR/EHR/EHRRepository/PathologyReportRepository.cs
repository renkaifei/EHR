using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public sealed class PathologyReportRepository
    {
        private readonly EHRDbContext m_dbContext;

        public PathologyReportRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<PathologyReport> GetOneById(int id)
        {
            IQueryable<PathologyReport> query = m_dbContext.PathologyReports;
            if (id != 0) query = query.Where(item => item.Id == id);
            return query;
        }
    }
}
