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
    public sealed class DoctorApp
    {
        private DoctorRepository m_doctorRepository;

        public DoctorApp(DoctorRepository doctorRepository)
        {
            m_doctorRepository = doctorRepository;
        }

        public async Task<Doctor> GetOneByIdAsync(int id)
        {
            Doctor doctor = await m_doctorRepository.GetOneById(id).AsNoTracking()
                .FirstOrDefaultAsync().ConfigureAwait(false);
            doctor.Password = "";
            return doctor;
        }
    }
}
