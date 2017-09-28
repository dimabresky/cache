# Cache.js
------------
### Данный конструктор служит для кеширования различного html-контента на странице браузера.

### Может быть полезен как минимум для:

Сохранения ссылок на DOMNodes:
```javascript
<div id="some-id"></div>
<script>
    var _cache = new Cache();
    _cache.getter("some-id", function () {

        var cacheElement = _cache["some-id"];

        if (typeof cacheElement === "object") {
            return cacheElement;
        }

        _cache.set("some-id", document.getElementById("some-id"));
        return _cache.get("some-id");
    });
<script>
```
