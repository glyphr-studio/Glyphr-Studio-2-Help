export default {
  lang: "en-US",
  title: "Glyphr Studio v2",
  description: "Help and documentation for Glyphr Studio v2.",
  lastUpdated: true,
  outDir: "../dist",
  themeConfig: {
    socialLinks: [
      { icon: "twitter", link: "https://twitter.com/GlyphrStudio" },
      { icon: "github", link: "https://github.com/glyphr-studio" },
		],
		sidebar: [
			{
				text: 'About',
				items: [
					{text: 'Updates', link: '/about/updates.md'},
					{text: 'Licensing', link: '/about/licensing.md'},
				]
			},
			{
				text: 'Pages',
				items: [
					{text: 'Welcome', link: '/pages/welcome.md'},
					{text: 'Glyph edit', link: '/pages/glyph-edit.md'},
				]
			},
		]
  },
};
