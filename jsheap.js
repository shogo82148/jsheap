(function(global) {
    function default_cmp(a, b) {
        return a < b;
    }

    var jsheap = global.jsheap = function(cmp) {
        //Compare function
        this.cmp = cmp || default_cmp;

        // heap[0] is dummpy
        this.heap = [null];
    };

    function swap(heap, a, b) {
        var tmp = heap[a];
        heap[a] = heap[b];
        heap[b] = tmp;
    }

    jsheap.prototype.push = function(item) {
        var heap = this.heap;
        var cmp = this.cmp;
        var i = heap.length;
        var j;

        heap.push(item);
        while(i>1 && cmp(heap[i], heap[ j = i/2 | 0 ])) {
            swap(heap, i, j);
            i = j;
        }
        return this;
    };

    jsheap.prototype.top = function() {
        return this.heap[1];
    };

    jsheap.prototype.pop = function() {
        if(this.empty()) throw 'heap is empty';
        var heap = this.heap;
        var cmp = this.cmp;
        var i;
        var item = heap.pop();

        i = 1;
        heap[1] = item;

        while(i*2 < heap.length) {
            var j = i*2;
            if(j+1 < heap.length && cmp(heap[j+1], heap[j])) {
                ++j;
            }
            if(!cmp(heap[j], heap[i])) {
                break;
            }
            swap(heap, i, j);
            i = j;
        }

        return this;
    };

    jsheap.prototype.empty = function() {
        return this.heap.length <= 1;
    };
})(this);