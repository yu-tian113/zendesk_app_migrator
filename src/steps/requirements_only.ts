import { Map } from "immutable";

export default async (options: Map<string, any>) => {
  const src = options.get("src");
  const editor = options.get("editor");
  const requirementsExists = editor.exists(`${src}/requirements.json`);
  const jsFileExists = editor.exists(`${src}/app.js`);
  if (requirementsExists && !jsFileExists) {
    throw new Error(`
      Requirements-only apps are independent from the framework
      and do not require migration. For more information:
      https://developer.zendesk.com/apps/docs/apps-v2/setup#specifying-app-requirements
    `);
  }
};
