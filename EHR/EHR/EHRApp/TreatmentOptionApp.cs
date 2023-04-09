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
    public class TreatmentOptionApp
    {
        private TreatmentOptionRepository _treatmentOptionRepository;

        public TreatmentOptionApp(TreatmentOptionRepository treatmentOptionRepository)
        {
            _treatmentOptionRepository = treatmentOptionRepository;
        }

        public async Task<List<TreatmentOption>> GetListByQuestionId(int questionId)
        {
            return await _treatmentOptionRepository.GetListByQuestionId(questionId).ToListAsync();
        }

        public async Task<List<TreatmentOption>> GetAll()
        {
            return await _treatmentOptionRepository.GetAll().ToListAsync();
        }
    }
}
