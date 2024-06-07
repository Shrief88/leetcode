/**
 * @param {number[][]} isConnected
 * @return {number}
 */

const dfs = (node , adj , visited) => {
    visited[node] = true;
    for(let i=0;i<adj[node].length ; i++){
        const child = adj[node][i];
        if(!visited[child]){
            dfs(child,adj,visited)
        }
    }
}

var findCircleNum = function(isConnected) {
    let adj = Array.from({length : isConnected.length + 1} , () => []);

    for(let i=0;i<isConnected.length;i++){
        for(let j=0;j<isConnected[i].length; j++){
            if(isConnected[i][j] === 1 && j !== i){
                adj[i+1].push(j+1);
            }
        }
    }

    const visited = new Array(adj.length + 1).fill(false);

    let provinces = 0;

    for(let i=1;i<adj.length;i++){
        if(!visited[i]){
            dfs(i,adj,visited);
            provinces++;
        }
    }

    return provinces;

};