function _DONT_() {
    for (let t of ["visibilitychange", "webkitvisibilitychange", "blur"]) {
        window.addEventListener(t, function(e) {
            e.stopImmediatePropagation();
        }, true);
    }

    let x = window.Node.prototype.addEventListener;
    window.Node.prototype.addEventListener = function(e) {
        if (e !== 'visibilitychange' && e !== 'webkitvisibilitychange' && e !== 'blur') {
            x.apply(this, arguments)
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
