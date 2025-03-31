using BL.services;
using DAL.Models;
using DTO.classes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        IcategoryBL i;
        public CategoryController(IcategoryBL i) => this.i = i;

        [HttpGet("getAll")]
        public List<CategoryDTO> getAllCategory()
        {
            return i.GetCategoryAll();
        }

        [HttpGet("getCategoryById/{id}")]
        public CategoryDTO GetCategoryById(int id)
        {
            return i.GetCategoryById(id);
        }

        [HttpPut("updateCategory/{id}")]
        public bool Update(int id, CategoryDTO c)
        {
            return i.Update(id, c);
        }

        [HttpPost("addCategory")]
        public bool Add(CategoryDTO c)
        {
            return i.Add(c);
        }

        [HttpDelete("delete/{id}")]
        public bool Delete(int id)
        {
            return i.Delete(id);
        }

    }
}
