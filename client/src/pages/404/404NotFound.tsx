function NotFound() {
    return (
        <div className="bg-white w-full flex items-center justify-center flex-col gap-2 p-10 border">
            <h2>Page Not Found</h2>
            <p>Error 404</p>
            <a href="/" className="button">Go Home</a>
        </div>
    );
}

export default NotFound;