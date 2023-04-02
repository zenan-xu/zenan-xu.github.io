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