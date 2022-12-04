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
    public sealed class RadiologyReportController : ControllerBase
    {
        private readonly RadiologyReportApp m_radiologyReportApp;

        public RadiologyReportController(RadiologyReportApp radiologyReportApp)
        {
            m_radiologyReportApp = radiologyReportApp;
        }

        [HttpPost]
        [Route("api/radiologyReport/getOneById")]
        public async Task<OutputBaseViewModel> GetOneByIdAsync([FromForm] int id)
        {
            ResultViewModel<RadiologyReport> result = new ResultViewModel<RadiologyReport>();
            try
            {
                result.Data = await m_radiologyReportApp.GetOneByIdAsync(id).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 100901;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
