using EHR.Dto;
using EHR.Models;
using EHRApp;
using EHRDomain;
using EHRUtil;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EHR.Apis
{
    [ApiController]
    public class DoctorRecordController : ControllerBase
    {
        private DoctorRecordApp _doctorRecordApp;

        public DoctorRecordController(DoctorRecordApp doctorRecordApp)
        {
            this._doctorRecordApp = doctorRecordApp;
        }

        [HttpPost]
        [Route("api/DoctorRecord/GetOneByPatientCaseIdAndRecordType")]
        public async Task<OutputBaseViewModel> GetOneByPatientCaseIdAndRecordTypeAsync([FromForm] int patientCaseId,[FromForm]string recordType)
        {
            ResultViewModel<DoctorRecord> result = new ResultViewModel<DoctorRecord>();
            try
            {
                result.Data = await this._doctorRecordApp.GetOneByPatientCaseIdAndRecordTypeAsync(patientCaseId, recordType);
            }
            catch (Exception ex)
            {
                result.Status = 101301;
                result.Message = ex.GetMessage();
            }
            return result;
        }

        [HttpPost]
        [Route("api/DoctorRecord/Add")]
        public async Task<OutputBaseViewModel> AddAsync([FromBody] DoctorRecordDto doctorRecordDto)
        {
            ResultViewModel<DoctorRecord> result = new ResultViewModel<DoctorRecord>();
            try
            {
                DoctorRecord doctorRecord = doctorRecordDto.ToDomain();
                if (doctorRecord.ExistsInDb()) throw new Exception("不能新增已经存在的记录");
                result.Data = await this._doctorRecordApp.AddAsync(doctorRecord);
            }
            catch (Exception ex)
            {
                result.Status = 101302;
                result.Message = ex.GetMessage();
            }
            return result;
        }

        [HttpPost]
        [Route("api/DoctorRecord/Update")]
        public async Task<OutputBaseViewModel> UpdateAsync([FromBody] DoctorRecordDto doctorRecordDto)
        {
            ResultViewModel<DoctorRecord> result = new ResultViewModel<DoctorRecord>();
            try
            {
                DoctorRecord doctorRecord = doctorRecordDto.ToDomain();
                if (!doctorRecord.ExistsInDb()) throw new Exception("不能修改不存在的记录");
                result.Data = await this._doctorRecordApp.UpdateAsync(doctorRecord);
            }
            catch (Exception ex)
            {
                result.Status = 101303;
                result.Message = ex.GetMessage();
            }
            return result;
        }

        [HttpPost]
        [Route("api/DoctorRecord/Delete")]
        public async Task<OutputBaseViewModel> DeleteByIdAsync([FromBody] int doctorRecordId)
        {
            ResultViewModel<DoctorRecord> result = new ResultViewModel<DoctorRecord>();
            try
            {
               await this._doctorRecordApp.DeleteAsync(doctorRecordId);
            }
            catch (Exception ex)
            {
                result.Status = 101304;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
