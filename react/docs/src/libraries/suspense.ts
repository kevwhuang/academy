function suspense(promise: any): { read: Function } {
    let result: any = null;
    let status: string = 'pending';

    let suspender: any = promise.then(
        (res: any) => {
            status = 'success';
            result = res;
        },
        (error: Error) => {
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
