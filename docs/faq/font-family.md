# Font family

### How do I make multiple fonts exported from Glyphr Studio be recognizable as a family in other programs?

This was a big challenge over the years, based on a bug in how font files were exported. It was recently fixed (May 2026), so if you follow these simple guidelines, fonts should be recognized as a family:

**On the Settings > Font page** ensure the following for the set of fonts you are wanting to family together:

 - `Font family` is the same across all the font files.
 - `Font style` is accurate and unique across all the font files.
 - `Font weight` is accurate, and corresponds to the Font Style field. To be recognized as the Bold member of a family, set the weight to 700.
 - `Italic angle` is accurate, and corresponds to the Font Style field. A non-zero italic angle is what marks a font as Italic/Oblique.
 - `Font stretch` is accurate if you are creating condensed or expanded widths (e.g. Condensed, Expanded). Fonts of different widths can now be grouped as one family.

You can use any descriptive Font style name - including weights like *Light*, *Semibold*, or *Black*, and widths like *Condensed*. Glyphr Studio automatically writes the underlying font metadata so these group correctly in modern apps while staying compatible with older ones; you don't need to worry about the technical naming details.

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

# (Way too) Detailed guidance

Glyphr Studio handles most of this internally. But if you are curious about the details, the following sections show exactly what metadata needs to correspond in order for a collection of fonts to be interpreted as a family.

Glyphr Studio does not directly surface all of these font fields, so if you want to go this deep, you'll have to use some other software to make these granular edits.

## What makes multiple font files appear as one family?

For OpenType fonts, including both `.ttf` and `.otf`, family grouping depends mostly on coordinated metadata in the `name`, `OS/2`, `head`, and sometimes `STAT` and `fvar` tables.

The most important fields are:

- `name` table:
  - Name ID 1: Font Family
  - Name ID 2: Font Subfamily
  - Name ID 4: Full Font Name
  - Name ID 6: PostScript Name
  - Name ID 16: Typographic Family
  - Name ID 17: Typographic Subfamily
  - Name IDs 21/22: WWS Family/Subfamily, when needed
- `OS/2` table:
  - `usWeightClass`
  - `usWidthClass`
  - `fsSelection`
- `head` table:
  - `macStyle`
- `STAT` table:
  - Strongly recommended for modern font families
  - Required for variable fonts
- `fvar` table:
  - Required for variable fonts

## What is the single most important recommendation?

Use **Name ID 16** as the true family name across all related fonts.

Example:

```text
Name ID 16: Acme Sans
```

Use this exact same value for:

```text
Acme Sans Regular
Acme Sans Italic
Acme Sans Bold
Acme Sans Light
Acme Sans Semibold
Acme Sans Condensed
Acme Sans Display
```

Then use **Name ID 17** for each unique style name.

```text
Name ID 17: Regular
Name ID 17: Bold
Name ID 17: Light
Name ID 17: Condensed Bold
Name ID 17: Display Semibold Italic
```

## How should I set legacy family names?

Use **Name ID 1** and **Name ID 2** for legacy four-style grouping.

Legacy Windows and Office-style apps expect a family to contain only:

- Regular
- Bold
- Italic
- Bold Italic

Recommended pattern:

| Style | Name ID 1 | Name ID 2 |
|---|---|---|
| Regular | Acme Sans | Regular |
| Bold | Acme Sans | Bold |
| Italic | Acme Sans | Italic |
| Bold Italic | Acme Sans | Bold Italic |
| Light | Acme Sans Light | Regular |
| Light Italic | Acme Sans Light | Italic |
| Semibold | Acme Sans Semibold | Regular |
| Condensed | Acme Sans Condensed | Regular |
| Condensed Bold | Acme Sans Condensed | Bold |

Do not put values like `Light`, `Semibold`, or `Condensed` in Name ID 2 if maximum Windows/Office compatibility matters.

## How should I set modern typographic names?

Use **Name ID 16** and **Name ID 17** for the real family structure.

