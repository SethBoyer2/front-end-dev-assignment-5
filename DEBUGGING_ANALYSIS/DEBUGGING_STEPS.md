# Steps:

## Breakpoint 1
The reason for the breakpoint on line 9 is to allow us to step through all of the code that executes
after the click listener is activated, but before the API call. This allows us to check the values
of treeLimit, commonName and our URL, which allows us to make sure the correct information is being grabbed and that the URL
is being modified successfully. That helped me discover that commonName was not being grabbed after renaming the variable.

## Breakpoint 2
The breakpoint on line 35 allows us to step through the initial fetch up to response.json being returned, which allows
us to check the status of the fetch, as well as what exactly is being returned in the Json, which can be helpful,
as there were a few times it was returning an empty array, which is what led me to finding out my URL was broken.

## Breakpoint 3
The breakpoint on line 41 allows us to see exactly which element of the array is being iterated over, which allows us to
confirm that the correct tree type is going to be printed, which was useful for verifying the results of the queries.

# Critical Point:

## Breakpoint 3
I'd say the breakpoint right before the API call is the most critical point, as everything else is pretty easy to logically
debug and get functioning, but a few issues with the fetch proved to be really hard to figure out.

The reason this breakpoint was so helpful is because it allows you to see the URL that is being fetched, including any inserted
text, and it also includes the status of the response, so we can see if any errors are coming from the server or client side.
By this point in the code we can also see the values of all of our previous variables and compare them to what appears in the
fetch URL, which makes it even easier to debug anything, as you can fix any errors one by one and very easily deduce what the issue
is based on what appears in the URL and response.json.

We can also see the size of the array returned by response.json and the status, so with this breakpoint on top of console logging results
makes it really easy to go through and debug the whole program from one major breakpoint.
