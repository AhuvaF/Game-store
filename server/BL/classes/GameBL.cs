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
    public class GameBL : IgameBL
    {

        IstoreDAL<Game> i;
        IMapper iMaper;

        public GameBL(IstoreDAL<Game> i)
        {
            this.i = i;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            iMaper = config.CreateMapper();
        }

        public bool Add(GameDTO g)
        {
            Game gameToAdd = iMaper.Map<GameDTO, Game>(g);
            return i.Add(gameToAdd);
        }

        public bool Delete(int id)
        {
            return i.Delete(id);
        }

        public List<GameDTO> GetAllGames()
        {

            return iMaper.Map<List<Game>,List<GameDTO>>(i.GetAll());
        }

        public GameDTO GetGameById(int id)
        {

            GameDTO game = iMaper.Map<Game, GameDTO>( i.GetAll().Find(x => x.GameId == id));

            return game;
        }

        public List<GameDTO> GetGamesByCategoryId(int idCategory)
        {
          List<Game>  list= i.GetAll();
          List<Game>? newlist = null ;
            foreach (var item in list)
            {
                if (item.GameCategory == idCategory)
                    newlist?.Add(item);
            }
            List<GameDTO> newlist1 = iMaper.Map<List<Game>, List<GameDTO>>(newlist);
            return newlist1;
        }

        public bool UpdateGame(int id, GameDTO g)
        {
            Game game = iMaper.Map<GameDTO, Game>(g);
            return i.Update(id, game);
        }
    }
}
