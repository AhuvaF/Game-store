using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class Game
{
    public int GameId { get; set; }

    public string? GameName { get; set; }

    public int? GameCategory { get; set; }

    public int? GamePrice { get; set; }

    public int? GameAmount { get; set; }

    public string? GameImg { get; set; }

    public virtual Category? GameCategoryNavigation { get; set; }

    public virtual ICollection<SaleDetail> SaleDetails { get; set; } = new List<SaleDetail>();
}
