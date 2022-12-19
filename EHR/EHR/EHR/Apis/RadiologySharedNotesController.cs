using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using EHR.Dto;
using EHR.Models;
using EHRApp;
using EHRDomain;
using EHRUtil;

namespace EHR.Apis
{
    [ApiController]
    public sealed class RadiologySharedNotesController : ControllerBase
    {
        private readonly RadiologySharedNotesApp m_radiologySharedNotesApp;

        public RadiologySharedNotesController(RadiologySharedNotesApp radiologySharedNotesApp)
        {
            m_radiologySharedNotesApp = radiologySharedNotesApp;
        }

        [HttpPost]
        [Route("api/radiologySharedNotes/getOneById")]
        public async Task<OutputBaseViewModel> GetOneByIdAsync([FromForm] int id)
        {
            ResultViewModel<RadiologySharedNotes> result = new ResultViewModel<RadiologySharedNotes>();
            try
            {
                result.Data = await m_radiologySharedNotesApp.GetOneByIdAsync(id).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 101001;
                result.Message = ex.GetMessage();
            }
            return result;
        }

        [HttpPost]
        [Route("api/radiologySharedNotes/add")]
        public async Task<OutputBaseViewModel> AddAsync([FromBody]RadiologySharedNotesDto radiologySharedNotesDto)
        {
            ResultViewModel<RadiologySharedNotes> result = new ResultViewModel<RadiologySharedNotes>();
            try
            {
                RadiologySharedNotes radiologySharedNotes = radiologySharedNotesDto.ToDomain();
                radiologySharedNotes.CreateTime = DateTime.Now;
                radiologySharedNotes.UpdateTime = DateTime.Now;
                result.Data = await m_radiologySharedNotesApp.AddAsync(radiologySharedNotes).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 101002;
                result.Message = ex.GetMessage();
            }
            return result;
        }

        [HttpPost]
        [Route("api/radiologySharedNotes/update")]
        public async Task<OutputBaseViewModel> UpdateAsync([FromBody] RadiologySharedNotesDto radiologySharedNotesDto)
        {
            ResultViewModel<RadiologySharedNotes> result = new ResultViewModel<RadiologySharedNotes>();
            try
            {
                RadiologySharedNotes radiologySharedNotes = radiologySharedNotesDto.ToDomain();
                radiologySharedNotes.CreateTime = DateTime.Now;
                radiologySharedNotes.UpdateTime = DateTime.Now;
                await m_radiologySharedNotesApp.UpdateAsync(radiologySharedNotes).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 101002;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
