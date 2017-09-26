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

    if (_Cache.get("key") === "undefined") {
        QUnit.test( currentTestName, function( assert ) {
            assert.ok( true, "выполнен" );
        });
    } else {
        QUnit.test( currentTestName, function( assert ) {
            assert.notOk( true, "не выполнен");
        });
    }

    

}(Cache, QUnit);
