<template>
	<Section class="h-[36rem] grid place-items-center bg-primary">
		<div class="text-center">
			<TweenText
				class="text-contrast text-3xl md:text-6xl font-bold"
				text="&lt;ChronoAero/&gt;"
			/>
			<TweenText class="text-contrast text-2xl" text="Learning to code…" />
		</div>
	</Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Section from './Section.vue';
import TweenText from './CypherText.vue';

export default defineComponent({
	components: {
		Section,
		TweenText,
	},
	name: 'Parallax',
});
</script>
