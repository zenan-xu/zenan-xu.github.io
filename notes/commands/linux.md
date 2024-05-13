---
id: linux
sidebar_label: Linux
sidebar_position: 1
---

### url decode
```bash
alias urldecode = 'sed "s@+@ @g;s@%@\\\\x@g" | xargs -0 printf "%b"'
echo "http%3A%2F%2Fwww" | urldecode
```

### Bash configuration
```
alias _bash='nano ~/.bashrc'
alias _b='cat ~/.bashrc'
```