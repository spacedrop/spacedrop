let Permission = class {
  constructor() {
    this._roles = [
      'administrator'
    ];
    this._permissions = new SD.Structure.Entity({
      name: 'permission',
      schema: {
        key: {
          type: String,
          regEx: /^[a-z\s]{3,40}$/,
          unique: true
        },
        title: {
          type: String
        },
        description: {
          type: String,
          optional: true
        }
      }
    });
  }

  set roles(roles) {
    if (_.isArray(roles)) {
      this._roles = _.union(this._roles, roles);
    }
  }

  get roles() {
    return this._roles;
  }

  set permissions(permissions) {
    if (_.isObject(permissions) && Meteor.isServer) {
      _.each(permissions, (permission, key) => {
        if (/^[a-z\s]{3,40}$/.test(key)) {
          this._permissions.upsert({key: key}, {$set: _.extend({key: key}, permission)});
        }
        else {
          console.error('Only 3-40 lowercase a-z and space characters are allowed as keys for permissions. You added: ', name);
        }
      });
    }
  }

  get permissions() {
    return this._permissions.find().fetch();
  }
};

SD.Permission = new Permission();
