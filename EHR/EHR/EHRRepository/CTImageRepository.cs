using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public class CTImageRepository
    {
        private EHRDbContext m_dbContext;

        public CTImageRepository(EHRDbContext dbContext)
        {
            this.m_dbContext = dbContext;
        }

        public IQueryable<CTImage> GetListByRadiologyId(int radiologyId)
        {
            IQueryable<CTImage> query = m_dbContext.CTImages;
            if (radiologyId != 0) query = query.Where(item => item.RadiologyId == radiologyId);
            return query;
        }
    }
}
