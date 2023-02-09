import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { toolbar } from './config';
import { useState } from 'react';

const App = () => {
  // const [editorState, setEditorState] = useState<EditorState>()
  return (
    <div className="App">
      <p>Rich Text Editor</p>
      <div>
        <Editor
          // editorState={editorState}
          // onEditorStateChange={setEditorState}
          // wrapperClassName="demo-wrapper"
          // editorClassName="demo-editor"
          // toolbarClassName="toolbar-class"
          toolbar={toolbar}
          // mention={{
          //   separator: ' ',
          //   trigger: '@',
          //   suggestions: [
          //     { text: 'APPLE', value: 'apple', url: 'apple' },
          //     { text: 'BANANA', value: 'banana', url: 'banana' },
          //     { text: 'CHERRY', value: 'cherry', url: 'cherry' },
          //     { text: 'DURIAN', value: 'durian', url: 'durian' },
          //     { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
          //     { text: 'FIG', value: 'fig', url: 'fig' },
          //     { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
          //     { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
          //   ],
          // }}
        />
      </div>
    </div>
  );
}

export default App;
