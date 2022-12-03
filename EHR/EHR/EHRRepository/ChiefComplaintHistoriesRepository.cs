using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public sealed class ChiefComplaintHistoriesRepository
    {
        private readonly EHRDbContext m_dbContext;

        public ChiefComplaintHistoriesRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<ChiefComplaintHistories> GetOneById(int id)
        {
            IQueryable<ChiefComplaintHistories> query = m_dbContext.ChiefComplaintHistorieses;
            if (id != 0) query = query.Where(item => item.Id == id);
            return query;
        }

        public void Add(ChiefComplaintHistories chiefComplaintHistories)
        {
            m_dbContext.ChiefComplaintHistorieses.Add(chiefComplaintHistories);
        }

        public async Task SaveChangesAsync()
        {
            await m_dbContext.SaveChangesAsync();
        }
    }
}
