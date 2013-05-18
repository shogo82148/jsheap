var should = require('should');
var jsheap = require('../jsheap.js').jsheap;

function cmp(a, b) {
    return a > b;
}

function input_asc(heap, n) {
    var i;
    for(i=0; i<n; ++i) {
        heap.push(i);
    }
}

function input_desc(heap, n) {
    var i;
    for(i=n-1; i>=0; --i) {
        heap.push(i);
    }
}

function input_random(heap, n) {
    var a = [], i;
    for(i=0; i<n; ++i) {
        a.push(i);
    }

    for(i = n - 1; i > 0; --i) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }

    for(i=0; i<n; ++i) {
        heap.push(a[i]);
    }
}

function is_asc(heap) {
    for(var i=0; !heap.empty(); ++i) {
        if(heap.top() != i) return false;
        heap.pop();
    }
    return true;
}

function is_desc(heap) {
    for(var i=heap.top(); !heap.empty(); --i) {
        if(heap.top() != i) return false;
        heap.pop();
    }
    return true;
}

describe('heap sort test', function() {
    describe('when ascending sort', function() {
        it('should be ascending order', function() {
            var heap = new jsheap();
            input_asc(heap, 1000);
            is_asc(heap);
        });
        it('should be ascending order', function() {
            var heap = new jsheap();
            input_desc(heap, 1000);
            is_asc(heap);
        });
        it('should be ascending order', function() {
            var heap = new jsheap();
            input_random(heap, 1000);
            is_asc(heap);
        });
    });

    describe('when descending sort', function() {
        it('should be descending order', function() {
            var heap = new jsheap(cmp);
            input_asc(heap, 1000);
            is_asc(heap);
        });
        it('should be descending order', function() {
            var heap = new jsheap(cmp);
            input_desc(heap, 1000);
            is_asc(heap);
        });
        it('should be descending order', function() {
            var heap = new jsheap(cmp);
            input_random(heap, 1000);
            is_asc(heap);
        });
    });
});
