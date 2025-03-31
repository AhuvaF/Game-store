using AutoMapper;
using BL.services;
using DAL.Models;
using DAL.services;
using DTO.classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.classes
{
    public class CustomerBL : IcustomerBL
    {
        IstoreDAL<Customer> i;
        IMapper iMaper;
        public CustomerBL(IstoreDAL<Customer> i) {
            this.i = i;
            var config = new MapperConfiguration(cfg => {

                cfg.AddProfile<MyProfile>();

                 });
            iMaper = config.CreateMapper();

        } 
        public bool Add(CustomerDTO c)
        {
            Customer c1= iMaper.Map<CustomerDTO, Customer>(c);
           return i.Add(c1);
        }

        public bool IfCustExist(string name, string password)
        {
            List<Customer> list = i.GetAll();
            foreach (var item in list)
            {
   
                if (item.CustName==name && item.CustPassWord==password)
                {
                    return true;
                }
            }
            return false;
        }
        public int GetIdOfCustomer(string name, string password)
        {
            List<Customer> list = i.GetAll();
            foreach (var item in list)
            {

                if (item.CustName == name && item.CustPassWord == password)
                {
                    return item.CustId;
                }
            }
            return -1;
        }
    }


}
