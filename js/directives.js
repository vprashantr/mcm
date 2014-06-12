'use strict';

/* Directives */

var globalScope = null;

angular.module('mcmApp.directives', [])
.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive("crudGrid", function () {
    return {
        restrict: "A",
        replace: !1,
        scope: !0,
        templateUrl: "partials/crudgrid-template.html",
        controller: ["$scope", "$element", "$attrs", "crudGridDataFactory", "notificationFactory", function (n, t, i, r, u) {
            var o, f, s, e;
            n.objects = [];
            n.lookups = [];
            n.object = {};
            n.columns = angular.fromJson(i.columns);
            n.addMode = !1;
            n.orderBy = {
                field: "Name",
                asc: !0
            };
            n.loading = !0;
            n.filter = "";
            o = angular.element(document).scope();
            n.setLookupData = function () {
                for (var t, i = 0; i < n.columns.length; i++) t = n.columns[i], t.lookup && !n.hasLookupData(t.lookup.table) && r(t.lookup.table).query(function (i) {
                    n.setIndividualLookupData(t.lookup.table, i)
                })
            };
            n.resetLookupData = function (t) {
                n.setIndividualLookupData(t, {});
                n.setLookupData()
            };
            n.getLookupData = function (t) {
                return typeof t == "undefined" ? null : n.lookups[t.toLowerCase()]
            };
            n.setIndividualLookupData = function (t, i) {
                n.lookups[t.toLowerCase()] = i
            };
            n.hasLookupData = function (t) {
                return !$.isEmptyObject(n.getLookupData(t))
            };
            n.getLookupValue = function (t, i) {
                var u = n.getLookupData(t.table),
                    r;
                if (typeof u != "undefined") for (r = 0; r < u.length; r++) if (u[r][t.key] === i) return u[r][t.value];
                return ""
            };
            n.toggleAddMode = function () {
                n.addMode = !n.addMode;
                n.object = {}
            };
            n.toggleEditMode = function (n) {
                n.editMode = !n.editMode
            };
            f = function (t, r) {
                u.success();
                o.$broadcast("lookupDataChange", [i.table]);
                n.getData(r)
            };
            s = function (t) {
                f(t, function () {
                    n.toggleAddMode()
                })
            };
            n.$on("lookupDataChange", function (t, i) {
                n.resetLookupData(i[0])
            });
            e = function (n) {
                u.error(n.data.ExceptionMessage)
            };
            n.addObject = function () {
                r(i.table).save(n.object, s, e)
            };
            n.deleteObject = function (n) {
                r(i.table).delete({
                    id: n.Id
                }, f, e)
            };
            n.updateObject = function (n) {
                r(i.table).update({
                    id: n.Id
                }, n, f, e)
            };
            n.getData = function (t) {
                r(i.table).query(function (i) {
                    n.objects = i;
                    t && t()
                })
            };
            n.setOrderBy = function (t) {
                var i = n.orderBy.field === t ? !n.orderBy.asc : !0;
                n.orderBy = {
                    field: t,
                    asc: i
                }
            };
            n.getData(function () {
                n.setLookupData();
                n.loading = !1
            })
        }]
    }
})
.directive("modelChangeBlur", function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (n, t, i, r) {
            i.type !== "radio" && i.type !== "checkbox" && (t.unbind("input").unbind("keydown").unbind("change"), t.bind("blur", function () {
                n.$apply(function () {
                    r.$setViewValue(t.val())
                })
            }))
        }
    }
})
  ;
