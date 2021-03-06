/**
* @version: 1.0
* @author: dimabresky https://bitbucket.org/dimabresky/, https://github.com/dimabresky
* @copyright: Copyright (c) 2017 dimabresky. Все права защищены.
* @license: MIT лицензия http://www.opensource.org/licenses/mit-license.php
*/
(function (root, factory) {

    'use strict';

    if (typeof define === 'function' && define.amd) {

        define([], function () {
            return (root.Cache = factory());
        });

    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Cache = factory();
    }
})(this, function () {

    'use strict';

    /**
     * @type {Object}
     */
    var cache = {};

    /**
     * Конструктор класса кеширования
     * @param       {Number} cacheTime
     * @constructor
     */
    var Cache = function (cacheTime) {

        var _this = this;

        /**
         * @param  {String} key
         * @param  {String} value
         * @return {undefined}
         */
        this.set = function (key, value) {
            cache[key] = value;
        }

        /**
         * @param  {String} key
         * @param  {String} value
         * @return {mixed}
         */
        this.get = function (key) {
            return cache[key];
        }

        /**
         * @param  {String} key
         * @return {undefined}
         */
        this.remove = function (key) {
            cache[key] = undefined;
        }

        /**
         * Определение геттера для элемента кеширования
         * @param  {String} key
         * @param  {Function} getter
         * @return {undefined}
         */
        this.getter = function (key, getter) {

            Object.defineProperty(this, key, {
                get: getter
            });
        };

        // clear cache
        setTimeout(function () {
            var key;
            for (key in cache) {
                if (cache.hasOwnProperty(key)) {
                    _this.remove(key);
                }
            }
        }, cacheTime || 24*60*60000);
    };

    return Cache;

});
