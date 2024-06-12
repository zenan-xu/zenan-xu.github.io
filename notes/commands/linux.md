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

### Delete lines from a file and generate new file
delete lines 1 to 4
```bash
sed '1,4d' $filename > extracted_file.txt
```
delete lines 1, 3 and 5
```bash
sed -e '1d;3d;5d' $filename
```

### Converting from linux to Windows line breaks
```bash
sed -i 's/$/\r/' linuxFile.txt
```

### Parse json and get value of a key in json
```
jq -r '.data[].element.key' response.json > result
```

### Bash configuration
```
alias _bash='nano ~/.bashrc'
alias _b='cat ~/.bashrc'
```