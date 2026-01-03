import pytest

from gh_contrib_demo.core.adapters import repository as repo_adapter
from gh_contrib_demo.core.entities.repository import Repo


class DummyResponse:
    def __init__(self, payload):
        self._payload = payload

    def json(self):
        return self._payload


class DummyClient:
    def __init__(self, mapping):
        self.mapping = mapping

    def get(self, path: str, params=None):
        if path not in self.mapping:
            return DummyResponse([])
        return DummyResponse(self.mapping[path])


SIMPLE_REPO_JSON = [
    {
        "id": 123,
        "name": "hello-world",
        "full_name": "octocat/hello-world",
        "private": False,
        "description": "Example repo",
        "html_url": "https://github.com/octocat/hello-world",
        "default_branch": "main",
        "archived": False,
        "disabled": False,
        "owner": {"login": "octocat"},
    }
]


def test_list_repos_returns_repo_entities():
    client = DummyClient({"/users/octocat/repos": SIMPLE_REPO_JSON})
    repos = repo_adapter.list_repos(client, "octocat")
    assert isinstance(repos, list)
    assert len(repos) == 1
    r = Repo.from_json(repos[0])
    assert isinstance(r, Repo)
    assert r.id == 123
    assert r.name == "hello-world"
    assert r.full_name == "octocat/hello-world"
    assert r.private is False
    assert r.html_url == "https://github.com/octocat/hello-world"


def test_list_repos_empty_returns_empty_list():
    client = DummyClient({"/users/ghost/repos": []})
    repos = repo_adapter.list_repos(client, "ghost")
    assert repos == []
