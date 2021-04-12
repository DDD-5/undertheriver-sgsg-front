import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const Tag = ({ tagColor, textColor, text }) => {
  return (
    <div
      css={{
        borderRadius: '0.125rem',
        padding: '0.125rem 0.5rem',
        marginLeft: '1rem',
        marginBottom: '1rem',
        backgroundColor: `${tagColor}`,
        color: `${textColor}`,
        width: '42px',
        textAlign: 'center',
        lineHeight: '20px',
      }}
    >
      {text}
    </div>
  );
};

export default Tag;
