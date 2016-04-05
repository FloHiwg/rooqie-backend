module.exports = function(Participant) {
  Participant.participates = function(accountId, eventId, cb) {
    Participant.find({where: {participantId: accountId, eventId: eventId}}, function (err, instance) {
      if(instance.length > 0){
        cb(null, true);
      } else {
        cb(null, false);
      }
    });
  }

  Participant.remoteMethod(
      'participates',
      {
        http: {path: '/participates', verb: 'get'},
        accepts: [
          {arg: 'accountId', type: 'number'},
          {arg: 'eventId', type: 'number'}
        ],
        returns: {arg: 'participates', type: 'bool'}
      }
  );
};
