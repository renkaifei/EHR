using EHR.Models;
using EHRApp;
using EHRDomain;
using EHRUtil;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EHR.Apis
{
    [ApiController]
    public class FrequentlyAskedQuestionController : ControllerBase
    {
        private FrequentlyAskedQuestionApp _frequentlyAskedQuestionApp;

        public FrequentlyAskedQuestionController(FrequentlyAskedQuestionApp frequentlyAskedQuestionApp)
        {
            _frequentlyAskedQuestionApp = frequentlyAskedQuestionApp;
        }

        [HttpPost]
        [Route("api/FrequentlyAskedQuestion/GetList")]
        public async Task<OutputBaseViewModel> GetListAsync([FromForm] string keywords)
        {
            ResultsViewModel<FrequentlyAskedQuestion> result = new ResultsViewModel<FrequentlyAskedQuestion>();
            try
            {
                result.Data = await _frequentlyAskedQuestionApp.GetListAsync(keywords);
            }
            catch (Exception ex)
            {
                result.Status = 101401;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
