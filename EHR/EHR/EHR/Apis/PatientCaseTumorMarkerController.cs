using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using EHR.Models;
using EHRApp;
using EHRDomain;
using EHRUtil;

namespace EHR.Apis
{
    [ApiController]
    public sealed class PatientCaseTumorMarkerController : ControllerBase
    {
        private readonly PatientCaseTumorMarkerApp m_patientCaseTumorMarkerApp;

        public PatientCaseTumorMarkerController(PatientCaseTumorMarkerApp patientCaseTumorMarkerApp)
        {
            m_patientCaseTumorMarkerApp = patientCaseTumorMarkerApp;
        }

        [HttpPost]
        [Route("api/patientCaseTumorMarker/getListByPatientCaseId")]
        public async Task<OutputBaseViewModel> GetListByPatientCaseId([FromForm]int patientCaseId)
        {
            ResultsViewModel<PatientCaseTumorMarker> result = new ResultsViewModel<PatientCaseTumorMarker>();
            try
            {
                result.Data = await m_patientCaseTumorMarkerApp.GetListByPatientCaseIdAsync(patientCaseId)
                    .ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 100101;
                result.Message = ex.GetMessage();
            }
            return result;
        }

        [HttpPost]
        [Route("api/patientCaseTumorMarker/getCAListByPatientCaseId")]
        public async Task<OutputBaseViewModel> GetCAListByPatientCaseId([FromForm] int patientCaseId)
        {
            ResultsViewModel<PatientCaseTumorMarker> result = new ResultsViewModel<PatientCaseTumorMarker>();
            try
            {
                result.Data = await m_patientCaseTumorMarkerApp.GetCAListByPatientCaseIdAsync(patientCaseId)
                    .ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 100102;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
