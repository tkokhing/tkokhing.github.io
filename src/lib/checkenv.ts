import { REPO_NAME } from '@/lib/constants';

export function backupuseBasePath(): string {
  const { GITHUB_ACTIONS, NODE_ENV } = process.env;

  if (GITHUB_ACTIONS) {
    console.log("Running in GitHub Actions CI environment");
    console.log(GITHUB_ACTIONS);
    return REPO_NAME;
  }

  console.log(NODE_ENV);
  switch (NODE_ENV) {
    case 'development':
      console.log("Running in local development environment");
      break;
    case 'production':
      console.log("Running in local production environment");
      break;
    case 'test':
      console.log("Running in local testing environment");
      break;
    default:
      console.log("Unknown environment");
  }

  return '';
}
