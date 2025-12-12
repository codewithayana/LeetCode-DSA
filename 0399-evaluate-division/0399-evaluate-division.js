/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = {};

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const val = values[i];
        
        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];
        
        graph[a].push([b, val]);    
        graph[b].push([a, 1 / val]); 
    }
    
    const res = [];
    
    function dfs(curr, target, visited, acc) {
        if (!(curr in graph)) return -1;    
        if (curr === target) return acc;    
        
        visited.add(curr);
        
        for (const [neighbor, weight] of graph[curr]) {
            if (!visited.has(neighbor)) {
                const result = dfs(neighbor, target, visited, acc * weight);
                if (result !== -1) return result;
            }
        }
        
        return -1;
    }
    
    for (const [num, den] of queries) {
        const visited = new Set();
        res.push(dfs(num, den, visited, 1));
    }
    
    return res;
};