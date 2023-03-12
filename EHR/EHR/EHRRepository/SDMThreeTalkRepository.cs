using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public class SDMThreeTalkRepository
    {
        private EHRDbContext _dbContext;

        public SDMThreeTalkRepository(EHRDbContext dbContext)
        {
            this._dbContext = dbContext;
        }

        public IQueryable<SDMThreeTalk> GetOneByPatientCaseId(int patientCaseId)
        {
            IQueryable<SDMThreeTalk> query = this._dbContext.SDMThreeTalks;
            query = query.Where(item => item.PatientCaseId == patientCaseId);
            return query;
        }
    }
}
