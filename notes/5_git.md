---
id: git
sidebar_label: Git/Github
sidebar_position: 5
---

### Remove directory from remote repository after adding them to .gitignore
```git
git rm -r --cached .idea
git commit -m "Removed idea folder from repository"
git push origin main
```
`--cached` tells git that you want to keep your local copies of the files

### Bind a project to a remote repository
```git
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/.../....git
git branch -M main
git push -u origin main
```

### Workflow Permission to git denied to github-actions[bot]
Go to `Setting` -> `Actions` -> `General` -> `Workflow permissions` -> check `Read and write permissions`
