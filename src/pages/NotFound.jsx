import React from 'react';
import { ShieldAlert } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import EmptyState from '../components/EmptyState';

const NotFound = () => {
  return (
    <PageTransition>
      <div className="py-20">
        <EmptyState
          icon={ShieldAlert}
          title="Page Not Found"
          description="The address you navigated to could not be located. It might have been moved or doesn't exist anymore."
          buttonText="Return to Homepage"
        />
      </div>
    </PageTransition>
  );
};

export default NotFound;
