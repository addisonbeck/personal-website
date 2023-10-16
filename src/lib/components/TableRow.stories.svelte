<script context="module">
  import TableRow from './TableRow.svelte';
  import TableRowItem from './TableRowItem.svelte';
  import { Story } from '@storybook/addon-svelte-csf';

  export const meta = {
    title: "Controls/Table/Row",
    component: TableRow,
    tags: ['autodocs']
  }
</script>

<Story name="Default">
  <TableRow></TableRow>
</Story>

<script lang="ts">
  const items: string[] = [
    "I'm a row item!",
    "Me too!",
    "Me three!",
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor lectus rutrum, dictum metus at, aliquet sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam posuere enim nec ligula tristique, vehicula mollis ante molestie. Duis tristique, ipsum vitae elementum euismod, dui lorem feugiat risus, vel condimentum metus velit at nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut nisi vel arcu posuere convallis. Nam placerat non tellus tincidunt scelerisque. Aenean vehicula lorem vel pretium volutpat. Vestibulum efficitur vestibulum magna, vel mollis augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus consectetur blandit sapien sit amet semper. Etiam vitae nibh nec orci rhoncus dignissim. Morbi porta dignissim est, vel ullamcorper velit facilisis quis. Curabitur vitae vehicula nunc. Pellentesque molestie fringilla erat. Cras et congue eros, in aliquet eros. Mauris imperdiet commodo elementum. Integer vehicula dui ex, eget tincidunt dolor rutrum at. Vestibulum at nulla tortor. Aliquam commodo felis vitae ligula efficitur, a placerat nisl fringilla. Proin tempor, nisl iaculis mollis tincidunt, diam dolor ornare orci, quis cursus nisi ante at augue. Quisque ac rhoncus erat. Pellentesque leo lacus, auctor id est nec, maximus tincidunt sem. Etiam sed justo sit amet sem sodales sagittis quis ac sem. Morbi imperdiet sollicitudin tempor. Duis et elit mollis tellus vehicula dignissim et sed augue. Donec sed augue ligula. Phasellus semper sapien in purus suscipit, non porta orci fermentum. Sed sit amet placerat urna. Donec iaculis elementum turpis, at volutpat mauris cursus eget. Nunc felis diam, rhoncus sed pellentesque at, placerat eget magna. Nulla facilisi. Nulla at dui id nunc fringilla gravida. Vivamus sagittis enim at finibus commodo. Maecenas ac rutrum nunc, eu commodo mi. Ut sed elit id libero varius dapibus vitae at velit. Nam fermentum rhoncus ex, et pretium justo. Morbi aliquam dui a orci pellentesque porttitor. Ut iaculis ullamcorper tempus. Vestibulum ac mauris orci. Maecenas lobortis nec nibh eget eleifend. Donec iaculis erat nec tincidunt suscipit. Proin nec pulvinar dolor, sed fringilla turpis. Vestibulum egestas mi sit amet ipsum aliquam, et pharetra felis faucibus. Integer eget ex ut nisl fringilla scelerisque sit amet id nunc. Mauris ut magna vestibulum, interdum est in, tincidunt nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas semper nulla blandit placerat efficitur. In hac habitasse platea dictumst. Proin vehicula suscipit varius. Praesent in auctor odio, ac rutrum mi. Duis dignissim eleifend risus, vel elementum lacus mollis vitae. Nullam quis tellus ut odio cursus vehicula sed vitae risus. Nulla maximus odio eu luctus gravida. Sed eget neque non libero blandit aliquam. Fusce eu ligula vitae mauris posuere ultricies sed at velit. Etiam ornare nisi interdum neque porttitor, non lacinia felis volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vel quam aliquet, sollicitudin tortor at, molestie dolor. Vivamus et pellentesque velit, eu molestie justo. Sed imperdiet, diam ut elementum scelerisque, leo augue consequat leo, eu mollis dui massa et arcu. Etiam pellentesque tristique gravida. Donec turpis risus, semper at ante sed, interdum interdum urna.`
  ]

</script>

<Story name="Hydrated">
  <TableRow>
    {#each items as item}
      <TableRowItem>{@html item}</TableRowItem>
    {/each}
  </TableRow>
</Story>
