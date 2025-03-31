using DAL.Models;
using DTO.classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface IcategoryBL
    {
        public List<CategoryDTO> GetCategoryAll();
        public CategoryDTO GetCategoryById(int id);
        public bool Add(CategoryDTO c);
        public bool Update(int id, CategoryDTO c);
        public bool Delete(int c);

    }
}