| Style | Name ID 16 | Name ID 17 |
|---|---|---|
| Regular | Acme Sans | Regular |
| Bold | Acme Sans | Bold |
| Italic | Acme Sans | Italic |
| Bold Italic | Acme Sans | Bold Italic |
| Light | Acme Sans | Light |
| Light Italic | Acme Sans | Light Italic |
| Semibold | Acme Sans | Semibold |
| Condensed | Acme Sans | Condensed |
| Condensed Bold | Acme Sans | Condensed Bold |

Rule of thumb:

- Name ID 16 must be the same for every font in the family.
- Name ID 17 must be unique for every style in that family.

## How should I set the full font name?

Use **Name ID 4** as the unique readable full name for each file.

Examples:

```text
Acme Sans
Acme Sans Bold
Acme Sans Italic
Acme Sans Light
Acme Sans Semibold
Acme Sans Condensed Bold
```

Every font file should have a unique Name ID 4.

## How should I set the PostScript name?

Use **Name ID 6** as a unique machine-safe name.

Recommended format:

```text
AcmeSans-Regular
AcmeSans-Bold
AcmeSans-Italic
AcmeSans-Light
AcmeSans-CondensedBold
```

Rules:

- Must be unique per font file
- Use ASCII characters
- Do not use spaces
- Keep it short and stable

## How should I set weight and width?

Set `OS/2.usWeightClass` to match the visual weight.

| Style | usWeightClass |
|---|---:|
| Thin | 100 |
| ExtraLight | 200 |
| Light | 300 |
| Regular | 400 |
| Medium | 500 |
| Semibold | 600 |
| Bold | 700 |
| ExtraBold | 800 |
| Black | 900 |

Set `OS/2.usWidthClass` to match the visual width.

| Width | usWidthClass |
|---|---:|
| Ultra-condensed | 1 |
| Extra-condensed | 2 |
| Condensed | 3 |
| Semi-condensed | 4 |
| Normal | 5 |
| Semi-expanded | 6 |
| Expanded | 7 |
| Extra-expanded | 8 |
| Ultra-expanded | 9 |

## How should I set bold, italic, regular, and oblique flags?

Coordinate `OS/2.fsSelection` and `head.macStyle`.

Recommended rules:

| Style | usWeightClass | fsSelection | head.macStyle |
|---|---:|---|---|
| Regular | 400 | Regular | none |
| Bold | 700 | Bold | Bold |
| Italic | 400 | Italic | Italic |
| Bold Italic | 700 | Bold + Italic | Bold + Italic |
| Light | 300 | none, unless Regular in its legacy group | none |
| Semibold | 600 | usually none | usually none |
| Oblique | varies | Oblique | usually Italic only if legacy compatibility requires it |

Avoid contradictions such as:

- Style name says `Italic`, but italic bit is not set
- Style name says `Bold`, but weight is 400
- `fsSelection` says Bold, but `head.macStyle` does not
- Multiple fonts in the same legacy group marked as Regular

## When should I use Name IDs 21 and 22?

Use **Name IDs 21 and 22** only when you need a WWS grouping fallback.

WWS means:

- Weight
- Width
- Slope

Use Name IDs 21/22 when the typographic style includes non-WWS attributes such as:

- Display
- Text
- Caption
- Micro
- Poster
- Optical size
- UI

Example:

| Style | Name ID 16 | Name ID 17 | Name ID 21 | Name ID 22 |
|---|---|---|---|---|
| Display Bold | Acme Sans | Display Bold | Acme Sans Display | Bold |
| Caption Italic | Acme Sans | Caption Italic | Acme Sans Caption | Italic |

If the family only varies by weight, width, and italic/oblique, you usually do not need Name IDs 21/22.

## Do I need a STAT table?

Yes, for modern font families, add a correct `STAT` table whenever possible.

Use `STAT` especially if the family includes:

- More than Regular/Bold/Italic/Bold Italic
- Multiple weights
- Multiple widths
- Italics or obliques
- Optical sizes
- Variable fonts

Recommended STAT axes:

| Axis | Tag |
|---|---|
| Weight | `wght` |
| Width | `wdth` |
| Italic | `ital` |
| Slant | `slnt` |
| Optical Size | `opsz` |

The `STAT` values should describe each font’s position within the whole family.

