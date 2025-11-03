## Can I explain what my code does?
In script.js, I added a DOMContentLoaded listener to make sure my HTML was loaded before declaring my element Variables,
and then I added a click listener to my button element, which declares the tree limit and common name from the relevant inputs
and clears out the treeList innerHTML to display new facts. After this, I added some error handling for empty inputs, and then
I declared my URL, inserting treeLimit and commonName with template literals for the search filters, and then called the API using
the customized URL. I kept my console.log for debugging purposes, and then iterated through each element in the returned
array of trees, grabbing tree ID, common name, scientific name and diameter, and created a new list item for each.

## What was my coding process?
First I created my HTML skeleton and did a little bit of CSS styling so it wouldn't hurt to look at, and then for my JS I decided what
I would need for inputs and added them to my HTML, and then declared them in script.js. Initially I forgot to add the DOMContentLoaded listener and was
having some issues, so I added that, and then put most of my code inside of the click listener, as this made it easier to pass the relevant
variables and clear out the list of trees. For a lot of the API call logic I referenced the demo, and then once response.json was returned,
I figured the only way I could display the trees properly was to iterate through the array that the API call returned, so I did that, creating
a new li for each tree.

## what challenges did I have?
I had a few issues at first with some of my element variables being null, which I figured out was being caused by declaring them before the
relevant elements were loaded. I also had issues with my API url not returning anything despite having the API key in the URL, so I switched from
SODA3 to SODA2, as 3 requires you to create an account before you can utilize the API. After that, I couldn't get my search queries to work, so I looked
into SoQL a bit and discovered what URL encoding is, so I threw that in manually to make the search queries url-safe, because what I was trying previously
was only returning empty arrays.

## What would I do differently now?
Honestly I might've just wanted to figure out a different way to display the trees, I don't love the way the Li elements wrap.
Other than that, I'd like to look further into how the API calls work exactly and really get it down so I don't have to reference
the demo to write them out.