# angular-datepicker
AngularJS + jQuery UI datepicker

```javascript
angular.module('MyApp', ['jqDatepicker']);
```

Default

```html
<input type="datetime" jqdatepicker ng-model="date">
```

Custom format

```html
<input type="datetime" jqdatepicker format="dd.mm.y" ng-model="date">
```
