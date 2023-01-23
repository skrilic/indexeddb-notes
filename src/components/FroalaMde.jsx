// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

// Import all Froala Editor plugins;
// import 'froala-editor/js/plugins.pkgd.min.js';

// Import a single Froala Editor plugin.
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/table.min.js';
import 'froala-editor/js/plugins/font_family.min';
import 'froala-editor/js/plugins/font_size.min';
// import 'froala-editor/js/plugins/image_manager.min';
import 'froala-editor/js/plugins/image.min';
import 'froala-editor/js/plugins/video.min';
import 'froala-editor/js/plugins/trim_video.min';
import 'froala-editor/js/plugins/colors.min';
import 'froala-editor/js/plugins/code_view.min';
import 'froala-editor/js/plugins/code_beautifier.min';
import 'froala-editor/js/plugins/paragraph_style.min';

// Import a language file.
// import 'froala-editor/js/languages/de.js';
// import 'froala-editor/js/languages/hr.js';

// Import a third-party plugin.
// import 'froala-editor/js/third_party/image_tui.min.js';
// import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/js/third_party/spell_checker.min.js';

// Include font-awesome css if required.
// install using "npm install font-awesome --save"
// import 'font-awesome/css/font-awesome.css';
// import 'froala-editor/js/third_party/font_awesome.min.js';

// Include special components if required.
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
// import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
// import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
// import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';

export function FroalaPreview(props) {
    return(
        <FroalaEditorView model={props.model} />
    )
}
function FroalaMde(props) {
    return(
        <div className="mb-10">
            <FroalaEditorComponent
                model={props.model}
                onModelChange={props.onModelChange}
                tag='textarea'
            />
        </div>
    )
}

export default FroalaMde;