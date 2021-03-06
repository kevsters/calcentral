'use strict';

angular.module('calcentral.services').service('apiService', function(
  analyticsService,
  authService,
  apiEventService,
  dateService,
  delegateService,
  errorService,
  finaidService,
  financialsService,
  httpService,
  popoverService,
  profileService,
  userService,
  utilService,
  widgetService) {
  // API
  var api = {
    analytics: analyticsService,
    auth: authService,
    events: apiEventService,
    date: dateService,
    delegate: delegateService,
    error: errorService,
    finaid: finaidService,
    financials: financialsService,
    http: httpService,
    popover: popoverService,
    profile: profileService,
    user: userService,
    util: utilService,
    widget: widgetService
  };

  return api;
});
