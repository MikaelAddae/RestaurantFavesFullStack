﻿namespace RestaurantFavesAPI.Models
{
    public class Order
    {
        
            
        public int Id { get; set; }   
        public string? Description { get; set; }   
        public string? Restaurant { get; set; }    
        public int? Rating { get; set; }    
        public bool? OrderAgain { get; set; }
        

    }
}
