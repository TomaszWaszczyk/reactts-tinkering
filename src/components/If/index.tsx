import react from 'react';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

function If () {
    const [isspoilerShown, setIsSpoilerShown] = react.useState(false);
    const [isWarningShown, setIsWarningShown] = react.useState(true);

    if (isspoilerShown) {
        setIsWarningShown(false);
    }

    console.log('If component rendered');

    return (
        <>
        </>
    );
}

export default If;