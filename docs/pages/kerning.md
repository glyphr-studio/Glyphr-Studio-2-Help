# Kerning

Kerning is an advanced feature of fonts that recognizes a pair of characters, then adjusts the spacing between them to some custom value. The default spacing between characters is zero - which is to say, the white space (side bearings) within each character are the only space shown.

![Kerning page](../img/page_kerning.png)

Some letter combinations, like `VA` as an example, if the default side bearing spacing is used, the letters visually look very far apart. Kerning can help the visual flow of character pairs look more well considered. Many character pairs may need either negative or positive kern values to make them "look right".

The value of the kern can be thought of as an adjustment to the advance width of the left-hand character. That is to say, negative kern values will decrease the space between characters, and positive kern values will increase the space.

## Class-based kerning

Font files encode kerning values as three pieces of information: a left character, a right character, and a horizontal adjustment value. Fonts with many characters can end up having a huge amount of kern pairs. Glyphr Studio uses a system called Class-based Kerning, where groups of characters with similar edges (like `VvWw`) can be treated as a single left-hand group, and a group of right-hand characters (for example,`A/`) can be treated as single group - which can be given a single value. When a font is exported, the permutations are saved as individual kern pairs. But, while editing, grouping common characters often simplifies the overall kerning process.

## Please note

- Importing Kern data from font files is supported for `GPOS` table, Lookup Type 2 format.
  - Can only import subtables with Pair Position Format 1. Subtables with Pair Position Format 2 are not supported.