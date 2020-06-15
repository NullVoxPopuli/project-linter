import fs from 'fs/promises';
import path from 'path';

import ts from 'jscodeshift/parser/ts';
import js from 'jscodeshift/parser/babylon';

export async function readFile(filePath: string) {
  let source = await fs.readFile(filePath, { encoding: 'utf-8' });
  let parser = parserFor(filePath);

  return { source, parser };
}

export function parserFor(filePath: string) {
  let ext = path.extname(filePath);

  switch (true) {
    case ext === '.js':
      return js();
    case ext === '.ts':
      return ts();
  }
}

export function isTemplate(filePath: string) {
  let ext = path.extname(filePath);

  return ext === '.hbs';
}

export async function isComponentJs(filePath: string) {
  let { source, parser } = await readFile(filePath);

  if (!parser) {
    return false;
  }


  let root = parser.parse(source);

  root.find('ImportDeclaration').forEach(i => {
    console.log(i);
  });

}

export function isRoute(filePath: string) {
  let { source, parser } = await readFile(filePath);

  if (!parser) {
    return false;
  }



}


