var Guest = require('../models/models').Guest;

module.exports = {
    getAll: function(eventID, callback) {
    	Guest
    	  .findAll({
    	  	where: {eventId: eventID}
    	  })
    	  .then(function(guests) {
    	  	callback(guests);
    	  });
    },

    addOne: function(guest, callback) {
    	Guest
    	  .create(guest)
    	  .then(function(newGuest) {
    	  	callback(newGuest);
    	  });
    },

    addAll: function(guests, callback) {
    	Guest
    	  .bulkCreate(guests)
    	  .then(function(newGuests) {
    	  	callback(newGuests);
    	  });
    }
}