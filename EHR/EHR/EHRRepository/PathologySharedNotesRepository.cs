using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public sealed class PathologySharedNotesRepository
    {
        private readonly EHRDbContext m_dbContext;

        public PathologySharedNotesRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<PathologySharedNotes> GetOneById(int id)
        {
            IQueryable<PathologySharedNotes> query = m_dbContext.PathologySharedNotes;
            query = query.Where(item => item.Id == id);
            return query;
        }

        public void Add(PathologySharedNotes pathologySharedNotes)
        {
            m_dbContext.PathologySharedNotes.Add(pathologySharedNotes);
        }

        public async Task SaveChangesAsync()
        {
            await m_dbContext.SaveChangesAsync().ConfigureAwait(false);
        }
    }
}
