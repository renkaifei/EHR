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
    public class TreatmentMethodApp
    {
        private readonly TreatmentMethodRepository _treatmentRepository;

        public TreatmentMethodApp(TreatmentMethodRepository treatmentRepository)
        {
            _treatmentRepository = treatmentRepository;
        }

        public async Task<List<TreatmentMethod>> GetAllAsync()
        {
            List<TreatmentMethod> treatmentMethods = await _treatmentRepository.GetAll().ToListAsync();
            return treatmentMethods;
        }
    }
}
