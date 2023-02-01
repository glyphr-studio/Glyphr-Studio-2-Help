export default {
	lang: 'en-US',
	title: 'Glyphr Studio v2',
	description: 'Help and documentation for Glyphr Studio v2.',
	lastUpdated: true,
	outDir: '../dist',
	base: '/v2/help/',
	head: [
		['link', { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }],
	],
	themeConfig: {
		socialLinks: [
			{ icon: 'twitter', link: 'https://twitter.com/GlyphrStudio' },
			{ icon: 'github', link: 'https://github.com/glyphr-studio' },
		],
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
				],
			},
			{
				text: 'Pages',
				items: [
					{ text: 'Open project', link: '/pages/open-project.md' },
					{ text: 'Overview', link: '/pages/overview.md' },
					{ text: 'Glyph edit', link: '/pages/glyph-edit.md' },
					{ text: 'Live preview', link: '/pages/live-preview.md' },
					{ text: 'Settings', link: '/pages/settings.md' },
					{ text: 'Help', link: '/pages/help.md' },
					{ text: 'About', link: '/pages/about.md' },
				],
			},
		],
	},
};
