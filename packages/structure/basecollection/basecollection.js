// Technical articles :
// * http://joshowens.me/how-to-optimize-your-mongo-database-for-meteor-js/

/** Base class for Collection. Takes car of default value and ensure indexes. */
class BaseCollection {
  /**
   * C-tor
   * @param Object literal with:
   *  * name: The collection name.
   *  * schame: A SimpleSchema on the Collection.
   *  * subs: An object literal on the Collection.
   */
  constructor({ name, schema, subs }) {
    // Assign arguments as class properties
    let [ args, dummy ] = [...arguments];
    for (let prop of Object.keys(args)) {
      this[prop] = args[prop];
    }
    // Create a logger
    this.logger = Logger.createLogger(`Collection ${this.name}`);
    // Create a Meteor collection
    this.collection = new Meteor.Collection(this.name);
    this.logger.info('Created');
    // Create Schema and attach it to the collection
    this.schema = new SimpleSchema(schema);
    this.collection.attachSchema(this.schema);
    this.logger.info('Schema attached');
    // Create subscription methods
    for (let key of Object.keys(this.subs)) {
      // Ensure immediate call
      (subName => {
        this.logger.info(`Subscrition method ${this.name}${subName} declared`);
        // Create the method
        let subscribeFct = function() {
          let variables = [...arguments];
          this.logger.info('Subscribing to', subName, 'with', variables);
          let boundVars = [`${this.name}${subName}`].concat(variables);
          return SD.Utils.SubManager.subscribe.apply(SD.Utils.SubManager, boundVars);
        };
        Object.defineProperty(this, `sub${subName}`, { value: subscribeFct });
      })(key);
    }
  }
}
// Export class
SD.Structure.BaseCollection = BaseCollection;

// Server only
if (Meteor.isServer) {
  /** Server side base collection. Add defaults and indexes in Mongo */
  class ServerBaseCollection extends BaseCollection {
    /**
     * C-tor.
     * @param  {Object} sharedOptions Same options as thus for BaseCollection.
     * @param  {Object} serverOptions Specific options for the defaults and the indexes.
     */
    constructor(sharedOptions, serverOptions) {
      super(sharedOptions);
      // Assign serverOptions as class properties
      for (let prop of Object.keys(serverOptions)) {
        this[prop] = serverOptions[prop];
      }
      // Create indexes if provided
      if (this.indexes) { this._createIndexes(); }
      // Create default data if provided
      if (this.defaults) { this._createDefaults(); }
      // Publish data for the subscriptions
      if (this.subs) { this._createPublications(); }
    }
    _createIndexes() {
      this.collection._ensureIndex(this.indexes);
      this.logger.info('Indexes created');
    }
    _createDefaults() {
      if (this.collection.find().count() !== 0) {
        return this.logger.info('Defaults already filled');
      }
      // Add MongoID's
      for (var d of this.defaults) {
        d._id = new Meteor.Collection.ObjectID().valueOf();
      }
      // Batch insert default Documents
      this.collection.rawCollection().insert(this.defaults, (err, res) => {
        if (err) {
          return this.logger.error(err);
        }
        this.logger.info('Defaults created');
      });
    }
    _createPublications() {
      for (let key of Object.keys(this.subs)) {
        this.logger.info(`Publishing ${this.name}${key}`);
        // Ensure immediate call
        (subName => {
          const publishFct = function() {
            this.logger.debug('Received args', arguments);
            this.logger.info(`Publishing ${subName} for user ${this.userId} with ${arguments.length} args`);
            // Check arguments and build a potential mongo query selector
            let query = {};
            if (this.subs[subName].query) {
              // Subscription is on a query
              for (let varIdx in arguments) {
                check(arguments[varIdx],
                      this.schema.getDefinition(this.subs[subName].query[varIdx]).type);
                query[this.subs[subName].query[varIdx]] = arguments[varIdx];
              }
            } else if (this.subs[subName].filter) {
              // Subscription is on a filter
              query = this.subs[subName].filter;
            }
            // Get query options
            let options = this.subs[subName].options ? this.subs[subName].options : {};
            // When a query parameter is used, consider the return a a single element
            return this.collection.find(query, options);
          }.bind(this);
          Meteor.publish(`${this.name}${subName}`, publishFct);
        })(key);
      }
      this.logger.info('Data published');
    }
  }
  // Export class
  SD.Structure.ServerBaseCollection = ServerBaseCollection;
}
