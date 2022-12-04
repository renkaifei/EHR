using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public sealed class RadiologySharedNotesRepository
    {
        private readonly EHRDbContext m_dbContext;

        public RadiologySharedNotesRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<RadiologySharedNotes> GetOneById(int id)
        {
            IQueryable<RadiologySharedNotes> query = m_dbContext.RadiologySharedNoteses;
            query = query.Where(item => item.Id == id);
            return query;
        }

        public void Add(RadiologySharedNotes radiologySharedNotes)
        {
            m_dbContext.RadiologySharedNoteses.Add(radiologySharedNotes);
        }

        public async Task SaveChangesAsync()
        {
            await m_dbContext.SaveChangesAsync().ConfigureAwait(false);
        }
    }
}
