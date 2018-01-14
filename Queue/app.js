function Queue(capacity) {
    this.capacity = capacity || Infinity;
    this.storage = {};
    this.head = 0;
    this.tail = 0;
}

Queue.prototype.enqueue = function(value) {
    if (this.size() < this.capacity) {
      this.storage[this.tail] = value;
      this.tail = this.tail + 1;
      return this.size();
    } else {
      return "Max capacity already reached. Remove element before adding a new one.";
    }
};


Queue.prototype.dequeue = function() {
    if (this.size() === 0) {
      return "Queue is empty add a element first to dequeue"
    }
    var element = this.storage[this.head];
    delete this.storage[this.head];
    if (this.head < this.tail) {
      this.head++;
    }
    return element;
};


Queue.prototype.peek = function() {
    return this.storage[this.head];
};

Queue.prototype.size = function() {
    return this.tail - this.head;
};
