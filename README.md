jsheap - Heap(Priority Queue) for JavaScitpt -
======

# Usage

``` javascript
var heap = new jsheap();
heap.push(5);
heap.push(6);
heap.push(3);
heap.empty(); // returns false
heap.top(); // returns 3
heap.pop();
heap.top(); // returns 5
heap.pop();
heap.top(); // returns 6
heap.pop();
heap.empty(); // returns true
```

'top' method will return the minimum value in the queue by default.
You can redefine this action.
For example, the following script makes 'top' method return maximum value.

``` javascript
var heap = new jsheap(function(a, b) {
    return a > b;
});
```

## License
Copyright &copy; 2011 Shogo Ichinose

Distributed under the [MIT License][mit].

[MIT]: http://www.opensource.org/licenses/mit-license.php
