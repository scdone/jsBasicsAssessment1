/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = "Git repositories save coding files. you can edit, save, and upload changes including comments. \nGit works locally but can work in conjucntion with remote access on GitHub, where files are stored\n with remote access for programmers to work topgether or to display your work."
console.log(gitDefinition)

//CODE HERE

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "GitHub is a remote database where files are stored in a cloud that can be accessed online. \n This allows programmers to work together and show their work."
console.log(gitHubDefinition)


//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

const init = {
    description: 'Creates a new git repositoty.',
    code: 'git init'
}

console.log(init.code)
console.log(init.description)


//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

const clone = {
    description: 'Creates a copy of an existing repository.',
    code: 'git clone'
}

console.log(clone.code)
console.log(clone.description)

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

const status = {
    description: 'Shows status of repository such as if there are untracked files or changes which need to be committed.',
    code: 'git status'
}

console.log(status.code)
console.log(status.description)

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

const add = {
    description: 'Adds a copy of changes made to file, similar to saving a word document.',
    code: 'git add'
}

console.log(add.code)
console.log(add.description)

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    description: 'Saves changes made along with a user-inputed message notating what was changed.',
    code: 'git commit'
}

console.log(commit.code)
console.log(commit.description)

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {
    description: `Pushes local file to remote destination of user's choice.`,
    code: 'git push'
}

console.log(push.code)
console.log(push.description)