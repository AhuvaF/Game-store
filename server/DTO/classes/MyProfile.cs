using AutoMapper;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes
{
    public class MyProfile:Profile
    {
        //CreateMap<ItemsTable, ItemDTO>().
        //        //MapFrom-מיפוי קשר הגומלין
        //        ForMember(x=>x.nameCategory, y=>y.
        //        MapFrom(v=>v.IdcategoryNavigation.NameCategory))
        //        .ForMember(g=>g.barcod, c=>c.
        //        MapFrom(m=>m.IdcategoryNavigation.NameCategory+"9090"));
        //    CreateMap<ItemDTO, ItemsTable>();
     public MyProfile()
        {
            CreateMap<Category, CategoryDTO>();
            CreateMap<CategoryDTO, Category>();
            //כדי שבטבלת משחקים יוצג שם הקטגוריה
            CreateMap<Game, GameDTO>();
            //     ForMember(x => x.NameGameCategory, y => y.
            //    MapFrom(v => v.GameCategoryNavigation.CategoryName));
            //CreateMap<GameDTO, Game>().
            //    ForMember(x => x.GameCategoryNavigation.CategoryName, y => y.
            //MapFrom(v => v.NameGameCategory));

            CreateMap<GameDTO, Game>();
        //  .ForPath(x => x.GameCategoryNavigation.CategoryName, y => y.
        //      MapFrom(v => v.NameGameCategory));

            CreateMap<Customer, CustomerDTO>();
            CreateMap<CustomerDTO, Customer>();

            CreateMap<Buy, BuyDTO>();
            CreateMap<BuyDTO, Buy>();

            CreateMap<SaleDetailDTO, SaleDetail>().
            ForPath(x => x.Game.GameName, y => y.
            MapFrom(v => v.NameGame));

            CreateMap<SaleDetail, SaleDetailDTO>().ForMember(x => x.NameGame, y => y.
            MapFrom(v => v.Game.GameName));





        }
        
    }
}
