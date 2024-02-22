---
title: 'Walkthrough Of Golang Structs'
date: 2023-03-02T15:39:00.000-08:00
draft: false
url: /2023/03/walkthrough-of-golang-structs.html
tags: 
- tutorial
- go
- Programming Tutorial
---

Structs in Go programming are quite straightforward. You could liken them to Java model classes, but much simpler. Structs are used to represent physical or conceptual elements in the real world, they can be linked to one another, and they are not as lengthy as Java model classes...

  

Take a glance at this example of some java model classes. We have a student class and an address class. As can be seen, there is a lot of work packed into this code -- numerous lines that could be condensed when compared to Python, Go, and JavaScript.

```

package Java_Example;
import java.util.ArrayList;

public class Student {
    public String name;
    public int age;
    public String gender;
    public ArrayList classes;
    public Address addres;

    public Student(String name, int age, String gender, ArrayList classes, Address addres) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.classes = classes;
        this.addres = addres;
    }


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public ArrayList getClasses() {
        return this.classes;
    }

    public void setClasses(ArrayList classes) {
        this.classes = classes;
    }

    public Address getAddres() {
        return this.addres;
    }

    public void setAddres(Address addres) {
        this.addres = addres;
    }
}


package Java_Example;

public class Address{
    public String street;
    public int zipcode;
    public String city;



    public Address(String street, int zipcode, String city) {
        this.street = street;
        this.zipcode = zipcode;
        this.city = city;
    }


    public String getStreet() {
        return this.street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getZipcode() {
        return this.zipcode;
    }

    public void setZipcode(int zipcode) {
        this.zipcode = zipcode;
    }

    public String getCity() {
        return this.city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
```

Go shuns the conventional object-oriented approach that most languages embrace, although it has the O-O moniker attached to it. Don't be fooled though, it won't be providing any class-object architecture like its contemporaries. Instead, structs can be used to aggregate compound data into neat little collections.

  

Structs in Go programming are a way to create custom data types. They are used to define the characteristics of each type and can contain various types of data, including other structs as members. They provide a way to organize related data into a single object, and they can be further customized by using tags to label fields with additional information. Structs are useful in applications where large amounts of data need to be kept organized in an efficient manner.

  

Let's delve further into this concept. For instance, a data structure for a Student object could look like this:

```
type Student struct { 
	Name string 
	Age int 
	Gender string 
	Classes []string 
} 

```

  

The type keyword is used to declare a Struct, followed by the name of the Struct and then a set of curly braces {} .The Name, Age, Gender, and Classes fields represent the data associated with a student. The ‘\[\]string’ declares an array of strings to store classes taken by the student. As mentioned above, structs can also contain other structs as members. For example, if a Student has an Address field within it, you can write it like this:

```

type Student struct { 
	Name string 
	Age int  
	Gender string  
	Classes []string  
	Address Address
}

type Address struct {
	Street string
	Zipcode int
	City string
}

```

  

Structs provide an efficient way to organize related data into a single object and give developers more control over how data is structured. Struct tags may also be used to label fields with additional information. This makes structs extremely useful in applications where large amounts of data need to be kept organized in an efficient manner.

```

type Student struct {
	Name    string   `json:"name"`
	Age     int      `json:"age"`
	Gender  string   `json:"gender"`
	Classes []string `json:"classes"`
	Address `json:"address"`
	Misc
}

type Address struct {
	Street  string `json:"street"`
	Zipcode int    `json:"zipcode"`
	City    string `json:"city"`
}

```

  

As Structs become more complex, they may require additional functions to manipulate the data fields. Go provides a way to attach functions to Structs as methods, which are similar to Java methods. Methods are a way to group related operations together and make them more convenient to use and can be used to provide additional functionality to Structs.

  

  

