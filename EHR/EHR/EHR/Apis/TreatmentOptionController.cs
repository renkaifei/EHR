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
    public class TreatmentOptionController : ControllerBase
    {
        private TreatmentOptionApp _treatmentOptionApp;

        public TreatmentOptionController(TreatmentOptionApp treatmentOptionApp)
        {
            _treatmentOptionApp = treatmentOptionApp;
        }

        [HttpPost]
        [Route("api/TreatmentOption/GetListByQuestionId")]
        public async Task<OutputBaseViewModel> GetListByQuestionIdAsync([FromForm]int questionId)
        {
            ResultsViewModel<TreatmentOption> result = new ResultsViewModel<TreatmentOption>();
            try
            {
                result.Data = await _treatmentOptionApp.GetListByQuestionId(questionId);
            }
            catch (Exception ex)
            {
                result.Status = 101601;
                result.Message = ex.GetMessage();
            }
            return result;
        }

        [HttpPost]
        [Route("api/TreatmentOption/GetAll")]
        public async Task<OutputBaseViewModel> GetAll()
        {
            ResultsViewModel<TreatmentOption> result = new ResultsViewModel<TreatmentOption>();
            try
            {
                result.Data = await _treatmentOptionApp.GetAll();
            }
            catch (Exception ex)
            {
                result.Status = 101602;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
