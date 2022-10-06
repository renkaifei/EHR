using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using EHRRepository.DbContexts;

using EHRDomain;

namespace EHRRepository
{
    public class TumorMarkerRepository
    {
        private EHRDbContext m_dbContext;

        public TumorMarkerRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<TumorMarker> GetAll()
        {
            return m_dbContext.TumorMarkers;
        }
    }
}
