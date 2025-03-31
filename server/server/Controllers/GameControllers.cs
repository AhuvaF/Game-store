using BL.services;
using DTO.classes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameControllers : ControllerBase
    {
        IgameBL i;
        public GameControllers(IgameBL i) => this.i = i;

        [HttpGet("getAllGames")]
        public List<GameDTO> getAllGames()
        {
            return i.GetAllGames();
        }

        [HttpGet("GetGameById/{id}")]
        public GameDTO GetGameById(int id)
        {
            return i.GetGameById(id);
        }

        [HttpPut("UpdateGame/{id}")]
        public bool Update(int id, GameDTO c)
        {
            return i.UpdateGame(id, c);
        }

        [HttpPost("addGame")]
        public bool Add(GameDTO c)
        {
            return i.Add(c);
        }

        [HttpDelete("deleteGame/{gameId}")]
        public bool Delete(int gameId)
        {
            return i.Delete(gameId);
        }
    }
}
