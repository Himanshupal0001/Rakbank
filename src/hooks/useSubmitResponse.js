import { BASE_URL } from '../utils/constant'

function useSubmitResponse() {
    const handleSubmit = async (formData) => {
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(formData)
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            if (window.confirm('Response submitted succesfully')) {
                window.location.reload();
            }
        }
        catch (err) {
            console.error(err);
            if (alert('Something went wrong')) {
                window.location.reload();
            }
        }
    }

    return { handleSubmit }
}

export default useSubmitResponse;