# super-react-gist
Simple and flexible component that allows you to embed [GitHub Gists](https://gist.github.com/) in [React](https://reactjs.org/) projects.

## Features
- Embed a **single file** from Gist repository!
- Embed **multiple files** from multiple Gist repositories!
- Embed the **whole Gist** repository!
- **Easy usage**: Just copy-paste the Gist's repository URL to embed the whole repository, or copy-paste the permalink of an individual file to include just that.
- Maximize Development Experience with **custom error handling**.
- **Lightweight**: ~9KB minified (~4kb if gzipped).
- Packaged as **UMD module** that can be loaded everywhere.
- **Works both on secret and public repositories**.

## Table of contents
- [Installation](#installation)
- [Component Properties](#component-properties)
- [Examples](#examples)
- [Browser Support](#browser-support)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [License](#license)

## Installation
### Through NPM
To install through npm run:

```bash
npm i super-react-gist
```
### As UMD module
**super-react-gist** comes as UMD module. This means you are able to use  **super-react-gist** component in your browser!

To get started add the following script tag in your html file:

```html
<script src="https://unpkg.com/super-react-gist/umd/super-react-gist.min.js"></script>
```

## Component Properties

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `url` | *string* |✅ | The URL of the Gist repository or the permalink of an individual gist file. |
| `file` | *string* | | Optional filename to include. |
| `onLoad` | *function* | | Optional callback triggered on Gist load. |
| `onError` | *function* | | Optional callback triggered on fetch error. |
| `LoadingComponent` | *Component* | | Optional React component to render on Gist loading. |
| `ErrorComponent` | *Component* || Optional React component to render if Gist fetch fails. |

## Examples
The following examples illustrate some basic features of the **super-react-gist** library.

### Render one file
With **super-react-gist** you are able to render a single file from a gist repository.

```javascript
// Here is a little snippet to get you started!
import React from 'react'
import Gist from 'super-react-gist' // <-- import the library

const MyComponent = () => (
  <div>
    <p>Just enter the file permalink to <em>url</em> prop.</p>
    <Gist url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df#file-start-js' />
  </div>
)
```

### Render multiple files
You are not restricted to use only one **Gist** component in your project.

```javascript
import React from 'react'
import Gist from 'super-react-gist' // <-- import the library

const MyComponent = () => (
  <div>
    <p>Rendering multiple files is a piece of cake!</p>
    <Gist url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df#file-start-js' />
    <Gist url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df#file-multiple-js' />
  </div>
)
```

### Render using `file` prop
Oh snap! *face-palm*! In case you didn't notice we can only use the above method to render files that do not contain any uppercase letter. For instance, if our Gist repo contains a file `CaMelCase.js`, then providing just the permalink will not work!

**Q**: How can we render this `CaMelCase.js` file?
**A**: By providing a `file` prop to our `Gist` component to indicate which file we want to include.

This is how we do it:

```javascript
import React from 'react'
import Gist from 'super-react-gist'

const MyComponent = () => (
  <div>
    <p>provide the Gist url without including the file.</p>
    <p>...and pass the filename to `file` prop.</p>
    <Gist
      url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df'
      file='CaMelCase.js'
      />
  </div>
)
```

### Render the whole Gist
Of course, we can also embed the whole Gist repository just by copying the Gist URL.

```javascript
import React from 'react'
import Gist from 'super-react-gist'

const MyComponent = () => (
  <div>
    <p>provide the Gist URL without include any file.</p>
    <Gist url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df' />
  </div>
)
```

### Use a custom loading component
Most of the times, we would like to render a custom React component while our Gists are loading.

```javascript
import React from 'react'
import Gist from 'super-react-gist'

const MyComponent = () => (
  <div>
    <p>provide the Gist URL without include any file.</p>
    <Gist 
      url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df' 
      LoadingComponent={() => <div>Waiting for Gist...</div>}
    />
  </div>
)
```

### Use a custom error component
In case that fetching fails, we can render a custom React Component to indicate the error.

```javascript
import React from 'react'
import Gist from 'super-react-gist'

const MyComponent = () => (
  <div>
    <p>provide the Gist URL without include any file.</p>
    <Gist 
      url='https://gist.github.com/GeorgeGkas/NOT_EXIST' 
      ErrorComponent={() => <div>Could not fetch component</div>}
    />
  </div>
)
```

### Listen to error and loading events
Apart from providing a custom error or loading component, we can also register the corresponding callbacks. The `onLoad` callback is executed when the Gist is fetched successfully, while `onError` callback is executed if could not retrieve the requested Gist.

```javascript
import React from 'react'
import Gist from 'super-react-gist'

const MyComponent = () => (
  <div>
    <p>provide the Gist URL without include any file.</p>
    <Gist 
      url='https://gist.github.com/GeorgeGkas/NOT_EXIST' 
      οnLoad={() => console.log('Gist fetched successfully!')}
      onError={() => console.log('Gist could not be fetched!')}
    />
  </div>
)
```

### Combine all the above techniques
*This example is left as an exercise to the reader.*


### Run the examples yourself
Clone the repo `git clone https://github.com/georgegkas/super-react-gist.git` and then run:

```
$ npm install
$ npm start
```

Then you are able to access the `Gist` component using the `Gist`  global variable. [See this Pen for a demonstration](https://codepen.io/georgegkas/pen/zpzMzz).

## Bugs and feature requests
Have a bug or a feature request? [Please open a new issue](https://github.com/georgegkas/super-react-gist/issues).

## Contributing
Please read through our contributing guidelines in [CONTRIBUTING.md](https://github.com/georgegkas/super-react-gist/blob/master/CONTRIBUTING.md) file.

Editor preferences are available in the editor config for easy use in common text editors. Read more and download plugins at [http://editorconfig.org](http://editorconfig.org).

## License
Code released under the [MIT License](https://opensource.org/licenses/MIT). See [LICENSE.md](https://github.com/georgegkas/super-react-gist/blob/master/LICENSE.md) for more details.
