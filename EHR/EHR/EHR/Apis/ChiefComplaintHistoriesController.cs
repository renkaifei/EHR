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
    public sealed class ChiefComplaintHistoriesController : ControllerBase
    {
        private readonly ChiefComplaintHistoriesApp m_chiefComplaintHistoriesApp;

        public ChiefComplaintHistoriesController(ChiefComplaintHistoriesApp chiefComplaintHistoriesApp)
        {
            m_chiefComplaintHistoriesApp = chiefComplaintHistoriesApp;
        }

        [HttpPost]
        [Route("api/chiefComplaintHistories/getOneById")]
        public async Task<OutputBaseViewModel> GetOneByIdAsync([FromForm]int id)
        {
            ResultViewModel<ChiefComplaintHistories> result = new ResultViewModel<ChiefComplaintHistories>();
            try
            {
                result.Data = await m_chiefComplaintHistoriesApp.GetOneByIdAsync(id).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 100601;
                result.Message = ex.GetMessage();
            }
            return result;
        }

        [HttpPost]
        [Route("api/chiefComplaintHistories/add")]
        public async Task<OutputBaseViewModel> AddAsync([FromBody]ChiefComplaintHistoriesDto chiefComplaintHistoriesDto)
        {
            ResultViewModel<ChiefComplaintHistories> result = new ResultViewModel<ChiefComplaintHistories>();
            try
            {
                result.Data = await m_chiefComplaintHistoriesApp.AddAsync(chiefComplaintHistoriesDto.ToDomain()).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 100602;
                result.Message = ex.GetMessage();
            }
            return result;
        }

        [HttpPost]
        [Route("api/chiefComplaintHistories/update")]
        public async Task<OutputBaseViewModel> UpdateAsync([FromBody]ChiefComplaintHistoriesDto chiefComplaintHistoriesDto)
        {
            ResultViewModel<ChiefComplaintHistories> result = new ResultViewModel<ChiefComplaintHistories>();
            try
            {
                result.Data = await m_chiefComplaintHistoriesApp.UpdateAsync(chiefComplaintHistoriesDto.ToDomain()).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                result.Status = 100602;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }


}
