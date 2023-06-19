export default function TicketsShowcase() {
    return (
        <div className="tickets-showcase flex items-center justify-center">
            <div className="join">
                <input
                    type="radio"
                    name="date"
                    aria-label="18/11"
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary join-item"
                />
                <input
                    type="radio"
                    name="date"
                    aria-label="19/11"
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary join-item"
                />
                <input
                    type="radio"
                    name="date"
                    aria-label="24/11"
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-neutral join-item"
                />
                <input
                    type="radio"
                    name="date"
                    aria-label="25/11"
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-neutral join-item"
                />
                <input
                    type="radio"
                    name="date"
                    aria-label="26/11"
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-neutral join-item"
                />
            </div>
        </div>
    );
}
