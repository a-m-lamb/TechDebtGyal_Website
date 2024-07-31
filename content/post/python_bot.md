---
title: 'Introduction to Python: Build Your First Bot With Selenium'
date: 2024-03-05T11:56:00.000-08:00
draft: false
url: /2023/11/introduction-to-python
author: Adriana Lamb
thumbnail: "/images/career.png"
tags: 
- Programming
- Python
- Bot Development

---

Python holds a special place in my programming arsenal. Its simplicity and ease of use make it an ideal choice for a wide range of projects. While I wouldn't call myself a Python master, I've found it incredibly handy for quickly scripting tasks and building bots on the go.

In this tutorial, I'll walk you through creating a Python bot using Selenium. If you're unfamiliar, Selenium is a powerful browser automation tool that's perfect for web scraping and testing.

But before we dive into the code, let me share some thoughts. If you've been considering Selenium for your projects, I recently wrote a blog post on browser automation with Golang that you might find interesting.

Now, let's get down to business. In this tutorial, we'll focus on building a Python bot that scrapes tech articles from Google News and emails them to you using the Gmail API.

Before we start coding, here's what you'll need:

1. Python installed on your system.


2. Selenium library installed (`pip install selenium`).


3. Chrome WebDriver installed.


4. Gmail API set up with credentials.


5. Basic knowledge of Python.

![alt text](/images/career.png)


Let’s also take note of the versions of this software that I’ve been utilizing. 

* Python 3.12.3​
* pip 24.0


In today's fast-paced world, staying updated with the latest tech news is crucial. But who has the time to browse through countless articles? That's where our Python bot comes in.

This bot will scrape tech articles from Google News, compile them, and send them to your inbox. We'll cover everything from setting up Selenium to sending emails using the Gmail API.

Now, let's walk through the code. And if you need to do any copy and past action, no worries! You can pull from my repo here (https://github.com/a-m-lamb/Into_to_Python). 

## What is Selenium?

Selenium is a popular browser automation tool used for testing web applications. It allows you to interact with web elements and perform actions like clicking buttons and entering text.

## Setting Up the Environment

First, we'll import the necessary libraries:

```python

from selenium import webdriver

import time

from gmail import gmail_authenticate, send_message

```

Next, we'll initialize the Chrome WebDriver and navigate to Google News:


```python

driver = webdriver.Chrome()

driver.get('https://news.google.com/search?q=programming')

time.sleep(2)

driver.maximize_window()

```

Be sure to add your unzipped driver file in the root of your project while also ensuring you’re utilizing the driver that corresponds with both the browser type (e.g.: Firefox or Chrome) and the version of the browser. If the versions don’t match, the error in the command prompt will point you in the right direction. 

[![](./bundle/building.png)


## Scraping Articles

We'll extract URLs of articles from the Google News page:

```python

article_urls = []

for x in range(1, 4):

    element = driver.find_element('xpath', '//*[@id="yDmH0d"]/c-wiz/div/main/div[2]/c-wiz/c-wiz['+str(x)+']/c-wiz/article/div[1]/div[1]/a')

    url = element.get_attribute("href")

    article_urls.append(url)

```

Next, we'll fetch article content and store it:


```python

articles_content = []

for url in article_urls:

    driver.get(url)

    time.sleep(2)

    c = build_dictionary(url)

    articles_content.append(c)

```

## Sending Email

Finally, we'll compose an email and send it using Gmail API. Check out this article to get the necessary steps configured (configuration.json + Gnail API ) before making the Gmail authentication calls. Python quickstart  |  Gmail  |  Google for Developers 


```python

count = 1

msg = "Hey Adriana!\n\nYou should check out these articles today.\n\n"

for article in articles_content:

    msg += str(count) + ") " + article.get("title") + ": " + article.get("description") + "\n\n" + article.get("url") + "\n\n"

    count += 1

service = gmail_authenticate()

send_message(service, "adriana.michelle.long@gmail.com", "DAILY TECH ARTICLE", msg)


``` 

If you receive an email with the details you scrapped from google news, congratulations, you have completed this tutorial and are now equipped with the necessary skills to begin your journey in Python programming. 

From HTML and DOM manipulation to SEO strategies, Google Cloud, external APIs, and browser automation with Selenium, you now have a solid foundation to build upon. So go forth and create something amazing!