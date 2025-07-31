import { useState } from "react";
const Contact = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [topic, setTopic] = useState("");
    const [errors, setErrors] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let formErrors = {};

        if (!name.trim()) {
            formErrors.name = "Name is required";
        }
        if (!message.trim()) {
            formErrors.message = "Message is required";
        }
        if (!topic.trim()) {
            formErrors.topic = "Topic is required"
        }
        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
            alert("Form submitted Successfully!")
        }

    }

    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 m-4 max-w-md">
                <input
                    type="text"
                    className="p-2 border border-gray-400 rounded"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="text-red-500 text-sm" >{errors.name}</p>}
                <input
                    type="text"
                    className="p-2 border border-gray-400 rounded"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                {errors.message && <p className="text-red-500 text-sm" >{errors.message}</p>}
                <select
                    tabIndex={4}
                    className="p-2 border border-gray-400 rounded"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                >
                    <option value="">Select Topic</option>
                    <option value="support">Support</option>
                    <option value="sales">Sales</option>
                    <option value="feedback">Feedback</option>
                </select>
                {errors.topic && <p className="text-red-500 text-sm" >{errors.topic}</p>}
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
