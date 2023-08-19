
import { BsFillBasketFill } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import user from '../../img/user1.jpg';
import { NavLink } from 'react-router-dom';

const User = () => {

    return (
        <div className='flex items-center col-span-2 justify-end md:order-last mr-8 md:mr-0'>
            <NavLink to={'cart'}>
                <button className='mr-2.5 text-lg'>
                    <BsFillBasketFill />
                </button>
            </NavLink>
            <button className='mr-2.5 text-lg'>
                <FontAwesomeIcon icon={faBell} />
            </button>
            <button className='mr-2.5 text-lg'>
                <FontAwesomeIcon icon={faEnvelope} />
            </button>
            <span className='text-slate-300'>|</span>
            <button>
                <img src={user} className='w-8 h-8 rounded-full object-cover ml-2.5'></img>
            </button>
        </div>
    );
};

export default User;