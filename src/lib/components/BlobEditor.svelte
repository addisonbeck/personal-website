<script lang="ts">
    import "./blobEditor.css"
    import CodeMirror from "svelte-codemirror-editor";
    import { json } from "@codemirror/lang-json";
    import {keymap, dropCursor, crosshairCursor, lineNumbers, highlightSpecialChars, rectangularSelection, drawSelection } from "@codemirror/view";
    import type { Extension } from "@codemirror/state"
    import { indentOnInput, foldGutter, foldKeymap, syntaxHighlighting, defaultHighlightStyle } from "@codemirror/language"
    import {defaultKeymap, history, historyKeymap} from "@codemirror/commands"
    import {searchKeymap } from "@codemirror/search"
    import {autocompletion, completionKeymap, closeBrackets, closeBracketsKeymap} from "@codemirror/autocomplete"
    import {lintKeymap} from "@codemirror/lint"

    export let lang: typeof json = json;

    export let value = "";

    export let extensions: Extension[] = [
      lineNumbers(),
      highlightSpecialChars(),
      history(),
      foldGutter(),
      dropCursor(),
      indentOnInput(),
      //syntaxHighlighting(defaultHighlightStyle, {fallback: true}),
      // bracketMatching(),
      closeBrackets(),
      autocompletion(),
      rectangularSelection(),
      crosshairCursor(),
      drawSelection(),
      // highlightActiveLine(),
      // highlightSelectionMatches(),
      keymap.of([
        ...closeBracketsKeymap,
        ...defaultKeymap,
        ...searchKeymap,
        ...historyKeymap,
        ...foldKeymap,
        ...completionKeymap,
        ...lintKeymap
      ])
    ];
</script>

<CodeMirror bind:value lang={lang()} basic={false} extensions={extensions}/>
