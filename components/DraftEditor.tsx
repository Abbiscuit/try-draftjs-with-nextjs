import { Editor, EditorState, RichUtils } from 'draft-js';
import { useEffect, useState } from 'react';
import 'draft-js/dist/Draft.css';
import styles from './DraftEditor.module.css';

type Props = {};
const DraftEditor = (props: Props): JSX.Element => {
  const [editorState, setEditorState] = useState<EditorState | null>(null);

  useEffect(() => {
    setEditorState(EditorState.createEmpty());
  }, []);

  const handleTextBold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState!, 'BOLD'));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.editMenu}>
        <button className={styles.button} onClick={handleTextBold}>
          B
        </button>
      </div>
      {editorState && (
        <Editor editorState={editorState} onChange={setEditorState} />
      )}
    </div>
  );
};
export default DraftEditor;
