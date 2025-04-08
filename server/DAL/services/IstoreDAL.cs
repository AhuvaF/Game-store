using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface IstoreDAL<T> where T:class
    {
        public List<T> GetAll();
        public bool Update(int id, T item);
        public bool Delete(int id);
        public bool Add(T item);

    }
}
