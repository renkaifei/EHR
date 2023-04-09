using EHRDomain;
using EHRRepository.DbContexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRRepository
{
    public class TreatmentMethodRepository
    {
        private EHRDbContext _dbContext;

        public TreatmentMethodRepository(EHRDbContext dbContext)
        {
            this._dbContext = dbContext;
        }

        public IQueryable<TreatmentMethod> GetAll()
        {
            return this._dbContext.TreatmentMethods;
        }
    }
}
