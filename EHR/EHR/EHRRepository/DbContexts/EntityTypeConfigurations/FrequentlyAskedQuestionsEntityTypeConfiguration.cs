using EHRDomain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EHRRepository.DbContexts.EntityTypeConfigurations
{
    public class FrequentlyAskedQuestionsEntityTypeConfiguration : IEntityTypeConfiguration<FrequentlyAskedQuestion>
    {
        public void Configure(EntityTypeBuilder<FrequentlyAskedQuestion> builder)
        {
            builder.ToTable("FrequentlyAskedQuestion");

            builder.Property(b => b.Id).IsRequired(true);
            builder.Property(b => b.Question).IsRequired(true);
            builder.Property(b => b.CreateTime).IsRequired(true);
            builder.Property(b => b.UpdateTime).IsRequired(true);

            builder.HasKey(b => b.Id);
        }
    }
}
