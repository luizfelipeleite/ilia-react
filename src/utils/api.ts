export const fakeStoreApi: string | undefined = process.env.REACT_APP_FAKE_STORE_ENDPOINT;

export const fetchData = async (url: string, data: object) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(await response.text());
    }

    return await response.json();
}