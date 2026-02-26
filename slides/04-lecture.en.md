---
theme: alchemmist
addons:
  - fancy-arrow
title: Code quality in the repository
info: |
  The fourth lecture of course "Engineering Open Source Projects".
  Created by Anton Grishin as part of the CPM and CU 2026 educational project.
drawings:
  persist: false
duration: 95min
date: February 26th, 2026
remoteAssets: false
layout: intro
themeConfig:
  paginationX: r
  paginationY: t
  paginationPagesDisabled: [1]
  footerComponent: Footer
  footerPagesDisabled: [1, 3, 5, 6, 8, 18]
---

# Code quality in the repository

<p>
  Anton Grishin (<a href="https://t.me/alchemmist"><span class="mono-text">@alchemmist</span></a>)
</p>

<span class="mono-text">EOSP #L4, winter 2026. CU x CPM</span>

<div class="abs-br m-6 text-xl">
  <a href="https://github.com/alchemmist/eosp" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

---
layout: center
---

# Table of contents

|                                          |                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------- |
| <code style="color:#0096FF">style</code> | How to control code style in repo? Formatters and syle-checkers. |
| <code style="color:#50C878">lint</code>  | Set and follow some rules or best-practice in code base.         |
| <code style="color:#FFBF00">types</code> | How to check consistency of types system.                        |
| <code style="color:#D22B2B">CI</code>    | Automate all checks without installatino and configuring tools.  |
| <code style="color:#5D3FD3">make</code>  | Entry point into repository. Useful tool.                        |

---
layout: full
---

# What is style?<MarkerX color="#0096FF" title="style" />

<Image src="/assets/no-style.png" />

---
layout: center
---

# Style it's about code formatting<MarkerX color="#0096FF" title="style" />

<ul>
    <li v-click>The set of rules, that needs to be follow.</li>
    <li v-click>For example: len of indent: tab, 4 space, 2 space, etc.</li>
    <li v-click>Maximum line length (wrap long lines).</li>
    <li v-click>Spaces around operators and after commas.</li>
    <li v-click>Blank lines between functions/classes for readability.</li>
    <li v-click>Order of imports (standard, third-party, local).</li>
    <li v-click>The type of quotes (sigle or double).</li>
</ul>

---
layout: full
---

# [`cqfn/aibolit`](https://github.com/cqfn/aibolit)<MarkerX color="#0096FF" title="style" />

<Image src="/assets/aibolit-issue.png" />

---
layout: full
---

# Painstacking work or magic?<MarkerX color="#0096FF" title="style" />

<Image src="/assets/aibolit-pr.png" />

---
layout: center
---

# Code formatters for Python

<ul>
    <li v-click><code>black</code> — classic way (nondeterministic changes on edge cases).</li>
    <li v-click><code>blue</code> — more configurable, a little bit rules changed (writen on Python — slow on big projects).</li>
    <li v-click><code>isort</code> — sorts imports into standard/third-party/local groups</li>
    <li v-click><code>ruff</code> — linter + formatter, fast and all-in-one (writen on Rust ⚡)</li>
    <li v-click><code>autopep8</code> — fixes PEP8 violations automatically</li>
    <li v-click><code>yapf</code> — flexible formatting based on style config</li>
</ul>

---
layout: full
---

# [<span class="mono-text">Ruff</span>](https://docs.astral.sh/ruff/)<MarkerX color="#0096FF" title="style" />

<Image src="/assets/ruff.png" />

---
layout: center
---

# Why Ruff?<MarkerX color="#0096FF" title="style" />

<ul>
  <li v-click>Very fast on real repositories, so it is easy to run constantly.</li>
  <li v-click>Deterministic formatting with minimal configuration overhead.</li>
  <li v-click>One ecosystem for both formatting and linting in the same toolchain.</li>
  <li v-click>Simple <code>uv</code> workflow: install once, run everywhere (local, hooks, CI).</li>
  <li v-click>Actively maintained and widely adopted in modern Python projects.</li>
</ul>

---
layout: two-cols
gap: 15px
---

# Ruff in action

<div v-click>

