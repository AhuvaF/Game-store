using DAL.Models;
using DTO.classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface IcustomerBL
    {
        public bool Add(CustomerDTO c);
        public bool IfCustExist(string name, string password);
        public int GetIdOfCustomer(string name, string password);

    }
}
