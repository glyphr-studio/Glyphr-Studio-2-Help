# Touch-based input app for mobile or tablet

### I want to use Glyphr Studio on my phone or tablet. Is there a way to enable touch input for editing paths?

This has been asked many times before, and the short answer is 'no'. Even though Glyphr Studio can run in any browser - including the ones on your phone or tablet - there are two main reasons this is very difficult:

### Touch input accuracy
Compared to mouse input, touch input is way less accurate. Glyphr Studio uses a hit target of 7px for things like path points and handles. Depending on your screen resolution, your finger could cover approximately 30px to 50px of screen space. Even though the app receives a single point from touch interactions which is very precise, in practice it is very annoying to try to hit a small click target with your big finger.

Canvas edit controls are just the beginning. It's not impossible to make the hit targets very large for touch input. But also every single other control would have to be optimized for touch input as well. Making all the controls across the whole app touch friendly would be a very large work item.

### Screen real estate
The other main challenge, especially for mobile screens - is the size of the screen itself. The current app was optimized for larger monitors, with a persistent top bar and left panel. Again, adding features that detect screen size and adjusting how these areas are displayed along with the Edit Canvas is not impossible... it's just a large work item to think about the app would support a wholly new navigation paradigm.

## Final notes
These basically boil down to "Not impossible, but it's a large work item". One of the great things about the move from v1 to v2 is that the backend / data of Glyphr Studio is completely separate from the frontend / UI parts. It would be totally easy to design a wholly new UI - especially optimized for small screens and touch input - that leveraged the same backend code that powers the current app. The only thing we would have to do is... design and implement a whole new UI.

Far and away the most common way to do typeface design is with a mouse on a larger screen, so that is what we have optimized for. Given all of the other feature improvements that we have ideas for, it always comes down to a prioritization: Add new functionality, or spend time designing a new UI for a very small touch-input edge case.

Think this feature should be prioritized higher? We always love hearing ideas and feedback: [mail@glyphrstudio.com](mailto:mail@glyphrstudio.com)