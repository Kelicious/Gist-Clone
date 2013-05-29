G.Routers.GistsRouter = Backbone.Router.extend({
  initialize: function ($rootEl, gists) {
    this.$rootEl = $rootEl;
    this.gists = gists;
    this.favorites = new G.Collections.Favorites();
    this.favorites.reset($('#content').data('favorites'));
  },

  routes: {
    "" : "index",
    "gists/new" : "new",
    "gists/:id" : "show",
  },

  index: function() {
    var that = this;

    that.$rootEl.empty();
  },

  show: function(id) {
    var that = this;

    var gist = this.gists.get(id);
    var gistDetailView = new G.Views.GistDetailView({
      model: gist,
      favorites: this.favorites
    });

    that.$rootEl.html(gistDetailView.render().$el);
  },

  new: function() {
    var that = this;

    var newGistFormView = new G.Views.NewGistFormView({
      collection: that.gists
    });

    that.$rootEl.html(newGistFormView.render().$el);
  }

});