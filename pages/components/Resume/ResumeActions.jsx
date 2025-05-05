import React from 'react';
import Button from '../UI/Button';
import { FileDown, Eye } from 'lucide-react';

const ResumeActions = ({ resumeUrl }) => (
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <Button
      variant="primary"
      size="lg"
      icon={<FileDown />}
      onClick={() => window.open(resumeUrl, '_blank')}
    >
      Download CV (PDF)
    </Button>

    <Button
      variant="outline"
      size="lg"
      icon={<Eye />}
      onClick={() => window.open(resumeUrl, '_blank')}
    >
      View Online
    </Button>
  </div>
);

export default ResumeActions;