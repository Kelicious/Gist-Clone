G.Models.Gist = Backbone.RelationalModel.extend({
  urlRoot: "/gists",
  schema: {
   title: 'Text'
  },

  toJSON : function() {
    return { "gist": _.clone(this.attributes) };
  },

  relations: [{
    type: Backbone.HasOne,
    key: 'gistFile',
    relatedModel: "G.Models.GistFile",
    includeInJSON: false,
    reverseRelation: {
      key: 'gist',
      keySource: 'gist_id',
      type: Backbone.HasOne,
      includeInJSON: 'id'
    }
  }]
});