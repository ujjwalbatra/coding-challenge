using System;
using System.Collections.Generic;
using CodingChallenge.Models;

namespace CodingChallenge.Services
{
    public class VehicleService
    {
         private static List<Vehicle> vehicles = new List<Vehicle>();
        //this data will ideally be kept in a db

        private static int AddVehicle(Vehicle vehicle)
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

        public static void CreateCar(
            string type,
            string make,
            string model,
            int numOfDoors,
            int numOfWheels,
            string bodyType,
            string engine)
        {
            Vehicle vehicle;
            if (type == "car")
                vehicle = new Car(make, model, numOfDoors, numOfWheels, bodyType, engine);
            else
                throw new Exception("Invalid vehicle type");
            try
            {
                AddVehicle(vehicle);
            }
            catch
            {
                throw;
            }

        }
    }
}
