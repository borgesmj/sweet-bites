const ShoppingBag = () => {
    return (
        <div className="relative before:bg-red-500 before:absolute before:top-0 before:right-0 before:w-4 before:h-4 before:content-['4'] before:rounded-full before:text-white before:text-center before:font-bold before:text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56Zm0,144H40V88H216V200Zm-40-88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z">
                </path>
            </svg>
        </div>
    )
}

export default ShoppingBag