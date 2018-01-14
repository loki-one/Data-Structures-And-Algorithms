function Stack(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.count = 0;
}

Stack.prototype.push = function(value) {
  if (this.count < this.capacity) {
    this.storage[this.count] = value;
    this.count = this.count + 1;
    return this.count;
  } else {
    return "Max capacity already reached. Remove element before adding a new one.";
  }
};


Stack.prototype.pop = function() {
  this.count = this.count - 1;
  var element = this.storage[this.count];
  delete this.storage[this.count];
  if (this.count < 0){
    this.count = 0;
  }
  return element;
};


Stack.prototype.peek = function() {
  return this.storage[this.count-1];
};


Stack.prototype.size = function() {
  return this.count;
};
