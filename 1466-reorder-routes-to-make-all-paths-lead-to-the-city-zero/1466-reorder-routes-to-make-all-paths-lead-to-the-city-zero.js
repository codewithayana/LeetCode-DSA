/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const graph = Array.from({length: n}, () => []);

    for (const [a, b] of connections) {
        graph[a].push([b, 1]); 
        graph[b].push([a, 0]); 
    }
    
    let result = 0;
    const visited = new Array(n).fill(false);
    
    function dfs(node) {
        visited[node] = true;
        for (const [neighbor, cost] of graph[node]) {
            if (!visited[neighbor]) {
                result += cost; 
                dfs(neighbor);
            }
        }
    }
    
    dfs(0);
    return result;
};

