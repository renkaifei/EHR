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
    public class PatientController : ControllerBase
    {
        private PatientApp m_patientApp;

        public PatientController(PatientApp patientApp)
        {
            m_patientApp = patientApp;
        }

        [HttpPost]
        [Route("api/patient/getone")]
        [Produces("application/json")]
        public async Task<OutputBaseViewModel> GetOneAsync(int patientId)
        {
            ResultViewModel<Patient> result = new ResultViewModel<Patient>();
            try
            {
                Patient patient = await m_patientApp.GetOneAsync(patientId);
                result.Data = patient;
            }
            catch (Exception ex)
            {
                result.Status = 100001;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
