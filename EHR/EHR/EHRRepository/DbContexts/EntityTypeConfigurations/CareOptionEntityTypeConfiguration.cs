using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EHRDomain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EHRRepository.DbContexts.EntityTypeConfigurations
{
    public class CareOptionEntityTypeConfiguration : IEntityTypeConfiguration<CareOption>
    {
        public void Configure(EntityTypeBuilder<CareOption> builder)
        {
            builder.ToTable("CareOption");
            builder.Property(b => b.Id).HasColumnType("integer").IsRequired();
            builder.Property(b => b.Question).HasColumnType("varchar(512)").IsRequired();
            builder.Property(b => b.Answer).HasColumnType("varchar(1024)").IsRequired();
            builder.Property(b => b.OptionType).HasColumnType("integer").IsRequired();
            builder.Property(b => b.CreateTime).HasColumnType("datetime").IsRequired();
            builder.Property(b => b.UpdateTime).HasColumnType("datetime").IsRequired();

            builder.HasKey(b => b.Id);
        }
    }
}
