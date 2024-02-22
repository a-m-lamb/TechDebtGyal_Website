---
title: 'Beginner''s Guide: HTML, CSS, and JavaScript Tutorial for Building Web Pages'
date: 2023-06-08T14:12:00.002-07:00
draft: false
url: /2023/06/beginners-guide-html-css-and-javascript.html
thumbnail: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYYyo7LeYxowS-DLUVgXRUlQkjz8CDHPc4iD9jq94t9WooMQ-b1V6_dkbY3Wqs78rzGL2ODsgaX2qIX4NT6t2HIXMNhSCFC17cwPblg78fagX2vIfx-EM1gqgBbkKNh3fG2p5A2RxAcCjyDUqu8JTj4w9rxN8yk_lc4LxC2NrtOOTzxoUAIof75erwNQ/w640-h640/HTML,%20CSS,%20and%20JavaScript.png"
tags: 
- JavaScript
- Programming
- CSS
- Front-end Development
- HTML
- Programming Tutorial
---

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYYyo7LeYxowS-DLUVgXRUlQkjz8CDHPc4iD9jq94t9WooMQ-b1V6_dkbY3Wqs78rzGL2ODsgaX2qIX4NT6t2HIXMNhSCFC17cwPblg78fagX2vIfx-EM1gqgBbkKNh3fG2p5A2RxAcCjyDUqu8JTj4w9rxN8yk_lc4LxC2NrtOOTzxoUAIof75erwNQ/w640-h640/HTML,%20CSS,%20and%20JavaScript.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYYyo7LeYxowS-DLUVgXRUlQkjz8CDHPc4iD9jq94t9WooMQ-b1V6_dkbY3Wqs78rzGL2ODsgaX2qIX4NT6t2HIXMNhSCFC17cwPblg78fagX2vIfx-EM1gqgBbkKNh3fG2p5A2RxAcCjyDUqu8JTj4w9rxN8yk_lc4LxC2NrtOOTzxoUAIof75erwNQ/s1080/HTML,%20CSS,%20and%20JavaScript.png)

  

  

  

  

In the modern, tech-savvy world we live in, having an understanding of HTML, CSS, and JavaScript is essential for crafting web pages or pursuing a career in web development. This tutorial offers a detailed overview of these core technologies, designed to help those with limited knowledge or experience in HTML. So, let's dive in and explore!

  

Installations:
==============

So personally, I prefer to customize my html components on my own personal server, so everyone isn't looking at each change I make on the web.I use Python SimpleHTTPServer for reasons that the name would suggest. SimpleHTTPServer is a basic web server module included in Python's standard library. It is primarily designed for serving static files over HTTP. It provides a simple way to create a basic web server for development or quick file sharing purposes.

###   

**So, to begin...**
===================

  

### 1\. Install a Package Manager:

  

For Windows, you can use Chocolatey as a package manager. To install Chocolatey, open an elevated Command Prompt (run as administrator) and execute the following command:

   @powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\\chocolatey\\bin"

  

For other platforms like macOS or Linux, you can use the respective package manager such as Homebrew for macOS or apt for Ubuntu.

  

### 2\. Install Python:

  

For Chocolatey (Windows): Open an elevated Command Prompt and run the following command to install Python:

  

   choco install python

  

For Homebrew (macOS): Open Terminal and run the following command:

  

   brew install python

  

For apt (Ubuntu or Debian-based Linux): Open Terminal and run the following command:

  

   sudo apt update

   sudo apt install python3

  

### 3\. Install pip (Python package manager):

On most systems, pip comes pre-installed with Python. To verify if pip is installed, open a

  

Command Prompt or Terminal and run:

   pip --version

If pip is not installed or you need to upgrade it, run the following command:

   py -m ensurepip --upgrade

  

### 4\. Python SimpleHTTPServer (Python 3):

  

Python SimpleHTTPServer is included in Python 2+'s standard library.

  

So, if you have Python 3 installed, you already have SimpleHTTPServer...

To start the SimpleHTTPServer, navigate to the directory where you want to serve files using Command Prompt or Terminal, and run:

  

python -m http.server

The server will start and serve files from the current directory on port 8000. You can access it in your web browser using http://localhost:8000.

  

  

Alternatively...
================

