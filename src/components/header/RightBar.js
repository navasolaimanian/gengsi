import User from "./User";
import user from '../../img/user.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { fechProducts } from '../../store/product-ation';

const RightBar = (props) => {
    const dispach = useDispatch();

    const checkBoxHandler = (categoriy) => {
        dispach(fechProducts('/category/' + categoriy));
    };
    const rightBarHandler = () => {
        props.setShowLeftBar(!props.showLeftBar);
    }
    const categories2 = useSelector((state) => state.categories.categories);
    return (
        <div className="z-50 fixed md:hidden top-20 right-0 h-screen bg-primary w-60 shadow-xl rounded-lg ease-in-out p-5 border">
            {/* <User /> */}
            <div className="flex items-center [&>*]:mr-4">
                <button>
                    <img src={user} className='w-12 h-12 border rounded-full object-cover'></img>
                </button>
                <button className='mr-2.5 text-lg'>
                    <FontAwesomeIcon icon={faBell} />
                </button>
                <button className='mr-2.5 text-lg'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </button>
            </div>
            <div className="mt-4">
                <h1 className="text-gray-950 font-medium text-lg mb-2">Categories</h1>
                <ul className="[&>*]:py-3.5 [&>*]:border-b">
                    {categories2.map((category, index) => <li key={index} onClick={event => {
                        checkBoxHandler(category);
                        rightBarHandler();
                    }}>{category}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default RightBar;