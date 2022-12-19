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
    public class CTImageEntityTypeConfiguration : IEntityTypeConfiguration<CTImage>
    {
        public void Configure(EntityTypeBuilder<CTImage> builder)
        {
            builder.ToTable("CTImage");
            builder.Property(b => b.Id).HasColumnType("integer");
            builder.Property(b => b.ImagePath).HasColumnType("varchar(1024)");
            builder.Property(b => b.PatientCaseId).HasColumnType("integer");
            builder.Property(b => b.CreateTime).HasColumnType("datetime");
            builder.Property(b => b.UpdateTime).HasColumnType("datetime");

            builder.HasKey(b => b.Id);
        }
    }
}
