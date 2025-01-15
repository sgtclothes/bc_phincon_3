/* eslint-disable react/prop-types */
export default function ErrorPage({ error }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
            <p className="text-2xl text-gray-600">Something went wrong.</p>
            <p className="text-lg text-gray-500">{error}</p>
            <a
                href="/"
                className="mt-6 inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-gray-600 px-6 py-2 rounded-md"
            >
                Go back home
            </a>
        </div>
    );
}
