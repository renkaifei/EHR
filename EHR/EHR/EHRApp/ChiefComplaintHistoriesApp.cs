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
    public sealed class ChiefComplaintHistoriesApp
    {
        private readonly PatientCaseRepository m_patientCaseRepository;
        private readonly ChiefComplaintHistoriesRepository m_chiefComplaintHistoriesRepository;

        public ChiefComplaintHistoriesApp(PatientCaseRepository patientCaseRepository,ChiefComplaintHistoriesRepository chiefComplaintHistoriesRepository)
        {
            m_patientCaseRepository = patientCaseRepository;
            m_chiefComplaintHistoriesRepository = chiefComplaintHistoriesRepository;
        }

        public async Task<ChiefComplaintHistories> GetOneByIdAsync(int id)
        {
            return await m_chiefComplaintHistoriesRepository.GetOneById(id)
                .AsNoTracking().FirstOrDefaultAsync();
        }

        public async Task<ChiefComplaintHistories> AddAsync(ChiefComplaintHistories chiefComplaintHistories)
        {
            if (chiefComplaintHistories.Id != 0) throw new Exception("投诉和历史已经存在");
            PatientCase patientCase = await m_patientCaseRepository.GetOne(chiefComplaintHistories.PatientCaseId).FirstOrDefaultAsync();
            patientCase.ChiefComplaintHistories = chiefComplaintHistories;
            await m_chiefComplaintHistoriesRepository.SaveChangesAsync();
            return chiefComplaintHistories;
        }

        public async Task<ChiefComplaintHistories> UpdateAsync(ChiefComplaintHistories chiefComplaintHistories)
        {
            ChiefComplaintHistories temp = await m_chiefComplaintHistoriesRepository.GetOneById(chiefComplaintHistories.Id).FirstOrDefaultAsync();
            if (temp == null) throw new Exception("投诉和历史不存在");
            temp.Content = chiefComplaintHistories.Content;
            await m_chiefComplaintHistoriesRepository.SaveChangesAsync();
            return temp;
        }
    }
}
