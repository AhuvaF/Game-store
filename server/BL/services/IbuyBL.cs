using DTO.classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface IbuyBL
    {
        public int? SaveShopping(BuyDTO b);

        public List<BuyDTO> GetAllcart();

       // public bool Addbug(int code, List<ShoppingCartDTO> cart);
    }
}
