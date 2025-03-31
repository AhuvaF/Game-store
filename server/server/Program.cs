using AutoMapper;
using BL.classes;
using BL.services;
using DAL.classes;
using DAL.Models;
using DAL.services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.DependencyInjection;
using DTO.classes;
using Microsoft.Data.SqlClient;
namespace server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // הוספת שירותי CORS
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", policy =>
                {
                    policy.AllowAnyOrigin()    // מאפשר לכל דומיין לגשת
                          .AllowAnyMethod()    // מאפשר כל שיטה (GET, POST, וכו')
                          .AllowAnyHeader();   // מאפשר כל כותרת
                });
            });

            
            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddScoped<IcategoryBL, CategoryBL>();
            builder.Services.AddScoped<IgameBL, GameBL>();
            builder.Services.AddScoped<IcustomerBL, CustomerBL>();
            builder.Services.AddScoped<IbuyBL, BuyBL>();
            builder.Services.AddScoped<IsaleDetailBL, SaleDetailBL>();
            //      builder.Services.AddCors();

            builder.Services.AddScoped<IstoreDAL<Category>, StoreDAL<Category>>();
            builder.Services.AddScoped<IstoreDAL<Game>, StoreDAL<Game>>();
            builder.Services.AddScoped<IstoreDAL<Customer>, StoreDAL<Customer>>();
            builder.Services.AddScoped<IstoreDAL<Buy>, StoreDAL<Buy>>();
            builder.Services.AddScoped<IstoreDAL<SaleDetail>, StoreDAL<SaleDetail>>();


                builder.Services.AddAutoMapper(typeof(Program));
            builder.Services.AddDbContext<GamesShopContext>
            (options => options.UseSqlServer("Data Source=localhost;Initial Catalog=GamesShop;Integrated Security=True;TrustServerCertificate=True;MultipleActiveResultSets=True"));

           // builder.WebHost.UseUrls("https://localhost:44368");


            var app = builder.Build();
            app.UseCors("AllowAll");

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseStaticFiles();

            app.MapControllers();

            app.Run();
        }
    }
}
