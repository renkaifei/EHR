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
    public sealed class PathologySharedNotesApp
    {
        private readonly PatientCaseRepository m_patientCaseRepository;
        private readonly PathologySharedNotesRepository m_pathologySharedNotesRepository;

        public PathologySharedNotesApp(PatientCaseRepository patientCaseRepository, PathologySharedNotesRepository pathologySharedNotesRepository)
        {
            m_patientCaseRepository = patientCaseRepository;
            m_pathologySharedNotesRepository = pathologySharedNotesRepository;
        }

        public async Task<PathologySharedNotes> GetOneByIdAsync(int id)
        {
            return await m_pathologySharedNotesRepository.GetOneById(id).AsNoTracking().FirstOrDefaultAsync()
                .ConfigureAwait(false);
        }

        public async Task<PathologySharedNotes> AddAsync(PathologySharedNotes pathologySharedNotes)
        {
            PatientCase patientCase = await m_patientCaseRepository.GetOne(pathologySharedNotes.PatientCaseId).FirstOrDefaultAsync();
            if (patientCase == null) throw new Exception("patient case not exists");
            patientCase.UpdateTime = DateTime.Now;
            patientCase.PathologySharedNotes = pathologySharedNotes;
            await m_pathologySharedNotesRepository.SaveChangesAsync().ConfigureAwait(false);
            return pathologySharedNotes;
        }

        public async Task UpdateAsync(PathologySharedNotes pathologySharedNotes)
        {
            PathologySharedNotes temp = await m_pathologySharedNotesRepository.GetOneById(pathologySharedNotes.Id)
                .FirstOrDefaultAsync();
            if (temp == null) throw new Exception("shared notes not exists");
            temp.SharedNotes = pathologySharedNotes.SharedNotes;
            temp.UpdateTime = DateTime.Now;
            await m_pathologySharedNotesRepository.SaveChangesAsync().ConfigureAwait(false);
        }
    }
}
