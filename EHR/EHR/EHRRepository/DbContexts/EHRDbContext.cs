using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using EHRRepository.DbContexts.EntityTypeConfigurations;
using EHRDomain;

namespace EHRRepository.DbContexts
{
    public class EHRDbContext:DbContext
    {
        public EHRDbContext(DbContextOptions<EHRDbContext> options)
        : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new UserEntityTypeConfiguration().Configure(modelBuilder.Entity<User>());
            new PatientEntityTypeConfiguration().Configure(modelBuilder.Entity<Patient>());
            new DoctorEnityTypeConfiguration().Configure(modelBuilder.Entity<Doctor>());
            new DepartmentEntityTypeConfiguration().Configure(modelBuilder.Entity<Department>());
            new RoleEntityTypeConfiguration().Configure(modelBuilder.Entity<Role>());
            new UserRoleEntityTypeConfiguration().Configure(modelBuilder.Entity<UserRole>());
            new PatientCaseEntityTypeConfiguration().Configure(modelBuilder.Entity<PatientCase>());
            new PathologyReportEntityTypeConfiguration().Configure(modelBuilder.Entity<PathologyReport>());
            new PathologySharedNotesEntityTypeConfiguration().Configure(modelBuilder.Entity<PathologySharedNotes>());
            new ChiefComplaintHistoriesEntityTypeConfiguration().Configure(modelBuilder.Entity<ChiefComplaintHistories>());
            new TumorMarkerEntityTypeConfiguration().Configure(modelBuilder.Entity<TumorMarker>());
            new PatientCaseTumorMarkerEntityTypeConfiguration().Configure(modelBuilder.Entity<PatientCaseTumorMarker>());
            new RadiologyReportEntityTypeConfiguration().Configure(modelBuilder.Entity<RadiologyReport>());
            new RadiologySharedNotesEntityTypeConfiguration().Configure(modelBuilder.Entity<RadiologySharedNotes>());
            new CTImageEntityTypeConfiguration().Configure(modelBuilder.Entity<CTImage>());
            new AllergyEntityTypeConfiguration().Configure(modelBuilder.Entity<Allergy>());
            new PatientAllergyEntityTypeConfiguration().Configure(modelBuilder.Entity<PatientAllergy>());
            new CareOptionEntityTypeConfiguration().Configure(modelBuilder.Entity<CareOption>());
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Doctor> Doctors { get; set; }

        public DbSet<Patient> Patients { get; set; }

        public DbSet<Allergy> Allergies { get; set; }

        public DbSet<PatientAllergy> PatientAllergies { get; set; }

        public DbSet<Role> Roles { get; set; }

        public DbSet<UserRole> UserRoles { get; set; }

        public DbSet<PatientCase> PatientCases { get; set; }

        public DbSet<PathologyReport> PathologyReports { get; set; }

        public DbSet<PathologySharedNotes> PathologySharedNoteses { get; set; }

        public DbSet<ChiefComplaintHistories> ChiefComplaintHistorieses { get; set; }

        public DbSet<TumorMarker> TumorMarkers { get; set; }

        public DbSet<PatientCaseTumorMarker> PathologyTumorMarkers { get; set; }

        public DbSet<RadiologyReport> RadiologyReports { get; set; }

        public DbSet<RadiologySharedNotes> RadiologySharedNoteses { get; set; }

        public DbSet<CTImage> CTImages { get; set; }

        public DbSet<CareOption> CareOptions { get; set; }
    }
}
