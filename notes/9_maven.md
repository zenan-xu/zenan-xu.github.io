---
id: Maven
sidebar_label: Maven
sidebar_position: 9
---
# Maven

### Execute only one sub module / exclude one sub module
```
mvn clean install -pl sub-module -am
mvn clean instlla -pl '!sub-module' -am
```
-pl, --projects
    Build specified reactor projects instead of all projects

-am, --also-make
    Also build required dependency/sub modules

### Resolve `[ERROR] Malformed \ uxxx encoding.`
```
grep -lrnw ./maven-repository -e '\u000' | xargs rm
```
Reload maven project
