interface Dict<T> {
  [key: string]: T;
}



declare module 'jscodeshift/parser/babylon' {
  type File = import('@babel/types').File

  interface Parser {
    parse: (code: string) => File,
  }

  const ParseMaker: (/* always default */) => Parser;

  export default ParseMaker;
}

declare module 'jscodeshift/parser/ts' {
  type File = import('@babel/types').File

  interface Parser {
    parse: (code: string) => File,
  }

  const ParseMaker: (/* always default */) => Parser;

  export default ParseMaker;
}
