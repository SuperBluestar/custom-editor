import { useState } from 'react';
import { ContentBlock, Editor, EditorState } from 'react-draft-wysiwyg';
import { EditorState as DraftEditorState, CompositeDecorator } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { toolbar } from './WysiwygConfig';
import Modal from 'react-modal';
import './WysiwygStyle.css';

enum ModalStep {
  CLOSED,
  FINDMODAL,
  REPLACEMODAL
}

const WysiwygEditor = () => {
  const [editorState, setEditorState] = useState<DraftEditorState>()
  const [modalIsOpen, setModalIsOpen] = useState<ModalStep>(ModalStep.CLOSED)
  const [findWord, setFindWord] = useState<EditorState>()
  const [replaceWord, setReplaceWord] = useState<EditorState>()
  const findWithRegex = (regex: RegExp, contentBlock: ContentBlock, callback: (start: number, end: number) => void) => {
    const text = contentBlock.getText();
    let matchArr, start, end;
    while ((matchArr = regex.exec(text)) !== null) {
      start = matchArr.index;
      end = start + matchArr[0].length;
      callback(start, end);
    }
  };
  const SearchHighlight = (props: any) => (
    <span className="search-and-replace-highlight">{props.children}</span>
  );
  const generateDecorator = (highlightTerm: string) => {
    const regex = new RegExp(highlightTerm, 'g')
    return new CompositeDecorator([{
      strategy: (contentBlock, callback) => {
        if (highlightTerm !== '') {
          findWithRegex(regex, contentBlock, callback);
        }
      },
      component: SearchHighlight,
    }])
  }
  const findWordInEditor = () => {
    if (editorState && findWord) {
      const updateState = DraftEditorState.set(editorState, { decorator: generateDecorator('style') })
      setEditorState(updateState)
    }
  }
  const Find = () => {
    return (
      <button
        style={{ height: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 2px' }}
        onClick={() => setModalIsOpen(ModalStep.FINDMODAL)}
      >
        Find
      </button>
    )
  }
  const Replace = () => {
    return (
      <button
        style={{ height: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 2px' }}
        onClick={() => setModalIsOpen(ModalStep.REPLACEMODAL)}
      >
        Replace
      </button>
    )
  }
  return (
    <div className="App container">
      <h3 className='text-center'>Rich Text Editor</h3>
      <div>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName='content-wrapper'
          editorClassName='px-4'
          toolbar={toolbar}
          toolbarCustomButtons={[<Find />, <Replace />]}
        />
      </div>
      <Modal
        isOpen={modalIsOpen !== ModalStep.CLOSED}
        onRequestClose={() => setModalIsOpen(ModalStep.CLOSED)}
        contentLabel="Example Modal"
        style={{
          content: {
            width: '480px',
            margin: 'auto',
            height: 'fit-content'
          }
        }}
      >
        <h3>Find { modalIsOpen === ModalStep.REPLACEMODAL && '& Replace'}</h3>
        <div>
          <div className='flex items-center'>
            <label htmlFor='find-word' className='modal-input-label grow-0 shrink-0'>Find</label>
            <Editor
              toolbarHidden 
              wrapperClassName="find-wrapper grow shrink"
              editorClassName="find-editor"
              editorState={findWord}
              onEditorStateChange={setFindWord}
            />
          </div>
          {
            modalIsOpen === ModalStep.REPLACEMODAL && <div className='flex items-center mt-2'>
              <label htmlFor='replace-word' className='modal-input-label grow-0 shrink-0'>Replace</label>
              <Editor
                toolbarHidden 
                wrapperClassName="find-wrapper grow shrink"
                editorClassName="find-editor"
                editorState={replaceWord}
                onEditorStateChange={setReplaceWord}
              />
            </div>
          }
          <div className='flex justify-end gap-2 mt-2'>
            <button onClick={findWordInEditor}>Find</button>
            {
              modalIsOpen === ModalStep.REPLACEMODAL && <button>Replace</button>
            }
            <button onClick={() => setModalIsOpen(ModalStep.CLOSED)}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default WysiwygEditor;
