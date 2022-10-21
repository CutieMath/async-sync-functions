// Method one: Callback functions
let userId = "";

const getUser = (id, callback) => {
  setTimeout(() => {
    console.log("Fetch stuff from database...");
    callback({ id: id });
  }, 2000);
};

const getRepositories = (userId, callback) => {
  setTimeout(() => {
    console.log(`Fetch stuff from database for user ${userId}...`);
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
};

const getCommits = (repoId, callback) => {
  setTimeout(() => {
    console.log(`Fetch stuff from database for repository ${repoId}...`);
    callback(["commit1", "commit2", "commit3"]);
  }, 2000);
};

// Use anonymous function to solve callback hell problem
const getCommitsCallback = (commits) => {
  console.log("Commits received: ", commits);
};
const getReposCallback = (repos) => {
  console.log("Repositories received: ", repos);
  getCommits(repos[0], getCommitsCallback);
};
const displayUser = (user) => {
  console.log("User received: ", user);
  getRepositories(user.id, getReposCallback);
};

console.log("Before");
getUser(1, displayUser);
console.log("After");
