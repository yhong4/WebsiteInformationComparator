using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Npgsql;

namespace server.Models
{
    public partial class pricecompContext : DbContext
    {
        public pricecompContext()
        {
        }

        public pricecompContext(DbContextOptions<pricecompContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Categorymargin> Categorymargin { get; set; }
        public virtual DbSet<Competitor> Competitor { get; set; }
        public virtual DbSet<Competitor1> Competitor1 { get; set; }
        public virtual DbSet<Competitorprice> Competitorprice { get; set; }
        public virtual DbSet<Competitorprice1> Competitorprice1 { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Product1> Product1 { get; set; }
        public virtual DbSet<Settings> Settings { get; set; }
        public virtual DbSet<Stateassignment> Stateassignment { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<User1> User1 { get; set; }
        public virtual DbSet<Usercompetitor> Usercompetitor { get; set; }
        public virtual DbSet<Usercompetitor1> Usercompetitor1 { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var builder = new NpgsqlConnectionStringBuilder();
                builder.Host = Environment.GetEnvironmentVariable("DATABASE_HOST");
                builder.Database = Environment.GetEnvironmentVariable("DATABASE_NAME");
                builder.Username = Environment.GetEnvironmentVariable("DATABASE_USERNAME");
                builder.Password = Environment.GetEnvironmentVariable("DATABASE_PASSWORD");
                builder.Pooling = true;
                builder.MinPoolSize = 10;
                builder.MaxPoolSize = 20;
                builder.KeepAlive = 3;
                builder.CommandTimeout = 15;
                //optionsBuilder.UseNpgsql("Host=192.168.100.8;Database=pricecomp;Username=neo;Password=Msy1234!;Pooling=true;MinPoolSize=10;MaxPoolSize=20;Keepalive=5;CommandTimeout=60");                //optionsBuilder.UseNpgsql("Host=192.168.100.8;Database=pricecomp;Username=neo;Password=Msy1234!;Pooling=true;MinPoolSize=10;MaxPoolSize=20;Keepalive=5;CommandTimeout=60");
                optionsBuilder.UseNpgsql(builder.ConnectionString);
                Console.WriteLine(Environment.GetEnvironmentVariable("DATABASE_HOST")+ Environment.GetEnvironmentVariable("DATABASE_NAME"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity<Categorymargin>(entity =>
            {
                entity.ToTable("categorymargin");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Category)
                    .HasColumnName("category")
                    .HasColumnType("character varying");

                entity.Property(e => e.Pricehigh).HasColumnName("pricehigh");

                entity.Property(e => e.Pricelow).HasColumnName("pricelow");

                entity.Property(e => e.Targetmargin).HasColumnName("targetmargin");
            });

            modelBuilder.Entity<Competitor>(entity =>
            {
                entity.ToTable("competitor", "pricecomparison");

                entity.Property(e => e.Competitorid)
                    .HasColumnName("competitorid")
                    .HasDefaultValueSql("nextval('pricecomparison.competitor_competitorid_seq'::regclass)");

                entity.Property(e => e.Dataextractpattern)
                    .HasColumnName("dataextractpattern")
                    .HasMaxLength(1000);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(500);

                entity.Property(e => e.Nameonstaticice)
                    .HasColumnName("nameonstaticice")
                    .HasMaxLength(500);

                entity.Property(e => e.State)
                    .HasColumnName("state")
                    .HasMaxLength(10);

                entity.Property(e => e.Website)
                    .HasColumnName("website")
                    .HasMaxLength(500);
            });

            modelBuilder.Entity<Competitor1>(entity =>
            {
                entity.HasKey(e => e.Competitorid)
                    .HasName("pk_competitors");

                entity.ToTable("competitor");

                entity.Property(e => e.Competitorid).HasColumnName("competitorid");

                entity.Property(e => e.Keyword)
                    .HasColumnName("keyword")
                    .HasMaxLength(500);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(500);

                entity.Property(e => e.State)
                    .HasColumnName("state")
                    .HasMaxLength(10);

                entity.Property(e => e.Tier)
                    .HasColumnName("tier")
                    .HasMaxLength(3);

                entity.Property(e => e.Website)
                    .HasColumnName("website")
                    .HasMaxLength(500);
            });

            modelBuilder.Entity<Competitorprice>(entity =>
            {
                entity.ToTable("competitorprice");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Competitorid).HasColumnName("competitorid");

                entity.Property(e => e.Competitorprice1).HasColumnName("competitorprice");

                entity.Property(e => e.Productid).HasColumnName("productid");

                entity.Property(e => e.Productname)
                    .HasColumnName("productname")
                    .HasColumnType("character varying");

                entity.Property(e => e.Updatetime)
                    .HasColumnName("updatetime")
                    .HasColumnType("timestamp(3) without time zone")
                    .HasDefaultValueSql("now()");
            });

            modelBuilder.Entity<Competitorprice1>(entity =>
            {
                entity.ToTable("competitorprice", "pricecomparison");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("nextval('pricecomparison.competitorprice_id_seq'::regclass)");

                entity.Property(e => e.Competitorid).HasColumnName("competitorid");

                entity.Property(e => e.Competitorprice).HasColumnName("competitorprice");

                entity.Property(e => e.Productid).HasColumnName("productid");

                entity.Property(e => e.Updatetime)
                    .HasColumnName("updatetime")
                    .HasColumnType("timestamp(3) without time zone")
                    .HasDefaultValueSql("now()");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("product");

                entity.HasIndex(e => e.Productcode)
                    .HasName("idx_product");

                entity.Property(e => e.Productid)
                    .HasColumnName("productid")
                    .HasDefaultValueSql("nextval('product_productid_seq1'::regclass)");

                entity.Property(e => e.Category)
                    .HasColumnName("category")
                    .HasColumnType("character varying");

                entity.Property(e => e.Costprice).HasColumnName("costprice");

                entity.Property(e => e.Isupdating).HasColumnName("isupdating");

                entity.Property(e => e.Keywords)
                    .HasColumnName("keywords")
                    .HasColumnType("character varying");

                entity.Property(e => e.Productcode)
                    .HasColumnName("productcode")
                    .HasColumnType("character varying");

                entity.Property(e => e.Productdescription)
                    .HasColumnName("productdescription")
                    .HasColumnType("character varying");

                entity.Property(e => e.Productname)
                    .HasColumnName("productname")
                    .HasColumnType("character varying");

                entity.Property(e => e.Salesprice).HasColumnName("salesprice");
            });

            modelBuilder.Entity<Product1>(entity =>
            {
                entity.HasKey(e => e.Productid)
                    .HasName("pk_product");

                entity.ToTable("product", "pricecomparison");

                entity.Property(e => e.Productid)
                    .HasColumnName("productid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Keywords)
                    .HasColumnName("keywords")
                    .HasMaxLength(500);

                entity.Property(e => e.Ourprice).HasColumnName("ourprice");

                entity.Property(e => e.Productcode)
                    .IsRequired()
                    .HasColumnName("productcode")
                    .HasMaxLength(500);

                entity.Property(e => e.Productdescription)
                    .HasColumnName("productdescription")
                    .HasMaxLength(500);

                entity.Property(e => e.Productname)
                    .IsRequired()
                    .HasColumnName("productname")
                    .HasMaxLength(500);
            });

            modelBuilder.Entity<Settings>(entity =>
            {
                entity.HasKey(e => e.Settingid)
                    .HasName("settings_pkey");

                entity.ToTable("settings");

                entity.Property(e => e.Settingid).HasColumnName("settingid");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasColumnType("character varying");

                entity.Property(e => e.Value)
                    .HasColumnName("value")
                    .HasColumnType("character varying");
            });

            modelBuilder.Entity<Stateassignment>(entity =>
            {
                entity.ToTable("stateassignment");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Category)
                    .HasColumnName("category")
                    .HasColumnType("character varying");

                entity.Property(e => e.State)
                    .HasColumnName("state")
                    .HasColumnType("character varying");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(100);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<User1>(entity =>
            {
                entity.HasKey(e => e.Userid)
                    .HasName("pk_user");

                entity.ToTable("user", "pricecomparison");

                entity.Property(e => e.Userid)
                    .HasColumnName("userid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(100);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Usercompetitor>(entity =>
            {
                entity.ToTable("usercompetitor");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Competitorid).HasColumnName("competitorid");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.HasOne(d => d.Competitor)
                    .WithMany(p => p.Usercompetitor)
                    .HasForeignKey(d => d.Competitorid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_usercompetitor_competitor");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Usercompetitor)
                    .HasForeignKey(d => d.Userid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_usercompetitor_usercompetitor");
            });

            modelBuilder.Entity<Usercompetitor1>(entity =>
            {
                entity.ToTable("usercompetitor", "pricecomparison");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Competitorid).HasColumnName("competitorid");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.HasOne(d => d.Competitor)
                    .WithMany(p => p.Usercompetitor1)
                    .HasForeignKey(d => d.Competitorid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_usercompetitor_competitor");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Usercompetitor1)
                    .HasForeignKey(d => d.Userid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_usercompetitor_usercompetitor");
            });

            modelBuilder.HasSequence("competitor_competitorid_seq");

            modelBuilder.HasSequence("competitorprice_id_seq");

            modelBuilder.HasSequence("product_productid_seq").StartsAt(50584);

            modelBuilder.HasSequence<int>("product_productid_seq1");
        }
    }
}
