// Technical articles :
// * http://joshowens.me/how-to-optimize-your-mongo-database-for-meteor-js/

/**
 * Base class for Collection. Takes car of default value and ensure indexes.
 */
class Entity {
  /**
   * C-tor
   * @param Object literal with:
   *  * name: The collection name.
   *  * schame: A SimpleSchema on the Collection.
   *  * subs: An object literal on the Collection.
   */
  constructor({ name, schema }) {

    // Assign arguments as class properties
    let [ args, dummy ] = [...arguments];
    for (let prop of Object.keys(args)) {
      this[prop] = args[prop];
    }
    // Create a Meteor collection
    this.collection = new Meteor.Collection(this.name);
    // Create Schema and attach it to the collection
    this.schema = new SimpleSchema(schema);
    this.collection.attachSchema(this.schema);
  }

  /**
   * Exposes collection find().
   */
  find() {
    return this.collection.find.apply(this.collection, arguments);
  }

  /**
   * Exposes collection findOne().
   */
  findOne() {
    return this.collection.findOne.apply(this.collection, arguments);
  }

  /**
   * Exposes collection insert().
   */
  insert() {
    return this.collection.insert.apply(this.collection, arguments);
  }

  /**
   * Exposes collection update().
   */
  update() {
    return this.collection.update.apply(this.collection, arguments);
  }

  /**
   * Exposes collection upsert().
   */
  upsert() {
    return this.collection.upsert.apply(this.collection, arguments);
  }
}
// Export class.
SD.Structure.Entity = Entity;

// Server only
if (Meteor.isServer) {
  /**
   * Server side base collection. Add defaults and indexes in Mongo.
   */
  class ServerEntity extends Entity {
    /**
     * C-tor.
     * @param  {Object} sharedOptions Same options as thus for BaseCollection.
     * @param  {Object} serverOptions Specific options for the defaults and the indexes.
     */
    constructor({ name, schema, indexes }) {
      super(arguments[0]);
      if (indexes) {
        _.each(indexes, (index) => {
          this._createIndexes(indexes);
        });
      }
    }
    _createIndexes(index) {
      this.collection._ensureIndex(index);
    }
  }
  // Export class.
  SD.Structure.Entity = ServerEntity;
}
