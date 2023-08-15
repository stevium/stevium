---
tags: development wiki c#
cache_breaker: 1
---

A [delegate](#) is a type that represents references to methods with a parameter list and return type. When you instantiate a delegate, you can associate its instace with any method with a compatible signature and return type. You can invoke the method through the delegate instance.

```csharp
public delegate int PerformCalculation(int x, int y);
```

The features that add extra flexibility to the delegate are [Covariance](#) and [Contravariance](#).

- Covariance allows you to assign a method to the delegate where the return type of the method is a class which is derived from the class that specifies the return type of the delegate
- Contravariance allows you to assign a method to the delegate where the parameter type of the method is a base class of the class that is specified as the parameter of the delegate

### Multicast delegate

- When a delgeate is wrapped with more than one method, that is known as a multicast delgeate.
- In C# delegates are multicast, meaning they can point to more than one function at a time. They ar derived from `System.MulticastDelegate` class.

```c#
public delegate void delmethod(int x, int y);

public class TestMultipleDelegate {
    public void plus_Method1(int x, int y) {
        Console.Write("You are in plus_Method1");
    }
    
    public void subtract_Method2(int x, int y) {
        Console.Write("You are in subtract_Method2");
    }
}

static void Main(string[] args) {
    TestMultipleDelgeate obje = new TestMultipleDelegate();
    
    delmethod del = new delmethod(obj.plus_Method1);
    
    // Here we have multicast
    del += new delmethod(obj.subtract_Method2);
    // plus_Method1 and subtract_Method2 are called
    del(50, 10);
    // Here again we have multicast
    del -= new delmethod(obj.plus_Method1);
    // ONly subtract_Method2 is called
    del(20, 10);
}
```

### Events
Events and delegate work together. An event is a reference to a delegate, when even is raised, a delegate is called. In C# terms, events are a special form of delegates.

```c#
public delegate void MyDelegate(int a);
public event MyDelegate MyEvent;

public void RaiseEvent() {
    MyEvent(20);
}
```
Delegates support `=` assignment operator, events do not. This is to enforce `publisher/subscriber` pattern and to prevent accidentally detaching all methods subscribed to it. 

## See also

- <https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/>
- Delegate Vs Events <https://www.linkedin.com/pulse/delegate-vs-events-pawan-verma/>
- <https://www.c-sharpcorner.com/UploadFile/puranindia/C-Sharp-net-delegates-and-events/>