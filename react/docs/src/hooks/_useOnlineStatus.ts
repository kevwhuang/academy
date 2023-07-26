import React from 'react';

const useOnlineStatus = (): boolean => {
    const [isOnline, setIsOnline]: [boolean, Function] = React.useState(navigator.onLine);

    React.useEffect((): any => {
        const handleOffline = (): void => {
            setIsOnline(false);
        }

        const handleOnline = (): void => {
            setIsOnline(true);
        }

        addEventListener('offline', handleOffline);
        addEventListener('online', handleOnline);

        return (): void => {
            removeEventListener('offline', handleOffline);
            removeEventListener('online', handleOnline);
        };
    }, []);

    return isOnline;
}

export default useOnlineStatus;
