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
    public class PathologyReportEntityTypeConfiguration : IEntityTypeConfiguration<PathologyReport>
    {
        public void Configure(EntityTypeBuilder<PathologyReport> builder)
        {
            builder.ToTable("PathologyReport");
            builder.Property(b => b.Id).HasColumnType("integer");
            builder.Property(b => b.Report).HasColumnType("varchar(4000)");
            builder.Property(b => b.CreateTime).HasColumnType("datetime");
            builder.Property(b => b.UpdateTime).HasColumnType("datetime");

            builder.HasKey(b => b.Id);
        }
    }
}
