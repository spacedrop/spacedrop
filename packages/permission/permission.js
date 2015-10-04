let Permission = class {
  constructor() {
    this._roles = {
      'guest': {
        'access content': 1
      },
      'administrator': {}
    };
    this._permissions = {};
  }

  role({ name, permissions = {} }) {
    if (_.isString(name)) {
      this._roles[name] = permissions;
    }
  }

  set roles(role) {
    console.info('You can only add roles through the api.');
    return this._roles;
  }

  get roles() {
    return this._roles;
  }

  permission({ name, title, description = "" }) {
    if (_.isString(name) && _.isString(title) && _.isString(description)) {
      if (!/^[a-z\s]{3,40}$/.test(name)) {
        console.error('Only 3-40 lowercase chars consisting of a-z and space are allowed as key for permission, you added: ', name);
        return;
      }
      if (!title) {
        console.error('Missing title for permission: ', name);
        return;
      }
      this._permissions[name] = {title: title, description: description};
    }
  }

  set permissions(permission) {
    console.info('You can only add permissions through the api.');
    return this._permissions;
  }

  get permissions() {
    return this._permissions;
  }
};

SD.Permission = new Permission();
