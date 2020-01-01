using System;
using CodingChallenge.Services;
using Xunit;

namespace CodingChallengeTest.ServicesTests
{
    public class VehicleServiceTest
    {
        [Fact]
        public void TestCreateVehicle()
        {

            //test if CreateVehicle is creating and adding the vehicle
            int initialSize = VehicleService.GetAllVehicles().Count;

            VehicleService.CreateCar("car", "test", "test", 2, 2, "test",
                "none");

            int newSize = VehicleService.GetAllVehicles().Count;

            Assert.Equal(initialSize + 1, newSize);

            //test if CreateVehicle throws exception when the vehicle type is wrong

            bool exceptionThrown = false;
            try
            {
                VehicleService.CreateCar("not_car", "test", "test", 2, 2, "test",
                "none");
            }
            catch
            {
                exceptionThrown = true;
            }

            Assert.True(exceptionThrown);

        }


    }
}
