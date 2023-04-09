using EHRDomain;
using EHRRepository.DbContexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EHRRepository
{
    public class FrequentlyAskedQuestionRepository
    {
        private EHRDbContext _dbContext;

        public FrequentlyAskedQuestionRepository(EHRDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IQueryable<FrequentlyAskedQuestion> GetList(string keywords)
        {
            return _dbContext.FrequentlyAskedQuestions.Where(item => EF.Functions.Like(item.Question, $"%{keywords}%"));
        }
    }
}
