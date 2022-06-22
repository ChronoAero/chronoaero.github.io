<template>
	<form id="email" @submit.prevent="sendEmail">
		<CypherText text="Name (Optional, you can keep yourself anonymous):" />
		<input type="text" name="name" id="name" value="Anonymous" />
		<CypherText text="Email (Optional, you can keep yourself anonymous):" />
		<input type="text" name="email" id="email" value="-" />
		<CypherText text="Your Feedback:" />
		<textarea name="feedback" id="feedback" cols="50" rows="10"></textarea>
		<br />
		<input hidden type="project" name="project" id="project" :value="purpose" />
		<button
			type="submit"
			class="text-secondary bg-contrast p-2 my-2 rounded-sm hover:bg-subcontrast"
		>
			Send Feedback
		</button>
		<svg
			v-if="sent && !message"
			class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle
				class="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				stroke-width="4"
			></circle>
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
		<p v-if="message">{{ message }}</p>
		<p v-if="error" class="text-red-500">Oof, an error occured: {{ error }}</p>
	</form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CypherText from './CypherText.vue';
import emailjs from '@emailjs/browser';

export default defineComponent({
	props: {
		purpose: {
			type: String,
			required: true,
		},
	},
	components: {
		CypherText,
	},
	setup() {
		const message = ref('');
		const error = ref('');
		const sent = ref(false);
		function sendEmail() {
			sent.value ||
				emailjs
					.sendForm(
						'chronoaero@feedback',
						'chronoaero@feedback',
						'#email',
						'LI9nIkWwTKYvR7ayl'
					)
					.then(
						(_) => {
							message.value = 'Your response has been sent!';
						},
						(e) => {
							sent.value = false;
							error.value = e;
						}
					);
			sent.value = true;
		}
		return {
			sendEmail,
			message,
			error,
			sent,
		};
	},
});
</script>

<style scoped>
form {
	@apply text-contrast;
}
input,
textarea {
	@apply focus:outline-none border-2 border-subcontrast focus:border-contrast text-subcontrast focus:text-contrast bg-secondary rounded-sm my-2 p-1;
}
</style>
