# Learning NodeJS

**Start:** 2025-02-01

Hi!<br>
I'm Francesco Di Muro, and this is my NodeJS learning journey.<br>
As the new year (2025) started, I want to learn this famous tool to enhance my knowledge in the Web Development field.<br>

I'm gonna structure this README as much in detail as I can, so it can be helpful to other learners as well.<br>
For sure, I'm gonna take some notes as well about the [guide](https://trainingportal.linuxfoundation.org/learn/course/introduction-to-nodejs-lfw111x/setting-up/setting-up-node?page=2) I'm studying.

So, let's get started!

### How to properly download NodeJS
There are many ways to install NodeJS.<br>
For many reasons (security, cross-platform support, standardization), a package manager is the preferred way to install Node.
Use `fnm` **F**ast **N**ode **M**anager to install NodeJS.

To install the **L**ong-**T**erm **S**upport version of NodeJS, use the command
```cmd
fnm install --lts
```

To verify that Node has been installed correctly, run the command
```cmd
node --version
```

### What's a .nvmrc file
`.nvmrc` files are used to specify which version of Node has to be used when running the developed application 
with NodeJs and with the installed package manager.<br>
The .nvmrc must be present in the root folder of the project.<br>
To create a .nvmrc file, just use a text editor and type in the version of NodeJS to be used in the project (e.g. *v22.12.0*).

Once the .nvrmc has been created, use the command
```cmd
fnm use --version-file-strategy local
```

### Service Mocking
Node can be used to mock data locally for a service that still doesn't exist that we need to integrate with.

#### Create a NodeJS project
To create a NodeJS project, run the command (in the project folder)
```cmd
npm init
```

The `package.json` file is the core for every NodeJS project;<br>
in contains the dependencies, the scripts and the project configurations.

#### Quick File Server
To create a static site or single page application with a neat directory content, we can use the package package `serve`.

Before running this command, and a `.gitignore` file to your project, with the content
```text
node_modules
```

and the run the  command
```cmd
npm install serve
```

to install the *serve* package.


