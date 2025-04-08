using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class Customer
{
    public int CustId { get; set; }

    public string? CustName { get; set; }

    public string? CustPassWord { get; set; }

    public string? CustCreditDetails { get; set; }

    public virtual ICollection<Buy> Buys { get; set; } = new List<Buy>();
}
