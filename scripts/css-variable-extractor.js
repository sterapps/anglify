const { mkdir, readdir, readFile, writeFile } = require('fs/promises');

async function main() {
  const filePaths = await getFileNames('./libs/anglify', '_variables.scss');
  const files = await Promise.all(
    filePaths.map(async path => {
      return { component: parseComponentNameFromPath(path), content: await readFile(path, 'utf8') };
    })
  );
  const componentsWithVariables = files.map(file => {
    return { component: file.component, variables: extractCssVariables(file.content) };
  });
  const dir = './apps/docs/src/assets/style-definitions';
  await mkdir(dir, { recursive: true });
  await Promise.all(
    componentsWithVariables.map(item => writeFile(`${dir}/${item.component}.json`, JSON.stringify(item.variables), 'utf8'))
  );
}

main().catch(error => {
  console.error('Failed to extract css variables:', error);
  process.exitCode = 1;
});

function extractCssVariables(content) {
  return content
    .split(';')
    .map(line => ({
      name: line.split(':')[0]?.replace(/\n/gm, ''),
      defaultValue: line.split(/\$.*:/gm)[1]?.trim(),
    }))
    .filter(variable => variable.name && variable.defaultValue);
}

function parseComponentNameFromPath(path) {
  const splittedPath = path.split('/');
  return splittedPath[splittedPath.length - 2];
}

async function getFileNames(directory, fileName) {
  const paths = await readdir(directory, { recursive: true });
  return paths.map(path => `${directory}/${path.replaceAll('\\', '/')}`).filter(path => path.endsWith(`/${fileName}`));
}
