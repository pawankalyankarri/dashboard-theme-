import AuthorsTable from "./AuthorsTable";
import ProjectsTable from "./ProjectsTable";

const TableCom = () => {
    return(
        <div className="w-full h-full grid gap-10">
            <div className="w-full h-full"><AuthorsTable/></div>
            <div className="w-full h-full"><ProjectsTable/></div>
        </div>
    )
}
export default TableCom;