// Write an implementation of Depth First Search in JavaScript
// Pre, In, and Post Order
import { BinarySearchTree, Node } from '../Data Structures/binarySearchTree.mjs';

function depthFirstSearch(tree) {
    
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

// Post-order
// [1, 6, 4, 15, 170, 20, 9]