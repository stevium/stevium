---
tags: DSA wiki c# 
---

Given an `m x n` 2D binary `grid` grid which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.

An `island` is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 

### Example 1:

<pre>
Input: grid = [ ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
</pre>

### Solution:

```csharp
int NumIslands(char[][] grid) {
   var visited = new bool[grid.Length][]; 
   for (var i = 0; i < grid.Length; i++)
   {
       visited[i] = new bool[grid[i].Length];
   }
   
   var islands = 0;
   for (var i = 0; i < grid.Length; i++) {
        for (var j = 0; j < grid[i].Length; j++) {
            if (visited[i][j]) {
                continue;
            }
            
            if (grid[i][j] == '1') {
                islands++;
                VisitAdjacent(i, j);
            }
        } 
   }

   return islands;

   void VisitAdjacent(int row, int col)
   {
       if (row < 0 || row >= grid.Length || col < 0 || col >= grid[row].Length)
       {
           return;
       }

       if (visited[row][col] || grid[row][col] == '0')
       {
           return;
       }

       visited[row][col] = true;
       VisitAdjacent(row - 1, col);
       VisitAdjacent(row + 1, col);
       VisitAdjacent(row, col + 1);
       VisitAdjacent(row, col - 1);
   }
}
```

## See also

- Leetcode 200 solution <https://leetcode.com/problems/number-of-islands/solutions/2498658/c-solution-time-o-m-n-memory-o-m-n-easy-to-understand-dfs/>
