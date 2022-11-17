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
        private AllergyRepository m_allergyRepository;

        public PatientApp(PatientRepository patientRepository, AllergyRepository allergyRepository)
        {
            m_patientRepository = patientRepository;
            m_allergyRepository = allergyRepository;
        }

        public async Task<Patient> GetOneAsync(int patientId)
        {
            IQueryable<Patient> query = m_patientRepository.GetOne(patientId);
            Patient patient = await query.FirstOrDefaultAsync().ConfigureAwait(false);
            await query.Include(item => item.PatientAllergies).SelectMany(item => item.PatientAllergies).LoadAsync();
            List<Allergy> allergies = await m_allergyRepository.GetAll().ToListAsync().ConfigureAwait(false);
            patient.PatientAllergies.ForEach(item =>
            {
                item.Allergy = allergies.Where(subItem => item.AllergyId == subItem.Id).FirstOrDefault();
            });
            return patient;
        }
    }
}
