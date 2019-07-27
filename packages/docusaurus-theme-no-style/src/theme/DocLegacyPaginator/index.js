/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';

function DocLegacyPaginator(props) {
  const {
    docsMetadata: {docs},
    metadata,
  } = props;

  return (
    <nav>
      {metadata.previous && docs[metadata.previous] && (
        <Link to={docs[metadata.previous].permalink}>
          <h5>Previous</h5>
          <h4>&laquo; {metadata.previous_title}</h4>
        </Link>
      )}
      {metadata.next && docs[metadata.next] && (
        <Link to={docs[metadata.next].permalink}>
          <h5>Next</h5>
          <h4>{metadata.next_title} &raquo;</h4>
        </Link>
      )}
    </nav>
  );
}

export default DocLegacyPaginator;
