# Updates

All releases and more information can be found at GitHub:

https://github.com/glyphr-studio/Glyphr-Studio-2/releases

## v2.0.1 <badge type="tip">patch release</badge>

_released 2023-12-08_

### Bug fixes

- Importing kern groups from projects.
- Better nav titles for kern groups, components, and ligatures with really long names.
- Undo for kern group edits.
- Export SVG now uses properly escaped values for characters that are also XML reserved characters.

## v2.0.0 <badge type="tip">major release</badge>

_released 2023-12-01_

#### Main features

- From the Projects menu, open a second project, and be able to switch between them.
- New Cross-project Actions, that allow you to move or overwrite shapes, characters, ligatures, components, kern groups, and settings - from one project to another.
- No longer a limit to the Basic Multilingual Plane (Unicode through `U+FFFF`), any character from any plane can now be added as a character range.
- Transform Origin control for resizing shapes and glyphs. No longer are items resized by the lower-left corner by default. A grid of origins are available, and the default is now baseline-left.
- Modern file loading/saving - saving a file now directly overwrites the project file that was opened, instead of downloading a text file for every save.
- Auto save - using the browser's local storage, automatically save the latest change for each project. And have the ability to restore projects from the Open Project page.
- PANOSE builder - progressive drop-downs help you build the PANOSE number for your font.
- New Kern Group actions let you search for or delete a specific letter pair.

... and a lot of bug fixes.

## v2.0.0-beta.2.1 <badge type="warning">pre-release</badge>

_released 2023-10-06_

#### Description

Beta 2.1 is the last Beta!

#### Main features

- **Rotate** shapes with the rotation handle affordance on the edit canvas. Rotate Component Instances via the rotate property.
- **Add Path Point tool** lets you hover over an existing path and add a new point anywhere along the path you want.
- **New Global Actions**: Set all Side Bearings, and Round All.

#### Other small things

- More extensive testing and bug fixing for Combine Shapes algorithm.
- Better display/communication between the edit canvas and the cards in the Attributes Panel.
- Unit tests now have 100% coverage for Glyph Element classes, and common functions.
- Help / Documentation updated.
- Updated Oblegg, the example font.

## v2.0.0-beta.2.0 <badge type="warning">pre-release</badge>

_released 2023-09-07_

#### Description

Beta 2.0 is here, although not quite at feature parity with v1, a future
Beta 2.1 will get us all the way there. In the mean time, here's the new stuff:

#### Main features

- **Kerning** - Kern Groups can be saved and loaded from project files, and the new Kerning page allows you to create, edit, and delete Kern Groups.
- **Global Actions Page** - see a whole list of actions that you can run which can apply changes across many characters at once.
- **Context Characters** - a new panel was added to Character and Ligature edit pages that allows you to display other characters around the glyph you are currently editing.
- **Live Previews** - now much improved in functionality, the Live Preview Page has better scrolling options for sample text. Also a new Pop-out Window can be launched to display as many Live Previews as you want - great for seeing your changes in real time in a second window as you make edits in the main app window.
- **Combine Shapes** - now when you select two or more paths on the edit canvas, a "Combine shapes" action will allow you to merge multiple paths into as few paths as possible.

## v2.0.0-beta.1.1 <badge type="warning">pre-release</badge>

_released 2023-06-14_

#### Description

Beta 1.1 got rid of the old built-in SVG Parser, and replaced it with
the new SVG-to-Bezier library. You can read more about why and how over
at the blog:
https://www.glyphrstudio.com/blog/2023/06/14/svg-to-bezier-a-gs2-side-quest/

## v2.0.0-beta.1.0 <badge type="warning">pre-release</badge>

_released 2023-06-01_

#### Description

Beta 1 is (hopefully) mostly stable from a Project File perspective.
It also introduces two new areas of functionality in addition to several minor improvements.

#### Main features

- **Components** - Use any glyph as a Component Root, or define stand-alone Components. Add these to any other glyph as Component Instances. Edit the Root, all the instances are also updated.
- **Ligatures** (Including import/export from OTF) - define a sequence of characters that will be recognized and replaced with a new specially designed character.

#### Minor features

- Fancy brand update with new logos, icons, and the "Oblegg" example font.
- Lots of updates to make SVG import/export better.
- Improved tab layouts for content pages - Help, About, and Settings.
- Getting Started or First Run content for Components and Ligatures.
- Updated help content.
- Project summary information on the Overview page.
- Renamed "Glyphs" to "Characters" (in the UI and in the code).
- Importing OTF fonts automatically enables named Unicode ranges in your project.
- Like, a bazillion bug fixes

## v2.0.0-alpha.2 <badge type="danger">pre-release</badge>

_released 2023-02-01_

#### Description

The aim of Alpha 2 is to test some pieces of Glyphr Studio v2.
Glyphr Studio is in Alpha because it is not a complete product yet.
But feedback and bug-hunting on the following scenarios would be very
helpful:

#### Features

- Save and Load Glyphr Studio Project files `.gs2`
- Import OTF, TTF, WOFF, and SVG Font files
- Export OTF or SVG Font files
- Update options on the Settings page for the App, your Project, or your Font
- Use the Live Preview page to view your font as sentences or blocks of text

## v2.0.0-alpha.1 <badge type="danger">pre-release</badge>

_released 2022-11-01_

#### Description

The aim of Alpha 1 is to test some pieces of Glyphr Studio v2.
Glyphr Studio is in Alpha because it is not a complete product yet.
But feedback and bug-hunting on the following scenarios would be very
helpful.

#### Features

- Navigate around using the upper-left Page button, and the Glyph Chooser
- Create new shapes on the edit canvas
- Resize shapes with the arrow tool
- Edit paths with the pen tool
- Edit glyph, path, and path point details from the Attributes panel
