import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { InvoicesData } from "../AllData";
import type { InvoicesDataTypes } from "../AllData";
import { Button } from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";


const InvoicesPage = () => {
    const invoicesData = InvoicesData as InvoicesDataTypes[]
    return(
        <div className="h-full w-full">
            <Card className="h-full">
                <CardHeader className="flex justify-between items-center">
                    <span className="capitalize font-bold text-gray-700">invoices</span>
                    <span><Button className=" cursor-pointer outline-1 outline-blue-500 bg-white text-blue-500 hover:bg-transparent">View All</Button></span>
                </CardHeader> 
                <CardContent>
                    <Table>
                        <TableBody>
                           {invoicesData.map((item,idx)=>{
                            return(
                                <TableRow key={idx} className="hover:bg-transparent text-gray-700 border-b-0">
                                    <TableCell className="flex flex-col py-3"><span className="font-bold">{item.date}</span> <span>{item.numbers}</span></TableCell>
                                    <TableCell>${item.price}</TableCell>
                                    <TableCell className=" font-bold cursor-pointer"><span><FontAwesomeIcon icon={faFilePdf} className="text-lg " /></span><span>PDF</span></TableCell>
                                </TableRow>
                            )
                           })} 
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
export default InvoicesPage;