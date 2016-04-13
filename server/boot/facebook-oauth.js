var PassportConfigurator =
  require('loopback-component-passport').PassportConfigurator;

var passportConfigurator = new PassportConfigurator(app);

passportConfigurator.init();
passportConfigurator.setupModels({
  userModel: app.models.account,
  userIdentityModel: app.models.userIdentity,
  userCredentialModel: app.models.userCredential
});
passportConfigurator.configureProvider('facebook-login',
  require('../../providers.json')['facebook-login']);
