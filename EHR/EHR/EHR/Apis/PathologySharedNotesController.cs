using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using EHR.Models;
using EHR.Dto;
using EHRApp;
using EHRDomain;
using EHRUtil;

namespace EHR.Apis
{
    [ApiController]
    public sealed class PathologySharedNotesController : ControllerBase
    {
        private readonly PathologySharedNotesApp m_pathologySharedNotesApp;

        public PathologySharedNotesController(PathologySharedNotesApp pathologySharedNotesApp)
        {
            m_pathologySharedNotesApp = pathologySharedNotesApp;
        }

        [HttpPost]
        [Route("api/pathologySharedNotes/getOneById")]
        public async Task<OutputBaseViewModel> GetOneByIdAsync([FromForm] int id)
        {
            ResultViewModel<PathologySharedNotes> result = new ResultViewModel<PathologySharedNotes>();
            try
            {
                result.Data = await m_pathologySharedNotesApp.GetOneByIdAsync(id).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 100801;
                result.Message = ex.GetMessage();
            }
            return result;
        }

        [HttpPost]
        [Route("api/pathologySharedNotes/add")]
        public async Task<OutputBaseViewModel> AddAsync([FromBody]PathologySharedNotesDto pathologySharedNotesDto)
        {
            ResultViewModel<PathologySharedNotes> result = new ResultViewModel<PathologySharedNotes>();
            try
            {
                PathologySharedNotes pathologySharedNotes = pathologySharedNotesDto.ToDomain();
                pathologySharedNotes.CreateTime = DateTime.Now;
                pathologySharedNotes.UpdateTime = DateTime.Now;
                result.Data = await m_pathologySharedNotesApp.AddAsync(pathologySharedNotes).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 100802;
                result.Message = ex.GetMessage();
            }
            return result;
        }

        [HttpPost]
        [Route("api/pathologySharedNotes/update")]
        public async Task<OutputBaseViewModel> UpdateAsync([FromBody] PathologySharedNotesDto pathologySharedNotesDto)
        {
            ResultViewModel<PathologySharedNotes> result = new ResultViewModel<PathologySharedNotes>();
            try
            {
                PathologySharedNotes pathologySharedNotes = pathologySharedNotesDto.ToDomain();
                pathologySharedNotes.CreateTime = DateTime.Now;
                pathologySharedNotes.UpdateTime = DateTime.Now;
                await m_pathologySharedNotesApp.UpdateAsync(pathologySharedNotes).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 100803;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
