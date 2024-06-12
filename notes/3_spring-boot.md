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
   
### Bean scopes
* `singleton`: (Default) Scopes a single bean definition to a single object instance for each Spring IoC container.
* `prototype`: Scopes a single bean definition to any number of object instances.
* The `request`, `session`, `application`, and `websocket` scopes are available only if you use a web-aware Spring ApplicationContext implementation (such as XmlWebApplicationContext). If you use these scopes with regular Spring IoC containers, such as the ClassPathXmlApplicationContext, an IllegalStateException that complains about an unknown bean scope is thrown.

### Transactional
* The `@Transactional` annotation is metadata that specifies that an interface, class, or method must have transactional semantics (for example, "start a brand new read-only transaction when this method is invoked, suspending any existing transaction"). The default `@Transactional` settings are as follows:
   * The propagation setting is `PROPAGATION_REQUIRED`.
   * The isolation level is `ISOLATION_DEFAULT`.
   * The transaction is read-write.
   * The transaction timeout defaults to the default timeout of the underlying transaction system, or to none if timeouts are not supported.
   * Any `RuntimeException` or `Error` triggers rollback, and any checked `Exception` does not.
* In proxy mode (which is the default), only external method calls coming in through the proxy are intercepted. This means that self-invocation (in effect, a method within the target object calling another method of the target object) does not lead to an actual transaction at runtime even if the invoked method is marked with `@Transactional`
* Propagation
* Isolation

### Http methods
* POST
   * It is commonly used for creating new resources on the server or for performing actions that result in a state change on the server
   * POST requests are not idempotent, meaning that sending the same POST request multiple times may result in different outcomes or create duplicate resources
* PUT
   * The PUT method is used to send data to a server to create or update a resource at a specific URI.
   * It is commonly used for updating existing resources on the server
   * PUT requests are idempotent, meaning that sending the same PUT request multiple times will always result in the same outcome
* HEAD
   * It's often used to check the headers of a resource without actually downloading the resource's content.
   * For example, you might use a HEAD request to check the last-modified timestamp of a resource.
* OPTIONS
   * It's used to determine the HTTP methods supported by a server for a specific URL.
   * It's commonly used in cross-origin resource sharing (CORS) to determine whether a cross-origin request is allowed from a client to a server.
* PATCH
   * It's used to apply partial modifications to a resource, rather than replacing the entire resource.
* CONNECT
   * It's used to establish a tunnel to the server identified by the request URI.
   * It's commonly used in HTTP proxies to establish a secure HTTPS connection through an HTTP proxy server.
* TRACE:
   * It's used to echo the received request back to the client.
   * It's primarily used for diagnostic purposes to debug or troubleshoot HTTP communication between the client and server.
   * However, due to potential security vulnerabilities, many servers disable support for the TRACE method.

### Get url of database when debugging
```
this.jdbcTemplate.getDataSource().getConnection().getMetaData().getURL()
```

### Get Conditions evaluation report
```
logging:
  level:
    org:
      springframework:
        boot:
          autoconfigure: debug
```

### How http interceptor work (using recursive way)
check `InterceptingClientHttpRequest#execute`

### Steps when a request enters spring application (before arriving in controller)

### Spring security and OAuth2
- Spring security : authentication and access control framework
    * Authentication is the process of verifying the identity of a user or system.
    * It answers the question: "Who are you?"
- OAuth2 : authorization framework
    * Authorization is the process of determining whether a user or system has permission to access a particular resource or perform a specific action.
    * It answers the question: "Are you allowed to do this?"

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