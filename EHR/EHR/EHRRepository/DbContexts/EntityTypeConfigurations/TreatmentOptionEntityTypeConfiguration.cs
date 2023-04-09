using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EHRDomain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EHRRepository.DbContexts.EntityTypeConfigurations
{
    public class TreatmentOptionEntityTypeConfiguration : IEntityTypeConfiguration<TreatmentOption>
    {
        public void Configure(EntityTypeBuilder<TreatmentOption> builder)
        {
            builder.ToTable("Question_mm_TreatmentMethod");
            builder.Property(b => b.Id).IsRequired();
            builder.Property(b => b.QuestionId).IsRequired();
            builder.Property(b => b.TreatmentMethodId).IsRequired();
            builder.Property(b => b.Content).IsRequired();
            builder.Property(b => b.CreateTime).IsRequired();
            builder.Property(b => b.UpdateTime).IsRequired();
        }
    }
}
