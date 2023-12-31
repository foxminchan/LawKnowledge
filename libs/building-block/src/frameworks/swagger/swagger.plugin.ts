/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

function CaseInsensitiveFilterPlugin(): {
  fn: {
    opsFilter: (
      taggedOps: {
        filter: (
          argument: (_tagObject: unknown, tag: string) => boolean,
        ) => unknown;
      },
      phrase: string,
    ) => {
      filter: (
        argument: (_tagObject: unknown, tag: string) => boolean,
      ) => unknown;
    };
  };
} {
  return {
    fn: {
      opsFilter: (
        taggedOps: {
          filter: (
            argument: (_tagObject: unknown, tag: string) => boolean,
          ) => unknown;
        },
        phrase: string,
      ) => {
        return taggedOps.filter((_tagObject: unknown, tag: string): boolean =>
          tag.toLowerCase().includes(phrase.toLowerCase()),
        ) as {
          filter: (
            argument: (_tagObject: unknown, tag: string) => boolean,
          ) => unknown;
        };
      },
    },
  };
}

const swaggerOptions = {
  docExpansion: 'list',
  filter: true,
  showRequestDuration: true,
  tryItOutEnabled: true,
  persistAuthorization: true,
  plugins: [CaseInsensitiveFilterPlugin],
  operationsSorter: (
    a: { get: (argument: string) => string },
    b: { get: (argument: string) => string },
  ) => {
    const methodsOrder = [
      'get',
      'post',
      'put',
      'patch',
      'delete',
      'options',
      'trace',
    ];
    let result =
      methodsOrder.indexOf(a.get('method')) -
      methodsOrder.indexOf(b.get('method'));

    if (result === 0) result = a.get('path').localeCompare(b.get('path'));

    return result;
  },
};

export { swaggerOptions };
