using EHR.Models;
using EHRApp;
using EHRDomain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EHRUtil;

namespace EHR.Apis
{
    [ApiController]
    public sealed class CareOptionController : ControllerBase
    {
        private readonly CareOptionApp _careOptionApp;

        public CareOptionController(CareOptionApp careOptionApp)
        {
            this._careOptionApp = careOptionApp;
        }

        [HttpPost]
        [Route("api/careOpion/getAll")]
        public async Task<OutputBaseViewModel> GetAll()
        {
            ResultsViewModel<CareOption> result = new ResultsViewModel<CareOption>();
            try
            {
                result.Data = await _careOptionApp.GetAll();
            }
            catch (Exception ex)
            {
                result.Status = 101201;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
