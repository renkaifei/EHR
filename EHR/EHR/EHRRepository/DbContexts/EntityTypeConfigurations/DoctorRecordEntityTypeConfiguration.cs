using EHRDomain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRRepository.DbContexts.EntityTypeConfigurations
{
    public class DoctorRecordEntityTypeConfiguration : IEntityTypeConfiguration<DoctorRecord>
    {
        public void Configure(EntityTypeBuilder<DoctorRecord> builder)
        {
            builder.ToTable("DoctorRecord");
            builder.Property(b => b.Id).HasColumnType("integer").IsRequired();
            builder.Property(b => b.PatientCaseId).HasColumnType("integer").IsRequired();
            builder.Property(b => b.DoctorId).HasColumnType("integer").IsRequired(false);
            builder.Property(b => b.Content).HasColumnType("varchar(1024)").IsRequired();
            builder.Property(b => b.RecordType).HasColumnType("varchar(50)").IsRequired();
            builder.Property(b => b.CreateTime).HasColumnType("datetime").IsRequired();
            builder.Property(b => b.UpdateTime).HasColumnType("datetime").IsRequired();

            builder.HasKey(b => b.Id);
        }
    }
}
