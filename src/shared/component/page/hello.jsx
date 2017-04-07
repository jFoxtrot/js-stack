import React from 'react';
import Helmet from 'react-helmet';

import HelloButton from '../../container/hello-button';
import Message from '../../container/message';

const title = 'Hello page';

const HelloPage = () =>
    <div className="container mt-4">
        <Helmet
          title={title}
          meta={[
              { name: 'description', content: 'Hello page' },
              { name: 'og:title', content: title },
          ]}
        />
        <div className="row">
            <div className="col-12">
                <h1>{title}</h1>
                <Message />
                <HelloButton />
            </div>
        </div>
    </div>;

export default HelloPage;
