/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

const strings = {
    title: 'Swift Ticket',
    description: 'Tailwind CSS Components',
};

export default function Header() {
    return (
        <div className="navbar bg-neutral">
            <div className="navbar-start"></div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-3xl">
                    {strings.title}
                </a>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://www.vhv.rs/dpng/d/409-4091658_stock-avatar-hd-png-download.png" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a>Configurações</a>
                        </li>
                        <li>
                            <a>Encerrar sessão</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
