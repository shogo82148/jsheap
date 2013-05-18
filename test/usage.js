var should = require('should');
var jsheap = require('../jsheap.js').jsheap;

describe('usage program', function() {
    it('should work as in README', function() {
        var heap = new jsheap();
        heap.push(5);
        heap.push(6);
        heap.push(3);
        heap.empty().should.be.false;
        heap.top().should.equal(3);
        heap.pop();
        heap.top().should.equal(5);
        heap.pop();
        heap.top().should.equal(6);
        heap.pop();
        heap.empty().should.be.true;
    });
});
