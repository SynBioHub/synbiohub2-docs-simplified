---
weight: 10
hidden: false
---

### General
The docker-compose files in [this repository](https://github.com/SynBioHub/synbiohub2-docker) represent various configurations for deploying SynBioHub.
The files can be layered with Docker Compose's [multiple file](https://docs.docker.com/compose/reference/overview/#specifying-multiple-compose-file) capabilities. 

The base configuration, described with `docker-compose.yml`, is simply SynBioHub2, its graph database Virtuoso, and an autohealer.

To run the base configuration:

1. Before trying to run SynBioHub locally on your PC, Make sure that you have [Git](https://git-scm.com/downloads) and [Docker](https://docs.docker.com/get-started/get-docker/) installed.

2. Open the terminal/cmd. You may need to run some commands as administrator/superuser. If you run into any errors try this first. Tip for windows: you need to start the terminal app as admin and you cant run individual commands as admin like on mac or linux.

3. Navigate to the directory where you want to install SynBioHub.
   
   `cd directory_name`
   
   If you need a refresher on terminal feel free to read [this article](https://www.lifewire.com/change-directories-in-command-prompt-5185508)

4. Subsequently, enter the following command into your terminal:

   `git clone -b snapshot https://github.com/synbiohub/synbiohub2-docker`
   
   This downloads a copy of the snapshot branch, which is known to work.

5. Then, enter the following command to start the local instance of SynBioHub:
      
   `docker-compose -f ./synbiohub-docker/docker-compose.yml up`
   
   This is the step where you most likely need to use root.
   On macos or linux add sudo to the start of the command before typing the rest.
   On windows make sure you are in an admin terminal, if not open a new terminal as admin, and then redo step 3 and come back to step 5.

   
6. In your browser search for localhost:3333 and it'll take you to a setup page when you'll run it for the very first time. From here you should go to the **[NEXT STEP](/setup)** if you want to continue. If you want to know how to shut down SynBioHub continue reading.

7. The following command stops a local instance of SynBioHub (but only if you are in the correct directory, see step 3):

   `docker-compose -f ./synbiohub-docker/docker-compose.yml down`
  	

### With SBOLExplorer
You can also run SynBioHub, by using SBOlExplorer.
To add [SBOLExplorer](https://github.com/michael13162/SBOLExplorer), add the `docker-compose.explorer.yml` to the main docker-compose, i.e. for step 5 run the following command: 

`sysctl -w vm.max_map_count=262144`

`docker-compose -f ./synbiohub-docker/docker-compose.yml -f ./synbiohub-docker/docker-compose.explorer.yml up`

**Presently, the command `sysctl -w vm.max_map_count=262144` runs only on linux, due to OS upgrades on Mac OS***

### With Plugins
To add plugins to the configuration, change the command mentioned in step 5 to: 

`docker-compose -f ./synbiohub-docker/docker-compose.yml -f ./synbiohub-docker/docker-compose.explorer.yml -f ./synbiohub-docker/docker-compose.<Plugin 1 File Name>.yml -f ./synbiohub-docker/docker-compose.<Plugin 2 File Name>.yml up`

Note that all plugins are added before the `up` and each is preceeded by `-f `. For example, to run the configuration with the VisualIgem plugins and the VisualSeqviz plugin run:

`docker-compose -f ./synbiohub-docker/docker-compose.yml -f ./synbiohub-docker/docker-compose.explorer.yml -f ./synbiohub-docker/docker-compose.pluginVisualIgem.yml -f ./synbiohub-docker/docker-compose.pluginVisualSeqviz.yml up`

A table of currently available plugins can be found **[here](https://synbiohub.github.io/synbiohub-docker/#plugins)**.

## Installation from Source

Follow the instructions on the following [GitHub README](https://github.com/synbiohub/synbiohub) to install SynBioHub locally onto your system.
