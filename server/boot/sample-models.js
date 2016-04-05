module.exports = function(app) {
  var Account = app.models.account;
  var Event = app.models.event

  Account.create([
    {username: 'Florian', email: 'florian@rooqie.de', password: 'secret', firstname: 'Florian', lastname: 'Heiwig', birthday: new Date("June 21, 1995"), moved: new Date("Feburary 28, 2016"), sex: 'male', city: 'München', profession:'student'}
  ], function(err, users) {
    if (err) throw err;

    console.log('Created users:', users);

    users[0].events.create({
      name: 'Englischer Garten',
      description: 'Hey Hoe, was geht?',
      date: new Date("April 03, 2016 14:30"),
      location: 'Das Maria',
      category: 'Brunch',
      image: 'http://polpix.sueddeutsche.com/polopoly_fs/1.1712138.1372867455!/httpImage/image.jpg_gen/derivatives/860x860/image.jpg',
      maxParticipants: 5
    }, function(err, project) {
      if (err) throw err;

      console.log('Created event:', project);
    });

    users[0].events.create({
      name: 'event1',
      description: 'bla',
      date: new Date("Feburary 28, 2016"),
      location: 'Das Maria',
      category: 'Brunch',
      image: 'http://polpix.sueddeutsche.com/polopoly_fs/1.1712138.1372867455!/httpImage/image.jpg_gen/derivatives/860x860/image.jpg',
      maxParticipants: 5
    }, function(err, project) {
      if (err) throw err;

      console.log('Created event:', project);
    });
    users[0].events.create({
      name: 'event1',
      description: 'bla',
      date: new Date("Feburary 28, 2016"),
      location: 'Das Maria',
      category: 'Brunch',
      image: 'http://polpix.sueddeutsche.com/polopoly_fs/1.1712138.1372867455!/httpImage/image.jpg_gen/derivatives/860x860/image.jpg',
      maxParticipants: 5
    }, function(err, project) {
      if (err) throw err;

      console.log('Created event:', project);
    });
    users[0].events.create({
      name: 'event1',
      description: 'bla',
      date: new Date("Feburary 28, 2016"),
      location: 'Das Maria',
      category: 'Brunch',
      image: 'http://polpix.sueddeutsche.com/polopoly_fs/1.1712138.1372867455!/httpImage/image.jpg_gen/derivatives/860x860/image.jpg',
      maxParticipants: 5
    }, function(err, project) {
      if (err) throw err;

      console.log('Created event:', project);
    });
    users[0].events.create({
      name: 'event1',
      description: 'bla',
      date: new Date("Feburary 28, 2016"),
      location: 'Das Maria',
      category: 'Brunch',
      image: 'http://polpix.sueddeutsche.com/polopoly_fs/1.1712138.1372867455!/httpImage/image.jpg_gen/derivatives/860x860/image.jpg',
      maxParticipants: 5
    }, function(err, project) {
      if (err) throw err;

      console.log('Created event:', project);
    });
  });

};
