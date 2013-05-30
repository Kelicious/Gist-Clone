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

    that.gist.gistFile = new G.Models.GistFile();
    that.gistFileFormView = new G.Views.NewGistFileFormView({
      model: that.gist.gistFile
    });

    that.$el.html(that.form.el);
    that.$el.append("<button class='submit'>submit</button>");

    return that;
  },

  submit: function() {
    var that = this;

    var errors = this.form.commit({ validate: true });
    console.log(that.gistFileFormView.model);
    that.collection.add(that.gist);
    that.gist.save();

    console.log(that.gist.gistFile);
    console.log(errors);
  }


});