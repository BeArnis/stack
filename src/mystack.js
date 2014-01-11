function stack_init() {
  var stack = {
    MaxIndex: -1,
    storage: [],
    is_empty: function () {
      if(this.MaxIndex == -1) {
        return true;
      }
      else {
        return false;
      }
    },
    push: function (item) {
      this.MaxIndex =+ 1;
      this.storage[this.MaxIndex] = item;
    },
    pop: function () {
      var k = this.storage[this.MaxIndex];
      this.MaxIndex =-1;
      return k;
    }
  };
  return stack;
}