---
tags: development wiki c#
cache_breaker: 1
---

A jagged array is an array whose elements are arrays, possibly of different sizes.

```csharp
int[][] jaggedArray = new int[3][];
```

```csharp
jaggedArray[0] = new int[5];
...
```

```csharp
jaggedArray[0] = new int[] { 1, 3, 4, 5, 9 };
...
```

```csharp
int [][] jaggedArray2 = new int [][] {
    new int [] { 1, 3, 5, 7, 9 },
    ...
}
```


## See also

- <https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/jagged-arrays>
