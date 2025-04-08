using AutoMapper;
using BL.services;
using DAL.Models;
using DAL.services;
using DTO.classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;
//using static System.Net.Mime.MediaTypeNames;

namespace BL.classes
{
    public class CategoryBL : IcategoryBL
    {
        IstoreDAL<Category> i;
        IMapper iMaper;
        public CategoryBL(IstoreDAL<Category> i)
        {
            this.i = i;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            iMaper = config.CreateMapper();
        }

 
    public bool Add(CategoryDTO c)
        {
            Category c1 = iMaper.Map<CategoryDTO, Category>(c);
        return i.Add(c1);

        }

        public bool Delete(int id)
        {
            return i.Delete(id);
        }

        public List<CategoryDTO> GetCategoryAll()
        {
            
            return iMaper.Map<List<Category>, List<CategoryDTO>>(i.GetAll());
        }

        public CategoryDTO GetCategoryById(int id)
        {
            CategoryDTO list =iMaper.Map<Category, CategoryDTO>( i.GetAll().Find(x=>x.CategoryId==id));
            return list;
        }

        public bool Update(int id,CategoryDTO c)
        {
            Category c1 = iMaper.Map<CategoryDTO, Category>(c);
            return i.Update(id,c1);
        }


    }
}
