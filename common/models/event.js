module.exports = function(Event) {
  Event.join = function(accountId, eventId, cb) {
    Event.find({where: {eventId: eventId}}, function (err, event) {
      app.models.participant.find({where: {eventId: eventId}}, function (err, eventUsers){
        app.models.participant.find({where: {eventId: eventId, participantId: accountId}}, function (err, userevent){
          console.log(userevent);
          if(eventUsers.length >= event.maxParticipants){
            cb(null, false, "the max group size is reached")
          }else if(userevent.length > 0){
            cb(null, false, "already part of the event")
          } else {
            app.models.participant.create({"eventId": eventId, "participantId": accountId});
            cb(null, true, "successfully added");
          }
        });
      });
    });
  }

  Event.remoteMethod(
      'join',
      {
        http: {path: '/join', verb: 'post'},
        accepts: [
          {arg: 'accountId', type: 'string'},
          {arg: 'eventId', type: 'string'}
        ],
        returns: [
          {arg: 'accepted', type: 'bool'},
          {arg: 'msg', type: 'string'},
        ]
      }
  );
};
