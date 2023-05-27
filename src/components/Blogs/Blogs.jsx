import React from 'react';
import { Document, Page, Text, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';


const Blogs = () => {
    const MyPDFDocument = () => (
        <Document>
            <Page>
                <Text style={{ marginBottom: '10px' }}>1.Tell us the differences between uncontrolled and controlled components.</Text>
                <Text style={{ marginBottom: '10px' }}>2. How to validate React props using PropTypes</Text>

                <Text>3.Tell us the difference between nodejs and express js.</Text>
            </Page>
        </Document>
    );

    const DownloadPDFButton = () => {
        return (
            <PDFDownloadLink document={<MyPDFDocument />} fileName="document.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading...' : 'Download PDF'
                }
            </PDFDownloadLink>
        );
    };

    return (
        <>

            <div className='text-center py-4'>
                <h3 className='text-3xl font-bold text-center my-4 text-rose-500 shadow-md p-5 rounded'>Faqs</h3>
                <div className='btn btn-error'>

                    <DownloadPDFButton />
                </div>
            </div>
            <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box w-9/12 m-auto">
                <div className="collapse-title text-xl font-medium text-rose-400">
                    Tell us the differences between uncontrolled and controlled components.
                </div>
                <div className="collapse-content">
                    <p>Uncontrolled components: Uncontrolled components are components where the form data is handled by the DOM instead of being controlled by React. They use refs to directly access the form values without explicit state management in React.
                        <br />
                        Controlled components: Controlled components are components where the form data is controlled by React. The form inputs are bound to state variables, and any changes to the form inputs are handled through event handlers, which update the state and trigger re-rendering of the component.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse border border-base-300 bg-base-100 rounded-box w-9/12 m-auto my-7">
                <div className="collapse-title text-xl font-medium text-rose-400">
                    How to validate React props using PropTypes?
                </div>
                <div className="collapse-content">
                    <p>Props and PropTypes are important mechanisms for passing read-only attributes between React components.
                        <br />
                        We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse border border-base-300 bg-base-100 rounded-box w-9/12 m-auto my-7">
                <div className="collapse-title text-xl font-medium text-rose-400">
                    What is a custom hook, and why will you create a custom hook?
                </div>
                <div className="collapse-content">
                    <p>A custom hook in React is a JavaScript function that utilizes React hooks to encapsulate reusable logic. It allows you to extract and share stateful logic between components.
                        <br />
                        You would create a custom hook to abstract complex logic or behavior that is used by multiple components, promoting code reuse, modularity, and easier maintenance. It helps in keeping components clean and focused on their specific responsibilities while abstracting away common functionality into custom hooks for better organization and reusability.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse border border-base-300 bg-base-100 rounded-box w-9/12 m-auto">
                <div className="collapse-title text-xl font-medium text-rose-400">
                    Tell us the difference between nodejs and express js. in 2 line


                </div>
                <div className="collapse-content">
                    <p>Node.js is a runtime environment that allows JavaScript to run on the server-side, while Express.js is a web application framework built on top of Node.js that provides a set of tools and features for building web applications and APIs.</p>
                </div>
            </div>
        </>
    );
};

export default Blogs;