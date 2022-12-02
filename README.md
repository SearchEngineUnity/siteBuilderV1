# Site Builder V1
## Built with
* Material UI V4
* Gatsby V3
* Sanity 2.29.3
## Links to the deployed frontend and backend
* [The sanity CMS](https://sitebuilderv1.sanity.studio/)
* [The Gatsby Preview hosted on Gatsby Cloud](https://sitebuilderv1.sanity.studio/)
* [The deployed site hosted on Netlify](https://www.thecitypainters.com/)
## How to install and run the project
### Node / NPM versions
* node at v16.3.2
* npm at v8.1.2
### Install
1. Git clone project
2. `cd` into repo
3. Install Sanity cli `npm install -g @sanity/cli`
4. Install Gatsby cli `npm install -g gatsby-cli`
5. from the root folder run `npm install --legacy-peer-deps`
### Run Sanity CMS locally
1. `cd studio` from root
2. Log into Sanity account if using for the first type by typing `sanity login` and follow the prompts
3. start sanity via `sanity start`
4. if you are told you have the wrong credential you should logout using `sanity logout` and repeat step 2
5. the local sanity can be accessed on `localhost:3333`
### Run Gatsby locally
1. `cd web` from root
2. run `gatsby develop`
3. access local dev site on `localhost:8000`
4. access graphiql on `localhost:8000/___graphql`
5. to see a list of all available built pages please go to `localhost:8000/404`
