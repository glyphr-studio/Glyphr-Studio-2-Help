# Font family

### How do I make multiple fonts exported from Glyphr Studio be recognizable as a family in other programs?

This was a big challenge over the years, based on a bug in how OpenType.js exported font files. It was recently fixed, so if you follow these simple guidelines, fonts should be recognized as a family:


**On the Settings > Font page** ensure the following for the set of fonts you are wanting to family together:
 - `Font family` is the same across all the font files.
 - `Font style` is accurate and unique across all the font files.
 - `Font weight` is accurate, and corresponds to the Font Style field.
 - `Italic angle` is accurate, and corresponds to the Font Style field.

Figuring out what exactly is looked at to determine a font family took trial and error, so if you encounter a set of fonts that don't seem to be recognized as a family, please email us at mail@glyphrstudio.com and we can adjust the code to enable it.

### What can go wrong
There are many fonts that exist in isolation, without Bold or Italic variations. Word processor apps usually compensate for this by having a built-in capability to do "fake bold" (basically add weight uniformly around shapes) and "fake italic" (just skewing shapes, otherwise known as 'oblique').

If a set of fonts are properly recognized as a family by your operating system and word processor, trying to bold or italic some text will result in using the other fonts in the family, as opposed to these "fake" variants that are automatically generated.

Other signs for a set of font files not being recognized as a family is if the individual files are shown as different font choices. In your word processor app's font menu, they may be listed separately, like:
 - Font Name Regular
 - Font Name Bold
 - Font Name Italic

As opposed to just seeing "Font Name" with the Bold and Italic variants used when those styles are applied.

If you are trying to design a font family and are encountering these signs, go back and ensure all the fonts' metadata is correct.