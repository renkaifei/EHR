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
    public sealed class DoctorController : ControllerBase
    {
        private readonly DoctorApp m_doctorApp;

        public DoctorController(DoctorApp doctorApp)
        {
            m_doctorApp = doctorApp;
        }

        [Route("api/doctor/getOneById")]
        [HttpPost]
        public async Task<OutputBaseViewModel> GetOneByIdAsync([FromForm]int id)
        {
            ResultViewModel<Doctor> result = new ResultViewModel<Doctor>();
            try
            {
                result.Data = await m_doctorApp.GetOneByIdAsync(id).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 100501;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
