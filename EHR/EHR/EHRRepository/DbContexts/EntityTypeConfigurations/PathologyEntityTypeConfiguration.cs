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
    public class PathologyEntityTypeConfiguration : IEntityTypeConfiguration<Pathology>
    {
        public void Configure(EntityTypeBuilder<Pathology> builder)
        {
            builder.ToTable("Pathology");
            builder.Property(b => b.Id).HasColumnType("int");
            builder.Property(b => b.Report).HasColumnType("varchar(4000)");
            builder.Property(b => b.ClinicalNotes).HasColumnType("varchar(4000)");
            builder.Property(b => b.CreateTime).HasColumnType("datetime");
            builder.Property(b => b.UpdateTime).HasColumnType("datetime");

            builder.HasKey(b => b.Id);
            builder.HasMany(b => b.PathologyTumorMarkers).WithOne(b => b.Pathology).HasForeignKey(b => b.PathologyId);
        }
    }
}
