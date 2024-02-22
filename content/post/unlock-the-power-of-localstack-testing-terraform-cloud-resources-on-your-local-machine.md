---
title: 'Unlock the Power of Localstack: Testing Terraform Cloud Resources on Your Local Machine'
date: 2023-05-07T08:32:00.003-07:00
draft: false
url: /2023/05/unlock-power-of-localstack-testing.html
thumbnail: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8N5uM7cLcYY6xc_lhfqSeL7BNbaCc70VIWaYR2Dmrtz5bAtsmgXg3fI3xlzD1fllD4GIZN8BqANHSO2wzGa79PNgP8NfWnZRQDaqmHcEIpMocmeM8NuSYFH5n7dCL095t9aAsSxx77t0m10L0FDvwL9zdVl8iVO3jPcj1k_-K0i96Rt5cqcOme3aIyg/s320/White%20Minimalist%20Blogging%20Instagram%20Posts%20(1).png"
tags: 
- Programming
- tutorial
- Programming Tutorial
- terraform
---

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8N5uM7cLcYY6xc_lhfqSeL7BNbaCc70VIWaYR2Dmrtz5bAtsmgXg3fI3xlzD1fllD4GIZN8BqANHSO2wzGa79PNgP8NfWnZRQDaqmHcEIpMocmeM8NuSYFH5n7dCL095t9aAsSxx77t0m10L0FDvwL9zdVl8iVO3jPcj1k_-K0i96Rt5cqcOme3aIyg/s320/White%20Minimalist%20Blogging%20Instagram%20Posts%20(1).png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8N5uM7cLcYY6xc_lhfqSeL7BNbaCc70VIWaYR2Dmrtz5bAtsmgXg3fI3xlzD1fllD4GIZN8BqANHSO2wzGa79PNgP8NfWnZRQDaqmHcEIpMocmeM8NuSYFH5n7dCL095t9aAsSxx77t0m10L0FDvwL9zdVl8iVO3jPcj1k_-K0i96Rt5cqcOme3aIyg/s1080/White%20Minimalist%20Blogging%20Instagram%20Posts%20(1).png)

The idea of using Terraform to manage cloud infrastructure has gained popularity in the tech industry. It enables developers to use a single configuration language to describe and provision resources across multiple cloud providers -- a time-saving measure that makes it easier to support multiple regions and cloud environments from a single platform.

  

But while Terraform provides a robust solution for streamlining the process of setting up and managing cloud resources, testing components of the setup is often neglected. Without the proper testing tools, Terraform users often risk leaving services behind in the environments and spending valuable time waiting for pipelines to complete builds.

  

This is why Localstack proves to be so invaluable. It's a highly-treasured open-source utility that grants users the power to run cloud services locally, making it ideal for both testing and development. This way, developers won't need to make pipelines or wait for builds to finish-- they can just emulate cloud programs on their computer with its APIs, CLI, and UI dashboard.

  

Localstack also helps to reduce costs associated with cloud infrastructure. By running tests locally before deploying their code, developers can realize cost savings by avoiding the need for expensive remote resources.

  

In addition to cost savings, Localstack helps Terraform users test their configurations more efficiently without having to deploy them in the actual cloud environment first. By utilizing a local development environment, Terraform users can quickly modify their configurations and adjust them accordingly. This decreases the time spent waiting on builds and potentially reduces time-to-production by days or even weeks.

  

By taking advantage of all that Localstack has to offer -- including its APIs, CLI, UI dashboard, and built-in support for multiple cloud providers -- Terraform users can easily create repeatable processes that test their configurations against different scenarios and develop reliable systems at scale.

  

  

**Required Installations: docker, localstack, pip, tflocal, awscli**

  

First, you have to create a Terraform module that creates an AWS S3 bucket with the following code:

```

provider "aws" {
 region = "us-east-1"
 access_key = "test"
 secret_key = "test"
 endpoint = "http://localhost:4566"
 s3_force_path_style = true
}

resource "aws_s3_bucket" "example_bucket" {
 bucket = var.bucket_name
}

```

  

  

2\. Create a \`variables.tf\` file in the same directory as \`main.tf\`, with the following content:

```

variable "bucket_name" {
 description = "Name of the S3 bucket"
 type    = string
 default   = "my-test-bucket"
}

variable "aws_access_key" {
 description = "AWS access key"
 type    = string
}

variable "aws_secret_key" {
 description = "AWS secret key"
 type    = string
}

```

  

3\. Create a \`terraform.tfvars\` file in the same directory as \`main.tf\`, with the following content:

```


bucket_name = "my-test-bucket"
aws_access_key = "test"
aws_secret_key = "test"

```

  

4\. Start LocalStack on your machine by running the following command:

```


localstack start -d


```

  

5\. In a separate terminal window, navigate to the directory where your Terraform module is located and run the following commands:

```


export AWS_ACCESS_KEY_ID=test
export AWS_SECRET_ACCESS_KEY=test
terraform init
terraform apply

```

  

6\. After Terraform completes the apply, you should see a new S3 bucket created in LocalStack with the name \`my-test-bucket\`.

  

That's it! You have just tested an AWS module using Terraform with LocalStack and variables.