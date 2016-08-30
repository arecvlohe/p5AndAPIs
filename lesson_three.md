# JavaScript Functions and API’s

Last week we discussed p5 and how to use that library to make animations. Now that will come in handy over the next couple of weeks when we need animations to illustrate our app. At this point, though, I would like to discuss with you APIs. An API is the instructions that allows us to talk to other computers over the internet. You know when you are on the computer and you move the mouse over a file and click on it and it opens up. We are using the mouse to give a set of instructions to the computer, namely to move the mouse. And when that mouse is clicked consecutively within a certain period of time, and that mouse if hovered over a file, then the file will open up. You see, these are the protocols you have to follow to get a computer to work. These are the rules of the interface.

Now servers also have instructions. There are ways you have to work with servers to ask them to ‘open up files’ just as we do with the computer. Let’s first look at a simple example of what those files look like. They won’t look like your typical `.doc` fill but they will look familiar to you.

Copy this link and put it in your browser: `http://api.giphy.com/v1/gifs/search?q=funny+cat&limit=1&api_key=dc6zaTOxFJmzC`

What we did here was we asked the servers on Giphy for a set of files. Do you now which ones. We did a search for `funny+cat` which I am sure you can deduce to searching for funny cat gifs.

Let’s take a step back now and look at each part of this url

`http://api.giphy.com` - This should make clear that we are making a request to the Giphy API.

`/v1/gifs/search` - This is saying that we want to search for gifs.

`?q=funny+cat` - The `q` here stands for query. We are doing a search query for funny cats!

`&limit=1` - Here we are saying that we want to limit the response to result.

`&api_key=dc6zaTOxFJmzC` - This is for security purposes. Using an API is just like crossing the Skyway bridge. For a certain fee you can cross. But if you do not pay the fee you better have a fast car because the police are coming after you! To access the API each user is given a unique key and it gives them the privileges they need to make use of the API data.

And that’s all that’s too it! Not really, there are other things that we can include in this search that Giphy provides. We will get into that later when we need it.

Now let’s look at the data we actually get when we make that request. Take the data from that page and copy into the left side of this page: `http://www.jsoneditoronline.org/`

Afterward click on the right arrow so that the data then gets transformed on the right side of the page.

You can see at the top of the page it says we have an object. You are familiar with objects right? In week one, we learned how to use objects to store data in variables. Because this is a visualizer of the data it’s not really showing us how this would look in plain ole’ JavaScript, but if you were to take the first three values and put them in an object it would look a little something like this.

```
var object = {
  data: [],
  meta: {},
  pagination: {}
}
```

How did I come to the conclusion that the first object `data` was an array? If you look at the son editor you will see brackets (`[]`) next to it and not curly braces (`{}`) as in there other two. Let’s open up data.

Here we have a value of `0`. This value is actually another object because we see again that it has curly braces next to it. Let’s open that up now.

Wow! We have a bunch of data here. We have `type`, `slug`, `url`, `rating`, and the list goes on. If we look further down we can see a more important object thought, `images`. Open that sucker up!

Oh man! Now we have a bunch of other values: `fixed_height`, `fixed_width`, and `original` just to name a few. I wonder what these could be? Let’s open them up to find out.

Here we have another set of data. This data, however, is a bit more helpful than what we had before. We have a `url` and an `mp4`. Let’s click on that `url` and see where we go.

Hilarious! Did you get a funny cat? I know I did. Where does this come in handy. Do you this would work in an `img` tag? I mean, all an `img` takes is a `src` right and then it will render the image within. Let’s try it out. Open up your codepen and take this url and put it in the `src` inside an `img` tag. It will look a little something like this:

```
<img src=“https://media3.giphy.com/media/64zSh1uTE7xxm/giphy.gif” />
```

If you noticed it didn’t work that’s because using images from other sites is a no-no. But we will be able to get around this later. I will instead show you this in a plain html document and you will see that it renders properly. Nice!

So this is pretty interesting. We can make a call to a server; get back a bunch of results; then be able to use that data to display something on the page. Pretty cool, huh?

This gets really interesting when we are able to work with dynamic data. Remember in week one when we used a `for` loop to add dynamic data to the page? We will pull out that hand tool again and build data that we have dynamically. First, though, we have to learn to make a request the ole’ fashion way with JavaScript, also known as an XHR request.

