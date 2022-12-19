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
            builder.Property(b => b.ChiefComplaintHistoriesId).HasColumnType("integer").IsRequired(false);
            builder.Property(b => b.PathologyReportId).HasColumnType("integer");
            builder.Property(b => b.PathologySharedNotesId).HasColumnType("integer");
            builder.Property(b => b.RadiologyReportId).HasColumnType("integer");
            builder.Property(b => b.RadiologySharedNotesId).HasColumnType("integer");
            builder.HasKey(b => b.Id);
            builder.HasOne(b => b.Attending)
                .WithMany()
                .HasForeignKey(b => b.AttendingId);
            builder.HasOne(b => b.Consultant)
                .WithMany()
                .HasForeignKey(b => b.ConsultantId);
            builder.HasOne(b => b.ChiefComplaintHistories)
                .WithOne().HasForeignKey<PatientCase>(b => b.ChiefComplaintHistoriesId);
            builder.HasOne(b => b.PathologyReport)
                .WithOne()
                .HasForeignKey<PatientCase>(b => b.PathologyReportId);
            builder.HasOne(b => b.PathologySharedNotes)
                .WithOne()
                .HasForeignKey<PatientCase>(b => b.PathologySharedNotesId);
            builder.HasOne(b => b.RadiologyReport)
                .WithOne()
                .HasForeignKey<PatientCase>(b => b.RadiologyReportId);
            builder.HasOne(b => b.RadiologySharedNotes)
                .WithOne()
                .HasForeignKey<PatientCase>(b => b.RadiologySharedNotesId);
            builder.HasMany(b => b.PatientCaseTumorMarkers)
                .WithOne(b => b.PatientCase)
                .HasForeignKey(b => b.PatientCaseId);
            builder.HasMany(b => b.CTImages)
                .WithOne(b => b.PatientCase)
                .HasForeignKey(b => b.PatientCaseId);

        }
    }
}
