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
    public class AllergyEntityTypeConfiguration : IEntityTypeConfiguration<Allergy>
    {
        public void Configure(EntityTypeBuilder<Allergy> builder)
        {
            builder.ToTable("Allergy");
            builder.Property(b => b.Id).HasColumnType("integer");
            builder.Property(b => b.Name).HasColumnType("varchar(128)");

            builder.HasKey(b => b.Id);
            builder.HasMany(b => b.PatientAllergies)
                .WithOne(b => b.Allergy)
                .HasForeignKey(b => b.AllergyId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
