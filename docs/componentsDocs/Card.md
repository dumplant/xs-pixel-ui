# Card
Card component
### example
<p-card imgSrc="/xs-pixel-ui/demo.png" summary="summary">
  <template v-slot:text>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, repellat.
  </template>
</p-card>

### code
```html
<p-card imgSrc="/demo.png" summary="summary">
  <template v-slot:text>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, repellat.
  </template>
</p-card>
```

### Attributes

| attributes  | type | essential |default|
|     ---     |  --- |    ---    |   --- |
| width | Number | false | - |
| imgSrc | String | false | - |
| imgHeight | Number | false | - |
| summary | String/Slot | false | - |
| text | Slot | false | - |
