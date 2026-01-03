from typing import Any
from gh_contrib_demo.core.client import GithubClient


def list_repos(client: GithubClient, owner: str) -> list[dict[str, Any]]:
    resp = client.get(f"/users/{owner}/repos", params={"per_page": 100})
    return resp.json()
