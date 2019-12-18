using System;
using System.Collections.Generic;

namespace CodingChallenge.Models
{
    public abstract class Vehicle
    {
        private long Id { get; set; }

        private string Type { get; set; }

        private string Make { get; set; }

        private string Model { get; set; }

        private int NumOfDoors { get; set; }

        static List<Vehicle> vehicles = new List<Vehicle>();
        //this data will ideally be kept in a db

        protected Vehicle(long id, string type, string make, string model)
        {
            this.Id = id;
            this.Type = type;
            this.Make = make;
            this.Model = model;
        }

        public static int AddVehicle(Vehicle vehicle)
        {
            try
            {
                int newVehicleId = vehicles.Count + 1;
                vehicle.Id = newVehicleId;

                vehicles.Add(vehicle);
                return 1;
            }
            catch
            {
                throw;
            }
        }


        public static List<Vehicle> GetAllVehicles()
        {
            return vehicles;
        }
    }
}
