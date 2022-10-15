using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using EHRRepository;
using EHRDomain;

namespace EHRApp
{
    public class PathologyApp
    {
        private PathologyRepository m_pathologyRepository;
        private PathologyTumorMarkerRepository m_pathologyTumorMarkerRepository;

        public PathologyApp(PathologyRepository pathologyRepository,
            PathologyTumorMarkerRepository pathologyTumorMarkerRepository)
        {
            m_pathologyRepository = pathologyRepository;
            m_pathologyTumorMarkerRepository = pathologyTumorMarkerRepository;
        }

        public async Task<Pathology> GetOneByIdAsync(int id)
        {
            IQueryable<Pathology> queryPathology = m_pathologyRepository.GetOneById(id);
            queryPathology = queryPathology.Include(item => item.PathologyTumorMarkers)
                            .ThenInclude(item => item.TumorMarker);
            return await queryPathology.AsNoTracking().FirstOrDefaultAsync().ConfigureAwait(false);
        }
    }
}
