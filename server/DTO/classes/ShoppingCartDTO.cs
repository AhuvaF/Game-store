using DAL.Models;
using DAL.services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes
{
    public class ShoppingCartDTO
    {

        public int? GameId { get; set; }
        public string? GameName { get; set; }
        public double? GamePrice { get; set; }
        public int? GameAmount { get; set; }
        public double? TotalPrice { get; set; }
        public string? gameImg { get; set; }   
    }
}

//// פונקציה להוספת פריט לסל
//public void AddToCart(int id,int amount)
//{
//    var theItem = CartList?.FirstOrDefault(x => x.GameInCart.GameId == id);
//    if(theItem!=null)
//    {
//        theItem.Amount += amount;
//        theItem.TotalPriceItem= (double)(theItem.Amount.Value * theItem.GameInCart.GamePrice);
//    }

//    else
//    {
//        // אם אין פריט כזה, נוסיף אותו
//        Game game = i.GetAll().Find(x => x.GameId == id);

//        CartList.Add(new ItemCartDTO(i) 
//        { Amount = amount,
//          TotalPriceItem = (double)(amount * game.GamePrice),
//            GameInCart = game });
//    }
//    public void UpdateTotalPrice()
//    {
//        // חישוב הסכום הכולל של כל הסל
//        double totalPrice = CartList.Sum(item => item.TotalPriceItem);
//        Console.WriteLine($"סכום כולל של הסל: {totalPrice}");
//    }

//    // פונקציה שמחזירה את כל הפריטים בסל
//    public List<ItemCartDTO> GetAllItemsInCart()
//    {
//        return CartList ?? new List<ItemCartDTO>();
//    }


//}