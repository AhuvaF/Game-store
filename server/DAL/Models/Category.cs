using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class Category
{
    public int CategoryId { get; set; }

    public string? CategoryName { get; set; }

    public virtual ICollection<Game> Games { get; set; } = new List<Game>();
}
