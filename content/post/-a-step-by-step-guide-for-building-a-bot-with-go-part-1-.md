+++
title = "A Step-by-Step Guide for Building a Bot with Go (Part 1)"
date = "2023-05-03T18:25:00.121-07:00"
tags = [
 "Programming",
 "tutorial",
 "go",
 "Programming Tutorial"
]

thumbnail = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrJm8U_FrfHXituvnkpyoU07bndgUl1M4YIjJUoNxeCrhHiDy4bel1I60gXypTAJFkV1pdogPhphZp-Buj6MC8_HD3RSeDUcPYDAFWmdP61pImxxwsglMx_Tm0JZ0XfbwxT196_6M1eVI27YsqjzqihYJRfMFxRt-W7DUACWnVyxOHP3ArQMFIxxX2vQ/w640-h360/How%20to%20Automate%20the%20Browser.png"
+++

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrJm8U_FrfHXituvnkpyoU07bndgUl1M4YIjJUoNxeCrhHiDy4bel1I60gXypTAJFkV1pdogPhphZp-Buj6MC8_HD3RSeDUcPYDAFWmdP61pImxxwsglMx_Tm0JZ0XfbwxT196_6M1eVI27YsqjzqihYJRfMFxRt-W7DUACWnVyxOHP3ArQMFIxxX2vQ/w640-h360/How%20to%20Automate%20the%20Browser.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrJm8U_FrfHXituvnkpyoU07bndgUl1M4YIjJUoNxeCrhHiDy4bel1I60gXypTAJFkV1pdogPhphZp-Buj6MC8_HD3RSeDUcPYDAFWmdP61pImxxwsglMx_Tm0JZ0XfbwxT196_6M1eVI27YsqjzqihYJRfMFxRt-W7DUACWnVyxOHP3ArQMFIxxX2vQ/s1280/How%20to%20Automate%20the%20Browser.png)

  

  

When I was just starting out in programming, I wanted to work on projects that were more stimulating. My approach to learning was to craft projects that made technology relevant and exciting for me. Reading books and taking courses will only get you so far; the rest is all self-driven. This is how bots and data scraping caught my attention. Programming became more than a job - it became an art form. If you can make a working bot, then you probably have the skills necessary for most tech jobs as a programmer.

  

In that spirit, I'm going to teach you the basics of programming a bot to run on your local machine. This is the first article in my bot series. Generally speaking, we'll be using selenium for this project.

  

**A caveat: please be mindful when using selenium. This is purely for educational purposes. Plenty of websites and networks enforce strict policies to discourage data scraping, which they may consider akin to hacking even if you intend no harm such as automating likes and follows.**

  

Selenium is a powerful and popular open-source automation tool that can be used to automate web browsers. It comes with a suite of tools designed to make web testing, scraping, and any other routine tasks much easier.

  

This amazing tool allows you to interact with browsers like Google Chrome, Microsoft Edge, and Mozilla Firefox using programming languages like Python, Java, C#, and Go. With Selenium, you can write scripts that allow you to click on buttons and links, fill out forms, and navigate between pages – all without lifting a finger!

  

The way Selenium works is by interacting with the Document Object Model (DOM) of any given web page. The DOM is made up of HTML elements that act as a hierarchical structure. By providing a range of APIs for simulating user actions (clicking links and buttons) and extracting information from the page (text and data), Selenium easily automates those tedious tasks.

  

**So, here's a demonstration of how you can begin building a Selenium bot with Golang. Also, feel free to pull down the code base [here.](https://github.com/a-m-long/bubble/tree/main)**

  

Let's start off with creating a new directory. I'm naming mine Bubble because I thought it would be a cute name for a bot. And I guess I put a little thought into it because Bubble's ultimate purpose is to keep me in my own personal bubble, so I don't have to manually search though the web to get certain information.

  

So, we can create a file named bubble.go (you can really name it whatever) and add the main function like this.```


package main

func main() {

}

```

  

To generate the module file for your dependencies, type go mod init bubble.go and then execute go mod tidy. The content of the module file will depend on the version of Go being used, but it should look something like this:

```

module bubble.go

go 1.17

```

  

  

Our bot will need a webdriver to navigate through the browser in the same way a human would.

  

To begin, you'll have to get the chromedriver (or any other driver you prefer) and put it into your directory. You can download the correct version that corresponds to your Chrome browser version and operating system. ([click here for the link](https://chromedriver.chromium.org/downloads))

  

