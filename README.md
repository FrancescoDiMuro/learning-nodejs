# Learning NodeJS

**Start:** 2025-02-01

Hi!<br>
I'm Francesco Di Muro, and this is my NodeJS learning journey.<br>
As the new year (2025) started, I want to learn this famous tool to enhance my knowledge in the Web Development field.<br>

I'm gonna structure this README as much in detail as I can, so it can be helpful to other learners as well.<br>
For sure, I'm gonna take some notes as well about the [guide](https://trainingportal.linuxfoundation.org/learn/course/introduction-to-nodejs-lfw111x/setting-up/setting-up-node?page=2) I'm studying.

So, let's get started!

### Lesson 1
fnm => **F**ast **N**ode **M**anager

To install the **L**ong-**T**erm **S**upport version of NodeJS, use the command
```cmd
fnm install --lts
```

To verify that Node has been installed correctly, run the command
```cmd
node --version
```

### Lesson 2
`.nvmrc` files are used to specify which version of Node has to be used when running the developed application 
with NodeJs and with the installed package manager.<br>
The .nvmrc must be present in the root folder of the project.<br>
To create a .nvmrc file, just use a text editor and type in the version of NodeJS to be used in the project (e.g. *v22.12.0*).

Once the .nvrmc has been created, use the command
```cmd
fnm use --version-file-strategy local
```



