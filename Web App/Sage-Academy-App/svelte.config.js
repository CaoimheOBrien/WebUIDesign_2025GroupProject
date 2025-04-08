import adapter from '@sveltejs/adapter-static';

// used to determine if we are using npm run dev
const dev = process.env.NODE_ENV === 'development';
const repoName = 'WEBUIDESIGN_2025GroupProject';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : `/${repoName}`
		},
	}
};

export default config;