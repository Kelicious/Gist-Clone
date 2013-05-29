G.Views.GistDetailView = Backbone.View.extend({
  events: {
    "click button.favorite": "favorite",
    "click button.unfavorite": "unfavorite"
  },

  initialize: function(opts) {
    this.favorites = opts.favorites;
    var that = this;
    var renderCallback = that.render.bind(that);
    that.favorites.on('change', renderCallback);
  },

  render: function () {
    var that = this;

    that.model.favorited = false;
    _(that.favorites.favoriteIds()).each(function (id) {
      if (that.model.get("id") == id) {
        that.model.favorited = true;
      }
    });

    var renderedContent = JST["gists/detail"]({
      gist: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },

  favorite: function () {
    var that = this;

    $.post('/gists/' + that.model.get('id') + '/favorite')
    .done(function () {
      console.log("Favorited!");
      that.favorites.fetch().done(function() {
        that.favorites.trigger('change')
      });
    })
    .fail(function (response) {
      console.log(response);
      console.log(response.responseJSON.join("\n"));
    });
  },

  unfavorite: function () {
    var that = this;

    $.post('/gists/' + that.model.get('id') + '/favorite', { _method: "delete" })
    .done(function () {
      console.log("Unfavorited!");
      that.favorites.fetch().done(function() {
        that.favorites.trigger('change')
      });
    })
    .fail(function (response) {
      console.log(response);
      alert(response.responseJSON.join("\n"));
    });
  }
});