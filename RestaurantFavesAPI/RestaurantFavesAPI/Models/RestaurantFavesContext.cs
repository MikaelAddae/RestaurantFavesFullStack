using Microsoft.EntityFrameworkCore;

namespace RestaurantFavesAPI.Models
{
    public class RestaurantFavesContext : DbContext
    {
            
        public DbSet<Order> Orders { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=RestaurantFavesAPI;Trusted_Connection=True;TrustServerCertificate=True");
            }
        }
    }


}