I highly recommend you get started with running applications on your own server and having these tools installed on your device (it’s an impressive addition to your resume after all!) but if you want to start somewhere else, CodePen is a great option. CodePen is an online code editor and social development platform designed for web developers. It provides a user-friendly platform where developers can write, test, and demonstrate HTML, CSS, and JavaScript code snippets or full web projects.

  

If you are a front-end developer, you should definitely have a CodePen account so that you can easily network and show off your skills. Here’s a tiny snippet of the blogger codebase I use for my homepage.

See the Pen [Untitled](https://codepen.io/a-m-long/pen/oNaOqrV) by Michelle ([@a-m-long](https://codepen.io/a-m-long)) on [CodePen](https://codepen.io).

  

  

  

I choose not to pay to keep my code private on CodePen, which is why I save my work via the local server discussed above. However, CodePen is still a fantastic way to start out flying if you are brand new to coding and just want to see what HTML, CSS, and JavaScript are all about.

  

It’s also a great space to look for some spark of inspiration. The CodePen community includes many talented front-end developers who can help make sure that your coding practices and styling are modern and fresh.

  

To the Basics
=============

Let's create a basic div component, we'll go with the classic: "Hello, World" heading.

  

In case you care to know, the phrase "Hello, World!" has a long-standing tradition in the world of programming and is often used as the first program or introductory example when learning a new programming language. The origins of using "Hello, World!" can be traced back to the seminal book "The C Programming Language" by Brian Kernighan and Dennis Ritchie, published in 1978.

  

In the book, the authors included a simple introductory program in the C programming language that printed the text "hello, world" to the console. This example was used to illustrate the basic structure of a C program and demonstrate how to output text to the screen.

Since then, "Hello, World!" has become a standard and popular convention in programming tutorials, textbooks, and beginner programming exercises across various languages. It serves as a simple starting point to introduce the syntax, structure, and basic functionality of a programming language.

  

  

### Format the HTML Components:

  

### <div class="container" id="container"></div>

  

All additional tags should be held within this container div to ensure optimal responsiveness.

  

<div class\="container" id\="container"\>

    <h1 id\="h1"\>Hello, World</h1\>

    <p\> I'm just typing random stuff here...</p\>

</div\>

  

### Let's style this with CSS:

  

body {

  background-color: lightblue;

}

  

h1 {

  color: red;

}

  

  

### Now let's add some JavaScript logic:

  

  

document.addEventListener('DOMContentLoaded', function () {

  

    var h1 \= document.getElementById('h1')

    if (h1) {

        h1.addEventListener('click', function () {

            alert('You\\'re clicking')

        });

    }

  

})

  

So, if you were to paste this code in CodePen, you should see something like this:

See the Pen [Hello, World](https://codepen.io/a-m-long/pen/QWJwqYd) by Michelle ([@a-m-long](https://codepen.io/a-m-long)) on [CodePen](https://codepen.io).

The code anticipates the DOM loading, identifies the element with the ID "h1", and adds a click event listener. Upon clicking the element, an alert box appears presenting the message "You're clicking".

  

This code is relatively straightforward, but it will ignite your journey in comprehending how an html page can be manipulated. Feel free to dig into W3 Schools and get acquainted with various html tags (HTML Reference at w3schools.com).

  

So, How Responsive Is Your Page?
================================

Now, you may be wondering why I would shy away from using pixels when building HTML components. It's totally okay to use pixels for sizing, but if you size the component based on its parent's percentage, you're less apt to have an issue with responsiveness.

  

In HTML and CSS there are two primary units of measurement to choose from when defining sizes and dimensions--percentage (e.g., 50%) or pixels (px). The ideal choice between either really depends on the exact purpose of the element and the desired outcome.

  

Here are some reasons why percentages might be preferred over pixels in certain scenarios:

  

1\. Responsive Design: Percentages are commonly used in responsive web design to create fluid layouts that adapt to different screen sizes and devices. By using percentages for widths, heights, and margins, elements can dynamically adjust their size relative to the parent container or viewport, resulting in a more responsive and flexible design.

  

2\. Relative Sizing: Percentages allow for relative sizing, which means elements can scale proportionally based on their parent container or surrounding elements. This is useful when you want the size of an element to be relative to its context, allowing for more consistent and adaptable designs across different screen resolutions.

  

3\. Fluid Grid Systems: Percentages are integral to creating fluid grid systems, where the layout is based on proportional divisions. This approach allows for the creation of grid-based designs that automatically adjust to different screen sizes, providing a consistent and harmonious layout.

  

4\. Accessibility: Using percentages can improve accessibility by allowing users to adjust the text size or zoom level in their web browsers without breaking the layout. Elements that are sized in percentages will scale accordingly, ensuring that the content remains readable and usable at different zoom levels.

  

5\. Device Independence: By utilizing percentages, designs become less dependent on specific pixel values, making them more adaptable to different devices with varying pixel densities. This helps ensure that the design remains visually consistent and readable across different devices and screen resolutions.

  

The choice between using percentage or pixels depends on the design requirements, responsiveness goals, and the specific needs of the elements being styled. A combination of both units may be used in different parts of a web page to achieve the desired layout and responsiveness, but I rarely find the use of pixels to be necessary and if you're not careful, you'll end up with an application that looks beautiful on your laptop and horribly distorted on your mobile phone.

  

A few concepts to review:
=========================

  

### 1\. HTML (Hypertext Markup Language):

HTML forms the backbone of any web page. It provides the structure and defines the content within the page. Here are the key concepts to grasp:

  

Structure and Syntax: Understand the basic structure of an HTML document, including the doctype declaration, \`<html>\`, \`<head>\`, and \`<body>\` tags. Learn how to create elements and use tags to define headings, paragraphs, lists, links, images, and more.

  

Attributes and Styling: Explore how to add attributes to HTML elements, such as the \`class\` and \`id\` attributes for styling and manipulation. Familiarize yourself with HTML entities for displaying special characters.

  

Forms and Input: Discover how to create forms and collect user input using various input types like text fields, checkboxes, radio buttons, and dropdown menus.

  

Semantic HTML: Learn about semantic elements like \`<header>\`, \`<nav>\`, \`<main>\`, \`<section>\`, and \`<footer>\`, which provide meaningful structure to your web page and enhance accessibility.

  

### 2\. CSS (Cascading Style Sheets):

CSS brings life to your web page by styling and formatting HTML elements. Here's what you need to know:

  

Selectors and Declarations: Understand how CSS selectors target specific HTML elements and how declarations define the styles. Learn about various selector types, including element selectors, class selectors, and ID selectors.

  

Box Model and Layout: Grasp the concept of the box model, which defines the spacing and dimensions of elements. Explore how to control layout using properties like \`margin\`, \`padding\`, \`display\`, and \`position\`.

  

Typography and Colors: Learn how to customize fonts, sizes, and styles using CSS properties like \`font-family\`, \`font-size\`, \`font-weight\`, and \`color\`. Discover ways to incorporate colors through hexadecimal codes, named colors, or RGB values.

  

CSS Flexbox and Grid: Dive into modern CSS layout techniques like Flexbox and Grid, which provide powerful tools for creating responsive and dynamic layouts.

  

### 3\. JavaScript:

JavaScript is a dynamic programming language that adds interactivity and functionality to web pages. Here's an overview:

  

Variables and Data Types: Get familiar with declaring variables, assigning values, and understanding different data types like strings, numbers, booleans, arrays, and objects.

  

Functions and Control Flow: Learn how to define and call functions to execute reusable blocks of code. Explore control flow statements like \`if\` and \`else\` for conditional logic and loops like \`for\` and \`while\` for repetitive tasks.

  

DOM Manipulation: Discover how JavaScript interacts with the Document Object Model (DOM) to dynamically manipulate web page elements, such as updating text, changing styles, handling events, and creating interactive features.

  

External Scripts and Libraries: Explore how to include external JavaScript files and leverage popular libraries like jQuery for simplified DOM manipulation or other frameworks for advanced web development.

  

By taking the plunge into the world of HTML, CSS, and JavaScript, you’ve taken an empowering step towards mastering Web Development. Just remember, practice really does make perfect! So keep tinkering, creating projects, and delving into external resources to further your skills. Embrace this journey with passion and soon you’ll be crafting stunning webpages like a pro.

  

**Happy coding!**