// Technical articles :
// * http://joshowens.me/how-to-optimize-your-mongo-database-for-meteor-js/

/**
 * Entities are instantiated sets of collections with the capability to store
 * documents tagged by bundle name.
 */
class Entity {
  /**
   * C-tor
   * @param Object literal with:
   *  * name: The collection name.
   *  * schame: A SimpleSchema on the Collection.
   *  * subs: An object literal on the Collection.
   */
  constructor({ name, schema = {} }) {
    // Assign arguments as class properties
    let [ args, dummy ] = [...arguments];
    for (let prop of Object.keys(args)) {
      this[prop] = args[prop];
    }

    // Create a Meteor collection
    var entity = SD.Structure[this.constructor.name];
    if (!entity.collection) {
      entity.collection = new Meteor.Collection(this.name);
    }
    this.collection = entity.collection;

    // Attach the schema to the collection.
    this.attachSchema(schema);

    // Add reference to bundle in entity.
    entity._bundle(this);
  }

  attachSchema(ss, options = {}) {
    if (!(ss instanceof SimpleSchema)) {
      ss = new SimpleSchema(ss);
    }

    this.collection._c2 = this.collection._c2 || {};

    // If we've already attached one schema, we combine both into a new schema unless options.replace is `true`
    if (this.schema && options.replace !== true) {
      this.schema = new SimpleSchema([this.schema, ss]);
    }
  }

  /**
   * Exposes collection find() on entity.
   */
  static find() {
    if (!this.collection) {
      console.info(`The class ${this.name} does not have any collection.`);
      return;
    }
    return this.collection.find.apply(this.collection, arguments);
  }

  /**
   * Exposes collection find() on bundle.
   */
  find() {
    var args = arguments;
    args[0] = _.extend(args[0] || {}, {bundle: this.bundle});
    return this.collection.find.apply(this.collection, args);
  }

  /**
   * Exposes collection findOne() on entity.
   */
  static findOne() {
    if (!this.collection) {
      console.info(`The class ${this.name} does not have any collection.`);
      return;
    }
    var args = arguments;
    args[0] = _.extend(args[0] || {}, {bundle: this.bundle});
    return this.collection.findOne.apply(this.collection, args);
  }

  /**
   * Exposes collection findOne() on bundle.
   */
  findOne() {
    return this.collection.findOne.apply(this.collection, arguments);
  }

  /**
   * Exposes collection insert() on bundle.
   */
  insert() {
    // Prepare collection with bundle schema.
    this.collection.simpleSchema = () => {
      return this.schema;
    };
    return this.collection.insert.apply(this.collection, arguments);
  }

  /**
   * Exposes collection update() on bundle.
   */
  update() {
    // Prepare collection with bundle schema.
    this.collection.simpleSchema = () => {
      return this.schema;
    };
    return this.collection.update.apply(this.collection, arguments);
  }

  /**
   * Exposes collection upsert() on bundle.
   */
  upsert() {
    // Prepare collection with bundle schema.
    this.collection.simpleSchema = () => {
      return this.schema;
    };
    return this.collection.upsert.apply(this.collection, arguments);
  }

  /**
   * Adds an index to the entity collection.
   */
  static _ensureIndex() {
    if (Meteor.isServer) {
      this.collection._ensureIndex.apply(this.collection, arguments);
    }
  }

  /**
   * Called by constructor to add bundle instances to entity.
   * @param  {[Entity]} bundle
   */
  static _bundle(bundle) {
    this.bundles = _.union(this.bundles || [], [bundle]);
  }
}
// Export class.
SD.Structure.Entity = Entity;
