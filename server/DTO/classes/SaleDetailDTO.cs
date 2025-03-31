using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes
{
    public class SaleDetailDTO
    {
        public int SaleCode { get; set; }

        public int? BuyId { get; set; }

        public int? GameId { get; set; }

        public int? SaleAmount { get; set; }
        //מה הוספתי
        public string? NameGame { get; set; }

     

    }
}
