var should = require('should');
var jsheap = require('../jsheap.js').jsheap;

describe('when heap is pushed 0', function() {
    var heap;
    beforeEach(function(done) {
        heap = new jsheap();
        heap.push(0);
        done();
    });

    describe('.heap', function() {
        it('should equal [null, 0]', function() {
            heap.heap.should.eql([null, 0]);
        });
    });

    describe('.empty()', function() {
        it('should be false', function() {
            heap.empty().should.be.false;
        });
    });

    describe('.top()', function() {
        it('should equal 0', function() {
            heap.top().should.equal(0);
        });
    });

    describe('.pop()', function() {
        it('should not throw', function() {
            (function(){
                heap.pop();
            }).should.not.throw();
        });
        it('should make heap empty', function() {
            heap.pop();
            heap.heap.should.eql([null]);
        });
    });

    describe('.push(100)', function() {
        it('should return heap', function() {
            heap.push(100).should.equal(heap);
        });
        it('should push value', function() {
            heap.push(100);
            heap.heap.should.eql([null, 0, 100]);
        });
    });

    describe('.push(-100)', function() {
        it('should return heap', function() {
            heap.push(-100).should.equal(heap);
        });
        it('should push value', function() {
            heap.push(-100);
            heap.heap.should.eql([null, -100, 0]);
        });
    });

});
