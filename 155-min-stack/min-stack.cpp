class MinStack {
    stack<int> myStack;
    stack<int> auxStack;


public:
    MinStack() {}
    
    void push(int val) {
        myStack.push(val);
        if(auxStack.empty()){
            auxStack.push(val);
        }else if(auxStack.top() < val){
            auxStack.push(auxStack.top());
        }else{
            auxStack.push(val);
        }
    }
    
    void pop() {
        myStack.pop();
        auxStack.pop();
    }
    
    int top() {
        return myStack.top();
    }
    
    int getMin() {
        return auxStack.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */