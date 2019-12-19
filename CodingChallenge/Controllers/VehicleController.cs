using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CodingChallenge.Models;
using Microsoft.AspNetCore.Mvc;

namespace test.Controllers
{
    public class ValuesController : Controller
    {

        [HttpGet]
        [Route("api/vehicle/index")]
        public IEnumerable<Vehicle> GetAllVehicles()
        {
            return Vehicle.GetAllVehicles();
        }


        [HttpPost]
        [Route("api/vehicle/create")]
        public void CreateVehicle(Vehicle vehicle)
        {
            if (!ModelState.IsValid)
                throw new Exception("Invalid Request");

            try
            {
                Vehicle.AddVehicle(vehicle);
            }
            catch
            {
                throw;
            }
        }

    }
}
