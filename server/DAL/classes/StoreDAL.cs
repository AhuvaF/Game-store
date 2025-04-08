using DAL.Models;
using DAL.services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.classes
{
    public class StoreDAL<T> : IstoreDAL<T> where T :class
    {
        GamesShopContext DB = new();

        // פונקציה לבדיקת הסוג,
        //.Include(j=>j.IdcategoryNavigation)
        private IEnumerable<string> GetNavigationProperties(Type entityType)
        {
            // מחפש את כל ה-Navigation Properties באמצעות Reflection
            var navigationProperties = entityType.GetProperties()
                .Where(p => p.PropertyType.IsClass && p.PropertyType != typeof(string))
                .Select(p => p.Name);

            return navigationProperties;
        }

 
        public List<T> GetAll()
        {
            if (typeof(T) == typeof(SaleDetail))
            {
                return DB.Set<SaleDetail>().Include(i => i.Game).ToList() as List<T>;
            }

            return DB.Set<T>().ToList();
        }

        public bool Add(T item)
        {
            try
            {
                DB.Set<T>().Add(item);
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Delete(int id)
        {
            try
            {
                var inti = DB.Set<T>().Find(id);
                if (inti != null)
                {
                    DB.Remove(inti);
                    DB.SaveChanges();
                    return true;
                }
                return false;
            }
            catch
            {
                return false;
            }
        }

        public bool Update(int id, T item)
        {
            try
            {
                var typ = DB.Set<T>().Find(id);
                if (typ != null)
                {
                    DB.Entry(typ).CurrentValues.SetValues(item);
                    DB.SaveChanges();
                    return true;
                }
                return false;
            }
            catch
            {
                return false;
            }
        }
    }
}
