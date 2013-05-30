G.Views.NewGistFormView = Backbone.View.extend({

  events: {
    "click button.submit": "submit"
  },

  render: function () {
    var that = this;

    that.gist = new G.Models.Gist();
    that.form = new Backbone.Form({
      model: that.gist
    }).render();

    that.$el.html(that.form.el);
    that.$el.append("<button class='submit'>submit</button>");

    return that;
  },

  submit: function() {
    var that = this;

    var errors = this.form.commit({ validate: true });

    that.gist.save()
    .done(function () {
      that.collection.add(that.gist);
      alert("Gist created!");
    })
    .fail(function (response) {
      alert("Gist creation failed, error: " + response.responseJSON.join("\n"));
    });
  }
});
