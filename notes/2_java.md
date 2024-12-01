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

### To have the map with the order of presence in the list when grouping
```
list.stream().collect(Collectors.groupingBy(Object::getKey, LinkedHashMap::new, Collectors.toList()));
```

### add element into ArrayList in HashMap
```
Map<String, List<Item>> items = new HashMap<>();
items.computeIfAbsent(key, k -> new ArrayList<>()).add(item);
```

### ArrayList vs LinkedList
1. Internal Implementation
    * ArrayList internally uses a dynamic array to store its elements.
    * LinkedList uses Doubly Linked List to store its elements.
2. Manipulation
    * ArrayList is slow as array manipulation is slower.
    * LinkedList is faster being node based as not much bit shifting required.
3. Implementation
    * ArrayList implements only List. 
    * LinkedList implements List as well as Queue. It can act as a queue as well.
4. Access
    * ArrayList is faster in storing and accessing data.
    * LinkedList is faster in manipulation of data.

## String

### Concatenation
Java does string concatenation using StringBuilder by default for simple cases (checkout the bytecode using `javap -c`).

`String a = b + c + d;` is converted to `String a = new StringBuilder(b).append(c).append(d).toString();`

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

## Decimal format 

```
private DecimalFormat decimalFormat = new DecimalFormat("#,###.00;-#,###.00", new DecimalFormatSymbols(Locale.US));
```
Without second parameter, it will use os locale and will cause potential pb, for ex still convert 12.00 to 12,00 if os has french region

`windows os -> settings -> TIme&Language -> region -> regional format`

`String.format(Locale.US, "%,.3f", number)`

## Type erasure
To understand why primitive data types cannot be used to generics, let's remember that generics are a compile-time feature, meaning the type parameter is erased and all generic types are implemented as type Object.
Therefore, type parameters must be convertible to Object. Since primitive types don't extend Object, we can't use them as type parameters.

## Logging

### `log.isDebugEnabled()`
It's used just for performance reasons. `log.debug(...)` statement won't be evaluated (especially for `+` operator).

If you use `SLF4J`, you can avoid the `log.isDebugEnabled()` call, by using messaging formatting.
`logger.debug("The entry is {}", entry);` The message formatting will not be evaluated unless debug is enabled.

## Test util

### Test private method
Ex : `Object returnValue = executeMethod(getMethod(TestClass.class, "methodName", RequestParam.class), testClass, requestParam)`
```
private static Object executeMethod(Method method, Object obj, Object... params) throws InvocationTargetException, IllegalAccessException {
    method.setAccessible(true);
    return method.invoke(obj, params)
}

private static Method getMethod(Class<?>... clazz, String methodName, Class<?>... parameterTypes) throws NoSuchMethodException {
   return clazz.getDeclaredMethod(methodName, parameterTypes);
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
