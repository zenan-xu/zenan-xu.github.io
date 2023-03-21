---
id: windows
sidebar_label: Windows
sidebar_position: 2
---

### Kill process in port
```cmd
netstat -ano | findstr :8080
```

```cmd
taskkill /PID <PID> /F
```