import React from 'react';
import { toast } from 'react-semantic-toasts';

import 'semantic-ui-css/components/reset.min.css';
import 'semantic-ui-css/components/site.min.css';
import 'semantic-ui-css/components/container.min.css';
import 'semantic-ui-css/components/icon.min.css';
import 'semantic-ui-css/components/message.min.css';
import 'semantic-ui-css/components/header.min.css';

export const toastError = (title = 'Error', errors) => {
  let formattedErrors = 'An unknown error has occurred.';

  if (errors) {
    formattedErrors = (
      <ul>
        {Object.values(errors).map(function(error, idx) {
          return <li key={idx}>{error}</li>;
        })}
      </ul>
    );
  }

  toast({
    type: 'error',
    icon: 'exclamation triangle',
    title: title,
    description: formattedErrors,
    animation: 'fade-up',
    closeAnimation: 'fade-down',
    time: 0
  });
};
