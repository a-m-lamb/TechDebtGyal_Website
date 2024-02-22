---
title: 'Exploring OpenAI —Will AI Kick us Out of the Job? '
date: 2023-03-21T12:14:00.006-07:00
draft: false
url: /2023/03/exploring-openai-will-ai-kick-us-out-of.html
tags: 
- tutorial
- Programming Tutorial
---

As the demand for programmers with a deep understanding of business needs grows, one may ponder if AI could take the place of many jobs requiring programming-- yielding more efficient code in a much shorter amount of time than humans are capable of.

  

I noticed this while I was having a discussion with a prospective employer. At the time, I wasn't on the hunt for something new, but it helps to freshen up your resume and evaluate yourself against the current industry standard.

  

The hiring manager seemed to value applicants with a good understanding of what customers wanted and strong communication capabilities more than just basic programming skills. This was because their technology had shifted away from coding, requiring developers to use tools that reduce the amount of effort and time required for programming to meet the desired business outcomes.

  

The advancements in AI technology have been quite remarkable in recent years. With machine learning, AI can now make software development significantly easier.

  

This technology can allow developers to write code faster and more effectively by automating parts of the code that would have taken hours or days for a human programmer to complete.

  

So I thought it would be wise to become knowledgeable in one of these technologies and try it out for myself. OpenAI Codex is an AI system that powers GitHub Copilot, a coding assistant service for prevalent IDE softwares such as VSCode. With the worry that there might eventually be a shortage of programming roles in the future, I figured this could help me stay ahead of the game.

  

AI can detect bugs in code before they even become an issue, saving time and money. It can also be used to detect malicious code or security threats—skipping the time and effort of vulnerability remediation.

  

And when combined with natural language processing, AI is even capable of understanding instructions given in natural language and then converting it into code that a computer will understand.

  

It is not an unrealistic assumption to think that in the future, machines could handle a lot of the labor-intensive tasks that programmers are currently doing by hand - all while being monitored by experienced personnel.

  

That's why I thought it would be good to become familiar with one of these technologies and try it out myself. I invite you to try these technologies along with me.

  

As in the words of Elon Musk: "if you can't beat them, join them". If automation is what will help pay the bills in the future, then we should learn as much as we can about it. And there's no better reason to try this out than because OpenAI Codex is completely free!

  

Now that we know the basics of AI, let's take a look at how it can be applied to our development tasks. AI can be used to optimize coding efficiency in a variety of ways, from task automation to helping improve existing code.

  

One way AI can help is by converting your comments into executable code. This means that the comments you put into your code can be automatically transformed into working code. This makes it easier to keep an overall understanding of the project while also reducing the time spent manually adding code.

  

Additionally, AI-powered tools like OpenAI Codex are also capable of completely rewriting your existing code in order to optimize performance or add new features. You provide the input and guidelines, and then Codex takes care of the rest.

  

For developers who are looking for additional support beyond simple automation, OpenAI Codex can also provide options for other libraries they can use to improve their existing code and make sure it’s running optimally.

  

This type of automation provides developers with more time that they would otherwise have spent debugging or writing tedious lines of code. It's an incredible technology and one that I'm excited to explore further!

  

So, here's something cool: Translating code from one language to another. I decided to give it a go and convert this function I wrote for a Pinterest bot app that I'm developing.

  

func search(wd selenium.WebDriver) error {

    //\\n simulates a user pressing enter

    search := "breakfast\\n"

    xpath := "//\*\[@id=\\"searchBoxContainer\\"\]/div/div/div\[2\]/input"

  

    wd.SetImplicitWaitTimeout(60000000000)

  

    searchBar, err := wd.FindElement(selenium.ByXPATH, xpath)

    if err != nil {

        return err

    }

  

    searchBar.SendKeys(search)

    fmt.Printf("We were able to search")

    return nil

}

  

  

