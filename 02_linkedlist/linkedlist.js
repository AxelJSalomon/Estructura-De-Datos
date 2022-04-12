function Node (value, next, prev) {
  this.value = value;
  this.next = next || null;
  this.previous = prev || null;
}

function LinkedList() {
  this.tail = null;
  this.head = null;
}

  LinkedList.prototype.addToTail = function(value) {
  var newTail = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newTail;
  } else {
    this.head = newTail;
  }
  this.tail = newTail;
};

LinkedList.prototype.addToHead = function(value) {
  var newHead = new Node(value, this.head, null);
  if(this.head) {
    this.head.previous = newHead;
  } else {
    this.tail = newHead;
  }
  this.head = newHead;

}

LinkedList.prototype.removeHead = function() {
  if (!this.head) return;
  var oldValue = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.previous = null;
  } else  {
    this.tail = null;
  }
  return oldValue;
}

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return;
  var oldValue = this.tail.value;
  this.tail = this.tail.previous;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.tail = null;
  }
  return oldValue;
};

function isFn (fn) {
  return typeof fn === 'function';
}
LinkedList.prototype.search = function(predicate) {
  var correct = isFn(predicate) ? predicate : function(value) {
   return value === predicate;
  }
   var currentNode = this.head;
   while (currentNode) {
     if (correct(currentNode.value)) {
       return currentNode.value;
     }
     currentNode = currentNode.next;
   }
   return null;
 };





/*   SIN REFACTORIZAR:
function Node(value, next = null, previous = null) {
  this.value = value;
  this.next = next;
  this.previous = previous;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}
LinkedList.prototype.addToTail = function (data) {
  let newNode = new Node(data);
  if (this.tail === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  }
};
LinkedList.prototype.addToHead = function (data) {
  let newNode = new Node(data);
  if (this.head === null) {
    this.tail = newNode;
    this.head = newNode;
  } else {
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  }
};

LinkedList.prototype.removeTail = function () {
  if (this.tail === null) {
    return null;
  }
  let removeNode = this.tail.value;
  this.tail = this.tail.previous;
  if (this.tail) {
    this.tail.next = null;
  }
  return removeNode;
};

LinkedList.prototype.removeHead = function () {
  if (this.head === null) {
    return null;
  }
  let removeNode = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.previous = null;
  } else {
    this.tail = null;
  }

  return removeNode;
};

LinkedList.prototype.search = function (predicate) {
  if (typeof predicate === "function") {
    let currentNode = this.head;
    while (currentNode) {
      if (predicate(currentNode.value)) {
        return currentNode.value;
      } else {
        currentNode = currentNode.next;
      }
    }
    return null;
  } else {
    let value = predicate;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return value;
      } else {
        currentNode = currentNode.next;
      }
    }
  }
  return null;
};
*/


