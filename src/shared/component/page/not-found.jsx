import React from 'react';
import Helmet from 'react-helmet';

const title = 'Page not found';

const NotFoundPage = () =>
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
            </div>
        </div>
    </div>;

export default NotFoundPage;
