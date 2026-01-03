from dataclasses import dataclass
from typing import Optional

@dataclass
class Repo:
    id: int
    name: str
    full_name: str
    private: bool
    description: Optional[str]
    html_url: str
    default_branch: str
    archived: bool
    disabled: bool

    @classmethod
    def from_json(cls, data: dict) -> "Repo":
        return cls(
            id=data["id"],
            name=data["name"],
            full_name=data["full_name"],
            private=data["private"],
            description=data.get("description"),
            html_url=data["html_url"],
            default_branch=data["default_branch"],
            archived=data["archived"],
            disabled=data["disabled"]
        )

