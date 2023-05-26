# Characters

Characters are a type of `Glyph` object that represent regular letters in your font.


### Unicode

Unicode is the system that fonts use to identify `Glyph` objects as a specific character. Unicode defines 'code points' which is basically just a unique ID number, and a name for that particular character. Unicode code points can be just a regular (decimal) number, but most often they are represented by a hexadecimal number with a `U+` prefix.

Unicode is broken down into 'planes' - and the first one is called the Basic Multilingual Plane. These are characters `U+0000` through `U+FFFF`. Since we're dealing with hexadecimal numbers, each digit can be one of `0123456789ABCDEF` for a total of 65,536 Unicode code points in the BMP. Not every Unicode code point has a character associated with it (some are left intentionally blank) but still, there are a huge amount of characters available. In Glyphr Studio, you can enable any range of characters you want (the default is the 'Basic Latin' character range).

If you are curious about exploring Unicode, you can check out Glyphr Studio's sister project: [https://unicode.ninja](https://unicode.ninja) - this is a tool where you can browse through all the character ranges in the BMP, get details on any individual character, or search for characters by name.
