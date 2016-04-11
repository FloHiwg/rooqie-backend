/*module.exports = function(app) {
  var Account = app.models.account;
  var Event = app.models.event;
  var Location = app.models.location;

  Location.create({
    name: "Hungriges Herz",
    address: "Fraunhoferstraße 42, 80469 München",
    url: "http://www.hungriges-herz.com/",
    lat: 48.1281295,
    lng: 11.573311,
    image: "http://hungriges-herz.mux.de/images/1500x1200z/client/37809/iobcanmeqdgj/hungriges-herz-2.jpg"
  });

  Location.create({
    name: "Englischer Garten",
    address: "none",
    url: "http://www.muenchen.de/",
    lat: 48.1642359,
    lng: 11.6033635,
    image: "http://visit-munich-bavaria.com/sites/default/files/styles/xl/public/englischer-garten-monopteros.jpg"
  });

  Account.create([
    {username: 'Florian', email: 'florian@rooqie.de', password: 'secret', firstname: 'Florian', lastname: 'Heiwig', birthday: new Date("June 21, 1995"), moved: new Date("Feburary 28, 2016"), sex: 'male', city: 'München', profession:'Student', image: 'https://www.xing.com/image/0_6_5_5b36a949a_18797032_7/florian-heiwig-foto.1024x1024.jpg'},
    {username: 'Uli', email: 'Uli@rooqie.de', password: 'secret', firstname: 'Uli', lastname: 'Drömann', birthday: new Date("June 21, 1995"), moved: new Date("Feburary 28, 2016"), sex: 'male', city: 'München', profession:'Student', image: 'http://www.skoen.de/files/content/SKON%20Bilder/uli.jpg'}
  ], function(err, users) {
    if (err) throw err;

    console.log('Created users:', users);

    users[0].events.create({
      name: 'Englischer Garten',
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
      name: 'Hungriges Herz',
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
*/
