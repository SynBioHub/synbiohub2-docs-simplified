---
weight: 50
hidden: false
---

Note: **The administration section will only be available, if you're using a SynBioHub local instance. If you're using a global instance, such as [this](https://synbiohub.org/) one, then the administration section won't be available unless you have privileged access to SynBioHub.**

To access the admin page, the following steps need to be followed:

1. Navigate to the home page of your SynbioHub local instance.

2. Click on **admin**, in order to access the administrative settings of your instance. This will direct you to the administrative page. It has been divided into several sub-sections, for your convenience. They're discussed in detail, as follows:

## 6.1 Status

Several parameters essential for the smooth functioning of SynBioHub, are mentioned in this sub-section. They're as follows:

| parameter | Description                                                 |
| ----------|-------------------------------------------------------------|
| 1. **Platform**: Linux x64; 4.19.76-linuxkit | This parameter represents the platform on which SynBioHub was built.|
| 2. **Node Version**: vXX.X.X | This represents the node.js version, on which your local instance is running|
| 3. **Instance Name**:  name_of_your_choice | This represents the name of your SynBioHub instance. This can be changed based on your convenience.|
|4. **Listen Port: 7777** | When Oracle HTTP Server is started, by default, it listens for requests on port 7777 (non-SSL). If port 7777 is occupied, Oracle HTTP Server listens on the next available port number between a range of 7777-7877. Thus, if port 7777 is busy, it would listen on port 7778, and so on. To get more information on this, click [here](https://docs.oracle.com/cd/B12037_01/server.101/b12255/netconf.htm#:~:text=When%20Oracle%20HTTP%20Server%20is,port%207778%2C%20and%20so%20on.).|
| 5. **SPARQL Endpoint**: http://virtuoso:8890/sparql | A SPARQL Endpoint is a Point of Presence on an HTTP network that's capable of receiving and processing SPARQL Protocol requests. It is identified by a URL commonly referred to as a SPARQL Endpoint URL. To know more about SPARQl endpoints, click [here](https://www.w3.org/wiki/SparqlEndpointDescription). |
| 6. **Graph Store Endpoint**: http://virtuoso:8890/sparql-graph-crud-auth/ | This is the endpoint for the triplestore database where the data is stored. In this case, it is the endpoint for virtuoso.           |
| 7. **Default Graph**: http://localhost:7777/public |  It is the URI prefix for the public graph in the database.     |
| 8. **Graph Prefix**: http://localhost:7777/ |  It is the URI prefix for all graphs in the database.                 |
| 9. **Thread Pool Size**:    |    It  is the number of threads that virtuoso is allowed to use. (But it is currently empty)           |
| 10. **Upload Limit**: X mb| Shows the maximum limit of files that you can upload at once to your instance|

## 6.2 Graphs

This section basically displays the graph URI and its corresponding triples. You can select the number of graphs you want to view on one page as well as search for any specific graphs, with the help of search box. You can also sort the graphs on the basis of number of triples.

## 6.3 Log

This section displays the log file for your SynBioHub local instance. You can view 4 types of logs, which are as follows:

| Name of the Log       |   Description  |
|------------------------|--------------------------|
|  **[Error](https://www.techopedia.com/definition/26306/error-log#:~:text=Definition%20%2D%20What%20does%20Error%20Log,table%20corruption%20and%20configuration%20corruption.)**|Error log is a record of critical errors that are encountered by SynBioHub, while in operation. Some of the common entries in an error log include table corruption and configuration corruption. Error logs in many cases serve as extremely useful tools for troubleshooting and managing systems, servers and even networks.|
|**[Warn](https://library.netapp.com/ecmdocs/ECMP1650312/html/GUID-C0F52B5A-8391-40E9-95CC-82BC465B3CB8.html)** | Used just to draw your attention, but it is considered to be a normal activity usually and does not require any action|
|**[Info](https://library.netapp.com/ecmdocs/ECMP1650312/html/GUID-C0F52B5A-8391-40E9-95CC-82BC465B3CB8.html)** | For standard, normally occurring operations.|
|**[Debug](https://library.netapp.com/ecmdocs/ECMP1650312/html/GUID-C0F52B5A-8391-40E9-95CC-82BC465B3CB8.html)** | These types of logs just give out the debug information.|
-----------------------------------------------------------------------

You may use the pointer to view differs types of logs.

## 6.4 Mail

On this page, you have 2 options, that are [sendgrid](https://sendgrid.com/wp-content/uploads/2016/09/SendGrid-Implementation-Review.pdf) API key and sendgrid from email.

In the first column, you need to fill the API key, that you'd need to generate from sendgrid. SendGrid is a cloud-based SMTP provider that allows you to send email without having to maintain email servers. SendGrid manages all of the technical details, from scaling the infrastructure to ISP outreach and reputation monitoring to whitelist services and real time analytics.

### 6.4.1 Setting up Sendgrid 

In order to enable SynBioHub to send account-related emails, you need a sendgrid account and API key. The following steps need to be executed, for setting up sendgrid:-

1. Visit [this](www.sendgrid.com) website.

2. Select the *Sign up* option, in case you're using it for the first time.

3. Enter you Email Address and password as well as select the captcha for verification. 

4. Fill up all the details about yourself on the "Tell Us About Yourself" page.

5. Then, after filling up all the details correctly it'll re-direct you to your dashboard and send a confirmational Email.

6. Click on the *Settings* options on left hand side of the page.

7. Then, select the *Create an API key option*.

8. It'll prompt you to give your API key a name. Also, you can customize the API key permissions.

9. After completing these steps, click on Create and View. 

10. The API key is shown only for once due to security reasons, so try to save it at a safe place.

11. Your API key has been created, and hence ready to use!!





1. **SendGrid API key**: For generating an API key, you need to have a sendgrid account. To sign-up for sendgrid and hence generating an API key, click [here](https://synbiohub.github.io/setup/#setting-up-sendgrid).
2. **SendGrid From Email**:  Here, you can enter the email, which you can use for sending emails.

## 6.5 Plugins

On this page, you can configure the **[plugins ](https://synbiohub.github.io/plugins/)** which you want to use. Plugins are modular stand-alone additions to SynBioHub. They function in a way that is similar to browser extensions. They can be installed separately from the browser/SynBioHub and provide additional ‘custom’ functionality to the browser/SynBioHub experience despite having a completely separate code base from the browser/SynBioHub. Though, they seem integrated to the user.

They're broadly classified into 3 types, which are as follows:

1. Submit: Submit plugins are available to use from the submit endpoint. They work by taking in the file that is uploaded in the submit and processing it to return SBOL to the SynBioHub endpoint.

2. Visual: Visual plugins are available on all ‘endpoint’ pages, for example pages for components, sequences, activities, etc. Visual plugins return html to be displayed on the page.

3. Download: Download plugins are available on all ‘endpoint’ pages, for example pages for components, sequences, activities, etc. Download plugins return some kind of file which is downloaded by the user.



As mentioned above, the plugins are divided into 3 categories all having the same attributes. The attributes, which need to be filled up are as follows:

* Name: This is the name which you want to give to your plugin.

* URL: In this column, you need to enter the URL for your plugin. In this column, you need to enter the URL for your plugin. For more information about plugin urls see Adding plugins to the admin panel under the Plugins: **[2.2.1.2 Adding plugins to the admin panel](In this column, you need to enter the URL for your plugin. For more information about plugin urls see Adding plugins to the admin panel under the Plugins: 2.2.1.2 Adding plugins to the admin panel)**. 

After filling both of the columns click on **save**, in order to save your plugin.

## 6.6 Registries

SynBioHub also supports the Web of Registries concept i.e, the idea of multiple separate repositories linked together by shared common semantics. In the case of SynBioHub, SBOL is used to support the common exchange of data, thus positioning SynBioHub to support the development of synthetic biology workflows by acting as a source and a storage facility for designs.

Hence, Web Of registries enables communication between SynBioHub instances. Sharing designs between instances of SynBioHub is also further facilitated via the Web of Registries service. Federated SynBioHub instances can reference parts in the public graph of other federated instances. In order to support this federation, the Web of Registries service maintains information about all SynBioHub registries, such as their name, description, administrator email, URI prefix, and uniform resource locator(URL). 

Any SynBioHub can access the Web Of Registries to determine information about all registered SynBioHub instances. If a design references a part within another synbiohub instance, the information about this part can be fetched in order to render this design information locally and provide links to the corresponding design information page for this part.

When a new SynBioHub instance wishes to join the Web of Registries, it sends its information to the Web of Registries service, and all the Web of Registries curators are alerted via email that there is a new repository pending approval. Once the repository has been approved, its information is broadcast to all other registries in the Web of Registries. Anybody can access the current list of registries through an HTTP GET request. Once registered, an instance of SynBioHub is able to locate designs within any other instance that is registered with the Web of Registries.



SynBioHub demonstrates the application of this harmonized data exchange through existing repositories, hence envisaging a wider, integrated ecosystem of biological part information shared across a plethora of different repositories with different capabilities.


* On this page, you can configure the registry for your local instance. To configure the registry for your local instance, enter the administrator email in the column just besides the web-of-registries link. After entering the admin email, click on **submit** and this would configure the admin email for the registries.

* There are 2 options given just below the local web of registries sub-section, which are:

1. **Retrieve from web of registries**: This option shall retrieve the web of registries that are already existing globally, locally onto you instance, if in case you delete them. 

2. **Add registry**: This shall enable you to add a registry onto your instance. For adding, click on this option. Then, a popup shall appear. Subsequently, enter the registry URI prefix and the Registry URL. Finally, click on **submit**. This will add an already existing registry of SynBioHub, to the list of registries on your SynBioHub local instance.
 

* Several local web-of-registries are also given on this page alongside their Synbiohub URL. Here, you have an option to **save** as well as **delete** the already existing registries.  

## 6.7 Remotes

SynBioHub is capable of connecting to remote repositories to allow data to be transferred to and from these remote repositories.

There are 2 types of remotes you can configure for SynBioHub i.e, **Benchling** and **ICE**. They're discussed in detail as follows:

1. **[Benchling](http://benchling.com/academic)**: Benchling is an integrated software solution for experiment design, note-taking, and molecular biology. It is a free, intelligent research platform with tools for note-taking, molecular biology, and sample tracking. Benchling includes an electronic lab notebook, a molecular biology suite for design and analysis, and a bioregistry to track inventory. 

2. **[ICE](https://ice.jbei.org/)**: ICE is a registry platform that provides robust data storage for DNA components, integrated tools for part characterization, as well as mechanisms for secure access and information sharing with other users and software tools. 

Upon opening this page for the first time you'll see a message stating: *No remotes configured*. To configure a remote for your instance, follow the following steps:

### 6.7.1 Configuring a Benchling Remote

1. When you'll click on the type box, a dropdown menu shall appear containing 2 options, ice and benchling. For configuring a benchling remote, select **benchling**. Then click on **add remote**. 

2. As soon as you'll click on add remote, a popup shall appear asking you to fill up certain set of attributes. They're as follows:


| Attribute  | Description  |
|------------|--------------|
| 1. ID          | Enter ID of the benchling remote.             |
| 2. Type   |  This shall display the type of remote that you would've chosen, initially. |
| 3. URL  |  Enter the URL for the benchling remote. |
| 4. Sequence Suffix  | This represents the suffix to use for the sequences found on benchling.   |
| 5. Default Folder ID |  Enter the default folder on benchling to access. |
| 6. Public  |  Should be checked, if you want the remote to be visible publicly. If not, then it should not be checked.  |
| 7. Reject Unauthorized | Should be checked, if you want to the SSL certificates to be checked. If not, then it should not be checked.  |
| 8. Folder Prefix |  Represents the prefix to use for folders on benchling. |
| 9. Root Collection Display ID  | Represents the display id for the root collection on the remote.   |
| 10. Root Collection Name  |  This represents the name for the root collection on the remote. |
| 11. Root Collection Description |  A brief description about the root collection on the remote. |
| 12. Benchling API Token | The token generated by benchling should be entered here.  |
---------------------------------------------------------------------------------

Once you are through with all the attributes, click on submit. 

3. Once you've clicked on submit, you'll be able to see a fully configured remote on the left. You can also delete and edit your remote. To delete any of your configured remotes, click on delete. To edit any of the information, click on edit. Once you've edited the information, click on submit.   

#### Examples
To configure a Benchling remote, the fields should have the values as follows: - 

id - benchling

type - benchling

url - https://api.benchling.com/v1

sequence suffix - sequence

default folder ID - lib_LHwAaloE

folder prefix - folder

root collection display id - benchling_collection

root collection name - Benchling

root collection description - Benchling collection of parts

Benchling API Token - 

Benchling API Token Client - synbiohub.org

Benchling API Token Owner - 

Benchling Collection - FEATURED

Group ID - 4

PI - 

PI Email - 

Part Number Prefix - acs



### 6.7.2 Configuring an ICE Remote

1. When you'll click on the type box, a dropdown menu shall appear containing 2 options, ice and benchling. For configuring an ICE remote, select **ICE** and then click on **add remote**.

2. As soon as you'll click on add remote, a popup shall appear asking you to fill up certain set of attributes. They're as follows:


| Attribute  | Description  |
|------------|--------------|
| 1. ID          | Enter ID of the ICE remote.             |
| 2. Type   |  This shall display the type of remote that you would've chosen, initially. |
| 3. URL  |  Enter the URL for the ICE remote. |
| 4. Sequence Suffix  | This represents the suffix to use for the sequences found on ICE.   |
| 5. Default Folder ID |  Enter the default folder on ICE to access. |
| 6. Public  |  Should be checked, if you want the remote to be visible publicly. If not, then it should not be checked.  |
| 7. Reject Unauthorized | Should be checked, if you want to the SSL certificates to be checked. If not, then it should not be checked.  |
| 8. Folder Prefix |  Represents the prefix to use for folders on ICE. |
| 9. Root Collection Display ID  | Represents the display id for the root collection on the remote.   |
| 10. Root Collection Name  |  This represents the name for the root collection on the remote. |
| 11. Root Collection Description |  A brief description about the root collection on the remote. |
| 12. ICE API Token | The token generated by ICE should be entered here. |
| 13. ICE API Token Client | Domain of the client using the ICE API.       |
| 14. ICE API Token Owner | Email address of the client using the ICE API.        |
| 15. ICE Collection   | Name of the ICE collection. |
| 16. Group ID | ID number for the ICE group.     |
| 17. PI | 	Principal Investigator name should be entered. |
| 18. PI Email | Principal Investigator email should be entered.|
| 19. Part Number Prefix | Prefix that is to be used for the parts. |
---------------------------------------------------------------------------------


3. Once you've clicked on submit, you'll be able to see a fully configured remote on the left. You can also delete and edit your remote. To delete any of your configured remotes, click on delete. To edit any of the information, click on edit. Once you've edited the information, click on submit.   

#### Examples
To configure an ICE remote, the fields should have the values as follows: - 

id - acs

type - ice

url - https://acs-registry.jbei.org

sequence suffix - sequence

default folder ID - ace_ice_folder

folder prefix - ice_folder

root collection display id - acs_collection

root collection name - ACS Synthetic Biology

root collection description - ICE repository for ACS Synthetic Biology Journal

ICE API Token - 

ICE API Token Client - synbiohub.org

ICE API Token Owner - 

ICE Collection - FEATURED

Group ID - 4

PI - 

PI Email - 

Part Number Prefix - acs


## 6.8 SBOLExplorer

SBOLExplorer is a service that simplifies the process of analysing and searching for parts within genetic design repositories.

Once you click on the **SBOLExplorer** option, you can view the following options:
1. The first option is that of **SBOLExplorer** endpoint. Here, you can enter and save your SBOLExplorer endpoint for your local instance. Also, make sure that any of the endpoints you enter end with **\\**.
2. Then on the right, you shall see the **searching using SBOL explorer***. You need to Check the this option to enable the SBOLExplorer. 
3. Then, you'll be able to see the option of selecting between, **[Usearch](https://academic.oup.com/bioinformatics/article/26/19/2460/230188)** and **[Vsearch](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5075697/)**. They're explained in detail as follows:

* Usearch: UBLAST and USEARCH are new algorithms enabling sensitive local and global search of large sequence databases at exceptionally high speeds. They are often orders of magnitude faster than BLAST in practical applications, though sensitivity to distant protein relationships is lower. UCLUST is a new clustering method that exploits USEARCH to assign sequences to clusters. UCLUST offers several advantages over the widely used program CD-HIT, including higher speed, lower memory use, improved sensitivity, clustering at lower identities and classification of much larger datasets.

* Vsearch: VSEARCH is an open source and free of charge multithreaded 64-bit tool for processing and preparing metagenomics, genomics and population genomics nucleotide sequence data. It is designed as an alternative to the widely used USEARCH tool for which the source code is not publicly available, algorithm details are only rudimentarily described, and only a memory-confined 32-bit version is freely available for academic use.

4. Next, you can view the start and the end of the last index update. 

5. Subsequently, you can choose whether you want to allow the automatic updating of index or not. If you check this option, the you'll also have the option of choosing the frequency of index update.'

6. Then, you have the option of, whether you want to allow the option of a distributed search or not. 

7. Subsequently, you can select the  value of **[page rank tolerance](https://neo4j.com/docs/graph-algorithms/current/algorithms/page-rank/)**. PageRank basically is an algorithm that measures the transitive influence or connectivity of nodes. It can be computed by either iteratively distributing one node’s rank (originally based on degree) over its neighbours or by randomly traversing the graph and counting the frequency of hitting each node during these walks.

8. There is also an option of choosing a value of **[UClust clustering identity](https://en.wikipedia.org/wiki/UCLUST)**. UCLUST is an algorithm designed to cluster nucleotide or amino-acid sequences into clusters based on sequence similarity. The algorithm was published in 2010 and implemented in a program also named UCLUST. The algorithm is described by the author as following two simple clustering criteria, in regard to the requested similarity threshold T. The first criterion states that any given cluster's centroid sequence will have a similarity smaller than T to any other clusters' centroid sequence. The second criterion states that each member sequence in a given cluster will have similarity to the cluster's centroid sequence that is equal or greater than T.

9. Then you can also input a value for the **[elasticsearch endpoints](https://www.elastic.co/guide/en/cloud-enterprise/1.1/ece-administering-endpoints.html)**. For applications without SSL or HTTPS protocol support, you can use a local endpoint with the HTTP protocol, which in turn connects to your Elastic Cloud Enterprise cluster or to Kibana either using the HTTP or the HTTPS protocol.

10. Finally, you have to input a value for the **[SPARQL/Virtuoso endpoints](https://medium.com/virtuoso-blog/what-is-a-virtuoso-sparql-endpoint-and-why-is-it-important-5244df738a3e)**. A Virtuoso SPARQL Endpoint is a feature of every Virtuoso RDBMS instance that offers an HTTP-based Query Service that operates on Entity Relationship Types (Relations) represented as RDF sentence collections using the SPARQL Query Language. These operations may be read- and/or write-oriented and distributed without compromising security, performance, or scalability.

11. Then, click on the **save** button to save all the details for the SBOLExplorer.

##  6.9 SPARQL 

This page can be used by administrators to perform any SPARQL query or update. Administrators can select any graph to query or update and not only can they view data, but also delete or insert data using the SPARQL queries. **PLEASE BE EXTREMELY CAREFUL WHEN YOU USE THE UPDATE FEATURE AS YOU CAN CORRUPT THE DATASET**.

In the box provided just below graphs dropdown, enter the SPARQL query. 
After writing your SPARQL query, just click **submit query**. After you click on **submit query**, the results of your query shall be displayed below the query box.



## 6.10 Theme 

On this several options are available to alter the User interface of your local instance. 

* You can choose to change the logo of your local instance i.e, replace it with the desalt one bu uploading a picture of your choice. To do so, click on choose file. On doing so, a popup shall appear displaying the .png or the .jpeg files on your computer. Choose the file offs per your convenience and then click on submit.

* You can also change the name of your Synbiohub local instance, by typing in the name of your choice in the given **instance name** box. 

* There is also an option to change the text that appears on the front page as soon as you open the front page of your local instance. To edit that text, a box is given, wherein the default text is already written. You can simply edit the text, in that very box with the text of your choice. 

* Subsequently, there is a section titled **instance settings**. Under that, you can change the base colour of your Synbiohub instance, which by default hex. To search for more HTML colour codes, click [here](https://htmlcolorcodes.com/). 
Also, you can also enable module interactions as well as remove the public enabled.

To save all changes click on **save**.

## 6.11 Users

This page basically lists all the users currently registered onto your local instance. 

* There is an option to add a user for your local instance. To do so, click on **add user**. This'll direct you to page, wherein you'll be required to fill the following details:

1. **Full Name**: Enter the name of the person, whose account you want to add.

2. **Affiliation**: This is an optional attribute. Enter the university/college, to which that member belongs to. 

3. **Email**: Enter the Email of the new member.

4. **Username**: Assign a username to the member. 

5. **Grant Administrative Access**: There is an option to provide the administrator access, to this particular member. This shall enable, him/her to edit each and every setting on your local instance including the admin ones as well. To grant this particular access, check the grant administrative privileges box.

6. **Grant Member Privileges**: There is an option to provide the member access. 
To grant this particular access, check the grant member privileges box.

7. **Grant Curator Privileges**: There is an option to provide the member access. 
To grant this particular access, check the grant curator privileges box.

* You can also search for a particular user by entering the username in the search box. 

* You can choose the number of users, that you want to display on a particular page ranging from 10 to 100.

* Then, a sortable list of users is displayed. Following is the list of details that is mentioned:

1. **Full Name**: Enter the name of the person, whose account you want to add.

2. **Affiliation**: This is an optional attribute. Enter the university/college, to which that member belongs to. 

3. **Email**: Enter the Email of the new member.

4. **Username**: Assign a username to the member.

5. **Member**: A checked or an empty box is displayed. A checked box means, that the user has member rights and if not, that means the user doesn't have member access. 

6. **Curator**: A checked or an empty box is displayed. A checked box means, that the user has curator rights and if not, that means the user doesn't have curator access.

7. **Admin** : A checked or an empty box is displayed. A checked box means, that the user has admin rights and if not, that means the user doesn't have admin access.

8. **Save**: Clicking on the save option, will permanently save that profile to your local instance.
 

Finally, there is a check box at the end corresponding to allowing public account creation. Enabling this option will allow anyone to create an account on your local instance and hence contribute to your design repository. 
 
