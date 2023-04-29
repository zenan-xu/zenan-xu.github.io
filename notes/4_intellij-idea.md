---
id: intellij
sidebar_label: Intellij idea
sidebar_position: 4
---
# Intellij idea 
:exclamation: These are MY favorite tips


## Shortcuts
- `ctrl+alt+<-/->` back or forward place
- `alt+<-/->` left or right tab
- `ctrl+shift+i` preview implementation 
- `ctrl+alt+h` search in hierarchy (`ctrl+shift+f`)
- `ctrl+e` recent files
- `alt+1` open/close project window

- `LocalHistory` > `show History` 
- `Help` > `Change Memory Settings` > `Edit Custom VM Options`

## Settings
- `Editor` > `General` > `Code Completion` >> Uncheck `Match case`, ignore cases for auto-completion
- `Editor` > `General` > `Apperarance` >> Check `Show method separators`
- `Editor` > `General` > `Editor Tabls` >> Uncheck `Show tabls in one row` (`tab limit`)

### Get rid of the pop up message asking to trust certificate
File | Settings | Tools | Server Certificates for Windows and linux

### `Openfile or Project` dialog window hangs in loading state since new UI
It's possible to use a native file chooser on Windows. 
To enable it, add the following properties to the Help | Edit Custom Properties file and restart IDE : 
```
sun.awt.windows.useCommonItemDialog=true
ide.win.file.chooser.native=true
```

### Open declaration source in the same tab
Uncheck `Enable preview tab` in the settings of project view

### Resolve `Symbol ... is inaccessible from here`
Java | Javadoc | Declaration has problems in Javadoc references

Uncheck `Report inaccessible sympols`
## Plugins
- Pokemon progress
- GitHub Copilot
- Rainbow Brackets

## Live template

### Junit test method
```
@org.junit.jupiter.api.Test
@org.junit.jupiter.api.DisplayName("$TEST_NAME$")
void $METHOD_NAME$() {
    // GIVEN
    
    // WHEN
    
    // THEN
}
```
![Junit5 live template](../static/img/intellij-idea/junit5_live_template.png)
