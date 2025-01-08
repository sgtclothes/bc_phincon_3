function App() {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img
                                    className="block lg:hidden h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                                <img
                                    className="hidden lg:block h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                <span className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Home
                                </span>
                                <span className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Features
                                </span>
                                <span className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Examples
                                </span>
                                <span className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Pricing
                                </span>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                type="button"
                                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            >
                                <span className="sr-only">View notifications</span>
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-2.958 2.087L14.582 18H3a1 1 0 10 0-2h11.582l-4.29-4.29a1 1 0 00-1.416 0L5 18a1 1 0 102 0V8a1 1 0 00-1 1h5a1 1 0 001-1v11a1 1 0 001 1h2a1 1 0 100-2h-5a1 1 0 00-.958-.281z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="px-4 py-8 sm:px-0">
                    <h1 className="text-4xl font-bold text-white">Welcome to Workflow</h1>
                    <p className="mt-2 text-xl text-gray-200 max-w-md mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </div>
            </main>
        </>
    );
}
export default App;
