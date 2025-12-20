import { githubGraphqlRequest } from "../../lib/github/githubGraphql";
import { mapGithubRepo } from "../auth/repoMapper";

const SEARCH_QUERY = `
  query SearchRepos($query: String!, $first: Int!, $after: String) {
    search(query: $query, type: REPOSITORY, first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ... on Repository {
          id
          name
          nameWithOwner
          url
          description
          isFork
          isPrivate
          pushedAt
          stargazerCount
          forkCount
          issues(states: OPEN) {
            totalCount
          }
          primaryLanguage {
            name
          }
          owner {
            login
            id
            url
          }
        }
      }
    }
  }
`;

export async function discoverRepos({
  githubAccessToken,
  cursor,
  perPage = 20,
}: {
  githubAccessToken: string;
  cursor?: string;
  perPage?: number;
}) {
  const searchString =
    "is:public archived:false fork:false stars:>50 issues:>5";

  const data = await githubGraphqlRequest<any>(
    SEARCH_QUERY,
    {
      query: searchString,
      first: perPage,
      after: cursor ?? null,
    },
    githubAccessToken
  );

  return {
    repos: data.search.nodes,
    pageInfo: data.search.pageInfo,
  };
}
