var should = require('should');
var jsheap = require('../jsheap.js').jsheap;

describe('when heap is empty', function() {
    var heap;
    beforeEach(function(done) {
        heap = new jsheap();
        done();
    });

    describe('.heap', function() {
        it('should equal [null]', function() {
            heap.heap.should.eql([null]);
        });
    });

    describe('.empty()', function() {
        it('should be true', function() {
            heap.empty().should.be.true;
        });
    });

    describe('.top()', function() {
        it('should not exist', function() {
            should.not.exist(heap.top());
        });
    });

    describe('.pop()', function() {
        it('should throw', function() {
            (function(){
                heap.pop();
            }).should.throw(/empty/);
        });
        it('should not change heap', function() {
            try { heap.pop(); } catch (e) {}
            heap.heap.should.eql([null]);
        });
    });

    describe('.push()', function() {
        it('should return heap', function() {
            heap.push(100).should.equal(heap);
        });
        it('should push value', function() {
            heap.push(100);
            heap.heap.should.eql([null, 100]);
        });
    });

});
