/* eslint-disable react/prop-types */
export default function SubmitButton({ error }) {
    return (
        <div className="flex items-center justify-between">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Login
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}
