

const Condition = () => {
    return (
        <div className="border-b-2">
            <h2 className="text-gray-950 font-medium my-3">Condition</h2>
            <ul className="space-y-1">
                <li>
                    <input type='checkbox' id='1' className='mr-2' />
                    <label htmlFor="1">New Stuff</label>
                </li>
                <li>
                    <input type='checkbox' id='1' className='mr-2 mb-4' />
                    <label htmlFor="1">Second Hand</label>
                </li>
            </ul>


        </div>
    );
};

export default Condition;