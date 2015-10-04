SD.Menu = class Menu {
  static current() {
    return FlowRouter.current();
  }
  static route(route) {
    FlowRouter.route(route.path, {
      subscriptions: function() {
        _.each(route.subscriptions, (options, subscription) => {
          if (typeof subscription == 'string') {
            this.register(subscription, SD.Utils.SubsManager.subscribe.apply(SD.Utils.SubsManager, _.union([subscription], _.map(options, (option) => {
              if (typeof option == 'function') {
                return option();
              }
              if (typeof option == 'string') {
                var route = FlowRouter.current();
                return route.params[option];
              }
              return option;
            }))));
          }
        });
      },
      action: function() {
        var current = FlowRouter.current();
        var arguments = {
          params: current.params,
          query: current.queryParams
        };

        if (Meteor.isClient) {
          if (route.subscriptions && route.subscriptions.length > 0) {
            route.subscriptions.map((subscription) => {
              FlowRouter.subsReady(subscription, () => {
                ReactLayout.render(SD.Views.Page, {
                  content: React.createElement(route.page_component, arguments)
                });
              });
            });
          }
          else {
            ReactLayout.render(SD.Views.Page, {
              content: React.createElement(route.page_component, arguments)
            });
          }
        }
        else {
          ReactLayout.render(SD.Views.Page, {
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
