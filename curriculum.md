---

kanban-plugin: board

---

## Lecture 1

- [ ] #note Acquaintance!
- [ ] #lecture What is OpenSource and why it important? Show examples of huge and popular projects and archived repositories
- [ ] #lecture The idea and goal of our project. Architecture recap: `lib` → `cli` → `bot`
- [ ] #lecture Motivation and mindset on course
- [ ] #practice Come up with project name
- [ ] #live-demo Creating organization and repository on GitHub
- [ ] #lecture Introduction to GitHub API. Limitations. Show the difference ways for working with GitHub API: `gh cli`, `curl`, `browser`, `requests`
- [ ] #lecture How developing process in OpenSource looks like (GitHub Flow)
- [ ] #note How to productive working on course?
- [ ] #note Expectations: what is considered “done” on this course
- [ ] #note Announcement of next lecture


## Lecture 2

- [ ] #homework Read longreads about GitHub flow (lecture 1). And read longread about testing on Python (preparing for lecture 2)
- [ ] #lecture Learning how to work with the uv package manager
- [ ] #lecture Why library is the core of the whole system. Library as lowest level interface
- [ ] #lecture Review of `lib` repository structure and library design
- [ ] #live-demo - Adding first metric end-to-end (API → logic → test)
- [ ] #practice Students at pairs try to solve issue and sent pull request
	(*I’m reject it because this haven’t tests and we start to talk about testing*)
- [ ] #lecture Why testing is best way for up and hold code quality. The correct perception of testing: not privilege, base minimum. The image of protective wall.
- [ ] #note Use learn-go-with-tests course for preparing materials about testing
- [ ] #lecture How to write tests on Python? Test Driven Development
- [ ] #practice Students adding tests to their pull requests. (*They can swap code writer in pair*)
- [ ] #note Announcement of next lecture


## Lecture 3

- [ ] #homework Open at least one issue describing improvements, bugs or refactor
- [ ] #homework Install the necessary tools and dependencies. Up the project locally
- [ ] #lecture What is CI/CD and why it’s important for code quality
- [ ] #note Show excerpt from the movie “home alone” like example of automated defense system
- [ ] #live-demo Setup and trying CI/CD in `lib`
- [ ] #live-demo How we build a new release of `lib` and publish it manually
- [ ] #lecture How to make auto-deploy release of `lib`
- [ ] #lecture What is cli: commands, flags, exit codes. Difference between gui, tui and cli
- [ ] #lecture Why CLI exists: when library is not useful
- [ ] #lecture Show examples of very popular cli
- [ ] #lecture Fast review of licenses in Open Source
- [ ] #note Announcement of next lecture


## Lecture 4

- [ ] #homework Write a documentation for library at GitHub wiki
- [ ] #homework Make pull request with `LICENSE` to our repose and justify why this type of license is suitable for us
- [ ] #lecture How to write a cli with `click` python library
- [ ] #lecture Review of `cli` repository structure
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
- [ ] #practice Common make a draft of pitching and slide deck
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
- [ ] #idea Asking Mari about more time at last lecture or about going to restaurant in informal format for making retro and celebrate


## Additionally

- [ ] #lecture `Makefile` as entry point into repository and foundation of repository automation
- [ ] #lecture Introduction to Asynchronous Programming in Python
- [ ] #note Create `CONTRIBUTING.md` guide
- [ ] #note Create `CODE_OF_CONDACT.md` guide
- [ ] #note Write blog post about our project and share it on Habr, Medium, Devto
- [ ] #note How to make a releases and versioning you product: https://semver.org/
- [ ] #note Use for PR: https://github.com/decentralizedlabs/pr-codex
	
	Or this: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review
- [ ] #note Use for PR:
	https://about.codecov.io/
- [ ] #note A few words about puzzle driven development
- [ ] #note Start all lectures (except first) from remind of previous lectures
- [ ] #idea At final steps make repositories vary comfortable for new contribution and after that invite CU students and not only to this project
- [ ] #idea collect GitHub data and make a study
- [ ] #idea Invite external reviewer (not teacher) to leave harsh feedback on repo
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