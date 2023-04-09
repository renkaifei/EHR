using EHRDomain;
using EHRRepository.DbContexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRRepository
{
    public class TreatmentOptionRepository
    {
        private EHRDbContext m_dbContext;

        public TreatmentOptionRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<TreatmentOption> GetListByQuestionId(int questionId)
        {
            IQueryable<TreatmentOption> query = m_dbContext.TreatmentOptions.Where(item => item.QuestionId == questionId);
            return query;
        }
    }
}
