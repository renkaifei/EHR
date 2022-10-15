using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using EHRRepository;
using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public class PathologyTumorMarkerRepository
    {
        private EHRDbContext m_dbContext;

        public PathologyTumorMarkerRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<PathologyTumorMarker> GetListByPathologyId(int pathologyId)
        {
            IQueryable<PathologyTumorMarker> query = m_dbContext.PathologyTumorMarkers;
            if (pathologyId != 0) query = query.Where(item => item.PathologyId == pathologyId);
            return query;
        }
    }
}
