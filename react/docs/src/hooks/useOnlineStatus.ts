import React from 'react';

const useOnlineStatus = (): boolean => {
    const getSnapshot = (): boolean => {
        return navigator.onLine;
    }

    const subscribe = (cb: any): any => {
        addEventListener('offline', cb);
        addEventListener('online', cb);

        return (): void => {
            removeEventListener('offline', cb);
            removeEventListener('online', cb);
        };
    }

    return React.useSyncExternalStore(subscribe, getSnapshot);
}

export default useOnlineStatus;
