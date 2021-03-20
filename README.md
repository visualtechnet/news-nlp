# News NLP by Mark Guerrero

## Project Instructions

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called MeaningCloud has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started

Clone the project first then remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

Create an .env file then put in your API_ID and API_Key that you receive from the MeaningCloud API. Note the API will be in the server side. See instructions below

API_ID=
API_KEY=

## Setting up the API

The MeaningCloud API is perhaps different than what you've used before. It has you install a node module to run certain commands through, it will simplify the requests we need to make from our node/express backend.

### Step 1: Signup for an API key
First, you will need to go [here](https://www.meaningcloud.com/developer/login). Signing up will get you an API key.

### Step 2: Read the Documentation
Full documentation of the API can be found [here](https://www.meaningcloud.com/developer/apis)

### Step 3: Environment Variables
Next we need to declare our API keys, which will look something like this:
```
// set aylien API credentias
var apiKey = process.env.API_KEY;
```

### Step 5: Using the API

We're ready to go! The API has a lot of different endpoints you can take a look at [here](https://www.meaningcloud.com/developer/apis). And you can see how using the SDK simplifies the requests we need to make.

## After the MeaningCloud API

Once you are hooked up to the MeaningCloud API, you are most of the way there! Along with making sure you are following all the requirements in the project rubric in the classroom, here are a few other steps to make sure you take.

- Parse the response body to dynamically fill content on the page.
- Test that the server and form submission work, making sure to also handle error responses if the user input does not match API requirements.
- Go back to the web pack config and add the setup for service workers.
- Test that the site is now available even when you stop your local server

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.

Hosted here
[https://objective-swanson-8e78f6.netlify.app/](https://objective-swanson-8e78f6.netlify.app/)
