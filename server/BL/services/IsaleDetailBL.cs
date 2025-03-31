using DTO.classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface IsaleDetailBL
    {
        public bool AddSaleDetail(List<ShoppingCartDTO> cart, int id);
        public List<SaleDetailDTO> GetAllsaleDetails();

    }
}
