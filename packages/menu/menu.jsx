Menu = class Menu {
  static current() {
    return FlowRouter.current();
  }
  static route(route) {
    FlowRouter.route(route.path, {
      subscriptions: function() {
        _.each(route.subscriptions, (options, subscription) => {
          if (typeof subscription == 'string') {
            this.register(subscription, Meteor.subscribe(subscription, _.map(options, (option) => {
              if (typeof option == 'function') {
                return option();
              }
              return option;
            })));
          }
        });
      },
      action: function() {
        var arguments = {
          params: this._params,
          query: this._queryParams
        };

        if (Meteor.isClient) {
          if (route.subscriptions && route.subscriptions.length > 0) {
            route.subscriptions.map((subscription) => {
              FlowRouter.subsReady(subscription, () => {
                ReactLayout.render(Body, {
                  content: React.createElement(route.page_component, arguments)
                });
              });
            });
          }
          else {
            ReactLayout.render(Body, {
              content: React.createElement(route.page_component, arguments)
            });
          }
        }
        else {
          ReactLayout.render(Body, {
            content: React.createElement(route.page_component, arguments)
          });
        }
      }
    });
  }
};

// Defer Script Loading (for faster pageload).
if(Meteor.isServer) {
  FlowRouter.setDeferScriptLoading(true);
}
