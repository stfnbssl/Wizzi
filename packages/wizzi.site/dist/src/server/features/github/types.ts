/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\github\types.ts.ittf
    utc time: Mon, 10 May 2021 17:56:08 GMT
*/
import {commonTypes} from '../../common';

export type GithubRepoOptions = { 
    name: string;
    owner?: string;
    password?: string;
    token?: string;
};

export type CreateGithubRepoOptions = { 
    name: string;
    description: string;
    homepage: string;
    private: boolean;
    // Either true to enable issues for this repository or false to disable them. Default: true.
    has_issues?: boolean;
    // Either true to enable issues for this repository or false to disable them. Default: true.
    // Either true to enable projects for this repository or false to disable them. Default: true. Note: If you're creating a repository in an organization that has disabled repository projects, the default is false, and if you pass true, the API returns an error.
    has_projects?: boolean;
    // Either true to enable projects for this repository or false to disable them. Default: true. Note: If you're creating a repository in an organization that has disabled repository projects, the default is false, and if you pass true, the API returns an error.
    // Either true to enable the wiki for this repository or false to disable it. Default: true.
    has_wiki?: boolean;
    // Either true to enable the wiki for this repository or false to disable it. Default: true.
    // The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
    team_id?: number;
    // The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
    // Pass true to create an initial commit with empty README. Default: false.
    auto_init?: boolean;
    // Pass true to create an initial commit with empty README. Default: false.
    // Desired language or platform .gitignore template to apply. Use the name of the template without the extension. For example, "Haskell".
    gitignore_template: string;
    // Desired language or platform .gitignore template to apply. Use the name of the template without the extension. For example, "Haskell".
    // Choose an open source license template that best suits your needs, and then use the license keyword as the license_template string. For example, "mit" or "mpl-2.0".
    license_template: string;
    // Choose an open source license template that best suits your needs, and then use the license keyword as the license_template string. For example, "mit" or "mpl-2.0".
    // Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true
    allow_squash_merge?: boolean;
    // Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true
    // Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true
    allow_merge_commit?: boolean;
    // Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true
    // Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true
    allow_rebase_merge?: boolean;
};

export type CreateGithubBranchOptions = { 
    name: string;
    revisionFromHash: string;
};

export type IsoGitCommitter = { 
    name: string;
    email: string;
    timestamp: number;
    timezoneOffset: number;
};

export type IsoGitCommit = { 
    oid: string;
    message: string;
    tree: string;
    parent: string[];
    author: IsoGitCommitter;
    committer: IsoGitCommitter;
};

export type GithubApiRepository = { 
    name: string;
    description: string;
    private: boolean;
    url: string;
    html_url: string;
    clone_url: string;
    owner: { 
        login: string;
        url: string;
        html_url: string;
        avatar_url: string;
    };
};

export type ClonedGitRepository = commonTypes.ClonedGitRepository;
