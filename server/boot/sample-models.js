module.exports = function(app) {
  var Account = app.models.account;
  var Event = app.models.event;
  var Location = app.models.location;

  Location.create({
    name: "Hungriges Herz",
    address: "Fraunhoferstraße 42, 80469 München",
    url: "http://www.hungriges-herz.com/",
    lat: 48.1281295,
    lng: 11.573311
  });

  Location.create({
    name: "Englischer Garten",
    address: "none",
    url: "http://www.muenchen.de/",
    lat: 48.1642359,
    lng: 11.6033635
  });

  Account.create([
    {username: 'Florian', email: 'florian@rooqie.de', password: 'secret', firstname: 'Florian', lastname: 'Heiwig', birthday: new Date("June 21, 1995"), moved: new Date("Feburary 28, 2016"), sex: 'male', city: 'München', profession:'student', image: 'http://www.zolawindows.com/zolaw/wp-content/uploads/2012/05/florian--e1338501784573.jpg'},
    {username: 'Wiebke', email: 'Wiebke@rooqie.de', password: 'secret', firstname: 'Wiebke', lastname: 'H', birthday: new Date("June 21, 1995"), moved: new Date("Feburary 28, 2016"), sex: 'female', city: 'München', profession:'journalist', image: 'http://www.zolawindows.com/zolaw/wp-content/uploads/2012/05/florian--e1338501784573.jpg'}
  ], function(err, users) {
    if (err) throw err;

    console.log('Created users:', users);

    users[0].events.create({
      name: 'Ausflug, Englischer Garten',
      description: 'Hey Hoe, was geht? Wollte am Wochenende mal in den Englischen Garten! Würde mich über Gesellschaft freuen! ',
      date: new Date("April 09, 2016 14:30"),
      locationId: 2,
      category: 'trip',
      maxParticipants: 5
    }, function(err, project) {
      if (err) throw err;

      console.log('Created event:', project);
    });

    users[0].events.create({
      name: 'Frühstück, Hungriges Herz',
      description: 'Hi! Hab den Kater meines Lebens und hätte Lust auf ein deftiges Frühstück. Leidensgenossen irgendwo?',
      date: new Date("April 10, 2016 12:00"),
      locationId: 1,
      category: 'breakfast',
      maxParticipants: 5
    }, function(err, project) {
      if (err) throw err;

      console.log('Created event:', project);
    });
  });

};
