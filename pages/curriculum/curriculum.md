---

kanban-plugin: board

---

## Lecture 1

- [ ] #note Acquaintance!
- [ ] #lecture What is OpenSource and why it important? Show examples of huge and popular projects and archived repositories
- [ ] #lecture The idea and goal of our project. Architecture recap: `lib` → `cli` → `bot`
- [ ] #lecture Motivation and mindset on course. Told about finish: best quality repositories, deployed projects, articles, …
- [ ] #practice Come up with project name
- [ ] #live-demo Creating organization and repository on GitHub
- [ ] #lecture Introduction to GitHub API. Limitations. Show the difference ways for working with GitHub API: `gh cli`, `curl`, `browser`, `requests`
- [ ] #lecture How developing process in OpenSource looks like (GitHub Flow)
- [ ] #note How to productive working on course?
- [ ] #note Expectations: what is considered “done” on this course
- [ ] #note Announcement of next lecture


## Lecture 2

- [ ] #homework Read longread about GitHub flow.
- [ ] #homework Read longread about typed Python.
- [ ] #lecture Why library is the core of the whole system. Library as lowest level interface.
- [ ] #lecture What is typing? Why we need to use typing? See the core of typing in Python.
- [ ] #practice Students install the `uv`. And clone the repository.
- [ ] #lecture Learning how to work with the uv package manager.
- [ ] #lecture Review of `lib` repository structure and library design.
- [ ] #live-demo Adding first metric end-to-end (API → logic → test)
- [ ] #live-demo Try to install `mypy` as dev-dependence with `uv` and run on some examples.
- [ ] #note Announcement of next lecture


## Lecture 3

- [ ] #homework Install `uv`. Clone project locally. Install dependencies. Play with different `uv` commands.
- [ ] #homework Read longread about typed Python. Play with code examples, try to run different type-checkers. And read slides from lecture.
- [ ] #homework Optionally, open new issue.
- [ ] #homework Register account on pypi.org.
- [ ] #homework Close issue about personal data in `pyproject.toml`. Send pull requests.
- [ ] #live-demo Together review pull request, which was sand from junior programmer. Find a mistakes.
- [ ] #live-demo Together read PR with the same goal, but written more clean. Learn core of architecture.
- [ ] #practice Students try to solve issue with `good-first-issue` mark and sent pull request. We take one of them and review together.
- [ ] #note Announcement of next lecture


## Lecture 4

- [ ] #homework Closing and creating issues.
- [ ] #lecture Control-quality tools: linters, formatters, static chekers.
- [ ] #lecture `ruff` as linter + formatter + stylechecker. How to configure rules.
- [ ] #lecture What is CI/CD and why it’s important for code quality.
- [ ] #lecture Reminder about staticcheckers.
- [ ] #live-demo Review a pull request, that setup a CI in repo.
- [ ] #lecture `Makefile` as entry point into repository and foundation of repository automation.
- [ ] #live-demo Playing with `Makefile` in repo. Try to run tasks, read source, learn how to expand.
- [ ] #note Answers to questions
- [ ] #practice Students working on their issues.
- [ ] #note Announcement of next lecture


## Lecture 5

- [ ] #homework Closing and creating issues.
- [ ] #lecture Review of submitted pull requests. Answers to questions.
- [ ] #practice Students, try to solve their problems, with teach helps.
- [ ] #lecture Fast review of licenses in Open Source
- [ ] #lecture Discussion about essay “The silence of kittnnes”.
- [ ] #note Announcement of next lecture


## Lecture 6

- [ ] #homework Closing and creating issues.
- [ ] #lecture How to write honest and attractive `README`
- [ ] #lecture Why testing is best way for up and hold code quality. The correct perception of testing: not privilege, base minimum. The image of protective wall.
- [ ] #note Show excerpt from the movie “home alone” like example of automated defense system
- [ ] #lecture Types of tests. Testing pyramid.
- [ ] #lecture How to write tests on Python? Introduction to `pytest`.
- [ ] #note Tell interesting thing: in Postgres, which we looked in previous lecture, count of unit testing limited and you can’t write a unit test if it not essential. This making for test checking passing fast.
- [ ] #practice Students adding tests to pull requests, which they make as homework to today lecture.
- [ ] #note Announcement of next lecture
- [ ] #note Use learn-go-with-tests course for preparing materials about testing


## Lecture 7

- [ ] #homework Closing and creating issues.
- [ ] #homework Prepare a draft of pitching.
- [ ] #homework Make pull request with `LICENSE` to our repose and justify why this type of license is suitable for us
- [ ] #homework Write a `README.md` using recommendations from previous lecture and article
- [ ] #lecture Hacks about how to make a good slide deck
- [ ] #lecture Hacks about how to make a good pitching
- [ ] #practice Common make a draft of pitching and slide deck
- [ ] #note Announcement of next lecture


## Lecture 8

- [ ] #homework Prepare a slide deck
- [ ] #homework Create demo video/screencast
- [ ] #homework Write a documentation for library at GitHub wiki
- [ ] #homework Add example usage of `lib` to wiki documentation
- [ ] #practice Common mock pitch defense
- [ ] #note Make a retro. Discussion about future of project. Pizza!
- [ ] #idea Asking Mari about more time at last lecture or about  informal format for making retro and celebrate


## 🌵 Lecture 9

- [ ] #lecture How to make a releases and versioning you product: https://semver.org/
- [ ] #live-demo How we build a new release of `lib` and publish it manually
- [ ] #lecture How to make auto-deploy release of `lib`
- [ ] #lecture How to be open for new contributors.


## 🌵 Lecture 10

- [ ] #homework Create `CODE_OF_CONDUCT.md` guide
- [ ] #homework  Write an `CONTRIBUTING.md` guide
- [ ] #homework Make a templates for issues in repo. For new contributors
- [ ] #lecture How to write a cli with `click` python library
- [ ] #lecture Review of `cli` repository structure
- [ ] #lecture Show examples of very popular cli
- [ ] #lecture What is cli: commands, flags, exit codes. Difference between gui, tui and cli
- [ ] #live-demo Setup auto deploy on release of `cli`


## 🌵 Lecture 11

- [ ] #live-demo How to deploy `bot` manually
- [ ] #lecture How telegram bots works in general
- [ ] #lecture How do we hide secrets from visitors to our repository and hackers
- [ ] #lecture Where code lives vs where it runs
- [ ] #lecture How to make auto deploy on release of `bot`
- [ ] #lecture How (and why) to use `python-telegram-bot` for creating telegram bots
- [ ] #lecture Introduction to Asynchronous Programming in Python


## 🌵 Lecture 12

- [ ] #lecture Fast intro to docker
- [ ] #lecture Review of `bot` repository structure


## 🌵 Lecture 13

- [ ] #homework Make a pretty landing for the whole project.


## Additionally

- [ ] #note use cowsay (and other fun in slides)
- [ ] #note Write blog post about our project and share it on Habr, Medium, Devto
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
{"kanban-plugin":"board","list-collapse":[false,false,false,false,false,false,false,false,false,false,false,false,false,false]}
```
%%