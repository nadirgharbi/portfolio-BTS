import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

export function Email() {

  return (
    <Html lang="en">
      <Button href={"https://www.google.fr"}>Click me</Button>
    </Html>
  );
}

export default Email;