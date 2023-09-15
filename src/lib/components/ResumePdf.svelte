<script lang="ts">
  import './resumePdf.css'
  import ResumeSections from "./ResumeSections.svelte"
  import jsPDF from "jspdf"

  export let action: "download" | "open" = "download";

  function download() {
    const result = document.createElement('div');
		const r = <HTMLElement>document.querySelector("#pdf")?.cloneNode(true);
    r.classList.add("show")
    r.id = "downloadPdfTemp"
    result.appendChild(r)
    console.log(result);
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

<div class="web-header">
  <span>
    <button class="download" on:click="{download}">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="none" stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="14;0"/></path><path fill="currentColor" d="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"><animate attributeName="d" calcMode="linear" dur="1.5s" keyTimes="0;0.7;1" repeatCount="indefinite" values="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5;M12 4 h2 v3 h2.5 L12 11.5M12 4 h-2 v3 h-2.5 L12 11.5;M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"/></path></g></svg>
       Download
    </button>
  </span>
  <div id="pdf" class="pdf resume light no-decoration">
    <ResumeSections/>
  </div>
</div>