If only it worked...I guess this is to be expected because the AI isn't aware of the imports used for this application.

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhQKBr-UdUhuT5OuV9g26KjEGT1-4eTLxxKVwerVpvVePMilw_m6TD-vEdOTspQ7eT00XbweFz4ZLIaYNkpH7Xas6CzBBV6TYdSjnOCcWgd20TadSdI8Ljv8rZihaZ_5Z8KCjfkbVCDMneIFiaFSbK9jwlDHLoVMwozKn5HA-j98PZExYLloEIFI_eP3w=w640-h582)](https://blogger.googleusercontent.com/img/a/AVvXsEhQKBr-UdUhuT5OuV9g26KjEGT1-4eTLxxKVwerVpvVePMilw_m6TD-vEdOTspQ7eT00XbweFz4ZLIaYNkpH7Xas6CzBBV6TYdSjnOCcWgd20TadSdI8Ljv8rZihaZ_5Z8KCjfkbVCDMneIFiaFSbK9jwlDHLoVMwozKn5HA-j98PZExYLloEIFI_eP3w)

  

So, let's try something a bit more straight forward...

  

package main

  

import (

    "fmt"

)

  

func main() {

    fmt.Sprintf("this seems to work")

    test1(30)

}

  

func test1(x int) string {

    if x != 10 {

        return "This int is not 10"

    }

    return "This int is 10"

}

  

  

And after two attempts, it looks like it worked. Amazing...

[![](https://blogger.googleusercontent.com/img/a/AVvXsEipjOPiecmUnEBksF-2vBPDu4clGVJVyx67pzZ60nAuDLTxPw-nS4yBTiK9j_IcgM8CIMxdX_ScMIySOHV4uF1gbLadIvykY0KhCxD96Lx29zrjRwS4j0_w4PsCrunrWo_rYlRgCVNtckksH8Q40bQ2qilSItEjJqIi_U-jVZQncX_8socI86xYkLDxiQ=w640-h531)](https://blogger.googleusercontent.com/img/a/AVvXsEipjOPiecmUnEBksF-2vBPDu4clGVJVyx67pzZ60nAuDLTxPw-nS4yBTiK9j_IcgM8CIMxdX_ScMIySOHV4uF1gbLadIvykY0KhCxD96Lx29zrjRwS4j0_w4PsCrunrWo_rYlRgCVNtckksH8Q40bQ2qilSItEjJqIi_U-jVZQncX_8socI86xYkLDxiQ)

  

  

OpenAI has plenty of interesting features. Another is this Explain Code feature which seems to have a lot of potential, but it can take some time to get it working. This issue has more to do with the server acting wonky than the actual AI technology bugging out. I honestly think it did a pretty good job.

  

With the initial block of code from my selenium Pinterest bot, I received this output:

  

""" **Here's what the above class is doing: 1. We're creating a new webdriver 2. We're opening the browser 3. We're navigating to the website 4. We're searching for breakfast 5. We're closing the browser**

  

Sure, we never executed steps 1,2, and 5, but at least the AI understands the gist of what's going on here.

  

Overall, OpenAI Codex has been a great learning experience for me so far. With its advanced capabilities and free access, this tool has helped me gain a better understanding of natural language processing and code completion algorithms—all things that will become increasingly important in the future as more jobs are taken over by AI-driven automation.

  

Does this mean all of our jobs are in jeopardy? That our 6-figure cushy tech positions will be a thing of the past? I doubt it. As you can see, this technology is still in its infancy--requiring skilled professionals to manage and test it before any code can reach production.

  

I do foresee this technology advancing to the point where the high demand for software engineers and the stereotypical nerd developer will diminish. Instead, there will be an increasing demand for creative thinkers to solve essential problems.

  

### But on the bright side...

  

Utilizing AI's processing power and data analysis capability may be the key to unlocking our collective intellect, allowing us to work together more effectively in solving some of humanity's most difficult challenges. Freeing up mental energy for creative problem-solving can be made possible by AI's powerful computing capabilities and its ability to quickly sift through large amounts of data.

  

With a long-term outlook on technology and work, we can find hope and optimism in finding solutions to complex issues while giving ourselves the chance to think outside the box and conduct experiments.

  

At the end of the day, OpenAI Codex is just another tool that can assist us in becoming better coders. It fills a gap between a programmer’s knowledge and their ability to solve complex problems—providing guidance when we need it most without taking away from our creativity or autonomous learning capabilities.