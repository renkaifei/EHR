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
    public sealed class TumorMarkerController : ControllerBase
    {
        private readonly TumorMarkerApp m_tumorMarkerApp;

        public TumorMarkerController(TumorMarkerApp tumorMarkerApp)
        {
            m_tumorMarkerApp = tumorMarkerApp;
        }

        [HttpPost]
        [Route("api/tumormarker/getall")]
        public async Task<OutputBaseViewModel> GetAllAsync()
        {
            ResultsViewModel<TumorMarker> result = new ResultsViewModel<TumorMarker>();
            try
            {
                result.Data = await m_tumorMarkerApp.GetAllAsync().ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 100301;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
