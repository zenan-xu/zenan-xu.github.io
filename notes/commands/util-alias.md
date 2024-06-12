---
id: Util alias
sidebar_label: Util alias
sidebar_position: 3
---
# Util alias

## Bash configuration file
```
alias _bash='nano ~/.bashrc'
alias _b='cat ~/.bashrc'
```

## Kubernetes
```kubectl
alias k=kubectl
alias kp='k get po -o wide'
alias kdep='k get deploy -o wide'
alias kd='k get deploy -o wide | awk "{print \$1, \$7}" | column -t'
```

## Maven
```
alias mci='mvn clean install'
alias mcist='mvn clean install -DskipTests'
alias mcv='mvn clean verify'

```