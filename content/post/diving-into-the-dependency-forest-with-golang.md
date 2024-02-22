---
title: 'Diving into the Dependency Forest with Golang'
date: 2023-03-08T06:50:00.000-08:00
draft: false
url: /2023/03/diving-into-dependency-forest-with.html
thumbnail: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimTnSwV-RU0ldaRKVIemUuHLBrPFZVSS__Y0aXlIysCLZMp2af8EA0-cnSwvKHUtxIOmCUMji4BdI_JA7OLaLzQ3RXGFVVmXFritKZV2p1HOpZRPWnibzJyYjGW8DW8GU-Wj17t9vE1u-TLi5vx5K_ALCtsJCF5KSlJw21AwGm7y4WSYR0bkLZcFcHMw/s320/32UYoNcDz98B1suRKuMm--3--nyz7h.jpg"
tags: 
- Programming
- go
- Go Security
- Programming Tutorial
---

So, this is the first post of what I foresee to be an entire chapter of working with Go as it relates to remediating vulnerabilities. This particular post will focus on patching vulnerabilities related to Software Composition Analysis- an important task to perform regularly in order to avoid a lot of technical debt later on (Seriously, Handle it now!).

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimTnSwV-RU0ldaRKVIemUuHLBrPFZVSS__Y0aXlIysCLZMp2af8EA0-cnSwvKHUtxIOmCUMji4BdI_JA7OLaLzQ3RXGFVVmXFritKZV2p1HOpZRPWnibzJyYjGW8DW8GU-Wj17t9vE1u-TLi5vx5K_ALCtsJCF5KSlJw21AwGm7y4WSYR0bkLZcFcHMw/s320/32UYoNcDz98B1suRKuMm--3--nyz7h.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimTnSwV-RU0ldaRKVIemUuHLBrPFZVSS__Y0aXlIysCLZMp2af8EA0-cnSwvKHUtxIOmCUMji4BdI_JA7OLaLzQ3RXGFVVmXFritKZV2p1HOpZRPWnibzJyYjGW8DW8GU-Wj17t9vE1u-TLi5vx5K_ALCtsJCF5KSlJw21AwGm7y4WSYR0bkLZcFcHMw/s512/32UYoNcDz98B1suRKuMm--3--nyz7h.jpg)

Programs are made up of numerous components--elements that can go unnoticed because many developers carelessly import dependencies without being aware of vulnerabilities that might exist within them.

  

Many teams don't know the dangers of leaving software components vulnerable to attack or just don’t put enough emphasis on code analysis. In actuality, old or weak dependencies can lead to disastrously expensive consequences.

  

This is where a Software Composition Analysis (SCA) scan can provide assistance. Through this process, we can detect potential vulnerabilities in open source packages, understand the reasons why a specific dependency is vulnerable, and potentially acquire directions for remediation.

  

SCA is a process that uses automated tools to analyze the source code of an application and report any possible security-related vulnerabilities. This is one of the most important steps you can take as a developer to ensure your code and applications are secure from malicious attacks. SCA can also help identify common coding errors that lead to serious issues such as memory leaks, buffer overflows, and race conditions.

  

By running SCA, you’re able to detect flaws in dependencies before they’re deployed into production environments, allowing you to catch issues before they become a significant problem. Additionally, SCA helps maintain consistent quality and preserves trust for both you and your users.

  

At its core, SCA is all about improving security posture by not only scanning for potential vulnerabilities but also ensuring compliance with industry-standard regulations like GDPR or ISO/IEC 27001. By regularly running these tools on all of your applications and codebases, you can rest assured that your applications have been tested against these standards.

  

At first glance, SCA scanning might appear to be more intimidating than when working with other projects such as with maven dependency projects where excluding vulnerabilities within a parent dependency might appear to be more intuitive, but after working with Go for some time, I find it to be a lot easier to work with compared to maven projects.

  

I was initially annoyed with the fact that the go mod graph command wasn't nearly as great as the command for getting a view of the dependency tree like with maven. Mostly because go mod graph practically just gives you what you can already see in the go.sum file.

  

So, the workaround for this is to either utilize tools such as deptree(GitHub - vc60er/deptree: show Golang dependence like tree) to uncover the parent dependency of a dependency of interest, or to create a script that essentially does the same thing.

  

I find that deptree is a pretty good tool, but sometimes it doesn't work, so I settled with just building a script to find the parent of the dependency of interest.

  

But after spending time remediating vulnerabilities, I noticed it wasn't a huge deal considering the nature of Go. You don't have to know the parent dependency to exclude a dependency within it. You can actually directly exclude the child--which in some way feels less secure, but we'll get into that a little latter.

  

If you need to make use of a specific version of a dependency, you can specify the non-vulnerable version, while excluding all other versions of the same vulnerability.

  

Let's say we're creating a selenium program with Go language. We've listed the selenium and semver parent dependencies in the go.mod. We can observe the bunch of dependencies associated with the parent dependencies in the go.sum. We can exclude the version of the xgbutil library from the go.sum and run go mod tidy in order to get the new version of it (if needed).

```

module main.go

go 1.17


require (
	github.com/BurntSushi/xgbutil v0.0.0-20190907113008-ad855c713046 // indirect
	github.com/blang/semver v3.5.1+incompatible // indirect
        github.com/tebeka/selenium v0.9.9
)

exclude github.com/BurntSushi/xgbutil v0.0.0-20160919175755-f7c97cef3b4e

```

  

Thus, a few simple steps can secure the dependencies being utilized. I'm not claiming that I have the ultimate solution to this, as I'm still in the process of testing it out. But if it comes down to when a parent dependency needs a particular version of a child dependency and excluding that version of the child dependency would cause failures, then perhaps the best way to go about it would be to upgrade or downgrade the parent while the most unfavorable solution to this would be to find a new dependency and rework a portion of your application to ensure it remains secure.

  

I will say that 80% of the time--even when working with Maven and Gradle projects--excluding the vulnerable child dependency will suffice. But I have dealt with annoying projects that forced me to update or find alternatives to nearly every parent dependency in the application and rework code to remediate vulnerabilities.

  

**But I hope this article has helped you acquire a deeper understanding of SCA. The convenience of Go is incredible, but it does truly blow my mind how so many go devs(hobbyists and professionals) carelessly import dependencies into their applications without any regard for details that might exist within those packages.** 

**I actually came across [this humorous article](https://medium.com/swlh/the-dependency-jungle-841bd1c7bce0) some time ago, which highlights why it's important for developers to be cognizant of the dependencies they import into their projects (including really popular ones). Although this example is pretty benign, imagine what else might be out there lingering in your codebase. By taking the right precautions, we can avoid costly errors and security breaches.**