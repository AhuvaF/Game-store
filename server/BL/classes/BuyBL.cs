using AutoMapper;
using BL.services;
using DAL.Models;
using DAL.services;
using DTO.classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace BL.classes
{
    public class BuyBL : IbuyBL
    {
        IMapper iMaper;
        IstoreDAL<Buy> i;
        
        public BuyBL(IstoreDAL<Buy> i)
        {
            this.i = i;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            iMaper = config.CreateMapper();

        }

        public int? SaveShopping(BuyDTO b)
        {
            b.BuyDaty = DateTime.Today;
            Buy b1 = iMaper.Map<BuyDTO, Buy>(b);
            i.Add(b1);
            return b1.BuyId;
        }

        public List<BuyDTO> GetAllcart()
        {
            return iMaper.Map<List<Buy> ,List<BuyDTO>>(i.GetAll());
        }

       

        //public bool Addbug(int code, List<ShoppingCartDTO> cart)
        //{

        //    SaleDetail s = new();
        //    int i;
        //    for (i = 0; i < cart.Count; i++)
        //    {
        //        s.GameId = cart[i].GameCode;
        //    }
        //}
    }
}
