import React from 'react'
import ReactDom from 'react-dom'

import Gist from '../../src'

const Demo = () => (
  <div>
    <h1><a href="https://github.com/GeorgeGkas/super-react-gist">super-react-gist</a></h1>
    <p>Simple and flexible component that allows you to embed <a href='https://gist.github.com/'>GitHub Gists</a> in <a href='https://reactjs.org/'>React</a> projects.</p>
    <p>This demo illustrate a basic usage of <strong>super-react-app</strong> component.</p>
    <h2>Render one file</h2>
    <p>With <strong>super-react-app</strong> you are able to render a single file from a gist repository.</p>
    <Gist url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df#file-start-js' />
    <h2>Render multiple files</h2>
    <p>You are not restricted to use only one <strong>super-react-app</strong> component in your project. </p>
    <Gist url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df#file-start-js' />
    <Gist url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df#file-multiple-js' />
    <h2>Render using <code>file</code> prop</h2>
    <p>Works both on <strong>public</strong> and <strong>secret</strong> gists.</p>
    <p>Oh snap! *face-palm*! In case you didn't notice we can only use the above method to render files that do not contain any uppercase letter. For instance, if our Gist repo contains a file <code>CaMelCase.js</code>, then providing just the permalink will not work!</p>
    <p><strong>Q</strong>: How can we render this <code>CaMelCase.js</code> file?</p>
    <p><strong>A</strong>: By providing a <code>file</code> prop to our <code>Gist</code> component to indicate which file we want to include.</p>
    <p>This is how we do it:</p>
    <Gist url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df' file='CaMelCase.js' />
    <h2>Render the whole Gist</h2>
    <p>Of course, we can also embed the whole Gist repository just by copying the Gist URL.</p>
    <Gist url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df' />
    <h2>Combine all the above techniques</h2>
    <p><em>This example is left as an exercise to the reader.</em></p>
    {/* Type here */}
  </div>
)

ReactDom.render(<Demo/>, document.getElementById('demo'))
