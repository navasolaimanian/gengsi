import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
const Price = () => {
    return (
        <div>
            <h2 className="text-gray-950 font-medium my-3">Price</h2>
            <div className='border-b-2'>
                <div className="border rounded-lg flex mb-4">
                    <FontAwesomeIcon icon={faDollar} className='p-3 bg-slate-200' />
                    <input type="text" placeholder="Minimum" className='p-2 w-full outline-0'></input>
                </div>
                <div className="border rounded-lg flex mb-4">
                    <FontAwesomeIcon icon={faDollar} className='p-3 bg-slate-200 outline-0' />
                    <input type="text" placeholder="Maximum" className='p-2 w-full outline-0'></input>
                </div>
            </div>
            <div className='grid grid-cols-2 mt-4 border-b-2'>
                <button className='border rounded-lg px-1 py-2 text-sm m-2'>
                    $500-$1.000
                </button>
                <button className='border rounded-lg px-1 py-2 text-sm m-2'>
                    $500-$1.000
                </button>
                <button className='border rounded-lg px-1 py-2 text-sm m-2'>
                    $500-$1.000
                </button>
                <button className='border rounded-lg px-1 py-2 text-sm m-2'>
                    $500-$1.000
                </button>
            </div>
        </div>
    );
};

export default Price;