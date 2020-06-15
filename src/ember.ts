import fs from 'fs/promises';
import path from 'path';

import ts from 'jscodeshift/parser/ts';
import js from 'jscodeshift/parser/babylon';


export function isTemplate(filePath: string) {
  let ext = path.extname(filePath);

  return ext.endsWith('hbs');
}

export function isComponentJs(filePath: string) {

}

export function isRoute(filePath: string) {

}