To start we need to create an object that has the functions we need to create this request. Remember when I mentioned that we have the `document` object to create DOM objects and add stuff to an HTML page. Well, we have a lot more stuff than that. We also have available to us the XMLHttpRequest object. We will use it by calling `new` on it. We won’t get in to the weeds about this too much but let’s just say that the `new` keyword initializes an object that we can use, much like `document`.

To initialize it let’s create a variable called `request` and set it to a `new` XMLHttpRequest object like this:

```
var request = new XMLHttpRequest()
```

Okay, so now that we have that object we can begin to use the functions that it has to make requests. The first is `addEventListener()`.

```
request.addEventListener(‘load’, function() { console.log(this.responseText)
})
```

Nice! I bet you’re wondering what this does? This create a listener, basically a function that listens to this request, and when it has loaded, it takes a callback function saying to log the data to the console.

But that’s just a listener! We actually have to send the request to be able to get any data back. We now need `open` and `send` to do this for us.

```
request.open('GET', 'http://api.giphy.com/v1/gifs/search?q=funny+cat&limit=1&api_key=dc6zaTOxFJmzC)
```

Keyword time! You see `GET` in all caps. No it’s not yelling at you but it is telling you something very important. It is saying we are making a `GET` request. I am sure you guessed that this means this is a request to `GET` data, right? There are other verbs as well that relate to how we talk to servers. We can also `PUT`, `POST`, `DELETE`, `PATCH`, just to a name a few. But we will only be dealing with `GET` for now.

Okay, so we have everything set, now all we have to do is send it off!

```
request.send()
```

That’s it! When we send our request off we will get a nice object in the console that has the object with the funny cat gif. Awesome!

Just for fun let’s take some of that data and put it into the DOM.

This won’t be too easy though. Before we can actually use this object we will need to parse it. Let’s extract out this call back function into its own and then have all of our instructions in there to do what we need it to do. I am going to call this function `afterLoad`.

```
function afterLoad() {
  var parsedData = JSON.parse(this.responseText)
  console.log(parsedData)  
}
```

You will see here we are using a handy function called `JSON.parse`. This parses the data that we have and makes into an JavaScript. This will allow us to access information from that object later. Now let’s take the `type` value from this object and place it in the DOM.

```
function afterLoad() {
  var parsedData = JSON.parse(this.responseText)
  console.log(parsedData)
  var header = document.createElement('h1)
  header.textContent = parsedData.data[0].type.toUpperCase()
  document.body.appendChild(header)  
}
```

Just for kicks and giggles I used I nice helper function called `toUpperCase` to capitalize all the letters in the string. Now you should see `GIF` at the top of the screen.

Next let’s add the infamous gif to the page. We can do that by creating an `img` element and tagging the `src` to be the source of the `url`. You will see.

```
function afterLoad() {
  var parsedData = JSON.parse(this.responseText)
  console.log(parsedData)
  var header = document.createElement('h1)
  header.textContent = parsedData.data[0].type.toUpperCase()
  document.body.appendChild(header)  

  var image = document.createElement('img')
  image.src = parsedData.data[0].images.original.url
  document.body.appendChild(image)
}
```

Do you see the cat, do ya!? I don’t know if you really see it or not but let’s just say, between us, that you did. Awesome, you are doing great!

Currently we just have one image. How do you suppose we get more images from the server besides this one lonely image. That’s right, we will raise the `limit`. Let’s bump it up to 5 for now.

Remember I told you we would be going back to that `for` loop at some point in time. Well, it’s time. Let’s create a `for` loop that now loops over all this data and places the image in the DOM. Let me show you.

```
function afterLoad() {
  var parsedData = JSON.parse(this.responseText)
  console.log(parsedData)
  var header = document.createElement('h1)
  header.textContent = parsedData.data[0].type.toUpperCase()
  document.body.appendChild(header)  

  // I removed the image var we had before
  for (var i=0; i < 5; i++) {
    var images = document.createElement('img')
    images.src = parsedData.data[i].images.original.url
    document.body.appendChild(images)
  }
}
```

Okay, okay, okay, man! That was a lot! Let’s review:

- Servers put files up on the internet for us to access
- Those files come in the form of JavaScript objects.
- We can use an object called `XMLHttpRequest` that sends out a `GET` request to this server.
- What we get back is not a JavaScript object yet so we have to parse it with `JSON.parse`
- When it’s done being parsed we can have a funny cat parade and thump our chests because we did something cool!
