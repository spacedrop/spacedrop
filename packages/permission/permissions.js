let Permission = class {
  constructor() {
    this._roles = [
      'administrator'
    ];
    this._permissions = [];
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
    if (_.isObject(permissions)) {
      _.each(permissions, (permission, key) => {
        if (!/^[a-z\s]{3,40}$/.test(key)) {
          console.error('Only 3-40 lowercase a-z and space characters are allowed as keys for permissions. You added: ', key);
          delete permissions[key];
        }
        if (!permission.title) {
          console.error('Missing title for permission: ', key);
          delete permissions[key];
        }
      });
      this._permissions = _.extend(this._permissions, permissions);
    }
  }

  get permissions() {
    return this._permissions;
  }
};

SD.Permission = new Permission();
