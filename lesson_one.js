/*
  Let's first talk about the building blocks of JavaScript, or
  any programming language for that matter: data types and variables.
  In JavaScript their are several data types, the most important being:
  Strings, Numbers, Booleans, Arrays, and Objects
  Variables are how values are stored.
  They are decalred with the keyword 'var'
  Let's make some variables with some data types!
*/

  var myName = 'Adam Recvlohe'
  var myAge = 29
  var oldEnoughToDrive = true
  var myFriendsNames = ['Julian', 'Chase', 'Kurtis', 'Gabe']
  var adam = {
    name: myName,
    age: myAge,
    legalToDrive: oldEnoughToDrive,
    friends: myFriendsNames
  }

/*
  To access values inside of Arrays or Objects you use bracket notation.
  Let's create another string using bracket notation.
*/

  var somethingAboutJulian =
    myFriendsNames[0] + ' is really cool and smart!'
  var somethingAboutGabe =
    myFriendsNames[3] + ' is a nice guy!'
  var somethingAboutKurtis =
    adam['friends'][2] + ' went to school at The Iron Yard'
  var somethingAboutChase =
    adam['friends'][1] + ' is wicked  smart (in Boston Accent)'
/*
  Now let's get into the meat and potatoes of development: functions.
  Functions are a set of instructions that are executed when called.
  Let's first create our first function!
*/

  function canAdamDrive(object) {
    return object['legalToDrive']
  }

  // canAdamDrive(adam) => true

/*
  That was easy enough. But that is such a simple function.
  Let's create a function that does a bit more. Let's count how
  many friends we have. Not in real life, just the number in the array
  we have.
*/

  function countFriends(array) {
    var count = 0
    for (var i=0; i < array.length; i++) {
      count++
    }
    return count
  }

  // countFriends(adam['friends']) => 4

  /*
    That's all well and good but now to the difficult part:
    Actually seeing the output.
    We have a set of functions that are available to us to do just that
    and they come from the DOM API. API is a short fancy acronym that
    stands for Application Programming Interface. In laymen's terms
    an API tells us what instructions we have to use it. So let's use
    the DOM API to tell the world who we are because we are proud
    and we want the world to never forget who we are and where we came
    from! Okay, let me settle down and get to the business at hand.
  */

  // First let's put our name at the top of the HTML page. To do that
  // we will create an header element and append it to the DOM. You'll see.

  var pageHeader = document.createElement('h1')
  pageHeader.textContent = myName
  document.body.appendChild(pageHeader)

  // Nice job! Now let's try and describe myself in a paragraph element

  var paragraph = document.createElement('p')
  paragraph.textContent =
    'I am ' + myAge + ' years old and I have '
    + countFriends(adam['friends']) + ' friends'
  document.body.appendChild(paragraph)

  // Cool! Now we have a webpage, but it's not that dynamic.
  // Let's create a list of our friends using a function.

  var list = document.createElement('ul')
  for (var i=0; i < adam['friends'].length; i++) {
    var item = document.createElement('li')
    item.textContent = adam['friends'][i]
    list.appendChild(item)
  }
  document.body.appendChild(list)

  /*
    Wow! You are just blowing me away with your coding skill.
    Are you sure you have only been doing this for 30 minutes?
    We can do one better. Let's add some logic that makes the site
    a color based on whether you are old enought to drive.
    If you can drive, your color is goldenrod.
    If not, your color is lightcoral
  */

  if (oldEnoughToDrive)
    document.bgColor = 'goldenrod'
  else
    document.bgColor = 'lighcoral'

  /*
    Man that is something. You just created a whole website
    using nothing but the JavaScript programming language.
    Pretty neat, huh?
    Now you know that you can do many different things to change the DOM.
    p5js works in exactly the same way. It uses functions to create shapes
    and other figures all with the same technology we have here.
    Let's use those functions to make some shapes!
  */

  /*
    To begin we need to setup our canvas.
    A canvas is much like a painters canvas.
    It gives us the medium we need to be able to draw.
  */

  function setup() {
    createCanvas(200, 200)
  }

  /*
    Now we that we have our canvas we can begin to add
    some shapes. For example an elipses.
  */

  function draw() {
    ellipse(100, 100, 100, 100)
    rect(30, 20, 55, 55)
    triangle(30, 75, 58, 20, 86, 75)
  }

  /*
    You want to get really funky?! Let's blow your mind with this spectacle.
  */

  /*
  function setup() {
    createCanvas(640, 480);
  }

  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255, 0 , 0);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }
  */

  // Let's play pictionary!
