// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
  }

  insert(val, currentNode=this.root) {
    if(!this.root) {
      this.root = new TreeNode(val);
      return;
    }
    if(val < currentNode.val){
      if(!currentNode.left){
        currentNode.left = new TreeNode(val);
        return;
      } else {
        this.insert(val, currentNode.left)
      }
    } else {
      if(!currentNode.right){
        currentNode.right = new TreeNode(val);
        return;
      } else {
        this.insert(val, currentNode.right)
      }
    }
  }

  search(val) {
    let curr = this.root;

    while(curr){
      if(val === curr.val){
        return true;
      }
      if(val < curr.val){
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    return false;
  }


  preOrderTraversal(currentNode = this.root) {

  }


  inOrderTraversal(currentNode = this.root) {

  }


  postOrderTraversal(currentNode = this.root) {

  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {

}

module.exports = { BinarySearchTree, TreeNode };
