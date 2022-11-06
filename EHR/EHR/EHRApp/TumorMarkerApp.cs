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
    public sealed class TumorMarkerApp
    {
        private readonly TumorMarkerRepository m_tumorMarkerRepository;

        public TumorMarkerApp(TumorMarkerRepository tumorMarkerRepository)
        {
            m_tumorMarkerRepository = tumorMarkerRepository;
        }

        public async Task<List<TumorMarker>> GetAllAsync()
        {
            return await m_tumorMarkerRepository.GetAll().ToListAsync().ConfigureAwait(false);
        }
    }
}
