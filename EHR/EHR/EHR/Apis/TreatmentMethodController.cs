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
    public class TreatmentMethodController : ControllerBase
    {
        private TreatmentMethodApp _treatmentMethodApp;

        public TreatmentMethodController(TreatmentMethodApp treatmentMethodApp)
        {
            _treatmentMethodApp = treatmentMethodApp;
        }

        [HttpPost]
        [Route("api/TreatmentMethod/GetAll")]
        public async Task<OutputBaseViewModel> GetAllAsync()
        {
            ResultsViewModel<TreatmentMethod> result = new ResultsViewModel<TreatmentMethod>();
            try
            {
                result.Data = await _treatmentMethodApp.GetAllAsync();
            }
            catch (Exception ex)
            {
                result.Status = 101501;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
