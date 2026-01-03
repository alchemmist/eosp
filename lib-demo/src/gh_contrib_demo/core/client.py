class GithubClient:
    def __init__(self, token: str, base: str = "https://api.github.com", timeout: int = 10):
        self.base = base
        self.headers = {"Authorization": f"Bearer {token}", "Accept": "application/vnd.github.v3+json"}
        self.timeout = timeout

    def get(self, path: str, params = None):
        import requests, time
        url = f"{self.base}{path}"
        resp = requests.get(url, headers=self.headers, params=params, timeout=self.timeout)
        if resp.status_code == 202:
            time.sleep(1)
            return self.get(path, params)
        resp.raise_for_status()
        return resp

