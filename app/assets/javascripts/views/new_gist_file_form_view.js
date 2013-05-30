G.Views.NewGistFileFormView = Backbone.View.extend({
  render: function () {
    var that = this;

    that.form = new Backbone.Form({
      model: that.model
    }).render();

    console.log(that.$el);

    return that;
  }
});