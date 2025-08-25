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
import {
  useCancelParcelMutation,
  useGetMyParcelsQuery,
} from "@/redux/features/parcel/parcel.api";
import type { IParcelItem } from "@/types/parcel.interface";
import { toast } from "sonner";

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

const CreatedParcels = () => {
  const { data } = useGetMyParcelsQuery(undefined);
  console.log(data);
  const [cancelParcel, { isLoading: isCancelling }] = useCancelParcelMutation();

  const handleCancel = async (id: string) => {
    try {
      const res = await cancelParcel({ id }).unwrap();
      if (res.success) {
        toast.success("Parcel cancelled successfully");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to cancel parcel");
    }
  };

  return (
    <div>
      <CreatedParcelModal />

      <div className="max-w-6xl mx-auto mt-8 border border-slate-400 rounded-lg shadow">
        <h1 className="text-center py-4 text-xl font-semibold">
          All My Created Parcels ({data?.data?.length || 0})
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
              <TableHead className="text-white"> Receiver info </TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-center text-white">Action</TableHead>
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
                  {item.receiver.name} ({item.receiver.email})
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      item.currentStatus === "Requested"
                        ? "bg-yellow-200 text-yellow-800"
                        : item.currentStatus === "Delivered"
                        ? "bg-green-200 text-green-800"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {item.currentStatus}
                  </span>
                </TableCell>
                <TableCell>
        {item.currentStatus === "Requested" || item.currentStatus === "Approved" ? (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="destructive"
                          size="sm"
                          disabled={isCancelling}
                        >
                          Cancel
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Cancel Parcel?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to cancel this parcel?
                            <br />
                            This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Close</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleCancel(item._id)}
                            disabled={isCancelling}
                          >
                            {isCancelling ? "Cancelling..." : "Confirm Cancel"}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  ) : (
                    <Button disabled size="sm" variant="destructive">
                      Non-Cancelable
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CreatedParcels;
