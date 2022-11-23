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
            builder.Property(b => b.AttendingId).HasColumnType("integer");
            builder.Property(b => b.ConsultantId).HasColumnType("integer");
            builder.Property(b => b.AdmittedDate).HasColumnType("datetime");
            builder.Property(b => b.Location).HasColumnType("varchar(512)");
            builder.HasKey(b => b.Id);
            builder.HasOne(b => b.Attending)
                .WithMany()
                .HasForeignKey(b => b.AttendingId);
            builder.HasOne(b => b.Consultant)
                .WithMany()
                .HasForeignKey(b => b.ConsultantId);
            builder.HasOne(b => b.Pathology)
                .WithOne(b => b.PatientCase)
                .HasForeignKey<Pathology>(b => b.PatientCaseId);
            builder.HasOne(b => b.Radiology)
                .WithOne(b => b.PatientCase)
                .HasForeignKey<Radiology>(b => b.PatientCaseId);
        }
    }
}
