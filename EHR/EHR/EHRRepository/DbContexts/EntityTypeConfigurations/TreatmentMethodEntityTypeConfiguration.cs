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
    public class TreatmentMethodEntityTypeConfiguration : IEntityTypeConfiguration<TreatmentMethod>
    {
        public void Configure(EntityTypeBuilder<TreatmentMethod> builder)
        {
            builder.ToTable("TreatmentMethod");

            builder.Property(b => b.Id).IsRequired(true);
            builder.Property(b => b.Name).IsRequired(true);
            builder.Property(b => b.CreateTime).IsRequired(true);
            builder.Property(b => b.UpdateTime).IsRequired(true);

            builder.HasKey(b =>b.Id);
        }
    }
}
