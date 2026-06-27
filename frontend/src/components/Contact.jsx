import { useState } from "react"
import API from "../services/API"

export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setmessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitting....");
        try {
            const res = await API.post("contact/", {
                name,
                email,
                message,
            });
            alert("message sent successfully");
            setName("");
            setEmail("");
            setmessage("");
            console.log("success:", res.data);
        } catch (error) {
            console.log("error:", error.response);
            console.log("Data:", error.response?.data);
            alert(JSON.stringify(error.response?.data));
        };

    };

    return (
        <section id="Contact" className="py-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mx-auto">
                    Contact
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text"
                        placeholder="Name"
                        className="border p-3 w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input className="border p-3 w-full"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea className="border p-3 w-full"
                        rows="5"
                        placeholder="massage"
                        value={message}
                        onChange={(e) => setmessage(e.target.value)}
                    />


                    <button type="submit" className="bg-black text-white px-5 py-3 rounded">
                        Send
                    </button>

                </form>
            </div>
        </section>

    )
}

export default Contact
