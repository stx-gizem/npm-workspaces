## Npm Workspace Example   

Manage multiple packages in a repository. Dependencies of the packages are installed in a root npm package and shared from there. Scripts for packages, ie workspaces, can be run with a single command. Packages can create dependencies on each other.  
  
*Tested npm workspace using Nest.js in this repository*

#### Define Workspace
Define path of workspace in root package.json file

**When running a script for workspaces, it will be run according  the order here.**

    {
      "name": "npm-workspaces-example",
      "workspaces": [
	      "workspaces/workspace-core",  
	      "workspaces/workspace-b"
      ]  
    }

#### Dependency

Add `"composite": true` to root tsconfig.json file.

    {
	    "compilerOptions": {
		    "composite": "true"
	    }
    }

Add references to sub tsconfig.json files.
*workspaces/workspace-b/tsconfig.json*

    {
	    "extends": "../../tsconfig.json",
	    "compilerOptions": { ... }
	    "references": [
		    {
			    "path": "../workspace-core"
		    }
	    ]
    }

*workspaces/workspace-b/package.json*

    {  
      "name": "@stx/b",
      "private": true,
      ...
      "dependencies": {
    	  ...
    	  "@stx/core": "^1.0.0"
      }
     }

#### Install packages

When you run `npm install` in root directory, npm packages are installed for all workspaces according to their dependencies. For example, both workspaces use packages like @nestjs/cli @nestjs/common ... here. And it only installs once.

#### Run scripts for workspaces

For example "build" script defined all sub package.json files. You can run defined scripts in a single command

    npm run build --workspaces

To run script command only in existing packages

    npm run start --workspaces --if-present
   
 
