---
weight: 20
hidden: false
---

When you'll first install SynBioHub locally and navigate to ```http://localhost:3333/```, and the setup page will load since you have not completed setup yet.

You will see a welcome message saying, "**Congratulations, SynBioHub is successfully installed!**"

Then, you need to fill out some details for configuring your local instance, which are as follows:

## 1. Branding Your SynBioHub

Pick a good **Instance Name** that describes what the server is. You can pick a logo for the top left of the header, and you can also change the color which will be used to theme most UI elements.
Finally you can pick if you want the instance to be pu

## 2. Technical Details

You can change these, but they should already be prefilled based on your url, so we don't recommend modifying them. If you are deploying publicly you will need to setup a reverse proxy to host both the frontend and backend at the same url and port.

## 3. Creating Your First User Account

You need to create a user account that will have the first privileged access to your SynBioHub local instance. For that you need to enter certain details, which are as follows:

| Option Name | Description   |
|-------------|----------|
| Full Name   | Enter the name of the user|
| Affiliation(Optional)| You can enter the name of the university/institute that you're currently affiliated to| 
| Email Address| Enter the Email Address, through which you want to get registered. If in future you forget your login credentials, then this shall be used for sending a recovery password for your account| 
| Username | You have to enter a username of your own choice. This shall be displayed on the record page of every record that you submit|
|Password | Enter a password (preferably a strong one) for keeping your user account safe|

<!-- ## 4. Setting up External Authorization Provider

External authentication basically, is the use of third-party authentication sources to decide whether a user should be allowed access to a system, and often what level of access an authenticated user enjoys on a system.

For a SynBioHub local instance, you've got 2 options i.e, **none** or **google**. If you'll select none as your preferred authorisation provider then, you simply have to click **continue**. 

To be able to use Google for authentication, you first need to register with them. This is done at their developer **[console](https://console.developers.google.com/)**. To learn more about using google as your service provider, click **[here](https://docs.identityserver.io/en/release/quickstarts/4_external_authentication.html#adding-google-support)**. Now, if you select google as your preferred authorisation provider, then the you have to provide certain values for the following options:

| Option Name         | Description        | 
|---------------------|--------------------|
| Client ID | This is an identification string that is provided to every user by google. This number is unique for each user. For an example: **XXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com**, this is how a client ID provided by google looks.|
| Client Secret | Client secret values are created for the app by the external authentication provider when the app is registered with the provider and it is a unique identification string. |
| Redirect URL | This is the path in your application that users are redirected to after they have authenticated with Google. The path will be appended with the authorisation code for access. It must have a protocol and cannot contain URL fragments or relative paths. Also, make sure it is not a public IP address.|
-------------------------------------------------------------------------------

If you want to obtain your client ID and client secret, you can visit **[Google's documentation](https://developers.google.com/adwords/api/docs/guides/authentication)** for further reference.  -->

## All Done
Once, you've filled all the details, click **continue**. This will redirect you to the home page of your SynBioHub local instance.\
\
Next lets get started installing some [Plugins](/plugins)!
