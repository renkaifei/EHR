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
    public sealed class RadiologyApp
    {
        private readonly RadiologyRepository m_radiologyRepository;

        public RadiologyApp(RadiologyRepository radiologyRepository)
        {
            m_radiologyRepository = radiologyRepository;
        }

        public async Task<Radiology> GetOneByIdAsync(int id)
        {
            Radiology radiology = await m_radiologyRepository.GetOneById(id).AsNoTracking()
                .FirstOrDefaultAsync().ConfigureAwait(false);
            return radiology;
        }

        public async Task<Radiology> UpdateSharedNotesByIdAsync(int id, string sharedNotes)
        {
            Radiology radiology = await m_radiologyRepository.GetOneById(id).FirstOrDefaultAsync();
            if (radiology == null) throw new Exception("not found radiology");
            radiology.SharedNotes = sharedNotes;
            await m_radiologyRepository.SaveChangesAsync();
            return radiology;
        }
    }
}
