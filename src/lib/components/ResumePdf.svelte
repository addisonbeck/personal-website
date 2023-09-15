<script lang="ts">
  import './resumePdf.css'
  import ResumeSections from "./ResumeSections.svelte"
  import jsPDF from "jspdf"

  function download() {
    const n = <HTMLElement>document.getElementById('pdf');
    let pdf = new jsPDF('p', 'pt', 'a4');
    n.classList.toggle("hidden")
    pdf.html(n, {
        callback: function () {
            pdf.save("Resume")
            // window.open(pdf.output('bloburl'));
            n.classList.toggle("hidden")
        },
        html2canvas: {
          scale: 600 / n.scrollWidth
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
</div>
<div id="pdf" class="resume light hidden no-decoration">
  <ResumeSections/>
</div>
