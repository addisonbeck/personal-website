<script lang="ts">
  import './sitetools.css';
  export let tools: { title: string, href: string, purpose: string, svg: string }[];
</script>

<div class="site-tools">
  <div class="site-tools-heading">
    <span class="cell left-cell">Tool</span>
    <span class="cell right-cell">Purpose</span>
  </div>
  <div class="site-tools-body">
    {#each tools as tool}
      <div class="site-tools-item">
        <div class="site-tools-item-link cell left-cell">
          <div class="site-tools-item-link-svg">
            {@html tool.svg}
          </div>
          <a href="{tool.href}" target="_blank">{tool.title}</a>
        </div>
        <div class="cell right-cell">
          {tool.purpose}
        </div>
      </div>
    {/each}
  </div>
</div>

