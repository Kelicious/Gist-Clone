G.Models.Gist = Backbone.RelationalModel.extend({
  urlRoot: "/gists",
  schema: {
   title: 'Text',
   gistFile: { type: "Object", subSchema: {
     body: "TextArea"
   }}
  },

  toJSON : function() {
    console.log(this.attributes);
    return {
      "gist": {
        "title": this.get("title"),
        "gist_file_attributes": this.get("gistFile")
      }
    };
  },

  relations: [{
    type: Backbone.HasOne,
    key: "gistFile",
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