using BL.services;
using DTO.classes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleDetailController : ControllerBase
    {
        IsaleDetailBL i;
        public SaleDetailController(IsaleDetailBL i) => this.i = i;


        [HttpGet("getAllSaleDetail")]
        public List<SaleDetailDTO> GetAllSaleDetail()
        {
            return i.GetAllsaleDetails();
        }


        [HttpPost("AddSaleDetail/{id}")]
        public bool AddSaleDetail(List<ShoppingCartDTO> cart, int id)
        {
            return i.AddSaleDetail(cart, id);
        }

 



    }
}
