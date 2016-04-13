var PassportConfigurator =
  require('loopback-component-passport').PassportConfigurator;

var passportConfigurator = new PassportConfigurator(app);

passportConfigurator.init();
passportConfigurator.setupModels({
  userModel: app.models.account,
  userIdentityModel: app.models.UserIdentity,
  userCredentialModel: app.models.UserCredential
});
passportConfigurator.configureProvider('facebook-login',
  require('../../providers.json')['facebook-login']);
