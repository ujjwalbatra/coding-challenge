﻿using System;
using System.Collections.Generic;
using CodingChallenge.Models;

namespace CodingChallenge.ClientApp.src.sevices
{
    public class VehicleService
    {
         static List<Vehicle> vehicles = new List<Vehicle>();
        //this data will ideally be kept in a db

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

        public static void CreateVehicle(
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