````md magic-move {lines:true, duration:300, at:1}
```python{all|all|all} [main.py]
import os,sys,math,random




def calc_sum(a,b=[]):
  total=0
  for i in a:
    if i==None:pass
    elif type(i)==int: total+=i
    else: total+=int(i)
  if b: total+=sum(b)
  return total

x=[1, "2", None, 3]
y=[10,20]
print(
    'Sum is '+str(calc_sum(x,y)))
print(math.pi,random.randint(1,100))
```
```python{all} [main.py]
import os, sys, math, random


def calc_sum(a, b=[]):
    total = 0
    for i in a:
        if i == None:
            pass
        elif type(i) == int:
            total += i
        else:
            total += int(i)
    if b:
        total += sum(b)
    return total


x = [1, "2", None, 3]
y = [10, 20]
print("Sum is " + str(calc_sum(x, y)))
print(math.pi, random.randint(1, 100))
```
````

</div>

::right::

<div v-click>

We can check format of this file with:

````md magic-move {duration:300, at:3}
```sh
uv run ruff format --check main.py
```
```sh
uv run ruff format main.py
```
````

````md magic-move {duration:300, at:3}
```plaintext{all}
> Would reformat: main.py
> 1 file would be reformatted
```
```plaintext{all}
> 1 file reformatted
```
````

</div>

---
layout: center
---

# Example formatter output<MarkerX color="#0096FF" title="style" />

```bash
$ uv run ruff format .
2 files reformatted, 37 files left unchanged

$ uv run ruff format . --check
Would reformat: src/lib_demo/report.py
1 file would be reformatted, 38 files already formatted
```

---
layout: two-cols-header
---

# Configure Ruff formatter<MarkerX color="#0096FF" title="style" />

::left::

`pyproject.toml`:

```toml
[tool.ruff]
line-length = 88
target-version = "py312"

[tool.ruff.format]
quote-style = "double"
indent-style = "space"
line-ending = "auto"
```

::right::

Setup tool by `uv`:

```bash
uv add --dev ruff
```

Format entire project:

```bash
uv run ruff format .
```

Check without write changes:

```bash
uv run ruff format . --check
```

---
layout: center
---

# What is linter? How it differs from formatter?<MarkerX color="#50C878" title="lint" />

<ul>
  <li v-click>Linter analyses code and reports violations of rules and best practices.</li>
  <li v-click>Formatter rewrites code style automatically (spaces, quotes, wraps, etc.).</li>
  <li v-click>Linter focuses on quality risks: unused imports, bugs, complexity, anti-patterns.</li>
  <li v-click>Formatter answer: “How code looks?” Linter answer: “Is code safe and clean?”</li>
  <li v-click>Some linter rules are auto-fixable, but many need developer decision.</li>
</ul>

---
layout: center
---

# Popular Python linters<MarkerX color="#50C878" title="lint" />

<ul>
  <li v-click><code>flake8</code> — classic plugin-based linter, many teams still use it.</li>
  <li v-click><code>pylint</code> — very strict analyzer, checks style and design smells deeply.</li>
  <li v-click><code>ruff</code> — very fast linter with large ruleset, drop-in for many flake8 plugins.</li>
  <li v-click><code>bandit</code> — security-oriented static checks for common Python vulnerabilities.</li>
</ul>

---
layout: center
---

# Why Ruff is special<MarkerX color="#50C878" title="lint" />

<ul>
  <li v-click><code>ruff</code> combines both roles: formatter (<code>ruff format</code>) and linter (<code>ruff check</code>).</li>
  <li v-click>Single tool, single config, single install path via <code>uv</code>.</li>
  <li v-click>Ruff implements rules inspired by multiple tools and plugins.</li>
  <li v-click>Examples: Pyflakes (<code>F</code>), pycodestyle (<code>E/W</code>), isort (<code>I</code>), bugbear (<code>B</code>), pyupgrade (<code>UP</code>).</li>
  <li v-click>Result: fewer tools in repo, same or stronger quality gates.</li>
</ul>

---
layout: two-cols-header
---

# Configure Ruff linter<MarkerX color="#50C878" title="lint" />

::left::

`pyproject.toml`:

```toml
[tool.ruff.lint]
select = ["ALL"]
ignore = ["D203", "D212", "COM812", "PLR0913"]

[tool.ruff.lint.per-file-ignores]
"tests/**/*.py" = ["S101", "D", "INP001", "ARG001", "ARG002"]
```

::right::

Install and run:

```bash
uv add --dev ruff
uv run ruff check .
uv run ruff check . --fix
```

With formatter in one flow:

````md magic-move {lines:true, duration:300}
```bash
uv run ruff check . --fix
uv run ruff format .
```
```bash
uv run ruff check . --fix --unsafe-fixes
uv run ruff format .
```
````

