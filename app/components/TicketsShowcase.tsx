'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function TicketsShowcase() {
    const [activeTab, setActiveTab] = useState(0);

    function handleTabChange(index: number) {
        setActiveTab(index);
    }

    return (
        <div className="tickets-showcase flex flex-col items-center justify-center">
            <div className="tabs tabs-boxed">
                <button
                    className={
                        `tab tab-md` + (activeTab == 0 ? ' tab-active' : '')
                    }
                    onClick={() => handleTabChange(0)}>
                    18/11
                </button>
                <button
                    className={
                        `tab tab-md` + (activeTab == 1 ? ' tab-active' : '')
                    }
                    onClick={() => handleTabChange(1)}>
                    19/11
                </button>
                <button
                    className={
                        `tab tab-md` + (activeTab == 2 ? ' tab-active' : '')
                    }
                    onClick={() => handleTabChange(2)}>
                    24/11
                </button>
                <button
                    className={
                        `tab tab-md` + (activeTab == 3 ? ' tab-active' : '')
                    }
                    onClick={() => handleTabChange(3)}>
                    25/11
                </button>
                <button
                    className={
                        `tab tab-md` + (activeTab == 4 ? ' tab-active' : '')
                    }
                    onClick={() => handleTabChange(4)}>
                    26/11
                </button>
            </div>
        </div>
    );
}
