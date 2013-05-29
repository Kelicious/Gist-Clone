G.Models.Gist = Backbone.Model.extend({
  urlRoot: "/gists",
  schema: {
   title: 'Text'
  },

  toJSON : function() {
    return { "gist": _.clone(this.attributes) };
  }
});