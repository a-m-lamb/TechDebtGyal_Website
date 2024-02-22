---
title: ' What is Function Programming? A Introductory Article to Help the Uninitiated Understand Functional Programming'
date: 2023-04-25T11:01:00.004-07:00
draft: false
url: /2023/04/what-is-function-programming.html
tags: 
- Programming
---

At a recent tech meeting, the idea of functional programming was brought up- a concept that I had only a shallow understanding of.

"What's functional programming?" someone asked. No one wanted to expound on it, so another person timidly suggested, "I guess it means the program has no side effects?" - disregarding that applications written in languages such as Pascal or Scala still generate some kind of result.

  

It became obvious that most people in the group didn't have an extensive knowledge of functional programming. A few participants in the group mumbled through a deficient description of functional programming while using the term within the definition, which simply produced further queries than answers.

  

All things considered, it was unmistakable that this could be an interesting topic to discuss.

  

So, what is functional programming? Scratching the surface, one might say it's a style of programming with the focus of utilizing pure functions to prevent side-effects in the application. Does this mean functional programming is language specific, or can a language typically used for OOP be utilized for functional programming? If so, what makes common functional programming languages optimal for functional programming?

  

If you can answer these questions, then you're in a better position than many who claim to be functional programming experts.

  

Let's start off with the idea of "pure functions" - functions which have no side-effects and return the same output given the same input every time. This means that the function can be used multiple times without having to worry about unintended consequences.

  

Functional programming also features immutable data, meaning that once a value has been set, it cannot be changed (this helps to prevent bugs). Languages such as Haskell or Lisp are often used for functional programming since they naturally support these features.

  

However, OOP languages such as Java or C# can still be utilized for functional programming with libraries and frameworks such as Functional Java or F#. These languages might not offer the same level of code optimization for purely functional applications but can still serve well in many cases.

  

But what does this really mean? Shouldn't our functions be tested and optimized to ensure that they don't produce undesirable results anyway? In what way does carefully written code in an OOP language produce side effects? This here is the huge gaping hole in the typical functional programming definition that left me feeling as if I knew nothing about functional programming.

  

In OOP languages, functions are often "hidden" as part of classes. This makes it difficult to test and debug them since other parts of the class may be interacting with them. In functional languages, functions are isolated from each other, making it easier to test their behavior independently. This also means that changes to one function won't necessarily cause problems in other parts of the system.

  

When considering functional versus object-oriented programming, pros and cons exist for each style. Java or C# are examples of object-oriented languages that have the advantage of encapsulation, which allows specific code snippets to be separated from one another. This may make debugging more challenging, however it also helps create a securer program.

  

On the other hand, functional programming languages tend to be more optimized for writing purely functional applications, which means they can reduce the amount of code required to do certain tasks or make certain operations run faster. This makes them great for data-intensive tasks or applications where performance is key.

  

One downside of functional programming languages is that they require a somewhat steeper learning curve due to their complex syntax and lacking debugging tools. Since these types of languages aren't usually implemented in web development, there is an extreme lack of experienced developers who understand how to actively use them, creating a shortage for those coders who have knowledge on the subject. This might explain why many functional programmers find themselves struggling to define it.

  

I tend to concur with the opinion of [this article](https://medium.com/@shaistha24/functional-programming-vs-object-oriented-programming-oop-which-is-better-82172e53a526) that functional programming is more of a personal preference rather than a superior way of coding. If you're the type of programmer who enjoys discovering the wizardry happening in the background when programming, then you might lean towards functional programming.

  

Still, one might argue that if you're using 3rd party libraries, you're always going to be working with some magic, right?

  

Ultimately though, if you want to get into functional programming, its best to start out with one of the more established functional languages like Haskell or Scala. By doing so you can become comfortable with fundamental concepts like recursion before tackling a hybrid language.

  

**Side Note: I like to stay up-to-date with the latest tech trends for obvious reasons. But I've noticed that many fellow female professionals don't have the same access to resources from their jobs or in their personal lives, which got me thinking of how I could help out. My solution? A group specifically designed to discuss technical topics and open dialogue between women in the industry. Be sure to check back in for updates!**