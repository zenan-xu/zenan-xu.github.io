---
id: git
sidebar_label: Git / Github
sidebar_position: 5
---
# Git / Github

### Show remote url
```git
git config --get remote.origin.url
git remote show origin
```

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

### Delete the most recent commit without destroying the work you've done : 
```git
git reset --soft HEAD~1
```
### Delete the most recent commit and remove changes : 
```git
git reset --hard HEAD~1
```
### Jump to the latest commit on origin/master and checkout those files
```git
git fetch --all
git branch backup-master
git reset --hard origin/master
```
### Recover commits after `git push -f your_branch`
```git
git reflog
```
Choose Head_Number you want recover with
```git
git reset --hard HEAD@{HEAD-NUMBER}
```
You can see all commits on this head by 
```git
git cherry -v branch_name
```
In the end you should force push `git push -f branch_name`
