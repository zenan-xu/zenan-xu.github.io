---
id: kubernetes
sidebar_label: Kubernetes
sidebar_position: 8 
---
# Kubernetes

## Kubectl

### Get logs tail of a pod
```kubectl
kubectl logs -f pod_name
kubectl logs --tail=20 pod_name

```

### Scale pod number
```kubectl
kubectl scale --replicas=0 deployment deploy-name
```

### AKS
```
kubectl config use-context aks_cluster && kubectl config set-context --current --namespace=namespace && kubectl get po -o wide
```