Example for a static Regular font:

```text
wght = 400
wdth = 100
ital = 0
```

Example for Condensed Bold Italic:

```text
wght = 700
wdth = 75
ital = 1
```

## What about variable fonts?

For variable fonts, coordinate all normal naming fields plus:

- `fvar` axes
- `fvar` named instances
- `STAT` axis values
- Name ID 25, if needed for variation PostScript names

Recommended variable axes:

```text
wght
wdth
ital
slnt
opsz
```

Named instances should have clear names and correct coordinates.

Example:

| Instance | wght | wdth | ital |
|---|---:|---:|---:|
| Regular | 400 | 100 | 0 |
| Medium | 500 | 100 | 0 |
| Bold | 700 | 100 | 0 |
| Condensed | 400 | 75 | 0 |
| Condensed Bold | 700 | 75 | 0 |
| Italic | 400 | 100 | 1 |

## Recommended metadata pattern

For a family named `Acme Sans`:

| File | Name ID 1 | Name ID 2 | Name ID 16 | Name ID 17 | Weight | Width |
|---|---|---|---|---|---:|---:|
| AcmeSans-Regular.ttf | Acme Sans | Regular | Acme Sans | Regular | 400 | 5 |
| AcmeSans-Bold.ttf | Acme Sans | Bold | Acme Sans | Bold | 700 | 5 |
| AcmeSans-Italic.ttf | Acme Sans | Italic | Acme Sans | Italic | 400 | 5 |
| AcmeSans-BoldItalic.ttf | Acme Sans | Bold Italic | Acme Sans | Bold Italic | 700 | 5 |
| AcmeSans-Light.ttf | Acme Sans Light | Regular | Acme Sans | Light | 300 | 5 |
| AcmeSans-LightItalic.ttf | Acme Sans Light | Italic | Acme Sans | Light Italic | 300 | 5 |
| AcmeSans-Semibold.ttf | Acme Sans Semibold | Regular | Acme Sans | Semibold | 600 | 5 |
| AcmeSans-Condensed.ttf | Acme Sans Condensed | Regular | Acme Sans | Condensed | 400 | 3 |

## Checklist for familying fonts together

Use this checklist when editing font metadata:

- [ ] Set the same Name ID 16 for every font in the intended family
- [ ] Set a unique Name ID 17 for every style
- [ ] Keep Name ID 1/2 compatible with legacy four-style grouping
- [ ] Use only Regular, Bold, Italic, or Bold Italic in Name ID 2
- [ ] Make Name ID 4 unique for every font file
- [ ] Make Name ID 6 unique, ASCII-only, and space-free
- [ ] Set `usWeightClass` to match the actual weight
- [ ] Set `usWidthClass` to match the actual width
- [ ] Set `fsSelection` bold, italic, oblique, and regular bits correctly
- [ ] Keep `head.macStyle` consistent with `fsSelection`
- [ ] Add a `STAT` table for modern app compatibility
- [ ] Add `fvar` named instances for variable fonts
- [ ] Use Name IDs 21/22 only when WWS fallback is needed
- [ ] Validate the fonts after editing
- [ ] Confirm the font license allows modification

## Common mistakes

Avoid these mistakes:

- Using different Name ID 16 values across files that should be one family
- Reusing the same Name ID 17 for multiple styles
- Reusing the same Name ID 6 in multiple files
- Putting `Light`, `Semibold`, or `Condensed` in Name ID 2
- Marking multiple files as Regular in the same legacy group
- Setting a style name that disagrees with the weight or italic flags
- Omitting the STAT table from large or modern families
- Treating optical size as weight or width
- Editing commercial fonts without checking the license

## Practical rule

If the goal is to make Windows, Office, Canva, Affinity, and similar apps recognize related font files as one family:

1. Use Name ID 16 as the shared real family name.
2. Use Name ID 17 as the unique style name.
3. Keep Name ID 1/2 legacy-safe.
4. Make Name ID 4 and Name ID 6 unique.
5. Set weight, width, bold, italic, and oblique metadata accurately.
6. Add a coherent STAT table.
7. Validate the result in multiple apps.
