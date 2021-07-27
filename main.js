// Node class
class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree class
class BinarySearchTree
{
    constructor(data)
    {
        // Root of a binary search tree
        this.root = null;
    }

    insert(data) {
        // Creating a node and initializing with data
        var newNode = new Node(data);

        // Root is null then node will be added to the tree and made root
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            // Find the correct position in the tree and add the node
            this.insertNode(this.root, newNode);
        }
    }

    // Method to insert a node in a tree. Traverse the tree to find the location that the data belongs
    insertNode(node, newNode) {
        // if the data is less than the node we are on, move to the left
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode)
            }
        }
        // if the data is more than the node we are on, move to the right
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode)
            }
        }
    }


    // remove(data){}

    // findMinNode(){}
    // getRootNode(){}
    // inorder(node){}
    // preorder(node){}
    // postorder(node){}
    // search(node, data){}
}