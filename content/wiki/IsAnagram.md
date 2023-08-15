---
tags: DSA wiki c#
cache_breaker: 1
---
If two words contain the same characters they're anagrams.

There are two solutions:
1. Sort the characters using the lexicographic order and find out whether all the characters in one string are equal to other string and are in the same order.

_Sorting strings - complexity **O(nlogn)**_
```csharp
bool IsAnagram(string word1, string word2)
{
    char[] s1 = word1.ToCharArray();
    char[] s2 = word2.ToCharArray();
    Array.Sort(s1);
    Array.Sort(s2);

    string val1 = new string(s1);
    string val2 = new string(s2);

    if (val1 == val2)
    {
        Console.WriteLine("This is Anagram");
        return true;
    }
    else
    {
        Console.WriteLine("This is not Anagram");
        return false;
    }
}
```
2. Hashmap approach where **key** is the letter and **value** is the frequency. Only if frequency of all letters is 0 the strings are an anagram.

```csharp
static bool IsAnagram(string word1, string word2)
{
    if (word1.Length != word2.Length)
    {
        return false;
    }

    var symbolFrequency = new Dictionary<char, int>();
    for (int i = 0; i < word1.Length; i++)
    {
        symbolFrequency.TryAdd(word1[i], 0);
        symbolFrequency.TryAdd(word2[i], 0);

        symbolFrequency[word1[i]]++;
        symbolFrequency[word2[i]]--;
    }

    return symbolFrequency.Values.All(frequence => frequence == 0);
}

Console.WriteLine(IsAnagram("asd", "dsa"));
```

















