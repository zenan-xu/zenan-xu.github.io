---
id: spring
sidebar_label: Spring
sidebar_position: 4
---

### Dependency injection
1. Constructor injection
2. Setter injection
    * cannot make the field private, because we need to set the field via setter
3. Field injection
    * violate java, field is marked as private yet spring somehow is able to go ahead and give us an instance of that class to set that field. The way that spring is able to do that is through reflection
  it's private but spring is kind of bypass the conventions of java
    * can't make the field final
    * there's a chance that this could be null
    * testability, you will have to use reflection to get this value in here
    * the only time when it is okay to use field injection is within a test