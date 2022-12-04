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
    public sealed class RadiologyReportApp
    {
        private readonly RadiologyReportRepository m_radiologyReportRepository;

        public RadiologyReportApp(RadiologyReportRepository radiologyReportRepository)
        {
            m_radiologyReportRepository = radiologyReportRepository;
        }

        public async Task<RadiologyReport> GetOneByIdAsync(int id)
        {
            RadiologyReport radiologyReport = await m_radiologyReportRepository.GetOne(id).AsNoTracking()
                .FirstOrDefaultAsync().ConfigureAwait(false);
            if (radiologyReport == null) throw new ArgumentException("radiology report not exists");
            return radiologyReport;
        }


    }
}
