using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DAL.Models;

public partial class GamesShopContext : DbContext
{
    public GamesShopContext()
    {
    }

    public GamesShopContext(DbContextOptions<GamesShopContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Buy> Buys { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Game> Games { get; set; }

    public virtual DbSet<SaleDetail> SaleDetails { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=localhost;Initial Catalog=GamesShop;Integrated Security=True;MultipleActiveResultSets=True;Application Name=EntityFramework;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Buy>(entity =>
        {
            entity.HasKey(e => e.BuyId).HasName("PK__Buy__6DF70D4F3111E0B8");

            entity.ToTable("Buy");

            entity.Property(e => e.CustId).HasColumnName("CustID");

            entity.HasOne(d => d.Cust).WithMany(p => p.Buys)
                .HasForeignKey(d => d.CustId)
                .HasConstraintName("FK__Buy__CustID__3E52440B");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("PK__Category__19093A0B88DDE646");

            entity.ToTable("Category");

            entity.Property(e => e.CategoryName)
                .HasMaxLength(30)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.CustId).HasName("PK__Customer__049E3A89A9091DD3");

            entity.ToTable("Customer");

            entity.Property(e => e.CustId).HasColumnName("CustID");
            entity.Property(e => e.CustCreditDetails)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.CustName)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.CustPassWord)
                .HasMaxLength(30)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Game>(entity =>
        {
            entity.HasKey(e => e.GameId).HasName("PK__Games__2AB897DD32EA5C05");

            entity.Property(e => e.GameId).HasColumnName("GameID");
            entity.Property(e => e.GameImg)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.GameName)
                .HasMaxLength(30)
                .IsUnicode(false);

            entity.HasOne(d => d.GameCategoryNavigation).WithMany(p => p.Games)
                .HasForeignKey(d => d.GameCategory)
                .HasConstraintName("FK__Games__GameCateg__398D8EEE");
        });

        modelBuilder.Entity<SaleDetail>(entity =>
        {
            entity.HasKey(e => e.SaleCode).HasName("PK__SaleDeta__0F57A49E2FBB7C72");

            entity.Property(e => e.GameId).HasColumnName("GameID");

            entity.HasOne(d => d.Buy).WithMany(p => p.SaleDetails)
                .HasForeignKey(d => d.BuyId)
                .HasConstraintName("FK__SaleDetai__BuyId__412EB0B6");

            entity.HasOne(d => d.Game).WithMany(p => p.SaleDetails)
                .HasForeignKey(d => d.GameId)
                .HasConstraintName("FK__SaleDetai__GameI__4222D4EF");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
