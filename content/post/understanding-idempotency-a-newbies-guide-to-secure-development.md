---
title: 'Understanding Idempotency – A Newbies Guide to Secure Development'
date: 2023-02-24T07:22:00.000-08:00
draft: false
url: /2023/02/understanding-idempotency-newbies-guide.html
tags: 
- Programming
- Programming Tutorial
---

 The concept of idempotency will creep up regularly in your programming career, so it's essential to understand what it is and the significance. Plenty of programmers have passively heard the term--and may have even dropped it from time to time themselves--but many still have little to no idea as to what it means.

Idempotency encompasses a peculiar notion: no matter how many times something is repeated, the result is always the same. It can appear in the form of mathematical equations, algorithms or abstract data structures, but in any case, the theorems remain the same.

  

Despite its ubiquity, few of us fully grasp the concept behind idempotency; rather, it is more an intuitive understanding, an implicit acknowledgement of its existence. And yet, the sheer power of this concept is profound, for it is responsible for so much of programming. For example, when we update a complex system, idempotency ensures that we don't break the program by running the same function twice. Likewise, it is a fundamental part of the reliability and robustness of a program.

  

Because of its ubiquitous nature, idempotency is language-agnostic--meaning the concept is the same no matter the language in use. It can be used to create efficient code or streamline the testing process of a program. Ultimately, no matter the implementation, its efficacy will remain the same: no matter how many times we repeat a certain action, the result will always be the same.

  

To illustrate how this works in practice, consider the following example: a programmer might want to calculate the average of all elements in an array. To do so, they would apply the same method multiple times: summing up all elements and then dividing by the number of elements. As long as this operation is performed in the same way each time, the answer will always remain consistent no matter how many times it is repeated; thus, demonstrating idempotency.

  

```
package main

import "fmt"

func main() {
	array := [5]int{1, 5, 6, 7, 7}
	fmt.Println(average(array))
}

func average(array [5]int) int {
	num := 1
	for _, val := range array {
		num = num * val
	}
	return num / len(array)
}

```

In mathematics an idempotent operation is when you can take the absolute value of a number, and then you take the absolute value of number again, and still get the same result both times (example below). Unlike with programming where operations are done over data structures stored in memory, math-idempotence only applies to functions of one parameter where the parameter type and return type are both numbers. In other words, the literal meaning of idempotency is "of the same power," derived from the Latin idem, meaning same, and Old French potence, meaning power.

  

**E.g.: f(x) = f(f(x)).**

  

A prime example is a matrix, where the square root of any given value is equal to itself. This idea can be used to solve many problems in mathematics and engineering, including optimization and regression analysis.

  

One way to understand idempotency more clearly is to consider an example from everyday life. Suppose you are tasked with finding the average temperature of a room. To do so, you could take readings from each corner of the room and then divide by four. No matter how many times you compute the average temperature (assuming the room stays at a constant temperature), your result will remain unchanged - you can be sure that your calculation is idempotent!

  

Functional Idempotence refers to when a function can be called multiple times with the same parameters, and the result will always be the same. For example, using an ‘if’ statement twice with the same condition will yield the same result each time. After the first execution, all subsequent executions are the same.

```

import "fmt"

func main() {
	fmt.Println(check(10))
}

func check(val int) string {

	if val == 5 {
		return "This will always be the same if val == 5"
	} else {
		return "This will always be the same if val != 5"
	}
}

```

  

Idempotence is important for creating reliable applications, as it ensures that different parts of code will not interfere with each other in unexpected ways. As such, it is important to understand what types of operations are idempotent before writing code so that you can design your program accordingly.

  

The concept of idempotency is important in web application development and web services. In particular, it applies to the concept of HTTP requests, as it helps ensure that a request will yield the same result regardless of how many times it is sent.

  

When talking about HTTP requests, there are 8 HTTP methods, but we can focus on three simple ones: GET, PUT and POST.

  

GET requests are designed to retrieve data from a server without modifying any state. This means that no matter how many times you send the same GET request, you should always get the same result. This is because a GET request does not modify any user data; instead, it just retrieves data from the server. You might not have even triggered a GET request, and the result would still be the same. Because of this, GET requests aren't technically idempotent but rather nullipotent.

  

Nullipotence is when there is an execution with essentially no side-effects. Like in the HTTP GET request example, there is no modification to the data, you are just getting the resource without effecting the database.

  

PUT requests are designed to send data to a server to update specific data within a database. You can send the same request multiple times, but after the initial PUT request, the result will be the same.

  

POST requests are different in that they are used to send data to a server and modify user data or state on the server. The response to a POST request change depending on what you send; this means that if you send the same POST request multiple times, it may not yield the same result twice. For example, if you send a POST request to add an item to your shopping cart twice, then you would expect two items in your cart afterwards – not one! As such, POST requests are not functionally idempotent as they can have varying results depending on when they’re sent.

  

It’s important for developers to understand both functional and non-functional idempotence when designing their applications and writing code so that they can build reliable systems with predictable outcomes. It allows developers to make sure their systems work correctly under many different scenarios without having to spend a lot of time debugging potential issues caused by redundant operations. It also helps ensure that certain types of operations are guaranteed to have a consistent effect regardless of how many times they are called (e.g.: creating/updating/deleting records).