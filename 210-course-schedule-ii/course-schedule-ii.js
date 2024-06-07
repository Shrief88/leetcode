/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

const dfs = (node,adj,state,flag,order) => {
    state[node] = "visiting";
    for(let i=0 ; i<adj[node].length ; i++){
        let child = adj[node][i];
        if(state[child] === "visiting"){
            flag.cycle = true;
            return;
        }

        if(state[child] !== "visited"){
            dfs(child,adj,state,flag,order);
        }
    }
    order.push(node);
    state[node] = "visited";
}

var findOrder = function(numCourses, prerequisites) {
    let adj = Array.from({length : numCourses} , () => []);
    let state = new Array(numCourses).fill("unvisited");
    let order = [];

    for(let i=0;i<prerequisites.length;i++){
        adj[prerequisites[i][1]].push(prerequisites[i][0])
    }

    let flag = {cycle : false};
    for(let i=0;i<numCourses;i++){
        if(state[i] === "unvisited"){
            dfs(i,adj,state,flag,order);
        }
    }

    if(flag.cycle){
        return [];
    }else{
        let reverseOrder = [];
        for(let i = order.length-1 ; i>=0 ; i--){
            reverseOrder.push(order[i]);
        }
        return reverseOrder;
    }
};