It's simple to attach operations to structs, like in the illustration below.

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgj-nJNKm9CljtW2xLcza2thDA3VdqP0MlwKjSQZ-MZIrvNBRuUPPZsmnw2c45JOHCQKvfI4ktBlPdMsMqvyt2tCRmgYDuHDHDrcDvjB-7z5DqgOd0vSzLATrSQGTXNDoe0LcOksjaDQ7pEZNfV5X1cwmBDcyxcEI_KO1HbmRYy2wCfLvIDw4BKL5JTmg=w640-h526)](https://blogger.googleusercontent.com/img/a/AVvXsEgj-nJNKm9CljtW2xLcza2thDA3VdqP0MlwKjSQZ-MZIrvNBRuUPPZsmnw2c45JOHCQKvfI4ktBlPdMsMqvyt2tCRmgYDuHDHDrcDvjB-7z5DqgOd0vSzLATrSQGTXNDoe0LcOksjaDQ7pEZNfV5X1cwmBDcyxcEI_KO1HbmRYy2wCfLvIDw4BKL5JTmg)

  
Here, we add a function that creates a unified address string from the individual address parameters.

  

  

  

As you can see, structs are simple enough. Far simpler than the Java example I presented earlier. Golang is one of those languages that you can quickly and easily dive into, but a good programmer is left wondering if they are writing code in the most effective and efficient way possible.

  

So, let's review what should be avoided when dealing with structs. Have a glance at this nested struct.

```

type StudentNested struct {
    Name    string   `json:"name"`
    Age     int      `json:"age"`
    Gender  string   `json:"gender"`
    Classes []string `json:"classes"`
    Address struct {
        Street  string `json:"street"`
        Zipcode int    `json:"zipcode"`
        City    string `json:"city"`
    } `json:"address"`
}

```

  

  

At first glance, this struct may not seem like a big problem, but once we start nesting structs within one another, things become quite complex. It is hard to read through and can be quite difficult to manage when trying to create an instance of a struct.

  

In the case that you don't have the same param name within a nested struct, you can instantiate the struct and call a value within it in a much simpler way like so:

```

package main

import "fmt"

type Student struct {
    Name    string   `json:"name"`
    Age     int      `json:"age"`
    Gender  string   `json:"gender"`
    Classes []string `json:"classes"`
    Address `json:"address"`
}

type Address struct {
    Street  string `json:"street"`
    Zipcode int    `json:"zipcode"`
    City    string `json:"city"`
}

type StudentNested struct {
    Name    string   `json:"name"`
    Age     int      `json:"age"`
    Gender  string   `json:"gender"`
    Classes []string `json:"classes"`
    Address struct {
        Street  string `json:"street"`
        Zipcode int    `json:"zipcode"`
        City    string `json:"city"`
    } `json:"address"`
}

func main() {

    address := Address{
        "random",
        555675,
        "City",
    }
    s1 := Student{
        "Brian",
        20,
        "Male",
        []string{"Org Chem", "Calc"},
        address,
    }
    s2 := StudentNested{
        "Brian",
        20,
        "Male",
        []string{"Org Chem", "Calc"},
        Address{
            "random",
            555675,
            "City",
        },
    }
    fmt.Println(s1.City)
    fmt.Println(s2.Address.City)
}

```

  

In the above example, you can see that we create two separate structs: a nested and an embedded struct. Instead of defining the embedded Address param in the embedded struct, we just set the Address param without specifying the type. This makes it possible to directly call the city value from our s1 instance rather than calling the instance, then the Address to eventually get the city value as shown in s2.

  

But be cautious with the parameter titles when striving to access an element from an instance--when trying to obtain the address value from Misc-- a runtime mistake occurs because the compiler initially looks for the address struct param in Student rather than the Address param in Misc. To obtain the expected address string, one should type s1.Misc.Address.

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEj5Ql0o1tNg6F3r1xE6z64HeyDikG0ysBRLqiMRaWHmJ5yiUOvwljJzpciKGjVNUO-z9uL7UEMQEezzjEusXSDHYplYFb8NWrOesmrATOWO4ilDy_Gbznu4PbuT81Kbun0pDV85kRdlvaxljAio4mVzZ_4fcxvkU2PGucCkVYBqV_qON9PoVapdeHlM0g=w640-h524)](https://blogger.googleusercontent.com/img/a/AVvXsEj5Ql0o1tNg6F3r1xE6z64HeyDikG0ysBRLqiMRaWHmJ5yiUOvwljJzpciKGjVNUO-z9uL7UEMQEezzjEusXSDHYplYFb8NWrOesmrATOWO4ilDy_Gbznu4PbuT81Kbun0pDV85kRdlvaxljAio4mVzZ_4fcxvkU2PGucCkVYBqV_qON9PoVapdeHlM0g)

  
  

But I have also discovered this as a means to check if we are repeatedly inputting the same data in a code structure, which could lead to an increase in size and memory utilization. To prevent this from happening, someone might choose to employ inheritance in the code instead of creating a different Address string, like the student struct using the Address struct in order to reuse its parameters. The programmer might also decide that including the Misc param is needlessly cluttering up the code base.

  

  

  

**Using Struct Tags**

  

Struct tags are key-value pairs which are used to customize the behavior of structs. Struct tags are placed after certain fields in a struct, and they can be used to control how data is parsed and stored. They can also be used to change the name of the field when serializing or deserializing data, as well as customizing which type the field should be converted into (e.g. an int field could be converted into a string).

  

For example, if we wanted to change the way our Student struct looked when serialized, we could use a struct tag like so:

```

type Student struct {
    Name    string   `json:"name"`
    Age     int      `json:"age"`
    Gender  string   `json:"gender"`
    Classes []string `json:"classes"`
    Address `json:"address" tag:"AddressInfo"`
}

```

  

The "tag" field in this case indicates that we want the Address field to have a different name when it is serialized, in this case "AddressInfo". This would result in our JSON object looking something like this:

```

{   
 	Name: "Brian",   
 	Age: 20,   
 	Gender: "Male",   
 	Classes: ["Org Chem", "Calc"],     
    AddressInfo: {           
    	Street: "random",           
        Zipcode: 555675,           
        City: City 
    } 
}

```

  

As you can see, we have successfully changed our Address field from simply "Address" to "AddressInfo". Struct tags are incredibly useful for customizing your structures and making them more readable both when instantiating and when using them with external APIs.

  

So, let's review what we've learned.

  

**1\. Reduce Nested Structs**

  

Nesting structs within a struct can quickly become unmanageable, especially with more complex data structures. To avoid this, try to flatten the data structure as much as possible. This can be done by moving related fields from nested structs out into the parent struct, or by combining multiple fields into one field. For example, instead of having a nested Address struct with Street, Zipcode and City fields, you could combine those three fields into one Address field. This will reduce nesting and make it easier to read and understand your code.

  

**2\. Avoid Unnecessary Copies**

  

When dealing with structs, it is important to avoid unnecessary copies of data that are not needed. If a struct has too many copies of the same data, this can cause performance issues in your application since each copy needs to be allocated in memory and managed individually. Try to limit copying of structs and other data types where possible.

  

**3\. Attach Functions to Structs When Necessary**

  

Structs are incredibly powerful data types that can be used to store and organize complex data. One way to further enhance their usefulness is to attach functions to them when necessary. This allows us to add additional operations that work directly on the struct and its fields without having to pass any additional parameters into the function. We no longer have to worry about passing an instance of a struct before calling a function, making writing code much simpler because there is less complexity involved; instead of remembering which parameters need to be passed in and what each parameter represents, all we need to do is call the function on an instance of a struct and it will return the desired output.

  

Attaching functions directly to structures also encourages better organization. By keeping functions specific to a certain structure grouped together, they are easier for other developers or yourself down the road to find and understand what they do without searching through multiple files and directories. This leads to faster development times as well as less potential bugs due to confusion over what functions actually do or how they interact with different objects.