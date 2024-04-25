import apiClient from "./apiClient";

const eventApi = {
    getAll: () => {
        const url = '/events';
        return apiClient.get(url);
    },
    create: (data) => {
        const url = '/events/createEvent';
        return apiClient.post(url, data);
    },
    update: (id, data) => {
        const url = `events/updateEvent/${id}`;
        return apiClient.put(url, data);
    },
    // download: (eventId) => {
    //     const url = `/events/download/${eventId}`;
    //     return apiClient.get(url, {
    //         responseType: 'blob'  // Set the responseType to blob
    //     })
    //     .then(blob => {
    //         const url = URL.createObjectURL(blob);
    //         const a = document.createElement('a');
    //         a.href = url;
    //         a.download = 'file.zip';
    //         a.click();
    //     })
    //     .catch(error => {
    //         console.error('Error downloading file:', error);
    //     });
    // },
    
};

export default eventApi;
