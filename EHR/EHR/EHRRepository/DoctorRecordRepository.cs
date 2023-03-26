using EHRDomain;
using EHRRepository.DbContexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRRepository
{
    public class DoctorRecordRepository
    {
        private EHRDbContext _dbContext;

        public DoctorRecordRepository(EHRDbContext dbContext)
        {
            this._dbContext = dbContext;
        }

        public IQueryable<DoctorRecord> GetOneById(int doctorRecordId)
        {
            return this._dbContext.DoctorRecords.Where(item => item.Id == doctorRecordId);
        }

        public IQueryable<DoctorRecord> GetOneByPatientCaseIdAndRecordType(int patientCaseId, string recordType)
        {
            return this._dbContext.DoctorRecords.Where(item => item.PatientCaseId == patientCaseId
            && item.RecordType == recordType);
        }

        public void Add(DoctorRecord doctorRecord)
        {
            this._dbContext.DoctorRecords.Add(doctorRecord);
        }

        public void Update(DoctorRecord doctorRecord)
        {
            this._dbContext.DoctorRecords.Update(doctorRecord);
        }

        public void Delete(DoctorRecord doctorRecord)
        {
            this._dbContext.DoctorRecords.Remove(doctorRecord);
        }

        public async Task SaveChangesAsync()
        {
            await this._dbContext.SaveChangesAsync();
        }
    }
}
