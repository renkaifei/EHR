using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using EHR.Models;
using EHRApp;
using EHRDomain;
using EHRUtil;

namespace EHR.Apis
{
    [ApiController]
    public sealed class PatientCaseController : ControllerBase
    {
        private readonly PatientCaseApp m_patientCaseApp;

        public PatientCaseController(PatientCaseApp patientCaseApp)
        {
            m_patientCaseApp = patientCaseApp;
        }

        [HttpPost]
        [Route("api/patientcase/getOneById")]
        public async Task<OutputBaseViewModel> GetOneById([FromForm]int id)
        {
            ResultViewModel<PatientCase> result = new ResultViewModel<PatientCase>();
            try
            {
                result.Data = await m_patientCaseApp.GetOneAsync(id).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 100201;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
