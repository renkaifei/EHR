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
    public sealed class PatientCaseApp
    {
        private readonly PatientCaseRepository m_patientCaseRepository;

        public PatientCaseApp(PatientCaseRepository patientCaseRepository)
        {
            m_patientCaseRepository = patientCaseRepository;
        }

        public async Task<PatientCase> GetOneAsync(int id)
        {
            PatientCase patientCase = await m_patientCaseRepository.GetOne(id)
                .AsNoTracking().FirstOrDefaultAsync().ConfigureAwait(false);
            return patientCase;
        }
    }
}
