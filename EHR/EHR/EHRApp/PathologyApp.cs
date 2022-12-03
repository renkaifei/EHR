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
    public sealed class PathologyApp
    {
        private readonly PathologyRepository m_pathologyRepository;

        public PathologyApp(PathologyRepository pathologyRepository)
        {
            m_pathologyRepository = pathologyRepository;
        }

        public async Task<Pathology> GetOneByIdAsync(int id)
        {
            IQueryable<Pathology> queryPathology = m_pathologyRepository.GetOneById(id);
            queryPathology = queryPathology.Include(item => item.PathologyTumorMarkers);
            return await queryPathology.AsNoTracking().FirstOrDefaultAsync().ConfigureAwait(false);
        }

        public async Task<Pathology> UpdateClinicalNotesAsync(int pathologyId,string clinicalNotes)
        {
            IQueryable<Pathology> queryPathology = m_pathologyRepository.GetOneById(pathologyId);
            Pathology pathology = await queryPathology.FirstOrDefaultAsync();
            pathology.ClinicalNotes = clinicalNotes;
            pathology.UpdateTime = DateTime.Now;
            await m_pathologyRepository.SaveChangesAsync().ConfigureAwait(false);
            return pathology;
        }
    }
}
