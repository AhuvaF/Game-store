using BL.services;
using DTO.classes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {

        IcustomerBL i;
        public CustomerController(IcustomerBL i) => this.i = i;

        [HttpGet("chackIfCustomerIsExists")]
        public bool chackIfCustomerIsExists( string name,string password)
        {
            return i.IfCustExist(name,password);
        }

        [HttpPut("addCustomer")]
        public bool addCustomer([FromBody] CustomerDTO c)
        {
            return i.Add(c);
        }


        [HttpGet("getIdOfCust")]
        public int getIdOfCust(string name, string password)
        {
            return i.GetIdOfCustomer(name,password);
        }
    }
}
