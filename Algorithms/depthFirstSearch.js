// Write an implementation of Depth First Search in JavaScript
// Pre, In, and Post Order
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }

  depthFirstSearchPreOrder() {
    return traversePreOrder(this.root, [])
  }

  depthFirstSearchInOrder() {
    return traverseInOrder(this.root, [])
  }

  depthFirstSearchPostOrder() {
    return traversePostOrder(this.root, [])
  }

}

function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list) {
    
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}

let tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
console.log(tree)

//        9
//      /    \
//    4       20
//   /  \     /  \
//  1    6   15  170

// Pre-order
// [1, 4, 6, 9, 15, 20, 170]

// In-order
// [9, 4, 1, 6, 20, 15, 170]
console.log(tree.depthFirstSearchInOrder());
console.log(tree.depthFirstSearchPreOrder());
console.log(tree.depthFirstSearchPostOrder());

// Post-order
// [1, 6, 4, 15, 170, 20, 9]