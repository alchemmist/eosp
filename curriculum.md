---

kanban-plugin: board

---

## Lecture 1

- [ ] #note Acquaintance!
- [ ] #lecture What is OpenSource and why it important? Show examples of huge and popular projects and archived repositories
- [ ] #lecture The idea and goal of our project. Architecture recap: `lib` → `cli` → `bot`
- [ ] #lecture Motivation and mindset on course
- [ ] #live-demo Creating organisation and repository on GitHub
- [ ] #lecture Introduction to GitHub API. Limitations
- [ ] #live-demo Show the difference ways for working with GitHub API: `gh cli`, `curl`, `browser`, `requests`
- [ ] #lecture How developing process in OpenSource looks like (GitHub Flow)
- [ ] #practice Come up with project name
- [ ] #note How to productive working on course?
- [ ] #note Expectations: what is considered “done” on this course
- [ ] #note Announcement of next lecture


## Lecture 2

- [ ] #lecture Why library is the core of the whole system. Library as lowest level interface
- [ ] #lecture Learning how to work with the uv package manager
- [ ] #lecture Review of `lib` repository structure and library design
- [ ] #live-demo - Adding first metric end-to-end (API → logic → test)
- [ ] #practice Students at pairs try to solve issue and sent pull request
	(*I’m reject it because this haven’t tests and we start to talk about testing*)
- [ ] #lecture Why testing is best way for up and hold code quality. The correct perception of testing: not privilege, base minimum. The image of protective wall.
- [ ] #lecture How to write tests on Python? Test Driven Development
- [ ] #practice Students adding tests to their pull requests. (*They can swap code writer in pair*)
- [ ] #note Announcement of next lecture


## Lecture 3

- [ ] #homework Open at least one issue describing improvments, bugs or refactor
- [ ] #homework Install the necessary tools and dependencies. Up the project locally
- [ ] #lecture What is CI/CD and why it’s important for code quality
- [ ] #live-demo Setup and trying CI/CD in `lib`
- [ ] #live-demo How we build a new release of `lib` and publish it manually
- [ ] #lecture How to make autodeploy release of `lib`
- [ ] #lecture What is cli: commands, flags, exit codes. Difference between gui, tui and cli
- [ ] #lecture Why CLI exists: when library is not useful
- [ ] #lecture Show examples of very popular cli
- [ ] #lecture Fast review of licenses in Open Source
- [ ] #note Announcement of next lecture


## Lecture 4

- [ ] #homework Write a documentation for library at GitHub wiki
- [ ] #homework Make pull request with `LICENSE` to our repose and justify why this type of license is suitable for us
- [ ] #lecture How to write a cli with `click` python library
- [ ] #lecture Review of `cli` repository strucure
- [ ] #live-demo Setup auto deploy on release of `cli`
- [ ] #lecture How telegram bots works in general
- [ ] #lecture How (and why) to use `python-telegram-bot` for creating telegram bots
- [ ] #lecture How do we hide secrets from visitors to our repository and hackers
- [ ] #lecture Review of `bot` repository structure
- [ ] #note Announcement of next lecture


## Lecture 5

- [ ] #homework Add example usage of `lib` to wiki documentation
- [ ] #lecture How to write honest and attractive `README`
- [ ] #note Announcement of next lecture


## Lecture 6

- [ ] #lecture Where code lives vs where it runs
- [ ] #lecture Fast intro to docker
- [ ] #live-demo How to deploy `bot` manually
- [ ] #lecture How to make auto deploy on release of `bot`
- [ ] #practice Common make a draft of pitching and slideck
- [ ] #lecture Hacks about how to make a good pitching
- [ ] #lecture Hacks about how to make a good slide deck
- [ ] #note Announcement of next lecture


## Lecture 7

- [ ] #homework Create demo video/screencast
- [ ] #homework Prepare a pitching
- [ ] #homework Prepare a slide deck
- [ ] #practice Review of pitching and slide deck
- [ ] #note Announcement of next lecture


## Lecture 8

- [ ] #practice Common mock pitch defense
- [ ] #note Make a retro. Discussion about future of project. Pizza!
- [ ] #idea Asking Mari about more time at last lecture or about going to resorunt in unformal format for making retro and celebrate


## ???

- [ ] #note Create `CONTRIBUTING.md` guide
- [ ] #note Write blog post about our project and share it on Habr, Medium, Devto
- [ ] #idea At final steps make repositories vary comfartbale for new contribution and after that invite CU students and not only to this project
- [ ] #idea Invite external reviewer (not teacher) to leave harsh feedback on repo
- [ ] #idea collect GitHub data and make a study
- [ ] #idea Make GitHub Discussions enabled and seed first questions
- [ ] #idea Highlight some issues and doesn’t close it, that will for new contributors. Tag some issues as `good first issue` and `help wanted`
- [ ] #idea Do a public call for feedback on Reddit / Telegram / Discord
- [ ] #idea Add badges that actually mean something (coverage, release cadence)
- [ ] #idea Connect AI for analyze PRs or user profile




%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false,false,false,false,false,false]}
```
%%