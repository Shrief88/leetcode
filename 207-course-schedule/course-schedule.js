/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

const state = ["visited", "unvisited" , "visiting"];

const dfs = (node,adj,state,flag) => {
    state[node] = "visiting";
    console.log(state);

    for(let i=0 ; i<adj[node].length ; i++){
        let child = adj[node][i];
        if(state[child] === "visiting"){
            flag.cycle = true;
            return;
        }

        if(state[child] !== "visited"){
            dfs(child,adj,state,flag);
        }
    }

    state[node] = "visited";
}

var canFinish = function(numCourses, prerequisites) {
  let adj = Array.from({length : numCourses} , () => []);
  let state = new Array(numCourses).fill("unvisited");

  for(let i=0;i<prerequisites.length;i++){
    adj[prerequisites[i][1]].push(prerequisites[i][0])
  }  

  let flag = {cycle : false};

  for(let i=0;i<numCourses;i++){
    if(state[i] === "unvisited"){
        dfs(i,adj,state,flag);
    }
  }

  return !flag.cycle;
};