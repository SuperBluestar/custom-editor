export const toolbar = {
  options: [
    'blockType',
    'fontSize',
    'fontFamily',
    'textAlign',
    'colorPicker',
    'history'
    ],
  inline: {
    className: undefined,
    component: undefined,
    options: [
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'monospace',
        'superscript',
        'subscript'
    ],
    bold: {
        className: undefined
    },
    italic: {
        className: undefined
    },
    underline: {
        className: undefined
    },
  },
  fontSize: {
    options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
  },
  fontFamily: {
    options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
  },
  history: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ['undo', 'redo'],
    undo: {
        className: undefined
    },
    redo: {
        className: undefined
    },
  },
}