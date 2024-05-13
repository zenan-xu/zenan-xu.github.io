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
alias kp='k get po -o wide'
alias kdep='k get deploy -o wide'
alias kd='k get deploy -o wide | awk "{print \$1, \$7}" | column -t'
```

### AKS
```
kubectl config use-context aks_cluster && kubectl config set-context --current --namespace=namespace && kubectl get po -o wide
```