<template>
	<Header></Header>
	<div v-if="$route.query.id === '9fda14d4-9d70-428e-9414-e5af537ae5ce'">
		<component :is="pageComponents[0]"></component>
	</div>
	<template v-else>
		<Parallax></Parallax>
		<Section class="bg-secondary">
			<DynamicRow>
				<AnimationContainer>
					<PixelArt :src="images.chrono_code" alt="Chrono and a laptop" />
				</AnimationContainer>

				<Paragraph title="AboutMe()">
					<CypherText
						text="Hello, codenamed ChronoAero here! A senior high school student who enjoys programming."
					/>
					<CypherText
						text="I'm someone with a rather calm and serious nature that helps me to be a better listener. When it comes to projects, it makes me try my best on delivering my work output."
					/>
					<CypherText
						text="I might not be that really extroverted one, but I'm open to programming discussions. Since you reach me out this way, this means we should understand each other well."
					/>
					<CypherText text="Looking forward to working together with you!" />
				</Paragraph>
			</DynamicRow>
		</Section>
		<Section class="bg-primary">
			<DynamicRow class="sm:flex-row-reverse">
				<AnimationContainer>
					<PixelArt
						:src="images.chrono_git"
						alt="Chrono managing version control"
					/>
				</AnimationContainer>
				<div>
					<Paragraph title="Experiments()">
						<CypherText
							text="I like to experiment around with tools I find interesting. I try to get something interesting working with them."
						/>
						<CypherText
							text="Of course, learning takes time, I can't say that I'm an expert on
						them just yet, but I'm quite sure that I have some pretty decent
						progress going on here."
						/>
						<CypherText
							text="Here are some tools I'm currently experimenting with:"
						/>
					</Paragraph>
					<div class="bg-secondary p-2 rounded-md">
						<Row class="flex-wrap">
							<Logo
								:src="images.vue"
								alt="Vue"
								@click="Redirect('https://vuejs.org')"
							/>
							<Logo
								:src="images.vite"
								alt="Vite"
								@click="Redirect('https://vitejs.dev')"
							/>
							<Logo
								:src="images.typescript"
								alt="TypeScript"
								@click="Redirect('https://www.typescriptlang.org')"
							/>
							<Logo
								:src="images.tailwindcss"
								alt="TailwindCSS"
								@click="Redirect('https://tailwindcss.com/')"
							/>
							<Logo
								:src="images.unity"
								alt="Unity"
								@click="Redirect('https://unity3d.com')"
							/>
						</Row>
					</div>
				</div>
			</DynamicRow>
		</Section>
		<Section class="bg-secondary">
			<Paragraph title="Projects()">
				<CypherText
					text="
				While learning, I've also got some projects worked on. We perhaps can work together on some of them.
			"
				/>
				<CypherText
					text="
				It can also be a consideration for you to put me as a contributor in your projects, which will be great!
			"
				/>
				<CypherText text="Here are some of them that I can showcase:" />
			</Paragraph>
			<DynamicRow class="flex-wrap">
				<div v-for="cardData in cardDatas" :key="cardData.title">
					<Card
						class="bg-primary p-4 m-4 rounded-md"
						:title="cardData.title"
						:src="cardData.src"
						:alt="cardData.alt"
						@click="Redirect(`/?id=${cardData.id}`)"
					></Card>
				</div>
			</DynamicRow>
		</Section>
	</template>
	<Section class="bg-primary">
		<DynamicRow>
			<AnimationContainer>
				<PixelArt
					:src="images.chrono_contacts"
					alt="Chrono holding a letter"
				></PixelArt>
			</AnimationContainer>
			<div>
				<Paragraph title="Contacts()">
					<CypherText text="This marks the end of this introduction." />
					<CypherText
						text="
						Interested to contact and interact with me further? Sure! here are
						my contacts:"
					/>
				</Paragraph>
				<div class="bg-secondary p-2 rounded-md">
					<Row class="flex-wrap">
						<Logo
							:src="images.discord"
							alt="Discord"
							@click="
								Redirect('https://discordapp.com/users/729958306990260275')
							"
						/>
						<Logo
							:src="images.github"
							alt="Github"
							@click="Redirect('https://github.com/ChronoAero/ChronoAero')"
						/>
					</Row>
				</div>
			</div>
		</DynamicRow>
	</Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Paragraph from './components/Paragraph.vue';
import Parallax from './components/Parallax.vue';
import Row from './components/Row.vue';
import DynamicRow from './components/DynamicRow.vue';
import PixelArt from './components/PixelArt.vue';
import CypherText from './components/CypherText.vue';
import AnimationContainer from './components/AnimationContainer.vue';
import Logo from './components/Logo.vue';
import Card from './components/Card.vue';
import Section from './components/Section.vue';
import chrono_code from './assets/chrono_code.png';
import chrono_git from './assets/chrono_git.png';
import chrono_contacts from './assets/chrono_contacts.png';
import chrono_packages from './assets/chrono_packages.png';
import cover_square from './assets/cover_square.png';
import vue from './assets/vuejs-original.svg';
import vite from './assets/vite.svg';
import typescript from './assets/typescript.png';
import tailwindcss from './assets/tailwindcss.svg';
import unity from './assets/unity.png';
import discord from './assets/discord.svg';
import github from './assets/github.png';

//pages
import gravity_outlaw from './pages/gravity_outlaw.vue';

export default defineComponent({
	name: 'App',
	components: {
		Header,
		Paragraph,
		Parallax,
		DynamicRow,
		Row,
		PixelArt,
		Logo,
		Card,
		Section,
		CypherText,
		AnimationContainer,
	},
	setup() {
		const Redirect = (url: string) => {
			location.href = url;
		};

		interface CardData {
			title: string;
			src: string;
			alt: string;
			id: string;
		}

		const pageComponents = [gravity_outlaw];

		const cardDatas: CardData[] = [
			{
				title: 'First Game: Gravity Outlaw',
				src: cover_square,
				alt: 'gravity outlaw',
				id: '9fda14d4-9d70-428e-9414-e5af537ae5ce',
			},
		];

		return {
			images: {
				chrono_code,
				chrono_git,
				chrono_contacts,
				vue,
				vite,
				tailwindcss,
				typescript,
				unity,
				discord,
				github,
			},
			Redirect,
			cardDatas,
			pageComponents,
		};
	},
});
</script>

<style scoped>
p {
	@apply py-1;
}
</style>
