---
id: spring-boot
sidebar_label: Spring / Spring-Boot
sidebar_position: 3
---

# Spring / Spring-Boot

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

### SSL
Put ssl configuration in application.yml instead of bootstrap.yml

`bootstrap.yml` or `bootstrap.properties`
It's only used/needed if you're using Spring Cloud and your application's configuration is stored on a remote configuration server (e.g. Spring Cloud Config Server).

From the documentation:
```
A Spring Cloud application operates by creating a "bootstrap" context, 
which is a parent context for the main application. 
Out of the box it is responsible for loading configuration properties from the external sources, 
and also decrypting properties in the local external configuration files.

```
Note that the `bootstrap.yml` or `bootstrap.properties` can contain additional configuration (e.g. defaults) but generally you only need to put bootstrap config here.

```
server:
  ssl:
    key-store: /path/to/keystore.p12
    key-store-password: password-to-access-keystore
    key-store-type: pkcs12 (jks)
    key-alias: tomcat
    key-password: password-for-the-private-key-if-you-have-any
    enabled: true (default is true)
```