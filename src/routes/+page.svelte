<script>
	import { countDown } from '../stores.js';

    $: delta = $countDown;

    $: days = Math.floor(delta / 86400);
    delta -= days * 86400;

    $: hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    $: minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    $: seconds = Math.floor(delta % 60);

</script>

<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span style="--value:{days};"></span>
      </span>
      days
    </div> 
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span style="--value:{hours};"></span>
      </span>
      hours
    </div> 
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span style="--value:{minutes};"></span>
      </span>
      min
    </div> 
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span style="--value:{seconds};"></span>
      </span>
      sec
    </div>
  </div>