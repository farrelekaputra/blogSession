import React, { useEffect } from 'react';

const Judulweb = ({temaWeb}) => {
    useEffect(() => {
        document.title = temaWeb;
      }, [temaWeb]);

      return null;
}

export default Judulweb;