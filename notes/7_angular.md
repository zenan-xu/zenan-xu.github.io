---
id: angular
sidebar_label: Angular
sidebar_position: 7
---
# Angular

## Directives examples

```angular
<div *ngFor="let iteam of iteams" [ngStyle]='{color: item.length % 2 === 0 ? 'black' : 'white'}'>{{ item }}</div>
```

### `ngOnChange`
It is triggered only if `@Input` reference is changed, it is not triggered if content of input object is changed.
Possible solution : 
```typescript
changeDetect = false;

this.changeDetect = !changeDetect;
```
add this wherever you want to trigger onchange function in child component and this variable into input of child component

### Initialisation before ngOnInit : 
in `@NgModule`
```typescript
export const init_app = (bootstrapService: BootstrapService) => {
  return () => bootstrapService.initializeApp();
}
```
```typescript
providers: [
  BootstrapService,
  {
    provide: APP_INITIALIZER,
    useFactory: init_app,
    deps: [BootstrapService],
    multi: true
  }
]
```
in `BootstrapService`
```angular
public async initializeApp(): Promise<void> {
  await this.init...;
}
```

### `[hidden]` not working
cause: maybe another css class of the same element has already specified a `display' property
```css
span[hidden] {
    display: none !important;
}
```



