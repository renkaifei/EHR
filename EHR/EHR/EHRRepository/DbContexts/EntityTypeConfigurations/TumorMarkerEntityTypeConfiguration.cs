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
    public class TumorMarkerEntityTypeConfiguration : IEntityTypeConfiguration<TumorMarker>
    {
        public void Configure(EntityTypeBuilder<TumorMarker> builder)
        {
            builder.ToTable("TumorMarker");
            builder.Property(b => b.Id).HasColumnType("integer");
            builder.Property(b => b.Name).HasColumnType("varchar(128)");
            builder.Property(b => b.FullName).HasColumnType("varchar(128)");
            builder.Property(b => b.MinValue).HasColumnType("float");
            builder.Property(b => b.MaxValue).HasColumnType("float");
            builder.Property(b => b.Unit).HasColumnType("varchar(128)");
            builder.Property(b => b.CreateTime).HasColumnType("datetime");
            builder.Property(b => b.UpdateTime).HasColumnType("datetime");

            builder.HasKey(b => b.Id);
            builder.HasMany(b => b.PathologyTumorMarkers)
                .WithOne(b => b.TumorMarker)
                .HasForeignKey(b => b.TumorMarkerId)
                .OnDelete(DeleteBehavior.Cascade);

        }
    }
}
