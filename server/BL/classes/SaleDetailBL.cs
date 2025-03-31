using AutoMapper;
using BL.services;
using DAL.Models;
using DAL.services;
using DTO.classes;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace BL.classes
{
    public class SaleDetailBL : IsaleDetailBL
    {
        IMapper iMapper;
        IstoreDAL<SaleDetail> i;
        GamesShopContext DB = new();
        public SaleDetailBL(IstoreDAL<SaleDetail> i)
        {
            this.i = i;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            iMapper = config.CreateMapper();
        }

        public bool AddSaleDetail(List<ShoppingCartDTO> cart, int id)
        {
            try
            {
                foreach (var item in cart)
                {
                    SaleDetail? ndtl = new SaleDetail();
                    ndtl.BuyId = id;
                    ndtl.GameId = item.GameId;
                    ndtl.SaleAmount = item.GameAmount;
                   
                    i.Add(ndtl);
                }
                return true;
                }
            catch
            {
                return false;
            }
        }
          

        public List<SaleDetailDTO> GetAllsaleDetails()
        {
            var saleDetails = DB.SaleDetails
       .Include(s => s.Game) // טוען את המידע על המשחקים
       .ToList();
            return iMapper.Map<List<SaleDetail>, List<SaleDetailDTO>>(saleDetails);
        }


    }
}
