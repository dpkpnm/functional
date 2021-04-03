function Node(val) {
  this.val = val;
  this.right = null;
  this.left = null;
}

function BinaryTree() {
  this.root = null;

  this.insertNode = (node, val) => {
    if (val < node.val) {
      if (node.left === null) node.left = new Node(val);
      else this.insertNode(node.left, val);
    } else {
      if (node.right === null) node.right = new Node(val);
      else this.insertNode(node.right, val);
    }
  };

  this.insert = (val) => {
    if (this.root === null) {
      this.root = new Node(val);
    } else {
      this.insertNode(this.root, val);
    }
  };

  this.inOrder = (node, cb) => {
    if (node != null) {
      this.inOrder(node.left, cb);
      cb(node.val);
      this.inOrder(node.right, cb);
    }
  };

  this.preOrder = (node, c) => {
    if (node != null) {
      cb(node.val);
      this.preOrder(node.left, cb);
      this.preOrder(node.right, cb);
    }
  };

  this.postOrder = (node, cb) => {
    if (node != null) {
      this.postOrder(node.left, cb);
      this.postOrder(node.right, cb);
      cb(node.val);
    }
  };

  this.min = () => {
    let node = this.root;
    while (node != null && node.left != null) node = node.left;
    return node;
  };

  this.max = () => {
    let node = this.root;
    while (node != null && node.right != null) node = node.right;
    return node;
  };

  searchNode = (node, val) => {
    if (node === null) return false;
    if (val < node.val) {
      return searchNode(node.left, val);
    } else if (val > node.val) {
      return searchNode(node.right, val);
    } else {
      return true;
    }
  };
  this.search = (val) => {
    return searchNode(this.root, val);
  };
  this.height = (node) => {
    if (node === null) return -1;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  };
}

var b = new BinaryTree();
[11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6].forEach((v) =>
  b.insert(v)
);

console.log(b.root);
let vals = [];

b.preOrder(b.root, (val) => vals.push(val));
console.log(vals);

vals = [];
b.inOrder(b.root, (val) => vals.push(val));
console.log(vals);

vals = [];
b.postOrder(b.root, (val) => vals.push(val));
console.log(vals);

console.log(b.min(), b.max(), b.search(11));

console.log(b.height(b.root));
