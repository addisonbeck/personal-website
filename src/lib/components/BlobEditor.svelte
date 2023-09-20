<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import { json } from "@codemirror/lang-json";

    export let lang: typeof json = json;
    export let value = "";
</script>

<CodeMirror bind:value lang={lang()} />
