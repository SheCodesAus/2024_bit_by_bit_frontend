# Ways of Working: Bit By Bit (Byte Time)
## Introduction
This document outlines our team's practices and procedures for working effectively on our project. Our goal is to maintain a high standard of quality, consistency, and collaboration.

## Communication
- **Regular Meetings**:Class’s: Tuesdays 5.30-8pm; Saturdays 9am-13.30pm; Thursday evening meeting: Anytime after 6pm (must collab about time so most team members can attend - but meeting goes ahead regardless so long as there’s 2+ members)
- **Chat Platform**: Use Slack for daily communication; Discord will be used for team meetings outside of classes
- **Issues/Discussions**: For project-related discussions, use GitHub Issues

## Branching Strategy
- **GitHub Flow**: This strategy is set up so that there is a main branch, which serves as our production branch - and will only be merged once everything is working as it should be in DEV, a default branch - DEV - that serves as the development branch, and individual feature branches where team members can work on adding new features without compromising the DEV or main branch. 
- **Main Branch**: The Main branch is our safe, secure home
- **Development Branch**: Use the DEV branch for ongoing development
- **Feature Branches**: Create a new branch for each feature, named `[feature/your-feature-name]` e.g. adminlogin/buttonsandstyling
- **Hotfixes**: Hotfix branches, named `[hotfix/issue-name]`, are for urgent fixes directly on DEV ; Main will be kept clean; this is the ONLY TIME we will branch within a branch as its exceptional circumstances

*The basic GitHub Flow process*:
1. Create a branch 
2. Edit the branch
3. Create a pull request
4. Merge the pull request
5. Delete the branch

## Coding Practices
- **Code Style**: 
- **Documentation**: Comment your code and update the README as needed.
- **Testing**: 

## Pull Requests and Code Reviews
- **Pull Requests (PRs)**: All changes must be made through PRs. Describe your changes clearly, use the template. 
- Just to get confusing there’s four terms we all need to be aware of as they’re named kind of the same but do different things:

Term > What’s It Do?
Merge > Merge a remote branch into your current branch to bring it up to date; this is very similar (if not the same) as a PR (see below)
Push > Transmits local branch commits to the remote repository branch
Pull > Fetch and merge any commits from the tracking remote branch
PRs (Pull Request or Request Pull) > Lets you tell others about changes you’ve pushed to a branch in the GH repo; this is the review and integration process
Push Request > Less common term referring to the direct pushing of code changes to a remote repo WITHOUT prior review; We will NOT be using this one

- **Review Process**: Each PR requires at least 1 review + yourself
- **Merge Criteria**: Reviews must be conducted by someone other than the developer who intitated the PR. No pending conversations. No pending change requests. 
- **Stale PRs**: If you’ve created a PR, gotten a review, then made a change to the PR (by making a commit to that PR, for example), the existing review will be dismissed and you will be required to make a new PR.

## Issue Tracking
- **Creating Issues**: Clearly describe the issue or feature request with a meaningful title and detailed description. Use the template. 
- **Assigning Issues**: Assign yourself to an issue you're working on and label it appropriately.
- **Updating Progress**: Regularly update the issue to reflect the current status.

## Security Practices
- **Sensitive Data**: Never commit sensitive or Personal Identiable Information data to the repository.

## Continuous Improvement
- **Feedback on Practices**: Regularly discuss and update our ways of working to reflect best practices and team needs.