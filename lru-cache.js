/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = parseInt(capacity)
    this.map = new Map();
    this.head = null;
    this.tail = null;
};
class Node{
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.pre = null;
        this.next = null;
    }
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    console.log(this.map)
    // 存在
    if (this.map.has(key)) {
        let node = this.map.get(key);
        // 已经是tail节点
        if(node.next == null) {
            return node.val
        }
        // 拿出节点
        let pre = node.pre;
        let next = node.next;
        // node 是 头节点
        if (pre === null) {
            this.head = node.next;
            this.head.pre = null;
        } else {
            pre.next = next;
            next.pre = pre
        }
        this.tail.next = node;
        node.pre = this.tail;
        this.tail = node;
        node.next = null;
        return node.val;
    }
    return -1
};


/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 如果map是空的
    if (this.map.size === 0) {
      this.head = new Node(key, value)
      this.tail = this.head
      this.map.set(key, this.head)
      return null
    }
    
    //  有了就更新
    if (this.map.has(key)) {
        const node = this.map.get(key)
        // 更新值
        node.val = value
        // 更新链表
        this.get(key)
        return null;
    }
    
    // 插入自己
    let node = new Node(key, value);
    // 列表满了，就删去头
    if (this.map.size === this.capacity) {
        this.map.delete(this.head.key)
        this.head = this.head.next
        // capacity 为1
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            this.map.set(key, node)
            return null
        }
        this.head.pre = null;
    }
    this.tail.next = node
    node.pre = this.tail
    this.tail = node
    this.map.set(key, node)
    return null;
};

