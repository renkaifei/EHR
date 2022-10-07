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
    public class PathologyTumorMarkerEntityTypeConfiguration : IEntityTypeConfiguration<PathologyTumorMarker>
    {
        public void Configure(EntityTypeBuilder<PathologyTumorMarker> builder)
        {
            builder.ToTable("PathologyTumorMarker");
            builder.Property(b => b.Id).HasColumnType("integer");
            builder.Property(b => b.Value).HasColumnType("float");
            builder.Property(b => b.TestDate).HasColumnType("datetime");
            builder.Property(b => b.PathologyId).HasColumnType("int");
            builder.Property(b => b.TumorMarkerId).HasColumnType("int");
            builder.Property(b => b.CreateTime).HasColumnType("datetime");
            builder.Property(b => b.UpdateTime).HasColumnType("datetime");

            builder.HasKey(b => b.Id);
        }
    }
}
