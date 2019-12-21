using System.Collections.Generic;
using System.Text.Json;
using CodingChallenge.ClientApp.src.sevices;
using CodingChallenge.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CodingChallenge.Controllers
{
    public class VehicleController : Controller 
    {

        [HttpGet]
        [Route("api/vehicle/index")]
        public IEnumerable<Vehicle> GetAllVehicles()
        {
            return VehicleService.GetAllVehicles();
        }


        [HttpPost]
        [Route("api/vehicle/create")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult CreateVehicle([FromBody] JsonElement vehicle)
        {
            string make = vehicle.GetProperty("Make").ToString();
            string model = vehicle.GetProperty("Model").ToString();
            int numOfDoors = int.Parse(vehicle.GetProperty("NumOfDoors").ToString());
            int numOfWheels = int.Parse(vehicle.GetProperty("NumOfWheels").ToString());
            string engine = vehicle.GetProperty("Engine").ToString();
            string type = vehicle.GetProperty("Type").ToString();
            string bodyType = vehicle.GetProperty("BodyType").ToString();

            try
            {
                VehicleService.CreateVehicle(type,
                    make, model, numOfDoors, numOfWheels, bodyType, engine);
            }
            catch
            {
                return BadRequest();
            }

            return Ok();
        }

    }
}
