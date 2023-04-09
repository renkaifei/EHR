using EHRDomain;
using EHRRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRApp
{
    public class FrequentlyAskedQuestionApp
    {
        private readonly FrequentlyAskedQuestionRepository _frequentlyAskedQuestionRepository;

        public FrequentlyAskedQuestionApp(FrequentlyAskedQuestionRepository frequentlyAskedQuestionRepository)
        {
            _frequentlyAskedQuestionRepository = frequentlyAskedQuestionRepository;            
        }

        public async Task<List<FrequentlyAskedQuestion>> GetListAsync(string keyWords)
        {
            List<FrequentlyAskedQuestion> frequentlyAskedQuestions = await _frequentlyAskedQuestionRepository.GetList(keyWords).ToListAsync();
            return frequentlyAskedQuestions;
        }
    }
}
