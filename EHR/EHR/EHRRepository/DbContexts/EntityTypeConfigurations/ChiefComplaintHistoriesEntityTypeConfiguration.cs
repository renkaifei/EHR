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
    public class ChiefComplaintHistoriesEntityTypeConfiguration:IEntityTypeConfiguration<ChiefComplaintHistories>
    {
        public void Configure(EntityTypeBuilder<ChiefComplaintHistories> builder)
        {
            builder.ToTable("ChiefComplaintHistories");
            builder.Property(b => b.Id).HasColumnType("integer");
            builder.Property(b => b.Content).HasColumnType("varchar(4000)");
            builder.Ignore(b => b.PatientCaseId);
            builder.Property(b => b.CreateTime).HasColumnType("datetime");
            builder.Property(b => b.UpdateTime).HasColumnType("datetime");

            builder.HasKey(b => b.Id);
        }

       
    }
}
