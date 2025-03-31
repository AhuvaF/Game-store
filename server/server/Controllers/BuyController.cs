using BL.services;
using DTO.classes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyController : ControllerBase
    {
        IbuyBL I;
        public BuyController(IbuyBL i)
        {
            this.I = i;
        }
        [HttpGet("getAllCart")]
        public List<BuyDTO> GetAllBuys()
        {
            return I.GetAllcart();
        }

        [HttpPut("Save")]
        public int? Save(BuyDTO b)
        {
            return I.SaveShopping(b);
        }



    }
}
