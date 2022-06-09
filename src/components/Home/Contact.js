import React, { useState } from 'react';


const FORM_ENDPOINT = "https://public.herotofu.com/v1/70463870-e7c0-11ec-b069-efe5ca590096";

const Contact = () => {
    const [status, setStatus] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();

        // Anything you need to inject dynamically
        const injectedData = {
            DYNAMIC_DATA_EXAMPLE: 123,
        };
        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        Object.assign(data, injectedData);

        fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                // It's likely a spam/bot request, so bypass it to validate via captcha
                if (response.status === 422) {
                    Object.keys(injectedData).forEach((key) => {
                        const el = document.createElement("input");
                        el.type = "hidden";
                        el.name = key;
                        el.value = injectedData[key];

                        e.target.appendChild(el);
                    });

                    e.target.submit();
                    throw new Error("Please finish the captcha challenge");
                }

                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }

                return response.json();
            })
            .then(() => setStatus("We'll be in touch soon."))
            .catch((err) => setStatus(err.toString()));
    };

    if (status) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">{status}</div>
            </>
        );
    }
    return (

        <section id='contact' className="bg-[#FAF0D765] dark:bg-gray-900">
            <div className="container px-4 py-16 mx-auto lg:flex flex-col md:flex-row lg:items-center md:gap-8">
                <h2 className="text-3xl min-w-fit font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                    Feel free to message me.
                </h2>

                <form
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                >
                    <div className="mb-3 pt-0">
                        <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <div className="mb-3 pt-0">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <div className="mb-3 pt-0">
                        <textarea
                            placeholder="Your message"
                            name="message"
                            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <div className="mb-3 pt-0">
                        <button
                            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            Send a message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;