---
layout: center
---

# Example linter output<MarkerX color="#50C878" title="lint" />

```bash
$ ruff check main.py
main.py:1:1: E401 [*] Multiple imports on one line
  |
1 | import os, sys, math, random
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ E401
  |
  = help: Split imports

main.py:7:17: E711 Comparison to `None` should be `cond is None`
  |
5 |     total = 0
6 |     for i in a:
7 |         if i == None:
  |                 ^^^^ E711
8 |             pass
9 |         elif type(i) == int:
  |
  = help: Replace with `cond is None`

```

---
layout: full
---

# Let's see new [pull reqeust](https://github.com/contriboo/contriboo-lib/pull/39)<MarkerX color="#D22B2B" title="live-demo" />

<Image src="/assets/lint-pr.png" />

---
layout: center
---

# Static analyzers (recap)<MarkerX color="#FFBF00" title="types" />

We already covered theory in previous lecture, here is a practical map.

<ul>
  <li v-click><code>mypy</code>: reference checker, huge ecosystem and many plugins/extensions.</li>
  <li v-click><code>pyright</code> / <code>basedpyright</code>: very fast, strict defaults, strong IDE feedback.</li>
  <li v-click><code>pyre</code>: Meta checker, good performance, mostly used in specific stacks.</li>
  <li v-click><code>pytype</code>: Google checker with deep inference, less common in OSS tooling today.</li>
  <li v-click><code>ty</code> (Astral team): promising new checker from the same team, but still early and raw.</li>
  <li v-click>In practice: choose one primary checker and run it everywhere via <code>uv</code> + CI.</li>
</ul>

---
layout: center
---

# Why mypy in this course?<MarkerX color="#FFBF00" title="types" />

<ul>
  <li v-click>Mature and stable: predictable behavior for students and CI.</li>
  <li v-click>Rich ecosystem of plugins/extensions for real frameworks and libraries.</li>
  <li v-click>Lots of docs, examples, and community answers for every typical issue.</li>
  <li v-click>Strict mode gives clear quality gate for typed Python in educational projects.</li>
  <li v-click>We can add <code>pyright</code> as second opinion, but keep <code>mypy</code> as baseline.</li>
  <li v-click><code>ty</code> is interesting, but currently too early to be course baseline.</li>
</ul>

---
layout: two-cols-header
---

# Type checker configs (short)<MarkerX color="#FFBF00" title="types" />

::left::

`pyproject.toml` (`mypy`):

```toml
[tool.mypy]
python_version = "3.12"
strict = true
warn_unused_ignores = true
warn_return_any = true
disallow_untyped_defs = true
```

::right::

`pyrightconfig.json`:

```json
{
  "pythonVersion": "3.12",
  "typeCheckingMode": "strict",
  "include": ["src"],
  "exclude": ["tests/fixtures"]
}
```

---
layout: center
---

# Run static analysis with `uv`<MarkerX color="#D22B2B" title="run" />

```bash
$ uv add --dev mypy basedpyright
$ uv run mypy src
Success: no issues found in 27 source files

$ uv run basedpyright
0 errors, 0 warnings, 0 notes
```

---
layout: center
---

# What is `make`?<MarkerX color="#5D3FD3" title="make" />

<ul>
  <li v-click><code>make</code> is a task runner built around named targets in <code>Makefile</code>.</li>
  <li v-click>Target is a command alias: <code>make lint</code>, <code>make test</code>, <code>make check</code>.</li>
  <li v-click>Targets can depend on each other: one command can run a full pipeline.</li>
  <li v-click>It standardizes local workflow, onboarding, and CI commands.</li>
</ul>

---
layout: two-cols-header
---

# `contriboo-lib` Makefile structure<MarkerX color="#5D3FD3" title="make" />

::left::

Core quality flow:

```make
check: lint types format-check test

lint:
	uv run ruff check src tests && markdownlint-cli2 .

types:
	uv run mypy --strict ... src tests

format:
	uv run ruff format && uv run ruff check --fix -s

test:
	uv run pytest -q
```

::right::

Other groups:

- Security: `security`
- Tests: `test-cov`
- Setup: `venv`, `requirements`
- Hooks: `pre-commit`, `pre-commit-install`, `pre-commit-uninstall`
- Utility: `clean`, `help`

Important internals:

```make
.DEFAULT_GOAL := help
SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c
UV := uv
RUFF := $(UV) run ruff
```

