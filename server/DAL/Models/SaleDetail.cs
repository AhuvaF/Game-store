using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class SaleDetail
{
    public int? SaleCode { get; set; }

    public int? BuyId { get; set; }

    public int? GameId { get; set; }

    public int? SaleAmount { get; set; }

    public virtual Buy? Buy { get; set; }

    public virtual Game? Game { get; set; }
}
