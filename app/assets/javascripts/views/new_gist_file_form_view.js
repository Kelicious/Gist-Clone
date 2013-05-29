G.Views.NewGistFileFormView = Backbone.View.extend({
  render: function () {
    var that = this;

    that.gist_file = new G.Models.GistFile();
    that.form = new Backbone.Form({
      model: that.gist
    }).render();

    return that;
  }
});