using EHRDomain;
using EHRRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EHRApp
{
    public sealed class CareOptionApp
    {
        private readonly CareOptionRepository _careOptionRepository;

        public CareOptionApp(CareOptionRepository careOptionRepository)
        {
            this._careOptionRepository = careOptionRepository;
        }

        public async Task<List<CareOption>> GetAll()
        {
            IQueryable<CareOption> query = this._careOptionRepository.GetAll();
            return await query.ToListAsync().ConfigureAwait(false);
        }
    }
}
