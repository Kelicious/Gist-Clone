G.Collections.Favorites = Backbone.Collection.extend({
  model: G.Models.Favorite,
  url: '/favorites',

  initialize: function() {
    this.fetch();
  },

  favoriteIds: function() {
    return this.map(function (fav) {
      return fav.get("gist_id");
    });
  }
});