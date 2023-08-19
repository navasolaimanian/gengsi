const Payment = () => {
    return (
        <div className="px-4">
            <h2 className="text-gray-950 font-medium my-3">Payment</h2>
            <ul className="space-y-1">
                <li>
                    <input type='checkbox' id='1' className='mr-2 border-red-600' />
                    <label htmlFor="1">Cash on Delivery</label>
                </li>
                <li>
                    <input type='checkbox' id='1' className='mr-2' />
                    <label htmlFor="1">Gengspayier</label>
                </li>
            </ul>
        </div>
    );
};

export default Payment; 