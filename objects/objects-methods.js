
let restaurant = {
    name: `Serena Hotel Nairobi`,
    guestCapacity: 70,
    guessCount:0,

    checkavailability:function(partysize){
       let seatsLeft =this.guestCapacity- this.guessCount
        return partysize <=seatsLeft
        
    },
    seatParty: function(restaurantcount){
        this.guessCount = this.guessCount + restaurantcount
    },

    removeParty : function(restaurantparty){
        this.guessCount = this.guessCount - restaurantparty
    }
// seatParty


}
// removeParty


restaurant.seatParty(72)
console.log(restaurant.checkavailability(4));
restaurant.seatParty(30)
console.log(restaurant.checkavailability(4));


