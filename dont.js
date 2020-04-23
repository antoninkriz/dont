function _DONT_() {
    const eventTypes = ['visibilitychange', 'webkitvisibilitychange', 'msvisibilitychange', 'mozvisibilitychange', 'blur'];

    Object.defineProperty(window.document, 'hidden', {
        get: function() {return false;},
        configurable:false
    });

    Object.defineProperty(window.document, 'visibilityState', {
        get: function() {return 'visible';},
        configurable:false
    });

    Object.defineProperty(window.document, 'onvisibilitychange', {
        get: function() {return undefined;},
        configurable:false
    });

    for (const t of eventTypes) {
        window.addEventListener(t, function(e) {
            e.stopImmediatePropagation();
        }, true);
    }

    let evListen = window.Node.prototype.addEventListener;
    window.Node.prototype.addEventListener = function(e) {
        if (!eventTypes.includes(e)) {
            evListen.apply(this, arguments)
        }
    }
}

// v1
_DONT_();

// v2
const script = document.createElement('script');
script.textContent = `${_DONT_.toString()};_DONT_();`;
(document.head || document.documentElement).appendChild(script);
script.remove();
