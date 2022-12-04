using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public sealed class RadiologyReportRepository
    {
        private readonly EHRDbContext m_dbContext;

        public RadiologyReportRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<RadiologyReport> GetOne(int id)
        {
            IQueryable<RadiologyReport> query = m_dbContext.RadiologyReports;
            query = query.Where(item => item.Id == id);
            return query;
        }
    }
}
