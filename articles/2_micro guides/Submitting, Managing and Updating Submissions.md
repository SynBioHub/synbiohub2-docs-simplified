---
weight: 40
hidden: false
---

## 4.1 Submitting 

For submitting your designs to SynBioHub, following steps need to be followed:

1. Navigate to SynBioHub's home page.

2. Click on the **Submit** option and it'll direct you to the Submit page. 

Now, there are 2 ways you make your submissions i.e, creating a new collection and then submitting your resource or submitting to an existing collection.

### 4.1.1 Creating a New Collection

1. Select the **New collection** option.

2. Following are the attributes that need to be filled up :

* **Name**: This is the name string that'll be assigned to the submission.

* **Collection Description**: This is the description string that briefly explains your submission.

* **Collection ID**: This is a user-defined string identifier for the submission and it should contain alphanumeric and underscores characters only.

* **Collection Version**: This is the version string which is associated with the submission.

* **Citations** (optional): This is a list of comma separated pubmed IDs of citations to store with the submission, just for reference. It is an optional attribute.

* **SBOL/GENBANK/GFF3/FASTA/ZIP file** (OPTIONAL): The file should be of the following types:


 |  Type             | Description  |
    |-------------------|--------------|
        |  **[SBOL](https://sbolstandard.org/datamodel-about/)**             | The Synthetic Biology Open Language (SBOL) has been developed as a standard to support the         specification and exchange of biological design information in synthetic biology.           |
    | **[GFF3](http://asia.ensembl.org/info/website/upload/gff3.html)**       | The GFF (General Feature Format) format consists of one line per feature, each containing 9 columns of data, plus optional track definition lines.|
    | **[FASTA](https://en.wikipedia.org/wiki/FASTA_format)**      | In bioinformatics and biochemistry, the FASTA format is a text-based format for representing either nucleotide sequences or amino acid (protein) sequences, in which nucleotides or amino acids are represented using single-letter codes. The format also allows for sequence names and comments to precede the sequences. The format originates from the FASTA software package, but has now become a near universal standard in the field of bioinformatics. |
| **[zip](https://en.wikipedia.org/wiki/Zip_(file_format))** | ZIP is an archive file format that supports lossless data compression. A ZIP file may contain one or more files or directories that may have been compressed. |
----------------------------------------------------------------------------------------------------------------
		Inorder to submit a file you must have already submitted the collection. Once you do you can click **Submit** and it will submit to the collection just created.
  
* **Handler**: You also need to select a handler. By default only one option is provided but more handlers can be added via [submit plugins](https://github.com/SynBioHub/Plugin-Submit-Excel-Library).     

* Finally, you have an option to overwrite the existing objects in that collection i.e, removing all the existing objects in the collection and adding new ones or keeping the old resources and adding the new ones.

3. At last, click on **Submit**.

### 4.1.2 Submitting to an Existing Collection

1. Select the **add to existing collection** option.

2. Then, select your desired collection, to which you want to add your submission from the dropdown menu.

3. Subsequently, upload the files which you want to submit. The file should be of the following types:


 |  Type             | Description  |
    |-------------------|--------------|
        |  SBOL             | The Synthetic Biology Open Language (SBOL) has been developed as a standard to support the         specification and exchange of biological design information in synthetic biology. To know more about SBOL, visit [this page](https://sbolstandard.org/datamodel-about/)           |
        | Annotated zip | ZIP is an archive file format that supports lossless data compression. A ZIP file may contain one or more files or directories that may have been compressed. To know more about zip, visit [this page](https://en.wikipedia.org/wiki/Zip_(file_format))|
    | GFF3       | The GFF (General Feature Format) format consists of one line per feature, each containing 9 columns of data, plus optional track definition lines. To know more about GFF3, click [here](http://asia.ensembl.org/info/website/upload/gff3.html).|
    | FASTA       | In bioinformatics and biochemistry, the FASTA format is a text-based format for representing either nucleotide sequences or amino acid (protein) sequences, in which nucleotides or amino acids are represented using single-letter codes. The format also allows for sequence names and comments to precede the sequences. The format originates from the FASTA software package, but has now become a near universal standard in the field of bioinformatics. To know more about FATSA file format, click [here](https://en.wikipedia.org/wiki/FASTA_format)|
| Zip | ZIP is an archive file format that supports lossless data compression. A ZIP file may contain one or more files or directories that may have been compressed. To know more about zip, visit [this page](https://en.wikipedia.org/wiki/Zip_(file_format))|
----------------------------------------------------------------------------------------------------------------

4. Finally, you have an option to overwrite the existing objects in that collection i.e, removing all the existing objects in the collection and adding new ones or keeping the old resources and adding the new ones.

5. At last, click on **submit**.


## 4.2 Managing

1. Navigate to SynBioHub's home page.

2. Click on **manage submissions**. On this page you'll be able to see collections to be divided, broadly under 2 categories. The 1st one being, **public collections**, which you've created and only you have access to them and 2nd one being, **private collections**, to which all the users have access to.

3. You can view your collection by clicking on the collection name. 

4. In order to make your collection public, click on the collections you want (using the checkboxs on the left hand side) then click on **Publish**. This will enable other users to view your collection and its contents.

6. To delete your collection, click on **Remove**. This will remove the collection as well as the resources contained, in that specific collection, namely promoters, activators, modules, components, engineered region, etc.


## 4.3 Updating

1. On the submit page select the collection you want to submit your design to.

3. Select the design that you want to submit.

4. You may choose to *overwrite the existing objects* in a collection.

5. Then, click on **Submit**.

## 4.4 Editing a Submission

To edit your submissions, following steps need to be followed:

1. Go to the submissions page.

2. Select the collection that you want to edit.

3. First of all, you can edit the **name** and **description** of the record.

4. Then, you can add a **source** for your record.

5. Subsequently, you may add a brief description for your record.This may contain details that can be described in brief about that particular record.

6. As you scroll down, you'll find a clickable menu, titled **details**. Under this section, you can find the following options which you can edit. They're as follows:

* **Add Description**: Here, you can provide a detailed description for your record. 

* **Add notes**: In this section, you can provide additional notes for explaining your record. 

	Here you can use the basic text formatting options, such as **bold**, *italic* and underlining. Also, you may include an image as well links with the use of html tags.


* **Source**: Here, you can enter various links from referring, to the place from where your record has been generated from.

* **Citations**: You just need to add pubmedID's separated by commas, using which you can cite several research papers.

7. Then, we have the section titled, **other properties**. Under this section, you can add/edit various properties, other than Synbiohub#ownedBy and Synbiohub#topLevel. 

8. Finally, we have the attachments sections. Herein, you can upload as well as lookup for an attachment.The process for both the options, is described in detail, as follows:

1. **Upload attachments**: For uploading an attachment, you just need to click, **select file(s)** option and a popup shall appear. Now you need to select the attachments from your machine based on your convenience. 

2. **Lookup attachment**: Under this option, you can search for attachments. For this, you need to provide a URL for the attachment as well as its name. Then you need to select the type of attachment, for which you want to search for. The types are as follows: .nib, 2bit, A2M, ABI, etc...

## 4.5 Add to an Existing Collection

On some record pages you might find an option titled, **add to an existing collection**. Using this option, you can add the record which you're currently viewing to a collection that is already there. For that, simply follow the following steps:

* Click **add to collection**. This will direct you to page, consisting of a dropdown menu.

* Then, click on that dropdown menu. This will contain a list of collections, that'er already existing and the record which you're currently viewing can be added to it.

* Then, select the collection as per your convenience, from the dropdown menu.

* Finally, click **add to collection**.

This shall add the the record or the collection which you're currently viewing to the collection, which you've selected.  