Once downloaded, you can extract the zip into your project directory.

  

In order to implement the webdriver, we will need to install the selenium package. We can do so by executing the following commands:

```

go get -u github.com/tebeka/selenium
go get -u github.com/tebeka/selenium/chrome

```

  

We can then import the package in our program as follows:

```

import (
"github.com/tebeka/selenium"
"github.com/tebeka/selenium/chrome"
)
```

  

You'll see the dependencies added to the go.mod file, as well as to the larger go.sum file. If you read my article related to [Software Composition Analysis (SCA)](https://techdebtgyal.blogspot.com/2023/03/diving-into-dependency-forest-with.html), you can gain a better understanding of go dependencies and how you can manipulate them for security reasons.

  

With the package imported, we can now set up the webdriver by creating a Selenium WebDriver using chrome. The code to do this is as follows:

```

func main() {

//create a webdriver instance
driver, err := selenium.NewChromeDriverService("./chromedriver",4444)
    if err != nil {
        panic(err)
    }
    defer driver.Stop()

//add custom driver capabilities as a chrome driver
    caps := selenium.Capabilities{}
    caps.AddChrome(chrome.Capabilities{Args: []string{
        "window-size=1920x1080",
    }})

//create a new remote client with configured capabilities
    wd, err := selenium.NewRemote(caps, "")
    if err != nil {
        panic(err)
    }

//tells the driver to go to desired webpage
    wd.Get("[WHATEVERWEBSITEYOUCHOOSE]")

}
```

We start off by initializing the chrome driver, which we then halt the execution of. Afterwards, we customize the driver by setting the window size. We then create a new client with our pre-configured capacity and url prefix to finally direct it to the website.

  

Provided you downloaded the correct version of your driver, a brief pop up will appear displaying your bot accessing the site you directed it to. If nothing appears on the screen, a message might display in the terminal regarding a problem between your driver and the version of the browser you're using.

  

So now we're at the fun part. Let's say you have to go through a login process. So, without logging in, manually navigate to the main page of the site you're on. Right click on the login button and then right click again on the button tag to copy the xpath which is essentially the exact location of the html component of interest.

  

I wouldn't advise copying the full xpath. This is because the absolute xpath can become invalidated due to HTML modifications after a few days and thus is not always dependable.

  

Let's take a look at this login process. I gave it a minute to load the page so the bot could locate the DOM elements. Initially, the bot looks for the login button. After it identifies the button, it finds the email and password fields. Then, I use the SendKeys() method to enter the user credentials into the form. Lastly, I search for the sign-in popup's login button and use the Click() method to complete the action.

**Note: I must add a warning that the developers are continually updating the user interface, which means that the same xpath you use today might not work tomorrow or even in an hour.**

```

func login(wd selenium.WebDriver) error {
    wd.SetImplicitWaitTimeout(60000000000 * time.Nanosecond)

    loginBtn, err := wd.FindElement(selenium.ByXPATH, "//location of login btn")
    if err != nil {
        return err
    }

    if err = loginBtn.Click(); err != nil {
        return err
    }

    email, err := wd.FindElement(selenium.ByXPATH, "//*[@id=\"email\"]")
    if err != nil {
        return err
    }

    password, err := wd.FindElement(selenium.ByXPATH, "//*[@id=\"password\"]")
    if err != nil {
        return err
    }

    if err = email.SendKeys("your email address"); err != nil {
        return err
    }

    if err = password.SendKeys("your password"); err != nil {
        return err
    }

    loginBtn, err = wd.FindElement(selenium.ByXPATH, "//this is the second login btn")

    if err = loginBtn.Click(); err != nil {
        return err
    }

    fmt.Println("We're logged in!!!")
    return nil
}

```

  

If you understand this, constructing a bot is pretty simple. I use the same process repeatedly to browse through any site. You can see below that I created this search method to search for an element via the search bar. Again, I pause for a minute to let the page finish loading and then find the necessary elements to execute a search. The "\\n" is for the bot to essentially press "enter" on the search bar.  

```

func search(wd selenium.WebDriver) error {
    wd.SetImplicitWaitTimeout(60000000000)

    searchBar, err := wd.FindElement(selenium.ByXPATH, "//location of search box")
    if err != nil {
        return err
    }

    searchBar.SendKeys("stuff\n")

    fmt.Printf("We were able to search")
    return err
}

```

  

