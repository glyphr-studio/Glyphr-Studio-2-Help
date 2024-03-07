# Run Glyphr Studio locally

### How do I run Glyphr Studio if I have no internet connection, locally from my computer?

Many web services require a "back-end" to function - if you log in or save information with a
service, there is a database and some additional web stuff going on in the background to make that happen.
The "back-end" for websites is simply some other computer across the internet that plays the role of a server.

Glyphr Studio is a web app, but it does not depend on things that are considered back-end components. It is 100% HTML, CSS, and JavaScript, all of which can be 
run locally on your computer. Even though most people use the app from the hosted location at https://www.glyphrstudio.com/app,
this technically isn't required. You can use Glyphr Studio locally, without an internet connection!

Because of how Glyphr Studio app is built (how the code source files are combined into the final distributed files),
in order to run the app locally, you have to build the app locally. If you are familiar with GitHub, and 
have something like VSCode installed, you can just follow that standard developer process.

This guide, however, will assume you are not a developer, and will outline a slightly simplified process.

#### Step by step guide
 1. Install Node.js: https://nodejs.org
 2. Get the latest Glyphr Studio release from GitHub:
    1. Go to: https://github.com/glyphr-studio/Glyphr-Studio-2/releases/latest
    2. Download `Source code (zip)` or `Source code (tar.gz)`
    3. Extract the files from the archive to a folder you know the path of, for example (on Windows) something like `C:\Users\yourusername\Glyphr-Studio-2-2.0.0\`
 3. Launch a command prompt in that folder
    - One option is to launch the Node.js Command Prompt, then use terminal commands to navigate to your folder. If you are not familiar with command prompt / terminal usage, there are many tutorials online. But very basically, you can type `ls` to see the current directory's contents. Then use the `cd` command to navigate, either `cd ..` to go to the parent folder, or `cd foldername` to go to a child folder.
    - Additionally, it may be possible to navigate to your project folder in your regular file explorer. Then, using a right-click or option menu for that folder, launch a terminal window there, which will automatically set the terminal path to your folder's path.
 4. **The first time** you go through this process, you will have to use Node.js to install build tools. Do this by running `npm install` from the command prompt. A bunch of stuff will happen in the background - just wait for it to finish.
 5. **Each time you want to run the app**, from the terminal, navigate to your project folder and run `npm run dev`
    - The command prompt will output some additional information, about "Vite". It will include a "local" link (it will look something like the link below). Clicking this link will open the Glyphr Studio app!
    - `➜  Local:   http://localhost:5173/`

In this case, we are using a program called Vite to create a server, build the app files, and serve them on a local web server. The 'localhost' link will only be available on your computer.

To be clear, steps 1 through 4 above *do require internet connectivity* to complete. After you have the required things installed, though, step 5 can be done 100% locally on your computer, without access to internet.