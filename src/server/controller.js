export const homePage = () => null;

export const helloPage = () => ({
    hello: { message: 'Server-side preloaded message' },
});

export const helloAsyncPage = () => ({
    hello: { message: 'Server-side preloaded async message' },
});

export const helloEndpoint = num => ({
    serverMessage: `Recieved ${num}`,
});
