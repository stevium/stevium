---
tags: development wiki c#
cache_breaker: 1
---

There are four different ways of passing parameters to a method in C# which are as:

1. Value
   - In this method a duplicate copy is made and sent to the called function, so if you change the value in the called method it won't be changed in the calling method.
2. Ref (reference)
   - Uses the addresses of the actual params. It requires `ref` keyword in front of variables. We use this process when we want to use or change the values of the params passed. The process of `ref` is bidirectional, we have to supply value and we get back processed value.
   ```csharp
   public int sum(ref int a, ref int b)
   ...
   int a = 10, b = 20;
   obj.sum(ref a, ref b);
   ```
3. Out (reference)
    - It does not create a new storage location and are passed by reference. It requires `out` keyword in front of variables. The process of `out` is unidirectional, we don't have to supply value, but we get back the processed value.
   ```csharp 
   public int sum(int a, int b, out int c, out int d)
   ...
   int a = 10, b = 20;
   int c, d;
   obj.sum(a, b, out c, out d);
   ```
4. Params (parameter arrays)
    - `params` is used when we don't know the number of parameters that will be passed to the called method. `params` should be a single dimensional or a [jagged array](#).
   ```csharp
   public void print(params int[] numbers)
   int[] numbers = { 1, 2, 3, 4, 5, 6 };
   int a = 10, b = 20, c = 30, d = 40;
   obj.print(a, b, c, d);
   obj.print(numbers);
   ```

## See also

- <https://www.c-sharpcorner.com/UploadFile/puranindia/parameter-passing-in-C-Sharp/>
