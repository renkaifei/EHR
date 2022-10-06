using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using EHRRepository;
using EHRDomain;

namespace EHRApp
{
    public class PatientApp
    {
        private PatientRepository m_patientRepository;

        public PatientApp(PatientRepository patientRepository)
        {
            m_patientRepository = patientRepository;
        }

        public async Task<Patient> GetOneAsync(int patientId)
        {
            IQueryable<Patient> query = m_patientRepository.GetOne(patientId);
            Patient patient = await query.AsNoTracking().FirstOrDefaultAsync();
            return patient;
        }
    }
}
