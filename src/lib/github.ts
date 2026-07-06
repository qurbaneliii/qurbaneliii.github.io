export type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  updated_at: string;
  size: number;
  fork: boolean;
  archived: boolean;
};

export async function fetchPublicRepos(): Promise<GitHubRepo[]> {
  const response = await fetch('https://api.github.com/users/qurbaneliii/repos?per_page=100&sort=updated');

  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.status}`);
  }

  const repos = (await response.json()) as GitHubRepo[];

  return repos
    .filter((repo) => !repo.fork && !repo.archived && repo.name !== 'qurbaneliii.github.io')
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
}
