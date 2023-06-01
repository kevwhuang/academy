function suspense(promise: Promise<any>): { read: Function } {
    let result: any = null;
    let status: string = 'pending';

    let suspender: any = promise.then(
        (res: any): void => {
            status = 'success';
            result = res;
        },
        (error: Error): void => {
            status = 'error';
            result = error;
        }
    );

    return {
        read() {
            switch (status) {
                case 'pending':
                    throw suspender;
                case 'error':
                    throw result;
                case 'success':
                    return result;
            }
        }
    };
}

export default suspense;
