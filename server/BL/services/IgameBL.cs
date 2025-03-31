using DAL.Models;
using DTO.classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface IgameBL
    {
        public List<GameDTO> GetAllGames();
        public GameDTO GetGameById(int id);
        public bool Add(GameDTO g);
        public bool UpdateGame(int id, GameDTO g);
        public bool Delete(int id);
        public List<GameDTO> GetGamesByCategoryId(int id);

    }
}
