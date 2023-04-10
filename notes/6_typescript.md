---
id: ts
sidebar_label: Typescript 
sidebar_position: 6
---
# Typescript

### Double question mark `??`
It's the nullish coalescing operator.
```typescript
const value = value1 ?? value2;
```
If `value1` is `null` or `undefined`, use `value2`. Otherwise use `value1`.

### Double exclamation mark `!!`
`!!` ensure the resulting type is a boolean. It's a double negation

### Filter a list of values on removing duplicated values
`of(string[].concat(string[]))` will not work
```
of(string[], string[]).pipe(
  distinct()
).subscribe(list => {
    this.isMulti = list.length >= 2;
})
```

### Remove accents in a string in JS
```javascript
str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
```