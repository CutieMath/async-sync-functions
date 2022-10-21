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

console.log("Before");
getUser(1, (user) => {
  console.log("User received: ", user);
  getRepositories(user.id, (repos) => {
    console.log("Repositories received: ", repos);
    getCommits(repos[0], (commits) => {
      console.log("Commits received: ", commits);
    });
  });
});
console.log("After");
