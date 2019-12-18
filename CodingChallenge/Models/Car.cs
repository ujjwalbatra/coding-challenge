using System;

namespace CodingChallenge.Models
{
    public class Car : Vehicle
    {
        private int NumOfDoors { get; set; }

        private int NumOfWheels { get; set; }

        private string BodyType { get; set; }

        private string Engine { get; set; }


        public Car(long id,
                   string type,
                   string make,
                   string model,
                   int numOfDoors,
                   int numOfWheels,
                   string bodyType,
                   string engine) : base(id, type, make, model)
        {
            this.NumOfDoors = numOfDoors;
            this.NumOfWheels = numOfWheels;
            this.BodyType = bodyType;
            this.Engine = engine;
        }

    }
}
