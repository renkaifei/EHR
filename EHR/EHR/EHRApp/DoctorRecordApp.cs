using EHRDomain;
using EHRRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRApp
{
    public class DoctorRecordApp
    {
        private DoctorRecordRepository _doctorRecordRepository;

        public DoctorRecordApp(DoctorRecordRepository doctorRecordRepository)
        {
            this._doctorRecordRepository = doctorRecordRepository;
        }

        public async Task<DoctorRecord> GetOneByPatientCaseIdAndRecordTypeAsync(int patientCaseId, string recordType)
        {
            DoctorRecord doctorRecord = await this._doctorRecordRepository.GetOneByPatientCaseIdAndRecordType(patientCaseId, recordType).FirstOrDefaultAsync();
            if (doctorRecord == null)
            {
                doctorRecord = DoctorRecord.CreateEmpty();
            }
            return doctorRecord;
        }

        public async Task<DoctorRecord> AddAsync(DoctorRecord doctorRecord)
        {
            this._doctorRecordRepository.Add(doctorRecord);
            await this ._doctorRecordRepository.SaveChangesAsync();
            return doctorRecord;
        }

        public async Task<DoctorRecord> UpdateAsync(DoctorRecord doctorRecord)
        {
            this._doctorRecordRepository.Update(doctorRecord);
            await this._doctorRecordRepository.SaveChangesAsync();
            return doctorRecord;

        }

        public async Task DeleteAsync(int doctorRecordId)
        {
            DoctorRecord doctorRecord = await this._doctorRecordRepository.GetOneById(doctorRecordId).FirstOrDefaultAsync();
            if (doctorRecord != null)
            {
                this._doctorRecordRepository.Delete(doctorRecord);
                await this._doctorRecordRepository.SaveChangesAsync();
            }
        }
    }
}
