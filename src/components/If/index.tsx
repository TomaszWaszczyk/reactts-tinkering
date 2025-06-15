import react from 'react';
import { useEffect } from 'react';

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