let Node = class extends SD.Structure.Entity {
  constructor({ bundle, schema = {}, indexes = {} }) {
    super({
      name: 'node',
      schema: _.extend({
        nid: {
          type: Number,
          autoValue: () => {
            return this.collection.find().count() + 1;
          }
        },
        bundle: {
          type: String,
          autoValue: function() {
            return bundle;
          }
        },
        title: {
          type: String
        }
      }, schema),
      indexes: _.extend({
        'nid': 1
      }, indexes)
    })
  }
}

// Export Node.
SD.Structure.Node = Node;
