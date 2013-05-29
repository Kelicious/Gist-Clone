G.Models.GistFile = Backbone.RelationalModel.extend({
  urlRoot: "/gists",
  schema: {
   body: 'TextArea'
  },
});