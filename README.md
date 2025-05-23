# Vue3 wrapper for TOAST UI Image Editor

> This is a Vue3 component wrapping [TOAST UI Image Editor](https://github.com/nhn/tui.image-editor).

# Demo
> This is a demo that shows how to use it [vue3-image-editor-demo](https://github.com/tudan110/vue3-image-editor-demo).

[![npm version](https://img.shields.io/npm/v/tui-image-editor.svg)](https://www.npmjs.com/package/@tudan110/vue3-image-editor)

## 🚩 Table of Contents

- [Collect statistics on the use of open source](#collect-statistics-on-the-use-of-open-source)
- [Install](#-install)
  - [Using npm](#using-npm)
- [Usage](#-usage)
  - [Load](#load)
  - [Implement](#implement)
  - [Props](#props)
  - [Events](#events)
  - [Method](#method)

## Collect statistics on the use of open source

TOAST UI ImageEditor applies Google Analytics (GA) to collect statistics on the use of open source, in order to identify how widely TOAST UI ImageEditor is used throughout the world. It also serves as important index to determine the future course of projects. location.hostname (e.g. > “ui.toast.com") is to be collected and the sole purpose is nothing but to measure statistics on the usage. To disable GA, use the following `usageStatistics` option when creating the instance.

```js
const options = {
    ...
    usageStatistics: false
}

const imageEditor = new tui.ImageEditor('#tui-image-editor-container', options);
```

Or, include [`tui-code-snippet`](https://github.com/nhn/tui.code-snippet)(**v1.4.0** or **later**) and then immediately write the options as follows:

```js
tui.usageStatistics = false;
```

## 💾 Install

### Using npm

```sh
npm install --save @tudan110/vue3-image-editor
```

> **If you install other packages**, you may lose dependency on fabric. You need to **reinstall the fabric**.

    ```
    npm install --no-save --no-optional fabric@~4.2.0
    ```

## 🔡 Usage

### Load

- Using namespace

  ```js
  const ImageEditor = toastui.ImageEditor;
  ```

- Using module

  ```js
  // es modules
  import { ImageEditor } from '@tudan110/vue3-image-editor';

  // commonjs require
  const { ImageEditor } = require('@tudan110/vue3-image-editor');
  ```

### Implement

```vue
<script setup>
  import 'tui-color-picker/dist/tui-color-picker.css';
  import 'tui-image-editor/dist/tui-image-editor.css';
  import TuiImageEditor from '@tudan110/vue3-image-editor';

  import {ref} from 'vue';


  const useDefaultUI = ref(true);

  // 配置选项
  const options = {
  // for tui-image-editor component's "options" prop
  cssMaxWidth: 700,
  cssMaxHeight: 500
};
</script>

<template>
  <div class="editor">
    <tui-image-editor :use-default-ui="useDefaultUI" :options="options" />
  </div>
</template>

<style scoped>
  .editor {
  width: 100vh;
  height: 80vh;
}
</style>

```

### Props

You can use `includeUi` and `options` props. Example of each props is in the [Getting Started](../../docs/Basic-Tutorial.md).

- `includeUi`

  | Type    | Required | Default |
  | ------- | -------- | ------- |
  | Boolean | X        | true    |

  This prop can contained the `includeUI` prop in the option. You can see the default UI.

- `options`

  | Type   | Required | Default                                 |
  | ------ | -------- | --------------------------------------- |
  | Object | X        | { cssMaxWidth: 700, cssMaxHeight: 500 } |

  You can configure your image editor using `options` prop. For more information which properties can be set in `options`, see [options of tui.image-editor](https://nhn.github.io/tui.image-editor/latest/ImageEditor).

### Events

- addText: The event when 'TEXT' drawing mode is enabled and click non-object area.
- mousedown: The mouse down event with position x, y on canvas
- objectActivated: The event when object is selected(aka activated).
- objectMoved: The event when object is moved.
- objectScaled: The event when scale factor is changed.
- redoStackChanged: Redo stack changed event
- textEditing: The event which starts to edit text object.
- undoStackChanged: Undo stack changed event

```html
<tui-image-editor ... @addText="onAddText" @objectMoved="onObjectMoved"> </tui-image-editor>
```

```js
...
methods: {
    onAddText(pos) {
        ...
    },
    onObjectMoved(props) {
        ...
    }
}
...
```

For more information such as the parameters of each event, see [event of tui.image-editor](https://nhn.github.io/tui.image-editor/latest/ImageEditor#event-addText).

### Method

For use method, first you need to assign `ref` attribute of element like this:

```html
<tui-image-editor ref="tuiImageEditor" :options="options"></tui-image-editor>
```

After then, you can use methods through `this.$refs`. We provide `getRootElement` and `invoke` methods.

- `getRootElement`

  You can get root element of image editor using this method.

  ```js
  this.$refs.tuiImageEditor.getRootElement();
  ```

- `invoke`

  If you want to more manipulate the ImageEditor, you can use `invoke` method to call the method of tui.ImageEditor. First argument of `invoke` is name of the method and second argument is parameters of the method. To find out what kind of methods are available, see [method of tui.ImageEditor](https://nhn.github.io/tui.image-editor/latest/ImageEditor).

  ```js
  const drawingMode = this.$refs.tuiImageEditor.invoke('getDrawingMode');

  this.$refs.tuiImageEditor.invoke('loadImageFromURL', './sampleImage.png', 'My sample image');

  this.$refs.tuiImageEditor.invoke('startDrawingMode', 'FREE_DRAWING', {
    width: 10,
    color: 'rgba(255, 0, 0, 0.5)',
  });
  ```
