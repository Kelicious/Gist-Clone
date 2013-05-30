G.Models.Gist = Backbone.RelationalModel.extend({
  urlRoot: "/gists",
  schema: {
    title: 'Text',
    gistFile: { type: 'List', itemType: 'Object', subSchema: {
      body: "TextArea"
    }}
  },

  toJSON : function() {
    console.log(this.attributes);
    return {
      "gist": {
        "title": this.get("title"),
        "gist_files_attributes": this.get("gistFile")
      }
    };
  },

  relations: [{
    type: Backbone.HasMany,
    key: "gistFiles",
    relatedModel: "G.Models.GistFile",
    includeInJSON: false,
    collectionType: "G.Collections.GistFiles",
    reverseRelation: {
      key: 'gist',
      keySource: 'gist_id',
      type: Backbone.HasOne,
      includeInJSON: 'id'
    }
  }]
});