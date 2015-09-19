var ScrollTop = new ReactiveDict('scrolltop');

// Keep track of scrolling during navigation.
(function(history){
   var pushState = history.pushState;
   history.pushState = function(state) {
       if (typeof history.onpushstate == "function") {
           history.onpushstate({state: state});
       }
       // whatever else you want to do
       // maybe call onhashchange e.handler
       return pushState.apply(history, arguments);
   }
})(window.history);

FlowRouter.triggers.exit([function() {
  var route = FlowRouter.current();
  ScrollTop.set(route.path, $(window).scrollTop());
}]);

history.onpushstate = function(e) {
  window.scrollTo(0, 0);
};

window.onpopstate = function(e) {
  $('#react-root').css('opacity', 0);
  // Before routechange.
  setTimeout(function() {
    // After routechange.
    var route = FlowRouter.current();
    var scrolltop = ScrollTop.get(route.path);
    delete ScrollTop.keys[route.path];
    setTimeout(function() {
      window.scrollTo(0, scrolltop);
      $('#react-root').animate({opacity: 1}, 150);
    }, 0);
  }, 0);
}
