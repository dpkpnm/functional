function list() {
  this.dataStore = [];
  this.listSize = 0;
  this.append = (element) => (this.dataStore[this.listSize++] = element);
  this.insert = (element, insertPos) =>
    this.dataStore.splice(insertPos + 1, 0, element);
  this.find = (element) => this.dataStore.indexOf(element);
  this.remove = (element) => this.dataStore.splice(this.find(element), 1);
  this.toString = () => this.dataStore;
}

function Node(el) {
  this.el = el;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
  this.find = (item) => {
    var currNode = this.head;
    while (currNode && currNode.el != item) currNode = currNode.next;
    return currNode;
  };
  this.insert = insert;
  this.remove = remove;
  this.display = display;
}
