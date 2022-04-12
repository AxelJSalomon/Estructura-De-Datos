class Queue{
    constructor(){
        this.items = {}
        this.front = 0
        this.end = 0
    }

    enqueue(data){
        this.items[this.end] = data
        this.end++
    }
    
    dequeue(){
        if(this.end === this.front){
            return undefined
        }
    
        const data = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        //this.final--
        return data
        
    }
    
    size(){
        return this.end - this.front
    }
        
}