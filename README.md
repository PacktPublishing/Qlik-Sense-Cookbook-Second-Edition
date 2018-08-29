# Qlik Sense Cookbook, Second Edition

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
| 1-9      | Qlik® Sense Desktop 2.0.1              |No specific requirement               |



We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](http://www.packtpub.com/sites/default/files/downloads/QlikSenseCookbookSecondEdition_ ColorImages.pdf).

### Related products 
* Qlik Sense® Cookbook [[Packt]](https://www.packtpub.com/big-data-and-business-intelligence/qlik-sense-cookbook?utm_source=github&utm_medium=repository&utm_campaign=9781782175148) [[Amazon]](https://www.amazon.com/dp/1785285165)


## Get to Know the Author
**Pablo Labbe**
 is a BI consultant with over 20 years' experience. In 2008 he was introduced to
Qlikview, a former product by Qlik and the seed for Qlik Sense. Since then, he has focused
on delivering BI solutions in a new way. Now he is the Principal of ANALITIKA
Inteligencia, delivering BI projects and training on Qlik products and other technologies
that embrace the self-service BI. Pablo is an active member of the Qlik community and
other social media sites.

**Philip Hand** is a senior BI consultant who has worked with QlikView in the BI space for
over 7 years. He has implemented end-to-end solutions in a wide variety of enterprises and
for large business customers. He has spent many years consulting on business and
QlikView solutions. His belief is that such a role proves invaluable to hone your skills
through exposure to many different businesses, problems, technologies, industries, and
people.

**Neeraj Kharpate** works as an independent BI consultant providing services to clients from
various industries. Neeraj embarked on his journey with Qlik in mid-2007. He has over 10
years of experience working with clientele from multiple sectors, ranging from banks and
insurance to retail. Neeraj has been closely following the developments in Qlik Sense ever
since it was launched in 2014 and is actively involved with its enterprise-wide
implementations.




### Suggestions and Feedback
[Click here](https://docs.google.com/forms/d/e/1FAIpQLSdy7dATC6QmEL81FIUuymZ0Wy9vH1jHkvpY57OiMeKGqib_Ow/viewform) if you have any feedback or suggestions.

