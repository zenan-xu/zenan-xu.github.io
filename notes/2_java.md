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

### `String.format` with same value multiple times

```
String s = "%s %1$s %1$s".
String.format(s, "hello");
```

### Move one element to first place in a map
```
Map<String, String> copy = new LinkedHashMap<>(origin);
origin.keySet().retainAll(Collections.singleton(value));
origin.putAll(copy);
```

## Date handling

### Transform a time in string without time zone info to epoch
```
String aDate = "2024-04-30 15:00:00";
LocalDateTime.parse(aDate, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")).atZone(ZoneOffset.UTC).toInstant().toEpochMilli();
```
LocalDateTime does not contain zone info, so it fits to parse this date in string. And then transform to `Instant` with a zone.

### Calculate difference between 2 instants
```
ChronoUnit.MINUTES.between(Instant.ofEpochMilli(123L), Instant.ofEpochMilli(Instant.now().toEpochMilli()));
```

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
