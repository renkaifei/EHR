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
    public class RadiologyEntityTypeConfiguration : IEntityTypeConfiguration<Radiology>
    {
        public void Configure(EntityTypeBuilder<Radiology> builder)
        {
            builder.ToTable("Radiology");
            builder.Property(b => b.Id).HasColumnType("integer");
            builder.Property(b => b.Report).HasColumnType("varchar(2048)");
            builder.Property(b => b.SharedNotes).HasColumnType("varchar(2048)");

            builder.HasKey(b => b.Id);
            builder.HasMany(b => b.CTImages)
                .WithOne(b => b.Radiology)
                .HasForeignKey(b => b.RadiologyId);
        }
    }
}
