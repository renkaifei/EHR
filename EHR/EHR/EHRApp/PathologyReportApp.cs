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
    public sealed class PathologyReportApp
    {
        private readonly PathologyReportRepository m_pathologyReportRepository;

        public PathologyReportApp(PathologyReportRepository pathologyReportRepository)
        {
            m_pathologyReportRepository = pathologyReportRepository;
        }

        public async Task<PathologyReport> GetOneByIdAsync(int id)
        {
            PathologyReport pathologyReport = await m_pathologyReportRepository.GetOneById(id)
                .AsNoTracking().FirstOrDefaultAsync().ConfigureAwait(false);
            return pathologyReport;
        }
    }
}
