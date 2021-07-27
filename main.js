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

    insert(data)
    {
        // Create a node and initialize with data
        var newNode = new Node(data);

        // If the BST root is null, then this node will be added to the tree as the root
        if (this.root === null)
        {
            this.root = newNode;
        }
        else
        {
            // Otherwise, find the correct position in the tree and add the node there
            this.insertNode(this.root, newNode);
        }
    }

    // Traverse the tree to find the proper location to insert the node
    insertNode(node, newNode)
    {
        // if the data is less than the node we are on, move to the left
        if (newNode.data < node.data)
        {
            if (node.left === null)
            {
                node.left = newNode;
            }
            else
            {
                this.insertNode(node.left, newNode)
            }
        }
        // if the data is more than the node we are on, move to the right
        else
        {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    // Helper method to call removeNode with the given data
    remove(data)
    {
        // Root of BST is re-initialized with the root of the modified tree
        this.root = this.removeNode(this.root, data);
    }

    // Remove the node with the given data. Recurse through the BST to find the data and nullify it
    removeNode(node, key)
    {
        // If the root is null, then the tree is empty, so return null
        if (node === null)
        {
            return null;
        }
        // If the data to be deleted is less than the root of the tree, traverse left and recur
        else if (key < node.data)
        {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        // If the data to be deleted is greater than the root of the tree, traverse right and recur
        else if (key > node.data)
        {
            node.right = this.removeNode(node.right, key);
        }
        // If data matches the root's data, then elete this node
        else
        {
            // deleting a node with no children
            if (node.left === null && node.right === null)
            {
                node = null;
                return node;
            }

            // deleting a node with one child
            if (node.left === null)
            {
                node = node.right;
                return node;
            }
            else if (node.right === null)
            {
                node = node.left;
                return node;
            }

            // deleting a node with two children
            // maximum node of the right subtree is stored in aux
            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    // findMinNode(){}
    // getRootNode(){}
    // inorder(node){}
    // preorder(node){}
    // postorder(node){}
    // search(node, data){}
}