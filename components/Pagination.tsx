import { TDirection } from "../types";

interface IpropType {
    page: number,
    pageCount: number
}

const Pagination = ({ page, pageCount }: IpropType) => {

    function isNextDisabled(): boolean {
        return page >= pageCount
    }

    function isPrevDisabled(): boolean {
        return page <= 1
    }

    async function handlePaginate(direction: TDirection) {

        if (direction === 1 && isNextDisabled()) {
            return
        }

        if (direction === -1 && isPrevDisabled()) {
            return
        }

    }

    return (
        <div className="flex justify-center mt-24">
            <button
                onClick={() => handlePaginate(-1)}
                className={`bg-primary py-2 px-4 text-white w-24 rounded ml-4 hover:bg-primary-dark ${isNextDisabled() ? "disabled" : ""}`}>Previous</button>
            <button
                onClick={() => handlePaginate(+1)}
                className={`bg-primary py-2 px-4 text-white w-24 rounded ml-4 hover:bg-primary-dark ${isPrevDisabled() ? "disabled" : ""}`}>Next</button>
        </div>
    );
}

export default Pagination;