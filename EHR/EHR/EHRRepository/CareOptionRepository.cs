using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EHRDomain;
using EHRRepository.DbContexts;

namespace EHRRepository
{
    public class CareOptionRepository
    {
        private EHRDbContext _dbContext;

        public CareOptionRepository(EHRDbContext dbContext)
        {
            this._dbContext = dbContext;
        }

        public IQueryable<CareOption> GetAll()
        {
            IQueryable<CareOption> query = this._dbContext.CareOptions;
            return query;
        }
    }
}
