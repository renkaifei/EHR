using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using EHRDomain;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EHRRepository.DbContexts.EntityTypeConfigurations
{
    public class UserEntityTypeConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("User");
            builder.Property(b => b.Id).HasColumnType("int");
            builder.Property(b => b.FirstName).HasColumnType("varchar(128)");
            builder.Property(b => b.MiddleName).HasColumnType("varchar(128)");
            builder.Property(b => b.LastName).HasColumnType("varchar(128)");
            builder.Property(b => b.Address).HasColumnType("varchar(512)");
            builder.Property(b => b.LoginName).HasColumnType("varchar(128)");
            builder.Property(b => b.Password).HasColumnType("varchar(128)");
            builder.Property(b => b.UserType).HasColumnType("int");
            builder.Property(b => b.CreateTime).HasColumnType("datetime");
            builder.Property(b => b.UpdateTime).HasColumnType("datetime");

            builder.HasKey(b => b.Id);

        }
    }
}
