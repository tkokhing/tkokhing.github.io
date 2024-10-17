import { REPO_NAME } from '@/lib/constants';

export function useBasePath() {
  if (process.env.GITHUB_ACTIONS) // `npm run build` in GitHub
  {
    console.log("Running in GitHub Actions CI environment");
    console.log(`${process.env.GITHUB_ACTIONS}`);
    return `${REPO_NAME}`
  }
  else // Running in local environment
  {
    // console.log("Running in local environment");
    console.log(`${process.env.NODE_ENV}`);

    if (process.env.NODE_ENV === 'development') //`npn run dev` in local
    {
      console.log("Running in local development environment");
      console.log(`${process.env.NODE_ENV}`);
      return ''
    } 
    else if (process.env.NODE_ENV === 'production')// `npm run build` in local
    {
      console.log("Running in local production environment");
      console.log(`${process.env.NODE_ENV}`);
      return  ''
    } 
    else if (process.env.NODE_ENV === 'test')//  === 'test', `npx serve ./dist`  in local 
    {
      console.log("Running in local testing environment");
      console.log(`${process.env.NODE_ENV}`);
      return  ''
    } 
  }
}