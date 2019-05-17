/* @flow */

import { getParentPath } from '../utils/fileUtilities';
import type { FileSystemEntry } from '../types';

export default function recursivelyCreateParents(
  entries: FileSystemEntry[],
  path: string,
  expand?: boolean
) {
  const next = [];

  let parent = getParentPath(path);

  while (parent) {
    const parentEntry = entries.find(e => e.item.path === parent);

    if (parentEntry) {
      if (parentEntry.item.type !== 'folder') {
        throw new Error('File path must be inside a folder');
      }
      break;
    } else {
      next.push({
        item: {
          type: 'folder',
          path: parent,
        },
        state: {
          isExpanded: !!expand,
        },
      });

      parent = getParentPath(parent);
    }
  }

  return next;
}
