G.Models.GistFile = Backbone.RelationalModel.extend({
  urlRoot: "/gists",
  schema: {
   body: 'TextArea'
  },

  // toJSON: function() {
  //   return { "gist_file_attributes": _.clone(this.attributes) };
  // }
});