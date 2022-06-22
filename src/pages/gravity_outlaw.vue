<template>
	<Section class="bg-primary">
		<DynamicRow>
			<AnimationContainer>
				<PixelArt :src="images.cover_square" alt="Chrono and a laptop" />
			</AnimationContainer>

			<Paragraph title="Gravity Outlaw">
				<CypherText
					text="First game developed by ChronoAero, please check it out, it's available here:"
				/>
				<div @click="Redirect('https://chrono.itch.io/gravity-outlaw')">
					<button
						class="text-secondary bg-contrast p-2 my-2 rounded-sm hover:bg-subcontrast"
					>
						Access Game!
					</button>
				</div>
				<CypherText
					text="If you think there's something to improve, please leave me some feedback in the form below:"
				/>
			</Paragraph>
		</DynamicRow>
	</Section>
	<Section class="bg-secondary">
		<DynamicRow>
			<PixelArt
				:src="images.chrono_packages"
				alt="Chrono managing version control"
			/>
			<div>
				<Paragraph title="Feedback()">
					<CypherText text="This project needs your feedback" />
					<CypherText
						text="If you've tried it and still have some spare time, I'd like to know what you think about it."
					/>
					<CypherText text="Your feedback will help me progress." />
				</Paragraph>
				<FeedbackForm purpose="first_game:gravity_outlaw" />
			</div>
		</DynamicRow>
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

import cover_square from '../assets/cover_square.png';
import chrono_packages from '../assets/chrono_packages.png';

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
		const Redirect = (url: string) => {
			location.href = url;
		};
		const images = {
			cover_square,
			chrono_packages,
		};
		return {
			images,
			Redirect,
		};
	},
});
</script>
