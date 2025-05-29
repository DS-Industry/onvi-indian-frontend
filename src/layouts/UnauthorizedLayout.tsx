'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Layout, Menu, Button, Drawer, Grid } from 'antd';
import {
    MenuOutlined,
    CloseOutlined,
} from '@ant-design/icons';
import Logo from '@/assets/logo_title.png';
import LogoF from '@/assets/Logo.svg';

const { Content, Footer, Header } = Layout;
const { useBreakpoint } = Grid;

export default function UnauthorizedLayout({ children }: { children: React.ReactNode }) {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const screens = useBreakpoint();

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `/onvi-indian-frontend/landing/?scrollTo=${sectionId}`;
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const urlParams = new URLSearchParams(window.location.search);
        const sectionToScroll = urlParams.get('scrollTo');
        if (sectionToScroll) {
            scrollToSection(sectionToScroll);
        }
    }, []);

    const menuItems = [
        {
            key: 'about',
            label: (
                <span onClick={() => { scrollToSection('about'); setDrawerVisible(false); }}>About</span>
            ),
        },
        {
            key: 'services',
            label: (
                <span onClick={() => { scrollToSection('services'); setDrawerVisible(false); }}>Services</span>
            ),
        },
        { key: 'subscription', label: <Link href="/subscription">Subscription</Link> },
        { key: 'franchise', label: <Link href="/franchise">Franchise</Link> },
        { key: 'contacts', label: <Link href="/contacts">Contacts</Link> },
    ];

    return (
        <Layout className="min-h-screen">
            {/* Header */}
            <Header className="px-4 shadow-md flex justify-between items-center" style={{ backgroundColor: '#ffffff' }}>
                <div className="flex items-center gap-4">
                    <Link href="/landing">
                        <Image src={Logo} alt="Logo" width={250} height={180} />
                    </Link>
                    {!screens.xs && (
                        <p className="text-blue-500 font-semibold text-2xl">+91 9110943649</p>
                    )}
                </div>

                {/* Desktop Menu */}
                {screens.md ? (
                    <div className="flex items-center gap-6">
                        <Menu
                            mode="horizontal"
                            items={menuItems}
                        />
                        <Link href="/auth/signin">
                            <Button type="primary" className="bg-teal-600">Login</Button>
                        </Link>
                    </div>
                ) : (
                    <Button
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={() => setDrawerVisible(true)}
                    />
                )}

                {/* Mobile Drawer */}
                <Drawer
                    title={
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold">Menu</span>
                            <CloseOutlined onClick={() => setDrawerVisible(false)} />
                        </div>
                    }
                    placement="right"
                    closable={false}
                    onClose={() => setDrawerVisible(false)}
                    open={drawerVisible}
                >
                    <Menu
                        mode="vertical"
                        theme="light"
                        style={{ backgroundColor: '#ffffff' }}
                        items={[
                            ...menuItems,
                            {
                                key: 'login',
                                label: <Link href="/auth/signin">Login</Link>,
                            },
                        ]}
                    />
                </Drawer>
            </Header>

            {/* Content */}
            <Content className="flex-1">
                {children}
            </Content>

            {/* Footer */}
            <Footer className="bg-white mt-4">
                <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-2">
                    <div>
                        <Image src={LogoF} alt="Footer Logo" width={150} height={80} />
                        <p className="text-xs text-gray-500 mt-2">
                            &copy; All Rights Reserved. Powered by ZIXDO TECHNOLOGIES PRIVATE LIMITED
                        </p>
                    </div>

                    <div></div>

                    <div>
                        <p className="font-medium text-gray-900 mb-2">MENU</p>
                        <ul className="space-y-1 text-sm">
                            <li><Link href="/landing">Home</Link></li>
                            <li><span onClick={() => scrollToSection('about')} className="cursor-pointer text-gray-700">About</span></li>
                            <li><span onClick={() => scrollToSection('services')} className="cursor-pointer text-gray-700">Services</span></li>
                            <li><Link href="/term">Terms & Conditions</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/refund">Refunds & Cancellation</Link></li>
                        </ul>
                    </div>
                </div>
            </Footer>
        </Layout>
    );
}
