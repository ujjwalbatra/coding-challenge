using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CodingChallenge.Models;
using Microsoft.AspNetCore.Mvc;

namespace CodingChallenge.Controllers
{
    public class VehicleController : Controller
    {

        [HttpGet]
        [Route("api/vehicle/index")]
        public IEnumerable<Vehicle> GetAllVehicles()
        {
            return Vehicle.GetAllVehicles();
        }


        [HttpPost]
        [Route("api/vehicle/create")]
        public void CreateVehicle([FromBody]string value)
        {
            Console.WriteLine("------------------------------------------------------");
            Console.WriteLine("Hello {0}", value);
            Console.WriteLine("------------------------------------------------------");
            //if (!ModelState.IsValid)
            //    throw new Exception("Invalid Request");

            //try
            //{
            //    Vehicle.AddVehicle(vehicle);
            //}
            //catch
            //{
            //    throw;
            //}
        }

    }
}
