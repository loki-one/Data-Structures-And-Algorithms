var Stack = function () {
    this.storage = "";
};

Stack.prototype.push = function (val) {
    if (typeof val === "string") {
      this.storage +=  "***" + val;
      return this.storage.length;
    } else {
      console.log('you can only push strings');
    }
};

Stack.prototype.pop = function () {
    //slice off the last characters up until ***
    var str = this.storage.slice(this.storage.lastIndexOf('***') + 3);
    //updating the new stack without the last item
    this.storage = this.storage.substring(0, this.storage.lastIndexOf('***'));
    //return the last item
    return str;
};

Stack.prototype.size = function () {
      if (this.storage){
          return this.storage.length;
      } else {
        return 'storage is empty';
      }

};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("RedBeans");
