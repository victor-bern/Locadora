using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Locadora.Domain.Entities
{
    public class Rent
    {
        public int Id { get; set; }
        public Client Client { get; set; }
        public Movie Movie { get; set; }
        public DateTime RentDate { get; private set; }
        public DateTime ReturnDate { get; private set; }

        public Rent()
        {
            RentDate = DateTime.UtcNow;
            ReturnDate = Movie.IsReleased ? DateTime.UtcNow.AddDays(2) : DateTime.UtcNow.AddDays(3);
        }
    }
}
