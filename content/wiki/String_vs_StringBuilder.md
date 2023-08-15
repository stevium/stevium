---
tags: development wiki c#
cache_breaker: 1
---

In C# `string` is immutable

For example the following create a new string object when you concatenate a value to it

```csharp
string greeting = "Hello World!";
greeting += " from Tutorials Teacher."; // creates a new string object
```

`StringBuilder` is a mutable type. It means you can modify its value without creating a new object each time.

```csharp
StringBuilder sb = new StringBuilder("Hello World!");
sb.Append("from Tutorials Teacher."); // appends to the same object
```

The `StringBuilder` performs faster than the `string` if you modify a string value multiple times. If you modify a string value more than five times then you should consider using the `StringBuilder` than a string.

## See also

- <https://www.tutorialsteacher.com/articles/difference-between-string-and-stringbuilder-in-csharp>
