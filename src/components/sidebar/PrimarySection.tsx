import React, { useContext } from 'react';
import LinkMenu from './LinkMenu';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import { FiHome, FiShoppingCart, FiUser, FiTarget, FiTruck, FiDollarSign, FiCreditCard, FiSettings, FiLogOut, FiHelpCircle, FiShare2, FiEye } from 'react-icons/fi';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { TiBrush } from 'react-icons/ti';
import { GiCog } from 'react-icons/gi';
import { TbApps } from 'react-icons/tb';
import DropdownMenu from './DropdownMenu';
import { NavbarContext } from '../../contexts/NavbarContext';

const subMenuMarketing = [
    {
        name: 'Discount codes',
        url: '/'
    },
    {
        name: 'Exit intent',
        url: '/'
    },
    {
        name: 'Checkout Features',
        url: '/'
    },
    {
        name: 'Post-purchase conversion',
        url: '/'
    },
    {
        name: 'Cart abandonment',
        url: '/'
    },
    {
        name: 'Timer checkout',
        url: '/'
    },
    {
        name: 'Sell on Social',
        url: '/'
    },
    {
        name: 'Special Offer',
        url: '/'
    },
    {
        name: 'Seasonal Offer',
        url: '/'
    }
];

const subMenuCatalogue: any = [];

const PrimarySection = () => {
    const { open, setOpen } = useContext(NavbarContext);

    return (
        <>
            {open ? (
                <nav className="mb-[200px]">
                    <MenuList>
                        <div className="mb-4">
                            <LinkMenu icon={<FiHome />} textLink={'Dashboard'} linkUrl={'/dashboard'} />
                            <DropdownMenu subMenus={subMenuCatalogue} icon={<FiShoppingCart />} textLink={'Catalogue'} />
                            <LinkMenu
                                icon={<AiOutlineUnorderedList />}
                                textLink={'Orders'}
                                endIcon={<div className="bg-[#00C48C] text-xs w-6 h-6 rounded-full flex justify-center items-center text-white">14</div>}
                                linkUrl={'/'}
                            />
                            <LinkMenu icon={<FiUser />} textLink={'Customers'} linkUrl={'/'} />
                            <DropdownMenu subMenus={subMenuMarketing} icon={<FiTarget />} textLink={'Marketing'} />
                            <LinkMenu icon={<FiTruck />} textLink={'Delivery Options'} linkUrl={'/'} />
                            <LinkMenu icon={<FiDollarSign />} textLink={'Payment Options'} linkUrl={'/'} />
                            <LinkMenu icon={<TiBrush />} textLink={'Store Design'} linkUrl={'/'} />
                            <LinkMenu icon={<FiCreditCard />} textLink={'Subscription'} linkUrl={'/'} />
                            <LinkMenu icon={<GiCog />} textLink={'Integrations'} linkUrl={'/'} />
                            <LinkMenu icon={<TbApps />} textLink={'Extensions'} linkUrl={'/'} />
                            <LinkMenu icon={<FiSettings />} textLink={'Settings'} linkUrl={'/'} />
                            <LinkMenu icon={<FiLogOut />} textLink={'Log out'} linkUrl={'/'} />
                        </div>
                        <Divider />
                        <div className="mt-4">
                            <LinkMenu icon={<FiHelpCircle />} textLink={'Customer Support'} linkUrl={'/'} />
                            <LinkMenu icon={<FiShare2 />} textLink={'Share your shop'} linkUrl={'/'} />
                            <LinkMenu icon={<FiEye />} textLink={'View your shop'} linkUrl={'/'} />
                        </div>
                    </MenuList>
                </nav>
            ) : (
                <nav className="mb-[200px]">
                    <MenuList>
                        <div className="mb-4">
                            <LinkMenu icon={<FiHome />} linkUrl={'/dashboard'} />
                            <LinkMenu icon={<FiShoppingCart />} linkUrl={'/'} />
                            <LinkMenu icon={<AiOutlineUnorderedList />} linkUrl={'/'} />
                            <LinkMenu icon={<FiUser />} linkUrl={'/'} />
                            <LinkMenu icon={<FiTarget />} linkUrl={'/'} />
                            <LinkMenu icon={<FiTruck />} linkUrl={'/'} />
                            <LinkMenu icon={<FiDollarSign />} linkUrl={'/'} />
                            <LinkMenu icon={<TiBrush />} linkUrl={'/'} />
                            <LinkMenu icon={<FiCreditCard />} linkUrl={'/'} />
                            <LinkMenu icon={<GiCog />} linkUrl={'/'} />
                            <LinkMenu icon={<TbApps />} linkUrl={'/'} />
                            <LinkMenu icon={<FiSettings />} linkUrl={'/'} />
                            <LinkMenu icon={<FiLogOut />} linkUrl={'/'} />
                        </div>
                        <Divider />
                        <div className="mt-4">
                            <LinkMenu icon={<FiHelpCircle />} linkUrl={'/'} />
                            <LinkMenu icon={<FiShare2 />} linkUrl={'/'} />
                            <LinkMenu icon={<FiEye />} linkUrl={'/'} />
                        </div>
                    </MenuList>
                </nav>
            )}
        </>
    );
};

export default PrimarySection;
