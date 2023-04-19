---
id: spring-boot
sidebar_label: Spring/Spring-Boot
sidebar_position: 3
---

Spring Boot auto-configures @EnableKafka if it detects spring-kafka on the class path.

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
   
### Scopes : 
- singleton
- prototype
- request
- session
- application
- websocket

### Get url of database when debugging
```
this.jdbcTemplate.getDataSource().getConnection().getMetaData().getURL()
```

### Steps when a request enters spring application (before arriving in controller)

### Spring security and OAuth2