## 1a. Clone the repo
If this is your first time working with this repo, navigate to/create the directory you want to work in, then clone the repo:

`git clone <link to repo>`

You will need to connect your local DEV branch to the origin DEV by doing the following:

`git fetch`

`git checkout -b DEV --track origin/DEV`

## OR

## 1b. Update your directory
If you have already been working on the repo locally, you may want to ensure you are working on the most updated version.

First, ensure you are on the DEV branch:
`git status` 		tells you which branch you are working in
`git checkout DEV` 	to switch to DEV branch
`git pull` 		this will update your directory to the latest version on the DEV branch

## 2. Create and start working on a feature branch
`git checkout -b <branch name>`

Branch naming convention follows: feature/name or change you're making ie. bugfix/bex

## 3. Make your changes in the working directory

## 4. Check which changes have been made
`git status`

## 5. Add changes to staging
`git add .` or only the file name/s you want to stage

## 6. Commit changes to your local branch
`git commit -m "commit message"`

## 7. Push your changes to GitHub
`git push` 

Or, if it's the first time pushing from your feature branch:
`git push --set-upstream origin <your-branch-name>`

## Optional
Before creating a Pull Request (PR), you may want to pull from DEV again to make sure everything is up to date:
`git checkout DEV`

`git pull`
This will show you if any changes have been made since your last merge. 

If so:
`git checkout <name of your local branch>`

`git merge DEV`

`git commit -m "message"`

`git push`

## 8. Go to GitHub to create a Pull Request
A PR initiates a code review before any commits are merged to the DEV branch. You can create a PR from the repo's main page on GitHub.
Fill out the PR template. Assign reviewer/s to conduct a code review before your changes are merged with the DEV branch.

## 9. Review Changes
The assigned reviewer/s will review the PR and either approve, comment, or request changes.

All conversation and comments in the PR must be resolved before merging to the DEV branch.

If changes have been requested, make the changes in your feature branch, git add/commit/push to update the PR for further approval.

A minimum of 1 person + the person who wrote the code need to approve the PR before it can be merged into DEV.

## 10. Approve and merge into DEV
Once reviewer/s is happy, they can approve the PR and merge into the DEV branch.

## 11. Delete feature branch
Delete feature branch from GitHub directly.

To delete your feature branch from your local 

`DEV: git branch -d <branch-name>`

## 12. Update your local DEV branch
Good practice is to now update your local DEV branch: 

`git pull origin DEV`

### Note: 
While someone is reviewing, you can create a new feature branch to start working on another feature - as long as, when you need to address comments, you make sure to switch to the right feature branch to update the PR.

# Pushing to MAIN will only occur periodically once we know for sure that everything is working on the DEV branch.