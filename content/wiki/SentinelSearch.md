---
tags: DSA wiki c#
cache_breaker: 1
---
 The purpose of linear search is to compare the search item with elements present in the list one at a time with the help of a loop and stop the moment the first copy of the search element int the list is obtained. If you consider the worst case in which search element doesn't exist in the list of size _N_, then the **Simple Linear Search** will consider a total of _2N+1_ comparisons. 

The idea behind **Sentinel Linear Search** is to cut down the number of comparisons needed to find an element in a list. In this, the last element of the list is replaced with the search element itself, and a _while_ loop is run to determine if a copy of the search element in the list exists. The loop is quit as soon as the search element is found. It reduces one comparison in each repetition.

```csharp
void SentinelSearch(IList<int> arr, int key) {
    var last = arr.Last();
    arr[^1] = key;
    var i = 0;
    while (arr[i] != key)
    {
        i++;
    }
                                                           
    arr[^1] = last;
    if (i < arr.Count - 1 || arr[^1] == key)
    {
        Console.WriteLine($"{key} is present at index{i}");
    }
    else
    {
        Console.WriteLine("Element not found");
    }
}
```

















