# Not a valid font file

### I just exported an `.otf` file from Glyphr Studio, but when I open it in Windows Font Viewer, I get a little error message that says "The requested file is not a valid font file".

Based on more than 10 years of experience, I can say that this error is not uncommon. Wherever possible, if the cause of an error can be found, safeguards are built into Glyphr Studio so that a specific error is not encountered again.

The problem, though, is that there are many ways to export an `.otf` file that result in this error message. The error message itself never says exactly what is causing the error. Some of the root causes are simple to identify and fix, and others aren't.

If you encounter this error, please take the `.gs2` project file that generated the error, and the `.otf` file that has the error, and send them to mail@glyphrstudio.com - I have a growing folder of these examples, and some day I will do a deep dive to try to identify and fix issues. The more examples I have, the more safeguards I can put in place.

### The solution

 - Sometimes, making additional edits to your project then re-exporting an `.otf` file will magically fix something.
 - If the above doesn't work, use another program or some online font converter, and convert the `.otf` file to a `.ttf` file. TTF and OTF formats are cross-compatible (at least for the set of features Glyphr Studio supports) so converting back and forth should not result in any loss of data. It *does*, however, tend to fix errors like this. (By the way, this is also the suggested fix for the [Transparent overlaps](transparent-overlaps.md) problem).

