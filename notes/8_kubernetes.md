---
id: kubernetes
sidebar_label: Kubernetes
sidebar_position: 8 
---
# Kubernetes

## Kubectl

### Get logs tail of a pod
```kubectl
kubectl logs --tail pod_name
```

### Alias
```kubectl
alias k=kubectl
alias kp='k get po'
alias kd='k get deployments -o wide'
```