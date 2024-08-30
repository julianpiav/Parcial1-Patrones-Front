export const getElementos = async () => {
    const url = 'http://137.184.20.96:30002/elemento/todos';
    try {
        const resp = await fetch(url);
        if (!resp.ok) {
            throw new Error('Failed to fetch elementos');
        }
        const data = await resp.json();
        return data;
    } catch (error) {
        console.error('Error fetching elementos:', error);
        return [];
    }
};
