let Node = class extends SD.Structure.Entity {
  constructor({ name, schema = {}, indexes = {} }) {
    super({
      name: 'node',
      schema: _.extend({
        nid: {
          type: Number,
          unique: true,
          optional: true,
          autoValue: () => {
            return this.collection.find().count() + 1;
          }
        },
        bundle: {
          type: String,
          optional: true,
          autoValue: function() {
            return name;
          }
        },
        title: {
          type: String
        }
      }, schema)
    });
    // Assign bundle to instance.
    this.bundle = name;
  }
}

// Export Node.
SD.Structure.Node = Node;
