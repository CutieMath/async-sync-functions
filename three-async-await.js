// Method two: Use promises

// Construct promises
const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetch stuff from database...");
      resolve({ id: id });
    }, 2000);
  });
};

const getRepositories = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetch stuff from database for user ${userId}...`);
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
};

const getCommits = (repoId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetch stuff from database for repository ${repoId}...`);
      resolve(["commit1", "commit2", "commit3"]);
    }, 2000);
  });
};

// Consume promises
console.log("Before");
const user = await getUser(1);
const repos = await getRepositories(user.id);
const commits = await getCommits(repos[0]);
console.log("Commits received: ", commits);
console.log("After");
