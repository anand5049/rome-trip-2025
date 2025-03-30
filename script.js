new Vue({
  el: '#app',
  data: {
    days: itinerary.days,
    tickets: tickets.bookings
  },
  methods: {
    getTicket: function(dayNumber) {
      return this.tickets.filter(t => t.day === dayNumber);
    }
  }
});
