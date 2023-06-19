/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

const strings = {
    title: 'Swift Ticket',
    description: 'Tailwind CSS Components',
};

// export default function Header() {
//     return (
//         <div className="navbar bg-base-100">
//             <div className="flex-1">
//                 <a className="btn btn-ghost normal-case text-xl">
//                     {strings.title}
//                 </a>
//             </div>
//             <div className="flex-none gap-2">
//                 <div className="form-control">
//                     <input
//                         type="text"
//                         placeholder="Busca..."
//                         className="input input-bordered w-24 md:w-auto"
//                     />
//                 </div>
//                 <div className="dropdown dropdown-end">
//                     <label
//                         tabIndex={0}
//                         className="btn btn-ghost btn-circle avatar">
//                         <div className="w-10 rounded-full">
//                             <img src="https://www.vhv.rs/dpng/d/409-4091658_stock-avatar-hd-png-download.png" />
//                         </div>
//                     </label>
//                     <ul
//                         tabIndex={0}
//                         className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
//                         <li>
//                             <Link href="/profile" className="justify-between">
//                                 Profile
//                                 <span className="badge">New</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <a>Configurações</a>
//                         </li>
//                         <li>
//                             <a>Encerrar sessão</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default function Header() {
    return (
        <div className="navbar bg-base-100">
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
