# Planning

## Easy Option

1. Find path to professor name on website
2. Search up each professor using an API
3. If not found, display not found

You can have the application store every time to local storage and it will check the local storage first to speed it up over time.

### Pros

Relatively easy to do

### Cons

There is a small chance professor is on RMP but it is not listed. Also does not work when professors have very common names.

## Harder Option

1. Make a selenium scraper to completely scrape all of RMP's data
2. Store data in a server
3. Make custom api for custom database
4. Have chrome extension search that


### Pros

- Can search for class number and previous classes
- technically impressive

### Cons

A lot of work

# Decision

Easy option
