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
    public sealed class CTImageController : ControllerBase
    {
        private readonly CTImageApp m_cTImageApp;

        public CTImageController(CTImageApp cTImageApp)
        {
            m_cTImageApp = cTImageApp;
        }

        [HttpPost]
        [Route("api/ctImage/getListByPatientCaseId")]
        public async Task<OutputBaseViewModel> GetListByPatientCaseId([FromForm] int patientCaseId)
        {
            ResultsViewModel<CTImage> result = new ResultsViewModel<CTImage>();
            try
            {
                result.Data = await m_cTImageApp.GetListByPatientCaseId(patientCaseId).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 101101;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
