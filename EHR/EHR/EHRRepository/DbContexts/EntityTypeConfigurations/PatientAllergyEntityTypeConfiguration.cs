using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
using EHRDomain;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EHRRepository.DbContexts.EntityTypeConfigurations
{
    public class PatientAllergyEntityTypeConfiguration : IEntityTypeConfiguration<PatientAllergy>
    {
        public void Configure(EntityTypeBuilder<PatientAllergy> builder)
        {
            builder.ToTable("PatientAllergy");
            builder.Property(b => b.Id).HasColumnType("integer");
            builder.Property(b => b.PatientId).HasColumnType("integer");
            builder.Property(b => b.AllergyId).HasColumnType("integer");

            builder.HasKey(b => b.Id);
        }
    }
}
