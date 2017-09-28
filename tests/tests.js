!function (IDBWrapper, QUnit) {

    'use strict';

    var _Cache = new Cache();
    var currentTestName = 'Установка значения в кеш';

    QUnit.module('Cache тест');

    _Cache.set("key", "value");

    if (_Cache.get("key") === "value") {
        QUnit.test( currentTestName, function( assert ) {
            assert.ok( true, "выполнен" );
        });
    } else {
        QUnit.test( currentTestName, function( assert ) {
            assert.notOk( true, "не выполнен");
        });
    }

    currentTestName = 'Удаление значения из кеша';

    _Cache.remove("key");

    if (typeof _Cache.get("key") === "undefined") {
        QUnit.test( currentTestName, function( assert ) {
            assert.ok( true, "выполнен" );
        });
    } else {
        QUnit.test( currentTestName, function( assert ) {
            assert.notOk( true, "не выполнен");
        });
    }

    currentTestName = "Определения геттера для элемента кеширования";

    _Cache.getter("key2", function () {

      var cacheElement = _Cache.get("key2");

      if (typeof cacheElement !== "undefined") {

        return cacheElement;
      }

      _Cache.set("key2", "value of cache element");

      return undefined;

    });

    if (typeof _Cache.key2 === "undefined" && _Cache.key2 === "value of cache element") {

      QUnit.test( currentTestName, function( assert ) {
          assert.ok( true, "выполнен" );
      });
    } else {

      QUnit.test( currentTestName, function( assert ) {
          assert.notOk( true, "не выполнен");
      });
    }

    currentTestName = "Определение геттера на асинхронной операции для элемента кеширования";

    _Cache.getter("key3", function () {

      var cacheElement = _Cache.get("key3");

      if (typeof cacheElement !== "undefined") {

        return cacheElement;
      }

      setTimeout(function () {

        _Cache.set("key3", "async value of cache element");
      }, 500);

      return undefined;
    });

    if (typeof _Cache.key3 === "undefined") {

      QUnit.test( currentTestName, function( assert ) {

        var done = assert.async();
        setTimeout(function () {

          if (_Cache.key3 === "async value of cache element") {

            assert.ok( true, "выполнен" );

          } else {

            assert.notOk( true, "не выполнен (не равен 'async value of cache element')");
          }

          done();

        }, 1000);
      });

    } else {

      QUnit.test( currentTestName, function( assert ) {
          assert.notOk( true, "не выполнен (не равен undefined)");
      });
    }

}(Cache, QUnit);
