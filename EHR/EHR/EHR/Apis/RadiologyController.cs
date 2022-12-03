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
    public sealed class RadiologyController : ControllerBase
    {
        private readonly RadiologyApp m_radiologyApp;

        public RadiologyController(RadiologyApp radiologyApp)
        {
            m_radiologyApp = radiologyApp;
        }

        [HttpPost]
        [Route("api/radiology/getonebypatientcaseid")]
        public async Task<OutputBaseViewModel> GetOneByIdAsync([FromForm]int id)
        {
            ResultViewModel<Radiology> result = new ResultViewModel<Radiology>();
            try
            {
                result.Data = await m_radiologyApp.GetOneByIdAsync(id);
            }
            catch (Exception ex)
            {
                result.Status = 100401;
                result.Message = ex.GetMessage();
            }
            return result;
        }

        [HttpPost]
        [Route("api/radiology/updateSharedNotesById")]
        public async Task<OutputBaseViewModel> UpdateSharedNotesByIdAsync([FromForm]int id,[FromForm]string sharedNotes)
        {
            ResultViewModel<Radiology> result = new ResultViewModel<Radiology>();
            try
            {
                result.Data = await m_radiologyApp.UpdateSharedNotesByIdAsync(id,sharedNotes);
            }
            catch (Exception ex)
            {
                result.Status = 100402;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
