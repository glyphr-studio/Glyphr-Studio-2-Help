# Glyphr Studio 2 Help

Documentation and help site for Glyphr Studio 2

## Links

| Website     | [glyphrstudio.com](https://www.glyphrstudio.com)                        |
| :---------- | :---------------------------------------------------------------------- |
| Email       | [mail@glyphrstudio.com](mailto:mail@glyphrstudio.com)                   |
| App         | [glyphrstudio.com/app](https://www.glyphrstudio.com/app)                |
| Help & Docs | [glyphrstudio.com/help](https://www.glyphrstudio.com/help/)             |
| Tutorial    | [glyphrstudio.com/help/tutorial](http://glyphrstudio.com/help/tutorial) |
| Blog        | [glyphrstudio.com/blog](https://www.glyphrstudio.com/blog/)             |
| Mastodon    | [@glyphrstudio@typo.social](https://typo.social/@glyphrstudio)          |
| Bluesky     | [@glyphrstudio.com](https://bsky.app/profile/glyphrstudio.com)          |
| Reddit      | [reddit.com/r/GlyphrStudio](https://www.reddit.com/r/GlyphrStudio/)     |
| GitHub      | [github.com/glyphr-studio](https://github.com/glyphr-studio)            |

## Deployment

The help site deploys when changes to `dist/` are pushed to `main`. The workflow
uploads the contents of `dist/` over SFTP. It can also be run manually from the
GitHub Actions tab.

Configure these organization secrets and share them with this repository:

| Organization secret | Value                               |
| :------------------ | :---------------------------------- |
| `SFTP_HOST`         | The hosting provider's SFTP hostname |
| `SFTP_USERNAME`     | The SFTP account username           |
| `SFTP_PASSWORD`     | The SFTP account password           |

Also configure this repository secret:

| Repository secret | Value                                                      |
| :---------------- | :--------------------------------------------------------- |
| `FTP_SERVER_DIR`  | The server directory that serves `glyphrstudio.com/help/`  |

Set `FTP_SERVER_DIR` to the directory for the help site, including a trailing
slash. Confirm its path with the hosting provider; it is often something like
`/public_html/help/`. The target directory must already exist on the server.
The workflow uploads files from `dist/`; it does not remove files from the
server.
