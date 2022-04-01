# wp5_mf
Example of Webpack5 Module Federation with React, TypeScript

## Getting Started
Open terminal at ./packages/components and run following commands:
```
# 1. Install dependencies
$ yarn

# 2. Build and prepare federated modules
$ yarn build

# 3. Serve federated modules via HTTP server
$ yarn serve
```
Open terminal at ./packages/main and run following commands:
```
# 4. Install dependencies
$ yarn

# 5. Fetch federated types
$ yarn fetch-types

# 6. Start development server
$ yarn start
```
