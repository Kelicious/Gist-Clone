window.G = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  initialize: function ($rootEl, gistsData) {
    var gists = new G.Collections.Gists(gistsData);

    new G.Routers.GistsRouter($rootEl, gists);

    Backbone.history.start();
  }
}