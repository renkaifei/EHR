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
    public sealed class PathologyReportController : ControllerBase
    {
        private readonly PathologyReportApp m_pathologyReportApp;

        public PathologyReportController(PathologyReportApp pathologyReportApp)
        {
            m_pathologyReportApp = pathologyReportApp;
        }

        [HttpPost]
        [Route("api/pathologyReport/getOneById")]
        public async Task<OutputBaseViewModel> GetOneByIdAsync([FromForm]int id)
        {
            ResultViewModel<PathologyReport> result = new ResultViewModel<PathologyReport>();
            try
            {
                result.Data = await m_pathologyReportApp.GetOneByIdAsync(id).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 100701;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
