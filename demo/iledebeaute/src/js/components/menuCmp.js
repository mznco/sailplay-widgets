(function (angular, sp, jQuery) {

  angular.module('iledebeaute.directives.menu', [])

    .directive('menuCmp', [function () {
      return {
        restrict: 'E',
        replace: true,
        template: '<div class="header">\n    <a href="#" class="logo"></a>\n    <div class="top_line"></div>\n    <div class="menu">\n        <a href="#" data-ng-repeat="item in model track by $index" data-ng-bind="item.label" data-ng-if="!item.hide"\n           data-ng-click="setActive(item, model);$event.preventDefault();"></a>\n        <div class="user_menu">\n            <!--<a href="#" data-ng-click="profile();$event.preventDefault();">профиль</a>-->\n            <a href="#" data-ng-click="exit();$event.preventDefault();">выход</a>\n        </div>\n    </div>\n    <div class="sub_menu">\n        <a href="#" data-ng-if="getSubmenu() && !item.hide" data-ng-repeat="item in getSubmenu()" data-ng-bind="item.label"\n           data-ng-click="setActive(item, getSubmenu());$event.preventDefault();"></a>\n    </div>\n</div>',
        scope: {
          model: '='
        },
        link: function (scope) {

          scope.setActive = function (item, total) {
            angular.forEach(total, function (val, key) {
              val.active = false;
              if (val.items && val.items.length) {
                angular.forEach(val.items, function (val, key) {
                  val.active = false;
                });
              }
            });
            window.location.hash = item.key;
            item.active = true;
          };

          if (window.location.hash && scope.model) {
            var hash = window.location.hash.replace('#','');
            for (var i = 0, len = scope.model.length; i < len; i++) {
              var item = scope.model[i];
              if (item.key == hash) {
                scope.setActive(item, scope.model);
              }
            }
          }

          scope.getSubmenu = function () {
            if (!scope.model) return;
            for (var i = 0, len = scope.model.length; i < len; i++) {
              var item = scope.model[i];
              if (item.active && item.items && item.items.length) {
                return item.items;
                break;
              }
            }
          };

          scope.exit = function () {
            //  exit function
          };

        }
      }

    }]);

  document.createElement('menu-cmp');
  var elems = document.querySelectorAll('menu-сmp');
  for (var i = 0; i < elems.length; i += 1) {
    angular.bootstrap(elems[i], ['iledebeaute.directives.menu']);
  }

}(window.angular, window.SAILPLAY, window.$));