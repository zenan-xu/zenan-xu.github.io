---
id: git
sidebar_label: Git
sidebar_position: 5
---

### Remove directory from remote repository after adding them to .gitignore
```git
git rm -r --cached .idea
git commit -m "Removed idea folder from repository"
git push origin main
```
`--cached` tells git that you want to keep your local copies of the files
