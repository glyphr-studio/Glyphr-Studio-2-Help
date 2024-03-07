export default {
	lang: 'en-US',
	title: 'Glyphr Studio v2',
	description: 'Help and documentation for Glyphr Studio v2.',
	lastUpdated: true,
	outDir: '../dist',
	base: '/help/',
	head: [
		['link', { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }],
	],
	themeConfig: {
		siteTitle: false,
		logo: '/logo-wordmark-horizontal-small-blue.svg',
		lastUpdated: 'Last updated: ',
		editLink: {
			pattern:
				'https://github.com/glyphr-studio/Glyphr-Studio-2-Help/tree/main/docs/:path',
		},
		sidebar: [
			{
				text: 'About',
				items: [
					{ text: 'Updates', link: '/about/updates.md' },
					{ text: 'Features', link: '/about/features.md' },
					{ text: 'Licensing', link: '/about/licensing.md' },
				],
			},

			{
				text: 'Getting started',
				items: [
					{ text: 'Navigation', link: '/getting-started/navigation.md' },
					{ text: 'Editing', link: '/getting-started/editing.md' },
					{
						text: 'Import / Export',
						link: '/getting-started/import-export.md',
					},
					{
						text: 'Working with multiple projects',
						link: '/getting-started/working-with-multiple-projects.md',
					},
				],
			},
			{
				text: 'FAQs',
				items: [
					{
						text: 'Transparent overlaps',
						link: '/faq/transparent-overlaps.md',
					},
					{ text: 'Curly quotes', link: '/faq/curly-quotes.md' },
					{ text: 'Font family', link: '/faq/font-family.md' },
					{ text: 'Run locally', link: '/faq/run-locally.md' },
				],
			},
			{
				text: 'Pages & data types',
				items: [
					{ text: 'Open project', link: '/pages/open-project.md' },
					{ text: 'Overview', link: '/pages/overview.md' },
					{ text: 'Characters', link: '/pages/characters.md' },
					{ text: 'Ligatures', link: '/pages/ligatures.md' },
					{ text: 'Components', link: '/pages/components.md' },
					{ text: 'Kerning', link: '/pages/kerning.md' },
					{ text: 'Live preview', link: '/pages/live-preview.md' },
					{ text: 'Global actions', link: '/pages/global-actions.md' },
					{ text: 'Settings', link: '/pages/settings.md' },
					{ text: 'Help', link: '/pages/help.md' },
					{ text: 'About', link: '/pages/about.md' },
				],
			},
		],
		socialLinks: [
			{
				icon: {
					svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path d="m33.999,11.819c0-7.809-5.117-10.099-5.117-10.099C26.302.536,21.872.038,17.27,0h-.113c-4.602.038-9.029.536-11.609,1.721C5.547,1.721.43,4.01.43,11.819c0,1.788-.035,3.927.022,6.194.186,7.637,1.4,15.164,8.461,17.033,3.256.862,6.051,1.042,8.302.918,4.083-.226,6.374-1.457,6.374-1.457l-.135-2.962s-2.917.92-6.194.808c-3.246-.111-6.673-.35-7.198-4.336-.049-.35-.073-.724-.073-1.118,0,0,3.187.779,7.225.964,2.469.113,4.785-.145,7.137-.425,4.511-.539,8.438-3.318,8.932-5.857.778-4,.714-9.762.714-9.762Zm-6.035,10.062h-3.746v-9.178c0-1.935-.814-2.917-2.442-2.917-1.8,0-2.703,1.165-2.703,3.468v5.024h-3.724v-5.024c0-2.303-.903-3.468-2.703-3.468-1.628,0-2.442.982-2.442,2.917v9.178h-3.746v-9.456c0-1.933.492-3.468,1.48-4.605,1.019-1.136,2.354-1.719,4.011-1.719,1.917,0,3.369.737,4.329,2.211l.933,1.564.933-1.564c.96-1.474,2.411-2.211,4.329-2.211,1.657,0,2.992.582,4.011,1.719.988,1.136,1.48,2.672,1.48,4.605v9.456Z" /></svg>',
				},
				link: 'https://typo.social/@glyphrstudio',
			},
			{ icon: 'twitter', link: 'https://twitter.com/GlyphrStudio' },
			{
				icon: {
					svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path d="m18,0C8.059,0,0,8.059,0,18s8.059,18,18,18,18-8.059,18-18S27.941,0,18,0Zm12.007,18c0,1.074-.644,1.998-1.547,2.406.043.258.064.537.064.795,0,4.06-4.704,7.325-10.504,7.325s-10.504-3.286-10.504-7.325c0-.279.021-.537.064-.795-.902-.408-1.547-1.31-1.547-2.384,0-1.439,1.16-2.621,2.62-2.621.709,0,1.353.279,1.826.73,1.826-1.31,4.339-2.148,7.131-2.234l1.332-6.272c.021-.129.086-.236.193-.301.086-.064.215-.086.344-.064l4.36.924c.301-.623.945-1.053,1.675-1.053,1.031,0,1.869.838,1.869,1.869s-.838,1.869-1.869,1.869c-1.01,0-1.826-.795-1.869-1.783l-3.909-.838-1.203,5.628c2.749.107,5.22.945,7.024,2.234.473-.451,1.117-.73,1.826-.73,1.439,0,2.621,1.16,2.621,2.621h0Z"/><path d="m15.745,19.869c0-1.031-.838-1.869-1.869-1.869s-1.869.838-1.869,1.869.838,1.89,1.869,1.869c1.031,0,1.869-.838,1.869-1.869Z"/><path d="m21.78,24.143c-.795.816-2.535,1.095-3.759,1.095s-2.943-.279-3.759-1.095c-.193-.193-.494-.193-.687,0s-.193.494,0,.687c1.267,1.267,3.716,1.375,4.446,1.375.709,0,3.158-.086,4.446-1.375.172-.193.172-.494,0-.687-.193-.193-.494-.193-.687,0Z"/><path d="m22.124,18.021c-1.031,0-1.869.838-1.869,1.869s.838,1.869,1.869,1.869,1.869-.859,1.869-1.869c0-1.031-.838-1.869-1.869-1.869Z"/></svg>',
				},
				link: 'https://reddit.com/r/GlyphrStudio',
			},
			{ icon: 'github', link: 'https://github.com/glyphr-studio' },
		],
	},
};
