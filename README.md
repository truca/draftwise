# Readme

## Decition Making

### Performance

Based on the challenge's description, performance is really important, and 2 key aspects called my attention as they can hurt performance heavily:
1. Parsing the document for terms
2. Listing all the terms and their definitions

(1) Parsing the document requires more time as the document increases it's length, and long documents can take a long time to parse, so the algorithm for this has to be effective. I checked two implementations: 
- Getting paragraphs one by one, loading the current's paragraph text, sync, then get the text
- Getting all paragraphs, loading their text, syncing once, then getting the texts of all the paragraphs.

The second implementation was selected as it required less calls to context.sync(), which is described as a costly function

(2) There can be a big number of terms on the document and rendering all of them at every moment can hurt performance. To prevent that, I used React Virtualized, a library that only renders the elements of a list that are visible, thus reducing considerably the resources needed to render the list and putting a cap on the maximum amount of resources that the list can consume.

### CSS Library

To define the CSS library that was going to be used on the current implementation, I checked 3 broad options: 
1. Component Library (i.e. Material UI)
2. CSS-in-JS
3. pure CSS library

I discarded (1) as the components needed for this app are just a few, so we'd be adding a lot of code we'd not use. To compare (2) and (3), I looked for some comparisons online and I found this article: https://pustelto.com/blog/css-vs-css-in-js-perf/, where they compared Styled components against Linaria and found that Linaria (CSS) was more effective in many relevant metrics. (i.e. they found a difference of 868ms in Total Blocking Time between Linaria and SC in one implementation). From that, I discarded (2). 

Lastly, I had 2 flavours: vanilla CSS and tailwind CSS. I fopund this article: https://www.programonaut.com/tailwind-css-vs-css-an-in-depth-comparison-speed-file-size-etc/ detailing key differences between them, being mostly that Tailwind is more efficient for development and provides a great DX, while CSS has a lower file size (CSS files). So I used Tailwind as it is performant and provides a good DX and a lower development time.

## Future improvements

- Add proper navigation: I'd add React navigation package to handle navigation as the app gets bigger. I didn't do it now since the navigation was really simple and I didn't want to add an extra package as performance is so important