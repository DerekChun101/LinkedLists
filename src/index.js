class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        if(!this.head) {
            this.head = new Node(value);
            return this;
        }
        let tail =  this.getTail();
        tail.next = new Node(value);
        return tail;

    }

    prepend(value) {
        if(!this.head) {
            this.head = new Node(value);
            return this
        } 
        const prevHead = this.head;
        this.head = new Node(value, prevHead);
    }
    getHead() {
        return this.head
    }

    getTail() {
        if(!this.head) return null;
        let tail = this.head;
        while(tail.next !== null) {
            tail = tail.next;
        }
        return tail;
    }
    size() {
        let count = 0;
        let pointer = this.head;
        while(pointer !== null) {
            count ++;
            pointer = pointer.next;
        }
        return count;
    }
    at(index) {
        if(!this.head) return null;
        let pointer = this.head;
        for(let i = 0; i < index; i++) {
            pointer = pointer.next;
        }
        return pointer
    }
    pop() {
        if (!this.head) return null;
        // for one node list
        if (!this.head.next) {
          this.head = null;
          return;
        }
        let prevPointer = this.at(this.size() -2);
        prevPointer.next = null;
        return this.head
    }
    contains(value) {
        if (!this.head) return null;
        let pointer = this.head;
        while (pointer.next !== null) {
          if (pointer.value === value) return true;
          pointer = pointer.next;
        }
        //checker for tail
        return pointer.value === value ? true : false;
      }
      find(value) {
        if (!this.head) return null;
        let pointer = this.head;
        let count = 0;
        while (pointer.next !== null) {
          if (pointer.value === value) return count;
          pointer = pointer.next;
          count++;
        }
        //checker for tail
        if (pointer.value === value) return count;
        return null;
      }
      
      toString() {
        if (!this.head) return '(null)';
        let str = '';
        let pointer = this.head;
        while (pointer.next !== null) {
          str = `${str} (${pointer.value}) ->`;
          pointer = pointer.next;
        }
        //concat tail + null
        return `${str} (${pointer.value}) -> (null)`;
      }

      


}


class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

const list = new LinkedList();

list.prepend(2);
list.append(1);

list.append(4);




console.log(list.at(2));
