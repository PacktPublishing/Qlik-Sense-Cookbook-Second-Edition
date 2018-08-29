# Qlik-Sense-Cookbook-Second-Edition

<a href="https://www.packtpub.com/big-data-and-business-intelligence/qlik-sense-cookbook-second-edition?utm_source=github&utm_medium=repository&utm_campaign=9781788997058"><img src="https://www.packtpub.com/sites/default/files/B10160_MockupCoverNew.png" alt="Qlik Sense Cookbook, Second-Edition" height="256px" align="right"></a>

This is the code repository for [Qlik SenseCookbook, Second Edition](https://www.packtpub.com/big-data-and-business-intelligence/qlik-sense-cookbook-second-edition?utm_source=github&utm_medium=repository&utm_campaign=9781788997058), published by Packt.

**Over 80 recipes on data analytics to solve business intelligence challenges**

## What is this book about?
Qlik Sense allows you to explore simple and complex data to reveal hidden insights and data relationships to come up with quality decisions for overall productivity. An expert Qlik Sense user can use its features for business intelligence in an enterprise environment effectively. This book is an excellent guide for all aspiring Qlik Sense developers and will empower them to fully create featured desktop applications to carry out daily insights at work.

With the recipe-based approach, the book will take you through the basics and advanced functions of Qlik Sense February/2018. Starting with a quick refresher on obtaining data from data files and databases, this book moves on to some more refined features including visualization, scripting, managing apps and user interface. You will then understand how to work with the advanced functions like set analysis and set expressions.

This book covers the following exciting features:
* Source, preview, and distribute your data through interacting dashboards
* Explore and work with the new visualization functions
* Leverage scripting tools, that once implemented, never stop adding value
* Make your UI advanced and intuitive with custom objects and indicators
* Use Visualization extensions for your Qlik Sense® dashboard 

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/1788997174) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>


## Instructions and Navigations
All of the code is organized into folders. For example, Chapter02.

The code will look like the following:
```
EmployeeInt:
LOAD *,
if([EmployeeID]= previous([EmployeeID]),'No','Yes') AS
LatestRecordFlag
RESIDENT EmployeeIntTemp
ORDER BY [EmployeeID] ASC, PositionFrom DESC;
DROP TABLE EmployeeIntTemp;
```

**Following is what you need for this book:**
The book is for anyone who has been exposed to Qlik Sense® and wants to start using it actively for BI. Anybody with prior knowledge of its sister product, QlikView, will also benefit from this book. Familiarity with the basics of BI is a prerequisite.

With the following software and hardware list you can run all code files present in the book (Chapter 1-9).

### Software and Hardware List

| Chapter  | Software required                      | OS required                          |
| -------- | ------------------------------------   | ------------------------------------ |
| 1-9      | Qlik® Sense Desktop 2.0.1              |6GB of RAM, i5 Pentium, Windows 10 OS |



We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](http:/ / www. packtpub. com/ sites/ default/ files/downloads/ QlikSenseCookbookSecondEdition_ ColorImages. pdf).

### Related products 
* Learning Social Media Analytics with R [[Packt]](https://www.packtpub.com/big-data-and-business-intelligence/learning-social-media-analytics-r?utm_source=github&utm_medium=repository&utm_campaign=9781787127524) [[Amazon]](https://www.amazon.com/dp/1787127524)

* Predictive Analytics with Tensorflow [[Packt]](https://www.packtpub.com/big-data-and-business-intelligence/predictive-analytics-tensorflow?utm_source=github&utm_medium=repository&utm_campaign=9781788398923) [[Amazon]](https://www.amazon.com/dp/1788398920)

## Get to Know the Author
**Dr. Vikas (Vik) Kumar**
 grew up in the United States in Niskayuna, New York. He earned
his MD from the University of Pittsburgh, but shortly afterwards he discovered his true
calling of computers and data science. He then earned his MS in the College of Computing
at Georgia Institute of Technology and has subsequently worked as a data scientist for both
healthcare and non-healthcare companies. He currently lives in Atlanta, Georgia.




### Suggestions and Feedback
[Click here](https://docs.google.com/forms/d/e/1FAIpQLSdy7dATC6QmEL81FIUuymZ0Wy9vH1jHkvpY57OiMeKGqib_Ow/viewform) if you have any feedback or suggestions.

