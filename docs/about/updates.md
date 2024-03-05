# Updates

All releases and more information can be found at GitHub:

https://github.com/glyphr-studio/Glyphr-Studio-2/releases

&nbsp;

## v2.1.6 <badge type="tip">minor release</badge>

_released 2024-03-05_

### Bug fixes

- Importing two files, now the second project that gets created does not overwrite the first one.
- Handling the "Basic Latin Controls" Character Range, it can now be selected from dropdowns and can be hidden from the Settings > App page. Also updated the behavior of importing font files to automatically hide "Basic Latin Controls" range if it only has the `0x0` ".notdef" character.

## v2.1.5 <badge type="tip">minor release</badge>

_released 2024-02-09_

### Bug fixes

- Quick bug fix for metadata imported from OTF or WOFF files

## v2.1.4 <badge type="tip">minor release</badge>

_released 2024-02-06_

### New features

- New Shape Combine actions. Since v1 "Combine Shapes" action has existed... although it was very buggy and not dependable. For this release, we switched to using Paper.js to handle these "boolean" combine actions. In addition to Unite, the other complementing actions were added, including: Divide, Subtract, Overlap, and Exclusion. These actions are the same as multi-shape actions in other graphic design programs, like Pathfinder commands in Adobe Illustrator.
- We brought back the "Previous Item" / "Next Item" buttons that were in v1. They are now located in the details pane, below the cards in the Attributes panel. These let you easily cycle through all the characters in your project.

### Bug fixes

- Fixed an Export to OTF bug regarding the `.notdef` character having zero advance width.
- Fixed an Export to OTF bug around handling paths with no path points.
- Fixed a bug around deleting Kern Groups.
- Added resiliency around automatically falling back to existing enabled Character Ranges on delete or navigation.

## v2.1.3 <badge type="tip">minor release</badge>

_released 2024-01-26_

### New features

- Advanced handling for Character Ranges:
  - Easily show & hide ranges. Hidden ranges do not display in the character chooser, or get exported to fonts. But they remain saved in the project data.
  - Option to delete all the project character data within a range.
- Ability to delete items (Characters, Ligatures, or Components) that act as component roots. There is a new setting that controls the behavior of what happens to component instances when a root gets deleted. The default behavior is now that component instances will be unlinked and converted into stand-alone paths if their component root is deleted.
- New export toggles for Ligatures and Kerning

### Bug fixes

- Fixed a bug in exporting to OTF where the `space` character was being interpreted as the `.notdef` character

&nbsp;

## v2.1.2 <badge type="tip">minor release</badge>

_released 2024-01-22_

Fixing bugs that were introduced in 2.1.1

### Bug fixes

- Navigation works to Kerning, Components, and Ligatures
- Deleting the last item now falls back to the default Character

&nbsp;

## v2.1.1 <badge type="tip">minor release</badge>

_released 2024-01-19_

### Bug fixes

- Now only characters that are part of visible character ranges will be exported to fonts. Previously, all characters were exported, even if you had hidden certain character ranges from the Settings > Project page. **Note** Adding and removing character ranges from the Settings > Project page does not delete characters from your project. It only controls what is visible in the UI Character Picker, and what gets exported to fonts.
- 'Lock aspect ratio' now works for multi-selected shapes.
- Fixed a few bugs / increased resiliency for importing ligatures from fonts.
- Using the keyboard shortcut `Ctrl`+`v` to paste SVG code directly onto the edit canvas, this is now working better, but not perfect (seems to work as expected in Firefox). **Note** Using the operating system clipboard is only possible if the Glyphr Studio clipboard is empty. There is a new "Clear Glyphr Studio Clipboard" action that does this, or you can just do `Ctrl`+`c` copy on nothing, to clear the clipboard.

&nbsp;

## v2.1.0 <badge type="tip">major release</badge>

_released 2024-01-15_

### New features

Across the main site, the app, and the help documentation, many URLs and descriptions have been updated to reflect that v2 is now the default experience for Glyphr Studio.

&nbsp;

## v2.0.3 <badge type="tip">patch release</badge>

_released 2024-01-14_

Getting in some bug fixes before the v1/v2 switch happens!

### Bug fixes

- Importing ligatures is now more resilient to individual errors.
- Fixed some import / export bugs for SVG Fonts around the `.notdef` character and advanced Unicode ranges.
- Some fit-and-finish style updates, including the new favicon.
- Bug fix for the `input-number` control not displaying it's current value correctly.

&nbsp;

## v2.0.2 <badge type="tip">patch release</badge>

_released 2024-01-03_

### New features

- New App Setting to specify the number of items in the Item Chooser, applies to Ligatures, Components, and Kern Groups. If you have a project with a large number of these, you the Item Chooser will now page through smaller sets of items to help performance.

### Bug fixes

- Loading and Saving files now works in FireFox.
- Creating a new project with a custom name now actually applies the name to the Project Name and Font Family properties.
- Crashes, errors, and displaying wrong information while navigating between pages and showing cards in the Panel.
- "Too large to autosave" check now disables the auto save project setting.
- Additional checks / resiliency for component links.
- Global Actions are now more resilient to individual item failures.
- Export Advance Widths of zero to be a very small number as to not cause OTF file failures.

&nbsp;

## v2.0.1 <badge type="tip">patch release</badge>

_released 2023-12-08_

### Bug fixes

- Importing kern groups from projects.
- Better nav titles for kern groups, components, and ligatures with really long names.
- Undo for kern group edits.
- Export SVG now uses properly escaped values for characters that are also XML reserved characters.

&nbsp;

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

&nbsp;

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

&nbsp;

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

&nbsp;

## v2.0.0-beta.1.1 <badge type="warning">pre-release</badge>

_released 2023-06-14_

#### Description

Beta 1.1 got rid of the old built-in SVG Parser, and replaced it with
the new SVG-to-Bezier library. You can read more about why and how over
at the blog:
https://www.glyphrstudio.com/blog/2023/06/14/svg-to-bezier-a-gs2-side-quest/

&nbsp;

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

&nbsp;

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

&nbsp;

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
