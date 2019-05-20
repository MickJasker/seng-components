# optimized-component-library

## Install

Install the components:

```
$ yarn add seng-components
```

In your Vue entry file import the library

```typescript
import 'seng-components';
```

## Usage

Because the components are registered globally you can use the components out of the box in your own components.

### SengLazy

SengLazy makes it possible to render it's children when the content is in the view.

#### Example

```vue
<template>
  <div class="comp">
    <h2>Example</h2>
    <SengLazy>
      <img src="example.png" alt="ex" />
    </SengLazy>
  </div>
</template>
```

In the example above is the image only rendered when the image is actually in view.
The component works with the Intersection Observer API. The options found in the on MDNdocs can be passed as props to the components.

### SengImage

SengImage makes it easier to create responsive images that respond to breakpoints and to the network speed of the client.

#### Example

```vue
<template>
  <div class="comp">
    <h2>Example</h2>
    <SengImage
      :src="require('path/to/image.jpg')"
      :normal="require('path/to/image@2.jpg')"
      :large="require('path/to/image@3.jpg')"
      :breakpoints="{
        normal: '375px',
        large: '768px',
      }"
    />
  </div>
</template>
```

#### WebP
If you want to use WebP you need to install a plugin in WebPack. 
[Plugin download and install instructions](https://www.npmjs.com/package/imagemin-webp-webpack-plugin).

## Project setup

```
yarn install
```

#### Compiles and hot-reloads for development

```
yarn run serve
```

#### Compiles and minifies for production

```
yarn run build
```

#### Lints and fixes files

```
yarn run lint
```

#### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
