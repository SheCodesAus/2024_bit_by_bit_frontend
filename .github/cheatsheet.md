### GitHub Basic Commands
#### Setting Up
- **Clone a Repository**: `git clone [URL]`
- **Check Status**: `git status`
- **Create a New Branch**: `git branch [branch-name]`
#### Making Changes
- **Switch to a Branch**: `git checkout [branch-name]`
- **Create and Switch to New Branch**: `git checkout -b [new-branch]`
- **Add Changes to Stage**: `git add [file-name]` or `git add .` (to add all changes)
- **Commit Changes**: `git commit -m "[commit message]"`
#### Syncing Changes
- **Pull Latest Changes**: `git pull origin [branch-name]`
- **Push Local Commits to GitHub**: `git push`
#### Branches and Merging
- **List All Branches**: `git branch -a`
- **Merge a Branch**: `git merge [branch-name]`
- **Delete Local Branch**: `git branch -d [branch-name]`
### GitHub Workflow Tips
1. **Always Pull Before Starting Work**: To ensure you're working with the latest code, always pull the latest changes from the remote repository.
2. **Work on Feature Branches**: Never work directly on the main branch. Create a new branch for each feature or task.
3. **Commit Often, Push Regularly**: Make small, frequent commits with clear messages. Push these to GitHub regularly.
4. **Use Pull Requests for Merging**: PRs MUST be used. This allows for code review and discussion.
5. **Review and Merge Pull Requests**: At least 2 reviewers are required for each PR.
6. **Resolve Conflicts Promptly**: If you encounter merge conflicts, resolve them promptly and communicate with the team if needed.
7. **Keep Branches Up-to-Date**: Regularly update your feature branches with the latest changes from the main branch.
### Collaborating on GitHub
- **Creating an Issue**: Use GitHub Issues to report bugs, request features, or discuss changes.
- **Assigning Issues**: Assign issues to specific team members for responsibility.
- **Commenting on Issues**: Use issue comments to provide input, ask questions, or update progress.
### GitHub Best Practices
1. **Clear Commit Messages**: Write clear, descriptive commit messages to explain what changes were made and why.
2. **Review Code Before Committing**: Self-review your code for mistakes or improvements before committing.
3. **Regularly Fetch and Merge**: Keep your local repository updated with the latest changes from the main branch.