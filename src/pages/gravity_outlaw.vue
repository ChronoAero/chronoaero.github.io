<template>
	<Section class="bg-primary">
		<DynamicRow>
			<AnimationContainer>
				<PixelArt :src="images.chrono_code" alt="Chrono and a laptop" />
			</AnimationContainer>

			<Paragraph title="Gravity Outlaw">
				<CypherText
					text="First game developed by ChronoAero, please check it out, it's available here:"
				/>
				<router-link to="/">
					<button
						class="text-secondary bg-contrast p-2 my-2 rounded-sm hover:bg-subcontrast"
					>
						Access Game!
					</button>
				</router-link>
				<CypherText
					text="If you think there's something to improve, please leave me some feedback in the form below:"
				/>
			</Paragraph>
		</DynamicRow>
	</Section>
	<Section class="bg-secondary">
		<Paragraph title="Feedback()">
			<CypherText text="This project needs your feedback" />
			<CypherText
				text="If you've tried it and still have some spare time, I'd like to know what you think about it."
			/>
			<CypherText text="Your feedback will help me progress." />
		</Paragraph>
		<FeedbackForm purpose="first_game:gravity_outlaw" />
	</Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Section from '../components/Section.vue';
import CypherText from '../components/CypherText.vue';
import AnimationContainer from '../components/AnimationContainer.vue';
import DynamicRow from '../components/DynamicRow.vue';
import Paragraph from '../components/Paragraph.vue';
import PixelArt from '../components/PixelArt.vue';
import FeedbackForm from '../components/FeedbackForm.vue';

import chrono_code from '../assets/chrono_code.png';

export default defineComponent({
	components: {
		Section,
		CypherText,
		AnimationContainer,
		DynamicRow,
		Paragraph,
		PixelArt,
		FeedbackForm,
	},
	setup() {
		const images = {
			chrono_code,
		};
		return {
			images,
		};
	},
});
</script>
