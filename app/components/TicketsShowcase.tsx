'use client';
import { useState } from 'react';

export default function TicketsShowcase() {
    const [activeTab, setActiveTab] = useState(0);

    function handleTabChange(index: number) {
        setActiveTab(index);
    }

    return (
        <div className="tickets-showcase flex items-center justify-center">
            <div className="tabs tabs-boxed">
                <button
                    className={
                        activeTab == 0 ? 'tab tab-md tab-active' : 'tab tab-md'
                    }
                    onClick={() => handleTabChange(0)}>
                    18/11
                </button>
                <button
                    className={
                        activeTab == 1 ? 'tab tab-md tab-active' : 'tab tab-md'
                    }
                    onClick={() => handleTabChange(1)}>
                    19/11
                </button>
                <button
                    className={
                        activeTab == 2 ? 'tab tab-md tab-active' : 'tab tab-md'
                    }
                    onClick={() => handleTabChange(2)}>
                    24/11
                </button>
                <button
                    className={
                        activeTab == 3 ? 'tab tab-md tab-active' : 'tab tab-md'
                    }
                    onClick={() => handleTabChange(3)}>
                    25/11
                </button>
                <button
                    className={
                        activeTab == 4 ? 'tab tab-md tab-active' : 'tab tab-md'
                    }
                    onClick={() => handleTabChange(4)}>
                    26/11
                </button>
            </div>
        </div>
    );
}
