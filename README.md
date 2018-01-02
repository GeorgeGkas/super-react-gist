# super-react-gist
Simple and flexible component that allows you to embed [GitHub Gists](https://gist.github.com/) in [React](https://reactjs.org/) projects.


## Features
- Embed a **single file** from Gist repository!
- Embed **multiple files** from multiple Gist repositories!
- Embed the **whole Gist** repository!
- **Easy usage**: Just copy-paste the Gist's repository URL to embed the whole repository, or copy-paste the permalink of an individual file to include just that.
- **Lightweight**: ~9KB minified (~4kb if gzipped).
- Packaged as **UMD module** that can be loaded everywhere.
- **Works both on secret and public repositories**.

## Table of contents
- [Quick Start](#quick-start)
- [Usage](#usage)
- [Examples](#examples)
- [Browser Support](#browser-support)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Creator](#creator)
- [Licence](#license)

## Quick Start
- Clone the repo: `git clone https://github.com/georgegkas/super-react-gist.git`
- Install with [npm](https://www.npmjs.com/): `npm install --save super-react-gist`

## Usage
**`<Gist url={string} file={string} />`**
- `url` *{ string }* **required** The URL of the Gist repository or the permalink of an individual gist file.
- `file` *{ string }* Name of a specific file to include.


## Examples
The following examples illustrate some basic usages of **super-react-gist** component.

### Render one file
With **super-react-gist** you are able to render a single file from a gist repository.

```javascript
// Here is a little snippet to get you started!
import React from 'react'
import Gist from 'super-react-gist' // <-- import the library

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Just enter the file permalink to <em>url</em> prop.</p>
        <Gist url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df#file-start-js' />
      </div>
    )
  }
}
```

### Render multiple files
You are not restricted to use only one **super-react-gist** component in your project.

```javascript
import React from 'react'
import Gist from 'super-react-gist' // <-- import the library

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Rendering multiple files is a piece of cake!</p>
        <Gist url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df#file-start-js' />
        <Gist url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df#file-multiple-js' />
      </div>
    )
  }
}
```

### Render using `file` prop
Oh snap! *face-palm*! In case you didn't notice we can only use the above method to render files that do not contain any uppercase letter. For instance, if our Gist repo contains a file `CaMelCase.js`, then providing just the permalink will not work!

**Q**: How can we render this `CaMelCase.js` file?
**A**: By providing a `file` prop to our `Gist` component to indicate which file we want to include.

This is how we do it:

```javascript
import React from 'react'
import Gist from 'super-react-gist'

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <p>provide the Gist url without including the file.</p>
        <p>...and pass the filename to `file` prop.</p>
        <Gist
        url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df'
          file='CaMelCase.js'
          />
      </div>
    )
  }
}
```

### Render the whole Gist
Of course, we can also embed the whole Gist repository just by copying the Gist URL.

```javascript
import React from 'react'
import Gist from 'super-react-gist'

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <p>provide the Gist URL without include any file.</p>
        <Gist url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df' />
      </div>
    )
  }
}
```

### Combine all the above techniques
*This example is left as an exercise to the reader.*


### Run the examples yourself
Clone the repository and then run:
```
$ npm install
$ npm run build
$ npm start
```

## Browser Support
**super-react-gist** comes as UMD module. This means you are able to use  **super-react-gist** component in your browser!

To get started add the following script tag in your html file:

```html
<script src="https://unpkg.com/super-react-gist/umd/super-react-gist.min.js"></script>
```

Then you are able to access **super-react-gist** component using the `Gist` name, which is the global variable the UMD build has exported. [See this Pen for a demonstration](https://codepen.io/georgegkas/pen/zpzMzz).

## Bugs and feature requests
Have a bug or a feature request? [Please open a new issue](https://github.com/georgegkas/super-react-gist/issues).

## Contributing
Please read through our contributing guidelines in [CONTRIBUTING.md](https://github.com/georgegkas/super-react-gist/blob/master/CONTRIBUTING.md) file.

Editor preferences are available in the editor config for easy use in common text editors. Read more and download plugins at [http://editorconfig.org](http://editorconfig.org).

## Creator
George Gkasdrogkas

- [https://github.com/georgegkas](https://github.com/georgegkas)
- [https://codepen.io/georgegkas](http://codepen.io/georgegkas)

## Licence
Code released under the [MIT License](https://opensource.org/licenses/MIT).  See [LICENSE.md](https://github.com/georgegkas/super-react-gist/blob/master/LICENSE.md) for more details.
