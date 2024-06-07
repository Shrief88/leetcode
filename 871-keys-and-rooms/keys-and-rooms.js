/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

const dfs = (node , adj , visited) => {
    visited[node] = true;
    for(let i=0 ; i<adj[node].length ; i++){
        const child = adj[node][i];
        if(!visited[child]){
            dfs(child,adj,visited)
        }
    }
}

var canVisitAllRooms = function(rooms) {
    const visited = new Array(rooms.length).fill(false);
    dfs(0,rooms,visited);

    let flag = true;
    for(let i=0;i<visited.length;i++){
        if(!visited[i]){
            flag=false;
            break;
        }
    }

    return flag;
};