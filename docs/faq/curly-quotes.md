# Curly quotes

### Single and double quotes are designed in Glyphr Studio, but once I install the font and use it in a text editor, they do not display correctly.

This problem boils down to understanding that there are many characters across Unicode that may look similar, but are actually different.

If you are just starting out designing a font, most likely you have tried to fill out the `Basic Latin Range`. This range includes `Quotation Mark` `U+22` `"` and `Apostrophe` `U+27` `'`.

You'll notice a few things highlighted here, first, the Unicode Range name. Secondly, character information that includes the Character Name, the Unicode Code Point (U+##), and the character itself. The unique Unicode Code Point is important, because even when two characters look similar or even identical, they will always have a unique ID number according to Unicode.

### The problem

If you've designed the complete Basic Latin range, and exported a font and installed it on your computer, the next step you probably took was using your new font in a word processing document or some other program.

For quotes, many word processors try to help you by switching out these "Straight" quotes with their "Curly" equivalents. On standard English keyboards, there are not designated keys for curly quotes. So when you wrap words in single or double (straight) quotes, your word processor may automatically switch them out for opening single or double curly quotes and closing single or double curly quotes.

And curly quotes are different Unicode characters than straight quotes. So if the character changes and you have not included a design for it, a fallback font will be used that probably doesn't look like the quotes you designed.

### Understand the solution

The fix for this is to create designs for the appropriate curly quotes. Here is the Unicode Range and Unicode Code Point information for what you'll need:

- Basic Latin Range: `U+20` through `U+7E`
  - `Quotation Mark` `U+22` `"`
  - `Apostrophe` `U+27` `'`
- General Punctuation Range: `U+2000` through `U+206F`
  - `Left Single Quotation Mark` `U+2018` `‘`
  - `Right Single Quotation Mark` `U+2019` `’`
  - `Left Double Quotation Mark` `U+201C` `“`
  - `Right Double Quotation Mark` `U+201D` `”`

In Glyphr Studio, you can enable Character Ranges from the Settings > Project page. If you are running into this problem with your word processor automatically switching out quotation characters, go to your project and enable the General Punctuation range, and create designs for the 4 characters listed above.

### Unicode Ninja

This is a great time to plug one of our sister projects, Unicode Ninja (https://unicode.ninja). This is a tool that makes it easy to explore and search for Unicode Ranges and Characters. There are more than 300 Unicode Ranges, containing more than 32,000 named characters!
