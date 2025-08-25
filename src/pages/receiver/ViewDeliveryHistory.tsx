import { CreatedParcelModal } from "@/components/modules/sender/CreateParcelModal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IParcelItem } from "@/types/parcel.interface";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useGetDeliveredParcelsQuery } from "@/redux/features/parcel/parcel.api";

const ViewDeliveryHistory = () => {


  const { data } = useGetDeliveredParcelsQuery(undefined);

  return (
    <div>
      <div className="max-w-6xl mx-auto mt-8 border border-slate-400 rounded-lg shadow">
        <h1 className="text-center py-4 text-xl font-semibold">
          All My Delivered Parcels ({data?.data?.length || 0})
        </h1>

        <Table>
          <TableHeader className="bg-slate-800 text-white">
            <TableRow>
              <TableHead className="text-white">Tracking ID</TableHead>
              <TableHead className="text-white">Type</TableHead>
              <TableHead className="text-white">Weight</TableHead>
              <TableHead className="text-white">Fee</TableHead>
              <TableHead className="text-white">Pickup location</TableHead>
              <TableHead className="text-white">Delivered from</TableHead>
              <TableHead className="text-white">Delivery Date</TableHead>
              <TableHead className="text-white"> Sender's info </TableHead>
              <TableHead className="text-white">Status</TableHead>
              {/* <TableHead className="text-center text-white">Action</TableHead> */}
            </TableRow>
          </TableHeader>

          <TableBody>
            {data?.data?.map((item: IParcelItem) => (
              <TableRow key={item._id}>
                <TableCell>{item.trackingId}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.weight} kg</TableCell>
                <TableCell>{item.fee} ৳</TableCell>
                <TableCell>{item.pickupAddress}</TableCell>
                <TableCell>{item.deliveryAddress}</TableCell>
                <TableCell>
                  {new Date(item.deliveryDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <small>
                    Name: {item?.sender.name}
                    <br />
                    Email: ({item?.sender.email})
                  </small>
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      item.currentStatus === "Requested"
                        ? "bg-yellow-200 text-yellow-800"
                        : item.currentStatus === "Delivered"
                        ? "bg-green-200 text-green-800"
                        : item.currentStatus === "Cancelled"
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {item.currentStatus}
                  </span>
                </TableCell>
                {/* <TableCell>
                  {item.currentStatus === "Requested" ||
                  item.currentStatus === "Approved" ? (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          className="bg-green-600"
                          size="sm"
                          disabled={isConfirming}
                        >
                          Confim Delivery
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Confirm Parcel?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to Confirm this parcel?
                            <br />
                            This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Close</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleConfirm(item._id)}
                            disabled={isConfirming}
                          >
                            {isConfirming
                              ? "Confirming..."
                              : "Confirm delivery"}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  ) : (
                    <Button disabled size="sm" className="bg-green-600">
                      Non-Confirmable
                    </Button>
                  )}
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ViewDeliveryHistory;
