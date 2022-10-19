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
    public class PatientCaseEntityTypeConfiguration : IEntityTypeConfiguration<PatientCase>
    {
        public void Configure(EntityTypeBuilder<PatientCase> builder)
        {
            builder.ToTable("PatientCase");
            builder.Property(b => b.Id).HasColumnType("integer");
            builder.Property(b => b.PatientId).HasColumnType("integer");

            builder.HasKey(b => b.Id);
            builder.HasOne(b => b.Pathology)
                .WithOne(b => b.PatientCase)
                .HasForeignKey<Pathology>(b => b.PatientCaseId);
        }
    }
}
