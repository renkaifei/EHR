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
    public class SDMThreeTalkEntityTypeConfiguration : IEntityTypeConfiguration<SDMThreeTalk>
    {
        public void Configure(EntityTypeBuilder<SDMThreeTalk> builder)
        {
            builder.ToTable("SDMThreeTalks");

            builder.Property(b => b.Id).HasColumnType("integer");
            builder.Property(b => b.SharedNotes).HasColumnType("varchar(512)");
            builder.Property(b => b.PatientCaseId).HasColumnType("integer");
            builder.Property(b => b.CreateTime).HasColumnType("CreateTime");
            builder.Property(b => b.UpdateTime).HasColumnType("UpdateTime");

            builder.HasKey(b => b.Id);
        }
    }
}