In order for the bot to locate the relevant elements, I crafted a scrollForElement() function that incorporates a script that scrolls down the DOM until the element is visible. When the element is found, the bot clicks the element and returns nil.

```

func scrollForElement(wd selenium.WebDriver, parentXpath string, xpath string) error {
    var err error
    script := fmt.Sprintf(`
        var elem = document.evaluate("%s", parent, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        var parent = document.evaluate("%s", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (elem) {
            elem.click();
            return true;
        } else {
            parent.scrollTop = parent.scrollHeight;
            return false;
        }

    `, parentXpath, xpath)

    found := false
    for !found {
        if _, err := wd.ExecuteScript(script, nil); err != nil {
            return fmt.Errorf("failed to execute script: %w", err)
        }

        elem, err := wd.FindElement(selenium.ByXPATH, xpath)
        if elem != nil {
            found = true
        }
        if err != nil {
            return errors.New("Failed to find element")
        }
    }

    return err
}

```

  

We employ this technique in two of our functions: getPosts() and savePost(). Both rely on elements that may not be visible when a page is initially loaded, thus requiring the user to scroll down to uncover them.

  

This savePost() function utilizes the scrollForElement() method to find the element and save it before going to the previous page.

```

func savePost(wd selenium.WebDriver, err error) error {
    saveButton := "//*save button location"

    err = scrollForElement(wd, saveButton, "//page")
    if err != nil {
        fmt.Println(err.Error())
        return err
    }

    wd.Back()
    fmt.Println("Saved the element going to previous page")
    return nil // no error
}


```

  

The getPosts() function takes the final step of selecting 10 elements to save. To make this faster, we utilize threading via creating a go func. Threading is helpful because it makes it possible for us to implement concurrent processing. I set up a for loop that calls both the save() and findElement() functions to store 10 posts.

```

func getPosts(wd selenium.WebDriver) error {
    var wg sync.WaitGroup
    div := 1
    var err error

    for i := 1; i < 10; i++ {
        wg.Add(1)

        go func(i int) {
            defer wg.Done()

            xpath := fmt.Sprintf("//post location", div)
            _, err := wd.FindElement(selenium.ByXPATH, xpath)

            for err != nil {
                div++
                xpath := fmt.Sprintf("//xpath with an increased div count in case there is an ad", div)
                err = scrollForElement(wd, xpath, "//page")
                if err != nil {
                    return
                }
                err = savePost(wd, err)
                if err != nil {
                    return
                }
                fmt.Printf("\nWe have successfully saved a post %d", i)
                div++
            }else{
            post, err := wd.FindElement(selenium.ByXPATH, fmt.Sprintf("//post", div)
            post.Click()
            err = savePost(wd, err)
                if err != nil {
                    return
                } else {
                    fmt.Printf("\nWe have successfully saved a post %d", i)
                    div++
                }
            }
        }(i)
    }

    wg.Wait()
    fmt.Println("\nI think this works")
    return err
}

``````
  

```

Let's take a break right here. We achieved our goal of installing the driver, logging in to a website, and I showed you a simple example of how to save a random post on a page. Here's how I pieced everything together in the main function:

```

import (
    "errors"
    "fmt"
    "sync"
    "time"

    "github.com/tebeka/selenium"
    "github.com/tebeka/selenium/chrome"
)

func main() {

    driver, err := selenium.NewChromeDriverService("./chromedriver", 4444)
    if err != nil {
        panic(err)
    }
    defer driver.Stop()

    caps := selenium.Capabilities{}
    caps.AddChrome(chrome.Capabilities{Args: []string{
        "window-size=1920x1080",
    }})

    wd, err := selenium.NewRemote(caps, "")
    if err != nil {
        panic(err)
    }
    wd.DeleteAllCookies()

    if err := wd.Get("[Website]"); err != nil {
        fmt.Printf("Could not log into site: %s", err)
    }

    if err = login(wd); err != nil {
        fmt.Printf("Could not log into site: %s", err)
    }

    if err = search(wd); err != nil {
        fmt.Printf("Unable to submit search: %s", err)
    }

    if err = getPosts(wd); err != nil {
        fmt.Printf("Failed to get Posts: %s", err)
    }

}

``````
  

``````
Sure, there are more features we could add, but that'll be your job to explore. The second section of this guide will involve us setting up a more official bot that will require you to utilize a popular social media platform's API. 
```