<script lang="ts">
  import './resumePdf.css'
  import ResumeSections from "./ResumeSections.svelte"
  import Button from "./Button.svelte"
  import jsPDF from "jspdf"
	import type { Resume } from '$lib/types/Resume';

  export let action: "download" | "open" = "download";

  export let data: Resume;

  function download() {
    const result = document.createElement('div');
		const r = <HTMLElement>document.querySelector("#pdf")?.cloneNode(true);
    r.classList.add("show")
    r.id = "downloadPdfTemp"
    result.appendChild(r)
    document.body.append(result);

    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(<HTMLElement>result, {
        callback: function () {
            document.body.removeChild(result);
            action === "download" ?
              pdf.save("Resume") :
              window.open(pdf.output('bloburl'));
        },
        html2canvas: {
          scale: 600 / r.scrollWidth
        },
        margin: [40, 0, 40, 0]
    });
  }
</script>

<div class="resume-pdf">
  <span>
    <Button on:click="{download}">
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m23 12l-4-4v3h-9v2h9v3M1 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3h-2V6H3v12h12v-3h2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"/></svg>
       Download
    </Button>
  </span>
  <div id="pdf" class="pdf resume light no-decoration">
    <ResumeSections bind:data={data.properties}/>
  </div>
</div>
