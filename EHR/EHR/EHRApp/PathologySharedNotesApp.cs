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
    public sealed class PathologySharedNotesApp
    {
        private readonly PathologySharedNotesRepository m_pathologySharedNotesRepository;

        public PathologySharedNotesApp(PathologySharedNotesRepository pathologySharedNotesRepository)
        {
            m_pathologySharedNotesRepository = pathologySharedNotesRepository;
        }

        public async Task<PathologySharedNotes> GetOneByIdAsync(int id)
        {
            return await m_pathologySharedNotesRepository.GetOneById(id).AsNoTracking().FirstOrDefaultAsync()
                .ConfigureAwait(false);
        }
    }
}
