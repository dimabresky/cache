# Cache.js

### Данный конструктор служит для кеширования различного html-контента на странице сайта.

### Может быть полезен как минимум для:

сохранения ссылок на DOMNodes:
```javascript

var _cache = new Cache();

_cache.getter("some-id", function () {

    var cacheElement = _cache.get("some-id");

    if (typeof cacheElement === "object") {
        return cacheElement;
    }

    _cache.set("some-id", document.getElementById("some-id"));
    return _cache.get("some-id");
});

// при первом вызове получается ссылка на DOMNode и возвращается результат
console.log(_cache["some-id"]);

// при втором вызове результат возвращается из кеша
console.log(_cache["some-id"]);

```

cохранения результата выполнения асинхронных функций:
```javascript

var _cache = new Cache();

_cache.getter("async-result", function () {

    var cacheElement = _cache.get("async-result");

    if (typeof cacheElement !== "undefined") {
        return cacheElement;
    }

    setTimeout(function () {
        _cache.set("async-result", "some result");
    }, 500);

    return '';
});

// при первом вызове возвращается пустая строка
console.log(_cache["async-result"]);

setTimeout (function () {
    // при втором вызове возвращается результат работы асинхронной функции
    console.log(_cache["async-result"]);
}, 1000);

```

Простестировано с Google Chrome 61.0.x
