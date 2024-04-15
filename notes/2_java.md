---
id: java
sidebar_label: Java
sidebar_position: 2
---
# Java

## Javadoc

### Reference a method
```javadoc
{@link Class#method()}
```
If you get `Symbol ... is inaccessible from here` in Intellij, check [intellij note](https://zenan-xu.github.io/docs/intellij#settings)

### Get size/length
- String : length()
- Collections : size()
- Map : size()
- Array : length

## Collections / Map

### ArrayList vs LinkedList
1. Internal Implementation
    * ArrayList internally uses a dynamic array to store its elements.
    * LinkedList uses Doubly Linked List to store its elements.
2. Manipulation
    * ArrayList is slow as array manipulation is slower.
    * LinkedList is faster being node based as not much bit shifting required.
3. Implementation
    * ArrayList implements only List. 
    * LinkedList implements List as well as Queue. It can acts as a queue as well.
4. Access
    * ArrayList is faster in storing and accessing data.
    * LinkedList is faster in manipulation of data.

## Test util
### Test private method
Ex : `Object returnValue = executeMethod(getMethod("methodName", RequestParam.class), testClass, requestParam)`
```
private static Object executeMethod(Method method, Object obj, Object... params) throws InvocationTargetException, IllegalAccessException {
    method.setAccessible(true);
    return method.invoke(obj, params)
}

private static Method getMethod(String methodName, Class<?>... clazz) throws NoSuchMethodException {
   return TestClass.class.getDeclaredMethod(methodName, clazz);
}
```

### Dynamically get/set field
```
@SneakyThrows
public static <T> T get(String fieldName, Object instance, Class<?> instanceClass) {
   return (T) instanceClass.getDeclaredField(fieldName).get(instance);
}

@SneakyThrows
public static <T> void set(String fieldName, Object instance, T value) {
   Field field = instance.getClass().getDeclaredField(fieldName);
   field.setAccessible(true);
   field.set(instance, value);
}
```
