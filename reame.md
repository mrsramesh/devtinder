Day -01
npm init
make the app.js (server ) in src
when we install (npm i express) then node _module and package-lock.json file add in the project 
in node__module all code of the "express" download in the system and store in the node_module folder to use it 
dependencies means our project depands on these things . and all these dependies all store in the node_module folder 
when we download 1 dependcies . but node_modeules has some extra folder "becouse our dependencisse are depends on some other dependencies that are also download in our system {all folder is usefull no extra }" it has all the code of the dependcies 
Q => <h1>what is the package-lock.json </h1>
ans => what is actual version of dependcies  i use in the project is defining in the package-lock.json file 
"our project use the latest version of the dependncise in show in the -lock.json file not in packedge.json file "
-lock.json batata hai ki project kis version pr chal rha hai 

Q  => what is the work of the .bin folder in the node_module folder 

in the verion of any dependencies what is ^(caret) ['auto update minor and patch changes ,not update the major updated '],~(telda),
Q what is the mwaning of the version 
x.x.x=> major(beark the all repojitry ).minor(new minor features ).patch(small change , bugfix )  


know about the app.use ();
run the project using node app.js && nodemon app.js  "this work do again and again so setup comand in the packedge.json file " [npm run start ]



day 02 (routing and request handler )

git init 
git add.(save the changes)
git commit  -m "message" 
add remote. (push the data on the hub).
git branch main -M main
git push -u origin main

gitignore file me wo likhte hai zisko github pr uplaod na karna  ho 



Q kya packedge-lock.json ko git pr dalana  jaruri hai 

* jab ham app.use('/',fx) '/' path ko sabse uper rakhte hai to yi sare route ko over right kr deta hai or sabhi route me '/' path hi chalata hai . and ese nichhi(last) rakhani pr sabhi all defini path to sahi chalte hai but random path '/' pr chali jatai hai 
(that means squence of code matter ordre is very very important in the ruting **  ) 

# '/hello' this is the main path but but if we put add any thing using / then path also goes to '/hell/anything/anything' it also goes to '/hello' requestHandler function ,'/helloxyz' work nhi karega use '/hello' path ke bad / se add karke anythig add kr do '/path' match hona chahiyi needed.  
that's mean agr aagi ka string match kar jata hai to / lagakr kuch bhi aa jai oh us RH fx call kr dega .
.
app.use(/path) isme problem yi hai ki yi get and post dono request ki liyi call ho jata hai. chahi tumko data send karna ho ya retrive . iske wajah ham app.get(path),app.post(path) fx ka use karenigi to seperate the api's call 
.use()=> this will match all the http method api calls to /text ..
.get() this will only handle get call to /user  "the sytax is exectly same "

make the .get(),post(),delete() api calls on the same path work wall . if we add the use() api call on the same path and palce at the top then he handddle all the api call and below apis noot work on the same path . because ordre is matter. 

Advance Routing Technique (like regular expression )
-1-ab+c > abbb(n)..c
-2-ab?c= b is optional here..
-3-ab*cd = ab..anything ..cd work it
-4- a(bc)?d = bc is optional {ad}  
-5- /a/ => if in the path string a comes then it's works.(regids)
-6- /*fly$/ => start anything and end with fly then it works .




read about the quary parmes "res.query". query paramas using ?(start)
use it [? id=value&&id1=value] 
res.params=> /user(path)/data1/data2/data3/..
on this api's /user/:uid/:uname/:upass/:... 
this data show in the temetal using "req.params" 
{
    chat gpt notes of day1 and day 2
}Day 01: Setting Up the Project
1. Initializing the Project
Run npm init to create a package.json file.
Create app.js (server file) inside the src folder.
2. Installing Dependencies
Run npm i express.
This creates:
node_modules/ → Contains the actual code of installed dependencies.
package-lock.json → Tracks the exact versions of dependencies used.
3. Understanding node_modules/ and Dependencies
All installed dependencies are stored inside node_modules/.
When you install a dependency, it may also install other dependencies it relies on.
No extra files are downloaded—everything inside node_modules/ is needed.
4. What is package-lock.json?
Tracks the exact versions of dependencies installed in the project.
Ensures the project uses the same dependency versions across all systems.
The package.json file may allow flexible versions, but package-lock.json ensures consistency.
5. What is the .bin folder inside node_modules/?
It contains executables (binary files) required by some dependencies.
6. Understanding Versioning (x.x.x format)
Major (1.x.x) → Breaking changes (old versions may stop working).
Minor (x.1.x) → New features, but backward compatible.
Patch (x.x.1) → Small fixes (bug fixes, security patches).
Symbols in Versioning
^ (caret) → Auto-updates minor & patch versions but not major.
~ (tilde) → Auto-updates only patch versions.
7. Running the Project
Start the server using:
sh
Copy
Edit
node app.js
Use Nodemon for auto-restart on file changes:
sh
Copy
Edit
nodemon app.js
Instead of running this manually every time, define a script in package.json:
json
Copy
Edit
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
Run using:
sh
Copy
Edit
npm run dev
Day 02: Routing & Request Handling
1. Git Commands
Initialize Git:
sh
Copy
Edit
git init
Stage changes:
sh
Copy
Edit
git add .
Commit changes:
sh
Copy
Edit
git commit -m "Your message"
Push to GitHub:
sh
Copy
Edit
git branch -M main
git remote add origin <repo-url>
git push -u origin main
Ignore files using .gitignore (e.g., add node_modules/ to avoid uploading it).
2. Should You Push package-lock.json to Git?
✅ Yes, because it ensures everyone uses the same dependency versions.

3. Understanding app.use()
app.use('/', handlerFunction) at the top → Overrides all routes, making other routes unreachable.
Order matters in routing.
Keep app.use('/') at the bottom so all defined routes work correctly.
4. Routing Behavior in Express
If you define a route like:
js
Copy
Edit
app.use('/hello', handlerFunction);
Then:
/hello/anything/anything → Works ✅
/helloxyz → Does not work ❌
Meaning: Anything after /hello/ is allowed, but /helloXYZ won’t match.
5. app.use() vs app.get()
app.use('/text', handlerFunction); → Matches all HTTP methods (GET, POST, DELETE, etc.).
app.get('/user', handlerFunction); → Handles only GET requests.
6. Order of API Definitions Matters
If you define .use() before .get(), .post(), .delete(), etc. on the same path, then:
.use() catches all requests and prevents other methods from working.
Best practice: Define .get(), .post(), .delete() first, then use .use() only if needed.
Summary of Key Learnings
✅ Order of routes matters in Express.js.
✅ package-lock.json ensures dependency version consistency.
✅ .use() applies to all HTTP methods, while .get(), .post(), etc., handle specific requests.
✅ Versioning in package.json:

^ → Auto-updates minor & patch versions.
~ → Auto-updates only patch versions.
✅ Use Nodemon for automatic server restarts during development.
✅ Push package-lock.json to Git, but ignore node_modules/.


Day 03 controller and middlerware 
***most imp
app.use("/path",rh1,rh2,rh3,...)
or app.use("/path",[rh1,rh2,rh3,...])
or app.use("/path",[rh1,rh2],rh3,...) all work same way 
alert about the next and send function 
thay work of any http method 