---
layout: center
---

# Make targets map (short)<MarkerX color="#5D3FD3" title="make" />

| **Use case** | **Targets** |
| ------------ | ----------- |
| Main quality gate | `check` |
| Style and lint | `format`, `format-check`, `lint` |
| Typing | `types` |
| Tests | `test`, `test-cov` |
| Security | `security` |
| Setup | `venv`, `requirements` |
| Hooks | `pre-commit`, `pre-commit-install`, `pre-commit-uninstall` |
| Utility | `clean`, `help` |

---
layout: center
---

# Example `make` runs from `contriboo-lib`<MarkerX color="#D22B2B" title="run" />

```bash
$ make check
Running linters...
uv run ruff check src tests
markdownlint-cli2 .
Lint completed!

Checking types...
uv run mypy --strict --disallow-untyped-defs --disallow-incomplete-defs src tests
Success: no issues found in 19 source files
Type check completed!

Checking formatting...
uv run ruff format --check
50 files already formatted
Format check completed!

Running tests...
uv run pytest -q
16 passed in 0.52s
Tests completed!
```

```bash
$ make security
uv run bandit -r src/
No issues identified.
uv run pip-audit
No known vulnerabilities found
```

---
layout: two-cols-header
---

# CI strategy in `contriboo-lib`<MarkerX color="#FF7F50" title="ci" />

::left::

Workflows split by responsibility:

```text
.github/workflows/ruff.yaml
.github/workflows/mypy.yaml
.github/workflows/pytest.yaml
.github/workflows/coverage.yaml
.github/workflows/security.yaml
.github/workflows/markdownlint.yaml
```

Each one runs on `pull_request`.

::right::

Why split instead of one huge job:

<ul>
  <li v-click>Fast feedback per signal (lint/types/tests/security).</li>
  <li v-click>Easy to rerun failed check only.</li>
  <li v-click>Simple ownership of pipeline parts.</li>
  <li v-click>Clear mapping from badge/status to action.</li>
</ul>

---
layout: two-cols-header
---

# Real GitHub Actions examples<MarkerX color="#FF7F50" title="ci" />

::left::

`ruff.yaml`:

```yaml
name: ruff
on:
  pull_request:
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - uses: astral-sh/setup-uv@v7
      - run: uv sync
      - run: uv run ruff check src tests
```

::right::

`mypy.yaml`:

```yaml
name: mypy
on:
  pull_request:
jobs:
  types:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - uses: astral-sh/setup-uv@v7
      - run: uv sync
      - run: uv run mypy --strict --disallow-untyped-defs --disallow-incomplete-defs src tests
```

---
layout: center
---

# Coverage + security workflows<MarkerX color="#FF7F50" title="ci" />

```yaml
name: pytest-coverage
on:
  pull_request:
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: astral-sh/setup-uv@v7
      - run: uv sync
      - run: |
          export PYTHONPATH=$PYTHONPATH:$(pwd)/src
          uv run pytest --cov=src --cov-report=term-missing:skip-covered --cov-fail-under=70 tests/
```

```yaml
name: security
on:
  pull_request:
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - uses: astral-sh/setup-uv@v7
      - run: uv sync
      - run: uv run bandit -r src/
      - run: uv run pip-audit
```

---
layout: center
---

# Local `make` and CI mapping<MarkerX color="#FF7F50" title="ci" />

| **Local command** | **GitHub Actions workflow**       |
| ----------------- | --------------------------------- |
| `make lint`       | `ruff.yaml` + `markdownlint.yaml` |
| `make types`      | `mypy.yaml`                       |
| `make test`       | `pytest.yaml`                     |
| `make test-cov`   | `coverage.yaml`                   |
| `make security`   | `security.yaml`                   |
| `make check`      | aggregate local gate before push  |

---
layout: center
---

# Summary

<ul>
  <li v-click><code>ruff format</code> gives deterministic style with minimal setup.</li>
  <li v-click>Linters catch quality issues early: Ruff for Python, markdownlint for docs.</li>
  <li v-click>Static analyzers are short in theory, strict in practice: `uv run mypy --strict ...`.</li>
  <li v-click>`contriboo-lib` Makefile covers full dev lifecycle: setup, checks, security, hooks, cleanup.</li>
  <li v-click>CI in GitHub Actions mirrors local commands with focused workflows.</li>
</ul>

---
layout: end
---
