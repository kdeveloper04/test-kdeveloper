class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BSTree{
    constructor(){
        this.root=null;

    }
    insert(data)
    {
       
        var newNode = new Node(data);
         
        if(this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }
insertNode(node, newNode)
{
    
    if(newNode.data < node.data)
    {
        if(node.left === null)
            node.left = newNode;
        else
            this.insertNode(node.left, newNode);
    }
    else
    {
       
        if(node.right === null)
            node.right = newNode;
        else
            this.insertNode(node.right,newNode);
    }
}
remove(data)
{
    this.root = this.removeNode(this.root, data);
}
 
removeNode(node, key)
{
    if(node === null)
        return null;
 
    else if(key < node.data)
    {
        node.left = this.removeNode(node.left, key);
        return node;
    }

    else if(key > node.data)
    {
        node.right = this.removeNode(node.right, key);
        return node;
    }
 
    else
    {
         
        if(node.left === null && node.right === null)
        {
            node = null;
            return node;
        }
        if(node.left === null)
        {
            node = node.right;
            return node;
        }
         
        else if(node.right === null)
        {
            node = node.left;
            return node;
        } 
        var aux = this.findMinNode(node.right);
        node.data = aux.data;
 
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
 
}
}
var BST = new BSTree();
console.log(BST);
BST.insert(15);
console.log(BST);
BST.insert(25);
console.log(BST);
BST.insert(10);
console.log(BST);
BST.insert(7);
console.log(BST);
BST.insert(22);
console.log(BST);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
console.log(BST);