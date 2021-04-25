export default function Iterator(items) {
  this.items = items;
  this.index = -1;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length - 1;
  },
  hasPrev: function () {
    return this.index > 0;
  },
  next: function () {
    this.index = this.hasNext() ? ++this.index : this.index;
    return { element: this.items[this.index], index: this.index };
  },
  prev: function () {
    this.index = this.hasPrev() ? --this.index : this.index;
    return { element: this.items[this.index], index: this.index };
  }
};
