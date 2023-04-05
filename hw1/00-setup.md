## Setup Instructions

### Installation

1. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. Download [VS Code](https://code.visualstudio.com/) as your code editor.

   - Set Up VS Code to [launch from the command line](https://code.visualstudio.com/docs/editor/command-line#_launching-from-command-line).

   - I recommend installing the following extensions to start with:
     - Git Lens
     - Live Server
     - Prettier
     - ESLint

3. Sign up for a GitHub account and the [GitHub Student Pack](https://education.github.com/pack).

4. Set up [SSH keys for GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh).

### Setting up the Homework Repository

There are two options for setting up your homework assignment. You can either use the GitHub option to "fork" the frontend-homework repository into a public repository or you can clone the frontend-homework repository and set up a private repository.

#### Option 1

1. Go to the frontend-homework repository and hit the "fork" button. You may be asked to select which organization you wish to fork it to (if you are part of multiple organizations). Choose the one you typically use for school purposes.

2. Clone the forked repository.

```console
$ git clone git@github.com:student/frontend-homework.git <folder-name>
Cloning into '<folder-name>'...
remote: Enumerating objects: 119, done.
remote: Counting objects: 100% (119/119), done.
remote: Compressing objects: 100% (75/75), done.
remote: Total 119 (delta 58), reused 96 (delta 40), pack-reused 0
Receiving objects: 100% (119/119), 507.92 KiB | 2.01 MiB/s, done.
Resolving deltas: 100% (58/58), done.
```

3. Navigate into your newly created `<folder-name>` folder and check the remotes.

```console
$ git remote -v
origin	git@github.com:student/frontend-homework.git (fetch)
origin	git@github.com:student/frontend-homework.git (push)
```

#### Option 2

1. Navigate to your preferred folder and clone the repository.

```console
$ git clone https://github.com/caterinasworld/frontend-homework <folder-name>
Cloning into '<folder-name>'...
remote: Enumerating objects: 119, done.
remote: Counting objects: 100% (119/119), done.
remote: Compressing objects: 100% (75/75), done.
remote: Total 119 (delta 58), reused 96 (delta 40), pack-reused 0
Receiving objects: 100% (119/119), 507.92 KiB | 5.91 MiB/s, done.
Resolving deltas: 100% (58/58), done.
```

2. Navigate into your newly created `<folder-name>` folder and rename the remote to something else, e.g. homework.

```console
$ cd <folder-name>/

$ git remote -v
origin	  https://github.com/caterinasworld/frontend-homework.git (fetch)
origin	  https://github.com/caterinasworld/frontend-homework.git (push)

$ git remote rename origin homework

$ git remote -v
homework	https://github.com/caterinasworld/frontend-homework.git (fetch)
homework	https://github.com/caterinasworld/frontend-homework.git (push)
```

3. Navigate to your account on GitHub and create a public repository, i.e. public-student-repo.

4. Add collaborator(s). Go to 'Settings' --> 'Manage Access' --> click the 'Invite a collaborator' button. Add your discussion group members.

5. Add the GitHub repository that you created as a remote.

```console
$ git remote add origin https://github.com/student/public-student-repo.git

$ git remote -v
origin	  https://github.com/student/public-student-repo.git (fetch)
origin	  https://github.com/student/public-student-repo.git  (push)
homework	hhttps://github.com/caterinasworld/frontend-homework.git (fetch)
homework	https://github.com/caterinasworld/frontend-homework.git (push)
```

6. Push the files you cloned into your newly created private remote.

```console
$ git push -u origin main
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 4 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (8/8), 2.67 KiB | 1.33 MiB/s, done.
Total 8 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), done.
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

7. To make any changes, create a branch and push those changes wihtin that branch on the remote.

### Submitting a Pull Request (PR)

1. Create a new branch.

```console
$ git branch <newbranch>
$ git checkout <newbranch>

or

$ git checkout -b <newbranch>
```

2. Make changes to your code in that branch.

3. Commit the changes to the remote.

```console
$ git add <filename>

$ git commit -m <commitmessage>

$ git push <remote> <branchname>
```

4. When your code is pushed to the remote, you will see a link to the PR in the commnand line. Alternatively, you can open the remote repository on GitHub and search for your PR in the "Pull requests" tab.

5. Add your TA and two students from the discussion group as reviewers on the pull request.

   In the description textarea, make sure to explain what changes you made, why you made those changes, and what feedback you are looking for.

### Required Reading

- Use the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for all JavaScript code submitted.
- [How to Create a Pull Request | GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
- [How to write the description for your pull request or for how to give feedabck](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/)
- Examples of pull requests:
  - [Pull request in Fastify.js](https://github.com/fastify/fastify/pull/4264)
  - [Pull request in GitHub Primer](https://github.com/primer/react/pull/2337)
